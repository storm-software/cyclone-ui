/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

"use client";

import { ContextMenu } from "@cyclone-ui/context-menu";
import { Field } from "@cyclone-ui/field";
import type { FieldLabelPlacement, FormControlSize } from "@cyclone-ui/helpers";
import {
  FieldNotchedOutline,
  getFormControlAriaProps,
  getFormSizeScale,
  getFormSizeToken,
  getSpaced,
  useFieldHasValidationMessage,
  useFieldLabelDefaults,
  useFieldLabelPlacement,
  useFieldVariant,
  useFormControl
} from "@cyclone-ui/helpers";
import { ChevronDown } from "@cyclone-ui/icons";
import { ControlUnderline } from "@cyclone-ui/input";
import type { SelectOption } from "@stryke/types/form";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  isWeb,
  styled,
  Text,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { XStack } from "@tamagui/stacks";
import type { ReactNode } from "react";
import {
  Children,
  isValidElement,
  Suspense,
  use,
  useCallback,
  useMemo,
  useRef,
  useState
} from "react";
import type { ViewStyle } from "react-native";
import type { SelectOptionEntry } from "./options";
import {
  getItemLabel,
  getSearchMatch,
  getTypeaheadMatch,
  SEARCHABLE_OPTION_COUNT
} from "./options";
import { SelectItem, SelectItems } from "./SelectItems";
import { SelectTextBox } from "./SelectTextBox";
import { SelectNativeValue } from "./SelectValue";
import type { SelectChangeEventHandler, SelectContextProps } from "./types";
import {
  getSelectSize,
  getSelectVisualFocus,
  SelectBehaviorContext,
  SelectContext
} from "./utilities";

// Selects float their field label by default.
const FLOATING_LABEL = { variant: "floating" } as const;

// Raised on the field while typed characters match no option.
const NO_MATCH_MESSAGE = {
  code: "select.no-match",
  message: "No option matches what you typed",
  type: "danger"
} as const;

// Characters typed within this many milliseconds build one search.
const TYPEAHEAD_TIMEOUT = 1000;

/**
 * The `Select.Items.Item`s among `children`, else the field's `items`: what
 * typing on the select matches, and what the search filter counts.
 */
// ponytail: only sees items written inside the select's JSX, not ones a
// custom component renders; give the field `items` in that case.
const getSelectOptions = (
  children: ReactNode,
  items?: SelectOption[]
): SelectOptionEntry[] => {
  const options: SelectOptionEntry[] = [];
  const visit = (node: ReactNode) =>
    Children.toArray(node).forEach(child => {
      if (
        !isValidElement<{
          children?: ReactNode;
          value?: unknown;
          disabled?: boolean;
        }>(child)
      ) {
        return;
      }

      if (child.type === SelectItem) {
        options.push({
          value: String(child.props.value),
          label: getItemLabel(child.props.children, child.props.value),
          disabled: Boolean(child.props.disabled)
        });
      } else {
        visit(child.props.children);
      }
    });
  visit(children);

  return options.length > 0 || !items
    ? options
    : items.map(item => ({
        value: String(item.value),
        label: item.name,
        disabled: Boolean(item.disabled)
      }));
};

// A plain stack rather than `styled(XGroup)` so `transition` reaches the
// rendered frame and the border and focus ring animate; see `InputGroup`.
const SelectGroup = styled(XStack, {
  displayName: "Select",
  context: SelectContext,
  transition: "200ms",
  position: "relative",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: "surface",
  borderWidth: 1,
  borderColor: "hairline hover:primary-hovered focus-visible:primary-active",
  outlineStyle: "none",
  // this fixes a flex bug where it overflows container
  boxShadow: "none focus-visible:ring-offset",
  gap: "zero",
  borderRadius: "control",
  // this fixes a flex bug where it overflows container
  minWidth: 0,
  tabIndex: 0,
  variants: {
    focused: {
      true: {
        boxShadow: "ring-offset",
        borderColor: "primary-active"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "primary hover:primary-hovered"
      }
    },

    // The radius is styled by the `.resolve` below, as it depends on the
    // size.
    variant: {
      outlined: {},
      underlined: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "hairline hover:primary-hovered focus-visible:primary",
        boxShadow: "none focus-visible:none"
      },
      inlined: {}
    },

    // Styled by the `.resolve` below because the geometry depends on
    // `variant`, `labelPlacement` and `circular`.
    frameSize: styled.dynamic<FormControlSize>(),

    labelPlacement: styled.dynamic<FieldLabelPlacement>(),

    disabled: {
      true: {
        backgroundColor: "surface-disabled",
        borderColor:
          "primary-disabled hover:primary-disabled press:primary-disabled focus:primary-disabled",
        userSelect: "none",
        cursor: "not-allowed",
        outlineStyle: "press:none focus:none"
      }
    }
  } as const,
  defaultVariants: {
    frameSize: "md",
    disabled: false,
    focused: false,
    variant: "outlined"
  }
}).resolve(props => {
  const sized = getSelectSize(
    (props.frameSize as FormControlSize | undefined) ?? "md",
    {
      labelPlacement: props.labelPlacement as FieldLabelPlacement | undefined,
      circular: (props as { circular?: boolean }).circular
    }
  );
  // `FieldNotchedOutline` draws a notched field's border instead; the
  // padding keeps the content where the border left it.
  const notched = props.labelPlacement === "border";

  return sized
    ? {
        // The full 3px ring overwhelms a small select, so use the 1px ring.
        boxShadow:
          props.focused &&
          props.frameSize === "sm" &&
          props.variant !== "underlined"
            ? "ring-subtle-offset"
            : undefined,
        height: sized.height,
        minHeight: sized.minHeight,
        paddingHorizontal: notched ? 1 : 0,
        paddingVertical: notched ? 1 : undefined,
        borderWidth: notched ? 0 : undefined,
        // underlined selects round only their top corners; inlined ones none.
        ...(props.variant === "underlined"
          ? {
              borderTopLeftRadius: sized.borderRadius,
              borderTopRightRadius: sized.borderRadius,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0
            }
          : { borderRadius: sized.borderRadius })
      }
    : undefined;
});

const SelectSeparator = styled(View, {
  displayName: "Select",
  context: SelectContext,
  // Fades in over 200ms when the separator mounts. The object form with an
  // `enter` key keeps a hover/focus restyle during the fade from snapping it
  // to full opacity: Tamagui only re-renders (instead of emitting styles with
  // the mount-time "no animation" flag) when `transition` names `enter`.
  // The color lives on a child: a `group-hover/field` color on this element
  // stuck at the hovered value after the pointer left.
  transition: { duration: "200ms", enter: "200ms" },
  opacity: "enter:0",
  width: 1,
  flexShrink: 0,
  height: "60%",
  marginVertical: "zero",
  variants: {
    variant: {
      outlined: {},
      underlined: {
        width: 0
      },
      inlined: {}
    }
  } as const,
  defaultVariants: {
    variant: "outlined"
  }
});

type SelectTriggerProps = GetProps<typeof Field.Icon>;

const SelectTrigger = createStyledHOC(
  Field.Icon,
  (props: SelectTriggerProps, forwardedRef) => {
    const { open, size } = SelectContext.useStyledContext();

    return (
      <Field.Icon
        ref={forwardedRef}
        {...props}
        controlSize={size}
        render="span"
        role={undefined}
        pointerEvents="none">
        {/* `Field.Icon` clones its direct child with a `style` prop, which
            stops the motion driver from animating it, so the rotating
            wrapper sits one level down. */}
        <View>
          <View
            // Points up while the menu is open. The rotation lives on a
            // wrapper because react-native-svg drops a `transform` style on
            // the icon.
            transition="200ms"
            rotate={open ? "180deg" : "0deg"}
            alignItems="center"
            justifyContent="center">
            <ChevronDown
              size={24 * getFormSizeScale(size)}
              // Follows the field icon's hover color, which already fades in
              // step with the border; its own color transition would restart
              // on every frame of that one and finish ~200ms late.
              color="currentColor"
              style={{ transition: "none" } as ViewStyle}
            />
          </View>
        </View>
      </Field.Icon>
    );
  },
  { displayName: "Select" }
);

const SelectTextBoxImpl = createStyledHOC(
  SelectTextBox,
  (
    {
      children,
      ...props
    }: GetProps<typeof SelectTextBox> & Partial<SelectContextProps>,
    forwardedRef
  ) => {
    const { focused, disabled, size, variant, circular } =
      SelectContext.useStyledContext();
    const { invalid, searchable } = use(SelectBehaviorContext);
    const themeName = useThemeName();
    const formControl = useFormControl();
    // Unmatched typing shows as an error at once, before the field shows its
    // message (which waits for blur).
    const hasValidationMessage = useFieldHasValidationMessage() || invalid;
    const labelPlacement = useFieldLabelPlacement();
    const [locallyActive, setLocallyActive] = useState(false);
    const frameSize = size;
    const underlineActive = focused || locallyActive;
    const idleColor = hasValidationMessage ? "primary" : "hairline";
    const focusColor = hasValidationMessage
      ? "primary-active"
      : "hairline-active";
    const hoverColor = hasValidationMessage
      ? "primary-hovered"
      : "hairline-hovered";
    // A call-site base replaces every lower-tier clause in v3, so restate
    // the `disabled` variant's press/focus colors that v2 kept.
    // In a field the label overlays the frame without being inside it, so
    // the frame never sees `hover`; follow the field group's hover too.
    const borderColor = `${focused ? focusColor : idleColor} hover:${focused ? focusColor : hoverColor} group-hover/field:${disabled ? "primary-disabled" : focused ? focusColor : hoverColor}${disabled ? " press:primary-disabled focus:primary-disabled" : ""} focus-visible:${focusColor}`;

    return (
      <SelectGroup
        // No own `group`: `group-hover/field` here and on the separator must
        // resolve to the enclosing Field, which also covers its label overlay.
        // Always a theme: going from none to `danger` would re-parent (and
        // remount) the children, blurring the focused text box.
        theme={invalid ? "danger" : themeName}
        // Tab goes straight to a searchable select's text input.
        {...(searchable && { tabIndex: -1 })}
        focused={focused}
        hasValidationMessage={hasValidationMessage}
        variant={variant}
        labelPlacement={labelPlacement}
        frameSize={frameSize}
        disabled={disabled}
        borderColor={borderColor}
        boxShadow={`focus-visible:${
          variant === "outlined" || variant === "inlined"
            ? size === "sm"
              ? "ring-subtle-offset"
              : "ring-offset"
            : "none"
        }`}
        onFocus={() => setLocallyActive(true)}
        onBlur={(event: any) => {
          if (!event.currentTarget?.contains?.(event.relatedTarget)) {
            setLocallyActive(false);
          }
        }}
        transition="200ms">
        <XGroup display="contents" disabled={disabled}>
          <SelectTextBox
            {...props}
            paddingLeft={
              variant === "underlined"
                ? 0
                : getSpaced(getFormSizeToken(frameSize)) * 0.25
            }>
            <XGroup.Item flex={1} minWidth={0} height="100%">
              <View
                flex={1}
                minWidth={0}
                flexDirection="row"
                alignItems="center">
                {children}
                {formControl && (
                  // The field's status icon; a span, as the text box is a
                  // button.
                  <Field.ThemeIcon
                    position="end"
                    render="span"
                    role={undefined}
                  />
                )}
              </View>
            </XGroup.Item>

            {!disabled && (
              <>
                <XGroup.Item>
                  <SelectSeparator ref={forwardedRef}>
                    <View
                      width="100%"
                      height="100%"
                      // Keep group color updates independent of the entrance fade.
                      backgroundColor={`${focused ? focusColor : idleColor} group-hover/field:${focused ? focusColor : hoverColor}`}
                      transition="200ms"
                    />
                  </SelectSeparator>
                </XGroup.Item>

                <XGroup.Item>
                  <SelectTrigger />
                </XGroup.Item>
              </>
            )}
          </SelectTextBox>
          {variant === "underlined" && (
            <ControlUnderline
              bottom={-1}
              focused={underlineActive}
              disabled={disabled}
              backgroundColor={disabled ? "primary-disabled" : focusColor}
            />
          )}
          {labelPlacement === "border" && (
            <FieldNotchedOutline
              borderColor={borderColor}
              borderRadius={circular ? 100_000 : "control"}
            />
          )}
        </XGroup>
      </SelectGroup>
    );
  },
  { displayName: "Select" }
);

interface SelectFallbackProps {
  name?: string;
  value?: string;
  placeholder?: string;
  size: FormControlSize;
  variant: SelectContextProps["variant"];
  disabled?: boolean;
  required?: boolean;
}

/**
 * The select in a prerendered shell: a native `<select>` drawn like the
 * closed control, which submits and validates without JavaScript. Its options
 * are the field's `items` (or just the current value).
 */
const SelectFallback = ({
  name,
  value,
  placeholder,
  size,
  variant,
  disabled,
  required
}: SelectFallbackProps) => {
  const formControl = useFormControl();
  const hasValidationMessage = useFieldHasValidationMessage();
  const labelPlacement = useFieldLabelPlacement();
  const options =
    formControl?.items ??
    (value ? [{ name: value, value, disabled: false }] : []);

  return (
    <SelectGroup
      frameSize={size}
      variant={variant}
      labelPlacement={labelPlacement}
      disabled={disabled}
      hasValidationMessage={hasValidationMessage}>
      <SelectNativeValue
        id={formControl?.id ?? name}
        // `<select>` attributes, which Tamagui's `Text` doesn't type.
        {...({
          name,
          defaultValue: value ?? "",
          required: required ? true : undefined
        } as object)}
        disabled={disabled}
        {...getFormControlAriaProps(formControl)}
        size={size}
        variant={variant}
        labelPlacement={labelPlacement}
        placeholding={!value}
        style={{ appearance: "none" }}>
        <option value="">{placeholder ?? ""}</option>
        {options.map(option => (
          <option
            key={String(option.value)}
            value={String(option.value)}
            disabled={Boolean(option.disabled)}>
            {option.name}
          </option>
        ))}
      </SelectNativeValue>
      {/* A View can't carry `color` in v3, so a Text passes it to the
          `currentColor` icon. */}
      <Text
        display="flex"
        pointerEvents="none"
        paddingHorizontal="xl"
        color={disabled ? "primary-disabled" : "primary"}>
        <ChevronDown size={24 * getFormSizeScale(size)} color="currentColor" />
      </Text>
    </SelectGroup>
  );
};

const SelectGroupImpl = createStyledHOC(
  ContextMenu,
  (
    props: Omit<
      GetProps<typeof ContextMenu>,
      "value" | "onValueChange" | "variant"
    > &
      Partial<SelectContextProps> & {
        /**
         * The current value of the select. This should be used when the select is controlled.
         */
        value?: string;

        /**
         * The initial value of the select when it is uncontrolled. This value will be used as the starting value for the select before any user interaction.
         */
        defaultValue?: string;

        /**
         * Shown while nothing is selected, by the value a `Select` renders inside a `Field` when it is given no children.
         */
        placeholder?: string;
        readOnly?: boolean;

        /**
         * Makes the text box a text input, showing the selected option,
         * whose edited text filters the options and picks the best match.
         * It keeps the focus while the menu is open (`ArrowDown` moves it to
         * the options). Where the menu opens as a bottom sheet on small
         * screens, the sheet shows its own search input.
         *
         * @defaultValue `true` with more than 10 options
         */
        searchable?: boolean;
      },
    forwardedRef
  ) => {
    // Inside a form control (such as `Field`), any prop left unset falls back
    // to the control's state, which connects the select to the form.
    const formControl = useFormControl();
    const fieldVariant = useFieldVariant();
    useFieldLabelDefaults(FLOATING_LABEL);
    const formDefaultValue = formControl?.defaultValue;
    const {
      name = formControl?.name,
      disabled = formControl?.disabled,
      readOnly = formControl?.readOnly ?? false,
      focused = formControl?.focused,
      variant = formControl ? fieldVariant : "outlined",
      children,
      onFocus = formControl?.onFocus,
      onBlur = formControl?.onBlur,
      onChange: onChangeProp,
      size = formControl?.size ?? "md",
      value = formControl
        ? formControl.formattedValue ||
          String(formControl.value ?? formDefaultValue ?? "")
        : undefined,
      defaultValue = formControl ? String(formDefaultValue ?? "") : undefined,
      placeholder,
      searchable: searchableProp,
      ...rest
    } = props;
    const formOnChange = formControl?.onChange;
    const onChange = useMemo<SelectChangeEventHandler | undefined>(
      () =>
        onChangeProp ??
        (formOnChange ? event => formOnChange(event.detail) : undefined),
      [formOnChange, onChangeProp]
    );
    const [open, setOpen] = useState(false);
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const [search, setSearch] = useState<string>();
    const inputRef = useRef<HTMLInputElement>(null);
    const [invalid, setInvalid] = useState(false);
    const [listFocused, setListFocused] = useState(false);
    const typeaheadRef = useRef({ search: "", time: 0 });
    const hasValidationMessage = useFieldHasValidationMessage();
    const visualFocus = getSelectVisualFocus(focused, open);
    const resolvedValue = value ?? uncontrolledValue;
    const fieldItems = formControl?.items;
    const options = useMemo(
      () => getSelectOptions(children, fieldItems),
      [children, fieldItems]
    );
    const searchable =
      searchableProp ?? options.length > SEARCHABLE_OPTION_COUNT;
    const setMessage = formControl?.setMessage;

    const setNoMatch = useCallback(
      (noMatch: boolean) => {
        setInvalid(noMatch);
        setMessage?.(
          NO_MATCH_MESSAGE.code,
          noMatch ? NO_MATCH_MESSAGE : undefined
        );
      },
      [setMessage]
    );

    const applyValue = useCallback(
      (nextValue: string) => {
        setUncontrolledValue(nextValue);
        onChange?.(
          new CustomEvent("change", {
            detail: nextValue
          })
        );
      },
      [onChange]
    );

    const handleOpenChanged = useCallback(
      (nextOpen: boolean) => {
        if (nextOpen && (disabled || readOnly)) {
          return;
        }

        setOpen(nextOpen);
        setListFocused(false);

        if (nextOpen) {
          onFocus?.();
        } else {
          setSearch(undefined);
          // A searchable select's field stays focused while its text input
          // keeps the focus (see `handleTextBoxFocusChange`).
          const input = inputRef.current;
          if (input !== input?.ownerDocument.activeElement) {
            onBlur?.();
          }
        }
      },
      [disabled, readOnly, onFocus, onBlur]
    );

    const handleChanged = useCallback(
      (nextValue: string) => {
        if (readOnly) return;
        applyValue(nextValue);
        setNoMatch(false);
        handleOpenChanged(false);
      },
      [applyValue, setNoMatch, handleOpenChanged, readOnly]
    );

    const handleTextBoxKey = useCallback(
      (key: string): boolean => {
        if (disabled || readOnly) return false;

        if (!searchable) {
          // Space still opens the menu, as on any button.
          if (key.length !== 1 || key === " ") return false;

          const now = Date.now();
          const state = typeaheadRef.current;
          state.search =
            now - state.time > TYPEAHEAD_TIMEOUT ? key : state.search + key;
          state.time = now;

          const match = getTypeaheadMatch(options, state.search, resolvedValue);
          if (match && match.value !== resolvedValue) {
            applyValue(match.value);
          }
          setNoMatch(!match);

          return true;
        }

        // The text input edits its own text (see `handleTextBoxInput`).
        // `ArrowDown` opens the menu, then moves focus to the options;
        // `Enter` opens or closes it, rather than submitting the form.
        if (key === "ArrowDown") {
          if (!open) {
            handleOpenChanged(true);
          } else if (listFocused) {
            return false;
          } else {
            setListFocused(true);
          }

          return true;
        }
        if (key === "Enter") {
          handleOpenChanged(!open);

          return true;
        }

        return false;
      },
      [
        applyValue,
        disabled,
        handleOpenChanged,
        listFocused,
        open,
        options,
        readOnly,
        resolvedValue,
        searchable,
        setNoMatch
      ]
    );

    // Editing a searchable select's text filters the options, opening the
    // menu, and picks the best match.
    const handleTextBoxInput = useCallback(
      (text: string) => {
        if (disabled || readOnly) return;

        setSearch(text);
        if (!open) {
          handleOpenChanged(true);
        }

        const match = text.trim() ? getSearchMatch(options, text) : undefined;
        if (match && match.value !== resolvedValue) {
          applyValue(match.value);
        }
        setNoMatch(Boolean(text.trim()) && !match);
      },
      [
        applyValue,
        disabled,
        handleOpenChanged,
        open,
        options,
        readOnly,
        resolvedValue,
        setNoMatch
      ]
    );

    // The field is focused while the text input is, or the menu is open (the
    // menu's options and search take the focus from the input). Focus moving
    // on to another control closes the menu; a press elsewhere dismisses it.
    const handleTextBoxFocusChange = useCallback(
      (nextFocused: boolean, next?: Element | null) => {
        if (nextFocused) {
          onFocus?.();
        } else if (!open) {
          onBlur?.();
        } else if (
          next &&
          !next.closest?.("[data-context-menu-item], [data-select-search]")
        ) {
          handleOpenChanged(false);
        }
      },
      [handleOpenChanged, onBlur, onFocus, open]
    );

    const behavior = useMemo(
      () => ({
        options,
        searchable,
        search,
        setSearch,
        inputRef,
        listFocused,
        invalid,
        onTextBoxKey: handleTextBoxKey,
        onTextBoxInput: handleTextBoxInput,
        onTextBoxFocusChange: handleTextBoxFocusChange
      }),
      [
        options,
        searchable,
        search,
        listFocused,
        invalid,
        handleTextBoxKey,
        handleTextBoxInput,
        handleTextBoxFocusChange
      ]
    );

    return (
      // Tamagui's popover gives its callbacks random identity keys while
      // rendering, which a Next.js Cache Components prerender only allows
      // inside a Suspense boundary. The fallback sits outside the select
      // context, whose `name` and `value` keys it would otherwise swallow.
      <Suspense
        fallback={
          <SelectFallback
            name={name}
            value={resolvedValue}
            placeholder={placeholder}
            size={size}
            variant={variant}
            disabled={disabled}
            required={formControl?.required}
          />
        }>
        <SelectContext.Provider
          // Only context keys: a styled context treats every key in its value
          // as a context prop, so spreading all props swallowed `aria-*` and
          // other DOM attributes before they reached the element. Only plain
          // values too: it gives functions random identity keys.
          circular={Boolean((rest as { circular?: boolean }).circular)}
          name={name}
          disabled={disabled}
          focused={visualFocus}
          hasValidationMessage={hasValidationMessage}
          variant={variant}
          size={size}
          value={resolvedValue}
          open={open}>
          <SelectBehaviorContext value={behavior}>
            {isWeb && name && (
              // The trigger is a button, so this carries the value when the
              // form submits.
              <input type="hidden" name={name} value={resolvedValue ?? ""} />
            )}
            <ContextMenu
              ref={forwardedRef}
              aria-readonly={readOnly || undefined}
              placement="bottom"
              {...rest}
              size={size}
              value={resolvedValue}
              onValueChange={handleChanged}
              open={open}
              onOpenChange={handleOpenChanged}>
              {children ??
                // Without children, a select in a field renders the field's items.
                (formControl && (
                  <>
                    <SelectTextBoxImpl>
                      <SelectTextBox.Value placeholder={placeholder} />
                    </SelectTextBoxImpl>
                    <SelectItems />
                  </>
                ))}
            </ContextMenu>
          </SelectBehaviorContext>
        </SelectContext.Provider>
      </Suspense>
    );
  },
  { displayName: "Select" }
);

export const Select = withStaticProperties(SelectGroupImpl, {
  TextBox: withStaticProperties(SelectTextBoxImpl, {
    Value: SelectTextBox.Value
  }),
  Items: SelectItems
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Select.TextBoxValue` is undefined on the server).
 */
export { SelectItems, SelectTextBoxImpl as SelectTextBox };
export const SelectTextBoxValue = SelectTextBox.Value;

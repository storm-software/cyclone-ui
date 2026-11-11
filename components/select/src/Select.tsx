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
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  isWeb,
  styled,
  Text,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { XStack } from "@tamagui/stacks";
import { Suspense, useCallback, useMemo, useState } from "react";
import type { ViewStyle } from "react-native";
import { SelectItems } from "./SelectItems";
import { SelectTextBox } from "./SelectTextBox";
import { SelectNativeValue } from "./SelectValue";
import type { SelectChangeEventHandler, SelectContextProps } from "./types";
import {
  getSelectSize,
  getSelectVisualFocus,
  SelectContext
} from "./utilities";

// Selects float their field label by default.
const FLOATING_LABEL = { variant: "floating" } as const;

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
  transition: { duration: "200ms", enter: "200ms" },
  opacity: "enter:0",
  // Tamagui's vertical Separator emits rules on both sides. Use the same
  // one-pixel left rule as Input so the Select and field-icon dividers match.
  borderWidth: 0,
  borderLeftWidth: 1,
  borderRightWidth: 0,
  borderTopWidth: 0,
  borderBottomWidth: 0,
  borderColor: "hairline hover:hairline-hovered",
  width: 0,
  flexShrink: 0,
  height: "60%",
  marginVertical: "zero",
  variants: {
    focused: {
      true: {
        borderColor: "hairline-active"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "primary"
      }
    },

    variant: {
      outlined: {},
      underlined: {
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0
      },
      inlined: {}
    },

    disabled: {
      true: {
        borderColor:
          "hairline-inactive hover:hairline-inactive press:hairline-inactive focus:hairline-inactive"
      }
    }
  } as const,
  defaultVariants: {
    disabled: false,
    focused: false,
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
    const formControl = useFormControl();
    const hasValidationMessage = useFieldHasValidationMessage();
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
                  <SelectSeparator
                    ref={forwardedRef}
                    focused={focused}
                    hasValidationMessage={hasValidationMessage}
                    disabled={disabled}
                    borderColor={`${focused ? focusColor : idleColor} group-hover/field:${focused ? focusColor : hoverColor}`}
                  />
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
        id={name}
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
    props: Omit<GetProps<typeof ContextMenu>, "value" | "onValueChange"> &
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
    const hasValidationMessage = useFieldHasValidationMessage();
    const visualFocus = getSelectVisualFocus(focused, open);
    const resolvedValue = value ?? uncontrolledValue;

    const handleOpenChanged = useCallback(
      (nextOpen: boolean) => {
        if (nextOpen && (disabled || readOnly)) {
          return;
        }

        setOpen(nextOpen);

        if (nextOpen) {
          onFocus?.();
        } else {
          onBlur?.();
        }
      },
      [disabled, readOnly, onFocus, onBlur]
    );

    const handleChanged = useCallback(
      (nextValue: string) => {
        if (readOnly) return;
        setUncontrolledValue(nextValue);
        onChange?.(
          new CustomEvent("change", {
            detail: nextValue
          })
        );
        handleOpenChanged(false);
      },
      [onChange, handleOpenChanged, readOnly]
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

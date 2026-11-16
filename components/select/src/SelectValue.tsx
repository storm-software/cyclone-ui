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

import { BodyText } from "@cyclone-ui/body-text";
import type { FieldLabelPlacement, FormControlSize } from "@cyclone-ui/helpers";
import {
  formSizeVariants,
  getFieldLabelInset,
  getFormControlAriaProps,
  useFieldLabelPlacement,
  useFieldShouldShowPlaceholder,
  useFieldVariant,
  useFormControl
} from "@cyclone-ui/helpers";
import type { InputVariant } from "@cyclone-ui/input";
import { getInputValueTypography } from "@cyclone-ui/input/utilities";
import { Tooltip } from "@cyclone-ui/tooltip";
import type { GetProps, ViewProps } from "@tamagui/core";
import {
  createStyledHOC,
  isWeb,
  styled,
  Text,
  Theme,
  useComposedRefs,
  useTheme,
  View
} from "@tamagui/core";
import { forwardRef, use, useLayoutEffect, useRef, useState } from "react";
import {
  getSelectContentSize,
  SelectBehaviorContext,
  SelectContext
} from "./utilities";

// A tooltip inside the select button must not become a nested press target:
// Tamagui's press handler would consume the click before the select sees it.
const ValueTooltipTrigger = forwardRef<HTMLElement, ViewProps>(
  (
    {
      onPress: _onPress,
      onPressIn: _onPressIn,
      onPressOut: _onPressOut,
      ...props
    },
    ref
  ) => <View {...props} ref={ref as any} flex={1} minWidth={0} />
);
ValueTooltipTrigger.displayName = "SelectValueTooltipTrigger";

const SelectValueFrame = styled(Text, {
  // `name` is a plain prop in v3, so the primitive uses `displayName`
  displayName: "SelectValue",
  context: SelectContext,
  transition: "200ms",
  cursor: "pointer",
  color: "emphasis",
  display: "block",
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  // The trigger renders a `<button>`, whose UA style centres its text.
  textAlign: "left",
  flexGrow: 1,
  alignItems: "center",
  backgroundColor: "hover:transparent focus:transparent",

  variants: {
    // `styled.dynamic` re-brands the helper's carrier with this package's
    // `@tamagui/web` symbol type (runtime no-op; helpers resolves another copy).
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize, env) => {
        const { valuePaddingLeft, valuePaddingRight } =
          getSelectContentSize(val);

        return {
          ...getInputValueTypography(val, env),
          paddingLeft: valuePaddingLeft,
          paddingRight: valuePaddingRight
        };
      })
    ),

    variant: styled.dynamic<InputVariant>(),

    // Styled by the `.resolve` below because the inset depends on `size`.
    labelPlacement: styled.dynamic<FieldLabelPlacement>(),

    placeholding: {
      true: {
        color: "primary-disabled"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        userSelect: "none",
        color:
          "primary-disabled hover:primary-disabled press:primary-disabled focus:primary-disabled"
      }
    }
  } as const,
  defaultVariants: {
    size: "md",
    variant: "outlined",
    disabled: false,
    placeholding: false
  }
}).resolve(props => ({
  // An underlined control's text starts flush with its left edge.
  paddingLeft: props.variant === "underlined" ? 0 : undefined,
  ...(props.labelPlacement
    ? {
        // Drop the text under a floating label by the extra height an inset
        // label adds over a border one (see `getFieldLabelInset`).
        paddingTop:
          getSelectContentSize(props.size as FormControlSize | undefined)
            .valuePaddingLeft +
          getFieldLabelInset(
            props.labelPlacement as FieldLabelPlacement,
            props.size as FormControlSize | undefined
          ) -
          getFieldLabelInset("border")
      }
    : undefined)
}));

/**
 * A native `<select>` drawn like the select's value, for its prerendered
 * fallback (see `Select`).
 */
export const SelectNativeValue = styled(SelectValueFrame, {
  displayName: "SelectValue",
  render: "select",
  height: "100%",
  margin: 0,
  borderWidth: 0,
  outlineStyle: "none",
  backgroundColor: "transparent"
});

/** A searchable select's text input, drawn like the select's value. */
const SelectInputValue = styled(
  SelectValueFrame,
  {
    displayName: "SelectValue",
    render: "input",
    cursor: "text",
    width: "100%",
    height: "100%",
    margin: 0,
    borderWidth: 0,
    outlineStyle: "none",
    backgroundColor: "transparent"
  },
  // Passes `value` and the other input props on to the `<input>`.
  { isInput: true }
);

// `Input` sets the same rule, but only on pages that render one.
const SELECT_INPUT_STYLES = `
[data-select-input]::placeholder {
  color: var(--placeholderColor);
  opacity: 1;
}
`;

export const SelectValue = createStyledHOC(
  SelectValueFrame,
  (
    {
      children,
      placeholder: placeholderProp,
      ...props
    }: GetProps<typeof SelectValueFrame> & {
      placeholder?: string;
    },
    forwardedRef
  ) => {
    const { disabled, size, value, variant, name, open } =
      SelectContext.useStyledContext();
    const {
      options,
      searchable,
      search,
      invalid,
      inputRef,
      onTextBoxInput,
      onTextBoxFocusChange
    } = use(SelectBehaviorContext);
    const theme = useTheme();
    const labelPlacement = useFieldLabelPlacement();
    // Inside a form control (such as `Field`), the value registers with the
    // form, and a resting floating label hides the placeholder.
    const formControl = useFormControl();
    const valueRef = useRef<HTMLElement>(null);
    const ref = useComposedRefs(
      forwardedRef,
      formControl?.inputRef,
      valueRef,
      searchable ? inputRef : undefined
    );
    const [truncated, setTruncated] = useState(false);
    useFieldVariant(placeholderProp);
    const shouldShowPlaceholder = useFieldShouldShowPlaceholder(value);
    const placeholder =
      !formControl || (!value && shouldShowPlaceholder)
        ? placeholderProp
        : undefined;
    // Without children, the selected value itself, then the placeholder.
    const content = children ?? (value || placeholder);
    const placeholding = !!placeholder && content === placeholder && !disabled;

    useLayoutEffect(() => {
      const element = valueRef.current;
      if (!element || typeof ResizeObserver === "undefined") return;

      const updateTruncated = () =>
        setTruncated(element.scrollWidth > element.clientWidth);
      updateTruncated();
      const observer = new ResizeObserver(updateTruncated);
      observer.observe(element);
      return () => observer.disconnect();
    }, [content, size, truncated]);

    if (searchable) {
      // While not edited, the selected option's text (or the children's).
      const label =
        typeof children === "string"
          ? children
          : (options.find(option => option.value === value)?.label ??
            value ??
            "");

      return (
        <Theme name="base">
          {isWeb && <style>{SELECT_INPUT_STYLES}</style>}
          {/* A fresh provider: every key of the select's context value is a
              context prop to its frames, which swallowed the input's
              `value`. */}
          <SelectContext.Provider>
            <SelectInputValue
              ref={ref}
              {...props}
              size={size}
              variant={variant}
              labelPlacement={labelPlacement}
              disabled={disabled}
              // `<input>` attributes, which Tamagui's `Text` doesn't type.
              {...({
                "data-select-input": "",
                id: formControl?.id ?? name,
                role: "combobox",
                "aria-expanded": Boolean(open),
                "aria-autocomplete": "list",
                "aria-required": formControl?.required ? true : undefined,
                ...getFormControlAriaProps(formControl),
                ...(invalid && { "aria-invalid": true }),
                autoComplete: "off",
                readOnly: formControl?.readOnly,
                placeholder,
                value: search ?? label,
                onChange: (event: { target: { value: string } }) =>
                  onTextBoxInput?.(event.target.value),
                onFocus: () => onTextBoxFocusChange?.(true),
                onBlur: (event: { relatedTarget?: Element | null }) =>
                  onTextBoxFocusChange?.(false, event.relatedTarget),
                style: {
                  "--placeholderColor": theme["primary-disabled"]?.variable
                }
              } as object)}
            />
          </SelectContext.Provider>
        </Theme>
      );
    }

    const selectedValue = (
      <ValueTooltipTrigger>
        <SelectValueFrame
          pointerEvents="none"
          ref={ref}
          {...props}
          size={size}
          variant={variant}
          labelPlacement={labelPlacement}
          disabled={disabled}
          placeholding={placeholding}>
          <Text
            key={placeholding ? "placeholder" : "value"}
            {...(placeholding && {
              opacity: "enter:0",
              transition: { duration: "200ms", enter: "200ms" }
            })}
            render="span"
            color="inherit"
            fontFamily="inherit"
            fontSize="inherit"
            fontWeight="inherit"
            lineHeight="inherit">
            {content}
          </Text>
        </SelectValueFrame>
      </ValueTooltipTrigger>
    );

    return (
      <Theme name="base">
        {truncated && !placeholding ? (
          <Tooltip>
            <Tooltip.Trigger asChild={true} disablePressTrigger={true}>
              {selectedValue}
            </Tooltip.Trigger>
            <Tooltip.Content>
              <View paddingVertical="2xl" paddingHorizontal="3xl">
                <BodyText>{content}</BodyText>
              </View>
            </Tooltip.Content>
          </Tooltip>
        ) : (
          selectedValue
        )}
      </Theme>
    );
  },
  {
    displayName: "SelectValue"
  }
);

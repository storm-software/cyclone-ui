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

import type { FieldLabelPlacement, FormControlSize } from "@cyclone-ui/helpers";
import {
  FieldNotchedOutline,
  getFieldLabelInset,
  getFormFontScale,
  getFormSizeScale,
  useFieldHasValidationMessage,
  useFieldLabelDefaults,
  useFieldLabelPlacement,
  useFieldShouldShowPlaceholder,
  useFieldVariant,
  useFormControl
} from "@cyclone-ui/helpers";
import type { InputContextProps } from "@cyclone-ui/input";
import { ControlUnderline } from "@cyclone-ui/input";
import { InputValue } from "@cyclone-ui/input/InputValue";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  Theme,
  useComposedRefs,
  useTheme,
  View
} from "@tamagui/core";
import { useCallback, useState } from "react";

// Text areas float their field label by default.
const FLOATING_LABEL = { variant: "floating" } as const;

const isFormControlSize = (value: unknown): value is FormControlSize =>
  value === "sm" || value === "md" || value === "lg";

const TextAreaFrame = styled(InputValue, {
  displayName: "TextArea",
  render: "textarea",
  transition: "200ms",
  // This prevents Firefox from collapsing newline-only content.
  // @ts-ignore -- forwarded as a textarea style on web.
  whiteSpace: "pre-wrap",
  height: "auto",
  minHeight: "20xl",
  paddingVertical: "xl",
  backgroundColor: "surface",
  color: "primary",
  borderWidth: 1,
  borderColor: "hairline hover:primaryHovered focus-visible:primaryActive",
  borderRadius: "control",
  boxShadow: "none focus-visible:ringOffset",
  outlineWidth: 0,
  outlineColor: "transparent",
  variants: {
    // A local `styled.dynamic`: the helpers' `formSizeVariants` carrier is
    // branded by another `@tamagui/core` copy and would not type here.
    size: styled.dynamic<FormControlSize>(size =>
      isFormControlSize(size)
        ? {
            fontSize: 16 * getFormFontScale(size),
            lineHeight:
              size === "md" ? undefined : `${24 * getFormFontScale(size)}px`,
            minHeight: 122 * getFormSizeScale(size),
            paddingHorizontal: 16 * getFormSizeScale(size),
            paddingVertical: 7 * getFormSizeScale(size)
          }
        : undefined
    ),
    focused: {
      true: {
        boxShadow: "ringOffset",
        borderColor: "primaryActive"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "primary hover:primaryHovered"
      }
    },

    variant: {
      outlined: {},
      underlined: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "hairline hover:primaryHovered focus-visible:primary",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        boxShadow: "none focus-visible:none"
      },
      inlined: {}
    },

    // Styled by the `.resolve` below because the inset depends on `size`.
    labelPlacement: styled.dynamic<FieldLabelPlacement>(),

    disabled: {
      true: {
        borderColor:
          "primaryDisabled hover:primaryDisabled focus:primaryDisabled"
      }
    }
  } as const,
  defaultVariants: {
    variant: "outlined"
  }
}).resolve(props => ({
  // The full 3px ring overwhelms a small text area, so use the 1px ring.
  boxShadow:
    props.focused && props.size === "sm" && props.variant !== "underlined"
      ? "ringSubtleOffset"
      : undefined,
  // An underlined control's text starts flush with its left edge.
  paddingLeft: props.variant === "underlined" ? 0 : undefined,
  // Drop the text under a floating label by the extra height an inset label
  // adds over a border one (see `getFieldLabelInset`).
  paddingTop: props.labelPlacement
    ? 10 * getFormSizeScale(props.size as FormControlSize | undefined) +
      getFieldLabelInset(
        props.labelPlacement as FieldLabelPlacement,
        (props.size ?? "md") as FormControlSize
      ) -
      getFieldLabelInset("border")
    : undefined
}));

// Tamagui v3 types `onFocus`/`onBlur` as an intersection of the web and
// native handlers, so accept either event (as `Input` does).
type TextAreaFocusEvent = any;

const TextAreaDecorationFrame = styled(View, {
  displayName: "TextAreaDecorationFrame",

  position: "relative",
  width: "100%",
  minWidth: 0
});

/**
 * A multiline Cyclone Input value with the same tokens and state behavior as the standard Input control.
 */
export const TextArea = createStyledHOC(
  TextAreaFrame,
  (
    props: GetProps<typeof TextAreaFrame> &
      Partial<
        Pick<InputContextProps, "size" | "focused" | "variant" | "disabled">
      >,
    forwardedRef
  ) => {
    // Inside a form control (such as `Field`), any prop left unset falls back
    // to the control's state, which connects the text area to the form.
    const formControl = useFormControl();
    const fieldVariant = useFieldVariant(props.placeholder);
    useFieldLabelDefaults(FLOATING_LABEL);
    const formOnChange = formControl?.onChange;
    const formOnBlur = formControl?.onBlur;
    const {
      rows = 3,
      render: _render,
      focused: focusedProp = formControl?.focused,
      disabled = formControl?.disabled ?? false,
      placeholderTextColor = "primaryDisabled",
      onBlur = formOnBlur
        ? // Focus moving within the text area is not a blur.
          (event: TextAreaFocusEvent) => {
            if (!event?.currentTarget?.contains?.(event.relatedTarget)) {
              formOnBlur();
            }
          }
        : undefined,
      onFocus = formControl?.onFocus,
      onChange = formOnChange
        ? (event: CustomEvent<string>) => formOnChange(event.detail)
        : undefined,
      variant = formControl ? fieldVariant : "outlined",
      name = formControl?.name,
      size = formControl?.size,
      value = formControl?.formattedValue,
      placeholder,
      style,
      ...rest
    } = props;
    const theme = useTheme();
    const shouldShowPlaceholder = useFieldShouldShowPlaceholder(
      formControl?.formattedValue
    );
    const ref = useComposedRefs(forwardedRef, formControl?.inputRef);
    const [focused, setActive] = useState(false);
    const hasValidationMessage = useFieldHasValidationMessage();
    const labelPlacement = useFieldLabelPlacement();
    const idleColor = hasValidationMessage ? "primary" : "hairline";
    const focusColor = hasValidationMessage
      ? "primaryActive"
      : "hairlineActive";
    const isFocused = focusedProp ?? focused;
    const borderColor = `${isFocused ? focusColor : idleColor} hover:${disabled ? "primaryDisabled" : isFocused ? focusColor : "primaryHovered"} focus-visible:${focusColor} group-hover/field:${disabled ? "primaryDisabled" : "primaryHovered"}`;
    const handleFocus = useCallback(
      (event: TextAreaFocusEvent) => {
        setActive(true);
        onFocus?.(event);
      },
      [onFocus]
    );
    const handleBlur = useCallback(
      (event: TextAreaFocusEvent) => {
        setActive(false);
        onBlur?.(event);
      },
      [onBlur]
    );

    const textArea = (
      <TextAreaFrame
        ref={ref}
        render="textarea"
        type="textarea"
        rows={rows}
        {...rest}
        name={name}
        size={size}
        value={value}
        onChange={onChange}
        placeholder={shouldShowPlaceholder ? placeholder : undefined}
        // The styled layer drops `placeholderTextColor` before it reaches
        // `InputValue`, so set the variable its `::placeholder` rule reads.
        style={
          {
            ...(style as object),
            "--placeholderColor":
              theme[placeholderTextColor as string]?.variable ||
              placeholderTextColor
          } as typeof style
        }
        focused={isFocused}
        hasValidationMessage={hasValidationMessage}
        variant={variant}
        labelPlacement={labelPlacement}
        disabled={disabled}
        // `FieldNotchedOutline` draws a notched field's border instead.
        borderColor={labelPlacement === "border" ? "transparent" : borderColor}
        boxShadow={`focus-visible:${
          variant === "outlined" || variant === "inlined"
            ? size === "sm"
              ? "ringSubtleOffset"
              : "ringOffset"
            : "none"
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );

    const content =
      variant === "outlined" && labelPlacement !== "border" ? (
        textArea
      ) : (
        <TextAreaDecorationFrame>
          {textArea}
          {variant === "outlined" ? (
            <FieldNotchedOutline borderColor={borderColor} />
          ) : variant === "underlined" ? (
            <ControlUnderline
              focused={isFocused}
              disabled={disabled}
              backgroundColor={disabled ? "primaryDisabled" : focusColor}
            />
          ) : null}
        </TextAreaDecorationFrame>
      );

    return formControl?.theme ? (
      <Theme name={formControl.theme}>{content}</Theme>
    ) : (
      content
    );
  },
  { displayName: "TextArea" }
);

export type TextAreaProps = GetProps<typeof TextArea>;

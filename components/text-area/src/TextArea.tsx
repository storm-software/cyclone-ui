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

import type { FieldLabelPlacement } from "@cyclone-ui/field";
import {
  FieldNotchedOutline,
  getFieldLabelInset,
  useFieldHasValidationMessage,
  useFieldLabelPlacement
} from "@cyclone-ui/field";
import type { FormControlSize } from "@cyclone-ui/helpers";
import { getFormFontScale, getFormSizeScale } from "@cyclone-ui/helpers";
import type { InputContextProps } from "@cyclone-ui/input";
import { ControlUnderline } from "@cyclone-ui/input";
import { InputValue } from "@cyclone-ui/input/InputValue";
import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, View } from "@tamagui/core";
import { useCallback, useState } from "react";

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
  backgroundColor: "surfaceElevated",
  color: "accent",
  borderWidth: 1,
  borderColor: "hairline hover:accentHover focus-visible:accentActive",
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
        borderColor: "accentActive"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "accent hover:accentHover"
      }
    },

    variant: {
      outlined: {},
      underlined: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "hairline hover:accentHover focus-visible:accent",
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
        borderColor: "accentDisabled hover:accentDisabled focus:accentDisabled"
      }
    }
  } as const,
  defaultVariants: {
    variant: "outlined"
  }
}).resolve(props => ({
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
    {
      rows = 3,
      render: _render,
      focused: focusedProp,
      disabled = false,
      placeholderTextColor = "onAccentDisabled",
      onBlur,
      onFocus,
      variant = "outlined",
      ...props
    }: GetProps<typeof TextAreaFrame> &
      Partial<
        Pick<InputContextProps, "size" | "focused" | "variant" | "disabled">
      >,
    forwardedRef
  ) => {
    const [focused, setActive] = useState(false);
    const hasValidationMessage = useFieldHasValidationMessage();
    const labelPlacement = useFieldLabelPlacement();
    const idleColor = hasValidationMessage ? "accent" : "hairline";
    const focusColor = hasValidationMessage ? "accentActive" : "hairlineActive";
    const isFocused = focusedProp ?? focused;
    const borderColor = `${isFocused ? focusColor : idleColor} hover:${disabled ? "accentDisabled" : isFocused ? focusColor : "accentHover"} focus-visible:${focusColor} group-hover/field:${disabled ? "accentDisabled" : "accentHover"}`;
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
        ref={forwardedRef}
        render="textarea"
        type="textarea"
        rows={rows}
        {...props}
        placeholderTextColor={placeholderTextColor}
        focused={isFocused}
        hasValidationMessage={hasValidationMessage}
        variant={variant}
        labelPlacement={labelPlacement}
        disabled={disabled}
        // `FieldNotchedOutline` draws a notched field's border instead.
        borderColor={labelPlacement === "border" ? "transparent" : borderColor}
        boxShadow={`focus-visible:${
          variant === "outlined" || variant === "inlined"
            ? "ringOffset"
            : "none"
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );

    if (variant === "outlined" && labelPlacement !== "border") {
      return textArea;
    }

    return (
      <TextAreaDecorationFrame>
        {textArea}
        {variant === "outlined" ? (
          <FieldNotchedOutline borderColor={borderColor} />
        ) : variant === "underlined" ? (
          <ControlUnderline
            focused={isFocused}
            disabled={disabled}
            backgroundColor={disabled ? "accentDisabled" : focusColor}
          />
        ) : null}
      </TextAreaDecorationFrame>
    );
  },
  { displayName: "TextArea" }
);

export type TextAreaProps = GetProps<typeof TextArea>;

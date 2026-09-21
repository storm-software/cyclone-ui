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

import { useFieldHasValidationMessage } from "@cyclone-ui/field";
import { ControlUnderline } from "@cyclone-ui/input";
import { InputValue } from "@cyclone-ui/input/InputValue";
import type { GetProps } from "@tamagui/core";
import { styled, View } from "@tamagui/core";
import type { FocusEvent } from "react";
import { useCallback, useState } from "react";

const TextAreaFrame = styled(InputValue, {
  name: "TextArea",
  render: "textarea",

  // This prevents Firefox from collapsing newline-only content.
  // @ts-ignore -- forwarded as a textarea style on web.
  whiteSpace: "pre-wrap",

  height: "auto",
  minHeight: "$20xl",
  paddingVertical: "$xl",
  backgroundColor: "$surfaceElevated",
  color: "$accent",
  borderWidth: 1,
  borderColor: "$hairline",
  borderRadius: "$control",
  boxShadow: "none",
  outlineWidth: 0,
  outlineColor: "transparent",

  hoverStyle: {
    borderColor: "$accentHover"
  },

  focusVisibleStyle: {
    boxShadow: "$ringOffset",
    borderColor: "$accentActive"
  },

  variants: {
    focused: {
      true: {
        boxShadow: "$ringOffset",
        borderColor: "$accentActive"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "$accent",
        hoverStyle: {
          borderColor: "$accentHover"
        }
      }
    },

    variant: {
      default: {},
      floating: {
        paddingTop: "$2xl"
      },
      underline: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "$hairline",
        borderRadius: 0,
        boxShadow: "none",

        hoverStyle: {
          borderColor: "$accentHover"
        },

        focusVisibleStyle: {
          borderColor: "$accent",
          boxShadow: "none"
        }
      }
    },

    disabled: {
      true: {
        borderColor: "$accentDisabled",

        hoverStyle: {
          borderColor: "$accentDisabled"
        },

        focusStyle: {
          borderColor: "$accentDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    variant: "default"
  }
});

const TextAreaUnderlineFrame = styled(View, {
  name: "TextAreaUnderlineFrame",

  position: "relative",
  width: "100%",
  minWidth: 0
});

/**
 * A multiline Cyclone Input value with the same tokens and state behavior as
 * the standard Input control.
 */
export const TextArea = TextAreaFrame.styleable(
  (
    {
      rows = 3,
      render: _render,
      focused: focusedProp,
      disabled = false,
      placeholderTextColor = "$onAccentDisabled",
      onBlur,
      onFocus,
      variant = "default",
      ...props
    },
    forwardedRef
  ) => {
    const [focused, setActive] = useState(false);
    const hasValidationMessage = useFieldHasValidationMessage();
    const idleColor = hasValidationMessage ? "$accent" : "$hairline";
    const focusColor = hasValidationMessage
      ? "$accentActive"
      : "$hairlineActive";
    const isFocused = focusedProp ?? focused;
    const handleFocus = useCallback(
      (event: FocusEvent<HTMLElement>) => {
        setActive(true);
        onFocus?.(event);
      },
      [onFocus]
    );
    const handleBlur = useCallback(
      (event: FocusEvent<HTMLElement>) => {
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
        disabled={disabled}
        borderColor={isFocused ? focusColor : idleColor}
        hoverStyle={{
          borderColor: disabled
            ? "$accentDisabled"
            : isFocused
              ? focusColor
              : "$accentHover"
        }}
        focusVisibleStyle={{
          boxShadow: variant === "underline" ? "none" : "$ringOffset",
          borderColor: focusColor
        }}
        $group-field-hover={{
          borderColor: disabled ? "$accentDisabled" : "$accentHover"
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );

    if (variant !== "underline") {
      return textArea;
    }

    return (
      <TextAreaUnderlineFrame>
        {textArea}
        <ControlUnderline
          focused={isFocused}
          disabled={disabled}
          backgroundColor={disabled ? "$accentDisabled" : focusColor}
        />
      </TextAreaUnderlineFrame>
    );
  },
  { staticConfig: { componentName: "TextArea" } }
);

export type TextAreaProps = GetProps<typeof TextArea>;

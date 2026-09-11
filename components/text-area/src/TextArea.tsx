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
  backgroundColor: "$backgroundElevated",
  color: "$foreground",
  borderWidth: 1,
  borderColor: "$border",
  borderRadius: "$control",
  boxShadow: "none",
  outlineWidth: 0,
  outlineColor: "transparent",

  hoverStyle: {
    borderColor: "$borderHover"
  },

  focusVisibleStyle: {
    boxShadow: "$ringOffset",
    borderColor: "$borderActive"
  },

  variants: {
    focused: {
      true: {
        boxShadow: "$ringOffset",
        borderColor: "$borderActive"
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
        borderColor: "$border",
        borderRadius: 0,
        boxShadow: "none",

        hoverStyle: {
          borderColor: "$borderHover"
        },

        focusVisibleStyle: {
          borderColor: "$border",
          boxShadow: "none"
        }
      }
    },

    disabled: {
      true: {
        borderColor: "$borderDisabled",

        hoverStyle: {
          borderColor: "$borderDisabled"
        },

        focusStyle: {
          borderColor: "$borderDisabled"
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
      placeholderTextColor = "$foregroundInverseDisabled",
      onBlur,
      onFocus,
      variant = "default",
      ...props
    },
    forwardedRef
  ) => {
    const [focused, setActive] = useState(false);
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
        focused={focusedProp ?? focused}
        variant={variant}
        disabled={disabled}
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
          focused={focusedProp ?? focused}
          disabled={disabled}
        />
      </TextAreaUnderlineFrame>
    );
  },
  { staticConfig: { componentName: "TextArea" } }
);

export type TextAreaProps = GetProps<typeof TextArea>;

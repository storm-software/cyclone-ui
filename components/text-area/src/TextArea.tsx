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

import { InputValue } from "@cyclone-ui/input/InputValue";
import type { GetProps } from "@tamagui/core";
import { styled } from "@tamagui/core";
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
    boxShadow: "$ring",
    borderColor: "$borderFocused"
  },

  variants: {
    focused: {
      true: {
        boxShadow: "$ring",
        borderColor: "$borderFocused"
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
  } as const
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
      onBlur,
      onFocus,
      ...props
    },
    forwardedRef
  ) => {
    const [focused, setFocused] = useState(false);
    const handleFocus = useCallback(
      (event: FocusEvent<HTMLElement>) => {
        setFocused(true);
        onFocus?.(event as any);
      },
      [onFocus]
    );
    const handleBlur = useCallback(
      (event: FocusEvent<HTMLElement>) => {
        setFocused(false);
        onBlur?.(event as any);
      },
      [onBlur]
    );

    return (
      <TextAreaFrame
        ref={forwardedRef}
        render="textarea"
        type="textarea"
        rows={rows}
        {...props}
        focused={focusedProp ?? focused}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
  },
  { staticConfig: { componentName: "TextArea" } }
);

export type TextAreaProps = GetProps<typeof TextArea>;

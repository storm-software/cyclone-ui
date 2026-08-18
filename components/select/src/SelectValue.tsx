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

import { getFontSizedFromSize } from "@cyclone-ui/helpers";
import { styled, Theme, View } from "@tamagui/core";
import { Select as TamaguiSelect } from "@tamagui/select";
import { SelectContext } from "./utilities";

const SelectValueFrame = styled(TamaguiSelect.Value, {
  name: "SelectValue",
  context: SelectContext,

  transition: "medium",
  unstyled: true,
  cursor: "pointer",
  color: "$foregroundOnPrimary",
  fontFamily: "$body",
  display: "flex",
  flexGrow: 1,
  alignItems: "center",

  hoverStyle: {
    backgroundColor: "transparent",
    color: "$foregroundOnPrimaryHover"
  },

  focusStyle: {
    backgroundColor: "transparent"
  },

  variants: {
    placeholding: {
      true: {
        color: "$foregroundOnPrimaryDisabled"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        userSelect: "none",
        color: "$foregroundOnPrimaryDisabled",
        placeholderColor: "$foregroundOnPrimaryDisabled",

        hoverStyle: {
          color: "$foregroundOnPrimaryDisabled"
        },

        focusStyle: {
          color: "$foregroundOnPrimaryDisabled"
        },

        pressStyle: {
          color: "$foregroundOnPrimaryDisabled"
        }
      }
    },

    size: {
      "...size": getFontSizedFromSize
    }
  } as const,

  defaultVariants: {
    size: "$true",
    disabled: false,
    placeholding: false
  }
});

export const SelectValue = SelectValueFrame.styleable<{
  placeholder?: string;
}>(
  ({ children, placeholding, ...props }, forwardedRef) => {
    const { disabled, name } = SelectContext.useStyledContext();

    return (
      <View flex={1} paddingHorizontal="$3xl">
        <Theme name={"base"}>
          <SelectValueFrame
            id={name}
            ref={forwardedRef}
            {...props}
            size={0}
            disabled={disabled}
            placeholding={placeholding && !disabled}>
            {children}
          </SelectValueFrame>
        </Theme>
      </View>
    );
  },
  {
    staticConfig: { componentName: "SelectValue" }
  }
);

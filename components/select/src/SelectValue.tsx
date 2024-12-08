/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { ColorThemeName } from "@cyclone-ui/colors";
import { getFontSizedFromSize } from "@cyclone-ui/helpers";
import { styled, Theme, View } from "@tamagui/core";
import { Select as TamaguiSelect } from "@tamagui/select";
import { SelectContext } from "./utilities";

const SelectValueFrame = styled(TamaguiSelect.Value, {
  name: "SelectValue",
  context: SelectContext,

  animation: "normal",
  unstyled: true,
  cursor: "pointer",
  color: "$color",
  fontFamily: "$body",
  display: "flex",
  flexGrow: 1,
  alignItems: "center",

  hoverStyle: {
    backgroundColor: "transparent"
  },

  focusStyle: {
    backgroundColor: "transparent"
  },

  variants: {
    placeholding: {
      true: {
        color: "$placeholderColor"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        userSelect: "none",
        color: "$colorDisabled",
        placeholderColor: "$colorDisabled",

        hoverStyle: {
          color: "$colorDisabled"
        },

        focusStyle: {
          color: "$colorDisabled"
        },

        pressStyle: {
          color: "$colorDisabled"
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
      <View flex={1} paddingHorizontal="$3">
        <Theme name={ColorThemeName.BASE}>
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

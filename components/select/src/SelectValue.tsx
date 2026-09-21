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

import { BodyText } from "@cyclone-ui/body-text";
import { formSizeVariants, type FormControlSize } from "@cyclone-ui/helpers";
import { styled, View } from "@tamagui/core";
import { Select as TamaguiSelect } from "@tamagui/select";
import { getSelectContentSize, SelectContext } from "./utilities";

const SelectValueFrame = styled(TamaguiSelect.Value, {
  name: "SelectValue",
  context: SelectContext,

  transition: "200ms",
  unstyled: true,
  cursor: "pointer",
  color: "$accent",
  display: "flex",
  flexGrow: 1,
  alignItems: "center",

  hoverStyle: {
    backgroundColor: "transparent",
    color: "$accentHover"
  },

  focusStyle: {
    backgroundColor: "transparent"
  },

  variants: {
    size: formSizeVariants((val: FormControlSize) => {
      const { fontSize, lineHeight, valuePaddingLeft, valuePaddingRight } =
        getSelectContentSize(val);

      return {
        fontSize,
        lineHeight,
        paddingLeft: valuePaddingLeft,
        paddingRight: valuePaddingRight
      };
    }),

    variant: {
      default: {},
      floating: (_val: true, { props }: any) => ({
        paddingTop: getSelectContentSize(props.size).valuePaddingLeft
      }),
      underline: {}
    },

    placeholding: {
      true: {
        color: "$accentDisabled"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        userSelect: "none",
        color: "$accentDisabled",
        placeholderColor: "$accentDisabled",

        hoverStyle: {
          color: "$accentDisabled"
        },

        focusStyle: {
          color: "$accentDisabled"
        },

        pressStyle: {
          color: "$accentDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    size: "md",
    variant: "default",
    disabled: false,
    placeholding: false
  }
});

export const SelectValue = SelectValueFrame.styleable<{
  placeholder?: string;
}>(
  ({ children, placeholder, ...props }, forwardedRef) => {
    const { disabled, name, size, variant } = SelectContext.useStyledContext();

    return (
      <View flex={1} minWidth={0}>
        <SelectValueFrame
          id={name}
          ref={forwardedRef}
          {...props}
          size={size}
          variant={variant}
          disabled={disabled}
          placeholding={!!placeholder && !disabled}>
          <BodyText
            render="span"
            fontSize={getSelectContentSize(size).fontSize}
            lineHeight={getSelectContentSize(size).lineHeight}>
            {children}
          </BodyText>
        </SelectValueFrame>
      </View>
    );
  },
  {
    staticConfig: { componentName: "SelectValue" }
  }
);

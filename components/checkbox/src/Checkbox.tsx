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

import { Checkbox as TamaguiCheckbox } from "@tamagui/checkbox";
import { isWeb } from "@tamagui/constants";
import { styled } from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { Check } from "@tamagui/lucide-icons";

export const defaultCheckboxGroupStyles = {
  size: "$true",
  fontFamily: "$body",
  fontSize: "$4",
  color: "$color",
  backgroundColor: "$background",
  borderRadius: "$radius",
  borderWidth: 1,
  borderColor: "$borderColor",
  outlineWidth: 0,
  outlineColor: "transparent",
  outlineStyle: "none",

  ...(isWeb
    ? {
        tabIndex: 0
      }
    : {
        focusable: true
      }),

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  hoverStyle: {
    borderColor: "$accent10"
  },

  focusStyle: {
    outlineColor: "$accent10",
    outlineWidth: 2,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  }
} as const;

export const CHECKBOX_NAME = "Checkbox";

const CheckboxGroupFrame = styled(XGroup, {
  name: CHECKBOX_NAME,

  justifyContent: "space-between",
  animation: "slow",
  alignContent: "center",
  verticalAlign: "center",

  variants: {
    unstyled: {
      false: defaultCheckboxGroupStyles
    },

    focused: {
      ":boolean": (val, { props }) => {
        if (val) {
          return props.focusStyle ?? defaultCheckboxGroupStyles.focusStyle;
        }

        return {};
      }
    },

    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val]
        };
      }
    },

    disabled: {
      true: {
        color: "$disabled",
        borderColor: "$disabled",
        placeholderColor: "$disabled",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$disabled",
          borderColor: "$disabled"
        },

        focusStyle: {
          color: "$disabled",
          borderColor: "$disabled",
          outlineStyle: "none",
          outlineColor: "transparent"
        },

        pressStyle: {
          color: "$disabled",
          borderColor: "$disabled",
          outlineStyle: "none",
          outlineColor: "transparent"
        }
      },
      false: {
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1",
    focused: false,
    disabled: false
  }
});

const BaseCheckbox = styled(TamaguiCheckbox, {
  name: CHECKBOX_NAME,
  unstyled: true,

  verticalAlign: "center",
  height: "$1.5",
  width: "$1.5",
  padding: "$0.5",

  variants: {
    focused: {
      true: {
        // borderColor: "$accent10"
      },
      false: {
        // borderColor: "$borderColor"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        placeholderTextColor: "$disabled",
        color: "$disabled"
      },
      false: {
        placeholderTextColor: "$placeholderColor"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false,
    focused: false
  }
});

export const Checkbox = BaseCheckbox.styleable(
  ({ focused, disabled, name, ...props }, forwardedRef) => {
    return (
      <CheckboxGroupFrame focused={focused} disabled={disabled}>
        <BaseCheckbox
          ref={forwardedRef}
          id={name}
          {...props}
          focused={focused}
          disabled={disabled}>
          <TamaguiCheckbox.Indicator
            animation="slow"
            enterStyle={{
              scale: 0.8,
              y: 10,
              opacity: 0
            }}
            exitStyle={{
              scale: 0.8,
              y: -10,
              opacity: 0
            }}
            justifyContent="center"
            alignItems="center">
            <Check color="$fg" height="$1" width="$1" />
          </TamaguiCheckbox.Indicator>
        </BaseCheckbox>
      </CheckboxGroupFrame>
    );
  }
);

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

import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  withStaticProperties
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { Input as TamaguiInput } from "tamagui";

const defaultContextValues = {
  size: "$true",
  color: undefined,
  hideIcons: false,
  disabled: false,
  focused: false,
  required: false
} as const;

export type InputContextProps = {
  name?: string;
  size: FontSizeTokens;
  color?: ColorTokens | string;
  hideIcons: boolean;
  disabled: boolean;
  focused: boolean;
};

export const InputContext =
  createStyledContext<InputContextProps>(defaultContextValues);

export const defaultInputGroupStyles = {
  size: "$1",
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

export const INPUT_NAME = "Input";

const InputGroupFrame = styled(XGroup, {
  name: INPUT_NAME,
  context: InputContext,

  justifyContent: "space-between",
  animation: "slow",
  height: "$4.5",
  alignItems: "center",

  variants: {
    unstyled: {
      false: defaultInputGroupStyles
    },

    scaleIcon: {
      ":number": {} as any
    },

    focused: {
      ":boolean": (val, { props }) => {
        if (val) {
          return props.focusStyle ?? defaultInputGroupStyles.focusStyle;
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
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1",
    disabled: false
  }
});

const BaseInput = styled(TamaguiInput, {
  name: INPUT_NAME,
  context: InputContext,

  unstyled: true,
  color: "$fg",
  fontFamily: "$body",
  fontSize: "$true",
  fontWeight: "$true",
  display: "flex",
  flexGrow: 1,
  verticalAlign: "center",
  marginHorizontal: "$1.75",

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        placeholderTextColor: "$disabled",
        color: "$disabled"
      },
      false: {
        placeholderTextColor: "$placeholderColor",
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const InputValue = BaseInput.styleable((props, forwardedRef) => {
  const { disabled, name } = InputContext.useStyledContext();

  return (
    <BaseInput
      id={name}
      ref={forwardedRef}
      size={0}
      disabled={disabled}
      {...props}
    />
  );
});

const InputGroupImpl = InputGroupFrame.styleable<Partial<InputContextProps>>(
  (props, forwardedRef) => {
    const { children } = props;

    return (
      <InputContext.Provider {...props}>
        <InputGroupFrame ref={forwardedRef} paddingHorizontal="$2" {...props}>
          {children}
        </InputGroupFrame>
      </InputContext.Provider>
    );
  }
);

export const Input = withStaticProperties(InputGroupImpl, {
  Value: InputValue
});

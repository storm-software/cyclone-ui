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
import type {
  ColorTokens,
  FontSizeTokens,
  SizeTokens,
  VariantSpreadExtras
} from "@tamagui/core";
import {
  createStyledContext,
  styled,
  withStaticProperties
} from "@tamagui/core";
import { getSize } from "@tamagui/get-token";
import { XGroup } from "@tamagui/group";
import { Input as TamaguiInput } from "tamagui";

export type InputContextProps = {
  name?: string;
  size: FontSizeTokens;
  color?: ColorTokens | string;
  disabled: boolean;
  focused: boolean;
};

export const InputContext = createStyledContext<InputContextProps>({
  size: "$true",
  color: "$color",
  disabled: false,
  focused: false
});

const InputGroup = styled(XGroup, {
  name: "Input",
  context: InputContext,

  animation: "normal",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  borderWidth: 1,
  borderColor: "$borderColor",
  outlineWidth: 0,
  outlineColor: "transparent",

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

  focusVisibleStyle: {
    outlineColor: "$accent10",
    outlineWidth: 3,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  },

  variants: {
    focused: {
      true: {
        outlineColor: "$accent10",
        outlineWidth: 3,
        outlineOffset: "$1.25",
        outlineStyle: "solid",
        borderColor: "$borderColorFocus"
      }
    },

    size: {
      "...size": (
        val: SizeTokens | number,
        { tokens, props }: VariantSpreadExtras<any>
      ) => {
        if (!val || props.circular) {
          return;
        }
        if (typeof val === "number") {
          return {
            paddingHorizontal: val * 0.25,
            height: val,
            borderRadius: props.circular ? 100_000 : val * 0.2
          };
        }

        const height = getSize(val);
        const radiusToken = tokens.radius[val] ?? tokens.radius["$true"];
        return {
          height: height.val,
          borderRadius: props.circular ? 100_000 : radiusToken
        };
      }
    },

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed",
        borderColor: "$borderColorDisabled",

        hoverStyle: {
          borderColor: "$borderColorDisabled"
        },

        focusStyle: {
          borderColor: "$borderColorDisabled"
        },

        pressStyle: {
          borderColor: "$borderColorDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    disabled: false,
    focused: false
  }
});

const InputGroupImpl = InputGroup.styleable<Partial<InputContextProps>>(
  (props, forwardedRef) => {
    const { children } = props;

    return (
      <InputContext.Provider {...props}>
        <InputGroup ref={forwardedRef} paddingHorizontal="$2" {...props}>
          {children}
        </InputGroup>
      </InputContext.Provider>
    );
  },
  { staticConfig: { componentName: "Input" } }
);

const InputValue = styled(TamaguiInput, {
  name: "InputValue",
  context: InputContext,

  animation: "normal",
  unstyled: true,
  cursor: "pointer",
  height: "100%",
  flex: 1,
  flexGrow: 1,
  color: "$color",
  placeholderTextColor: "$placeholderColor",
  fontFamily: "$body",
  fontSize: "$4",
  fontWeight: "$true",
  lineHeight: "$true",
  letterSpacing: "$true",
  verticalAlign: "center",
  marginHorizontal: "$1.75",
  marginVertical: 0,
  paddingVertical: 0,

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        color: "$colorDisabled",
        placeholderTextColor: "$placeholderColorDisabled"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const InputValueImpl = InputValue.styleable(
  ({ autoComplete = "off", height = "100%", ...props }, forwardedRef) => {
    const { disabled, name } = InputContext.useStyledContext();

    return (
      <InputValue
        id={name}
        ref={forwardedRef}
        size={0}
        disabled={disabled}
        {...props}
        height={height}
        autoComplete={autoComplete}
      />
    );
  },
  { staticConfig: { componentName: "InputValue" } }
);

export const Input = withStaticProperties(InputGroupImpl, {
  Value: InputValueImpl
});

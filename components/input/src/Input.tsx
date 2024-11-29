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

import { Button } from "@cyclone-ui/button";
import { ColorThemeName } from "@cyclone-ui/colors";
import { getRadius, getSized, getSpaced } from "@cyclone-ui/helpers";
import { isWeb } from "@tamagui/constants";
import type { GetProps, SizeTokens, VariantSpreadExtras } from "@tamagui/core";
import {
  styled,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { X } from "@tamagui/lucide-icons";
import { Separator } from "@tamagui/separator";
import { XStack } from "@tamagui/stacks";
import { useMemo } from "react";
import { InputValue } from "./InputValue";
import { InputContextProps } from "./types";
import { getInputSize, InputContext } from "./utilities";

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
  gap: "$0.6",

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
        extras: VariantSpreadExtras<any>
      ) => {
        const result = getInputSize(val, extras);

        return {
          ...result,
          paddingHorizontal: 0
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
    },

    circular: {
      true: {
        borderRadius: 100_000
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    disabled: false,
    focused: false,
    circular: false
  }
});

const InputGroupImpl = InputGroup.styleable<Partial<InputContextProps>>(
  (props, forwardedRef) => {
    const { children } = props;

    return (
      <InputContext.Provider {...props}>
        <InputGroup ref={forwardedRef} group={"input" as any} {...props}>
          {children}
        </InputGroup>
      </InputContext.Provider>
    );
  },
  { staticConfig: { componentName: "Input" } }
);

const InputSeparator = styled(Separator, {
  name: "Input",
  context: InputContext,

  animation: "normal",
  borderWidth: 1,
  borderColor: "$borderColor",
  vertical: true,
  height: "50%",
  marginVertical: "$0.25",

  variants: {
    focused: {
      true: {
        borderColor: "$borderColorFocus"
      }
    },

    disabled: {
      true: {
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
    disabled: false,
    focused: false
  }
});

const InputSeparatorImpl = InputSeparator.styleable(
  (props, forwardedRef) => {
    const { disabled } = InputContext.useStyledContext();

    return (
      <XGroup.Item>
        <InputSeparator
          ref={forwardedRef}
          $group-input-hover={{
            borderColor: disabled ? "$borderColorDisabled" : "$accent10"
          }}
          {...props}
        />
      </XGroup.Item>
    );
  },
  { staticConfig: { componentName: "Input" } }
);

const InputTextBox = styled(XStack, {
  name: "Input",
  context: InputContext,

  height: "100%",
  flex: 1,

  variants: {
    size: {
      "...size": (val: SizeTokens | number) => {
        if (!val) {
          return;
        }

        if (typeof val === "number") {
          return {
            paddingHorizontal: val * 0.25,
            gap: val * 0.25
          };
        }

        const space = getSpaced(val);
        return {
          paddingHorizontal: space * 0.25,
          gap: space * 0.25
        };
      }
    }
  } as const,

  defaultVariants: {
    size: "$true"
  }
});

const InputTextBoxImpl = InputTextBox.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <XGroup.Item>
        <InputTextBox ref={forwardedRef} {...props}>
          {children}
        </InputTextBox>
      </XGroup.Item>
    );
  },
  { staticConfig: { componentName: "Input" } }
);

type InputValueExtraProps = {
  clearable?: boolean;
  onClear?: () => void;
};

const InputValueImpl = InputValue.styleable<InputValueExtraProps>(
  (
    {
      children,
      enterKeyHint = "done",
      clearable = false,
      onClear,
      value,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <View position="relative" flex={1}>
        <InputValue
          ref={forwardedRef}
          {...props}
          value={value}
          enterKeyHint={enterKeyHint}
          placeholderTextColor="$placeholderColor">
          {children}
        </InputValue>
        {clearable && onClear && value && (
          <View
            position="absolute"
            top={0}
            right={0}
            height="100%"
            display="flex"
            alignItems="center">
            <Button
              variant="ghost"
              circular={true}
              width="$3.5"
              onClick={onClear}>
              <Button.Icon>
                <X size="$1" />
              </Button.Icon>
            </Button>
          </View>
        )}
      </View>
    );
  },
  { staticConfig: { componentName: "InputValue" } }
);

const InputTrigger = Button.styleable<{
  forcePlacement?: GetProps<typeof XGroup.Item>["forcePlacement"];
}>(
  ({ children, flexBasis = "6%", ...props }, forwardedRef) => {
    const { circular, size } = InputContext.useStyledContext();
    const radius = getRadius("$true", { circular, scale: 0.75 });
    const theme = useThemeName();

    const adjustedTrigger = useMemo(
      () => getSized(size, { shift: -3 }),
      [size]
    );

    return (
      <XGroup.Item>
        <View
          paddingRight="$0.6"
          display="flex"
          flexBasis={flexBasis}
          flexShrink={1}
          minWidth="$4">
          <Button
            ref={forwardedRef}
            variant="ghost"
            borderRadius={radius}
            color={
              theme?.includes(ColorThemeName.BASE) ? "$borderColor" : "$color"
            }
            {...props}
            size={adjustedTrigger}>
            {children}
          </Button>
        </View>
      </XGroup.Item>
    );
  },
  { staticConfig: { componentName: "Input" } }
);

export type InputValueProps = GetProps<typeof InputValue>;

export const Input = withStaticProperties(InputGroupImpl, {
  TextBox: withStaticProperties(InputTextBoxImpl, {
    Value: InputValueImpl
  }),
  Separator: InputSeparatorImpl,
  Trigger: withStaticProperties(InputTrigger, {
    Icon: Button.Icon,
    Text: Button.Text
  })
});

export type InputProps = GetProps<typeof Input>;

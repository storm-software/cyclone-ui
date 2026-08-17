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

import { Button } from "@cyclone-ui/button";
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
import type { InputContextProps } from "./types";
import { getInputSize, InputContext } from "./utilities";

const InputGroup = styled(XGroup, {
  name: "Input",
  context: InputContext,

  animation: "normal",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  borderWidth: 1,
  borderColor: "$borderPrimary",
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
    borderColor: "$borderAccent"
  },

  focusVisibleStyle: {
    outlineColor: "$borderAccent",
    outlineWidth: 3,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderAccent"
  },

  variants: {
    focused: {
      true: {
        outlineColor: "$borderAccent",
        outlineWidth: 3,
        outlineOffset: "$1.25",
        outlineStyle: "solid",
        borderColor: "$borderAccent"
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
        borderColor: "$base4",

        hoverStyle: {
          borderColor: "$base4"
        },

        focusStyle: {
          borderColor: "$base4"
        },

        pressStyle: {
          borderColor: "$base4"
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
  borderColor: "$borderPrimary",
  vertical: true,
  height: "50%",
  marginVertical: "$0.25",

  variants: {
    focused: {
      true: {
        borderColor: "$borderAccent"
      }
    },

    disabled: {
      true: {
        borderColor: "$base4",

        hoverStyle: {
          borderColor: "$base4"
        },

        focusStyle: {
          borderColor: "$base4"
        },

        pressStyle: {
          borderColor: "$base4"
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
            borderColor: disabled ? "$base4" : "$borderAccent"
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

interface InputValueExtraProps {
  clearable?: boolean;
  onClear?: () => void;
}

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
    const { size } = InputContext.useStyledContext();
    const theme = useThemeName();

    const adjustedTrigger = useMemo(
      () => getSized(size, { shift: -3 }),
      [size]
    );

    return (
      <View position="relative" flex={1}>
        <InputValue
          ref={forwardedRef}
          {...props}
          value={value}
          enterKeyHint={enterKeyHint}
          placeholderTextColor="$base4">
          {children}
        </InputValue>
        {clearable && onClear && value && (
          <View
            position="absolute"
            top={0}
            right={0}
            height="100%"
            display="flex"
            alignItems="center"
            minWidth="$4">
            <Button
              ref={forwardedRef}
              variant="ghost"
              circular={true}
              color={
                theme?.includes("base")
                  ? "$borderPrimary"
                  : "$foregroundOnPrimary"
              }
              onClick={onClear}
              size={adjustedTrigger}>
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
              theme?.includes("base")
                ? "$borderPrimary"
                : "$foregroundOnPrimary"
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

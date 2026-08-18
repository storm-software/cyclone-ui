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
import { getSized, getSpaced } from "@cyclone-ui/helpers";
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

  transition: "medium",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  borderWidth: 1,
  borderColor: "$borderPrimary",
  outlineWidth: 0,
  outlineColor: "transparent",
  gap: "$sm",
  tabIndex: 0,
  borderRadius: "$control",

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  hoverStyle: {
    borderColor: "$borderPrimaryHover"
  },

  focusVisibleStyle: {
    outlineColor: "$borderAccent",
    outlineWidth: 3,
    outlineOffset: "$lg",
    outlineStyle: "solid",
    borderColor: "$borderAccent"
  },

  variants: {
    focused: {
      true: {
        outlineColor: "$borderAccent",
        outlineWidth: 3,
        outlineOffset: "$lg",
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
        borderColor: "$borderPrimaryDisabled",

        hoverStyle: {
          borderColor: "$borderPrimaryDisabled"
        },

        focusStyle: {
          borderColor: "$borderPrimaryDisabled"
        },

        pressStyle: {
          borderColor: "$borderPrimaryDisabled"
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

  transition: "medium",
  borderWidth: 1,
  borderColor: "$borderPrimary",
  vertical: true,
  height: "50%",
  marginVertical: "$xxs",

  variants: {
    focused: {
      true: {
        borderColor: "$borderAccent"
      }
    },

    disabled: {
      true: {
        borderColor: "$borderPrimaryDisabled",

        hoverStyle: {
          borderColor: "$borderPrimaryDisabled"
        },

        focusStyle: {
          borderColor: "$borderPrimaryDisabled"
        },

        pressStyle: {
          borderColor: "$borderPrimaryDisabled"
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
    const { disabled, focused } = InputContext.useStyledContext();

    return (
      <XGroup.Item>
        <InputSeparator
          ref={forwardedRef}
          $group-input-hover={{
            borderColor: disabled
              ? "$borderPrimaryDisabled"
              : focused
                ? "$borderAccent"
                : "$borderPrimaryHover"
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
          placeholderTextColor="$foregroundOnPrimaryDisabled">
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
            minWidth="$5xl">
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
                <X size="$md" />
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
    const theme = useThemeName();

    const adjustedTrigger = useMemo(
      () => getSized(size, { shift: -3 }),
      [size]
    );

    return (
      <XGroup.Item>
        <View
          paddingRight="$sm"
          display="flex"
          flexBasis={flexBasis}
          flexShrink={1}
          minWidth="$5xl">
          <Button
            ref={forwardedRef}
            variant="ghost"
            borderRadius={circular ? 100_000 : "$trigger"}
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

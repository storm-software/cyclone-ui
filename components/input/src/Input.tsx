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
import { styled, View, withStaticProperties } from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { X } from "@tamagui/lucide-icons-2";
import { Separator } from "@tamagui/separator";
import { XStack } from "@tamagui/stacks";
import { useMemo } from "react";
import { InputValue } from "./InputValue";
import type { InputContextProps } from "./types";
import { getInputSize, InputContext } from "./utilities";

const getInputFrameSize = (
  val: SizeTokens | number,
  extras: VariantSpreadExtras<any>
) => ({
  ...getInputSize(val, extras),
  paddingHorizontal: getSpaced(val) * 0.25
});

const InputGroup = styled(XGroup, {
  name: "Input",
  context: InputContext,

  transition: "200ms",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "$backgroundElevated",
  borderWidth: 1,
  borderColor: "$border",
  outlineWidth: 0,
  outlineColor: "transparent",
  boxShadow: "none",
  gap: "$sm",
  tabIndex: 0,
  borderRadius: "$control",
  overflow: "hidden",

  // this fixes a flex bug where it overflows container
  minWidth: 0,

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

    // Keep frame dimensions separate from Tamagui's special `size` prop. A
    // `$true` size is consumed before spread variants run, leaving no height.
    frameSize: {
      ":string": getInputFrameSize,
      ":number": getInputFrameSize
    },

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed",
        borderColor: "$borderDisabled",

        hoverStyle: {
          borderColor: "$borderDisabled"
        },

        focusStyle: {
          borderColor: "$borderDisabled"
        },

        pressStyle: {
          borderColor: "$borderDisabled"
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
    frameSize: "$5xl",
    disabled: false,
    focused: false,
    circular: false
  }
});

const InputGroupImpl = InputGroup.styleable<Partial<InputContextProps>>(
  (props, forwardedRef) => {
    const {
      children,
      size = "$true",
      onChange,
      onInput,
      onFocus,
      onBlur,
      ...rest
    } = props;
    const frameSize =
      size === "$true" || String(size) === "true" ? "$10xl" : size;

    return (
      <InputContext.Provider
        {...rest}
        size={size}
        onChange={onChange}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}>
        <InputGroup
          ref={forwardedRef}
          {...rest}
          frameSize={frameSize}
          onFocus={onFocus}
          onBlur={onBlur}
          transition="200ms"
          $group-field-hover={{
            borderColor: "$borderHover"
          }}>
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

  transition: "200ms",
  borderWidth: 1,
  borderColor: "$border",
  vertical: true,
  height: "50%",
  marginVertical: "$xxs",

  variants: {
    focused: {
      true: {
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
        },

        pressStyle: {
          borderColor: "$borderDisabled"
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
          $group-field-hover={{
            borderColor: disabled
              ? "$borderDisabled"
              : focused
                ? "$borderFocused"
                : "$borderHover"
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
  minWidth: 0,
  alignItems: "center",

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
      <XGroup.Item flex={1} minWidth={0}>
        <InputTextBox ref={forwardedRef} {...props}>
          {children}
        </InputTextBox>
      </XGroup.Item>
    );
  },
  { staticConfig: { componentName: "Input" } }
);

export interface InputValueExtraProps {
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
    const {
      size,
      disabled,
      onChange: contextOnChange,
      onInput: contextOnInput
    } = InputContext.useStyledContext();
    const adjustedTrigger = useMemo(
      () => getSized(size, { shift: -3 }),
      [size]
    );

    return (
      <View position="relative" height="100%" flex={1} minWidth={0}>
        <InputValue
          ref={forwardedRef}
          {...props}
          onChange={props.onChange ?? contextOnChange}
          onInput={props.onInput ?? contextOnInput}
          value={value}
          enterKeyHint={enterKeyHint}
          placeholderTextColor="$foregroundInverseDisabled">
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
              variant="link"
              circular={true}
              disabled={disabled}
              color={disabled ? "$borderDisabled" : "$border"}
              onClick={onClear}
              size={adjustedTrigger}>
              <Button.Icon
                $group-field-hover={{
                  color: disabled ? "$borderDisabled" : "$borderHover"
                }}>
                <X size="$4xl" />
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

    const adjustedTrigger = useMemo(
      () => getSized(size, { shift: -3 }),
      [size]
    );

    return (
      <XGroup.Item>
        <View
          paddingRight="$lg"
          display="flex"
          flexBasis={flexBasis}
          flexShrink={1}
          minWidth="$5xl">
          <Button
            ref={forwardedRef}
            variant="link"
            borderRadius={circular ? 100_000 : "$button"}
            color="$foregroundInverse"
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

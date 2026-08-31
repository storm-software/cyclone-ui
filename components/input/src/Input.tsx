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
  paddingHorizontal: 0
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
  gap: "$none",
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

const InputSeparator = styled(View, {
  name: "Input",
  context: InputContext,

  transition: "200ms",
  borderWidth: 0,
  borderLeftWidth: 1,
  borderRightWidth: 0,
  borderTopWidth: 0,
  borderBottomWidth: 0,
  borderColor: "$border",
  width: 0,
  flexShrink: 0,
  height: "60%",
  marginVertical: "$none",

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
  gap: "$none"
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
      focused,
      onChange: contextOnChange,
      onInput: contextOnInput
    } = InputContext.useStyledContext();
    const controlSize =
      size === "$true" || String(size) === "true" ? "$10xl" : size;
    const adjustedTrigger = useMemo(
      // Keep clear-button glyphs aligned with Field.Icon: its button frame is
      // two size steps below the textbox, then Button.Icon derives the glyph.
      () => getSized(controlSize, { shift: -2 }),
      [controlSize]
    );
    const hasClearButton = Boolean(clearable && onClear && value);
    const clearSlotWidth = adjustedTrigger + getSpaced("$sm") * 2;

    return (
      <View position="relative" height="100%" flex={1} minWidth={0}>
        <InputValue
          ref={forwardedRef}
          {...props}
          onChange={props.onChange ?? contextOnChange}
          onInput={props.onInput ?? contextOnInput}
          value={value}
          enterKeyHint={enterKeyHint}
          paddingRight={hasClearButton ? clearSlotWidth : undefined}
          placeholderTextColor="$foregroundInverseDisabled">
          {children}
        </InputValue>

        {hasClearButton && (
          <View
            position="absolute"
            top={0}
            right={0}
            height="100%"
            display="flex"
            alignItems="center"
            paddingHorizontal="$sm"
            zIndex="$10">
            <View
              position="absolute"
              left={0}
              top="20%"
              height="60%"
              borderLeftWidth={1}
              borderColor={
                disabled
                  ? "$borderDisabled"
                  : focused
                    ? "$borderFocused"
                    : "$border"
              }
              $group-field-hover={{
                borderColor: disabled ? "$borderDisabled" : "$borderHover"
              }}
            />
            <Button
              variant="link"
              circular={true}
              noPadding={true}
              disabled={disabled}
              color={disabled ? "$borderDisabled" : "$border"}
              onClick={onClear}
              size={adjustedTrigger}>
              <Button.Icon
                $group-field-hover={{
                  color: disabled ? "$borderDisabled" : "$borderHover"
                }}>
                <X />
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
  ({ children, flexBasis: _flexBasis, ...props }, forwardedRef) => {
    const { circular, size } = InputContext.useStyledContext();
    const controlSize =
      size === "$true" || String(size) === "true" ? "$10xl" : size;
    const frameSize = useMemo(() => getSized(controlSize), [controlSize]);

    const adjustedTrigger = useMemo(
      // Button.Icon applies its standard six-step glyph reduction. A frame
      // two steps below the control therefore matches Field.Icon glyphs.
      () => getSized(controlSize, { shift: -2 }),
      [controlSize]
    );

    return (
      <XGroup.Item flexShrink={0}>
        <View
          width={frameSize}
          minWidth={frameSize}
          paddingHorizontal="$xl"
          display="flex"
          flexShrink={0}
          alignItems="center"
          justifyContent="center">
          <Button
            ref={forwardedRef}
            variant="link"
            borderRadius={circular ? 100_000 : "$button"}
            noPadding={true}
            color="$foregroundInverse"
            {...props}
            width={props.width ?? adjustedTrigger}
            minWidth={props.minWidth ?? props.width ?? adjustedTrigger}
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

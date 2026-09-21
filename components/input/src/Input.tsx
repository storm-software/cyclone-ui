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
import { useFieldHasValidationMessage } from "@cyclone-ui/field";
import {
  formSizeVariants,
  getFormSizeToken,
  getSized,
  type FormControlSize
} from "@cyclone-ui/helpers";
import type { GetProps, VariantSpreadExtras } from "@tamagui/core";
import { styled, View, withStaticProperties } from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { XStack } from "@tamagui/stacks";
import { useCallback, useMemo, useState } from "react";
import { InputValue } from "./InputValue";
import type { InputContextProps } from "./types";
import { getInputSize, InputContext } from "./utilities";

const getInputFrameSize = (
  val: FormControlSize,
  extras: VariantSpreadExtras<any>
) => ({
  ...getInputSize(val, extras),
  paddingHorizontal: 0
});

export const ControlUnderline = styled(View, {
  name: "ControlUnderline",

  transition: "200ms",
  position: "absolute",
  left: 0,
  bottom: 0,
  width: 0,
  height: "$xxs",
  backgroundColor: "$accentActive",
  pointerEvents: "none",

  variants: {
    focused: {
      true: {
        width: "100%"
      }
    },

    disabled: {
      true: {
        width: 0,
        backgroundColor: "$accentDisabled"
      }
    }
  } as const,

  defaultVariants: {
    focused: false,
    disabled: false
  }
});

const InputGroup = styled(XGroup, {
  name: "Input",
  context: InputContext,

  transition: "200ms",
  position: "relative",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "$surfaceElevated",
  borderWidth: 1,
  borderColor: "$hairline",
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
    boxShadow: "$ringOffset",
    borderColor: "$accentActive"
  },

  variants: {
    focused: {
      true: (_val: boolean, { props }: VariantSpreadExtras<any>) => ({
        boxShadow: props.variant === "underline" ? "none" : "$ringOffset",
        borderColor: "$accentActive"
      })
    },

    hasValidationMessage: {
      true: {
        borderColor: "$accent",
        hoverStyle: { borderColor: "$accentHover" }
      }
    },

    variant: {
      default: {},
      floating: {},
      underline: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "$hairline",
        borderRadius: 0,
        boxShadow: "none",

        hoverStyle: {
          borderColor: "$accentHover"
        },

        focusVisibleStyle: {
          borderColor: "$accent",
          boxShadow: "none"
        }
      }
    },

    // Keep frame dimensions separate from Tamagui's special `size` prop. A
    // `$true` size is consumed before spread variants run, leaving no height.
    frameSize: formSizeVariants(getInputFrameSize),

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed",
        borderColor: "$accentDisabled",

        hoverStyle: {
          borderColor: "$accentDisabled"
        },

        focusStyle: {
          borderColor: "$accentDisabled"
        },

        pressStyle: {
          borderColor: "$accentDisabled"
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
    frameSize: "md",
    disabled: false,
    focused: false,
    circular: false,
    variant: "default"
  }
});

const InputGroupImpl = InputGroup.styleable<Partial<InputContextProps>>(
  (props, forwardedRef) => {
    const {
      children,
      size = "md",
      variant = "default",
      onChange,
      onInput,
      onFocus,
      onBlur,
      focused = false,
      disabled = false,
      ...rest
    } = props;
    const [locallyActive, setLocallyActive] = useState(false);
    const frameSize = size;
    const handleFocus = useCallback(
      (event: any) => {
        setLocallyActive(true);
        onFocus?.(event);
      },
      [onFocus]
    );
    const handleBlur = useCallback(
      (event: any) => {
        if (!event.currentTarget?.contains?.(event.relatedTarget)) {
          setLocallyActive(false);
        }
        onBlur?.(event);
      },
      [onBlur]
    );
    const underlineActive = focused || locallyActive;
    const hasValidationMessage = useFieldHasValidationMessage();
    const idleColor = hasValidationMessage ? "$accent" : "$hairline";
    const focusColor = hasValidationMessage
      ? "$accentActive"
      : "$hairlineActive";

    return (
      <InputContext.Provider
        {...rest}
        size={size}
        variant={variant}
        focused={focused}
        hasValidationMessage={hasValidationMessage}
        disabled={disabled}
        onChange={onChange}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}>
        <InputGroup
          ref={forwardedRef}
          {...rest}
          frameSize={frameSize}
          variant={variant}
          focused={focused}
          hasValidationMessage={hasValidationMessage}
          disabled={disabled}
          borderColor={focused ? focusColor : idleColor}
          focusVisibleStyle={{
            boxShadow: variant === "underline" ? "none" : "$ringOffset",
            borderColor: focusColor
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          transition="200ms"
          $group-field-hover={{
            borderColor: disabled
              ? "$accentDisabled"
              : focused
                ? focusColor
                : "$accentHover"
          }}>
          {children}
          {variant === "underline" && (
            <ControlUnderline
              bottom={-1}
              focused={underlineActive}
              disabled={disabled}
              backgroundColor={disabled ? "$accentDisabled" : focusColor}
            />
          )}
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
  borderColor: "$hairline",
  width: 0,
  flexShrink: 0,
  height: "60%",
  marginVertical: "$none",

  hoverStyle: {
    borderColor: "$hairlineHover"
  },

  variants: {
    focused: {
      true: {
        borderColor: "$hairlineActive"
      }
    },

    hasValidationMessage: {
      true: { borderColor: "$accent" }
    },

    variant: {
      default: {},
      floating: {},
      underline: {
        borderWidth: 0
      }
    },

    disabled: {
      true: {
        borderColor: "$hairlineInactive",

        hoverStyle: {
          borderColor: "$hairlineInactive"
        },

        focusStyle: {
          borderColor: "$hairlineInactive"
        },

        pressStyle: {
          borderColor: "$hairlineInactive"
        }
      }
    }
  } as const,

  defaultVariants: {
    disabled: false,
    focused: false,
    variant: "default"
  }
});

const InputSeparatorImpl = InputSeparator.styleable(
  (props, forwardedRef) => {
    const { disabled, focused, hasValidationMessage } =
      InputContext.useStyledContext();
    const idleColor = hasValidationMessage ? "$accent" : "$hairline";
    const focusColor = hasValidationMessage
      ? "$accentActive"
      : "$hairlineActive";
    const hoverColor = hasValidationMessage ? "$accentHover" : "$hairlineHover";

    return (
      <XGroup.Item>
        <InputSeparator
          ref={forwardedRef}
          $group-field-hover={{
            borderColor: disabled
              ? "$hairlineInactive"
              : focused
                ? focusColor
                : hoverColor
          }}
          borderColor={focused ? focusColor : idleColor}
          hasValidationMessage={hasValidationMessage}
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

const InputValueImpl = InputValue.styleable(
  ({ children, enterKeyHint = "done", value, ...props }, forwardedRef) => {
    const { onChange: contextOnChange, onInput: contextOnInput } =
      InputContext.useStyledContext();

    return (
      <View position="relative" height="100%" flex={1} minWidth={0}>
        <InputValue
          ref={forwardedRef}
          {...props}
          onChange={props.onChange ?? contextOnChange}
          onInput={props.onInput ?? contextOnInput}
          value={value}
          enterKeyHint={enterKeyHint}
          placeholderTextColor="$onAccentDisabled">
          {children}
        </InputValue>
      </View>
    );
  },
  { staticConfig: { componentName: "InputValue" } }
);

const InputTrigger = Button.styleable<{
  forcePlacement?: GetProps<typeof XGroup.Item>["forcePlacement"];
  size?: FormControlSize;
}>(
  (
    { children, size: sizeProp, flexBasis: _flexBasis, ...props },
    forwardedRef
  ) => {
    const { circular, size } = InputContext.useStyledContext();
    const controlSize = getFormSizeToken(sizeProp ?? size);
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
            color="$onAccent"
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

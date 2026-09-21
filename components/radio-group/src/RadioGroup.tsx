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

import { useFieldHasValidationMessage } from "@cyclone-ui/field";
import {
  formSizeVariants,
  getFormSizeScale,
  getSized,
  getSpaced,
  type FormControlSize
} from "@cyclone-ui/helpers";
import type { SelectOption } from "@stryke/types/form";
import type { ColorTokens } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { RadioGroup as TamaguiRadioGroup } from "@tamagui/radio-group";
import { XStack, YStack } from "@tamagui/stacks";

export interface RadioGroupContextProps {
  name?: string;
  size: FormControlSize;
  color?: ColorTokens | string;
  disabled: boolean;
  required: boolean;
  hasValidationMessage: boolean;
}

export const RadioGroupContext = createStyledContext<RadioGroupContextProps>({
  size: "md",
  disabled: false,
  required: false,
  hasValidationMessage: false
});

const RadioGroupItem = styled(TamaguiRadioGroup.Item, {
  name: "RadioGroupItem",
  context: RadioGroupContext,

  transition: "200ms",
  borderRadius: 100_000,
  unstyled: true,
  cursor: "pointer",
  height: "$5xl",
  width: "$5xl",
  alignItems: "center",
  justifyContent: "center",

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  variants: {
    size: formSizeVariants(size => ({
      height: getSized("$5xl") * getFormSizeScale(size),
      width: getSized("$5xl") * getFormSizeScale(size)
    })),

    disabled: {
      true: {
        borderColor: "$accentDisabled",
        userSelect: "none",
        cursor: "not-allowed",

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
    }
  } as const,

  defaultVariants: {
    size: "md",
    disabled: false
  }
});

const RadioGroupItemIndicator = styled(TamaguiRadioGroup.Indicator, {
  name: "RadioGroupItemValue",
  context: RadioGroupContext,

  transition: "200ms",
  cursor: "pointer",
  borderRadius: 100_000,
  backgroundColor: "$accent",
  height: "65%",
  width: "65%",

  enterStyle: {
    scale: 0.4,
    opacity: 0
  },

  exitStyle: {
    scale: 0.8,
    opacity: 0
  },

  variants: {
    disabled: {
      true: {
        placeholderColor: "$accentDisabled",
        backgroundColor: "$accentDisabled",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          backgroundColor: "$accentDisabled"
        },

        focusStyle: {
          backgroundColor: "$accentDisabled"
        },

        pressStyle: {
          backgroundColor: "$accentDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const RadioGroupItemContainerFrame = styled(XStack, {
  name: "RadioGroupItem",
  context: RadioGroupContext,

  transition: "200ms",
  cursor: "pointer",
  gap: "$3xl",
  boxShadow: "none",
  borderRadius: "$control",
  borderWidth: 1,
  borderColor: "$hairline",
  paddingHorizontal: "$3xl",
  paddingVertical: "$2xl",
  alignItems: "center",
  tabIndex: 0,

  focusStyle: {
    boxShadow: "$ringOffset"
  },

  pressStyle: {
    boxShadow: "$ringOffset"
  },

  focusVisibleStyle: {
    boxShadow: "$ringOffset"
  },

  variants: {
    size: formSizeVariants(size => ({
      paddingHorizontal: getSpaced("$3xl") * getFormSizeScale(size),
      paddingVertical: getSpaced("$2xl") * getFormSizeScale(size),
      gap: getSpaced("$3xl") * getFormSizeScale(size)
    })),

    hasValidationMessage: {
      true: {
        borderColor: "$accent",
        hoverStyle: {
          borderColor: "$accentHover"
        }
      }
    },

    disabled: {
      true: {
        borderColor: "$accentDisabled",
        boxShadow: "none",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          borderColor: "$accentDisabled",
          boxShadow: "none"
        },

        focusStyle: {
          borderColor: "$accentDisabled",
          boxShadow: "none"
        },

        pressStyle: {
          borderColor: "$accentDisabled",
          boxShadow: "none"
        }
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const RadioGroupItemContainer = RadioGroupItemContainerFrame.styleable<
  Omit<SelectOption, "name">
>(
  (
    { children, value, disabled, selected, onPress, ...props },
    forwardedRef
  ) => {
    const { size } = RadioGroupContext.useStyledContext();
    const hasValidationMessage = useFieldHasValidationMessage();
    const focusColor = hasValidationMessage
      ? "$accentActive"
      : "$hairlineActive";

    return (
      <RadioGroupItemContainerFrame
        group={true}
        ref={forwardedRef}
        {...props}
        size={size}
        hasValidationMessage={hasValidationMessage}
        focusStyle={{ boxShadow: "$ringOffset", borderColor: focusColor }}
        focusVisibleStyle={{
          boxShadow: "$ringOffset",
          borderColor: focusColor
        }}
        onPress={onPress}
        disabled={disabled}>
        {children}

        <View alignSelf="center" onPress={e => e.stopPropagation()}>
          <RadioGroupItem
            id={String(value)}
            size={size}
            value={String(value)}
            disabled={disabled}
            $group-hover={{
              borderColor: disabled ? "$accentDisabled" : "$accentHover"
            }}>
            {selected && <RadioGroupItemIndicator />}
          </RadioGroupItem>
        </View>
      </RadioGroupItemContainerFrame>
    );
  },
  { staticConfig: { componentName: "RadioGroupItem" } }
);

const RadioGroupFrame = styled(TamaguiRadioGroup, {
  name: "RadioGroup",
  context: RadioGroupContext,

  transition: "200ms",
  cursor: "pointer",
  flexDirection: "column",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  borderColor: "transparent",
  width: "100%",

  variants: {
    size: formSizeVariants(size => ({
      gap: getSpaced("$2xl") * getFormSizeScale(size)
    })),

    disabled: {
      true: {
        cursor: "not-allowed",
        backgroundColor: "transparent"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const RadioGroupImpl = RadioGroupFrame.styleable<{
  defaultValue?: string | null;
  size?: FormControlSize;
}>(
  (
    { children, name, required, disabled, value, defaultValue, ...props },
    forwardedRef
  ) => {
    const { size } = RadioGroupContext.useStyledContext();

    return (
      <RadioGroupFrame
        id={name}
        ref={forwardedRef}
        size={size}
        {...props}
        value={String(value ?? "")}
        defaultValue={String(defaultValue ?? "")}
        required={required}
        disabled={disabled}>
        <YStack
          justifyContent="flex-start"
          gap="$2xl"
          width="100%"
          $max-sm={{
            paddingHorizontal: "$5xl",
            paddingVertical: "$6xl"
          }}>
          {children}
        </YStack>
      </RadioGroupFrame>
    );
  },
  { staticConfig: { componentName: "RadioGroup" } }
);

export const RadioGroup = withStaticProperties(RadioGroupImpl, {
  Item: RadioGroupItemContainer
});

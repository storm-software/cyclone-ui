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

import type { SelectOption } from "@stryke/types/form";
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens, SizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { getFontSized } from "@tamagui/get-font-sized";
import { getSize, getSpace } from "@tamagui/get-token";
import { RadioGroup as TamaguiRadioGroup } from "@tamagui/radio-group";
import { XStack, YStack } from "@tamagui/stacks";

export interface RadioGroupContextProps {
  name?: string;
  size: FontSizeTokens;
  color?: ColorTokens | string;
  disabled: boolean;
  required: boolean;
}

export const RadioGroupContext = createStyledContext<RadioGroupContextProps>({
  size: "$true",
  disabled: false,
  required: false
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

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  focusVisibleStyle: {
    boxShadow: "$ring",
    backgroundColor: "backgroundElevatedFocused"
  },

  variants: {
    size: {
      "...size": (val: SizeTokens | number) => {
        if (!val) {
          return;
        }
        if (val === "$true" || String(val) === "true") {
          return;
        }
        if (typeof val === "number") {
          return {
            height: val * 0.75,
            width: val * 0.75
          };
        }

        const size = getSize(val);

        return {
          height: size.val * 0.75,
          width: size.val * 0.75
        };
      }
    },

    disabled: {
      true: {
        borderColor: "$borderDisabled",
        userSelect: "none",
        cursor: "not-allowed",

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
    size: "$true",
    disabled: false
  }
});

const RadioGroupItemIndicator = styled(TamaguiRadioGroup.Indicator, {
  name: "RadioGroupItemValue",
  context: RadioGroupContext,

  transition: "200ms",
  cursor: "pointer",
  borderRadius: 100_000,
  backgroundColor: "$foreground",
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
        placeholderColor: "$foregroundDisabled",
        backgroundColor: "$foregroundDisabled",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          backgroundColor: "$foregroundDisabled"
        },

        focusStyle: {
          backgroundColor: "$foregroundDisabled"
        },

        pressStyle: {
          backgroundColor: "$foregroundDisabled"
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

  cursor: "pointer",
  gap: "$3xl",
  boxShadow: "none",
  borderRadius: "$control",
  borderWidth: 1,
  borderColor: "$border",
  paddingHorizontal: "$3xl",
  paddingVertical: "$2xl",
  alignItems: "center",
  tabIndex: 0,

  hoverStyle: {
    backgroundColor: "backgroundElevatedHover"
  },

  focusStyle: {
    boxShadow: "$ring",
    backgroundColor: "backgroundElevatedFocused"
  },

  pressStyle: {
    boxShadow: "$ring",
    backgroundColor: "backgroundElevatedPressed"
  },

  focusVisibleStyle: {
    boxShadow: "$ring",
    backgroundColor: "backgroundElevatedFocused"
  },

  variants: {
    size: {
      "...size": (val: SizeTokens | number) => {
        if (!val) {
          return;
        }
        if (typeof val === "number") {
          return {
            paddingHorizontal: val,
            paddingVertical: val * 0.85
          };
        }

        const space = getSpace(val);

        return {
          paddingHorizontal: space.val,
          paddingVertical: space.val * 0.85
        };
      }
    },

    disabled: {
      true: {
        borderColor: "$borderDisabled",
        boxShadow: "none",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          borderColor: "$borderDisabled",
          boxShadow: "none"
        },

        focusStyle: {
          borderColor: "$borderDisabled",
          boxShadow: "none"
        },

        pressStyle: {
          borderColor: "$borderDisabled",
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

    return (
      <RadioGroupItemContainerFrame
        group={true}
        ref={forwardedRef}
        {...props}
        size={size}
        onPress={onPress}
        disabled={disabled}>
        <View onPress={e => e.stopPropagation()}>
          <RadioGroupItem
            id={String(value)}
            size={size}
            value={String(value)}
            disabled={disabled}
            $group-hover={{
              borderColor: disabled ? "$borderDisabled" : "$borderHover"
            }}>
            {selected && <RadioGroupItemIndicator />}
          </RadioGroupItem>
        </View>

        {children}
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
    size: {
      "...size": (val = "$true", extras) => {
        const fontStyle = getFontSized(val as any, extras as any);
        // lineHeight messes up select on native
        if (!isWeb && fontStyle) {
          delete fontStyle.lineHeight;
        }

        return {
          ...fontStyle
        };
      }
    },

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

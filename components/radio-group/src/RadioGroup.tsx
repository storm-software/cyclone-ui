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

import { SelectOption } from "@storm-stack/types/utility-types/form";
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { getFontSized } from "@tamagui/get-font-sized";
import { RadioGroup as TamaguiRadioGroup } from "@tamagui/radio-group";
import { XStack, YStack } from "@tamagui/stacks";

export type RadioGroupContextProps = {
  name?: string;
  size: FontSizeTokens;
  color?: ColorTokens | string;
  hideIcons: boolean;
  disabled: boolean;
  focused: boolean;
  required: boolean;
};

export const RadioGroupContext = createStyledContext<RadioGroupContextProps>({
  size: "$true",
  color: undefined,
  hideIcons: false,
  disabled: false,
  focused: false,
  required: false
});

export const defaultRadioGroupStyles = {
  size: "$true",
  fontFamily: "$body",
  fontSize: "$4",
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
  minWidth: 0
} as const;

export const RADIO_GROUP_NAME = "RadioGroup";

const RadioGroupItem = styled(TamaguiRadioGroup.Item, {
  name: RADIO_GROUP_NAME,
  context: RadioGroupContext,

  radiused: true,
  hoverTheme: false,
  pressTheme: true,

  animation: "slow",
  size: "$true",
  backgroundColor: "transparent",

  hoverStyle: {
    borderColor: "$accent10",
    backgroundColor: "transparent"
  },

  variants: {
    unstyled: {
      false: {
        ...defaultRadioGroupStyles
      }
    },

    size: {
      "...size": (val = "$true") => {
        return {
          height: val,
          width: val
        };
      }
    },

    // selected: {
    //   true: {
    //     outlineColor: "$accent10",
    //     outlineWidth: 2,
    //     outlineOffset: "$1.25",
    //     outlineStyle: "solid",
    //     borderColor: "$borderColorFocus"
    //   }
    // },

    disabled: {
      true: {
        color: "$disabled",
        borderColor: "$disabled",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$disabled",
          borderColor: "$disabled"
        },

        focusStyle: {
          color: "$disabled",
          borderColor: "$disabled"
        },

        pressStyle: {
          color: "$disabled",
          borderColor: "$disabled"
        }
      },
      false: {
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1",
    // selected: false,
    disabled: false
  }
});

const RadioGroupItemIndicator = styled(TamaguiRadioGroup.Indicator, {
  name: RADIO_GROUP_NAME,
  context: RadioGroupContext,

  animation: "slow",
  borderRadius: 100_000,
  backgroundColor: "$fg",
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
        color: "$disabled",
        placeholderColor: "$disabled",
        backgroundColor: "transparent",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$disabled"
        },

        focusStyle: {
          color: "$disabled"
        },

        pressStyle: {
          color: "$disabled"
        }
      },
      false: {
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const RadioGroupItemContainerFrame = styled(XStack, {
  name: RADIO_GROUP_NAME,
  context: RadioGroupContext,

  animation: "slow",
  gap: "$3",
  backgroundColor: "$background",
  borderRadius: "$4",
  borderWidth: 1,
  borderColor: "$borderColor",
  paddingHorizontal: "$3",
  paddingVertical: "$2.5",
  alignItems: "center",

  hoverStyle: {
    borderColor: "$accent10"
  },

  focusStyle: {
    outlineColor: "$accent10",
    outlineWidth: 2,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  },

  variants: {
    unstyled: {
      false: {
        ...defaultRadioGroupStyles
      }
    },

    disabled: {
      true: {
        color: "$disabled",
        borderColor: "$disabled",
        backgroundColor: "transparent",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          borderColor: "$disabled",
          color: "$disabled",
          backgroundColor: "transparent"
        },

        focusStyle: {
          borderColor: "$disabled",
          color: "$disabled",
          backgroundColor: "transparent"
        },

        pressStyle: {
          borderColor: "$disabled",
          color: "$disabled",
          backgroundColor: "transparent"
        }
      },
      false: {
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1",
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
        onPress={onPress}
        disabled={disabled}>
        <View onPress={e => e.stopPropagation()}>
          <RadioGroupItem
            id={String(value)}
            size={size}
            value={String(value)}
            disabled={disabled}
            selected={selected}
            $group-hover={{
              borderColor: disabled
                ? "$disabled"
                : selected
                  ? "$colorFocus"
                  : "$accent10"
            }}
            $group-focus={{
              outlineColor: "$accent10",
              outlineWidth: 2,
              outlineOffset: "$1.25",
              outlineStyle: "solid",
              borderColor: "$borderColorFocus"
            }}>
            {selected && <RadioGroupItemIndicator />}
          </RadioGroupItem>
        </View>

        {children}
      </RadioGroupItemContainerFrame>
    );
  }
);

const RadioGroupFrame = styled(TamaguiRadioGroup, {
  name: RADIO_GROUP_NAME,
  context: RadioGroupContext,

  animation: "fast",
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
          delete fontStyle["lineHeight"];
        }

        return {
          ...fontStyle
        };
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        color: "$disabled",
        backgroundColor: "transparent"
      },
      false: {
        cursor: "pointer"
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
          gap="$2.5"
          $sm={{
            paddingHorizontal: "$4",
            paddingVertical: "$4.5"
          }}>
          {children}
        </YStack>
      </RadioGroupFrame>
    );
  }
);

export const RadioGroup = withStaticProperties(RadioGroupImpl, {
  Item: RadioGroupItemContainer
});

import {
  FieldStatusIcon,
  Label,
  useFieldActions,
  useFieldStore
} from "@cyclone-ui/form";
import { ThemeableIconWrapper } from "@cyclone-ui/themeable-icon";
import { useEvent } from "@storm-stack/hooks/use-event";
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
import { Paragraph } from "@tamagui/text";
import type { SizeVariantSpreadFunction } from "@tamagui/web";
import { useLayoutEffect, useMemo } from "react";

const defaultContextValues = {
  size: "$true",
  color: undefined,
  hideIcons: true
} as const;

export const RadioGroupContext = createStyledContext<{
  size: FontSizeTokens;
  color?: ColorTokens | string;
  hideIcons: boolean;
}>(defaultContextValues);

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

export const radioGroupSizeVariant: SizeVariantSpreadFunction<any> = (
  val = "$true",
  extras
) => {
  const fontStyle = getFontSized(val as any, extras);
  // lineHeight messes up select on native
  if (!isWeb && fontStyle) {
    delete fontStyle["lineHeight"];
  }

  return {
    ...fontStyle
  };
};

export const RADIO_GROUP_NAME = "RadioGroup";

const RadioGroupItemLabel = styled(Label, {
  name: RADIO_GROUP_NAME,
  context: RadioGroupContext,

  animation: "100ms",
  color: "$base10",
  fontWeight: "$3",

  variants: {
    selected: {
      true: {
        color: "$fg",
        fontWeight: "$5"
      }
    },

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
    selected: false,
    disabled: false
  }
});

const RadioGroupItemDescription = styled(Paragraph, {
  name: RADIO_GROUP_NAME,
  context: RadioGroupContext,

  animation: "slow",
  fontFamily: "$body",
  fontSize: "$4",
  color: "$color",

  variants: {
    disabled: {
      true: {
        color: "$disabled",
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

const BaseRadioGroupItem = styled(TamaguiRadioGroup.Item, {
  name: RADIO_GROUP_NAME,
  context: RadioGroupContext,

  radiused: true,
  hoverTheme: false,
  pressTheme: true,
  focusable: true,

  animation: "slow",
  size: "$true",
  backgroundColor: "transparent",

  hoverStyle: {
    borderColor: "$accent10",
    backgroundColor: "transparent"
  },

  focusStyle: {
    // outlineColor: "$accent10",
    // outlineWidth: 2,
    // outlineOffset: "$1.25",
    // outlineStyle: "solid",
    borderColor: "$borderColorFocus"
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
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false,
    disabled: false
  }
});

const BaseRadioGroupItemIndicator = styled(TamaguiRadioGroup.Indicator, {
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

const RadioGroupItemContainer = styled(XStack, {
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
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false,
    disabled: false
  }
});

const RadioGroupItem = RadioGroupItemContainer.styleable<
  Partial<SelectOption> & Pick<SelectOption, "value">
>(({ children, value, description, ...rest }, forwardedRef) => {
  const { size } = RadioGroupContext.useStyledContext();

  const store = useFieldStore();
  const setItems = store.set.items();

  const fieldValue = store.get.value();
  const fieldDisabled = store.get.disabled();

  const selected = useMemo(() => fieldValue === value, [fieldValue, value]);
  const disabled = useMemo(
    () => !!(fieldDisabled || rest.disabled),
    [fieldDisabled, rest.disabled]
  );

  useLayoutEffect(() => {
    setItems(prev => [
      ...prev.filter(item => item.value !== value),
      {
        name: children,
        value,
        disabled,
        selected,
        description
      } as SelectOption
    ]);
  }, [disabled, value, selected]);

  const { change } = useFieldActions();
  const handlePress = useEvent(() => change(value));

  return (
    <RadioGroupItemContainer
      group={true}
      ref={forwardedRef}
      onPress={handlePress}
      {...rest}
      disabled={disabled}>
      <View onPress={e => e.stopPropagation()}>
        <BaseRadioGroupItem
          id={String(value)}
          size={size}
          value={String(value)}
          disabled={disabled}
          $group-hover={{
            borderColor: disabled
              ? "$disabled"
              : selected
                ? "$colorFocus"
                : "$accent10"
          }}>
          {selected && <BaseRadioGroupItemIndicator />}
        </BaseRadioGroupItem>
      </View>
      <YStack gap="$1" justifyContent="flex-start" flex={1}>
        <RadioGroupItemLabel
          htmlFor={String(value)}
          size={size}
          disabled={disabled}
          focused={selected}
          selected={selected}
          $group-hover={{
            color: disabled ? "$disabled" : selected ? "$fg" : "$base10"
          }}>
          {children}
        </RadioGroupItemLabel>
        {description && (
          <RadioGroupItemDescription
            size={size}
            disabled={disabled}
            display="flex">
            {description}
          </RadioGroupItemDescription>
        )}
      </YStack>

      {disabled && <FieldStatusIcon disabled={true} />}
    </RadioGroupItemContainer>
  );
});

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
      "...size": radioGroupSizeVariant
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

const RadioGroupImpl = RadioGroupFrame.styleable(
  ({ children, ...rest }, forwardedRef) => {
    const { size } = RadioGroupContext.useStyledContext();

    const store = useFieldStore();
    const disabled = store.get.disabled();
    const value = store.get.value();
    const required = store.get.required();

    const { change } = useFieldActions();

    return (
      <RadioGroupFrame
        id={store.get.name()}
        ref={forwardedRef}
        size={size}
        {...rest}
        onValueChange={change}
        value={String(value ?? "")}
        defaultValue={String(store.get.initialValue() ?? "")}
        required={required}
        disabled={disabled}>
        <YStack
          justifyContent="flex-start"
          gap="$3"
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
  Icon: ThemeableIconWrapper,
  Item: RadioGroupItem
});

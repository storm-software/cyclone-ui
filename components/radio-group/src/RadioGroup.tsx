import { useCallback, useId, useMemo, useState } from "react";
import { ColorRole } from "@cyclone-ui/types";
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  getVariable,
  styled,
  Text,
  useTheme,
  useThemeName,
  View
} from "@tamagui/core";
import { getFontSize } from "@tamagui/font-size";
import { getFontSized } from "@tamagui/get-font-sized";
import { getSpace } from "@tamagui/get-token";
import { withStaticProperties } from "@tamagui/helpers";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import { Label } from "@tamagui/label";
import {
  AlertCircle,
  Asterisk,
  CheckCircle,
  HelpCircle,
  Info,
  Lock
} from "@tamagui/lucide-icons";
import { RadioGroup as TamaguiRadioGroup } from "@tamagui/radio-group";
import { ThemeableStack, XStack } from "@tamagui/stacks";
import type {
  GetProps,
  SizeVariantSpreadFunction,
  TextProps,
  VariantSpreadExtras
} from "@tamagui/web";

export const RADIO_GROUP_NAME = "RadioGroup";

const defaultContextValues = {
  size: "$true",
  scaleIcon: 1.3,
  color: undefined,
  required: false,
  disabled: false,
  theme: `${ColorRole.BASE}_RadioGroup`
} as const;

export const RadioGroupContext = createStyledContext<{
  size: FontSizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
  required: boolean;
  disabled: boolean;
  theme: string;
}>(defaultContextValues);

const InternalStateContext = createStyledContext({
  name: undefined as string | undefined,
  setLabel: (val: string | React.ReactNode) => {},
  label: "" as string | React.ReactNode,
  setValue: (val?: string) => {},
  value: undefined as string | undefined,
  setFocused: (val: boolean) => {},
  focused: false
});

export const radioGroupSizeVariant: SizeVariantSpreadFunction<any> = (
  val = "$true",
  extras
) => {
  const radiusToken =
    extras.tokens.radius[val] ?? extras.tokens.radius["$true"];
  const paddingHorizontal = getSpace(val, {
    shift: -1,
    bounds: [2]
  });
  const fontStyle = getFontSized(val as any, extras);
  // lineHeight messes up radio-group on native
  if (!isWeb && fontStyle) {
    delete fontStyle["lineHeight"];
  }

  return {
    ...fontStyle,
    height: val,
    borderRadius: extras.props.circular ? 100_000 : radiusToken,
    paddingHorizontal
  };
};

// Icon starts

export const RadioGroupIconFrame = styled(View, {
  name: RADIO_GROUP_NAME,
  justifyContent: "center",
  alignItems: "center",
  context: RadioGroupContext,
  animation: "$slow",
  borderColor: "transparent",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        let spaceToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          spaceToken = (tokens.space?.[val] as any)?.val;
        }

        return {
          marginRight: (spaceToken ?? 1) * 1.6
        };
      }
    }
  } as const
});

const getIconSize = (size: FontSizeTokens, scale: number) => {
  return (
    (typeof size === "number"
      ? size * 0.6
      : getFontSize(size as FontSizeTokens)) * scale
  );
};

const RadioGroupIcon = RadioGroupIconFrame.styleable<{
  scaleIcon?: number;
  color?: ColorTokens | string;
}>((props: any, ref: any) => {
  const { children, color: colorProp, ...rest } = props;
  const radioGroupContext = RadioGroupContext.useStyledContext();
  const {
    size = "$true",
    color: contextColor,
    disabled,
    scaleIcon = 1
  } = radioGroupContext;

  const themeColors = useTheme({
    name: radioGroupContext.theme
  });
  const color = disabled
    ? "$disabled"
    : getVariable(
        colorProp ||
          contextColor ||
          themeColors[contextColor as any]?.get("web") ||
          themeColors.primary?.get("web")
      );
  const iconSize = getIconSize(size as FontSizeTokens, scaleIcon);

  const getThemedIcon = useGetThemedIcon({
    size: iconSize,
    color: color as any
  });
  return (
    <RadioGroupIconFrame ref={ref} theme={radioGroupContext.theme} {...rest}>
      {getThemedIcon(children)}
    </RadioGroupIconFrame>
  );
});

export const RadioGroupFrame = styled(TamaguiRadioGroup, {
  name: RADIO_GROUP_NAME,
  context: RadioGroupContext,

  animation: "$slow",
  borderColor: "transparent",
  gap: "$3",

  ...(isWeb
    ? {
        tabIndex: 0
      }
    : {
        focusable: true
      }),

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        let spaceToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          spaceToken = (tokens.space?.[val] as any)?.val;
        }

        return {
          gap: (spaceToken ?? 1) * 0.3
        };
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    size: "$4",
    disabled: false
  }
});

export interface RadioGroupOption {
  name: React.ReactNode;
  value: string;
}

const RadioGroupFrameImpl = RadioGroupFrame.styleable<{
  options: RadioGroupOption[];
}>((props, forwardedRef) => {
  const { children, disabled, onValueChange, onFocus, onBlur, ...rest } = props;
  const [label, setLabel] = useState<string | React.ReactNode>("");
  const [value, setValue] = useState<string | undefined>(
    props.value ?? props.defaultValue
  );
  const [focused, setFocused] = useState(false);

  const id = useId();
  const name = useMemo(() => (rest.name ? rest.name : id), [id, rest.name]);

  const handleValueChange = useCallback(
    (next: string) => {
      if (next !== value) {
        onValueChange?.(next);
        setValue(next);
      }
    },
    [value, disabled]
  );
  const handleFocus = useCallback(
    (event: React.FocusEvent<HTMLDivElement, Element>) => {
      if (!disabled) {
        onFocus?.(event);
        setFocused(true);
      }
    },
    [disabled]
  );
  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLDivElement, Element>) => {
      onBlur?.(event);
      setFocused(false);
    },
    [disabled]
  );

  return (
    <InternalStateContext.Provider
      name={name}
      label={label}
      setLabel={setLabel}
      value={value}
      setValue={setValue}
      focused={focused}
      setFocused={setFocused}>
      <RadioGroupFrame
        {...rest}
        ref={forwardedRef}
        name={name}
        value={value}
        disabled={disabled}
        onValueChange={handleValueChange}
        onFocus={handleFocus}
        onBlur={handleBlur}>
        {children}
      </RadioGroupFrame>
    </InternalStateContext.Provider>
  );
});

export const RadioGroupOption = styled(TamaguiRadioGroup.Item, {
  name: RADIO_GROUP_NAME,
  context: RadioGroupContext,

  animation: "$slow",
  borderColor: "$borderColor",
  backgroundColor: "$background",
  alignItems: "center",
  cursor: "pointer",

  hoverStyle: {
    borderColor: "$accent10"
  },

  focusStyle: {
    outlineColor: "$accent10",
    outlineWidth: 2,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColor"
  },

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        let spaceToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          spaceToken = (tokens.space?.[val] as any)?.val;
        }

        return {
          gap: spaceToken ?? 1
        };
      }
    },

    disabled: {
      true: {
        color: "$disabled",
        borderColor: "$disabled",
        placeholderColor: "$disabled",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$disabled",
          borderColor: "$disabled"
        },

        focusStyle: {
          color: "$disabled",
          borderColor: "$disabled",
          outlineStyle: "none",
          outlineColor: "transparent"
        },

        pressStyle: {
          color: "$disabled",
          borderColor: "$disabled",
          outlineStyle: "none",
          outlineColor: "transparent"
        }
      }
    }
  } as const,

  defaultVariants: {
    size: "$4",
    disabled: false
  }
});

export interface RadioGroupOption {
  name: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export const RadioGroupIndicator = styled(TamaguiRadioGroup.Indicator, {
  name: RADIO_GROUP_NAME,
  context: RadioGroupContext,
  animation: "$slow",
  backgroundColor: "$base10",
  cursor: "pointer",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        let sizeToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          sizeToken = (tokens.size?.[val] as any)?.val;
        }

        return {
          height: (sizeToken ?? 1) * 0.2,
          width: (sizeToken ?? 1) * 0.2
        };
      }
    },

    disabled: {
      true: {
        color: "$disabled",
        borderColor: "$disabled",
        placeholderColor: "$disabled",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$disabled",
          borderColor: "$disabled"
        },

        focusStyle: {
          color: "$disabled",
          borderColor: "$disabled",
          outlineStyle: "none",
          outlineColor: "transparent"
        },

        pressStyle: {
          color: "$disabled",
          borderColor: "$disabled",
          outlineStyle: "none",
          outlineColor: "transparent"
        }
      }
    }
  } as const,

  defaultVariants: {
    size: "$4",
    disabled: false
  }
});

export const RadioGroupLabel = styled(Label, {
  name: "Label",
  context: RadioGroupContext,
  fontFamily: "$label",
  animation: "$slow",
  cursor: "pointer",
  color: "$base10",

  variants: {
    size: {
      "...fontSize": (
        val: FontSizeTokens,
        config: VariantSpreadExtras<TextProps>
      ) => {
        if (!config.font) {
          return;
        }

        let sizeToken = 1;
        let heightToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          sizeToken = (config.font.size?.[val] as any)?.val;
          heightToken = (config.font.lineHeight?.[val] as any)?.val;
        }

        const fontSize = (sizeToken ?? 1) * 1.25;
        const lineHeight = (heightToken ?? 1) * 1;
        const fontWeight = config.font.weight?.["$3"];
        const letterSpacing = config.font.letterSpacing?.[val];
        const textTransform = config.font.transform?.[val];
        const fontStyle = config.font.style?.[val];

        return {
          fontSize,
          lineHeight,
          fontWeight,
          letterSpacing,
          textTransform,
          fontStyle
        };
      }
    },

    focused: {
      true: {
        color: "$base12",
        fontWeight: "$5"
      }
    },

    disabled: {
      true: {
        color: "$disabled",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false,
    focused: false
  }
});

export const RadioGroupOptionLabel = styled(RadioGroupLabel, {
  name: "Label",
  context: RadioGroupContext,
  color: "$color9",

  variants: {
    size: {
      "...fontSize": (
        val: FontSizeTokens,
        config: VariantSpreadExtras<TextProps>
      ) => {
        if (!config.font) {
          return;
        }

        let sizeToken = 1;
        let heightToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          sizeToken = (config.font.size?.[val] as any)?.val;
          heightToken = (config.font.lineHeight?.[val] as any)?.val;
        }

        const fontSize = (sizeToken ?? 1) * 1;
        const lineHeight = (heightToken ?? 1) * 1;
        const fontWeight = config.font.weight?.["$3"];
        const letterSpacing = config.font.letterSpacing?.[val];
        const textTransform = config.font.transform?.[val];
        const fontStyle = config.font.style?.[val];

        return {
          fontSize,
          lineHeight,
          fontWeight,
          letterSpacing,
          textTransform,
          fontStyle
        };
      }
    },

    selected: {
      true: {
        color: "$base10",
        fontWeight: "$5"
      }
    }
  } as const,

  defaultVariants: {
    selected: false
  }
});

export const RadioGroupOptionContainer = styled(ThemeableStack, {
  name: RADIO_GROUP_NAME,
  context: RadioGroupContext,

  animation: "$slow",
  borderColor: "$borderColor",
  flexDirection: "row",
  alignItems: "center",
  gap: "$4",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        let spaceToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          spaceToken = (tokens.space?.[val] as any)?.val;
        }

        return {
          gap: spaceToken ?? 1
        };
      }
    },

    disabled: {
      true: {
        color: "$disabled",
        borderColor: "$disabled",
        placeholderColor: "$disabled",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$disabled",
          borderColor: "$disabled"
        },

        focusStyle: {
          color: "$disabled",
          borderColor: "$disabled",
          outlineStyle: "none",
          outlineColor: "transparent"
        },

        pressStyle: {
          color: "$disabled",
          borderColor: "$disabled",
          outlineStyle: "none",
          outlineColor: "transparent"
        }
      }
    }
  } as const,

  defaultVariants: {
    size: "$4",
    disabled: false
  }
});

const RadioGroupOptionImpl =
  RadioGroupOptionContainer.styleable<RadioGroupOption>(
    (props, forwardedRef) => {
      const { children, disabled, value, name, ...rest } = props;
      const {
        theme,
        size,
        disabled: fieldDisabled
      } = RadioGroupContext.useStyledContext();
      const { value: fieldValue } = InternalStateContext.useStyledContext();

      return (
        <RadioGroupOptionContainer
          ref={forwardedRef}
          group={"option" as any}
          {...rest}>
          <RadioGroupOption
            id={value}
            labelledBy={`${value}-label`}
            aria-labelledby={`${value}-label`}
            value={value}
            size={size}
            disabled={fieldDisabled || disabled}
            $group-option-hover={
              fieldDisabled || disabled
                ? {}
                : {
                    borderColor: "$accent10",
                    backgroundColor: "$background"
                  }
            }>
            <RadioGroupIndicator
              theme={theme}
              size={size}
              disabled={fieldDisabled || disabled}
            />
          </RadioGroupOption>
          <RadioGroupOptionLabel
            id={`${value}-label`}
            htmlFor={value}
            theme={theme}
            size={size}
            disabled={fieldDisabled || disabled}
            selected={!fieldDisabled && !disabled && value === fieldValue}
            $group-option-hover={
              fieldDisabled || disabled
                ? {}
                : {
                    color: "$color11"
                  }
            }>
            {name}
          </RadioGroupOptionLabel>
        </RadioGroupOptionContainer>
      );
    }
  );

const RadioGroupLabelImpl = RadioGroupLabel.styleable((props, forwardedRef) => {
  const { required, disabled } = RadioGroupContext.useStyledContext();
  const { name, focused } = InternalStateContext.useStyledContext();
  const { children, ...rest } = props;
  const theme = useThemeName();

  return (
    <XStack justifyContent="space-between" alignContent="center">
      <XStack gap="$1.2">
        <RadioGroupLabel
          ref={forwardedRef}
          {...rest}
          disabled={disabled}
          htmlFor={name}
          focused={focused}
          theme="base">
          {children}
        </RadioGroupLabel>
        {required && (
          <View position="relative">
            <Asterisk
              color="$error8"
              size="$0.75"
              position="absolute"
              top={-2}
            />
          </View>
        )}
      </XStack>
      {theme &&
        (theme.toLowerCase().includes(ColorRole.ERROR) ||
          theme.toLowerCase().includes(ColorRole.WARNING)) && (
          <RadioGroupIcon>
            <AlertCircle />
          </RadioGroupIcon>
        )}
      {!disabled && theme && theme.toLowerCase().includes(ColorRole.INFO) && (
        <RadioGroupIcon>
          <Info />
        </RadioGroupIcon>
      )}
      {!disabled && theme && theme.toLowerCase().includes(ColorRole.HELP) && (
        <RadioGroupIcon>
          <HelpCircle />
        </RadioGroupIcon>
      )}
      {!disabled &&
        theme &&
        theme.toLowerCase().includes(ColorRole.SUCCESS) && (
          <RadioGroupIcon>
            <CheckCircle />
          </RadioGroupIcon>
        )}
      {disabled && (
        <RadioGroupIcon>
          <Lock />
        </RadioGroupIcon>
      )}
    </XStack>
  );
});

export const RadioGroupDetails = styled(Text, {
  name: RADIO_GROUP_NAME,
  context: RadioGroupContext,
  animation: "$slow",
  color: "$borderColor",
  marginTop: "$0.5",
  fontStyle: "italic",
  opacity: 1,

  enterStyle: {
    opacity: 0,
    x: 10
  },

  exitStyle: {
    opacity: 0,
    x: 10
  },

  variants: {
    size: {
      "...fontSize": (val: any, { font }: any) => {
        if (!font) {
          return;
        }

        let sizeToken = 1;
        let heightToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          sizeToken = (font.size?.[val] as any)?.val;
          heightToken = (font.lineHeight?.[val] as any)?.val;
        }

        const fontSize = (sizeToken ?? 1) * 1.05;
        const lineHeight = (heightToken ?? 1) * 1;
        const fontWeight = font.weight?.["$3"];
        const letterSpacing = font.letterSpacing?.[val];
        const textTransform = font.transform?.[val];
        const fontStyle = font.style?.[val];

        return {
          fontSize,
          lineHeight,
          fontWeight,
          letterSpacing,
          textTransform,
          fontStyle
        };
      }
    },

    disabled: {
      true: {
        color: "$disabled"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const RadioGroupDetailsImpl = RadioGroupDetails.styleable(
  (props, forwardedRef) => {
    const { disabled } = RadioGroupContext.useStyledContext();
    const { name } = InternalStateContext.useStyledContext();
    const { children, ...rest } = props;

    return (
      <RadioGroupDetails
        ref={forwardedRef}
        disabled={disabled}
        htmlFor={name}
        {...rest}>
        {children}
      </RadioGroupDetails>
    );
  }
);

export type RadioGroupFrameProps = GetProps<typeof RadioGroupFrameImpl>;

export type RadioGroupExtraProps = {
  required?: boolean;
};

export type RadioGroupProps = RadioGroupFrameProps & RadioGroupExtraProps;

export const RadioGroup = withStaticProperties(RadioGroupFrameImpl, {
  Option: RadioGroupOptionImpl,
  Details: RadioGroupDetailsImpl,
  Label: RadioGroupLabelImpl
});

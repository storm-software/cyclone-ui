import { createRef, useId, useRef, useState } from "react";
import { ColorRole } from "@cyclone-ui/types";
import { Checkbox as TamaguiCheckbox } from "@tamagui/checkbox";
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
import { XGroup } from "@tamagui/group";
import { withStaticProperties } from "@tamagui/helpers";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import { Label } from "@tamagui/label";
import {
  AlertCircle,
  Asterisk,
  Check,
  CheckCircle,
  HelpCircle,
  Info,
  Lock
} from "@tamagui/lucide-icons";
import { ThemeableStack, XStack, YStack } from "@tamagui/stacks";
import type {
  GetProps,
  SizeVariantSpreadFunction,
  TextProps,
  VariantSpreadExtras
} from "@tamagui/web";

const defaultContextValues = {
  size: "$true",
  scaleIcon: 1.3,
  color: undefined,
  required: false,
  disabled: false,
  theme: `${ColorRole.BASE}_Checkbox`
} as const;

export const CheckboxContext = createStyledContext<{
  size: FontSizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
  required: boolean;
  disabled: boolean;
  theme: string;
}>(defaultContextValues);

const FocusContext = createStyledContext({
  setFocused: (val: boolean) => {},
  focused: false
});

const DEFAULT_CHECKBOX_NAME = "checkbox_default_name";
const NameContext = createStyledContext({
  name: DEFAULT_CHECKBOX_NAME
});

export const checkboxSizeVariant: SizeVariantSpreadFunction<any> = (
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
  // lineHeight messes up checkbox on native
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

const CheckboxValue = styled(View, {
  name: "Checkbox",
  context: CheckboxContext,

  animation: "$slow",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "$borderColor",
  borderRadius: "$3",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "$3",

  ...(isWeb
    ? {
        tabIndex: 0
      }
    : {
        focusable: true
      }),

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

  focusVisibleStyle: {
    outlineColor: "$accent10",
    outlineWidth: 2,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  },

  pressStyle: {
    outlineColor: "$accent10",
    outlineWidth: 2,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  },

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        let spaceToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          spaceToken = (tokens.space?.[val] as any)?.val;
        }

        return {
          width: (spaceToken ?? 1) * 1.2,
          height: (spaceToken ?? 1) * 1.2
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

const CheckboxValueImpl = CheckboxValue.styleable((props, ref) => {
  const { setFocused } = FocusContext.useStyledContext();
  const { disabled, size, theme } = CheckboxContext.useStyledContext();

  return (
    <CheckboxValue
      ref={ref}
      onFocus={() => {
        setFocused(!disabled);
      }}
      onBlur={() => setFocused(false)}
      {...props}
      size={size}
      disabled={disabled}>
      <TamaguiCheckbox.Indicator>
        <Check
          height="$1.5"
          width="$1"
          color="$primary"
          animation="slow"
          theme={theme}
          enterStyle={{
            scale: 1.5,
            y: -10,
            opacity: 0
          }}
        />
      </TamaguiCheckbox.Indicator>
    </CheckboxValue>
  );
});

// Icon starts

export const CheckboxIconFrame = styled(View, {
  name: "Checkbox",
  justifyContent: "center",
  alignItems: "center",
  context: CheckboxContext,
  animation: "$slow",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          paddingLeft: tokens.space[val]
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

const CheckboxIcon = CheckboxIconFrame.styleable<{
  scaleIcon?: number;
  color?: ColorTokens | string;
}>((props: any, ref: any) => {
  const { children, color: colorProp, ...rest } = props;
  const checkboxContext = CheckboxContext.useStyledContext();
  const {
    size = "$true",
    color: contextColor,
    disabled,
    scaleIcon = 1
  } = checkboxContext;

  const themeColors = useTheme({
    name: checkboxContext.theme
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
    <CheckboxIconFrame ref={ref} theme={checkboxContext.theme} {...rest}>
      {getThemedIcon(children)}
    </CheckboxIconFrame>
  );
});

const CheckboxStack = styled(ThemeableStack, {
  name: "Checkbox",
  context: CheckboxContext,
  flexDirection: "column",
  animation: "$slow",
  position: "relative",

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

    color: {
      "...color": () => ({})
    },

    gapScale: {
      ":number": {} as any
    },

    required: {
      ":boolean": {} as any
    },

    disabled: {
      true: {
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    size: "$4",
    required: false,
    disabled: false
  }
});

const CheckboxFrame = styled(TamaguiCheckbox, {
  name: "Checkbox",
  context: CheckboxContext,

  animation: "$slow",
  unstyled: true,
  // flex: 1,

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

    color: {
      "...color": () => ({})
    },

    gapScale: {
      ":number": {} as any
    },

    required: {
      ":boolean": {} as any
    },

    disabled: {
      true: {
        cursor: "not-allowed"
      },
      false: {
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    size: "$4",
    required: false,
    disabled: false
  }
});

const CheckboxContainer = TamaguiCheckbox.styleable<{ name?: string }>(
  (props, forwardedRef) => {
    const { children, ...rest } = props;
    const [focused, setFocused] = useState(false);

    const id = useId();
    const name =
      props.name && props.name !== DEFAULT_CHECKBOX_NAME ? props.name : id;

    return (
      <NameContext.Provider name={name}>
        <FocusContext.Provider focused={focused} setFocused={setFocused}>
          <CheckboxFrame ref={forwardedRef} {...rest} name={name}>
            <CheckboxStack {...rest}>{children}</CheckboxStack>
          </CheckboxFrame>
        </FocusContext.Provider>
      </NameContext.Provider>
    );
  }
);

export const CheckboxLabel = styled(Label, {
  name: "Label",
  context: CheckboxContext,
  fontFamily: "$label",
  animation: "$slow",
  cursor: "pointer",
  marginTop: "$0.5",

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
        const lineHeight = (heightToken ?? 1) * 0.8;
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
      },
      false: {
        color: "$base10"
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
    focused: false,
    disabled: false
  }
});

const CheckboxLabelImpl = CheckboxLabel.styleable((props, forwardedRef) => {
  const { required, disabled } = CheckboxContext.useStyledContext();
  const { focused } = FocusContext.useStyledContext();
  const { name } = NameContext.useStyledContext();
  const { children, ...rest } = props;
  const theme = useThemeName();

  return (
    <XStack justifyContent="space-between">
      <XStack gap="$1.2" alignItems="center">
        <CheckboxValueImpl />
        <CheckboxLabel
          ref={forwardedRef}
          {...rest}
          focused={disabled ? false : focused}
          disabled={disabled}
          htmlFor={name}
          theme="base">
          {children}
        </CheckboxLabel>
        {required && (
          <View position="relative" height="100%">
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
          <CheckboxIcon>
            <AlertCircle />
          </CheckboxIcon>
        )}
      {!disabled && theme && theme.toLowerCase().includes(ColorRole.INFO) && (
        <CheckboxIcon>
          <Info />
        </CheckboxIcon>
      )}
      {!disabled && theme && theme.toLowerCase().includes(ColorRole.HELP) && (
        <CheckboxIcon>
          <HelpCircle />
        </CheckboxIcon>
      )}
      {!disabled &&
        theme &&
        theme.toLowerCase().includes(ColorRole.SUCCESS) && (
          <CheckboxIcon>
            <CheckCircle />
          </CheckboxIcon>
        )}
      {disabled && (
        <CheckboxIcon>
          <Lock />
        </CheckboxIcon>
      )}
    </XStack>
  );
});

export const CheckboxDetails = styled(Text, {
  name: "Checkbox",
  context: CheckboxContext,
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

const CheckboxDetailsImpl = CheckboxDetails.styleable((props, forwardedRef) => {
  const { disabled } = CheckboxContext.useStyledContext();
  const { name } = NameContext.useStyledContext();
  const { children, ...rest } = props;

  return (
    <CheckboxDetails
      ref={forwardedRef}
      disabled={disabled}
      htmlFor={name}
      {...rest}>
      {children}
    </CheckboxDetails>
  );
});

export type CheckboxContainerProps = GetProps<typeof CheckboxContainer>;

export type CheckboxExtraProps = {
  required?: boolean;
};

export type CheckboxProps = CheckboxContainerProps & CheckboxExtraProps;

export const Checkbox = withStaticProperties(CheckboxContainer, {
  Label: CheckboxLabelImpl,
  Details: CheckboxDetailsImpl
});

import { useId, useState } from "react";
import {
  Input as TamaguiInput,
  useControllableState,
  type InputProps as TamaguiInputProps
} from "tamagui";
import { ColorRole } from "@cyclone-ui/types";
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  getVariable,
  styled,
  Text,
  useTheme,
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
  CheckCircle,
  HelpCircle,
  Info,
  Lock
} from "@tamagui/lucide-icons";
import { XStack } from "@tamagui/stacks";
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
  hideIcons: true,
  theme: `${ColorRole.BASE}_Input`
} as const;

export const InputContext = createStyledContext<{
  size: FontSizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
  required: boolean;
  disabled: boolean;
  hideIcons: boolean;
  theme: string;
}>(defaultContextValues);

export const defaultInputGroupStyles = {
  size: "$true",
  fontFamily: "$body",
  color: "$color",
  backgroundColor: "$background",
  borderRadius: "$radius",
  borderWidth: 1,
  borderColor: "$borderColor",
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
  minWidth: 0,

  hoverStyle: {
    borderColor: "$accent10"
  },

  focusStyle: {
    outlineColor: "$accent10",
    outlineWidth: 2,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  }
} as const;

export const INPUT_NAME = "Input";

const InputGroupFrame = styled(XGroup, {
  name: INPUT_NAME,
  justifyContent: "space-between",
  context: InputContext,
  animation: "$slow",

  variants: {
    unstyled: {
      false: defaultInputGroupStyles
    },

    scaleIcon: {
      ":number": {} as any
    },

    applyFocusStyle: {
      ":boolean": (val, { props }) => {
        if (val) {
          return props.focusStyle || defaultInputGroupStyles.focusStyle;
        }
      }
    },

    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val]
        };
      }
    },

    required: {
      true: {}
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
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false,
    required: false,
    disabled: false
  }
});

const InternalStateContext = createStyledContext({
  name: undefined as string | undefined,
  setFocused: (val: boolean) => {},
  focused: false
});

export const inputSizeVariant: SizeVariantSpreadFunction<any> = (
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
  // lineHeight messes up input on native
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

const InputValue = styled(TamaguiInput, {
  name: INPUT_NAME,
  unstyled: true,
  context: InputContext,
  color: "$fg",
  verticalAlign: "center",

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        placeholderTextColor: "$disabled",
        color: "$disabled"
      },
      false: {
        placeholderTextColor: "$placeholderColor"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const InputValueImpl = InputValue.styleable<{
  required?: boolean;
  onChange?: (value?: string) => any;
}>((props, ref) => {
  const { setFocused, name } = InternalStateContext.useStyledContext();
  const { size, disabled } = InputContext.useStyledContext();
  const { onChange, value: valueProp, defaultValue, ...rest } = props;

  const [value, setValue] = useControllableState({
    prop: valueProp,
    onChange,
    defaultProp: defaultValue ?? ""
  });

  return (
    <View flex={1}>
      <InputValue
        id={name}
        ref={ref}
        onFocus={() => {
          setFocused(!disabled);
        }}
        onBlur={() => setFocused(false)}
        size={size}
        onChangeText={setValue}
        {...rest}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </View>
  );
});

const InputValueWrapper = InputValueImpl.styleable<{
  required?: boolean;
  onChange?: (value?: string) => any;
}>((props, forwardedRef) => {
  const { children, ...rest } = props;
  const { theme, disabled } = InputContext.useStyledContext();
  const { focused } = InternalStateContext.useStyledContext();

  return (
    <InputGroupFrame
      theme={theme}
      applyFocusStyle={focused}
      disabled={disabled}>
      {theme &&
        (theme.toLowerCase().includes(ColorRole.ERROR) ||
          theme.toLowerCase().includes(ColorRole.WARNING)) && (
          <InputIcon>
            <AlertCircle />
          </InputIcon>
        )}
      {!disabled && theme && theme.toLowerCase().includes(ColorRole.INFO) && (
        <InputIcon>
          <Info />
        </InputIcon>
      )}
      {!disabled && theme && theme.toLowerCase().includes(ColorRole.HELP) && (
        <InputIcon>
          <HelpCircle />
        </InputIcon>
      )}
      {!disabled &&
        theme &&
        theme.toLowerCase().includes(ColorRole.SUCCESS) && (
          <InputIcon>
            <CheckCircle />
          </InputIcon>
        )}
      <InputValueImpl ref={forwardedRef} {...rest} />
      {children}
      {disabled && (
        <InputIcon>
          <Lock />
        </InputIcon>
      )}
    </InputGroupFrame>
  );
});

export const InputIconFrame = styled(View, {
  name: INPUT_NAME,
  justifyContent: "center",
  alignItems: "center",
  context: InputContext,
  animation: "$slow",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          paddingHorizontal: tokens.space[val]
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

const InputIcon = InputIconFrame.styleable<{
  scaleIcon?: number;
  color?: ColorTokens | string;
}>((props: any, ref: any) => {
  const { children, color: colorProp, ...rest } = props;
  const inputContext = InputContext.useStyledContext();
  const {
    size = "$true",
    color: contextColor,
    disabled,
    theme,
    scaleIcon = 1
  } = inputContext;

  const themeColors = useTheme({
    name: theme
  });
  const color = disabled
    ? "$disabled"
    : getVariable(
        colorProp ||
          contextColor ||
          themeColors[contextColor as any]?.get("web") ||
          (!theme || theme === "base"
            ? themeColors.color8?.get("web")
            : themeColors.primary?.get("web"))
      );
  const iconSize = getIconSize(size as FontSizeTokens, scaleIcon);

  const getThemedIcon = useGetThemedIcon({
    size: iconSize,
    color: color as any
  });
  return (
    <InputIconFrame ref={ref} theme={theme} {...rest}>
      {getThemedIcon(children)}
    </InputIconFrame>
  );
});

const InputIconWrapper = InputIcon.styleable(
  ({ children, ...props }: any, ref: any) => {
    const { theme, disabled, hideIcons } = InputContext.useStyledContext();

    if (
      (hideIcons &&
        theme &&
        (theme.toLowerCase().includes(ColorRole.ERROR) ||
          theme.toLowerCase().includes(ColorRole.WARNING) ||
          theme.toLowerCase().includes(ColorRole.INFO) ||
          theme.toLowerCase().includes(ColorRole.HELP) ||
          theme.toLowerCase().includes(ColorRole.SUCCESS))) ||
      disabled
    ) {
      return null;
    }

    return (
      <InputIcon ref={ref} {...props}>
        {children}
      </InputIcon>
    );
  }
);

export const InputContainer = styled(View, {
  name: INPUT_NAME,
  context: InputContext,
  flexDirection: "column",
  animation: "$slow",

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

    hideIcons: {
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
    disabled: false,
    hideIcons: true
  }
});

const InputContainerImpl: any = InputContainer.styleable<{
  name?: string;
}>((props, forwardedRef) => {
  const { children, name, ...rest } = props;
  const [focused, setFocused] = useState(false);

  const id = useId();

  return (
    <InternalStateContext.Provider
      name={name ? name : id}
      focused={focused}
      setFocused={setFocused}>
      <View ref={forwardedRef} {...rest}>
        {children}
      </View>
    </InternalStateContext.Provider>
  );
});

export const InputLabel = styled(Label, {
  name: "Label",
  context: InputContext,
  fontFamily: "$label",
  animation: "$slow",
  cursor: "pointer",

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

const InputLabelImpl = InputLabel.styleable((props, forwardedRef) => {
  const { required, disabled } = InputContext.useStyledContext();
  const { focused, name } = InternalStateContext.useStyledContext();
  const { children, ...rest } = props;

  return (
    <XStack gap="$1.2">
      <InputLabel
        ref={forwardedRef}
        {...rest}
        focused={disabled ? false : focused}
        disabled={disabled}
        htmlFor={name}
        theme="base">
        {children}
      </InputLabel>
      {required && (
        <View position="relative">
          <Asterisk color="$error8" size="$0.75" position="absolute" top={-2} />
        </View>
      )}
    </XStack>
  );
});

export const InputDetails = styled(Text, {
  name: INPUT_NAME,
  context: InputContext,
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

const InputDetailsImpl = InputDetails.styleable((props, forwardedRef) => {
  const { disabled } = InputContext.useStyledContext();
  const { name } = InternalStateContext.useStyledContext();
  const { children, ...rest } = props;

  return (
    <InputDetails
      ref={forwardedRef}
      disabled={disabled}
      htmlFor={name}
      {...rest}>
      {children}
    </InputDetails>
  );
});

const InputXGroup = styled(XGroup, {
  name: INPUT_NAME,
  context: InputContext,
  animation: "$slow",

  variants: {
    size: {
      "...size": (val: any, { tokens }: any) => {
        const radiusToken = tokens.radius[val] ?? tokens.radius["$true"];
        return {
          borderRadius: radiusToken
        };
      }
    }
  } as const
});

export type InputContainerProps = GetProps<typeof InputContainerImpl>;

export type InputExtraProps = {
  required?: boolean;
  onChange?: (value?: string) => any;
};

export type InputProps = InputContainerProps & InputExtraProps;

export const Input = withStaticProperties(InputContainerImpl, {
  Value: InputValueWrapper,
  Icon: InputIconWrapper,
  Details: InputDetailsImpl,
  Label: InputLabelImpl,
  XGroup: withStaticProperties(InputXGroup, { Item: XGroup.Item })
});

import { ColorRole } from "@cyclone-ui/colors";
import { useFieldStore } from "@cyclone-ui/form";
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  getVariable,
  styled,
  useTheme,
  View,
  withStaticProperties
} from "@tamagui/core";
import { getFontSize } from "@tamagui/font-size";
import { getFontSized } from "@tamagui/get-font-sized";
import { getSpace } from "@tamagui/get-token";
import { XGroup } from "@tamagui/group";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import {
  AlertCircle,
  CheckCircle,
  HelpCircle,
  Info,
  Lock
} from "@tamagui/lucide-icons";
import type { SizeVariantSpreadFunction } from "@tamagui/web";
import { Input as TamaguiInput, useControllableState } from "tamagui";

const defaultContextValues = {
  size: "$true",
  scaleIcon: 1.3,
  color: undefined,
  hideIcons: true,
  theme: `${ColorRole.BASE}_Input`
} as const;

export const InputContext = createStyledContext<{
  size: FontSizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
  hideIcons: boolean;
  theme: string;
}>(defaultContextValues);

export const defaultInputGroupStyles = {
  size: "$true",
  fontFamily: "$body",
  fontSize: "$4",
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

        return {};
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

  // internalAutofillSelected: {
  //   backgroundColor: "transparent !important",
  //   color: "inherit !important"
  // },

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
  onChange?: (value?: string) => any;
}>((props, ref) => {
  const { size } = InputContext.useStyledContext();
  const { onChange, value: valueProp, defaultValue, ...rest } = props;

  const [value, setValue] = useControllableState({
    prop: valueProp,
    onChange,
    defaultProp: defaultValue ?? ""
  });

  const store = useFieldStore();
  const name = store.get.name();
  const disabled = store.get.disabled();

  const setFocused = store.set.focused();

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

const InputGroupImpl = InputValueImpl.styleable<{
  required?: boolean;
  onChange?: (value?: string) => any;
}>((props, forwardedRef) => {
  const { children, ...rest } = props;
  const { theme } = InputContext.useStyledContext();

  const store = useFieldStore();
  const focused = store.get.focused();
  const disabled = store.get.disabled();

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
}>((props, ref) => {
  const { children, color: colorProp, ...rest } = props;
  const inputContext = InputContext.useStyledContext();
  const { size = "$true", color: contextColor, scaleIcon = 1 } = inputContext;

  const store = useFieldStore();
  const disabled = store.get.disabled();
  const theme = inputContext.theme || store.get.theme();

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
    const inputContext = InputContext.useStyledContext();

    const store = useFieldStore();
    const disabled = store.get.disabled();
    const theme = inputContext.theme || store.get.theme();

    if (
      (inputContext.hideIcons &&
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

export const Input = withStaticProperties(InputGroupImpl, {
  Icon: InputIconWrapper
});

import { ColorRole } from "@cyclone-ui/colors";
import { useFieldStore } from "@cyclone-ui/form";
import {
  ThemeableIcon,
  ThemeableIconWrapper
} from "@cyclone-ui/themeable-icon";
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { getFontSized } from "@tamagui/get-font-sized";
import { getSpace } from "@tamagui/get-token";
import { XGroup } from "@tamagui/group";
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
  const theme = store.get.theme();

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
        theme={theme}
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
  const { scaleIcon } = InputContext.useStyledContext();

  const store = useFieldStore();
  const focused = store.get.focused();
  const disabled = store.get.disabled();
  const theme = store.get.theme();

  return (
    <InputGroupFrame
      theme={theme}
      applyFocusStyle={focused}
      disabled={disabled}>
      {!disabled &&
        theme &&
        (theme.toLowerCase().includes(ColorRole.ERROR) ||
          theme.toLowerCase().includes(ColorRole.WARNING) ||
          theme.toLowerCase().includes(ColorRole.INFO) ||
          theme.toLowerCase().includes(ColorRole.HELP) ||
          theme.toLowerCase().includes(ColorRole.SUCCESS)) && (
          <ThemeableIcon theme={theme} scaleIcon={scaleIcon} />
        )}
      <InputValueImpl ref={forwardedRef} {...rest} />
      {children}
      {disabled && <ThemeableIcon disabled={true} scaleIcon={scaleIcon} />}
    </InputGroupFrame>
  );
});

export const Input = withStaticProperties(InputGroupImpl, {
  Icon: ThemeableIconWrapper
});

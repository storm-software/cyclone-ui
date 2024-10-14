import {
  FieldStatus,
  FieldStatusIcon,
  useFieldActions,
  useFieldStore
} from "@cyclone-ui/form";
import { ThemeableIconWrapper } from "@cyclone-ui/themeable-icon";
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
import { Input as TamaguiInput } from "tamagui";

const defaultContextValues = {
  size: "$true",
  color: undefined,
  hideIcons: false
} as const;

export const InputContext = createStyledContext<{
  size: FontSizeTokens;
  color?: ColorTokens | string;
  hideIcons: boolean;
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

    isRequired: {
      true: {}
    },

    isDisabled: {
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
    isRequired: false,
    isDisabled: false
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

const BaseInput = styled(TamaguiInput, {
  name: INPUT_NAME,

  unstyled: true,

  context: InputContext,
  color: "$fg",
  fontFamily: "$body",
  fontSize: "$4",
  verticalAlign: "center",
  paddingVertical: "$3",

  // internalAutofillSelected: {
  //   backgroundColor: "transparent !important",
  //   color: "inherit !important"
  // },

  variants: {
    isDisabled: {
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
    isDisabled: false
  }
});

const BaseInputImpl = BaseInput.styleable((props, forwardedRef) => {
  const { size } = InputContext.useStyledContext();
  const { children, ...rest } = props;

  const store = useFieldStore();
  const { focus, blur, change } = useFieldActions<string>();

  return (
    <View flex={1}>
      <BaseInput
        id={store.get.name()}
        ref={forwardedRef}
        size={size}
        {...rest}
        onFocus={focus}
        onBlur={blur}
        onChangeText={change}
        value={String(store.get.value() ?? "")}
        defaultValue={String(store.get.options().defaultValue ?? "")}
        disabled={store.get.isDisabled()}>
        {children}
      </BaseInput>
    </View>
  );
});

const InputGroupImpl = BaseInputImpl.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  const store = useFieldStore();
  const isDisabled = store.get.isDisabled();

  return (
    <InputGroupFrame
      applyFocusStyle={store.get.isFocused()}
      isDisabled={isDisabled}>
      {!isDisabled && <FieldStatusIcon isDisabled={false} />}
      <BaseInputImpl
        ref={forwardedRef}
        {...rest}
        paddingHorizontal={
          store.get.theme().toLowerCase().includes(FieldStatus.BASE) ? "$3" : 0
        }>
        {children}
      </BaseInputImpl>
      {isDisabled && <FieldStatusIcon isDisabled={true} />}
    </InputGroupFrame>
  );
});

export const Input = withStaticProperties(InputGroupImpl, {
  Icon: ThemeableIconWrapper
});

import { Button } from "@cyclone-ui/button";
import {
  FieldStatusIcon,
  useFieldActions,
  useFieldStore
} from "@cyclone-ui/form";
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
import { Input as TamaguiInput, YStack } from "tamagui";

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

const BaseInput = styled(TamaguiInput, {
  name: INPUT_NAME,

  unstyled: true,

  context: InputContext,
  color: "$fg",
  fontFamily: "$body",
  fontSize: "$4",
  verticalAlign: "center",
  paddingVertical: "$3",

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        placeholderTextColor: "$disabled",
        color: "$disabled"
      },
      false: {
        placeholderTextColor: "$placeholderColor",
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const BaseInputImpl = BaseInput.styleable((props, forwardedRef) => {
  const { size } = InputContext.useStyledContext();

  const store = useFieldStore();
  const disabled = store.get.disabled();

  const { focus, blur, change } = useFieldActions<string>();

  return (
    <View flex={1}>
      <BaseInput
        id={store.get.name()}
        ref={forwardedRef}
        size={size}
        {...props}
        onFocus={focus}
        onBlur={blur}
        onChangeText={change}
        value={String(store.get.value() ?? "")}
        defaultValue={String(store.get.initialValue() ?? "")}
        disabled={disabled}
      />
    </View>
  );
});

const InputIcon = Button.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  const store = useFieldStore();
  const disabled = store.get.disabled();
  const theme = store.get.theme();

  return (
    <YStack alignItems="center">
      <Button
        ref={forwardedRef}
        variant="ghost"
        circular={true}
        theme={theme}
        disabled={disabled}
        padding="$2"
        {...rest}>
        <Button.Icon>{children}</Button.Icon>
      </Button>
    </YStack>
  );
});

const InputGroupImpl = BaseInputImpl.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  const store = useFieldStore();
  const disabled = store.get.disabled();

  return (
    <InputGroupFrame
      applyFocusStyle={store.get.focused()}
      disabled={disabled}
      paddingHorizontal="$3">
      {!disabled && <FieldStatusIcon disabled={false} />}
      {children}
      <BaseInputImpl ref={forwardedRef} {...rest} />

      {disabled && <FieldStatusIcon disabled={true} />}
    </InputGroupFrame>
  );
});

export const Input = withStaticProperties(InputGroupImpl, {
  Icon: InputIcon
});

import {
  FieldIcon,
  FieldThemeIcon,
  useFieldActions,
  useFieldStore
} from "@cyclone-ui/form";
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  withStaticProperties
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { Input as TamaguiInput, XStack } from "tamagui";

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
  size: "$1",
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
  context: InputContext,

  justifyContent: "space-between",
  animation: "slow",
  height: "$4.5",

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

// export const inputSizeVariant: SizeVariantSpreadFunction<any> = (
//   val = "$true",
//   extras
// ) => {
//   const radiusToken =
//     extras.tokens.radius[val] ?? extras.tokens.radius["$true"];
//   const paddingHorizontal = getSpace(val, {
//     shift: -1,
//     bounds: [2]
//   });
//   const fontStyle = getFontSized(val as any, extras);
//   // lineHeight messes up input on native
//   if (!isWeb && fontStyle) {
//     delete fontStyle["lineHeight"];
//   }

//   return {
//     ...fontStyle,
//     height: val,
//     borderRadius: extras.props.circular ? 100_000 : radiusToken,
//     paddingHorizontal
//   };
// };

const BaseInput = styled(TamaguiInput, {
  name: INPUT_NAME,
  context: InputContext,

  unstyled: true,
  color: "$fg",
  fontFamily: "$body",
  fontSize: "$true",
  fontWeight: "$true",
  display: "flex",
  flexGrow: 1,
  verticalAlign: "center",
  marginHorizontal: "$1.75",

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
  const store = useFieldStore();
  const disabled = store.get.disabled();

  const { focus, blur, change } = useFieldActions<string>();

  return (
    <BaseInput
      id={store.get.name()}
      ref={forwardedRef}
      size={0}
      {...props}
      onFocus={focus}
      onBlur={blur}
      onChangeText={change}
      value={String(store.get.value() ?? "")}
      defaultValue={String(store.get.initialValue() ?? "")}
      disabled={disabled}
    />
  );
});

const InputGroupImpl = BaseInputImpl.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  const store = useFieldStore();
  const disabled = store.get.disabled();
  const validating = store.get.validating();

  return (
    <InputGroupFrame
      applyFocusStyle={store.get.focused()}
      disabled={disabled}
      paddingHorizontal="$2">
      <XStack alignItems="center" width="100%">
        {!disabled && <FieldThemeIcon />}

        <BaseInputImpl ref={forwardedRef} {...rest} />
        {children}
        {(disabled || validating) && <FieldThemeIcon />}
      </XStack>
    </InputGroupFrame>
  );
});

export const Input = withStaticProperties(InputGroupImpl, {
  Icon: FieldIcon
});

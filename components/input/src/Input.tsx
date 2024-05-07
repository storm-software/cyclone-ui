import { getFontSized } from "@tamagui/get-font-sized";
import { getSpace } from "@tamagui/get-token";
import type {
  GetProps,
  SizeVariantSpreadFunction,
  TextProps,
  VariantSpreadExtras
} from "@tamagui/web";
import { withStaticProperties } from "@tamagui/helpers";
import { useState } from "react";
import { Label } from "@tamagui/label";
import { XGroup } from "@tamagui/group";
import { isWeb } from "@tamagui/constants";
import { XStack } from "@tamagui/stacks";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  Text,
  View,
  styled,
  createStyledContext,
  useTheme,
  getVariable
} from "@tamagui/core";
import { getFontSize } from "@tamagui/font-size";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import { Input as TamaguiInput } from "tamagui";
import { FlatListComponent } from "react-native";

const defaultContextValues = {
  size: "$true",
  scaleIcon: 1.2,
  color: undefined,
  required: false
} as const;

export const InputContext = createStyledContext<{
  size: FontSizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
  required: boolean;
}>(defaultContextValues);

export const defaultInputGroupStyles = {
  size: "$true",
  fontFamily: "$body",
  borderWidth: 1,
  outlineWidth: 0,
  color: "$color",

  ...(isWeb
    ? {
        tabIndex: 0
      }
    : {
        focusable: true
      }),

  borderColor: "$borderColor",
  backgroundColor: "$background",

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  hoverStyle: {
    borderColor: "$borderColorHover"
  },

  focusStyle: {
    outlineColor: "$brand10",
    outlineWidth: 2,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  }
} as const;

const InputGroupFrame = styled(XGroup, {
  justifyContent: "space-between",
  context: InputContext,
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
      ":boolean": (val, { tokens }) => ({})
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false,
    required: false
  }
});

const FocusContext = createStyledContext({
  setFocused: (val: boolean) => {},
  focused: false
});

const InputGroupImpl = InputGroupFrame.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;
  const [focused, setFocused] = useState(false);

  return (
    <FocusContext.Provider focused={focused} setFocused={setFocused}>
      <InputGroupFrame applyFocusStyle={focused} ref={forwardedRef} {...rest}>
        {children}
      </InputGroupFrame>
    </FocusContext.Provider>
  );
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

const InputFrame = styled(TamaguiInput, {
  unstyled: true,
  context: InputContext
});

const InputImpl = InputFrame.styleable<{ required?: boolean }>((props, ref) => {
  const { setFocused } = FocusContext.useStyledContext();
  const { size } = InputContext.useStyledContext();
  const { ...rest } = props;

  return (
    <View flex={1}>
      <InputFrame
        ref={ref}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => setFocused(false)}
        size={size}
        {...rest}
      />
    </View>
  );
});

const InputSection = styled(XGroup.Item, {
  justifyContent: "center",
  alignItems: "center",
  context: InputContext
});

// Icon starts

export const InputIconFrame = styled(View, {
  justifyContent: "center",
  alignItems: "center",
  context: InputContext,

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          paddingHorizontal: tokens.space[val]
        };
      }
    },
    variant: {
      outlined: {}
    }
  } as const
});

const getIconSize = (size: FontSizeTokens, scale: number) => {
  return (
    (typeof size === "number"
      ? size * 0.5
      : getFontSize(size as FontSizeTokens)) * scale
  );
};

const InputIcon = InputIconFrame.styleable<{
  scaleIcon?: number;
  color?: ColorTokens | string;
}>((props: any, ref: any) => {
  const { children, color: colorProp, ...rest } = props;
  const inputContext = InputContext.useStyledContext();
  const { size = "$true", color: contextColor, scaleIcon = 1 } = inputContext;

  const theme = useTheme();
  const color = getVariable(
    contextColor ||
      theme[contextColor as any]?.get("web") ||
      theme.color10?.get("web")
  );
  const iconSize = getIconSize(size as FontSizeTokens, scaleIcon);

  const getThemedIcon = useGetThemedIcon({
    size: iconSize,
    color: color as any
  });
  return (
    <InputIconFrame ref={ref} {...rest}>
      {getThemedIcon(children)}
    </InputIconFrame>
  );
});

export const InputContainerFrame = styled(View, {
  context: InputContext,
  flexDirection: "column",

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
    variant: {
      outlined: {}
    }
  } as const,

  defaultVariants: {
    size: "$4"
  }
});

export const InputLabel = styled(Label, {
  context: InputContext,
  fontFamily: "$label",

  variants: {
    size: {
      "...fontSize": (
        val: FontSizeTokens,
        config: VariantSpreadExtras<TextProps>
      ) => {
        const size = getFontSized(val, config);
        if (!size) {
          return;
        }

        return Object.keys(size).reduce(
          (ret: Record<string, any>, key: string) => {
            ret[key] = size[key] * 0.2;
            return ret;
          },
          {} as Record<string, any>
        );
      }
    }
  } as const
});

const InputLabelImpl = InputLabel.styleable((props, forwardedRef) => {
  const { required, color } = InputContext.useStyledContext();
  const { children, ...rest } = props;

  return (
    <XStack gap="$1.5">
      <InputLabel ref={forwardedRef} color={color} {...rest}>
        {children}
      </InputLabel>
      {required && (
        <View position="relative">
          <Text
            color="$error8"
            fontWeight="900"
            fontSize="$7"
            position="absolute"
            top={-1}>
            *
          </Text>
        </View>
      )}
    </XStack>
  );
});

export const InputInfo = styled(Text, {
  context: InputContext,
  color: "$color",

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

        const fontSize = (sizeToken ?? 1) * 1.2;
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
    variant: {
      outlined: {}
    }
  } as const
});

const InputXGroup = styled(XGroup, {
  context: InputContext,

  variants: {
    size: {
      "...size": (val: any, { tokens }: any) => {
        const radiusToken = tokens.radius[val] ?? tokens.radius["$true"];
        return {
          borderRadius: radiusToken
        };
      }
    },
    variant: {
      outlined: {}
    }
  } as const
});

export type InputContainerFrameProps = GetProps<typeof InputContainerFrame>;

export type InputExtraProps = {
  required?: boolean;
};

export type InputProps = InputContainerFrameProps & InputExtraProps;

export const Input = withStaticProperties(InputContainerFrame, {
  Box: InputGroupImpl,
  Area: InputImpl,
  Section: InputSection,
  Icon: InputIcon,
  Info: InputInfo,
  Label: InputLabelImpl,
  XGroup: withStaticProperties(InputXGroup, { Item: XGroup.Item })
});

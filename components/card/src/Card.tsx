import { ThemeableStack, XStack, YStack } from "@tamagui/stacks";
import type {
  ColorTokens,
  FontSizeTokens,
  GetProps,
  SizeTokens,
  TextProps,
  VariantSpreadExtras
} from "@tamagui/web";
import {
  Theme,
  View,
  createStyledContext,
  getVariable,
  styled,
  useTheme,
  withStaticProperties
} from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { SizableText } from "@tamagui/text";
import { getFontSize } from "@tamagui/font-size";
import { ColorRole } from "@cyclone-ui/themes";
import { Link } from "@cyclone-ui/link";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import { ArrowRight } from "@tamagui/lucide-icons";

const defaultContextValues = {
  size: "$6" as SizeTokens,
  scaleIcon: 2,
  color: undefined,
  theme: `${ColorRole.BASE}_Card`
} as const;

export const CardContext = createStyledContext<{
  size: SizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
  theme: string;
}>(defaultContextValues);

const CARD_NAME = "Card";

export const CardFrame = styled(ThemeableStack, {
  name: CARD_NAME,
  context: CardContext,

  overflow: "hidden",
  animation: "$slow",
  borderColor: "$borderColor",
  borderWidth: 1,
  cursor: "pointer",

  hoverStyle: {
    borderColor: "$borderColorHover"
  },

  pressStyle: {
    borderColor: "$borderColorPress"
  },

  focusVisibleStyle: {
    borderColor: "$borderColorFocus"
  },

  variants: {
    unstyled: {
      false: {
        size: "$true",
        backgroundColor: "$background",
        position: "relative"
      }
    },

    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val] ?? val
        };
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false
  }
});

export type CardProps = GetProps<typeof CardFrame>;

const CardBackground = styled(YStack, {
  name: CARD_NAME,
  context: CardContext,

  fullscreen: true,
  backgroundColor: "$fg",
  animation: "$slow",
  overflow: "hidden",
  zIndex: 0,
  opacity: 0.025
});

const CardBackgroundGradient = styled(LinearGradient, {
  name: CARD_NAME,
  context: CardContext,

  fullscreen: true,
  flexDirection: "row",
  animation: "$slow",
  overflow: "hidden",
  opacity: 0,
  zIndex: 5,
  colors: ["transparent", "$backgroundHover"],
  start: [0, 0],
  end: [1.0, 1.0]
});

const CardContent = styled(YStack, {
  name: CARD_NAME,
  context: CardContext,

  flexDirection: "column",
  animation: "$slow",
  zIndex: 20,

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          gap: tokens.space[val] ?? val
        };
      }
    }
  }
});

const CardFrameImpl = CardFrame.styleable(
  (props, forwardedRef) => {
    const { children, size, ...rest } = props;

    return (
      <CardFrame ref={forwardedRef} group={"card" as any} {...rest} size={size}>
        <CardBackground
          style={{
            filter: "blur(2px)"
          }}
        />
        <CardBackgroundGradient
          $group-card-hover={{ opacity: 0.8 }}
          $group-card-press={{ opacity: 0.9 }}
        />
        <CardContent>{children}</CardContent>
      </CardFrame>
    );
  },
  {
    staticConfig: { componentName: CARD_NAME }
  }
);

export const CardHeader = styled(ThemeableStack, {
  name: "CardHeader",
  context: CardContext,
  flexDirection: "row",
  paddingBottom: 0,
  zIndex: 10,
  backgroundColor: "transparent",

  variants: {
    unstyled: {
      false: {}
    },

    size: {
      "...size": (val, { tokens }) => {
        return {
          paddingHorizontal: tokens.space[val] ?? val,
          paddingTop: tokens.space[val] ?? val,
          gap: tokens.space[val] ?? val
        };
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false
  }
});

export const CardIconFrame = styled(View, {
  name: "Card",
  justifyContent: "center",
  alignItems: "center",
  context: CardContext,
  animation: "$slow",
  backgroundColor: "$color4",
  padding: "$5",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val] ?? val
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

const CardIcon = CardIconFrame.styleable<{
  scaleIcon?: number;
  color?: ColorTokens | string;
}>((props: any, ref: any) => {
  const { children, color: colorProp, ...rest } = props;
  const context = CardContext.useStyledContext();
  const { size = "$true", color: contextColor, scaleIcon = 1 } = context;

  const themeColors = useTheme({
    name: context.theme
  });
  const color = getVariable(
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
    <CardIconFrame ref={ref} theme={context.theme} {...rest}>
      {getThemedIcon(children)}
    </CardIconFrame>
  );
});

export const CardTitleSection = styled(ThemeableStack, {
  context: CardContext,
  flexDirection: "column",
  paddingVertical: 0,
  gap: "$2",
  alignContent: "space-between",

  variants: {
    unstyled: {
      false: {
        zIndex: 15,
        backgroundColor: "transparent",
        marginBottom: "auto"
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false
  }
});

const CardTitle = styled(SizableText, {
  name: "CardTitle",
  context: CardContext,

  theme: "base",
  fontFamily: "$title",
  color: "$base10",
  zIndex: 20,
  verticalAlign: "middle",

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

        const fontSize = (sizeToken ?? 1) * 2.8;
        const lineHeight = (heightToken ?? 1) * 2;
        const fontWeight = config.font.weight?.["$6"];
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
    }
  } as const
});

const CardEyebrow = styled(SizableText, {
  name: "CardEyebrow",
  context: CardContext,

  theme: "base",
  fontFamily: "$eyebrow",
  color: "$color",
  zIndex: 20,

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

        const fontSize = (sizeToken ?? 1) * 1.4;
        const lineHeight = (heightToken ?? 1) * 1.4;
        const fontWeight = config.font.weight?.["$6"];
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
    }
  } as const
});

const CardBody = styled(SizableText, {
  name: "CardBody",
  context: CardContext,

  theme: "base",
  fontFamily: "$body",
  color: "$base9",
  zIndex: 20,
  paddingVertical: 0,

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

        const fontSize = (sizeToken ?? 1) * 1.3;
        const lineHeight = (heightToken ?? 1) * 1.3;
        const textTransform = config.font.transform?.[val];
        const fontStyle = config.font.style?.[val];
        const paddingHorizontal = config.tokens.space[val] ?? val;

        return {
          fontSize,
          lineHeight,
          textTransform,
          fontStyle,
          paddingHorizontal
        };
      }
    }
  } as const
});

export const CardFooter = styled(ThemeableStack, {
  name: "CardFooter",
  context: CardContext,
  zIndex: 20,

  variants: {
    size: {
      "...fontSize": (val, { tokens }) => {
        return {
          paddingHorizontal: tokens.space[val] ?? val,
          paddingBottom: tokens.space[val] ?? val
        };
      }
    }
  } as const
});

const CardLink = styled(Link, {
  name: "CardLink",
  context: CardContext,
  zIndex: 25,
  underline: "initial",
  color: "$primary",

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

        const fontSize = (sizeToken ?? 1) * 1.6;
        const lineHeight = (heightToken ?? 1) * 1.6;
        const textTransform = config.font.transform?.[val];
        const fontStyle = config.font.style?.[val];

        return {
          fontSize,
          lineHeight,
          textTransform,
          fontStyle
        };
      }
    }
  } as const
});

const CardLinkArrowRight = styled(ArrowRight, {
  name: "CardLink",
  context: CardContext,
  zIndex: 25,
  color: "$primary",
  marginTop: "$0.4"
});

export const CardLinkImpl = CardLink.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <XStack gap="$1.5" alignItems="center">
        <CardLink ref={forwardedRef} {...rest}>
          {children}
        </CardLink>
        <View
          animation="$slow"
          x={0}
          $group-card-hover={{
            x: 10
          }}>
          <CardLinkArrowRight />
        </View>
      </XStack>
    );
  },
  {
    staticConfig: { componentName: "CardLink" }
  }
);

export type CardHeaderProps = GetProps<typeof CardHeader>;
export type CardFooterProps = GetProps<typeof CardFooter>;

export const Card = withStaticProperties(CardFrameImpl, {
  Header: CardHeader,
  TitleSection: CardTitleSection,
  Eyebrow: CardEyebrow,
  Title: CardTitle,
  Icon: CardIcon,
  Footer: CardFooter,
  Body: CardBody,
  Link: CardLinkImpl
});

/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { BodyText } from "@cyclone-ui/body-text";
import { ColorRole } from "@cyclone-ui/colors";
import { Link } from "@cyclone-ui/link";
import {
  createStyledContext,
  getVariable,
  styled,
  Theme,
  useTheme,
  View
} from "@tamagui/core";
import { getFontSize } from "@tamagui/font-size";
import { withStaticProperties } from "@tamagui/helpers";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import { LinearGradient } from "@tamagui/linear-gradient";
import { ArrowRight } from "@tamagui/lucide-icons";
import { ThemeableStack, XStack, YStack } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import type {
  ColorTokens,
  FontSizeTokens,
  GetProps,
  SizeTokens,
  TextProps,
  VariantSpreadExtras
} from "@tamagui/web";

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

  animation: "slow",
  overflow: "hidden",
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
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});

export type CardProps = GetProps<typeof CardFrame>;

const CardBackground = styled(YStack, {
  name: CARD_NAME,
  context: CardContext,

  animation: "slow",
  fullscreen: true,
  backgroundColor: "$fg",
  overflow: "hidden",
  zIndex: 0,
  opacity: 0.025
});

const CardBackgroundGradient = styled(LinearGradient, {
  name: CARD_NAME,
  context: CardContext,

  animation: "slow",
  fullscreen: true,
  flexDirection: "row",
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

  animation: "slow",
  flexDirection: "column",
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
    size: {
      "...size": (val, { tokens }) => {
        return {
          paddingHorizontal: tokens.space[val] ?? val,
          paddingTop: tokens.space[val] ?? val,
          gap: tokens.space[val] ?? val
        };
      }
    }
  } as const
});

export const CardIconFrame = styled(View, {
  name: "Card",
  context: CardContext,

  animation: "slow",
  justifyContent: "center",
  alignItems: "center",
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
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});

const CardTitle = styled(SizableText, {
  name: "CardTitle",
  context: CardContext,

  fontFamily: "$title",
  color: "$primary",
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

const CardTitleImpl = CardTitle.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <Theme name={ColorRole.BASE}>
        <CardTitle ref={forwardedRef} {...rest}>
          {children}
        </CardTitle>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "CardTitle" }
  }
);

const CardEyebrow = styled(SizableText, {
  name: "CardEyebrow",
  context: CardContext,

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

const CardEyebrowImpl = CardEyebrow.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <Theme name={ColorRole.BASE}>
        <CardEyebrow ref={forwardedRef} {...rest}>
          {children}
        </CardEyebrow>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "CardEyebrow" }
  }
);

const CardBody = styled(BodyText, {
  name: "CardBody",
  context: CardContext,

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

const CardBodyImpl = CardBody.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <Theme name={ColorRole.BASE}>
        <CardBody ref={forwardedRef} {...rest}>
          {children}
        </CardBody>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "CardBody" }
  }
);

const CardFooter = styled(ThemeableStack, {
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

        const fontSize = (sizeToken ?? 1) * 2;
        const lineHeight = (heightToken ?? 1) * 2;
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

const CardLinkImpl = CardLink.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <XStack gap="$1.5" alignItems="center">
        <CardLink ref={forwardedRef} {...rest}>
          {children}
        </CardLink>
        <View
          animation="slow"
          flex={1}
          x={0}
          $group-card-hover={{
            x: 10
          }}>
          <CardLinkArrowRight size="$2" />
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
  Eyebrow: CardEyebrowImpl,
  Title: CardTitleImpl,
  Icon: CardIcon,
  Footer: CardFooter,
  Body: CardBodyImpl,
  Link: CardLinkImpl
});

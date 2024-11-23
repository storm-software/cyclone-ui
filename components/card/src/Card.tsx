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
import { ColorThemeName } from "@cyclone-ui/colors";
import { Container } from "@cyclone-ui/container";
import { EyebrowText } from "@cyclone-ui/eyebrow-text";
import { Heading3Text } from "@cyclone-ui/heading-text";
import { getSpaced } from "@cyclone-ui/helpers";
import { Link } from "@cyclone-ui/link";
import {
  getIconByTheme,
  ThemeableIcon,
  ThemeableIconProps
} from "@cyclone-ui/themeable-icon";
import {
  createStyledContext,
  styled,
  Theme,
  useThemeName,
  View
} from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import { ArrowRight } from "@tamagui/lucide-icons";
import { ThemeableStack, XStack, YStack } from "@tamagui/stacks";
import type {
  GetProps,
  SizeTokens,
  VariantSpreadExtras,
  ViewProps
} from "@tamagui/web";

export type CardContextProps = {
  size: SizeTokens;
  theme: string | null | undefined;
};

export const CardContext = createStyledContext<CardContextProps>({
  size: "$true" as SizeTokens,
  theme: `${ColorThemeName.BASE}_Card`
});

const CardFrame = styled(Container, {
  name: "Card",
  context: CardContext,

  animation: "normal",
  overflow: "hidden",
  borderColor: "$borderColor",
  cursor: "pointer",
  backgroundColor: "$background",
  position: "relative",

  hoverStyle: {
    borderColor: "$borderColorHover"
  },

  pressStyle: {
    borderColor: "$borderColorPress"
  },

  focusVisibleStyle: {
    borderColor: "$borderColorFocus"
  }
});

export type CardProps = GetProps<typeof CardFrame>;

// const CardBackground = styled(YStack, {
//   name: "Card",
//   context: CardContext,

//   animation: "normal",
//   fullscreen: true,
//   backgroundColor: "$fg",
//   overflow: "hidden",
//   zIndex: 0,
//   opacity: 0.025
// });

// const CardBackgroundGradient = styled(LinearGradient, {
//   name: "Card",
//   context: CardContext,

//   animation: "normal",
//   fullscreen: true,
//   flexDirection: "row",
//   overflow: "hidden",
//   opacity: 0,
//   zIndex: 5,
//   colors: ["transparent", "$backgroundHover"],
//   start: [0, 0],
//   end: [1.0, 1.0]
// });

const CardContent = styled(YStack, {
  name: "Card",
  context: CardContext,

  animation: "normal",
  zIndex: 20,

  variants: {
    size: {
      "...size": (val: SizeTokens, config: VariantSpreadExtras<ViewProps>) => {
        const space = getSpaced(val);

        return {
          gap: space
        };
      }
    }
  },

  defaultVariants: {
    size: "$true"
  }
});

const CardFrameImpl = CardFrame.styleable(
  (props, forwardedRef) => {
    const { children, theme, size, ...rest } = props;

    return (
      <CardContext.Provider theme={theme} size={size}>
        <CardFrame
          ref={forwardedRef}
          group={"card" as any}
          {...rest}
          theme={theme}
          size={size}>
          <CardContent>{children}</CardContent>
        </CardFrame>
      </CardContext.Provider>
    );
  },
  {
    staticConfig: { componentName: "Card" }
  }
);

const CardHeader = styled(XStack, {
  name: "CardHeader",
  context: CardContext,

  paddingBottom: 0,
  zIndex: 10,
  alignItems: "center",

  variants: {
    size: {
      "...size": (val: SizeTokens, config: VariantSpreadExtras<ViewProps>) => {
        const space = getSpaced(val);

        return {
          gap: space
        };
      }
    }
  },

  defaultVariants: {
    size: "$true"
  }
});

const CardIcon = ({ children, ...props }: ThemeableIconProps) => {
  const theme = useThemeName();

  const icon = children || getIconByTheme({ theme });
  if (!icon) {
    return null;
  }

  return (
    <ThemeableIcon theme={theme} {...props} size="$6">
      {icon}
    </ThemeableIcon>
  );
};

const CardHeading = styled(Heading3Text, {
  name: "CardHeading",
  context: CardContext,

  zIndex: 20,
  verticalAlign: "middle"
});

const CardHeadingImpl = CardHeading.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <Theme name={ColorThemeName.BASE}>
        <CardHeading ref={forwardedRef} {...rest}>
          {children}
        </CardHeading>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "CardHeading" }
  }
);

const CardEyebrow = styled(EyebrowText, {
  name: "CardEyebrow",
  context: CardContext,

  zIndex: 20
});

const CardEyebrowImpl = CardEyebrow.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <Theme name={ColorThemeName.BASE}>
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
  paddingVertical: 0
});

const CardBodyImpl = CardBody.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <Theme name={ColorThemeName.BASE}>
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
  zIndex: 20
});

const CardLink = styled(Link, {
  name: "CardLink",
  context: CardContext,

  zIndex: 25
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
        <CardLink {...rest}>{children}</CardLink>
        <View
          animation="normal"
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
  Header: withStaticProperties(CardHeader, {
    Eyebrow: CardEyebrowImpl,
    Heading: CardHeadingImpl,
    Icon: CardIcon
  }),
  Body: CardBodyImpl,
  Footer: withStaticProperties(CardFooter, {
    Link: CardLinkImpl
  })
});

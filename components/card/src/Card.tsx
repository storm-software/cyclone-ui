/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { BodyText } from "@cyclone-ui/body-text";
import { Container } from "@cyclone-ui/container";
import { EyebrowText } from "@cyclone-ui/eyebrow-text";
import { HeadingXLText } from "@cyclone-ui/heading-text";
import { getSpaced } from "@cyclone-ui/helpers";
import { Link } from "@cyclone-ui/link";
import type { ThemeableIconProps } from "@cyclone-ui/themeable-icon";
import { getIconByTheme, ThemeableIcon } from "@cyclone-ui/themeable-icon";
import type { ColorTokens, ThemeTokens } from "@tamagui/core";
import {
  createStyledContext,
  getVariableValue,
  styled,
  Theme,
  useTheme,
  useThemeName,
  View
} from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import { LinearGradient } from "@tamagui/linear-gradient";
import { ArrowRight } from "@tamagui/lucide-icons-2";
import { ThemeableStack, XStack, YStack } from "@tamagui/stacks";
import type {
  GetProps,
  SizeTokens,
  VariantSpreadExtras,
  ViewProps
} from "@tamagui/web";
import { createContext, use, useContext } from "react";

export interface CardContextProps {
  size: SizeTokens;
  theme: string | null | undefined;
}

export const CardContext = createStyledContext<CardContextProps>({
  size: "$true" as SizeTokens,
  theme: "primary"
});

const CardDataColorContext = createContext<
  ColorTokens | ThemeTokens | undefined
>(undefined);

const CardFrame = styled(Container, {
  name: "Card",
  context: CardContext,

  transition: "200ms",
  overflow: "hidden",
  borderRadius: "$card",
  borderColor: "$border",
  cursor: "pointer",
  backgroundColor: "$backgroundElevated",
  position: "relative",

  hoverStyle: {
    backgroundColor: "$backgroundElevatedHover",
    borderColor: "$borderHover"
  },

  pressStyle: {
    borderColor: "$borderHover"
  },

  focusVisibleStyle: {
    borderColor: "$borderFocused"
  }
});

const CardDataBorder = styled(View, {
  name: "Card",

  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "$card",
  borderWidth: 1,
  pointerEvents: "none",
  zIndex: "$30"
});

const CardBackgroundGradient = styled(LinearGradient, {
  name: "Card",
  context: CardContext,

  transition: "200ms",
  fullscreen: true,
  flexDirection: "row",
  overflow: "hidden",
  pointerEvents: "none",
  opacity: 0,
  zIndex: 5,
  start: [0, 0],
  end: [1.0, 1.0],

  "$group-card-hover": {
    opacity: 0.25
  }
});

const CardContent = styled(YStack, {
  name: "Card",
  context: CardContext,

  transition: "200ms",
  zIndex: "$20",
  gap: "$2xl",
  padding: "$2xl",

  variants: {
    size: {
      "...size": (val: SizeTokens, _config: VariantSpreadExtras<ViewProps>) => {
        const space = getSpaced(val);

        return {
          gap: space,
          padding: space
        };
      }
    }
  },

  defaultVariants: {
    size: "$true"
  }
});

const CardFrameImpl = CardFrame.styleable<{
  color?: ColorTokens | ThemeTokens;
}>(
  (props, forwardedRef) => {
    const {
      children,
      color,
      hoverStyle,
      theme,
      size = "$true",
      ...rest
    } = props;
    const activeTheme = useTheme();
    const dataColor = color
      ? getVariableValue(activeTheme[color as any] ?? color, "color")
      : undefined;
    return (
      <CardDataColorContext.Provider value={color}>
        <CardContext.Provider theme={theme} size={size}>
          <CardFrame
            ref={forwardedRef}
            group={"card" as any}
            {...rest}
            hoverStyle={hoverStyle}
            theme={theme}
            size={size}>
            {dataColor && <CardDataBorder style={{ borderColor: dataColor }} />}
            <CardBackgroundGradient
              colors={["transparent", color ?? "$background"]}
            />
            <CardContent size={size}>{children}</CardContent>
          </CardFrame>
        </CardContext.Provider>
      </CardDataColorContext.Provider>
    );
  },
  {
    staticConfig: { componentName: "Card" }
  }
);

export type CardProps = GetProps<typeof CardFrameImpl>;

const CardHeader = styled(XStack, {
  name: "CardHeader",
  context: CardContext,

  paddingBottom: 0,
  zIndex: "$10",
  alignItems: "center",
  gap: "$2xl",

  variants: {
    size: {
      "...size": (val: SizeTokens, _config: VariantSpreadExtras<ViewProps>) => {
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
  const dataColor = use(CardDataColorContext);
  const theme = useThemeName();
  const icon = children || getIconByTheme({ theme });

  if (!icon) {
    return null;
  }

  return (
    <ThemeableIcon
      theme={theme}
      size="$13xl"
      color={dataColor ?? "$foreground"}
      zIndex="$20"
      {...props}>
      {icon}
    </ThemeableIcon>
  );
};

const CardHeading = styled(HeadingXLText, {
  name: "CardHeading",
  context: CardContext,

  zIndex: "$20",
  verticalAlign: "middle",
  color: "$foreground"
});

const CardHeadingImpl = CardHeading.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;
    const dataColor = useContext(CardDataColorContext);

    return (
      <CardHeading
        ref={forwardedRef}
        color={dataColor ?? "$foreground"}
        {...rest}>
        {children}
      </CardHeading>
    );
  },
  {
    staticConfig: { componentName: "CardHeading" }
  }
);

const CardEyebrow = styled(EyebrowText, {
  name: "CardEyebrow",
  context: CardContext,

  zIndex: "$20",
  color: "$backgroundSubtle"
});

const CardEyebrowImpl = CardEyebrow.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <Theme name="primary">
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

  zIndex: "$20",
  paddingVertical: 0
});

const CardBodyImpl = CardBody.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <Theme name="primary">
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
  zIndex: "$20"
});

const CardLinkArrowRight = styled(ArrowRight, {
  name: "CardLink",
  context: CardContext,

  zIndex: "$30",
  color: "$foreground",
  marginTop: "$xs"
});

const CardLinkImpl = Link.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;
    const theme = useThemeName();
    const inverse = theme?.endsWith("primary") || theme?.endsWith("secondary");

    return (
      <XStack ref={forwardedRef} gap="$lg" alignItems="center">
        <Link
          {...rest}
          group={false}
          inverse={inverse}
          zIndex="$30"
          $group-card-hover={{
            color: "$foregroundHover",
            textDecorationColor: "$foregroundHover"
          }}>
          {children}
        </Link>
        <View
          transition="200ms"
          x={0}
          $group-card-hover={{
            x: 10
          }}>
          <CardLinkArrowRight
            size="$7xl"
            $group-card-hover={{
              color: "$foregroundHover"
            }}
          />
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

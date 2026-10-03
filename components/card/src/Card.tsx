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
import { HeadingLargeText } from "@cyclone-ui/heading-text";
import { getSpaced } from "@cyclone-ui/helpers";
import { ArrowRight } from "@cyclone-ui/icons";
import { Link } from "@cyclone-ui/link";
import type { ThemeableIconProps } from "@cyclone-ui/themeable-icon";
import { getIconByTheme, ThemeableIcon } from "@cyclone-ui/themeable-icon";
import type {
  ColorTokens,
  FontSizeTokens,
  SizeTokens as TamaguiSizeTokens,
  ThemeTokens
} from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  getVariableValue,
  styled,
  Theme,
  useTheme,
  useThemeName,
  View
} from "@tamagui/core";
import { getFontSized } from "@tamagui/get-font-sized";
import { withStaticProperties } from "@tamagui/helpers";
import { LinearGradient } from "@tamagui/linear-gradient";
import { XStack, YStack } from "@tamagui/stacks";
import type { GetProps, SizeTokens } from "@tamagui/web";
import { createContext, use, useContext } from "react";

export interface CardContextProps {
  size: SizeTokens;
  theme: string | null | undefined;
}

export const CardContext = createStyledContext<
  CardContextProps,
  "size" | "theme"
>(
  {
    size: true as SizeTokens,
    theme: "base"
  } as CardContextProps,
  {
    keys: ["size", "theme"]
  }
);

// v2 `"...size"` variant keys only matched keys of the size token scale; any
// other value (numbers, the `true` default) kept the base gap and padding.
const isSizeToken = (val: unknown, tokens: { size: object }): val is string =>
  typeof val === "string" && val in tokens.size;

const CardDataColorContext = createContext<
  ColorTokens | ThemeTokens | undefined
>(undefined);

const CardFrame = styled(Container, {
  displayName: "Card",
  context: CardContext,
  transition: "200ms",
  overflow: "hidden",
  borderRadius: "card",
  borderColor:
    "accent hover:accentHover press:accentHover focus-visible:accentActive",
  cursor: "pointer",
  backgroundColor: "surfaceElevated hover:surfaceElevatedHover",
  position: "relative"
});

const CardDataBorder = styled(View, {
  displayName: "Card",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "card",
  borderWidth: 1,
  pointerEvents: "none",
  zIndex: "30"
});

// `LinearGradient` is not a plain styled view; v3 `styled()` only keeps style
// defaults for it, so the gradient geometry is passed as props at the call site.
const CardBackgroundGradient = styled(LinearGradient, {
  displayName: "Card",
  transition: "200ms",
  flexDirection: "row",
  overflow: "hidden",
  pointerEvents: "none",
  opacity: "0 group-hover/card:0.1",
  zIndex: 5,
  position: "absolute",
  inset: 0
});

const CardContent = styled(YStack, {
  displayName: "Card",
  context: CardContext,
  transition: "200ms",
  zIndex: "20",
  gap: "2xl",
  padding: "2xl",
  variants: {
    size: styled.dynamic<TamaguiSizeTokens | number>((val, { tokens }) => {
      const space = isSizeToken(val, tokens) ? getSpaced(val) : undefined;

      return {
        gap: space,
        padding: space
      };
    })
  },
  defaultVariants: {
    size: true
  }
});

type CardFrameImplProps = Omit<GetProps<typeof CardFrame>, "size"> & {
  size?: SizeTokens;
  color?: ColorTokens | ThemeTokens;
};

const CardFrameImpl = createStyledHOC(
  CardFrame,
  (props: CardFrameImplProps, forwardedRef) => {
    const { children, color, theme, size = true, ...rest } = props;
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
            theme={theme}
            size={size}>
            {dataColor && <CardDataBorder style={{ borderColor: dataColor }} />}
            <CardBackgroundGradient
              start={[0, 0]}
              end={[1.0, 1.0]}
              colors={["transparent", color ?? "accent"]}
            />
            <CardContent size={size}>{children}</CardContent>
          </CardFrame>
        </CardContext.Provider>
      </CardDataColorContext.Provider>
    );
  },
  {
    displayName: "Card"
  }
);

export type CardProps = GetProps<typeof CardFrameImpl>;

const CardHeader = styled(XStack, {
  displayName: "CardHeader",
  context: CardContext,
  paddingBottom: 0,
  zIndex: "10",
  alignItems: "center",
  gap: "2xl",
  variants: {
    size: styled.dynamic<TamaguiSizeTokens | number>((val, { tokens }) => ({
      gap: isSizeToken(val, tokens) ? getSpaced(val) : undefined
    }))
  },
  defaultVariants: {
    size: true
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
      size="13xl"
      color={dataColor ?? "accent"}
      zIndex="20"
      {...props}>
      {icon}
    </ThemeableIcon>
  );
};

/**
 * `CardContext` passes `size: true` to the text parts. Tamagui v3 maps `true`
 * to the `sm` / `4` font key, which the typography fonts do not define, so
 * resolve it (and any font size key) against the font's own `true` step.
 */
const cardTextSizeVariant = styled.dynamic<FontSizeTokens | number>(
  (val, env) =>
    val === true ||
    (typeof val === "string" && !!env.font && val in env.font.size)
      ? getFontSized(val === true ? ("true" as FontSizeTokens) : val, env)
      : undefined
);

const CardHeading = styled(HeadingLargeText, {
  displayName: "CardHeading",
  context: CardContext,
  zIndex: "20",
  verticalAlign: "middle",
  color: "accent",
  variants: {
    size: cardTextSizeVariant
  } as const
});

const CardHeadingImpl = createStyledHOC(
  CardHeading,
  (props, forwardedRef) => {
    const { children, ...rest } = props;
    const dataColor = useContext(CardDataColorContext);

    return (
      <CardHeading ref={forwardedRef} color={dataColor ?? "accent"} {...rest}>
        {children}
      </CardHeading>
    );
  },
  {
    displayName: "CardHeading"
  }
);

const CardEyebrow = styled(EyebrowText, {
  displayName: "CardEyebrow",
  context: CardContext,
  zIndex: "20",
  color: "inkBody",
  variants: {
    size: cardTextSizeVariant
  } as const
});

const CardEyebrowImpl = createStyledHOC(
  CardEyebrow,
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <Theme name="base">
        <CardEyebrow ref={forwardedRef} {...rest}>
          {children}
        </CardEyebrow>
      </Theme>
    );
  },
  {
    displayName: "CardEyebrow"
  }
);

const CardBody = styled(BodyText, {
  displayName: "CardBody",
  context: CardContext,
  zIndex: "20",
  paddingVertical: 0,
  variants: {
    size: cardTextSizeVariant
  } as const
});

const CardBodyImpl = createStyledHOC(
  CardBody,
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <Theme name="base">
        <CardBody ref={forwardedRef} {...rest}>
          {children}
        </CardBody>
      </Theme>
    );
  },
  {
    displayName: "CardBody"
  }
);

const CardFooter = styled(YStack, {
  displayName: "CardFooter",
  context: CardContext,
  zIndex: "20"
});

const CardLinkArrowRight = styled(ArrowRight, {
  displayName: "CardLink",
  context: CardContext,
  zIndex: "30",
  color: "accent",
  marginTop: "xs"
});

const CardLinkImpl = createStyledHOC(
  Link,
  (props, forwardedRef) => {
    const { children, ...rest } = props;
    const theme = useThemeName();
    const inverse = theme?.endsWith("base");

    return (
      <XStack ref={forwardedRef} gap="lg" alignItems="center">
        <Link
          {...rest}
          group={false}
          inverse={inverse}
          zIndex="30"
          color="group-hover/card:accentHover"
          textDecorationColor="group-hover/card:accentHover">
          {children}
        </Link>
        <View transition="200ms" x="0 group-hover/card:10px">
          <CardLinkArrowRight
            height="4xl"
            color="group-hover/card:accentHover"
          />
        </View>
      </XStack>
    );
  },
  {
    displayName: "CardLink"
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

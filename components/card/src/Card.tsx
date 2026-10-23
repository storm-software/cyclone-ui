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

"use client";

import { BodyText } from "@cyclone-ui/body-text";
import { Container } from "@cyclone-ui/container";
import { EyebrowText } from "@cyclone-ui/eyebrow-text";
import { HeadingLargeText } from "@cyclone-ui/heading-text";
import { getSpaced } from "@cyclone-ui/helpers";
import { Link } from "@cyclone-ui/link";
import type { ThemeableIconProps } from "@cyclone-ui/themeable-icon";
import { getIconByTheme, ThemeableIcon } from "@cyclone-ui/themeable-icon";
import { RightArrow } from "@cyclone-ui/vectors";
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
  Text,
  Theme,
  useTheme,
  useThemeName,
  View
} from "@tamagui/core";
import { getFontSized } from "@tamagui/get-font-sized";
import { withStaticProperties } from "@tamagui/helpers";
import { XStack, YStack } from "@tamagui/stacks";
import type { GetProps, SizeTokens } from "@tamagui/web";
import type { PointerEvent } from "react";
import { createContext, use, useContext, useRef, useState } from "react";

export interface CardContextProps {
  size: SizeTokens;
  theme: string | null | undefined;
}

export const CardContext = createStyledContext<
  CardContextProps,
  "size" | "theme"
>(
  {
    size: true,
    theme: undefined
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

// Plain React state: the footer arrow animates its path length in JS, which a
// `group-hover` style value can't drive.
const CardHoverContext = createContext(false);

const CardFrame = styled(Container, {
  displayName: "Card",
  context: CardContext,
  transition: "200ms",
  overflow: "hidden",
  borderRadius: "card",
  borderColor: "hairline",
  cursor: "pointer",
  backgroundColor: "elevated hover:elevated-hovered",
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

// Theme-colored strip across the top edge; the frame's `overflow: hidden`
// clips it to the rounded corners.
const CardAccentBar = styled(View, {
  displayName: "Card",
  transition: "200ms",
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  height: 6,
  backgroundColor: "primary group-hover/card:primary-hovered",
  pointerEvents: "none",
  zIndex: "30"
});

// Soft radial spotlight that follows the pointer; `left` / `top` are written
// straight to the DOM node on pointer move so tracking never re-renders.
const CardSpotlight = styled(View, {
  displayName: "Card",
  transition: "opacity 200ms",
  position: "absolute",
  width: 400,
  height: 400,
  borderRadius: 1000_000_000,
  x: "-50%",
  y: "-50%",
  pointerEvents: "none",
  opacity: "0 group-hover/card:0.15",
  zIndex: 5
});

const CardContent = styled(YStack, {
  displayName: "Card",
  context: CardContext,
  transition: "200ms",
  zIndex: "20",
  // Fill a stretched frame so `CardFooter` can pin itself to the bottom.
  flexGrow: 1,
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
    const {
      children,
      color,
      theme,
      size = true,
      onPointerMove,
      onPointerEnter,
      onPointerLeave,
      ...rest
    } = props;
    const [hovered, setHovered] = useState(false);
    const activeTheme = useTheme();
    const dataColor = color
      ? getVariableValue(activeTheme[color as any] ?? color, "color")
      : undefined;
    // The theme var resolves inside the themed frame; `useTheme` here still
    // sees the outer theme.
    const spotlightColor = dataColor ?? "var(--primary)";

    const spotlightRef = useRef<HTMLElement>(null);
    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
      const spotlight = spotlightRef.current;
      if (spotlight) {
        const rect = event.currentTarget.getBoundingClientRect();
        spotlight.style.left = `${event.clientX - rect.left}px`;
        spotlight.style.top = `${event.clientY - rect.top}px`;
      }

      onPointerMove?.(event);
    };

    return (
      <CardDataColorContext.Provider value={color}>
        <CardHoverContext.Provider value={hovered}>
          <CardContext.Provider theme={theme} size={size}>
            <CardFrame
              ref={forwardedRef}
              group={"card"}
              {...rest}
              onPointerMove={handlePointerMove}
              onPointerEnter={event => {
                setHovered(true);
                onPointerEnter?.(event);
              }}
              onPointerLeave={event => {
                setHovered(false);
                onPointerLeave?.(event);
              }}
              theme={theme}
              size={size}>
              {dataColor && (
                <CardDataBorder style={{ borderColor: dataColor }} />
              )}
              <CardAccentBar
                {...(dataColor && { style: { backgroundColor: dataColor } })}
              />
              <CardSpotlight
                ref={spotlightRef as any}
                style={{
                  backgroundImage: `radial-gradient(circle closest-side, ${spotlightColor}, transparent)`
                }}
              />
              <CardContent size={size}>{children}</CardContent>
            </CardFrame>
          </CardContext.Provider>
        </CardHoverContext.Provider>
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
      color={dataColor ?? "primary"}
      zIndex="20"
      {...props}>
      {icon}
    </ThemeableIcon>
  );
};

/**
 * `CardContext` passes `size: true` to the text parts, which keeps each part's
 * own size; only font size keys restyle the text.
 */
const cardTextSizeVariant = styled.dynamic<FontSizeTokens | number>(
  (val, env) =>
    typeof val === "string" && !!env.font && val in env.font.size
      ? getFontSized(val, env)
      : undefined
);

const CardHeading = styled(HeadingLargeText, {
  displayName: "CardHeading",
  context: CardContext,
  zIndex: "20",
  verticalAlign: "middle",
  color: "primary",
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
      <CardHeading ref={forwardedRef} color={dataColor ?? "primary"} {...rest}>
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
  color: "ink",
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
  marginTop: "auto",
  zIndex: "20"
});

const CardLinkImpl = createStyledHOC(
  Link,
  (props, forwardedRef) => {
    const { children, ...rest } = props;
    const theme = useThemeName();
    const inverse = theme?.endsWith("base");
    const hovered = use(CardHoverContext);

    return (
      <XStack
        ref={forwardedRef}
        group="cardLink"
        gap="lg"
        alignItems="center"
        alignSelf="flex-start">
        <Link
          {...rest}
          group={false}
          inverse={inverse}
          zIndex="30"
          color="group-hover/card:link-hovered"
          textDecorationColor="group-hover/card:link-hovered">
          {children}
        </Link>
        {/* `RightArrow` is a plain component, so flat values / style props
            would reach the <svg> unresolved; drive its color from CSS instead. */}
        <Text
          display="flex"
          transition="200ms"
          marginTop="xs"
          zIndex="30"
          color="link group-hover/cardLink:link-hovered">
          <RightArrow color="currentColor" size="4xl" isComplete={hovered} />
        </Text>
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

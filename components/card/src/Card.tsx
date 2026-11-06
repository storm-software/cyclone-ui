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
import type { ContainerVariant } from "@cyclone-ui/container";
import { Container, useContainerForeground } from "@cyclone-ui/container";
import { EyebrowText } from "@cyclone-ui/eyebrow-text";
import { HeadingLargeText } from "@cyclone-ui/heading-text";
import { getSpaced } from "@cyclone-ui/helpers";
import { Link } from "@cyclone-ui/link";
import type { TagProps } from "@cyclone-ui/tag";
import { Tag } from "@cyclone-ui/tag";
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
import type { PointerEvent, RefObject } from "react";
import {
  createContext,
  use,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

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

// The `variant` owns the background, border and shadow; the frame shows the
// variant's hovered background while the pointer is over the card.
const CardFrame = styled(Container, {
  displayName: "Card",
  context: CardContext,
  transition: "200ms",
  overflow: "hidden",
  borderRadius: "card",
  cursor: "pointer",
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

// Theme-colored strip along the `variant` edge; the frame's `overflow: hidden`
// clips it to the rounded corners.
const CardAccentBar = styled(View, {
  displayName: "Card",
  transition: "200ms",
  position: "absolute",
  backgroundColor: "primary group-hover/card:primary-hovered",
  pointerEvents: "none",
  zIndex: "30",
  variants: {
    variant: {
      top: { top: 0, right: 0, left: 0, height: 6 },
      bottom: { right: 0, bottom: 0, left: 0, height: 6 },
      left: { top: 0, bottom: 0, left: 0, width: 6 },
      right: { top: 0, right: 0, bottom: 0, width: 6 }
    }
  } as const,
  defaultVariants: {
    variant: "top"
  }
});

/** The edge that carries the accent bar, no bar, or the pixel hover effect. */
export type CardStyle = "top" | "bottom" | "left" | "right" | "none" | "pixel";

/** The surface of the card; see `Container`'s variants. */
export type CardVariant = ContainerVariant;

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

const PIXEL_GAP = 6;
// Ripple speed in px of distance from the center per ms.
const PIXEL_RIPPLE = 0.6;

interface CardPixel {
  x: number;
  y: number;
  delay: number;
  max: number;
  alpha: number;
  phase: number;
  size: number;
}

// `pixel` variant: a grid of twinkling pixels that ripples out from the
// center while hovered and shrinks away on leave. Drawn on a canvas so the
// animation never re-renders; the loop stops once every pixel is gone.
const CardPixels = ({ active, color }: { active: boolean; color: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<CardPixel[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (
      !canvas ||
      !ctx ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // `color` may be a CSS var; the computed style resolves it for canvas.
    const fill = getComputedStyle(canvas).color;
    const build = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio, 2);
      if (canvas.width === Math.round(width * dpr)) {
        return;
      }

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const pixels: CardPixel[] = [];
      for (let x = PIXEL_GAP / 2; x < width; x += PIXEL_GAP) {
        for (let y = PIXEL_GAP / 2; y < height; y += PIXEL_GAP) {
          pixels.push({
            x,
            y,
            delay: Math.hypot(x - width / 2, y - height / 2) / PIXEL_RIPPLE,
            max: 1 + Math.random() * 1.5,
            // Kept faint so card text above the effect stays readable.
            alpha: 0.1 + Math.random() * 0.25,
            phase: Math.random() * Math.PI * 2,
            size: 0
          });
        }
      }
      pixelsRef.current = pixels;
    };

    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      let visible = false;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = fill;
      for (const pixel of pixelsRef.current) {
        const target =
          active && elapsed >= pixel.delay
            ? pixel.max * (0.6 + 0.4 * Math.sin(now / 300 + pixel.phase))
            : 0;
        pixel.size += (target - pixel.size) * 0.15;
        if (pixel.size < 0.05) {
          pixel.size = 0;
          continue;
        }

        visible = true;
        ctx.globalAlpha = pixel.alpha;
        ctx.fillRect(
          pixel.x - pixel.size / 2,
          pixel.y - pixel.size / 2,
          pixel.size,
          pixel.size
        );
      }

      if (active || visible) {
        frame = requestAnimationFrame(tick);
      }
    };

    const observer = new ResizeObserver(build);
    observer.observe(canvas);
    build();
    frame = requestAnimationFrame(tick);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [active, color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        color,
        pointerEvents: "none",
        zIndex: 5
      }}
    />
  );
};

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

interface CardDecorationsProps {
  cardStyle: CardStyle;
  dataColor: string | undefined;
  hovered: boolean;
  spotlightRef: RefObject<HTMLElement | null>;
}

/**
 * The accent bar and hover effect. Rendered inside the frame so the variant's
 * foreground resolves in the card's own theme.
 */
const CardDecorations = ({
  cardStyle,
  dataColor,
  hovered,
  spotlightRef
}: CardDecorationsProps) => {
  // A `primary` bar or spotlight would vanish into a filled card.
  const foreground = useContainerForeground();
  const spotlightColor = dataColor ?? `var(--${foreground ?? "primary"})`;

  return (
    <>
      {cardStyle !== "none" && cardStyle !== "pixel" && (
        <CardAccentBar
          variant={cardStyle}
          {...(foreground && { backgroundColor: foreground })}
          {...(dataColor && { style: { backgroundColor: dataColor } })}
        />
      )}
      {cardStyle === "pixel" ? (
        <CardPixels active={hovered} color={spotlightColor} />
      ) : (
        <CardSpotlight
          ref={spotlightRef as any}
          style={{
            backgroundImage: `radial-gradient(circle closest-side, ${spotlightColor}, transparent)`
          }}
        />
      )}
    </>
  );
};

type CardFrameImplProps = Omit<
  GetProps<typeof CardFrame>,
  "size" | "variant"
> & {
  size?: SizeTokens;
  /**
   * The edge that carries the thick primary accent bar, `none` for no bar, or
   * `pixel` for the pixel hover effect.
   *
   * @defaultValue "top"
   */
  cardStyle?: CardStyle;
  /**
   * The surface of the card. `primary` and `secondary` also draw the card's
   * heading, text, icon, accent bar and link in `on-primary` / `on-secondary`.
   * The card also takes `Container`'s `shadowStyle`, `glass`, `noise` and
   * `accented` props.
   *
   * @defaultValue "elevated"
   */
  variant?: CardVariant;
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
      cardStyle = "top",
      variant = "elevated",
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
              size={size}
              variant={variant}
              hovered={hovered}>
              {dataColor && (
                <CardDataBorder style={{ borderColor: dataColor }} />
              )}
              <CardDecorations
                cardStyle={cardStyle}
                dataColor={dataColor}
                hovered={hovered}
                spotlightRef={spotlightRef}
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
  const foreground = useContainerForeground();
  const theme = useThemeName();
  const icon = children || getIconByTheme({ theme });

  if (!icon) {
    return null;
  }

  return (
    <ThemeableIcon
      size="13xl"
      color={dataColor ?? foreground ?? "primary"}
      zIndex="20"
      {...props}>
      {icon}
    </ThemeableIcon>
  );
};

/**
 * A tag pinned to the card's top right corner, after the rest of the header.
 * Plain string children are wrapped in `Tag.Text`.
 */
const CardTag = ({ children, ...props }: TagProps) => (
  // Wrapped so the layout props land on a plain frame, not the tag's HOC.
  <View marginLeft="auto" alignSelf="flex-start" zIndex="20">
    <Tag {...props}>
      {typeof children === "string" ? (
        <Tag.Text>{children}</Tag.Text>
      ) : (
        children
      )}
    </Tag>
  </View>
);

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
    const foreground = useContainerForeground();

    return (
      <CardHeading
        ref={forwardedRef}
        color={dataColor ?? foreground ?? "primary"}
        {...rest}>
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
    const foreground = useContainerForeground();
    const eyebrow = (
      <CardEyebrow
        ref={forwardedRef}
        {...(foreground && { color: foreground })}
        {...rest}>
        {children}
      </CardEyebrow>
    );

    // On a filled card the text takes the foreground of the card's own theme.
    return foreground ? eyebrow : <Theme name="base">{eyebrow}</Theme>;
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
    const foreground = useContainerForeground();
    const body = (
      <CardBody
        ref={forwardedRef}
        {...(foreground && { color: foreground })}
        {...rest}>
        {children}
      </CardBody>
    );

    // On a filled card the text takes the foreground of the card's own theme.
    return foreground ? body : <Theme name="base">{body}</Theme>;
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
    const foreground = useContainerForeground();

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
          textDecorationColor="group-hover/card:link-hovered"
          // `Link` is a `styled(LinkText)`, whose `color` never reaches the
          // inner text; the inline color does.
          {...(foreground && {
            style: {
              color: `var(--${foreground})`,
              textDecorationColor: `var(--${foreground})`
            }
          })}>
          {children}
        </Link>
        {/* `RightArrow` is a plain component, so flat values / style props
            would reach the <svg> unresolved; drive its color from CSS instead. */}
        <Text
          display="flex"
          transition="200ms"
          marginTop="xs"
          zIndex="30"
          color={foreground ?? "link group-hover/cardLink:link-hovered"}>
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
    Icon: CardIcon,
    Tag: CardTag
  }),
  Body: CardBodyImpl,
  Footer: withStaticProperties(CardFooter, {
    Link: CardLinkImpl
  })
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Card.Eyebrow` is undefined on the server).
 */
export {
  CardBodyImpl as CardBody,
  CardEyebrowImpl as CardEyebrow,
  CardFooter,
  CardHeader,
  CardHeadingImpl as CardHeading,
  CardIcon,
  CardLinkImpl as CardLink,
  CardTag
};

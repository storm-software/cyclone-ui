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

import { getSpaced } from "@cyclone-ui/helpers";
import { BackgroundNoise } from "@cyclone-ui/icons/vectors";
import type { GetProps, SizeTokens, TamaguiElement } from "@tamagui/core";
import { createStyledHOC, styled, useThemeName, View } from "@tamagui/core";
import type { Ref } from "react";
import { createContext, use } from "react";

// v2 `"...size"` variant keys only matched keys of the size token scale; any
// other value (numbers, `true`) left the frame's styles untouched.
const isSizeToken = (val: unknown, tokens: { size: object }): val is string =>
  typeof val === "string" && val in tokens.size;

/**
 * The surface of each `variant`. Components that draw a variant's colors on
 * their own frame (e.g. an arrow or a state shade) read them from here.
 */
export const containerVariants = {
  primary: {
    backgroundColor: "primary",
    borderWidth: 0,
    borderColor: "transparent"
  },

  secondary: {
    backgroundColor: "secondary",
    borderWidth: 1,
    borderColor: "border"
  },

  tertiary: {
    backgroundColor: "surface",
    borderWidth: 1,
    borderColor: "hairline"
  },

  outlined: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "primary"
  },

  sunken: {
    backgroundColor: "sunken",
    borderWidth: 1,
    borderColor: "border"
  },

  canvas: {
    backgroundColor: "canvas",
    borderWidth: 1,
    borderColor: "border"
  },

  surface: {
    backgroundColor: "surface",
    borderWidth: 1,
    borderColor: "border"
  },

  elevated: {
    backgroundColor: "elevated",
    borderWidth: 1,
    borderColor: "border"
  },

  floating: {
    backgroundColor: "floating",
    borderWidth: 1,
    borderColor: "border"
  }
} as const;

export type ContainerVariant = keyof typeof containerVariants;

/**
 * The `boxShadow` of each `shadowStyle`, for a component that draws its
 * `ContainerBackground` inside a frame that clips its overflow (and so the
 * layer's shadow), and puts the shadow on that frame instead.
 */
export const containerShadows = {
  none: "none",
  raised: "color-shadow-resting-raised",
  elevated: "0px 4px 30px #0D0C0766",
  // Also drops the border, which the `Container` itself draws.
  flat: "none"
} as const;

export type ContainerShadowStyle = keyof typeof containerShadows;

/**
 * The `Container` props that style a surface, for components that draw theirs
 * with a `Container` or a `ContainerBackground`. Each component documents its
 * own defaults.
 */
export interface ContainerSurfaceProps {
  /** The surface's background and border; see `Container`'s variants. */
  variant?: ContainerVariant;

  /** The surface's shadow. */
  shadowStyle?: ContainerShadowStyle;

  /** Turn the background into translucent frosted glass. */
  glass?: boolean;

  /** Overlay a fine film grain on the background. */
  noise?: boolean;

  /** Draw the border in the `primary` color. */
  accented?: boolean;
}

// The background of a variant, or `undefined` for a transparent one.
const getBackground = (variant: ContainerVariant) => {
  const color: string = containerVariants[variant].backgroundColor;

  return color === "transparent" ? undefined : color;
};

// `dark_brand` / `brand` -> `brand`; `light`, `dark` and `dark_base` are
// uncolored.
const isUncoloredTheme = (themeName: string | null | undefined) => {
  const parts = themeName?.split("_") ?? [];
  const color = parts.length > 1 ? parts[1] : parts[0];

  return !color || color === "base" || color === "light" || color === "dark";
};

/**
 * The text and icon color for content on a `variant` surface: `on-primary` on
 * `primary`, `on-secondary` on `secondary`, and `undefined` on the other
 * variants, which leave content in its own colors. `on-secondary` is faint on
 * the uncolored themes' light `secondary`, so those use `primary` there, as
 * `Button` does.
 */
export const getContainerForeground = (
  variant: ContainerVariant | undefined,
  themeName: string | null | undefined
) =>
  variant === "primary"
    ? "on-primary"
    : variant === "secondary"
      ? isUncoloredTheme(themeName)
        ? "primary"
        : "on-secondary"
      : undefined;

const ContainerForegroundContext = createContext<string | undefined>(undefined);

/**
 * The text and icon color for content inside the nearest `Container` (see
 * `getContainerForeground`), in that container's own theme.
 */
export const useContainerForeground = () => use(ContainerForegroundContext);

const ContainerFrame = styled(View, {
  displayName: "Container",
  tabIndex: -1,
  width: "100%",
  // The `size: true` default is not a size token, so the variant below leaves
  // this base padding in place (v2 resolved it from the `$true` space token).
  padding: "2xl",
  borderRadius: "container",
  boxShadow: "none focus-visible:ring",
  outline: "focus-visible:none",
  outlineWidth: "focus-visible:0px",
  outlineColor: "focus-visible:transparent",

  variants: {
    variant: containerVariants,

    size: styled.dynamic<SizeTokens | number>((val, { tokens }) => ({
      padding: isSizeToken(val, tokens) ? getSpaced(val) : undefined
    })),

    // Each keeps the base focus ring, which an unconditional variant value
    // would otherwise replace.
    shadowStyle: {
      raised: {
        boxShadow: `${containerShadows.raised} focus-visible:ring`
      },
      elevated: {
        boxShadow: `${containerShadows.elevated} focus-visible:ring`
      },
      flat: {
        boxShadow: `${containerShadows.none} focus-visible:ring`,
        borderWidth: 0,
        borderColor: "transparent"
      },
      none: {
        boxShadow: `${containerShadows.none} focus-visible:ring`
      }
    },

    circular: {
      true: {
        borderRadius: 1000_000_000,
        height: "fit-content"
      }
    },

    tight: {
      true: {
        padding: 0,
        height: "fit-content"
      }
    },

    // Frosted glass. `Container` swaps the variant's background for a
    // translucent copy of it, which this blurs whatever is behind.
    glass: {
      true: {
        backdropFilter: "blur(24px) saturate(160%)",
        // light catching the top edge of the pane
        backgroundImage:
          "linear-gradient(160deg, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.02) 45%, rgb(255 255 255 / 0))",
        borderColor: "rgb(255 255 255 / 0.1)"
      }
    },

    // Declared after `glass` so it overrides the glass border color.
    accented: {
      true: {
        borderColor: "primary"
      }
    }
  } as const,

  defaultVariants: {
    variant: "elevated",
    shadowStyle: "none",
    size: true,
    circular: false,
    tight: false,
    glass: false,
    accented: false
  }
});

type ContainerFrameProps = GetProps<typeof ContainerFrame>;

// `createStyledHOC` strips `theme` before rendering and applies it with a
// `<Theme>` around the result, so the active theme is only readable from a
// component rendered inside that wrapper.
const ContainerSurface = (
  props: ContainerFrameProps & { ref?: Ref<TamaguiElement>; noise?: boolean }
) => {
  const { children, noise, ...frameProps } = props;
  const foreground = getContainerForeground(
    props.variant as ContainerVariant,
    useThemeName()
  );

  return (
    <ContainerFrame
      {...frameProps}
      // `zIndex: 0` makes the frame a stacking context, so the noise's
      // negative `zIndex` paints above the frame's background but below the
      // in-flow children; `overflow` clips the noise to the rounded frame.
      {...(noise && { position: "relative", overflow: "hidden", zIndex: 0 })}>
      {noise && (
        // The blend mode sits on this layer, not the SVG: the layer's `zIndex`
        // makes it a stacking context, which would isolate a blend inside it.
        <View
          position="absolute"
          inset={0}
          zIndex={-1}
          pointerEvents="none"
          mixBlendMode="hard-light"
          opacity={0.12}>
          <BackgroundNoise />
        </View>
      )}
      <ContainerForegroundContext.Provider value={foreground}>
        {children}
      </ContainerForegroundContext.Provider>
    </ContainerFrame>
  );
};

const ContainerGroup = styled(View, {
  displayName: "Container",
  transition: "200ms",
  width: "100%",
  display: "flex",
  flexGrow: 1,
  borderRadius: "container",
  variants: {
    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    }
  } as const,
  defaultVariants: {
    circular: false
  }
});

export const Container = createStyledHOC(
  ContainerFrame,
  (
    {
      variant = "elevated",
      size = true,
      shadowStyle = "none",
      circular = false,
      tight = false,
      glass = false,
      noise = false,
      accented = false,
      hovered = false,
      hoverGroup,
      borderRadius = "container",
      children,
      ...props
    }: ContainerFrameProps & {
      noise?: boolean;
      /** Show the variant's hovered background, e.g. while a parent is hovered. */
      hovered?: boolean;
      /**
       * Show the variant's hovered background while the ancestor with this
       * `group` name is hovered, e.g. `"button"`. Unlike `hovered`, this is
       * pure CSS, so it doesn't lag behind the pointer.
       */
      hoverGroup?: string;
    },
    forwardedRef
  ) => {
    const tint = (color: string) => (glass ? `${color}/60` : color);
    const resting = getBackground(variant as ContainerVariant);

    const background = !resting
      ? undefined
      : hovered
        ? tint(`${resting}-hovered`)
        : hoverGroup
          ? `${tint(resting)} group-hover/${hoverGroup}:${tint(`${resting}-hovered`)}`
          : glass
            ? tint(resting)
            : undefined;

    return (
      <ContainerGroup
        group={true}
        circular={circular}
        borderRadius={borderRadius}>
        <ContainerSurface
          ref={forwardedRef}
          {...props}
          variant={variant}
          size={size}
          shadowStyle={shadowStyle}
          circular={circular}
          tight={tight}
          glass={glass}
          accented={accented}
          noise={noise}
          borderRadius={borderRadius}
          {...(background && { backgroundColor: background })}>
          {children}
        </ContainerSurface>
      </ContainerGroup>
    );
  },
  {
    displayName: "Container"
  }
);

export type ContainerProps = GetProps<typeof Container>;

/**
 * A `Container` drawn as its parent's background: stretched over the parent's
 * padding box behind its in-flow children, following its `borderRadius`,
 * click-through and hidden from assistive tech. The parent must be positioned
 * (e.g. `position: "relative"`; Tamagui views aren't by default) and a stacking
 * context (e.g. `zIndex: 0`), so the layer fills it and its negative `zIndex`
 * paints above the parent's own background. The parent should leave its own
 * background and border clear.
 *
 * The layer draws no shadow, which a parent that clips its overflow would clip:
 * the parent draws `containerShadows[shadowStyle]` itself. Pass it the
 * `shadowStyle` anyway, so `flat` still drops the layer's border.
 */
export const ContainerBackground = ({ shadowStyle, ...props }: ContainerProps) => (
  <View
    position="absolute"
    inset={0}
    zIndex={-1}
    pointerEvents="none"
    borderRadius="inherit"
    aria-hidden={true}>
    <Container
      tight={true}
      flexGrow={1}
      borderRadius="inherit"
      {...props}
      shadowStyle={shadowStyle === "flat" ? "flat" : "none"}
    />
  </View>
);

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

import { getSized, getSpaced } from "@cyclone-ui/helpers";
import type { GetProps, SizeTokens } from "@tamagui/core";
import { createStyledHOC, styled, View } from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";

// v2 `"...size"` variant keys only matched keys of the size token scale; any
// other value (numbers, `true`) left the frame's styles untouched.
const isSizeToken = (val: unknown, tokens: { size: object }): val is string =>
  typeof val === "string" && val in tokens.size;

export type ContainerVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "sunken"
  | "canvas"
  | "elevated"
  | "floating"
  | "overlay"
  | "outlined"
  | "glass";

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
    variant: {
      primary: {
        backgroundColor: "accent",
        borderWidth: 1,
        borderColor: "hairline"
      },

      secondary: {
        backgroundColor: "muted",
        borderWidth: 1,
        borderColor: "hairline"
      },

      tertiary: {
        backgroundColor: "surfaceElevated",
        borderWidth: 1,
        borderColor: "hairline"
      },

      sunken: {
        backgroundColor: "surfaceSunken",
        borderWidth: 1,
        borderColor: "hairline"
      },

      canvas: {
        backgroundColor: "surfaceCanvas",
        borderWidth: 1,
        borderColor: "hairline"
      },

      elevated: {
        backgroundColor: "surfaceElevated",
        borderWidth: 1,
        borderColor: "hairline"
      },

      floating: {
        backgroundColor: "surfaceFloating",
        borderWidth: 1,
        borderColor: "hairline"
      },

      overlay: {
        backgroundColor: "surfaceOverlay",
        borderWidth: 1,
        borderColor: "hairline"
      },

      outlined: {
        backgroundColor: "transparent",
        borderWidth: 3,
        borderColor: "accent"
      },

      glass: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "hairline"
      }
    },

    bordered: styled.dynamic<boolean | SizeTokens>((val, { tokens }) => ({
      borderColor: val === false ? "transparent" : undefined,
      borderWidth:
        val === false ? 0 : isSizeToken(val, tokens) ? getSized(val) : undefined
    })),

    size: styled.dynamic<SizeTokens | number>((val, { tokens }) => ({
      padding: isSizeToken(val, tokens) ? getSpaced(val) : undefined
    })),

    shadowed: {
      true: {
        boxShadow: "0px 4px 30px overlayBackdrop"
      }
    },

    circular: {
      true: {
        borderRadius: 1000_000_000,
        height: "fit-content"
      }
    },

    noPadding: {
      true: {
        padding: 0,
        height: "fit-content"
      }
    }
  } as const,

  defaultVariants: {
    variant: "elevated",
    size: true,
    shadowed: false,
    circular: false,
    bordered: true,
    noPadding: false
  }
});

// `LinearGradient` is not a plain styled view; v3 `styled()` only keeps style
// defaults for it, so the gradient geometry is passed as props at the call site.
const ContainerGlassBackground = styled(LinearGradient, {
  displayName: "Container",

  transition: "200ms",
  opacity: 0.6,
  backdropFilter: "blur(35px)",
  filter: "blur(35px)"
});

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
      shadowed = false,
      circular = false,
      bordered = true,
      noPadding = false,
      borderWidth,
      borderRadius = "container",
      backgroundColor,
      borderColor,
      children,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <ContainerGroup
        group={true}
        circular={circular}
        borderRadius={borderRadius}>
        {variant === "glass" && (
          <ContainerGlassBackground
            theme="base"
            position="absolute"
            inset={0}
            colors={["surfaceElevated", "accent"]}
            start={{ x: 0.1, y: 0.5 }}
            end={{ x: 0.9, y: 0.5 }}
          />
        )}
        <ContainerFrame
          ref={forwardedRef}
          {...props}
          variant={variant}
          size={size}
          shadowed={shadowed}
          circular={circular}
          bordered={bordered}
          borderWidth={bordered ? borderWidth : 0}
          noPadding={noPadding}
          borderRadius={borderRadius}
          backgroundColor={backgroundColor}
          borderColor={borderColor}>
          {children}
        </ContainerFrame>
      </ContainerGroup>
    );
  },
  {
    displayName: "Container"
  }
);

export type ContainerProps = GetProps<typeof Container>;

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

import { ColorThemeName } from "@cyclone-ui/colors";
import { getSized, getSpaced } from "@cyclone-ui/helpers";
import type { GetProps, SizeTokens, VariantSpreadExtras } from "@tamagui/core";
import { View, ViewProps, styled } from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";

export type ContainerVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "outlined"
  | "glass";

const ContainerFrame = styled(View, {
  name: "Container",

  focusable: false,
  width: "100%",

  focusVisibleStyle: {
    outlineColor: "$accent10",
    outlineStyle: "solid",
    outlineWidth: 3,
    outlineOffset: "$1.25"
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "$primary",
        borderWidth: 1,
        borderColor: "$tertiary"
      },

      secondary: {
        backgroundColor: "$surfaceSecondary",
        borderWidth: 1,
        borderColor: "$borderColor"
      },

      tertiary: {
        backgroundColor: "$surfacePrimary",
        borderWidth: 1,
        borderColor: "$borderColor"
      },

      quaternary: {
        backgroundColor: "$backgroundStrong",
        borderWidth: 2,
        borderColor: "$borderColor"
      },

      outlined: {
        backgroundColor: "transparent",
        borderWidth: 3,
        borderColor: "$color"
      },

      glass: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "$base8"
      }
    },

    bordered: {
      false: {
        borderColor: "transparent",
        borderWidth: 0
      },
      "...size": (val: SizeTokens, config: VariantSpreadExtras<ViewProps>) => ({
        borderWidth: getSized(val)
      })
    },

    size: {
      "...size": (val: SizeTokens, config: VariantSpreadExtras<ViewProps>) => {
        const space = getSpaced(val);

        return {
          padding: space,
          borderRadius: config.tokens.radius[val]
        };
      }
    },

    elevated: {
      true: {
        shadowColor: "$shadowColor",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 30
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
    variant: "tertiary",
    size: "$true",
    elevated: true,
    circular: false,
    bordered: true,
    noPadding: false
  }
});

const ContainerGlassBackground = styled(LinearGradient, {
  name: "Container",

  animation: "normal",
  opacity: 0.6,
  backdropFilter: "blur(35px)",
  filter: "blur(35px)",
  colors: ["$secondary", "$primary"],
  start: { x: 0.1, y: 0.5 },
  end: { x: 0.9, y: 0.5 }
});

const ContainerGroup = styled(View, {
  name: "Container",

  animation: "normal",
  width: "100%",
  display: "flex",
  flex: 1,

  variants: {
    size: {
      "...size": (val: SizeTokens, config: VariantSpreadExtras<any>) => {
        return {
          borderRadius: config.tokens.radius[val]
        };
      }
    },

    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    circular: false
  }
});

export const Container = ContainerFrame.styleable(
  (
    {
      variant = "tertiary",
      size = "$true",
      elevated = true,
      circular = false,
      bordered = true,
      noPadding = false,
      borderWidth,
      children,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <ContainerGroup group={true} size={size} circular={circular}>
        {variant === "glass" && (
          <ContainerGlassBackground
            theme={ColorThemeName.BASE}
            fullscreen={true}
          />
        )}
        <ContainerFrame
          ref={forwardedRef}
          {...props}
          variant={variant}
          size={size}
          elevated={elevated}
          circular={circular}
          bordered={bordered}
          borderWidth={bordered ? borderWidth : 0}
          noPadding={noPadding}>
          {children}
        </ContainerFrame>
      </ContainerGroup>
    );
  },
  {
    staticConfig: { componentName: "Container" }
  }
);

export type ContainerProps = GetProps<typeof Container>;

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
import { getSpaced } from "@cyclone-ui/theme-helpers";
import type { GetProps, SizeTokens, VariantSpreadExtras } from "@tamagui/core";
import { View, ViewProps, styled } from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { ThemeableStack } from "@tamagui/stacks";

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
  userSelect: "none",
  shadowColor: "$shadowColor",
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 30,

  variants: {
    bordered: {
      false: {
        borderColor: "transparent",
        borderWidth: 0,

        hoverStyle: {
          borderColor: "transparent",
          borderWidth: 0
        }
      },
      true: {
        borderWidth: 1,

        hoverStyle: {
          borderWidth: 1
        }
      }
    },

    variant: {
      primary: {
        backgroundColor: "$primary",
        borderColor: "$tertiary"
      },

      secondary: {
        backgroundColor: "$surfaceSecondary",
        borderColor: "$borderColor"
      },

      tertiary: {
        backgroundColor: "$surfacePrimary",
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

    size: {
      "...size": (val: SizeTokens, config: VariantSpreadExtras<ViewProps>) => {
        const space = getSpaced(val);

        return {
          padding: space,
          borderRadius: config.tokens.radius[val]
        };
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
    circular: false,
    bordered: true,
    noPadding: false
  }
});

const ContainerGlassBackground = styled(LinearGradient, {
  name: "Container",

  animation: "normal",
  opacity: 0.4,
  backdropFilter: "blur(15px)",
  filter: "blur(15px)",
  colors: ["$secondary", "$primary"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
});

const ContainerGroup = styled(ThemeableStack, {
  name: "Container",

  animation: "normal",
  overflow: "hidden",

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
      circular = false,
      bordered = true,
      noPadding = false,
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
          circular={circular}
          bordered={bordered}
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

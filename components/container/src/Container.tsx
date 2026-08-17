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
import type {
  GetProps,
  SizeTokens,
  VariantSpreadExtras,
  ViewProps
} from "@tamagui/core";
import { View, styled } from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";

export type ContainerVariant =
  "primary" | "secondary" | "tertiary" | "quaternary" | "outlined" | "glass";

const ContainerFrame = styled(View, {
  name: "Container",

  focusable: false,
  width: "100%",

  focusVisibleStyle: {
    outlineColor: "$borderAccent",
    outlineStyle: "solid",
    outlineWidth: 3,
    outlineOffset: "$1.25"
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "$backgroundPrimary",
        borderWidth: 1,
        borderColor: "$borderTertiary"
      },

      secondary: {
        backgroundColor: "$surface2",
        borderWidth: 1,
        borderColor: "$borderPrimary"
      },

      tertiary: {
        backgroundColor: "$surface1",
        borderWidth: 1,
        borderColor: "$borderPrimary"
      },

      quaternary: {
        backgroundColor: "$backgroundElevated",
        borderWidth: 2,
        borderColor: "$borderPrimary"
      },

      outlined: {
        backgroundColor: "transparent",
        borderWidth: 3,
        borderColor: "$borderPrimary"
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
      "...size": (
        val: SizeTokens,
        _config: VariantSpreadExtras<ViewProps>
      ) => ({
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
        shadowColor: "$overlayBackdrop",
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
  colors: ["$backgroundSecondary", "$backgroundPrimary"],
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
          <ContainerGlassBackground theme={"base"} fullscreen={true} />
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

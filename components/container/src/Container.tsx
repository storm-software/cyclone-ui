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

  tabIndex: -1,
  width: "100%",
  borderRadius: "$container",

  focusVisibleStyle: {
    outlineColor: "$borderFocused",
    outlineStyle: "solid",
    outlineWidth: 3,
    outlineOffset: "$lg"
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "$background",
        borderWidth: 1,
        borderColor: "$border"
      },

      secondary: {
        backgroundColor: "$backgroundElevated",
        borderWidth: 1,
        borderColor: "$borderSubtle"
      },

      tertiary: {
        backgroundColor: "$backgroundFloating",
        borderWidth: 1,
        borderColor: "$border"
      },

      elevated: {
        backgroundColor: "$backgroundElevated",
        borderWidth: 1,
        borderColor: "$border"
      },

      floating: {
        backgroundColor: "$backgroundFloating",
        borderWidth: 1,
        borderColor: "$borderSubtle"
      },

      highest: {
        backgroundColor: "$backgroundHighest",
        borderWidth: 1,
        borderColor: "$border"
      },

      page: {
        backgroundColor: "$backgroundPage",
        borderWidth: 2,
        borderColor: "$borderSubtle"
      },

      outlined: {
        backgroundColor: "transparent",
        borderWidth: 3,
        borderColor: "$border"
      },

      glass: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "$border"
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
      "...size": (val: SizeTokens, _config: VariantSpreadExtras<ViewProps>) => {
        const space = getSpaced(val);

        return {
          padding: space
        };
      }
    },

    shadowed: {
      true: {
        boxShadow: "0px 4px 30px $overlayBackdrop"
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
    size: "$true",
    shadowed: false,
    circular: false,
    bordered: true,
    noPadding: false
  }
});

const ContainerGlassBackground = styled(LinearGradient, {
  name: "Container",

  transition: "medium",
  opacity: 0.6,
  backdropFilter: "blur(35px)",
  filter: "blur(35px)",
  colors: ["$backgroundElevated", "$background"],
  start: { x: 0.1, y: 0.5 },
  end: { x: 0.9, y: 0.5 }
});

const ContainerGroup = styled(View, {
  name: "Container",

  transition: "medium",
  width: "100%",
  display: "flex",
  flex: 1,
  borderRadius: "$container",

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

export const Container = ContainerFrame.styleable(
  (
    {
      variant = "tertiary",
      size = "$true",
      shadowed = false,
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
      <ContainerGroup group={true} circular={circular}>
        {variant === "glass" && (
          <ContainerGlassBackground theme="primary" fullscreen={true} />
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

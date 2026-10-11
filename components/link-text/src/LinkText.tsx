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

import type { BodyTextSize } from "@cyclone-ui/body-text";
import type { FontSizeTokens, GetProps } from "@tamagui/core";
import { createStyledHOC, styled, useThemeName } from "@tamagui/core";
import { SizableText } from "@tamagui/text";

export interface LinkTextExtraProps {
  disabled?: boolean;
  underline?: "hover" | "initial" | "static" | "none";
  variant?: "base" | "mixed" | "themed" | "subtle" | "subtlest";
  inverse?: boolean;
  size?: BodyTextSize;
}

const LinkTextFrame = styled(SizableText, {
  displayName: "LinkText",
  transition: "200ms",
  cursor: "pointer",

  // Tamagui v3 maps `size: true` to the `sm` / `4` font key; the generated fonts
  // only define `true` plus their own step, so name the default step explicitly.
  size: "true" as FontSizeTokens,
  whiteSpace: "nowrap",
  textDecorationStyle: "solid",
  variants: {
    underline: {
      initial: {
        textDecorationLine: "underline hover:none"
      },
      hover: {
        textDecorationLine: "none hover:underline"
      },
      static: {
        textDecorationLine: "underline"
      },
      none: {
        textDecorationLine: "none hover:none"
      }
    },

    cta: {
      true: {
        fontFamily: "title-md",
        fontWeight: "true",
        textTransform: "uppercase"
      }
    },

    variant: {
      base: {
        color: "primary hover:active press:active focus:active",
        textDecorationColor: "primary hover:active press:active focus:active"
      },
      baseInverse: {
        color: "accent hover:active press:active focus:active",
        textDecorationColor: "accent hover:active press:active focus:active"
      },

      mixed: {
        color: "accent hover:active press:active focus:active",
        textDecorationColor: "primary hover:active press:active focus:active"
      },
      mixedInverse: {
        color: "primary hover:active press:active focus:active",
        textDecorationColor: "accent hover:active press:active focus:active"
      },

      themed: {
        color: "accent hover:active press:active focus:active",
        textDecorationColor: "accent hover:active press:active focus:active"
      },
      themedInverse: {
        color: "accent hover:active press:active focus:active",
        textDecorationColor: "accent hover:active press:active focus:active"
      },

      // Secondary ink at rest so the link recedes into running copy, then the
      // theme accent on interaction.
      subtle: {
        color: "secondary hover:accent press:active focus:active",
        textDecorationColor: "tertiary hover:accent press:active focus:active"
      },

      // One step further down the ink scale, with tertiary text.
      subtlest: {
        color: "tertiary hover:accent press:active focus:active",
        textDecorationColor: "tertiary hover:accent press:active focus:active"
      }
    },

    inverse: {
      true: {
        color: "hover:active",
        textDecorationColor: "hover:active"
      }
    },

    size: {
      sm: {
        fontFamily: "body-sm"
      },
      md: {
        fontFamily: "body-md"
      }
    },

    disabled: {
      true: {
        cursor: "default",
        color: "inactive hover:inactive"
      }
    }
  } as const,

  defaultVariants: {
    underline: "static",
    cta: false,
    disabled: false,
    variant: "base",
    size: "md"
  }
});

/**
 * In v2 an explicit `color` was applied through the inline `style` (via the
 * removed `useStyle` hook), so it won over the variant's base and state colors.
 * In v3 the prop is passed after the variants, where it only replaces the
 * clauses it restates, so restate the variant state clauses for a plain value.
 * Flat clause strings pass through unchanged.
 */
const getColorOverride = <TColor,>(color: TColor): TColor => {
  if (typeof color !== "string" || !/^[\w#.-]+$/.test(color)) {
    return color;
  }

  return `${color} hover:${color} press:${color} focus:${color}` as TColor;
};

type BaseLinkTextVariant = GetProps<typeof LinkTextFrame>["variant"];

export const LinkText = createStyledHOC(
  LinkTextFrame,
  (
    {
      children,
      underline = "static",
      cta = false,
      disabled = false,
      inverse = false,
      color,
      style,
      ...props
    }: GetProps<typeof LinkTextFrame> & LinkTextExtraProps,
    forwardedRef
  ) => {
    let theme = useThemeName();

    let variant = props.variant as BaseLinkTextVariant;
    if (
      !theme ||
      theme === "dark" ||
      theme === "light" ||
      theme.endsWith("base")
    ) {
      // `subtle` and `subtlest` are built on the neutral ink tokens, so they
      // still apply in the base theme; the other color variants collapse to
      // `base` there.
      if (variant !== "subtle" && variant !== "subtlest") {
        variant = "base";
      }
      theme = `${theme?.startsWith("dark") ? "dark" : "light"}_base`;
    } else if (!variant) {
      variant = "themed";
    }

    // `subtle` and `subtlest` have no inverse form: the `inverse` hover step
    // (`active`) would dim them in the dark base theme.
    const subtle = variant === "subtle" || variant === "subtlest";
    if (inverse && !subtle) {
      variant = `${variant}Inverse` as BaseLinkTextVariant;
    }

    return (
      <LinkTextFrame
        {...props}
        ref={forwardedRef}
        theme={theme}
        underline={underline}
        cta={cta}
        disabled={disabled}
        inverse={inverse && !subtle}
        variant={variant}
        {...(color !== undefined && { color: getColorOverride(color) })}
        style={[{ textUnderlineOffset: 3 }, style]}>
        {children}
      </LinkTextFrame>
    );
  },
  { displayName: "LinkText" }
);

export type LinkTextProps = GetProps<typeof LinkText>;

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

import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, useThemeName } from "@tamagui/core";
import { SizableText } from "@tamagui/text";

export type LinkTextVariant =
  "base" | "emphasis" | "ink" | "subtle" | "subtlest";

export interface LinkTextExtraProps {
  disabled?: boolean;
  underline?: "hover" | "initial" | "static" | "none";
  /**
   * The text color: `base` uses `link`, the rest use their own color tokens.
   */
  variant?: LinkTextVariant;
  /**
   * Underline in `link` while the text keeps the `variant` color.
   */
  mixed?: boolean;
  /**
   * Swap the text and underline colors (only visible with `mixed`).
   */
  inverse?: boolean;
  /**
   * Use `primary` everywhere `link` would be used.
   */
  themed?: boolean;

  /**
   * The size of the link text, corresponding to the body text sizes.
   */
  size?: "sm" | "md" | "lg";
}

const LinkTextFrame = styled(SizableText, {
  displayName: "LinkText",
  transition: "200ms",
  cursor: "pointer",

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
        fontFamily: "display",
        fontSize: "sm",
        lineHeight: "sm",
        fontWeight: "600",
        textTransform: "uppercase"
      }
    },

    size: {
      sm: {
        fontFamily: "body",
        fontSize: "sm",
        lineHeight: "sm",
        fontWeight: "medium"
      },
      md: {
        fontFamily: "body",
        fontSize: "md",
        lineHeight: "md",
        fontWeight: "medium"
      },
      lg: {
        fontFamily: "body",
        fontSize: "lg",
        lineHeight: "lg",
        fontWeight: "medium"
      }
    },

    disabled: {
      true: {
        cursor: "default"
      }
    }
  } as const,

  defaultVariants: {
    underline: "static",
    cta: false,
    disabled: false,
    size: "md"
  }
});

/**
 * A color token with its interaction states, e.g. `link hover:link-hovered ...`.
 */
const getStateColors = (token: string) =>
  `${token} hover:${token}-hovered press:${token}-active focus:${token}-active`;

/**
 * In v2 an explicit `color` was applied through the inline `style` (via the
 * removed `useStyle` hook), so it won over the variant's base and state colors.
 * A plain value replaces every state clause; a flat clause string (e.g.
 * `group-hover/card:primary-hovered`) is appended so it only replaces the
 * clauses it restates.
 */
const mergeColor = <TColor,>(base: string, color: TColor): TColor => {
  if (color === undefined) {
    return base as TColor;
  } else if (typeof color !== "string") {
    return color;
  } else if (/^[\w#.-]+$/.test(color)) {
    return `${color} hover:${color} press:${color} focus:${color}` as TColor;
  }

  return `${base} ${color}` as TColor;
};

export const LinkText = createStyledHOC(
  LinkTextFrame,
  (
    {
      children,
      underline = "static",
      cta = false,
      disabled = false,
      variant = "base",
      mixed = false,
      inverse = false,
      themed = false,
      color,
      textDecorationColor,
      style,
      ...props
    }: GetProps<typeof LinkTextFrame> & LinkTextExtraProps,
    forwardedRef
  ) => {
    let theme = useThemeName();
    if (
      !theme ||
      theme === "dark" ||
      theme === "light" ||
      theme.endsWith("base")
    ) {
      theme = `${theme?.startsWith("dark") ? "dark" : "light"}_base`;
    }

    const link = themed ? "primary" : "link";
    let textColor = getStateColors(variant === "base" ? link : variant);
    let decorationColor = mixed ? getStateColors(link) : textColor;
    if (mixed && inverse) {
      [textColor, decorationColor] = [decorationColor, textColor];
    }
    if (disabled) {
      textColor = `${link}-disabled hover:${link}-disabled`;
    }

    return (
      <LinkTextFrame
        {...props}
        ref={forwardedRef}
        theme={theme}
        underline={underline}
        cta={cta}
        disabled={disabled}
        color={mergeColor(textColor, color)}
        textDecorationColor={mergeColor(decorationColor, textDecorationColor)}
        style={[{ textUnderlineOffset: 3 }, style]}>
        {children}
      </LinkTextFrame>
    );
  },
  { displayName: "LinkText" }
);

export type LinkTextProps = GetProps<typeof LinkText>;

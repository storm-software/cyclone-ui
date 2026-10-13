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
 * A color token with its interaction states, e.g. `link hover:linkHovered ...`.
 */
const getStateColors = (token: string) =>
  `${token} hover:${token}Hovered press:${token}Active focus:${token}Active`;

/**
 * In v2 an explicit `color` was applied through the inline `style` (via the
 * removed `useStyle` hook), so it won over the variant's base and state colors.
 * A plain value replaces every state clause; a flat clause string (e.g.
 * `group-hover/card:primaryHovered`) is appended so it only replaces the
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
      textColor = `${link}Disabled hover:${link}Disabled`;
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

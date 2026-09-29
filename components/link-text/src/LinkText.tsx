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

import type { FontSizeTokens, GetProps } from "@tamagui/core";
import { createStyledHOC, styled, useThemeName } from "@tamagui/core";
import { SizableText } from "@tamagui/text";

export interface LinkTextExtraProps {
  disabled?: boolean;
  underline?: "hover" | "initial" | "static" | "none";
  variant?: "base" | "mixed" | "themed";
  inverse?: boolean;
}

const LinkTextFrame = styled(SizableText, {
  displayName: "LinkText",
  transition: "200ms",
  cursor: "pointer",
  // v3 `SizableText` defaults `fontFamily` to the literal `body`, which is not
  // a configured font, so every font metric would be dropped without this.
  fontFamily: "body",
  fontWeight: "md",
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
        fontFamily: "button",
        fontWeight: "true",
        textTransform: "uppercase"
      }
    },

    variant: {
      base: {
        color: "link hover:linkHover press:linkActive focus:linkActive",
        textDecorationColor:
          "link hover:linkHover press:linkActive focus:linkActive"
      },
      baseInverse: {
        color: "accent hover:accentHover press:accentActive focus:accentActive",
        textDecorationColor:
          "accent hover:accentHover press:accentActive focus:accentActive"
      },

      mixed: {
        color: "accent hover:accentHover press:accentActive focus:accentActive",
        textDecorationColor:
          "link hover:linkHover press:linkActive focus:linkActive"
      },
      mixedInverse: {
        color: "link hover:accentHover press:linkActive focus:linkActive",
        textDecorationColor:
          "accent hover:accentHover press:accentActive focus:accentActive"
      },

      themed: {
        color: "accent hover:accentHover press:accentActive focus:accentActive",
        textDecorationColor:
          "accent hover:accentHover press:accentActive focus:accentActive"
      },
      themedInverse: {
        color: "accent hover:accentHover press:accentActive focus:accentActive",
        textDecorationColor:
          "accent hover:accentHover press:accentActive focus:accentActive"
      }
    },

    inverse: {
      true: {
        color: "hover:accentHover",
        textDecorationColor: "hover:accentHover"
      }
    },

    disabled: {
      true: {
        cursor: "default",
        color: "linkInactive hover:linkInactive"
      }
    }
  } as const,
  defaultVariants: {
    underline: "static",
    cta: false,
    disabled: false,
    variant: "base"
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
      variant = "base";
      theme = `${theme?.startsWith("dark") ? "dark" : "light"}_base`;
    } else if (!variant) {
      variant = "themed";
    }

    if (inverse) {
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
        inverse={inverse}
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

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

import type { MaskOptions } from "@cyclone-ui/masks";
import { palettes } from "./palettes";
import { ColorPaletteShades } from "./tokens";

const templateColorsSpecific = {
  color1: 1,
  color2: 2,
  color3: 3,
  color4: 4,
  color5: 5,
  color6: 6,
  color7: 7,
  color8: 8,
  color9: 9,
  color10: 10,
  color11: 11,
  color12: 12,
  color13: 13,
  color14: 14
};

const brandColors = {
  bg: ColorPaletteShades.BACKGROUND,
  bgTransparent: ColorPaletteShades.BACKGROUND_TRANSPARENT,
  fg: ColorPaletteShades.FOREGROUND,
  fgTransparent: ColorPaletteShades.FOREGROUND_TRANSPARENT,
  primary: ColorPaletteShades.PRIMARY,
  secondary: ColorPaletteShades.SECONDARY,
  tertiary: ColorPaletteShades.TERTIARY,
  muted: ColorPaletteShades.MUTED,
  surfacePrimary: ColorPaletteShades.SURFACE_PRIMARY,
  surfaceSecondary: ColorPaletteShades.SURFACE_SECONDARY,
  surfaceTertiary: ColorPaletteShades.SURFACE_TERTIARY,
  surfaceMuted: ColorPaletteShades.SURFACE_MUTED
};

// templates use the palette and specify index
// negative goes backwards from end so -1 is the last item
const template = {
  ...templateColorsSpecific,
  ...brandColors,
  // the background, color, etc keys here work like generics - they make it so you
  // can publish components for others to use without mandating a specific color scale
  // the @tamagui/button Button component looks for `$background`, so you set the
  // dark_red_Button theme to have a stronger background than the dark_red theme.
  background: ColorPaletteShades.SURFACE_PRIMARY,
  backgroundHover: ColorPaletteShades.SURFACE_MUTED,
  backgroundPress: ColorPaletteShades.SURFACE_SECONDARY,
  backgroundFocus: ColorPaletteShades.SURFACE_SECONDARY,
  backgroundDisabled: ColorPaletteShades.SURFACE_MUTED + 1,
  backgroundStrong: ColorPaletteShades.BACKGROUND,
  color: ColorPaletteShades.PRIMARY,
  colorHover: ColorPaletteShades.FOREGROUND,
  colorPress: ColorPaletteShades.SECONDARY,
  colorFocus: ColorPaletteShades.SECONDARY,
  colorDisabled: ColorPaletteShades.SECONDARY,
  colorTransparent: ColorPaletteShades.FOREGROUND_TRANSPARENT,
  borderColor: ColorPaletteShades.BACKGROUND + 5,
  borderColorHover: ColorPaletteShades.BACKGROUND + 6,
  borderColorFocus: ColorPaletteShades.BACKGROUND + 5,
  borderColorPress: ColorPaletteShades.BACKGROUND + 6,
  borderColorDisabled: ColorPaletteShades.BACKGROUND + 3,
  placeholderColor: ColorPaletteShades.SECONDARY,
  placeholderColorDisabled: ColorPaletteShades.BACKGROUND + 3,
  outlineColor: ColorPaletteShades.PRIMARY
};

export const templates = {
  base: template,
  colorLight: {
    ...template,

    surfacePrimary: ColorPaletteShades.SURFACE_MUTED,
    surfaceSecondary: ColorPaletteShades.SURFACE_TERTIARY,
    surfaceTertiary: ColorPaletteShades.SURFACE_SECONDARY,
    surfaceMuted: ColorPaletteShades.SURFACE_PRIMARY,

    // light color themes are a bit less sensitive
    borderColor: 4,
    borderColorHover: 5,
    borderColorFocus: 4,
    borderColorPress: 4
  }
};

const shadows = {
  shadowColor: 0,
  shadowColorHover: 0,
  shadowColorPress: 0,
  shadowColorFocus: 0
};

const colors = {
  ...shadows
  // color: 0,
  // colorHover: 0,
  // colorFocus: 0,
  // colorPress: 0
};

const baseMaskOptions: MaskOptions = {
  override: shadows,
  skip: shadows,
  // avoids the transparent ends
  max: palettes.light.length,
  min: 0
};

const skipShadowsAndSpecificColors = {
  ...shadows,
  ...templateColorsSpecific
};

export const maskOptions = {
  component: {
    ...baseMaskOptions,
    override: colors,
    skip: skipShadowsAndSpecificColors
  },
  alt: {
    ...baseMaskOptions
  },
  body: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      color: ColorPaletteShades.SECONDARY,
      colorHover: ColorPaletteShades.SECONDARY,
      colorPress: ColorPaletteShades.SECONDARY,
      colorFocus: ColorPaletteShades.SECONDARY
    },
    skip: skipShadowsAndSpecificColors
  },
  label: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      color: ColorPaletteShades.FOREGROUND,
      colorHover: ColorPaletteShades.FOREGROUND,
      colorPress: ColorPaletteShades.FOREGROUND,
      colorFocus: ColorPaletteShades.FOREGROUND
    },
    skip: skipShadowsAndSpecificColors
  },
  link: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      color: ColorPaletteShades.PRIMARY,
      colorHover: ColorPaletteShades.SECONDARY,
      colorPress: ColorPaletteShades.SECONDARY - 2,
      colorFocus: ColorPaletteShades.SECONDARY - 2
    },
    skip: skipShadowsAndSpecificColors
  },
  eyebrow: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      color: ColorPaletteShades.SECONDARY - 2,
      colorHover: ColorPaletteShades.SECONDARY,
      colorPress: ColorPaletteShades.SECONDARY,
      colorFocus: ColorPaletteShades.SECONDARY
    },
    skip: skipShadowsAndSpecificColors
  },
  heading: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      color: ColorPaletteShades.PRIMARY
    },
    skip: skipShadowsAndSpecificColors
  },
  title: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      color: ColorPaletteShades.FOREGROUND,
      colorHover: ColorPaletteShades.FOREGROUND,
      colorPress: ColorPaletteShades.FOREGROUND,
      colorFocus: ColorPaletteShades.FOREGROUND
    },
    skip: skipShadowsAndSpecificColors
  },
  button: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      color: ColorPaletteShades.PRIMARY,
      colorHover: ColorPaletteShades.PRIMARY,
      colorPress: ColorPaletteShades.PRIMARY,
      colorFocus: ColorPaletteShades.PRIMARY
    },
    skip: skipShadowsAndSpecificColors
  },
  table: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      color: ColorPaletteShades.PRIMARY - 4,
      borderColor: ColorPaletteShades.BACKGROUND + 2
    },
    skip: skipShadowsAndSpecificColors
  },
  tableHeader: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      color: ColorPaletteShades.BACKGROUND + 4,
      borderColor: ColorPaletteShades.BACKGROUND + 2
    },
    skip: skipShadowsAndSpecificColors
  },
  alert: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      borderColor: ColorPaletteShades.PRIMARY
    },
    skip: skipShadowsAndSpecificColors
  },
  badge: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      background: ColorPaletteShades.PRIMARY,
      backgroundHover: ColorPaletteShades.PRIMARY + 1,
      color: ColorPaletteShades.BACKGROUND,
      colorHover: ColorPaletteShades.BACKGROUND
    },
    skip: skipShadowsAndSpecificColors
  },
  card: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      background: ColorPaletteShades.PRIMARY,
      backgroundHover: ColorPaletteShades.PRIMARY + 2,
      color: ColorPaletteShades.PRIMARY - 4,
      borderColor: ColorPaletteShades.PRIMARY,
      borderColorHover: ColorPaletteShades.PRIMARY + 2,
      borderColorFocus: ColorPaletteShades.PRIMARY + 2,
      borderColorPress: ColorPaletteShades.PRIMARY + 2
    },
    skip: skipShadowsAndSpecificColors
  },
  cardTitle: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      color: ColorPaletteShades.FOREGROUND
    },
    skip: skipShadowsAndSpecificColors
  },
  cardEyebrow: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      color: ColorPaletteShades.PRIMARY - 3
    },
    skip: skipShadowsAndSpecificColors
  }
} satisfies Record<string, MaskOptions>;

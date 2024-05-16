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
  primary: ColorPaletteShades.PRIMARY,
  muted: ColorPaletteShades.MUTED,
  disabled: ColorPaletteShades.DISABLED,
  bg: ColorPaletteShades.BACKGROUND,
  bgTransparent: ColorPaletteShades.BACKGROUND_TRANSPARENT,
  fg: ColorPaletteShades.FOREGROUND,
  fgTransparent: ColorPaletteShades.FOREGROUND_TRANSPARENT
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
  background: ColorPaletteShades.BACKGROUND,
  backgroundHover: 3,
  backgroundPress: 4,
  backgroundFocus: 4,
  backgroundStrong: ColorPaletteShades.BACKGROUND,
  backgroundTransparent: ColorPaletteShades.BACKGROUND_TRANSPARENT,
  color: ColorPaletteShades.PRIMARY - 2,
  colorHover: ColorPaletteShades.PRIMARY + 1,
  colorPress: ColorPaletteShades.PRIMARY + 2,
  colorFocus: ColorPaletteShades.PRIMARY + 2,
  colorTransparent: -0,
  borderColor: -4,
  borderColorHover: -2,
  borderColorFocus: -3,
  borderColorPress: -3,
  placeholderColor: -4,
  outlineColor: ColorPaletteShades.PRIMARY
};

export const templates = {
  base: template,
  colorLight: {
    ...template,
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
  button: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      background: ColorPaletteShades.PRIMARY,
      backgroundHover: ColorPaletteShades.PRIMARY + 2,
      backgroundFocus: ColorPaletteShades.PRIMARY - 1,
      backgroundPress: ColorPaletteShades.PRIMARY - 1,
      color: ColorPaletteShades.BACKGROUND,
      colorHover: ColorPaletteShades.BACKGROUND,
      colorPress: ColorPaletteShades.BACKGROUND,
      colorFocus: ColorPaletteShades.BACKGROUND,
      borderColor: ColorPaletteShades.PRIMARY,
      borderColorHover: ColorPaletteShades.PRIMARY + 2,
      borderColorFocus: ColorPaletteShades.PRIMARY - 1,
      borderColorPress: ColorPaletteShades.PRIMARY - 1
    },
    skip: skipShadowsAndSpecificColors
  },
  link: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      color: ColorPaletteShades.FOREGROUND,
      colorHover: ColorPaletteShades.PRIMARY - 1,
      colorPress: ColorPaletteShades.PRIMARY - 2,
      colorFocus: ColorPaletteShades.PRIMARY - 2
    },
    skip: skipShadowsAndSpecificColors
  },
  input: {
    ...baseMaskOptions,
    override: {
      ...colors,
      color: ColorPaletteShades.FOREGROUND,
      borderColor: ColorPaletteShades.PRIMARY - 4,
      borderColorHover: ColorPaletteShades.PRIMARY - 4,
      borderColorFocus: ColorPaletteShades.PRIMARY - 4,
      borderColorPress: ColorPaletteShades.PRIMARY - 4,
      placeholderColor: ColorPaletteShades.PRIMARY - 4
    },
    skip: skipShadowsAndSpecificColors
  },
  label: {
    ...baseMaskOptions,
    override: {
      ...colors,
      color: ColorPaletteShades.PRIMARY - 2,
      colorHover: ColorPaletteShades.FOREGROUND,
      colorPress: ColorPaletteShades.FOREGROUND,
      colorFocus: ColorPaletteShades.FOREGROUND
    },
    skip: skipShadowsAndSpecificColors
  },
  alert: {
    ...baseMaskOptions,
    override: {
      ...colors,
      background: ColorPaletteShades.PRIMARY + 2,
      color: ColorPaletteShades.PRIMARY - 3,
      borderColor: ColorPaletteShades.PRIMARY
    },
    skip: skipShadowsAndSpecificColors
  },
  alertHeading: {
    ...baseMaskOptions,
    override: {
      ...colors,
      color: ColorPaletteShades.FOREGROUND
    },
    skip: skipShadowsAndSpecificColors
  },
  breadcrumb: {
    ...baseMaskOptions,
    overrideStrategy: "swap",
    override: {
      ...colors,
      color: ColorPaletteShades.FOREGROUND,
      colorHover: ColorPaletteShades.PRIMARY - 1,
      colorPress: ColorPaletteShades.PRIMARY - 2,
      colorFocus: ColorPaletteShades.PRIMARY - 2
    },
    skip: skipShadowsAndSpecificColors
  },
  badge: {
    ...baseMaskOptions,
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
    override: {
      ...colors,
      color: ColorPaletteShades.FOREGROUND
    },
    skip: skipShadowsAndSpecificColors
  },
  cardEyebrow: {
    ...baseMaskOptions,
    override: {
      ...colors,
      color: ColorPaletteShades.PRIMARY - 3
    },
    skip: skipShadowsAndSpecificColors
  },
  message: {
    ...baseMaskOptions,
    override: {
      ...colors,
      background: ColorPaletteShades.PRIMARY + 2,
      color: ColorPaletteShades.PRIMARY - 3,
      borderColor: ColorPaletteShades.PRIMARY
    },
    skip: skipShadowsAndSpecificColors
  },
  messageHeading: {
    ...baseMaskOptions,
    override: {
      ...colors,
      color: ColorPaletteShades.FOREGROUND
    },
    skip: skipShadowsAndSpecificColors
  }
} satisfies Record<string, MaskOptions>;

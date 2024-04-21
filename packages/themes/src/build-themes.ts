import { createThemeBuilder } from "@tamagui/theme-builder";
import { ColorPaletteType, ColorTheme } from "./types";
import { palettes } from "./palettes";
import { templates, maskOptions } from "./templates";
import { masks } from "./masks";
import { shadows } from "./shadows";
import { darkColors, lightColors } from "./tokens";

export const formatPalettes = (
  dark: ColorTheme,
  light: ColorTheme
): Record<string, string[]> => {
  let result = Object.keys(dark).reduce(
    (ret: Record<string, string[]>, key: string) => {
      ret[`dark_${key}`] = Object.values(
        dark[key as ColorPaletteType]
      ) as string[];

      return ret;
    },
    {} as Record<string, string[]>
  );

  return Object.keys(light).reduce(
    (ret: Record<string, string[]>, key: string) => {
      ret[`light_${key}`] = Object.values(
        light[key as ColorPaletteType]
      ) as string[];

      return ret;
    },
    result
  );
};

// const colorsTemplate = {
//   color0: 0,
//   color1: 1,
//   color2: 2,
//   color3: 3,
//   color4: 4,
//   color5: 5,
//   color6: 6,
//   color7: 7,
//   color8: 8,
//   color9: 9,
//   color10: 10,
//   color11: 11,
//   color12: 12,
//   colorTransparent: -0
// };

const colorThemeDefinition = (colorName: string) => [
  {
    parent: "light",
    palette: colorName,
    template: "colorLight"
  },
  {
    parent: "dark",
    palette: colorName,
    template: "base"
  }
];

export const buildThemes = () => {
  const themesBuilder = createThemeBuilder()
    .addPalettes(palettes)
    .addTemplates(templates)
    .addMasks(masks)
    .addThemes({
      light: {
        template: "base",
        palette: "light",
        nonInheritedValues: {
          ...lightColors,
          ...shadows.light
        }
      },
      dark: {
        template: "base",
        palette: "dark",
        nonInheritedValues: {
          ...darkColors,
          ...shadows.dark
        }
      }
    })
    .addChildThemes({
      orange: colorThemeDefinition("orange"),
      yellow: colorThemeDefinition("yellow"),
      green: colorThemeDefinition("green"),
      blue: colorThemeDefinition("blue"),
      purple: colorThemeDefinition("purple"),
      pink: colorThemeDefinition("pink"),
      red: colorThemeDefinition("red"),
      primary: colorThemeDefinition("primary"),
      secondary: colorThemeDefinition("secondary"),
      tertiary: colorThemeDefinition("tertiary"),
      success: colorThemeDefinition("success"),
      warning: colorThemeDefinition("warning"),
      error: colorThemeDefinition("error"),
      info: colorThemeDefinition("info"),
      accent: colorThemeDefinition("accent")
    })
    .addChildThemes({
      alt1: {
        mask: "soften",
        ...maskOptions.alt
      },
      alt2: {
        mask: "soften2",
        ...maskOptions.alt
      },
      active: {
        mask: "soften3",
        skip: {
          color: 1
        }
      }
    });

  return themesBuilder.build();
};

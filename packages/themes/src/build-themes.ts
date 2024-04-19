import {
  createSoftenMask,
  createThemeBuilder,
  createStrengthenMask,
  createInverseMask
} from "@tamagui/theme-builder";
import { ColorPaletteType, ColorTheme, ColorThemeType } from "./types";

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

const colorsTemplate = {
  color0: 0,
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
  colorTransparent: -0
};

export const buildThemes = (
  themes:
    | Record<ColorThemeType, ColorTheme>[]
    | Record<ColorThemeType, ColorTheme>
) => {
  let arrThemes = [];
  if (!Array.isArray(themes)) {
    arrThemes = [themes];
  } else {
    arrThemes = themes;
  }

  const themesBuilder = createThemeBuilder()
    .addPalettes(
      arrThemes.reduce(
        (
          ret: Record<string, string[]>,
          theme: Record<ColorThemeType, ColorTheme>
        ) => {
          const palettes = formatPalettes(theme.dark, theme.light);
          Object.keys(palettes).forEach(key => {
            if (
              palettes[key] ||
              Array.isArray(palettes[key]) ||
              palettes[key]!.length > 0
            ) {
              ret[key] = palettes[key] as string[];
            }
          });

          return ret;
        },
        {} as Record<string, string[]>
      )
    )
    .addTemplates({
      base: {
        ...colorsTemplate,
        background: 0,
        backgroundHover: 3,
        backgroundPress: 4,
        backgroundFocus: 5,
        backgroundStrong: 1,
        backgroundTransparent: 0,
        color: -0,
        colorHover: -2,
        colorPress: -1,
        colorFocus: -2,
        borderColor: 5,
        borderColorHover: -2,
        borderColorFocus: -0,
        borderColorPress: -1,
        placeholderColor: -4
      },

      color: {
        ...colorsTemplate,
        background: 2,
        backgroundHover: 3,
        backgroundPress: 4,
        backgroundFocus: 5,
        backgroundStrong: 1,
        backgroundTransparent: 0,
        color: -0,
        colorHover: -2,
        colorPress: -1,
        colorFocus: -2,
        borderColor: 5,
        borderColorHover: 6,
        borderColorFocus: 4,
        borderColorPress: 5,
        placeholderColor: -4
      }
    })
    .addMasks({
      inverse: createInverseMask(),
      soften: createSoftenMask(),
      strengthen: createStrengthenMask()
    })
    .addThemes({
      light: {
        template: "base",
        palette: "light_base"
      },

      dark: {
        template: "base",
        palette: "dark_base"
      }
    })
    .addChildThemes({
      inverse: {
        mask: "inverse"
      },
      subtle: {
        mask: "soften"
      },
      strong: {
        mask: "strengthen"
      }
    });

  return themesBuilder.build();
};

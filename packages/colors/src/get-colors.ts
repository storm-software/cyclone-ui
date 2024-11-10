import { converter, formatCss } from "culori";
import {
  ColorScientificPalette,
  ColorScientificPaletteRecord,
  ColorStylePaletteRecord
} from "./types";

const toLCH = converter("lch");

const COLOR_HUE_STEPS = {
  [ColorScientificPalette.SURROUNDING]: [330, 0, 30],
  [ColorScientificPalette.ANALOGOUS]: [0, 30, 60],
  [ColorScientificPalette.TRIADIC]: [0, 120, 240],
  [ColorScientificPalette.TETRADIC]: [0, 90, 180, 270],
  [ColorScientificPalette.COMPLEMENTARY]: [0, 180],
  [ColorScientificPalette.SPLIT_COMPLEMENTARY]: [0, 150, 210]
} as const;

const cacheScientificPalettes = new Map<string, ColorScientificPaletteRecord>();

export const createScientificPalettes = (
  color: string
): ColorScientificPaletteRecord => {
  if (cacheScientificPalettes.has(color)) {
    return cacheScientificPalettes.get(color)!;
  }

  const baseColor = toLCH(color);
  if (!baseColor) {
    throw new Error(`Unable to convert color "${color}" to LCH format`);
  }

  const result = Object.keys(COLOR_HUE_STEPS).reduce(
    (ret: ColorScientificPaletteRecord, type: string) => {
      ret[type as ColorScientificPalette] = COLOR_HUE_STEPS[type]!.map(step => {
        let hue = (baseColor.h ?? 0.0) + step;
        if (hue < 0) {
          hue += Math.ceil(-hue / 360) * 360;
        }

        return {
          l: baseColor.l,
          c: baseColor.c,
          h: hue % 360,
          mode: "lch"
        };
      });

      // ret[type as ColorScientificPalette] = (
      //   colors.length === 3 ? [colors[1], colors[0], colors[2]] : colors
      // ) as LCHColor[];

      return ret;
    },
    {} as ColorScientificPaletteRecord
  );

  cacheScientificPalettes.set(color, result);
  return result;
};

const cacheStylePalettes = new Map<string, ColorStylePaletteRecord>();

export const createStylePalettes = (color: string): ColorStylePaletteRecord => {
  if (cacheStylePalettes.has(color)) {
    return cacheStylePalettes.get(color)!;
  }

  const result = Object.entries(createScientificPalettes(color)).reduce(
    (ret, [type, palette]) => {
      ret[type as ColorScientificPalette] = palette.map(colorLCH =>
        formatCss(colorLCH)
      );

      return ret;
    },
    {} as ColorStylePaletteRecord
  );

  cacheStylePalettes.set(color, result);
  return result;
};

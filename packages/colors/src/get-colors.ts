import { converter, formatCss } from "culori";
import {
  ColorScientificPalette,
  ColorScientificPaletteRecord,
  ColorStylePaletteRecord
} from "./types";

const toLCH = converter("lch");

const COLOR_HUE_STEPS = {
  [ColorScientificPalette.ANALOGOUS]: [0, 30, 60],
  [ColorScientificPalette.TRIADIC]: [0, 120, 240],
  [ColorScientificPalette.TETRADIC]: [0, 90, 180, 270],
  [ColorScientificPalette.COMPLEMENTARY]: [0, 180],
  [ColorScientificPalette.SPLIT_COMPLEMENTARY]: [0, 150, 210]
} as const;

export const createScientificPalettes = (
  color: string
): ColorScientificPaletteRecord => {
  const baseColor = toLCH(color);

  return Object.keys(COLOR_HUE_STEPS).reduce(
    (ret: ColorScientificPaletteRecord, type: string) => {
      ret[type as ColorScientificPalette] = COLOR_HUE_STEPS[type]!.map(step => {
        let hue = baseColor.h + step;
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

      return ret;
    },
    {} as ColorScientificPaletteRecord
  );
};

export const createStylePalettes = (color: string): ColorStylePaletteRecord => {
  return Object.entries(createScientificPalettes(color)).reduce(
    (ret, [type, palette]) => {
      ret[type as ColorScientificPalette] = palette.map(colorLCH =>
        formatCss(colorLCH, { mode: "lch" })
      );

      return ret;
    },
    {} as ColorStylePaletteRecord
  );
};

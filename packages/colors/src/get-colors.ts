import chroma from "chroma-js";
import {
  ColorScientificPalette,
  ColorScientificPaletteRecord,
  ColorStylePaletteRecord
} from "./types";

const COLOR_HUE_STEPS = {
  [ColorScientificPalette.SURROUNDING]: [330, 0, 30],
  [ColorScientificPalette.ANALOGOUS]: [60, 0, 30],
  [ColorScientificPalette.TRIADIC]: [240, 0, 120],
  [ColorScientificPalette.TETRADIC]: [0, 90, 180, 270],
  [ColorScientificPalette.COMPLEMENTARY]: [0, 180],
  [ColorScientificPalette.SPLIT_COMPLEMENTARY]: [210, 0, 150]
} as const;

const cacheScientificPalettes = new Map<string, ColorScientificPaletteRecord>();

export const createScientificPalettes = (
  color: string
): ColorScientificPaletteRecord => {
  if (cacheScientificPalettes.has(color)) {
    return cacheScientificPalettes.get(color)!;
  }

  const baseHue = chroma(color).get("oklch.h");
  const result = Object.keys(COLOR_HUE_STEPS).reduce(
    (ret: ColorScientificPaletteRecord, type: string) => {
      ret[type as ColorScientificPalette] = COLOR_HUE_STEPS[type]!.map(step => {
        let hue = baseHue + step;
        if (hue < 0) {
          hue += Math.ceil(-hue / 360) * 360;
        }

        return chroma(color).set("oklch.h", hue % 360);
      });

      return ret;
    },
    {} as ColorScientificPaletteRecord
  );

  cacheScientificPalettes.set(color, result);
  return result;
};

const cacheStylePalettes = new Map<string, ColorStylePaletteRecord>();

export const createStylePalettes = (
  color: string,
  scale?: number
): ColorStylePaletteRecord => {
  if (cacheStylePalettes.has(color)) {
    return cacheStylePalettes.get(color)!;
  }

  const result = Object.entries(createScientificPalettes(color)).reduce(
    (ret, [type, palette]) => {
      ret[type as ColorScientificPalette] = chroma
        .scale(palette)
        .mode("hsl")
        .colors(
          scale
            ? scale
            : type === ColorScientificPalette.COMPLEMENTARY
              ? 2
              : type === ColorScientificPalette.TETRADIC
                ? 4
                : 3
        )
        .map(colorScale => chroma(colorScale).css("hsl"));

      return ret;
    },
    {} as ColorStylePaletteRecord
  );

  cacheStylePalettes.set(color, result);
  return result;
};

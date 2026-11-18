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

import chroma from "chroma-js";

export interface ColorFormats {
  /** The sRGB hex value (`#rrggbb`, or `#rrggbbaa` when translucent). Colors outside sRGB are clipped. */
  hex: string;
  /** The CSS `oklch()` value. */
  oklch: string;
  /** Whether dark text reads better than light text on the color. */
  light: boolean;
}

const OKLCH_PATTERN =
  /^oklch\(\s*([\d.]+)(%?)\s+([\d.]+)(%?)\s+([\d.]+|none)(?:deg)?\s*(?:\/\s*([\d.]+)(%?)\s*)?\)$/i;

const round = (value: number, digits: number) =>
  Number(value.toFixed(digits));

const parse = (value: string) => {
  const match = OKLCH_PATTERN.exec(value);
  if (!match) return chroma(value);

  const [, l, lPercent, c, cPercent, h, alpha, alphaPercent] = match;
  const color = chroma.oklch(
    Number(l) / (lPercent ? 100 : 1),
    // CSS maps 100% chroma to 0.4.
    cPercent ? (Number(c) / 100) * 0.4 : Number(c),
    h === "none" ? 0 : Number(h)
  );
  return alpha === undefined
    ? color
    : color.alpha(Number(alpha) / (alphaPercent ? 100 : 1));
};

/**
 * Reads a CSS color in the hex and OKLCH formats a color token is copied in.
 *
 * @param value - A hex, `rgb()`, `hsl()`, `oklch()` or named CSS color.
 * @returns The formats, or `null` when the value is not a color. An `oklch()`
 * value is kept as written so Display P3 colors keep their precision.
 */
export const getColorFormats = (value: string): ColorFormats | null => {
  const trimmed = value.trim();
  try {
    const color = parse(trimmed);
    const [l, c, h] = color.oklch();
    const alpha = color.alpha();

    return {
      hex: color.hex(),
      oklch: OKLCH_PATTERN.test(trimmed)
        ? trimmed
        : `oklch(${round(l, 6)} ${round(c, 6)} ${round(Number.isNaN(h) ? 0 : h, 3)}${alpha < 1 ? ` / ${round(alpha, 3)}` : ""})`,
      light: chroma.contrast(color, "black") > chroma.contrast(color, "white")
    };
  } catch {
    return null;
  }
};

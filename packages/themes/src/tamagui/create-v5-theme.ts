/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

    10| Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import {
  createV5Theme as createV5ThemeBase,
  type CreateV5ThemeOptions
} from "@tamagui/config/v5";

export type { CreateV5ThemeOptions };

const OKLCH_RE =
  /^oklch\(\s*([0-9.]+%?)\s+([0-9.]+)\s+([0-9.]+)(?:\s*\/\s*[0-9.%]+)?\s*\)$/i;

function toSrgb(channel: number): number {
  const clipped = Math.min(1, Math.max(0, channel));
  return clipped <= 0.003_130_8
    ? 12.92 * clipped
    : 1.055 * clipped ** (1 / 2.4) - 0.055;
}

function hexChannel(channel: number): string {
  return Math.round(toSrgb(channel) * 255)
    .toString(16)
    .padStart(2, "0");
}

/**
 * Convert CSS `oklch(L C H)` to sRGB hex so Tamagui `createV5Theme` can parse
 * palettes. color2k (used internally) does not understand oklch.
 *
 * @see https://bottosson.github.io/posts/oklab/
 */
export function oklchToHex(lightness: number, chroma: number, hue: number): string {
  const hueRad = (hue * Math.PI) / 180;
  const a = chroma * Math.cos(hueRad);
  const b = chroma * Math.sin(hueRad);

  const l_ = lightness + 0.396_337_777_4 * a + 0.215_803_757_3 * b;
  const m_ = lightness - 0.105_561_345_8 * a - 0.063_854_172_8 * b;
  const s_ = lightness - 0.089_484_177_5 * a - 1.291_485_548 * b;

  const l3 = l_ ** 3;
  const m3 = m_ ** 3;
  const s3 = s_ ** 3;

  const red = 4.076_741_662_1 * l3 - 3.307_711_591_3 * m3 + 0.230_969_929_2 * s3;
  const green =
    -1.268_438_004_6 * l3 + 2.609_757_401_1 * m3 - 0.341_319_396_5 * s3;
  const blue =
    -0.004_196_086_3 * l3 - 0.703_418_614_7 * m3 + 1.707_614_701 * s3;

  return `#${hexChannel(red)}${hexChannel(green)}${hexChannel(blue)}`;
}

function convertColorString(value: string): string {
  const match = OKLCH_RE.exec(value.trim());
  if (!match) {
    return value;
  }

  let lightness = Number.parseFloat(match[1]);
  if (match[1].includes("%")) {
    lightness /= 100;
  }

  return oklchToHex(
    lightness,
    Number.parseFloat(match[2]),
    Number.parseFloat(match[3])
  );
}

function convertOklchColors<T>(value: T): T {
  if (typeof value === "string") {
    return convertColorString(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map(item => convertOklchColors(item)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nested]) => [
        key,
        convertOklchColors(nested)
      ])
    ) as T;
  }

  return value;
}

/**
 * Tamagui v5 theme factory that accepts CSS `oklch()` palette values.
 */
export const createV5Theme: typeof createV5ThemeBase = options =>
  createV5ThemeBase(convertOklchColors(options));

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

import type { Color, ColorChannel } from "@react-stately/color";
import { parseColor } from "@react-stately/color";

const HUES = [0, 60, 120, 180, 240, 300, 360];

/** The checkerboard drawn under translucent colors. */
export const CHECKERBOARD =
  "repeating-conic-gradient(#efefef 0% 25%, #f7f7f7 0% 50%)";

/**
 * Paint a color over the checkerboard, which shows through translucent
 * colors.
 *
 * @param css - The color, or a gradient, as CSS.
 * @returns The background style props.
 */
export const getSwatchBackground = (css: string) => ({
  backgroundImage: `${css.includes("gradient(") ? css : `linear-gradient(${css}, ${css})`}, ${CHECKERBOARD}`,
  backgroundSize: "100% 100%, 16px 16px"
});

/**
 * Parse a color value.
 *
 * @param value - A `Color`, or a hex, `rgb()`, `hsl()` or `hsb()` string. Hex
 * digits may leave out the `#`.
 * @returns The color, or `null` for an empty or invalid value.
 */
export const toColor = (value: unknown): Color | null => {
  if (value && typeof value === "object" && "toFormat" in value) {
    return value as Color;
  }
  if (typeof value !== "string" || !value.trim()) {
    return null;
  }

  const text = value.trim();
  try {
    return parseColor(/^[\da-f]+$/i.test(text) ? `#${text}` : text);
  } catch {
    return null;
  }
};

/**
 * Format a color as `#RRGGBB`, or `#RRGGBBAA` when it is translucent.
 *
 * @param color - The color to format.
 * @returns The hex string, or an empty string without a color.
 */
export const formatColor = (color: Color | null) =>
  color
    ? color.toString(color.getChannelValue("alpha") < 1 ? "hexa" : "hex")
    : "";

/**
 * Build a color slider's track gradient, the same one React Aria uses. The
 * end stops are inset by half the thumb, so the thumb's center always sits on
 * the color it selects.
 *
 * @param color - The slider's display color, in the slider's color space.
 * @param channel - The channel the slider sets.
 * @param inset - Half the thumb width, in pixels.
 * @returns The CSS gradient.
 */
export const getColorSliderBackground = (
  color: Color,
  channel: ColorChannel,
  inset: number
) => {
  const { minValue, maxValue } = color.getChannelRange(channel);
  const stops =
    channel === "hue"
      ? HUES
      : // A middle stop keeps the hue visible between black and white.
        channel === "lightness"
        ? [minValue, (minValue + maxValue) / 2, maxValue]
        : [minValue, maxValue];
  const colors = stops.map(value =>
    color.withChannelValue(channel, value).toString("css")
  );
  colors[0] += ` ${inset}px`;
  colors[colors.length - 1] += ` calc(100% - ${inset}px)`;

  return `linear-gradient(to right, ${colors.join(", ")})`;
};

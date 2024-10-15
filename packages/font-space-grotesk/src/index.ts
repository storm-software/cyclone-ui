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

import { createFont, type GenericFont } from "@tamagui/core";

const size = {
  1: 10,
  2: 11,
  3: 12,
  4: 14,
  5: 15,
  6: 16,
  7: 20,
  8: 22,
  9: 30,
  10: 42,
  11: 52,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 124
} as const;

/**
 * Create a new Space Grotesk font.
 *
 * @param font - The font configuration.
 * @param defaultSize - The default font size.
 * @param defaultWeight - The default font weight.
 * @returns The Space Grotesk font.
 */
export const createSpaceGroteskFont = <
  TFont extends GenericFont<keyof typeof size>
>(
  font: Partial<TFont> = {},
  defaultSize = 16,
  defaultWeight = "300"
) => {
  const fontSize = {
    ...size,
    ...font.size,
    true: defaultSize
  } as Record<string | number, number>;

  return createFont({
    ...font,
    family: "Space Grotesk Variable",
    size: fontSize,
    lineHeight: Object.fromEntries(
      Object.entries(fontSize).map(([k, v]) => [k, v * 1.5])
    ) as typeof fontSize,
    weight: {
      2: "200",
      light: "200",
      4: "300",
      true: defaultWeight,
      5: "500",
      6: "700",
      bold: "700",
      8: "900",
      ...font.weight
    },
    letterSpacing: {
      4: -0.25,
      true: -0.25,
      ...font.letterSpacing
    }
  });
};

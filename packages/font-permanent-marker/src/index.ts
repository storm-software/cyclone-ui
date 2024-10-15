/**
 * The font-permanent-marker library used by Storm Software for building TypeScript applications.
 *
 * @remarks
 * A Cyclone UI package containing the Permanent Marker font and font-related utilities used in the design system
 *
 * @packageDocumentation
 */

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
 * Create a new Permanent Marker font.
 *
 * @param font - The font configuration.
 * @param defaultSize - The default font size.
 * @param defaultWeight - The default font weight.
 * @returns The Permanent Marker font.
 */
export const createPermanentMarkerFont = <
  TFont extends GenericFont<keyof typeof size>
>(
  font: Partial<TFont> = {},
  defaultSize = 16,
  defaultWeight = "400"
) => {
  const fontSize = {
    ...size,
    ...font.size,
    true: defaultSize
  } as Record<string | number, number>;

  return createFont({
    ...font,
    family: "Permanent Marker",
    size: fontSize,
    lineHeight: Object.fromEntries(
      Object.entries(fontSize).map(([k, v]) => [k, v * 1.3])
    ) as typeof fontSize,
    weight: {
      light: "400",
      5: "400",
      true: defaultWeight,
      bold: "400",
      ...font.weight
    },
    letterSpacing: {
      4: -0.25,
      5: 0,
      true: 0,
      ...font.letterSpacing
    }
  });
};

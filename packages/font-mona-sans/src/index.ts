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

/**
 * The font-mona-sans library used by Storm Software for building TypeScript applications.
 *
 * @remarks
 * A Cyclone UI package containing the Mono-Sans font and font-related utilities used in the design system
 *
 * @packageDocumentation
 */

import { isWeb } from "@tamagui/constants";
import type { GenericFont } from "@tamagui/core";
import { createFont } from "@tamagui/core";

export const size = {
  1: 10,
  2: 11,
  3: 13,
  sm: 13,
  4: 16,
  5: 17,
  6: 18,
  7: 20,
  md: 20,
  8: 22,
  9: 30,
  10: 42,
  lg: 42,
  11: 52,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 124
} as const;

/**
 * Create a new Mona Sans font.
 *
 * @param font - The font configuration.
 * @param defaultSize - The default font size.
 * @param defaultWeight - The default font weight.
 * @returns The Mona Sans font.
 */
export const createMonaSansFont = <
  TFont extends GenericFont<keyof typeof size>
>(
  font: Partial<TFont> = {},
  defaultSize = 16,
  defaultWeight = "550"
) => {
  const fontSize = {
    ...size,
    true: defaultSize,
    default: defaultSize,
    ...font.size
  } as Record<string | number, number>;

  return createFont({
    ...font,
    family: isWeb
      ? "Mona Sans, Monaco, Consolas, Ubuntu Mono, monospace"
      : "Mona Sans",
    size: fontSize,
    lineHeight: Object.fromEntries(
      Object.entries(fontSize).map(([key, value]) => {
        if (value < 16) {
          return [key, value];
        }

        return [key, value * 0.8];
      })
    ) as typeof fontSize,
    weight: {
      2: "200",
      3: "300",
      sm: "300",
      4: "400",
      true: defaultWeight,
      default: defaultWeight,
      md: defaultWeight,
      5: "550",
      6: "600",
      7: "700",
      lg: "700",
      8: "900",
      ...font.weight
    },
    letterSpacing: {
      4: -0.2,
      sm: -0.2,
      5: -0.2,
      true: -0.2,
      default: -0.2,
      md: -0.2,
      6: -0.25,
      lg: -0.25,
      ...font.letterSpacing
    }
  });
};

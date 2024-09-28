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

export const createMonaSansFont = <
  TFont extends GenericFont<keyof typeof size>
>(
  font: Partial<TFont> = {}
): TFont => {
  return createFont({
    family: isWeb
      ? "Mona Sans, Monaco, Consolas, Ubuntu Mono, monospace"
      : "Mona Sans",
    size,
    lineHeight: Object.fromEntries(
      Object.entries(size).map(([k, v]) => [k, v * 1.3])
    ) as typeof size,
    weight: {
      2: "200",
      3: "300",
      4: "400",
      5: "550",
      6: "600",
      7: "700",
      8: "900"
    },
    letterSpacing: {
      4: -0.25
    },

    ...font
  }) as TFont;
};

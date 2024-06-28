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

export const createMonaSansFont = <A extends GenericFont<keyof typeof size>>(
  font: Partial<A> = {}
): A => {
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
      4: "300",
      5: "500",
      6: "600",
      7: "700",
      8: "900"
    },
    letterSpacing: {
      4: -0.25
    },

    ...(font as any)
  });
};

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

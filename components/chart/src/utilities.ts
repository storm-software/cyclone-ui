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

import type { ColorTokens, ThemeTokens } from "@tamagui/core";
import type { ComponentType, CSSProperties, ReactNode } from "react";

/**
 * A theme key (for example `data-blue-emphasis`), a color token, or any CSS
 * color. Theme keys resolve to CSS variables, so the series follows the
 * active light or dark theme.
 */
export type ChartColor = ThemeTokens | ColorTokens | (string & {});

export type ChartConfig = Record<
  string,
  {
    label?: ReactNode;
    icon?: ComponentType;
    /** One color for a solid series, or several for a gradient. */
    colors?: ChartColor[];
  }
>;

/**
 * The theme's data palette, assigned in order to series that don't set
 * `colors`.
 */
export const CHART_DATA_COLORS: ChartColor[] = [
  "data-blue-emphasis",
  "data-green-emphasis",
  "data-orange-emphasis",
  "data-purple-emphasis",
  "data-pink-emphasis",
  "data-red-emphasis",
  "data-yellow-emphasis",
  "data-neutral-emphasis"
];

// Helper to extract item config from a payload.
export function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload];
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload];
  }

  return configLabelKey in config ? config[configLabelKey] : config[key];
}

// Format values to percent for expanded charts
export function axisValueToPercentFormatter(value: number) {
  return `${Math.round(value * 100).toFixed(0)}%`;
}

/** The number of `--color-<key>-<index>` variables a series defines. */
export function getColorsCount(config: ChartConfig[string] | undefined) {
  return Math.max(config?.colors?.length ?? 0, 1);
}

// Rows for the loading skeleton; min/max are percentages of the range.
// The initial render supplies a seeded source so SSR and hydration agree.
export const getLoadingData = (
  points = 10,
  min = 0,
  max = 70,
  random: () => number = Math.random
) => {
  const range = max - min;

  return Array.from({ length: points }, () => ({
    loading: Math.floor(random() * range) + min
  }));
};

// Bell-curve eased gradient stops for the loading shimmer
export const getEasedGradientStops = (
  steps = 17,
  minOpacity = 0.05,
  maxOpacity = 0.9
) =>
  Array.from({ length: steps }, (_, i) => {
    const t = i / (steps - 1);
    // Sine-based bell curve: peaks at the centre, smooth falloff at the edges
    const eased = Math.sin(t * Math.PI) ** 2;
    const opacity = minOpacity + eased * (maxOpacity - minOpacity);

    return {
      offset: `${(t * 100).toFixed(0)}%`,
      opacity: Number(opacity.toFixed(3))
    };
  });

export interface ChartBrushRange {
  startIndex: number;
  endIndex: number;
}

/** The brush edge being dragged; `"middle"` pans the whole range. */
export type ChartBrushDragType = "left" | "right" | "middle";

/**
 * Clamps a brush range to the data and keeps at least `minSpan` points
 * selected. `mode` says which edge moved, so the other edge stays put.
 */
export function clampBrushRange(
  range: ChartBrushRange,
  totalPoints: number,
  minSpan: number,
  mode?: ChartBrushDragType
): ChartBrushRange {
  const maxIndex = Math.max(0, totalPoints - 1);
  let startIndex = Math.max(0, Math.min(range.startIndex, maxIndex));
  let endIndex = Math.max(0, Math.min(range.endIndex, maxIndex));

  if (mode === "left") {
    return {
      startIndex: Math.min(startIndex, Math.max(0, endIndex - minSpan)),
      endIndex
    };
  }

  if (mode === "right") {
    return {
      startIndex,
      endIndex: Math.max(endIndex, Math.min(maxIndex, startIndex + minSpan))
    };
  }

  if (endIndex - startIndex < minSpan) {
    endIndex = Math.min(startIndex + minSpan, maxIndex);
    if (endIndex - startIndex < minSpan) {
      startIndex = Math.max(0, endIndex - minSpan);
    }
  }

  return { startIndex, endIndex };
}

/** A solid or left-to-right gradient background in a series' colors. */
export function getSeriesBackground(
  dataKey: string,
  colorsCount: number
): CSSProperties {
  if (colorsCount <= 1) {
    return { background: `var(--color-${dataKey}-0)` };
  }

  const stops = Array.from({ length: colorsCount }, (_, index) => {
    const offset = (index / (colorsCount - 1)) * 100;

    return `var(--color-${dataKey}-${index}) ${offset}%`;
  }).join(", ");

  return { background: `linear-gradient(to right, ${stops})` };
}

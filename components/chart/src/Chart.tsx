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

"use client";

import { BodyText } from "@cyclone-ui/body-text";
import { Spinner } from "@cyclone-ui/spinner";
import type { ColorTokens, ThemeTokens } from "@tamagui/core";
import {
  getConfig,
  getVariable,
  getVariableValue,
  useTheme
} from "@tamagui/core";
import type { YStackProps } from "@tamagui/stacks";
import { XStack, YStack } from "@tamagui/stacks";
import { motion } from "motion/react";
import type { ComponentProps, ComponentType, ReactNode, SVGProps } from "react";
import { createContext, use, useCallback, useId, useState } from "react";
import { ResponsiveContainer } from "recharts";

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

interface ChartContextProps {
  config: ChartConfig;
}

const ChartContext = createContext<ChartContextProps | null>(null);

export function useChart() {
  const context = use(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

// Recharts draws its chrome in hard-coded greys; these rules swap them for
// theme tokens. Series colors come from the per-chart `--color-*` variables.
const CHART_STYLES = `
.cyclone-chart .recharts-cartesian-axis-tick text { fill: var(--subtle); }
.cyclone-chart .recharts-cartesian-grid line[stroke='#ccc'] { stroke: var(--hairline); }
.cyclone-chart .recharts-curve.recharts-tooltip-cursor { stroke: var(--outline); }
.cyclone-chart .recharts-polar-grid [stroke='#ccc'] { stroke: var(--hairline); }
.cyclone-chart .recharts-polar-angle-axis-tick text, .cyclone-chart .recharts-polar-radius-axis-tick text { fill: var(--subtle); }
.cyclone-chart .recharts-radial-bar-background-sector { fill: var(--sunken); }
.cyclone-chart .recharts-rectangle.recharts-tooltip-cursor { fill: var(--sunken); }
.cyclone-chart .recharts-reference-line [stroke='#ccc'] { stroke: var(--hairline); }
.cyclone-chart .recharts-dot[stroke='#fff'], .cyclone-chart .recharts-sector[stroke='#fff'] { stroke: transparent; }
.cyclone-chart :is(.recharts-layer, .recharts-sector, .recharts-surface, [class*="recharts-zIndex-layer"]):focus:not(:focus-visible) { outline: none; }
.cyclone-chart .recharts-tooltip-wrapper { z-index: 30; }
.cyclone-chart-legend-item { transition: opacity 150ms ease; }
.cyclone-chart-icon svg { width: 100%; height: 100%; }
.cyclone-chart-brush-selection { cursor: grab; }
.cyclone-chart-brush-selection:active { cursor: grabbing; }
.cyclone-chart-brush-handle { cursor: ew-resize; touch-action: none; outline: none; }
.cyclone-chart-brush-handle::after { content: ""; position: absolute; top: 0; bottom: 0; left: -16px; width: 44px; }
.cyclone-chart-brush-grip { background: var(--subtle); transition: background-color 150ms ease; }
.cyclone-chart-brush:hover .cyclone-chart-brush-grip, .cyclone-chart-brush-handle:focus-visible .cyclone-chart-brush-grip { background: var(--ink); }
.cyclone-chart-brush-label { opacity: 0; }
.cyclone-chart-brush:hover .cyclone-chart-brush-label, .cyclone-chart-brush-handle:focus-visible + .cyclone-chart-brush-label { opacity: 1; }
`;

export type ChartContainerProps = Omit<YStackProps, "children"> & {
  config: ChartConfig;
  children: ComponentProps<typeof ResponsiveContainer>["children"];
  /** Rendered below the chart, for example the zoom brush. */
  footer?: ReactNode;
  initialDimension?: ComponentProps<
    typeof ResponsiveContainer
  >["initialDimension"];
};

/**
 * Sizes a Recharts chart to its box and exposes the series colors as CSS
 * variables (`--color-<key>-<index>`) for the SVG parts. The container, footer
 * included, keeps a 16:9 aspect ratio unless it gets an explicit height.
 */
export function ChartContainer({
  config,
  children,
  footer,
  initialDimension = { width: 320, height: 200 },
  className,
  ...props
}: ChartContainerProps) {
  const chartId = `chart-${useId().replace(/:/g, "")}`;

  return (
    <ChartContext value={{ config }}>
      <YStack
        className={`cyclone-chart${className ? ` ${className}` : ""}`}
        data-chart={chartId}
        position="relative"
        width="100%"
        justifyContent="center"
        aspectRatio={16 / 9}
        {...props}>
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer
          style={{ flex: 1 }}
          minHeight={0}
          initialDimension={initialDimension}>
          {children}
        </ResponsiveContainer>
        {footer}
      </YStack>
    </ChartContext>
  );
}

export function LoadingIndicator({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) {
    return null;
  }

  return (
    <YStack
      position="absolute"
      top={0}
      right={0}
      bottom={0}
      left={0}
      zIndex={20}
      alignItems="center"
      justifyContent="center"
      pointerEvents="none">
      <XStack
        alignItems="center"
        gap="xl"
        paddingHorizontal="xl"
        paddingVertical="md"
        borderWidth={1}
        borderColor="outline"
        borderRadius="md"
        backgroundColor="elevated">
        <Spinner size="small" color="var(--primary)" />
        <BodyText size="xs" color="primary">
          Loading
        </BodyText>
      </XStack>
    </YStack>
  );
}

/**
 * Resolves a theme key or color token to its CSS variable, so the color
 * tracks theme changes. Anything else is returned as a CSS color.
 */
export function resolveChartColor(
  color: ChartColor,
  theme: ReturnType<typeof useTheme>
): string {
  const themeValue = theme[color as keyof typeof theme] as
    { variable?: string } | undefined;
  if (themeValue?.variable) {
    return themeValue.variable;
  }

  return getVariable(color, "color");
}

/** CSS that defines each series' `--color-<key>-<index>` variables. */
export function ChartStyle({
  id,
  config
}: {
  id: string;
  config: ChartConfig;
}) {
  const theme = useTheme();
  const { family, size } = getConfig().fonts.body ?? {};
  const fontFamily = String(getVariableValue(family));
  const fontSize = Number(getVariableValue(size?.xxs ?? 12));

  const vars = Object.entries(config)
    .flatMap(([key, itemConfig], index) => {
      const colors = itemConfig.colors?.length
        ? itemConfig.colors
        : [CHART_DATA_COLORS[index % CHART_DATA_COLORS.length]!];

      return colors.map(
        (color, colorIndex) =>
          `--color-${key}-${colorIndex}: ${resolveChartColor(color, theme)};`
      );
    })
    .join(" ");

  return (
    <style>{`${CHART_STYLES}[data-chart="${id}"] { font-family: ${fontFamily}; font-size: ${fontSize}px; ${vars} }`}</style>
  );
}

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

/**
 * Two or more stops that paint a series' colors along the gradient. Pass the
 * full element `id` and any `<linearGradient>` props (direction, units).
 */
export function ChartColorGradient({
  id,
  dataKey,
  config,
  x1 = "0",
  y1 = "0",
  x2 = "1",
  y2 = "0",
  ...props
}: SVGProps<SVGLinearGradientElement> & {
  id: string;
  dataKey: string;
  config: ChartConfig;
}) {
  const colorsCount = getColorsCount(config[dataKey]);

  return (
    <linearGradient id={id} x1={x1} y1={y1} x2={x2} y2={y2} {...props}>
      {colorsCount === 1 ? (
        <>
          <stop offset="0%" stopColor={`var(--color-${dataKey}-0)`} />
          <stop offset="100%" stopColor={`var(--color-${dataKey}-0)`} />
        </>
      ) : (
        Array.from({ length: colorsCount }, (_, index) => {
          const offset = `${(index / (colorsCount - 1)) * 100}%`;

          return (
            <stop
              key={offset}
              offset={offset}
              stopColor={`var(--color-${dataKey}-${index}, var(--color-${dataKey}-0))`}
            />
          );
        })
      )}
    </linearGradient>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Reveal animation
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Direction of the intro reveal. A reveal is a per-frame animated SVG mask,
 * so `"none"` opts out; it is also what the OS "reduce motion" setting falls
 * back to.
 */
export type ChartAnimationType =
  "none" | "left-to-right" | "right-to-left" | "center-out" | "edges-in";
export type ChartRevealAnimationType = Exclude<ChartAnimationType, "none">;

const REVEAL_DURATION = 1; // intro wipe length, in seconds
const REVEAL_EASE: [number, number, number, number] = [0, 0.7, 0.5, 1];

// motion `originX` for each single-rect reveal — the edge the wipe grows from.
const SINGLE_REVEAL_ORIGIN: Record<
  Exclude<ChartRevealAnimationType, "edges-in">,
  number
> = {
  "left-to-right": 0,
  "right-to-left": 1,
  "center-out": 0.5
};

/**
 * Wipe mask played once when a series mounts, with the id `${id}-reveal-mask`.
 * Apply it to a series' fill, stroke and resting dots so they reveal in
 * lockstep. Both mask unit systems are userSpaceOnUse so every masked element
 * shares one coordinate space.
 */
export function ChartRevealMask({
  id,
  type
}: {
  id: string;
  type: ChartRevealAnimationType;
}) {
  const reveal = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: { duration: REVEAL_DURATION, ease: REVEAL_EASE }
  };

  return (
    <mask
      id={`${id}-reveal-mask`}
      maskUnits="userSpaceOnUse"
      maskContentUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="100%"
      height="100%">
      {type === "edges-in" ? (
        <>
          <motion.rect
            {...reveal}
            x="0"
            y="0"
            width="50%"
            height="100%"
            fill="white"
            style={{ originX: 0 }}
          />
          <motion.rect
            {...reveal}
            x="50%"
            y="0"
            width="50%"
            height="100%"
            fill="white"
            style={{ originX: 1 }}
          />
        </>
      ) : (
        <motion.rect
          {...reveal}
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="white"
          style={{ originX: SINGLE_REVEAL_ORIGIN[type] }}
        />
      )}
    </mask>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Loading skeleton
// ─────────────────────────────────────────────────────────────────────────────

// Random rows for the loading skeleton; min/max are percentages of the range
export const getLoadingData = (points = 10, min = 0, max = 70) => {
  const range = max - min;

  return Array.from({ length: points }, () => ({
    loading: Math.floor(Math.random() * range) + min
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

/**
 * Loading rows that regenerate each time the shimmer leaves the visible area.
 * Call `onShimmerExit` from the shimmer's motion `onUpdate` when it crosses
 * the right edge, so the data swaps while nothing is visible. `min` and `max`
 * are percentages of the value range (see `getLoadingData`).
 */
export function useLoadingData(
  isLoading: boolean,
  loadingPoints = 14,
  min?: number,
  max?: number
) {
  const [loadingData, setLoadingData] = useState(() =>
    getLoadingData(loadingPoints, min, max)
  );

  const onShimmerExit = useCallback(() => {
    if (isLoading) {
      setLoadingData(getLoadingData(loadingPoints, min, max));
    }
  }, [isLoading, loadingPoints, min, max]);

  return { loadingData, onShimmerExit };
}

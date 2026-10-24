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

import type {
  BackgroundVariant,
  ChartConfig,
  ChartContainerProps,
  ChartLegendVariant,
  TooltipRoundness,
  TooltipVariant
} from "@cyclone-ui/chart";
import {
  ChartBackground,
  ChartColorGradient,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  LoadingIndicator,
  useLoadingData
} from "@cyclone-ui/chart";
import type { ComponentProps, ReactNode } from "react";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState
} from "react";
import type { SectorProps } from "recharts";
import {
  PolarAngleAxis,
  RadialBar as RechartsRadialBar,
  RadialBarChart as RechartsRadialBarChart,
  Sector
} from "recharts";

const DEFAULT_INNER_RADIUS = "30%";
const DEFAULT_OUTER_RADIUS = "100%";
const DEFAULT_CORNER_RADIUS = 5;
const DEFAULT_BAR_SIZE = 14;
const LOADING_BARS = 5;
const LOADING_DATA_KEY = "loading";
const LOADING_ANIMATION_DURATION = 1500; // interval between skeleton data changes, in milliseconds
// Skeleton color; kept faint by the loading bar's fill opacity
const LOADING_COLOR = "var(--ink)";
// Tailwind's `drop-shadow-sm`
const BAR_SHADOW = "drop-shadow(0 1px 2px rgb(0 0 0 / 0.15))";

type RadialBarChartProps = ComponentProps<typeof RechartsRadialBarChart>;
type RadialBarRechartsProps = ComponentProps<typeof RechartsRadialBar>;

export type RadialVariant = "full" | "semi";

// ─────────────────────────────────────────────────────────────────────────────
// Shared context
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Shared state for every part of the chart, so <RadialBar />, <Tooltip /> and
 * <Legend /> can read it without prop drilling.
 */
interface RadialChartContextValue {
  config: ChartConfig; // colors + labels for every bar
  nameKey: string; // data key holding each bar's name
  chartId: string; // colon-free id scoping this chart's style defs
  isLoading: boolean;
  selectedBar: string | null;
  selectBar: (barName: string | null, value?: number) => void;
}

const RadialChartContext = createContext<RadialChartContextValue | null>(null);

function useRadialChart() {
  const context = use(RadialChartContext);

  if (!context) {
    throw new Error(
      "Radial chart parts (<RadialBar />, <Tooltip />, …) must be used within <RadialChart />"
    );
  }

  return context;
}

// ─────────────────────────────────────────────────────────────────────────────
// Root container
// ─────────────────────────────────────────────────────────────────────────────

export type RadialChartProps<TData extends Record<string, unknown>> = Omit<
  ChartContainerProps,
  "config" | "children" | "footer"
> & {
  config: ChartConfig; // bar colors + labels, keyed by each bar's name
  data: TData[]; // one bar per row
  nameKey: keyof TData & string; // data key holding each bar's name
  children: ReactNode; // composed parts — <RadialBar />, <Tooltip />, <Legend />
  chartProps?: RadialBarChartProps; // escape hatch for the raw Recharts chart
  variant?: RadialVariant; // arc shape — full circle or half circle
  // Value a full sweep represents. Without it the scale is derived from the
  // data, so the largest bar always fills the arc — set it (e.g. 100) for
  // gauges, where a single value has to read against a fixed total.
  max?: number;
  innerRadius?: number | string;
  outerRadius?: number | string;
  defaultSelectedDataKey?: string | null;
  onSelectionChange?: (
    selection: { dataKey: string; value: number } | null
  ) => void;
  isLoading?: boolean; // shows the animated loading skeleton
  backgroundVariant?: BackgroundVariant; // background pattern behind the chart
};

/**
 * A composable radial bar chart. The root owns the data, the shared state, the
 * loading skeleton and the arc shape; the tooltip, legend and radial bar are
 * composed as children.
 */
export function RadialChart<TData extends Record<string, unknown>>({
  config,
  data,
  nameKey,
  children,
  chartProps,
  variant = "full",
  max,
  innerRadius = DEFAULT_INNER_RADIUS,
  outerRadius = DEFAULT_OUTER_RADIUS,
  defaultSelectedDataKey = null,
  onSelectionChange,
  isLoading = false,
  backgroundVariant,
  ...props
}: RadialChartProps<TData>) {
  const chartId = useId().replace(/:/g, "");
  const [selectedBar, setSelectedBar] = useState<string | null>(
    defaultSelectedDataKey
  );
  const { loadingData, onShimmerExit } = useLoadingData(
    isLoading,
    LOADING_BARS,
    40,
    100
  );

  // The skeleton has no shimmer; regenerate its rows on a fixed interval
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(onShimmerExit, LOADING_ANIMATION_DURATION);

    return () => clearInterval(interval);
  }, [isLoading, onShimmerExit]);

  const variantConfig = getVariantConfig(variant);

  // Updates selection state and notifies the parent with the bar's value
  const selectBar = useCallback(
    (barName: string | null, value?: number) => {
      setSelectedBar(barName);
      onSelectionChange?.(
        barName === null ? null : { dataKey: barName, value: value ?? 0 }
      );
    },
    [onSelectionChange]
  );

  // Real bars paint from a per-name gradient; the skeleton keeps the raw rows
  const preparedData = useMemo(
    () =>
      data.map(item => ({
        ...item,
        fill: `url(#${chartId}-radial-colors-${item[nameKey] as string})`
      })),
    [data, nameKey, chartId]
  );

  const contextValue = useMemo<RadialChartContextValue>(
    () => ({
      config,
      nameKey,
      chartId,
      isLoading,
      selectedBar,
      selectBar
    }),
    [config, nameKey, chartId, isLoading, selectedBar, selectBar]
  );

  return (
    <RadialChartContext value={contextValue}>
      <ChartContainer config={config} {...props}>
        <LoadingIndicator isLoading={isLoading} />
        <RechartsRadialBarChart
          id={chartId}
          data={isLoading ? loadingData : preparedData}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={variantConfig.startAngle}
          endAngle={variantConfig.endAngle}
          cx={variantConfig.cx}
          cy={variantConfig.cy}
          {...chartProps}>
          {/* Pinning the angle domain lets a single value read against a fixed
              total instead of auto-scaling to fill the arc. */}
          {max != null && max > 0 && (
            <PolarAngleAxis
              type="number"
              domain={[0, max]}
              tick={false}
              axisLine={false}
            />
          )}
          {backgroundVariant && <ChartBackground variant={backgroundVariant} />}
          {children}
          {isLoading && <LoadingRadialBar />}
          <defs>
            {Object.keys(config).map(dataKey => (
              <ChartColorGradient
                key={dataKey}
                id={`${chartId}-radial-colors-${dataKey}`}
                dataKey={dataKey}
                config={config}
                x2="1"
                y2="1"
              />
            ))}
          </defs>
        </RechartsRadialBarChart>
      </ChartContainer>
    </RadialChartContext>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Composable parts
// ─────────────────────────────────────────────────────────────────────────────

export interface RadialBarProps {
  dataKey: string; // value key — determines each bar's size
  cornerRadius?: number;
  barSize?: number; // thickness of each radial bar
  showBackground?: boolean; // renders the unfilled track behind each bar
  isClickable?: boolean; // lets bars be selected by clicking them
  radialBarProps?: Omit<RadialBarRechartsProps, "dataKey">; // escape hatch for raw Recharts RadialBar props
}

/** The radial bar series; each data row becomes one bar. */
function RadialBar({
  dataKey,
  cornerRadius = DEFAULT_CORNER_RADIUS,
  barSize = DEFAULT_BAR_SIZE,
  showBackground = true,
  isClickable = false,
  radialBarProps
}: RadialBarProps) {
  const { nameKey, isLoading, selectedBar, selectBar } = useRadialChart();

  // The root renders the skeleton bar while loading
  if (isLoading) return null;

  return (
    <RechartsRadialBar
      dataKey={dataKey}
      cornerRadius={cornerRadius}
      barSize={barSize}
      background={showBackground}
      style={{
        filter: BAR_SHADOW,
        ...(isClickable ? { cursor: "pointer" } : {})
      }}
      onClick={(payload, index) => {
        if (!isClickable) return;
        const entry = payload as Record<string, unknown>;
        const barName =
          (entry?.[nameKey] as string | undefined) ?? String(index);
        const value = Number(entry?.[dataKey] ?? 0);
        // Clicking the selected bar clears the selection
        selectBar(selectedBar === barName ? null : barName, value);
      }}
      shape={(props: SectorProps) => {
        const barName = (props as unknown as Record<string, unknown>)[
          nameKey
        ] as string;
        const isSelected = selectedBar === null || selectedBar === barName;

        return (
          <Sector
            {...props}
            opacity={isClickable && !isSelected ? 0.15 : 1}
            style={{ transition: "opacity 200ms" }}
          />
        );
      }}
      {...radialBarProps}
    />
  );
}

export interface RadialTooltipProps {
  variant?: TooltipVariant;
  roundness?: TooltipRoundness;
  defaultIndex?: number; // data index shown with no hover
}

/** The hover tooltip, labeled by each bar's name. Hidden while loading. */
function Tooltip({ variant, roundness, defaultIndex }: RadialTooltipProps) {
  const { nameKey, isLoading } = useRadialChart();

  if (isLoading) return null;

  return (
    <ChartTooltip
      defaultIndex={defaultIndex}
      cursor={false}
      content={
        <ChartTooltipContent
          nameKey={nameKey}
          hideLabel
          roundness={roundness}
          variant={variant}
        />
      }
    />
  );
}

export interface RadialLegendProps {
  variant?: ChartLegendVariant;
  align?: "left" | "center" | "right";
  verticalAlign?: "top" | "middle" | "bottom";
  isClickable?: boolean; // lets each entry toggle selection of its bar
}

/**
 * The bar legend; clickable entries toggle bar selection. Hidden while the
 * chart is loading.
 */
function Legend({
  variant,
  align = "center",
  verticalAlign = "bottom",
  isClickable = false
}: RadialLegendProps) {
  const { nameKey, isLoading, selectedBar, selectBar } = useRadialChart();

  if (isLoading) return null;

  return (
    <ChartLegend
      verticalAlign={verticalAlign}
      align={align}
      content={
        <ChartLegendContent
          selected={selectedBar}
          onSelectChange={selectBar}
          isClickable={isClickable}
          nameKey={nameKey}
          variant={variant}
        />
      }
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Variant helpers
// ─────────────────────────────────────────────────────────────────────────────

// Angle + center configuration for the chart's arc shape
function getVariantConfig(variant: RadialVariant) {
  switch (variant) {
    case "semi":
      return { startAngle: 180, endAngle: 0, cx: "50%", cy: "70%" };
    case "full":
    default:
      return { startAngle: 90, endAngle: -270, cx: "50%", cy: "50%" };
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Loading skeleton
// ─────────────────────────────────────────────────────────────────────────────

/** The skeleton bar the root renders in place of the real <RadialBar />. */
const LoadingRadialBar = () => (
  <RechartsRadialBar
    dataKey={LOADING_DATA_KEY}
    cornerRadius={DEFAULT_CORNER_RADIUS}
    barSize={DEFAULT_BAR_SIZE}
    background
    isAnimationActive
    animationDuration={LOADING_ANIMATION_DURATION}
    animationEasing="ease-in-out"
    shape={(props: SectorProps) => (
      <Sector {...props} fill={LOADING_COLOR} fillOpacity={0.25} />
    )}
  />
);

// Every part hangs off the root, so one import covers the whole chart.
RadialChart.RadialBar = RadialBar;
RadialChart.Tooltip = Tooltip;
RadialChart.Legend = Legend;

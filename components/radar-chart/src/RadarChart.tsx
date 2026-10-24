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
  DotVariant,
  TooltipRoundness,
  TooltipVariant
} from "@cyclone-ui/chart";
import {
  ChartBackground,
  ChartColorGradient,
  ChartContainer,
  ChartDot,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  getColorsCount,
  LoadingIndicator,
  useLoadingData
} from "@cyclone-ui/chart";
import type { ComponentProps, FC, ReactElement, ReactNode } from "react";
import {
  Children,
  createContext,
  isValidElement,
  use,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState
} from "react";
import {
  PolarAngleAxis as RechartsPolarAngleAxis,
  PolarGrid as RechartsPolarGrid,
  PolarRadiusAxis as RechartsPolarRadiusAxis,
  Radar as RechartsRadar,
  RadarChart as RechartsRadarChart
} from "recharts";

const STROKE_WIDTH = 1;
const DEFAULT_FILL_OPACITY = 0.3;
const LOADING_POINTS = 6;
const LOADING_ANIMATION_DURATION = 1500; // in milliseconds
const LOADING_RADAR_DATA_KEY = "loading";
// Skeleton color; kept faint by the loading radar's fill and stroke opacity
const LOADING_COLOR = "var(--ink)";

type RadarDotProp = ComponentProps<typeof RechartsRadar>["dot"];
type RadarActiveDotProp = ComponentProps<typeof RechartsRadar>["activeDot"];
export type RadarVariant = "filled" | "lines";

// ─────────────────────────────────────────────────────────────────────────────
// Shared context
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Shared state for every part of the chart, so <Radar />, <PolarAngleAxis />,
 * <Legend /> and friends can read it without prop drilling.
 */
interface RadarChartContextValue {
  config: ChartConfig;
  isLoading: boolean;
  selectedDataKey: string | null;
  selectDataKey: (dataKey: string | null) => void;
}

const RadarChartContext = createContext<RadarChartContextValue | null>(null);

function useRadarChart() {
  const context = use(RadarChartContext);

  if (!context) {
    throw new Error(
      "Radar chart parts (<Radar />, <PolarAngleAxis />, …) must be used within <RadarChart />"
    );
  }

  return context;
}

// ─────────────────────────────────────────────────────────────────────────────
// Root container
// ─────────────────────────────────────────────────────────────────────────────

// Validates that every config key also exists on the data row type
type ValidateConfigKeys<TData, TConfig> = {
  [K in keyof TConfig]: K extends keyof TData ? ChartConfig[string] : never;
};

export type RadarChartProps<
  TData extends Record<string, unknown>,
  TConfig extends Record<string, ChartConfig[string]>
> = Omit<ChartContainerProps, "config" | "children" | "footer"> & {
  config: TConfig & ValidateConfigKeys<TData, TConfig>; // series colors + labels
  data: TData[];
  children: ReactNode; // composed parts — <Radar />, <PolarGrid />, <Legend />, …
  chartProps?: ComponentProps<typeof RechartsRadarChart>; // escape hatch for the raw Recharts chart
  backgroundVariant?: BackgroundVariant; // background pattern drawn behind the chart
  defaultSelectedDataKey?: string | null;
  onSelectionChange?: (selectedDataKey: string | null) => void;
  isLoading?: boolean; // shows the animated loading skeleton
  loadingPoints?: number; // number of points in the loading skeleton
};

/**
 * A composable radar chart. The root owns the data, the shared state and the
 * loading skeleton; the polar grid, axes, tooltip, legend and the radars
 * themselves are composed as children.
 */
export function RadarChart<
  TData extends Record<string, unknown>,
  TConfig extends Record<string, ChartConfig[string]>
>({
  config,
  data,
  children,
  chartProps,
  backgroundVariant,
  defaultSelectedDataKey = null,
  onSelectionChange,
  isLoading = false,
  loadingPoints = LOADING_POINTS,
  ...props
}: RadarChartProps<TData, TConfig>) {
  const chartId = useId().replace(/:/g, "");
  const [selectedDataKey, setSelectedDataKey] = useState<string | null>(
    defaultSelectedDataKey
  );
  // 30–100 keeps every spoke away from the center, so the skeleton reads as a
  // full radar shape
  const { loadingData, onShimmerExit } = useLoadingData(
    isLoading,
    loadingPoints,
    30,
    100
  );

  // The skeleton takes a new random shape on a fixed interval; Recharts'
  // animation morphs the radar between shapes
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(onShimmerExit, LOADING_ANIMATION_DURATION);

    return () => clearInterval(interval);
  }, [isLoading, onShimmerExit]);

  const selectDataKey = useCallback(
    (newSelectedDataKey: string | null) => {
      setSelectedDataKey(newSelectedDataKey);
      onSelectionChange?.(newSelectedDataKey);
    },
    [onSelectionChange]
  );

  const contextValue = useMemo<RadarChartContextValue>(
    () => ({ config, isLoading, selectedDataKey, selectDataKey }),
    [config, isLoading, selectedDataKey, selectDataKey]
  );

  return (
    <RadarChartContext value={contextValue}>
      <ChartContainer config={config} {...props}>
        <LoadingIndicator isLoading={isLoading} />
        <RechartsRadarChart
          id={chartId}
          data={isLoading ? loadingData : data}
          {...chartProps}>
          {backgroundVariant && <ChartBackground variant={backgroundVariant} />}
          {children}
          {isLoading && <LoadingRadar />}
        </RechartsRadarChart>
      </ChartContainer>
    </RadarChartContext>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Composable parts
// ─────────────────────────────────────────────────────────────────────────────

export interface RadarProps {
  dataKey: string; // series key — must exist on the data and config
  variant?: RadarVariant; // fill style for this radar only
  fillOpacity?: number; // opacity of the filled area when `variant="filled"`
  isGlowing?: boolean; // adds a soft outer glow around this radar
  isClickable?: boolean; // lets this radar be selected by clicking it
  children?: ReactNode; // optional <Dot /> and <ActiveDot /> composition
  radarProps?: Omit<ComponentProps<typeof RechartsRadar>, "dataKey">; // escape hatch for raw Recharts Radar props
}

/**
 * A single radar series. Each <Radar /> generates its own stroke and fill
 * gradients and glow filter under a unique id, so any number of radars can
 * share a chart. Compose <Dot /> and <ActiveDot /> inside it to add point
 * markers.
 */
function Radar({
  dataKey,
  variant = "filled",
  fillOpacity = DEFAULT_FILL_OPACITY,
  isGlowing = false,
  isClickable = false,
  children,
  radarProps
}: RadarProps) {
  const { config, isLoading, selectedDataKey, selectDataKey } = useRadarChart();
  const id = useId().replace(/:/g, "");

  // The root renders the skeleton radar while loading
  if (isLoading) return null;

  const isSelected = selectedDataKey === null || selectedDataKey === dataKey;
  const isDimmed = isClickable && !isSelected;
  // A dimmed fill recedes twice as far as its stroke and dots, so the picked
  // radar reads clearly. The fill value multiplies `fillOpacity`.
  const opacity = {
    stroke: isDimmed ? 0.2 : 1,
    fill: isDimmed ? 0.1 : 1,
    dot: isDimmed ? 0.2 : 1
  };
  const isFilled = variant === "filled";

  const { dot, activeDot } = resolveDots(children, id, dataKey, opacity.dot);

  return (
    <>
      <RechartsRadar
        dataKey={dataKey}
        stroke={`url(#${id}-radar-stroke-${dataKey})`}
        strokeOpacity={opacity.stroke}
        strokeWidth={STROKE_WIDTH}
        fill={isFilled ? `url(#${id}-radar-fill-${dataKey})` : "none"}
        fillOpacity={isFilled ? fillOpacity * opacity.fill : 0}
        dot={dot}
        activeDot={activeDot}
        filter={isGlowing ? `url(#${id}-radar-glow-${dataKey})` : undefined}
        style={{
          transition: "opacity 200ms",
          ...(isClickable ? { cursor: "pointer" } : {})
        }}
        onClick={() => {
          if (!isClickable) return;
          selectDataKey(selectedDataKey === dataKey ? null : dataKey);
        }}
        {...radarProps}
      />
      <defs>
        {/* Horizontal series gradient the dots paint from */}
        <ChartColorGradient
          id={`${id}-colors-${dataKey}`}
          dataKey={dataKey}
          config={config}
        />
        <ChartColorGradient
          id={`${id}-radar-stroke-${dataKey}`}
          dataKey={dataKey}
          config={config}
          x2="1"
          y2="1"
        />
        {isFilled && (
          <FillGradient
            id={id}
            dataKey={dataKey}
            colorsCount={getColorsCount(config[dataKey])}
          />
        )}
        {isGlowing && <GlowFilter id={id} dataKey={dataKey} />}
      </defs>
    </>
  );
}

export interface RadarDotProps {
  variant?: DotVariant; // visual style of the point marker
}

/**
 * Declares a resting point marker for the <Radar /> it is composed inside. It
 * renders nothing on its own; the parent <Radar /> wires it into Recharts.
 */
const Dot: FC<RadarDotProps> = () => null;

/** Declares the hovered point marker for the <Radar /> it is composed inside. */
const ActiveDot: FC<RadarDotProps> = () => null;

/**
 * The polar grid lines; a dashed polygon grid by default. Every Recharts
 * PolarGrid prop passes through.
 */
function PolarGrid({
  gridType = "polygon",
  stroke = "var(--ink)",
  strokeOpacity = 0.2,
  strokeDasharray = "3 4",
  ...props
}: ComponentProps<typeof RechartsPolarGrid>) {
  return (
    <RechartsPolarGrid
      gridType={gridType}
      stroke={stroke}
      strokeOpacity={strokeOpacity}
      strokeDasharray={strokeDasharray}
      {...props}
    />
  );
}

/**
 * The angular category axis — the labels around the chart's perimeter. Every
 * Recharts PolarAngleAxis prop passes through. Hidden while loading.
 */
function PolarAngleAxis({
  tick = { fill: "var(--subtle)", fontSize: 12 },
  tickLine = false,
  ...props
}: ComponentProps<typeof RechartsPolarAngleAxis>) {
  const { isLoading } = useRadarChart();

  if (isLoading) return null;

  return <RechartsPolarAngleAxis tick={tick} tickLine={tickLine} {...props} />;
}

/**
 * The radial value axis, running from the center outward. Every Recharts
 * PolarRadiusAxis prop passes through. Hidden while loading.
 */
function PolarRadiusAxis({
  tick = { fill: "var(--subtle)", fontSize: 10 },
  tickLine = false,
  axisLine = false,
  ...props
}: ComponentProps<typeof RechartsPolarRadiusAxis>) {
  const { isLoading } = useRadarChart();

  if (isLoading) return null;

  return (
    <RechartsPolarRadiusAxis
      tick={tick}
      tickLine={tickLine}
      axisLine={axisLine}
      {...props}
    />
  );
}

export interface RadarTooltipProps {
  variant?: TooltipVariant;
  roundness?: TooltipRoundness;
  defaultIndex?: number; // data index shown with no hover
}

/** The hover tooltip; dims unselected series. Hidden while loading. */
function Tooltip({ variant, roundness, defaultIndex }: RadarTooltipProps) {
  const { isLoading, selectedDataKey } = useRadarChart();

  if (isLoading) return null;

  return (
    <ChartTooltip
      defaultIndex={defaultIndex}
      cursor={false}
      content={
        <ChartTooltipContent
          selected={selectedDataKey}
          roundness={roundness}
          variant={variant}
        />
      }
    />
  );
}

export interface RadarLegendProps {
  variant?: ChartLegendVariant;
  align?: "left" | "center" | "right";
  verticalAlign?: "top" | "middle" | "bottom";
  isClickable?: boolean; // lets each entry toggle selection of its series
}

/**
 * The series legend; clickable entries toggle series selection. Hidden while
 * loading.
 */
function Legend({
  variant,
  align = "center",
  verticalAlign = "bottom",
  isClickable = false
}: RadarLegendProps) {
  const { isLoading, selectedDataKey, selectDataKey } = useRadarChart();

  if (isLoading) return null;

  return (
    <ChartLegend
      verticalAlign={verticalAlign}
      align={align}
      content={
        <ChartLegendContent
          selected={selectedDataKey}
          onSelectChange={selectDataKey}
          isClickable={isClickable}
          variant={variant}
        />
      }
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Dot helpers
// ─────────────────────────────────────────────────────────────────────────────

// Pulls <Dot /> and <ActiveDot /> out of a radar's children into Recharts dot
// slots
const resolveDots = (
  children: ReactNode,
  id: string,
  dataKey: string,
  dotOpacity: number
): { dot: RadarDotProp; activeDot: RadarActiveDotProp } => {
  let dot: RadarDotProp = false;
  let activeDot: RadarActiveDotProp = false;

  Children.forEach(children, child => {
    if (!isValidElement(child)) return;

    const { variant } = (child as ReactElement<RadarDotProps>).props;
    const marker = (
      <ChartDot
        type={variant}
        dataKey={dataKey}
        chartId={id}
        fillOpacity={dotOpacity}
      />
    );

    if (child.type === Dot) dot = marker;
    if (child.type === ActiveDot) activeDot = marker;
  });

  return { dot, activeDot };
};

// ─────────────────────────────────────────────────────────────────────────────
// Style definitions — one set per <Radar />, scoped to its unique id
// ─────────────────────────────────────────────────────────────────────────────

interface StyleProps {
  id: string; // unique id of the owning <Radar />
  dataKey: string; // series key the styles belong to
}

/**
 * Radial gradient for the filled area: the first color at 0.8 opacity, the
 * rest at 0.3. Single-color series still get two stops, the second falling
 * back to the first color.
 */
const FillGradient = ({
  id,
  dataKey,
  colorsCount
}: StyleProps & { colorsCount: number }) => {
  const stops = Math.max(colorsCount, 2);

  return (
    <radialGradient
      id={`${id}-radar-fill-${dataKey}`}
      cx="50%"
      cy="50%"
      r="50%">
      {Array.from({ length: stops }, (_, index) => {
        const offset = `${(index / (stops - 1)) * 100}%`;

        return (
          <stop
            key={offset}
            offset={offset}
            stopColor={`var(--color-${dataKey}-${index}, var(--color-${dataKey}-0))`}
            stopOpacity={index === 0 ? 0.8 : 0.3}
          />
        );
      })}
    </radialGradient>
  );
};

/** Soft outer glow applied to a radar when `isGlowing` is set. */
const GlowFilter = ({ id, dataKey }: StyleProps) => (
  <filter
    id={`${id}-radar-glow-${dataKey}`}
    x="-50%"
    y="-50%"
    width="200%"
    height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
    <feColorMatrix
      in="blur"
      type="matrix"
      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.6 0"
      result="glow"
    />
    <feMerge>
      <feMergeNode in="glow" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
);

// ─────────────────────────────────────────────────────────────────────────────
// Loading skeleton
// ─────────────────────────────────────────────────────────────────────────────

/** The skeleton radar the root renders in place of the real radars. */
const LoadingRadar = () => (
  <RechartsRadar
    dataKey={LOADING_RADAR_DATA_KEY}
    stroke={LOADING_COLOR}
    strokeOpacity={0.3}
    strokeWidth={2}
    fill={LOADING_COLOR}
    fillOpacity={0.1}
    dot={false}
    isAnimationActive
    animationDuration={LOADING_ANIMATION_DURATION}
    animationEasing="ease-in-out"
  />
);

// Every part hangs off the root, so one import covers the whole chart.
RadarChart.Radar = Radar;
RadarChart.Dot = Dot;
RadarChart.ActiveDot = ActiveDot;
RadarChart.PolarGrid = PolarGrid;
RadarChart.PolarAngleAxis = PolarAngleAxis;
RadarChart.PolarRadiusAxis = PolarRadiusAxis;
RadarChart.Tooltip = Tooltip;
RadarChart.Legend = Legend;

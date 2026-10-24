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
  ChartAnimationType,
  ChartConfig,
  ChartContainerProps,
  ChartLegendVariant,
  DotVariant,
  TooltipRoundness,
  TooltipVariant
} from "@cyclone-ui/chart";
import {
  axisValueToPercentFormatter,
  ChartBrush,
  ChartBrushView,
  ChartColorGradient,
  ChartContainer,
  ChartDot,
  ChartLegend,
  ChartLegendContent,
  ChartRevealMask,
  ChartTooltip,
  ChartTooltipContent,
  getEasedGradientStops,
  LoadingIndicator,
  useChartBrush,
  useChartBrushSlot,
  useLoadingData
} from "@cyclone-ui/chart";
import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps, FC, ReactElement, ReactNode } from "react";
import {
  Children,
  createContext,
  isValidElement,
  use,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState
} from "react";
import {
  CartesianGrid,
  Area as RechartsArea,
  AreaChart as RechartsAreaChart,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis
} from "recharts";

const STROKE_WIDTH = 0.8; // default series stroke — <Area strokeWidth> overrides it
const LOADING_AREA_DATA_KEY = "loading";
const LOADING_ANIMATION_DURATION = 2000; // in milliseconds
const STACK_ID = "cyclone-stacked";
// Skeleton color; kept faint by the loading area's fill and stroke opacity
const LOADING_COLOR = "var(--ink)";

type CurveType = ComponentProps<typeof RechartsArea>["type"];
type AreaDotProp = ComponentProps<typeof RechartsArea>["dot"];
type AreaActiveDotProp = ComponentProps<typeof RechartsArea>["activeDot"];
export type AreaVariant =
  "gradient" | "gradient-reverse" | "solid" | "dotted" | "lines" | "hatched";
export type AreaStrokeVariant = "solid" | "dashed" | "animated-dashed";
export type AreaStackType = "default" | "expanded" | "stacked";

// ─────────────────────────────────────────────────────────────────────────────
// Shared context
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Shared state for every part of the chart, so <Area />, <XAxis />, <Legend />
 * and friends can read it without prop drilling.
 */
interface AreaChartContextValue {
  config: ChartConfig;
  curveType: CurveType; // default curve each <Area /> inherits
  animationType: ChartAnimationType; // default intro reveal each <Area /> inherits
  isStacked: boolean;
  isExpanded: boolean; // whether the stack is normalized to 100%
  isLoading: boolean;
  selectedDataKey: string | null;
  selectDataKey: (dataKey: string | null) => void;
}

const AreaChartContext = createContext<AreaChartContextValue | null>(null);

function useAreaChart() {
  const context = use(AreaChartContext);

  if (!context) {
    throw new Error(
      "Area chart parts (<Area />, <XAxis />, …) must be used within <AreaChart />"
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

export type AreaChartProps<
  TData extends Record<string, unknown>,
  TConfig extends Record<string, ChartConfig[string]>
> = Omit<ChartContainerProps, "config" | "children" | "footer"> & {
  config: TConfig & ValidateConfigKeys<TData, TConfig>; // series colors + labels
  data: TData[];
  children: ReactNode; // composed parts — <Area />, <XAxis />, <Legend />, …
  chartProps?: ComponentProps<typeof RechartsAreaChart>; // escape hatch for the raw Recharts chart
  curveType?: CurveType; // default curve for every <Area />
  animationType?: ChartAnimationType; // default intro reveal for every <Area />
  stackType?: AreaStackType; // how multiple areas combine
  defaultSelectedDataKey?: string | null;
  onSelectionChange?: (selectedDataKey: string | null) => void;
  isLoading?: boolean; // shows the animated loading skeleton
  loadingPoints?: number; // number of points in the loading skeleton
  xDataKey?: keyof TData & string; // x-axis key — only needed for the <Brush /> labels
};

/**
 * A composable area chart. The root owns the data, the shared state, the
 * loading skeleton and the optional zoom brush; axes, grid, tooltip, legend
 * and the areas themselves are composed as children.
 */
export function AreaChart<
  TData extends Record<string, unknown>,
  TConfig extends Record<string, ChartConfig[string]>
>({
  config,
  data,
  children,
  chartProps,
  curveType = "linear",
  animationType = "left-to-right",
  stackType = "default",
  defaultSelectedDataKey = null,
  onSelectionChange,
  isLoading = false,
  loadingPoints,
  xDataKey,
  ...props
}: AreaChartProps<TData, TConfig>) {
  const chartId = useId().replace(/:/g, "");
  const [selectedDataKey, setSelectedDataKey] = useState<string | null>(
    defaultSelectedDataKey
  );
  const { loadingData, onShimmerExit } = useLoadingData(
    isLoading,
    loadingPoints
  );
  const { visibleData, brushProps } = useChartBrush({ data });
  const { brush, chartChildren } = useChartBrushSlot(children);

  const isExpanded = stackType === "expanded";
  const isStacked = stackType === "stacked" || isExpanded;
  const displayData = brush && !isLoading ? visibleData : data;

  const selectDataKey = useCallback(
    (newSelectedDataKey: string | null) => {
      setSelectedDataKey(newSelectedDataKey);
      onSelectionChange?.(newSelectedDataKey);
    },
    [onSelectionChange]
  );

  const contextValue = useMemo<AreaChartContextValue>(
    () => ({
      config,
      curveType,
      animationType,
      isStacked,
      isExpanded,
      isLoading,
      selectedDataKey,
      selectDataKey
    }),
    [
      config,
      curveType,
      animationType,
      isStacked,
      isExpanded,
      isLoading,
      selectedDataKey,
      selectDataKey
    ]
  );

  return (
    <AreaChartContext value={contextValue}>
      <ChartContainer
        config={config}
        footer={
          brush &&
          !isLoading && (
            <ChartBrushView
              data={data}
              chartConfig={config}
              xDataKey={xDataKey}
              variant="area"
              curveType={curveType}
              height={brush.height}
              formatLabel={brush.formatLabel}
              stacked={isStacked}
              skipStyle
              style={{ marginTop: 4 }}
              {...brushProps}
              onChange={range => {
                brushProps.onChange(range);
                brush.onChange?.(range);
              }}
            />
          )
        }
        {...props}>
        <LoadingIndicator isLoading={isLoading} />
        <RechartsAreaChart
          id={chartId}
          accessibilityLayer
          stackOffset={isExpanded ? "expand" : undefined}
          data={isLoading ? loadingData : displayData}
          {...chartProps}>
          {chartChildren}
          {isLoading && (
            <LoadingArea
              chartId={chartId}
              curveType={curveType}
              onShimmerExit={onShimmerExit}
            />
          )}
        </RechartsAreaChart>
      </ChartContainer>
    </AreaChartContext>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Composable parts
// ─────────────────────────────────────────────────────────────────────────────

export interface AreaProps {
  dataKey: string; // series key — must exist on the data and config
  variant?: AreaVariant; // fill style for this area only
  strokeVariant?: AreaStrokeVariant;
  strokeWidth?: number; // stroke thickness in pixels
  curveType?: CurveType; // falls back to the chart default
  animationType?: ChartAnimationType; // falls back to the chart default
  connectNulls?: boolean; // join segments across null/missing values
  isClickable?: boolean; // lets this area be selected by clicking it
  children?: ReactNode; // optional <Dot /> and <ActiveDot /> composition
  areaProps?: ComponentProps<typeof RechartsArea>; // escape hatch for raw Recharts Area props
}

/**
 * A single area series. Each <Area /> generates its own gradient and pattern
 * definitions under a unique id, so any number of areas — each with its own
 * variant, stroke and clickability — can share a chart. Compose <Dot /> and
 * <ActiveDot /> inside it to add point markers.
 */
function Area({
  dataKey,
  variant = "gradient",
  strokeVariant = "dashed",
  strokeWidth = STROKE_WIDTH,
  curveType,
  animationType,
  connectNulls = false,
  isClickable = false,
  children,
  areaProps
}: AreaProps) {
  const {
    config,
    curveType: defaultCurve,
    animationType: defaultAnimation,
    isStacked,
    isExpanded,
    isLoading,
    selectedDataKey,
    selectDataKey
  } = useAreaChart();
  const id = useId().replace(/:/g, "");
  const shouldReduceMotion = useReducedMotion();

  // The root renders the skeleton area while loading
  if (isLoading) return null;

  const resolvedCurve = curveType ?? defaultCurve;
  const revealType: ChartAnimationType = shouldReduceMotion
    ? "none"
    : (animationType ?? defaultAnimation);
  const maskId = revealType === "none" ? undefined : `${id}-reveal-mask`;

  const isSelected = selectedDataKey === dataKey;
  const hasSelection = selectedDataKey !== null;
  const opacity = getOpacity(selectedDataKey, dataKey);
  const showUnselected = hasSelection && !isSelected;

  const { dot, activeDot } = resolveDots(
    children,
    id,
    dataKey,
    opacity.dot,
    maskId
  );

  const isAnimatedDashed = strokeVariant === "animated-dashed";
  const isDashed = strokeVariant === "dashed" || isAnimatedDashed;

  return (
    <>
      <RechartsArea
        type={resolvedCurve}
        dataKey={dataKey}
        connectNulls={connectNulls}
        fillOpacity={opacity.fill}
        strokeOpacity={opacity.stroke}
        fill={
          showUnselected ? `url(#${id}-unselected)` : `url(#${id}-${variant})`
        }
        stroke={`url(#${id}-colors-${dataKey})`}
        stackId={isStacked ? STACK_ID : undefined}
        dot={dot}
        activeDot={activeDot}
        strokeWidth={strokeWidth}
        strokeDasharray={isDashed ? "3 3" : undefined}
        // Recharts' own animation drew the line after the dots had popped in;
        // the reveal mask wipes fill, stroke and dots in together instead.
        isAnimationActive={false}
        style={{
          ...(maskId ? { mask: `url(#${maskId})` } : {}),
          ...(isClickable ? { cursor: "pointer" } : {})
        }}
        onClick={() => {
          if (!isClickable) return;
          selectDataKey(isSelected ? null : dataKey);
        }}
        {...areaProps}>
        {isAnimatedDashed && !hasSelection && <AnimatedDashedStroke />}
      </RechartsArea>
      <defs>
        {revealType !== "none" && <ChartRevealMask id={id} type={revealType} />}
        <ChartColorGradient
          id={`${id}-colors-${dataKey}`}
          dataKey={dataKey}
          config={config}
          gradientUnits={isExpanded ? "userSpaceOnUse" : "objectBoundingBox"}
        />
        {variant === "gradient" && (
          <FadePattern id={id} dataKey={dataKey} name="gradient" from={0.1} />
        )}
        {variant === "gradient-reverse" && (
          <FadePattern
            id={id}
            dataKey={dataKey}
            name="gradient-reverse"
            from={0}
            to={0.1}
          />
        )}
        {variant === "solid" && (
          <FadePattern
            id={id}
            dataKey={dataKey}
            name="solid"
            from={0.1}
            to={0.1}
          />
        )}
        {variant === "dotted" && <DottedPattern id={id} dataKey={dataKey} />}
        {variant === "lines" && (
          <LinesPattern id={id} dataKey={dataKey} name="lines" />
        )}
        {variant === "hatched" && <HatchedPattern id={id} dataKey={dataKey} />}
        {showUnselected && (
          <LinesPattern id={id} dataKey={dataKey} name="unselected" />
        )}
      </defs>
    </>
  );
}

export interface AreaDotProps {
  variant?: DotVariant; // visual style of the point marker
}

/**
 * Declares a resting point marker for the <Area /> it is composed inside. It
 * renders nothing on its own; the parent <Area /> wires it into Recharts.
 */
const Dot: FC<AreaDotProps> = () => null;

/** Declares the hovered point marker for the <Area /> it is composed inside. */
const ActiveDot: FC<AreaDotProps> = () => null;

/**
 * The horizontal category axis, with flat default styling. Every Recharts
 * XAxis prop passes through. Hidden while the chart is loading.
 */
function XAxis({
  tickLine = false,
  axisLine = false,
  tickMargin = 8,
  minTickGap = 8,
  ...props
}: ComponentProps<typeof RechartsXAxis>) {
  const { isLoading } = useAreaChart();

  if (isLoading) return null;

  return (
    <RechartsXAxis
      tickLine={tickLine}
      axisLine={axisLine}
      tickMargin={tickMargin}
      minTickGap={minTickGap}
      {...props}
    />
  );
}

/**
 * The vertical value axis. Formats ticks as percentages when the chart uses
 * an expanded stack. Hidden while the chart is loading.
 */
function YAxis({
  tickLine = false,
  axisLine = false,
  tickMargin = 8,
  minTickGap = 8,
  width = "auto",
  tickFormatter,
  ...props
}: ComponentProps<typeof RechartsYAxis>) {
  const { isLoading, isExpanded } = useAreaChart();

  if (isLoading) return null;

  return (
    <RechartsYAxis
      tickLine={tickLine}
      axisLine={axisLine}
      tickMargin={tickMargin}
      minTickGap={minTickGap}
      width={width}
      tickFormatter={isExpanded ? axisValueToPercentFormatter : tickFormatter}
      {...props}
    />
  );
}

/** Background grid lines; horizontal dashed lines by default. */
function Grid({
  vertical = false,
  strokeDasharray = "3 3",
  ...props
}: ComponentProps<typeof CartesianGrid>) {
  return (
    <CartesianGrid
      vertical={vertical}
      strokeDasharray={strokeDasharray}
      {...props}
    />
  );
}

export interface AreaTooltipProps {
  variant?: TooltipVariant;
  roundness?: TooltipRoundness;
  defaultIndex?: number; // data index shown with no hover
  cursor?: boolean; // whether the vertical cursor line follows the pointer
}

/** The hover tooltip; dims unselected series. Hidden while loading. */
function Tooltip({
  variant,
  roundness,
  defaultIndex,
  cursor = true
}: AreaTooltipProps) {
  const { isLoading, selectedDataKey } = useAreaChart();

  if (isLoading) return null;

  return (
    <ChartTooltip
      defaultIndex={defaultIndex}
      cursor={
        cursor ? { strokeDasharray: "3 3", strokeWidth: STROKE_WIDTH } : false
      }
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

export interface AreaLegendProps {
  variant?: ChartLegendVariant;
  align?: "left" | "center" | "right";
  verticalAlign?: "top" | "middle" | "bottom";
  isClickable?: boolean; // lets each entry toggle selection of its series
}

/** The series legend; clickable entries toggle series selection. */
function Legend({
  variant,
  align = "right",
  verticalAlign = "top",
  isClickable = false
}: AreaLegendProps) {
  const { selectedDataKey, selectDataKey } = useAreaChart();

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
// Selection + dot helpers
// ─────────────────────────────────────────────────────────────────────────────

// Dims a series only when another one is selected
const getOpacity = (selectedDataKey: string | null, dataKey: string) =>
  selectedDataKey === null || selectedDataKey === dataKey
    ? { fill: 0.8, stroke: 1, dot: 1 }
    : { fill: 0.1, stroke: 0.3, dot: 0.3 };

// Pulls <Dot /> and <ActiveDot /> out of an area's children into Recharts dot
// slots. The resting dot shares the reveal mask so it wipes in with the line.
const resolveDots = (
  children: ReactNode,
  id: string,
  dataKey: string,
  dotOpacity: number,
  maskId: string | undefined
): { dot: AreaDotProp; activeDot: AreaActiveDotProp } => {
  let dot: AreaDotProp = false;
  let activeDot: AreaActiveDotProp = false;

  Children.forEach(children, child => {
    if (!isValidElement(child)) return;

    const { variant } = (child as ReactElement<AreaDotProps>).props;
    if (child.type === Dot) {
      dot = (
        <ChartDot
          type={variant}
          dataKey={dataKey}
          chartId={id}
          fillOpacity={dotOpacity}
          maskId={maskId}
        />
      );
    }

    if (child.type === ActiveDot) {
      activeDot = (
        <ChartDot
          type={variant}
          dataKey={dataKey}
          chartId={id}
          fillOpacity={dotOpacity}
        />
      );
    }
  });

  return { dot, activeDot };
};

// ─────────────────────────────────────────────────────────────────────────────
// Style definitions — one set per <Area />, scoped to its unique id
// ─────────────────────────────────────────────────────────────────────────────

interface StyleProps {
  id: string; // unique id of the owning <Area />
  dataKey: string; // series key the colors belong to
}

const AnimatedDashedStroke = () => (
  <>
    <animate
      attributeName="stroke-dasharray"
      values="3 3; 0 3; 3 3"
      dur="1s"
      repeatCount="indefinite"
      keyTimes="0;0.5;1"
    />
    <animate
      attributeName="stroke-dashoffset"
      values="0; -6"
      dur="1s"
      repeatCount="indefinite"
      keyTimes="0;1"
    />
  </>
);

/**
 * The series gradient masked by a vertical fade from `from` (top) to `to`
 * (bottom) opacity: `gradient`, `gradient-reverse` and `solid` fills.
 */
const FadePattern = ({
  id,
  dataKey,
  name,
  from,
  to = 0
}: StyleProps & { name: string; from: number; to?: number }) => (
  <>
    <linearGradient id={`${id}-${name}-fade`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="white" stopOpacity={from} />
      <stop offset="100%" stopColor="white" stopOpacity={to} />
    </linearGradient>
    <mask id={`${id}-${name}-mask`}>
      <rect width="100%" height="100%" fill={`url(#${id}-${name}-fade)`} />
    </mask>
    <pattern
      id={`${id}-${name}`}
      patternUnits="userSpaceOnUse"
      width="100%"
      height="100%">
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-colors-${dataKey})`}
        mask={`url(#${id}-${name}-mask)`}
      />
    </pattern>
  </>
);

/**
 * Diagonal-line texture masked from the series gradient. Also used, as
 * `unselected`, to push a non-selected area into the background.
 */
const LinesPattern = ({ id, dataKey, name }: StyleProps & { name: string }) => (
  <>
    <pattern
      id={`${id}-${name}-texture`}
      patternUnits="userSpaceOnUse"
      width="5"
      height="5"
      patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="5" stroke="white" strokeWidth="1" />
    </pattern>
    <mask id={`${id}-${name}-mask`}>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-${name}-texture)`}
        fillOpacity="0.3"
      />
    </mask>
    <pattern
      id={`${id}-${name}`}
      patternUnits="userSpaceOnUse"
      width="100%"
      height="100%">
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-colors-${dataKey})`}
        mask={`url(#${id}-${name}-mask)`}
      />
    </pattern>
  </>
);

/** Dotted texture fill, masked from the series gradient. */
const DottedPattern = ({ id, dataKey }: StyleProps) => (
  <>
    <pattern
      id={`${id}-dotted-texture`}
      x="0"
      y="0"
      width="6"
      height="6"
      patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="0.5" fill="white" />
    </pattern>
    <mask id={`${id}-dotted-mask`}>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-dotted-texture)`}
        fillOpacity="0.5"
      />
    </mask>
    <pattern
      id={`${id}-dotted`}
      patternUnits="userSpaceOnUse"
      width="100%"
      height="100%">
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-colors-${dataKey})`}
        mask={`url(#${id}-dotted-mask)`}
      />
    </pattern>
  </>
);

/** Hatched striped fill with a soft gradient across each stripe. */
const HatchedPattern = ({ id, dataKey }: StyleProps) => (
  <>
    <linearGradient id={`${id}-hatched-stripe`} x1="0" y1="0" x2="1" y2="0">
      <stop offset="50%" stopColor="white" stopOpacity={0.2} />
      <stop offset="50%" stopColor="white" stopOpacity={1} />
    </linearGradient>
    <pattern
      id={`${id}-hatched-texture`}
      x="0"
      y="0"
      width="20"
      height="10"
      patternUnits="userSpaceOnUse"
      overflow="visible"
      patternTransform="rotate(20)">
      <rect width="20" height="10" fill={`url(#${id}-hatched-stripe)`} />
    </pattern>
    <mask id={`${id}-hatched-mask`}>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-hatched-texture)`}
        fillOpacity="0.2"
      />
    </mask>
    <pattern
      id={`${id}-hatched`}
      patternUnits="userSpaceOnUse"
      width="100%"
      height="100%">
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-colors-${dataKey})`}
        mask={`url(#${id}-hatched-mask)`}
      />
    </pattern>
  </>
);

// ─────────────────────────────────────────────────────────────────────────────
// Loading skeleton
// ─────────────────────────────────────────────────────────────────────────────

/** The skeleton area the root renders in place of the real areas. */
const LoadingArea = ({
  chartId,
  curveType,
  onShimmerExit
}: {
  chartId: string;
  curveType: CurveType;
  onShimmerExit: () => void;
}) => (
  <>
    <RechartsArea
      type={curveType}
      dataKey={LOADING_AREA_DATA_KEY}
      fillOpacity={0.05}
      fill={LOADING_COLOR}
      stroke={LOADING_COLOR}
      strokeOpacity={0.5}
      isAnimationActive={false}
      legendType="none"
      tooltipType="none"
      activeDot={false}
      dot={false}
      style={{ mask: `url(#${chartId}-loading-mask)` }}
    />
    <defs>
      <LoadingPattern chartId={chartId} onShimmerExit={onShimmerExit} />
    </defs>
  </>
);

/**
 * Animated shimmer for the loading skeleton. The visible area is normalized
 * to 0–1 and the pattern is 3× wide, so the shimmer travels x from -1 to 2;
 * `onShimmerExit` fires as it crosses x = 1, swapping the data off-screen.
 */
const LoadingPattern = ({
  chartId,
  onShimmerExit
}: {
  chartId: string;
  onShimmerExit: () => void;
}) => {
  const gradientStops = getEasedGradientStops();
  const startX = -1;
  const endX = 2;
  const lastXRef = useRef(startX);

  return (
    <>
      <linearGradient
        id={`${chartId}-loading-gradient`}
        x1="0"
        y1="0"
        x2="1"
        y2="0">
        {gradientStops.map(({ offset, opacity }) => (
          <stop
            key={offset}
            offset={offset}
            stopColor="white"
            stopOpacity={opacity}
          />
        ))}
      </linearGradient>
      <pattern
        id={`${chartId}-loading-pattern`}
        patternUnits="objectBoundingBox"
        patternContentUnits="objectBoundingBox"
        patternTransform="rotate(25)"
        width="3"
        height="1"
        x="0"
        y="0">
        <motion.rect
          y="0"
          width="1"
          height="1"
          fill={`url(#${chartId}-loading-gradient)`}
          initial={{ x: startX }}
          animate={{ x: endX }}
          transition={{
            duration: LOADING_ANIMATION_DURATION / 1000,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
          onUpdate={latest => {
            const x = typeof latest.x === "number" ? latest.x : startX;
            // Fire once per loop, as the shimmer leaves the visible area
            if (x >= 1 && lastXRef.current < 1) {
              onShimmerExit();
            }
            lastXRef.current = x;
          }}
        />
      </pattern>
      <mask id={`${chartId}-loading-mask`} maskUnits="userSpaceOnUse">
        <rect
          width="100%"
          height="100%"
          fill={`url(#${chartId}-loading-pattern)`}
        />
      </mask>
    </>
  );
};

// Every part hangs off the root, so one import covers the whole chart.
AreaChart.Area = Area;
AreaChart.Dot = Dot;
AreaChart.ActiveDot = ActiveDot;
AreaChart.XAxis = XAxis;
AreaChart.YAxis = YAxis;
AreaChart.Grid = Grid;
AreaChart.Tooltip = Tooltip;
AreaChart.Legend = Legend;
AreaChart.Brush = ChartBrush;

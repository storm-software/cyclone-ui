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
import type { CurveProps } from "recharts";
import {
  CartesianGrid,
  Curve,
  Line as RechartsLine,
  LineChart as RechartsLineChart,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis
} from "recharts";

const STROKE_WIDTH = 0.8; // default series stroke — <Line strokeWidth> overrides it
const LOADING_LINE_DATA_KEY = "loading";
const LOADING_ANIMATION_DURATION = 2000; // in milliseconds
// Skeleton color; kept faint by the loading line's stroke opacity
const LOADING_COLOR = "var(--ink)";

type CurveType = ComponentProps<typeof RechartsLine>["type"];
type LineDotProp = ComponentProps<typeof RechartsLine>["dot"];
type LineActiveDotProp = ComponentProps<typeof RechartsLine>["activeDot"];
export type LineStrokeVariant = "solid" | "dashed" | "animated-dashed";

// ─────────────────────────────────────────────────────────────────────────────
// Shared context
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Shared state for every part of the chart, so <Line />, <XAxis />, <Legend />
 * and friends can read it without prop drilling.
 */
interface LineChartContextValue {
  config: ChartConfig;
  curveType: CurveType; // default curve each <Line /> inherits
  animationType: ChartAnimationType; // default intro reveal each <Line /> inherits
  isLoading: boolean;
  selectedDataKey: string | null;
  selectDataKey: (dataKey: string | null) => void;
}

const LineChartContext = createContext<LineChartContextValue | null>(null);

function useLineChart() {
  const context = use(LineChartContext);

  if (!context) {
    throw new Error(
      "Line chart parts (<Line />, <XAxis />, …) must be used within <LineChart />"
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

export type LineChartProps<
  TData extends Record<string, unknown>,
  TConfig extends Record<string, ChartConfig[string]>
> = Omit<ChartContainerProps, "config" | "children" | "footer"> & {
  config: TConfig & ValidateConfigKeys<TData, TConfig>; // series colors + labels
  data: TData[];
  children: ReactNode; // composed parts — <Line />, <XAxis />, <Legend />, …
  chartProps?: ComponentProps<typeof RechartsLineChart>; // escape hatch for the raw Recharts chart
  curveType?: CurveType; // default curve for every <Line />
  animationType?: ChartAnimationType; // default intro reveal for every <Line />
  defaultSelectedDataKey?: string | null;
  onSelectionChange?: (selectedDataKey: string | null) => void;
  isLoading?: boolean; // shows the animated loading skeleton
  loadingPoints?: number; // number of points in the loading skeleton
  xDataKey?: keyof TData & string; // x-axis key — only needed for the <Brush /> labels
};

/**
 * A composable line chart. The root owns the data, the shared state, the
 * loading skeleton and the optional zoom brush; axes, grid, tooltip, legend
 * and the lines themselves are composed as children.
 */
export function LineChart<
  TData extends Record<string, unknown>,
  TConfig extends Record<string, ChartConfig[string]>
>({
  config,
  data,
  children,
  chartProps,
  curveType = "linear",
  animationType = "left-to-right",
  defaultSelectedDataKey = null,
  onSelectionChange,
  isLoading = false,
  loadingPoints,
  xDataKey,
  ...props
}: LineChartProps<TData, TConfig>) {
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

  const displayData = brush && !isLoading ? visibleData : data;

  const selectDataKey = useCallback(
    (newSelectedDataKey: string | null) => {
      setSelectedDataKey(newSelectedDataKey);
      onSelectionChange?.(newSelectedDataKey);
    },
    [onSelectionChange]
  );

  const contextValue = useMemo<LineChartContextValue>(
    () => ({
      config,
      curveType,
      animationType,
      isLoading,
      selectedDataKey,
      selectDataKey
    }),
    [
      config,
      curveType,
      animationType,
      isLoading,
      selectedDataKey,
      selectDataKey
    ]
  );

  return (
    <LineChartContext value={contextValue}>
      <ChartContainer
        config={config}
        footer={
          brush &&
          !isLoading && (
            <ChartBrushView
              data={data}
              chartConfig={config}
              xDataKey={xDataKey}
              variant="line"
              curveType={curveType}
              height={brush.height}
              formatLabel={brush.formatLabel}
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
        <RechartsLineChart
          id={chartId}
          accessibilityLayer
          data={isLoading ? loadingData : displayData}
          {...chartProps}>
          {chartChildren}
          {isLoading && (
            <LoadingLine
              chartId={chartId}
              curveType={curveType}
              onShimmerExit={onShimmerExit}
            />
          )}
        </RechartsLineChart>
      </ChartContainer>
    </LineChartContext>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Composable parts
// ─────────────────────────────────────────────────────────────────────────────

export interface LineProps {
  dataKey: string; // series key — must exist on the data and config
  strokeVariant?: LineStrokeVariant;
  strokeWidth?: number; // stroke thickness in pixels
  curveType?: CurveType; // falls back to the chart default
  animationType?: ChartAnimationType; // falls back to the chart default
  connectNulls?: boolean; // join segments across null/missing values
  isClickable?: boolean; // lets this line be selected by clicking it
  glowing?: boolean; // applies a soft outer glow to this line
  enableBufferLine?: boolean; // renders this line's last segment as a dashed buffer
  children?: ReactNode; // optional <Dot /> and <ActiveDot /> composition
  lineProps?: ComponentProps<typeof RechartsLine>; // escape hatch for raw Recharts Line props
}

/**
 * A single line series. Each <Line /> generates its own gradient and glow
 * definitions under a unique id, so any number of lines — each with its own
 * stroke, glow and clickability — can share a chart. Compose <Dot /> and
 * <ActiveDot /> inside it to add point markers.
 */
function Line({
  dataKey,
  strokeVariant = "solid",
  strokeWidth = STROKE_WIDTH,
  curveType,
  animationType,
  connectNulls = false,
  isClickable = false,
  glowing = false,
  enableBufferLine = false,
  children,
  lineProps
}: LineProps) {
  const {
    config,
    curveType: defaultCurve,
    animationType: defaultAnimation,
    isLoading,
    selectedDataKey,
    selectDataKey
  } = useLineChart();
  const id = useId().replace(/:/g, "");
  const shouldReduceMotion = useReducedMotion();

  // The root renders the skeleton line while loading
  if (isLoading) return null;

  const resolvedCurve = curveType ?? defaultCurve;
  const revealType: ChartAnimationType = shouldReduceMotion
    ? "none"
    : (animationType ?? defaultAnimation);
  const maskId = revealType === "none" ? undefined : `${id}-reveal-mask`;

  const isSelected = selectedDataKey === dataKey;
  const hasSelection = selectedDataKey !== null;
  const opacity = getOpacity(selectedDataKey, dataKey);

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
      <g key={dataKey}>
        {/* A wide transparent twin makes the thin line easy to click */}
        {isClickable && (
          <RechartsLine
            type={resolvedCurve}
            dataKey={dataKey}
            connectNulls={connectNulls}
            stroke="transparent"
            strokeWidth={15}
            dot={false}
            activeDot={false}
            isAnimationActive={false}
            legendType="none"
            tooltipType="none"
            style={{ cursor: "pointer" }}
            onClick={() => selectDataKey(isSelected ? null : dataKey)}
          />
        )}
        <RechartsLine
          type={resolvedCurve}
          dataKey={dataKey}
          connectNulls={connectNulls}
          strokeOpacity={opacity.stroke}
          stroke={`url(#${id}-colors-${dataKey})`}
          filter={glowing ? `url(#${id}-glow-${dataKey})` : undefined}
          dot={dot}
          activeDot={activeDot}
          strokeWidth={strokeWidth}
          strokeDasharray={getStrokeDasharray(enableBufferLine, isDashed)}
          shape={enableBufferLine ? bufferLineShape : undefined}
          // Recharts' own animation drew the line after the dots had popped in;
          // the reveal mask wipes stroke and dots in together instead.
          isAnimationActive={false}
          style={{
            ...(maskId ? { mask: `url(#${maskId})` } : {}),
            ...(isClickable ? { cursor: "pointer" } : {})
          }}
          onClick={() => {
            if (!isClickable) return;
            selectDataKey(isSelected ? null : dataKey);
          }}
          {...lineProps}>
          {isAnimatedDashed && !hasSelection && <AnimatedDashedStroke />}
        </RechartsLine>
      </g>
      <defs>
        {revealType !== "none" && <ChartRevealMask id={id} type={revealType} />}
        <ChartColorGradient
          id={`${id}-colors-${dataKey}`}
          dataKey={dataKey}
          config={config}
        />
        {glowing && <GlowFilter id={id} dataKey={dataKey} />}
      </defs>
    </>
  );
}

export interface LineDotProps {
  variant?: DotVariant; // visual style of the point marker
}

/**
 * Declares a resting point marker for the <Line /> it is composed inside. It
 * renders nothing on its own; the parent <Line /> wires it into Recharts.
 */
const Dot: FC<LineDotProps> = () => null;

/** Declares the hovered point marker for the <Line /> it is composed inside. */
const ActiveDot: FC<LineDotProps> = () => null;

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
  const { isLoading } = useLineChart();

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
 * The vertical value axis, with flat default styling. Every Recharts YAxis
 * prop passes through. Hidden while the chart is loading.
 */
function YAxis({
  tickLine = false,
  axisLine = false,
  tickMargin = 8,
  minTickGap = 8,
  width = "auto",
  ...props
}: ComponentProps<typeof RechartsYAxis>) {
  const { isLoading } = useLineChart();

  if (isLoading) return null;

  return (
    <RechartsYAxis
      tickLine={tickLine}
      axisLine={axisLine}
      tickMargin={tickMargin}
      minTickGap={minTickGap}
      width={width}
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

export interface LineTooltipProps {
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
}: LineTooltipProps) {
  const { isLoading, selectedDataKey } = useLineChart();

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

export interface LineLegendProps {
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
}: LineLegendProps) {
  const { selectedDataKey, selectDataKey } = useLineChart();

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
    ? { stroke: 1, dot: 1 }
    : { stroke: 0.3, dot: 0.3 };

// The buffer line manages its own dashes
const getStrokeDasharray = (enableBufferLine: boolean, isDashed: boolean) => {
  if (enableBufferLine) return undefined;

  return isDashed ? "5 5" : undefined;
};

// Pulls <Dot /> and <ActiveDot /> out of a line's children into Recharts dot
// slots. The resting dot shares the reveal mask so it wipes in with the line.
const resolveDots = (
  children: ReactNode,
  id: string,
  dataKey: string,
  dotOpacity: number,
  maskId: string | undefined
): { dot: LineDotProp; activeDot: LineActiveDotProp } => {
  let dot: LineDotProp = false;
  let activeDot: LineActiveDotProp = false;

  Children.forEach(children, child => {
    if (!isValidElement(child)) return;

    const { variant } = (child as ReactElement<LineDotProps>).props;
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
// Buffer line
// ─────────────────────────────────────────────────────────────────────────────

// Renders the last segment dashed and the rest solid. A ref callback measures
// the drawn path, so the split lands correctly for any curve type.
type CurvePoint = NonNullable<NonNullable<CurveProps["points"]>[number]>;
type DrawableCurvePoint = CurvePoint & { x: number; y: number };

// Component tsconfigs have no DOM lib; these are the DOM members used here.
interface MeasurablePath {
  getTotalLength: () => number;
  getPointAtLength: (length: number) => { x: number };
  setAttribute: (name: string, value: string) => void;
}
interface PathContainer {
  querySelector: (selector: string) => MeasurablePath | null;
}

const isDrawableCurvePoint = (point: CurvePoint): point is DrawableCurvePoint =>
  typeof point.x === "number" && typeof point.y === "number";

const BUFFER_DASH_SIZE = 4;
const BUFFER_GAP_SIZE = 3;

// Binary-searches the path for the length at which its x reaches `targetX`
const findLengthAtX = (
  path: MeasurablePath,
  totalLength: number,
  targetX: number
): number => {
  let lo = 0;
  let hi = totalLength;
  // ~0.5px precision is plenty for a dasharray split
  while (hi - lo > 0.5) {
    const mid = (lo + hi) / 2;
    if (path.getPointAtLength(mid).x < targetX) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
};

const bufferLineShape = (props: CurveProps) => {
  const { points, ...rest } = props;
  const drawablePoints = points?.filter(isDrawableCurvePoint) ?? [];

  if (drawablePoints.length < 2) {
    return <Curve {...props} />;
  }

  // x of the second-to-last point, where solid meets dashed
  const splitX = drawablePoints[drawablePoints.length - 2]!.x;

  // Ref callbacks run during commit, before paint, so the line never flashes
  // undashed.
  const gRef = (g: SVGGElement | null) => {
    const path = (g as PathContainer | null)?.querySelector("path");
    if (!path) return;

    const totalLength = path.getTotalLength();
    const solidLength = findLengthAtX(path, totalLength, splitX);
    const lastSegmentLength = totalLength - solidLength;

    // Solid run, then repeating dash-gap pairs for the buffer segment
    const reps =
      Math.ceil(lastSegmentLength / (BUFFER_DASH_SIZE + BUFFER_GAP_SIZE)) + 1;
    const dashedPart = Array.from(
      { length: reps },
      () => `${BUFFER_DASH_SIZE} ${BUFFER_GAP_SIZE}`
    ).join(" ");

    path.setAttribute("stroke-dasharray", `${solidLength} 0 ${dashedPart}`);
  };

  return (
    <g ref={gRef}>
      <Curve {...rest} points={drawablePoints} />
    </g>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Style definitions — one set per <Line />, scoped to its unique id
// ─────────────────────────────────────────────────────────────────────────────

interface StyleProps {
  id: string; // unique id of the owning <Line />
  dataKey: string; // series key the style belongs to
}

const AnimatedDashedStroke = () => (
  <>
    <animate
      attributeName="stroke-dasharray"
      values="5 5; 0 5; 5 5"
      dur="1s"
      repeatCount="indefinite"
      keyTimes="0;0.5;1"
    />
    <animate
      attributeName="stroke-dashoffset"
      values="0; -10"
      dur="1s"
      repeatCount="indefinite"
      keyTimes="0;1"
    />
  </>
);

/** Soft outer glow filter applied to a glowing line. */
const GlowFilter = ({ id, dataKey }: StyleProps) => (
  <filter
    id={`${id}-glow-${dataKey}`}
    x="-50%"
    y="-50%"
    width="200%"
    height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
    <feColorMatrix
      in="blur"
      type="matrix"
      values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 2 0"
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

/** The skeleton line the root renders in place of the real lines. */
const LoadingLine = ({
  chartId,
  curveType,
  onShimmerExit
}: {
  chartId: string;
  curveType: CurveType;
  onShimmerExit: () => void;
}) => (
  <>
    <RechartsLine
      type={curveType}
      dataKey={LOADING_LINE_DATA_KEY}
      min={0}
      max={100}
      stroke={LOADING_COLOR}
      strokeOpacity={0.5}
      isAnimationActive={false}
      legendType="none"
      tooltipType="none"
      activeDot={false}
      dot={false}
      strokeWidth={STROKE_WIDTH}
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
LineChart.Line = Line;
LineChart.Dot = Dot;
LineChart.ActiveDot = ActiveDot;
LineChart.XAxis = XAxis;
LineChart.YAxis = YAxis;
LineChart.Grid = Grid;
LineChart.Tooltip = Tooltip;
LineChart.Legend = Legend;
LineChart.Brush = ChartBrush;

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
import {
  CartesianGrid,
  Bar as RechartsBar,
  ComposedChart as RechartsComposedChart,
  Line as RechartsLine,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis
} from "recharts";

const STROKE_WIDTH = 2;
const DEFAULT_BAR_RADIUS = 4;
const LOADING_DATA_KEY = "loading";
const LOADING_ANIMATION_DURATION = 2000; // in milliseconds
const REVEAL_EASE: [number, number, number, number] = [0, 0.7, 0.5, 1];
const BAR_GROW_DURATION = 0.5; // per-bar grow-in length, in seconds
const BAR_STAGGER = 0.05; // delay between consecutive bars, in seconds
// Skeleton color; kept faint by the loading bar's fill opacity
const LOADING_COLOR = "var(--ink)";
const OPACITY_TRANSITION = { transition: "opacity 200ms" };

type CurveType = ComponentProps<typeof RechartsLine>["type"];
type LineDotProp = ComponentProps<typeof RechartsLine>["dot"];
type LineActiveDotProp = ComponentProps<typeof RechartsLine>["activeDot"];
export type ComposedStrokeVariant = "solid" | "dashed" | "animated-dashed";
export type ComposedBarVariant =
  | "default"
  | "hatched"
  | "duotone"
  | "duotone-reverse"
  | "gradient"
  | "stripped";

// ─────────────────────────────────────────────────────────────────────────────
// Shared context
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Shared state for every part of the chart, so <Bar />, <Line />, <XAxis />,
 * <Legend /> and friends can read it without prop drilling.
 */
interface ComposedChartContextValue {
  config: ChartConfig;
  curveType: CurveType; // default curve each <Line /> inherits
  // Default intro: lines wipe in along this direction, bars grow up from
  // their baseline staggered in the same order
  animationType: ChartAnimationType;
  introStartedAt: number; // timestamp the chart mounted — anchors the one-shot intro
  dataLength: number; // number of rows currently rendered
  isLoading: boolean;
  hoveredIndex: number | null; // data index under the pointer
  selectedDataKey: string | null;
  selectDataKey: (dataKey: string | null) => void;
}

const ComposedChartContext = createContext<ComposedChartContextValue | null>(
  null
);

function useComposedChart() {
  const context = use(ComposedChartContext);

  if (!context) {
    throw new Error(
      "Composed chart parts (<Bar />, <Line />, <XAxis />, …) must be used within <ComposedChart />"
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

export type ComposedChartProps<
  TData extends Record<string, unknown>,
  TConfig extends Record<string, ChartConfig[string]>
> = Omit<ChartContainerProps, "config" | "children" | "footer"> & {
  config: TConfig & ValidateConfigKeys<TData, TConfig>; // series colors + labels for bars and lines
  data: TData[];
  children: ReactNode; // composed parts — <Bar />, <Line />, <XAxis />, <Legend />, …
  chartProps?: ComponentProps<typeof RechartsComposedChart>; // escape hatch for the raw Recharts chart
  curveType?: CurveType; // default curve for every <Line />
  animationType?: ChartAnimationType; // default intro for every <Bar /> and <Line />
  barGap?: number; // gap between bars sharing a category
  barCategoryGap?: number; // gap between bar categories
  defaultSelectedDataKey?: string | null;
  onSelectionChange?: (selectedDataKey: string | null) => void;
  isLoading?: boolean; // shows the animated loading skeleton
  loadingBars?: number; // number of bars in the loading skeleton
  xDataKey?: keyof TData & string; // x-axis key — only needed for the <Brush /> labels
};

/**
 * A composable chart that draws bars and lines on shared axes. The root owns
 * the data, the shared state, the loading skeleton and the optional zoom
 * brush; axes, grid, tooltip, legend, bars and lines are composed as children.
 */
export function ComposedChart<
  TData extends Record<string, unknown>,
  TConfig extends Record<string, ChartConfig[string]>
>({
  config,
  data,
  children,
  chartProps,
  curveType = "linear",
  animationType = "left-to-right",
  barGap,
  barCategoryGap,
  defaultSelectedDataKey = null,
  onSelectionChange,
  isLoading = false,
  loadingBars = 12,
  xDataKey,
  ...props
}: ComposedChartProps<TData, TConfig>) {
  const chartId = useId().replace(/:/g, "");
  // Anchors the intro to a fixed moment so it plays exactly once — re-renders
  // and Recharts remounts read elapsed time from here instead of replaying.
  const [introStartedAt] = useState(() => Date.now());
  const [selectedDataKey, setSelectedDataKey] = useState<string | null>(
    defaultSelectedDataKey
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { loadingData, onShimmerExit } = useLoadingData(
    isLoading,
    loadingBars,
    20,
    80
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

  const contextValue = useMemo<ComposedChartContextValue>(
    () => ({
      config,
      curveType,
      animationType,
      introStartedAt,
      dataLength: displayData.length,
      isLoading,
      hoveredIndex,
      selectedDataKey,
      selectDataKey
    }),
    [
      config,
      curveType,
      animationType,
      introStartedAt,
      displayData.length,
      isLoading,
      hoveredIndex,
      selectedDataKey,
      selectDataKey
    ]
  );

  return (
    <ComposedChartContext value={contextValue}>
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
        <RechartsComposedChart
          id={chartId}
          accessibilityLayer
          data={isLoading ? loadingData : displayData}
          barGap={barGap}
          barCategoryGap={barCategoryGap}
          // EvilCharts only ever reset the hovered index, so hover highlight
          // never engaged; track the active column here.
          onMouseMove={state =>
            setHoveredIndex(
              state.activeTooltipIndex == null
                ? null
                : Number(state.activeTooltipIndex)
            )
          }
          onMouseLeave={() => setHoveredIndex(null)}
          {...chartProps}>
          {chartChildren}
          {isLoading && (
            <LoadingBar
              chartId={chartId}
              barRadius={DEFAULT_BAR_RADIUS}
              onShimmerExit={onShimmerExit}
            />
          )}
        </RechartsComposedChart>
      </ChartContainer>
    </ComposedChartContext>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Composable parts
// ─────────────────────────────────────────────────────────────────────────────

export interface ComposedBarProps {
  dataKey: string; // series key — must exist on the data and config
  variant?: ComposedBarVariant; // fill style for this bar only
  radius?: number; // corner radius of the bar in pixels
  glow?: boolean; // applies a soft neon glow to this bar
  animationType?: ChartAnimationType; // grow-in order — falls back to the chart default
  isClickable?: boolean; // lets this bar be selected by clicking it
  enableHoverHighlight?: boolean; // dims this bar when another column is hovered
  barProps?: ComponentProps<typeof RechartsBar>; // escape hatch for raw Recharts Bar props
}

/**
 * A single bar series. Each <Bar /> generates its own gradient and pattern
 * definitions under a unique id, so any number of bars — each with its own
 * variant, glow and clickability — can share a chart.
 */
function Bar({
  dataKey,
  variant = "default",
  radius = DEFAULT_BAR_RADIUS,
  glow = false,
  animationType,
  isClickable = false,
  enableHoverHighlight = false,
  barProps
}: ComposedBarProps) {
  const {
    config,
    animationType: defaultAnimation,
    introStartedAt,
    dataLength,
    isLoading,
    hoveredIndex,
    selectedDataKey,
    selectDataKey
  } = useComposedChart();
  const id = useId().replace(/:/g, "");
  const shouldReduceMotion = useReducedMotion();

  // The root renders the skeleton bar while loading
  if (isLoading) return null;

  const isSelected = selectedDataKey === null || selectedDataKey === dataKey;
  const filter = glow ? `url(#${id}-glow)` : undefined;
  const revealType: ChartAnimationType = shouldReduceMotion
    ? "none"
    : (animationType ?? defaultAnimation);

  return (
    <>
      <RechartsBar
        dataKey={dataKey}
        fill={`url(#${id}-bar-colors)`}
        radius={radius}
        // Recharts' own animation is disabled; every bar grows in from its
        // baseline through the staggered motion shape instead.
        isAnimationActive={false}
        style={
          isClickable || enableHoverHighlight
            ? { cursor: "pointer" }
            : undefined
        }
        shape={(props: unknown) => {
          const barShapeProps = props as BarShapeProps;
          const index =
            typeof barShapeProps.index === "number" ? barShapeProps.index : -1;

          return (
            <CustomBar
              {...barShapeProps}
              id={id}
              variant={variant}
              barRadius={radius}
              filter={filter}
              fillOpacity={getBarOpacity({
                isClickable,
                isSelected,
                selectedDataKey,
                enableHoverHighlight,
                hoveredIndex,
                index
              })}
              isClickable={isClickable}
              enableHoverHighlight={enableHoverHighlight}
              animationType={revealType}
              dataLength={dataLength}
              introStartedAt={introStartedAt}
              onClick={() => {
                if (!isClickable) return;
                selectDataKey(selectedDataKey === dataKey ? null : dataKey);
              }}
            />
          );
        }}
        {...barProps}
      />
      <defs>
        <ChartColorGradient
          id={`${id}-bar-colors`}
          dataKey={dataKey}
          config={config}
          x2="0"
          y2="1"
        />
        {variant === "hatched" && <HatchedPattern id={id} />}
        {variant === "duotone" && (
          <DuotonePattern
            id={id}
            dataKey={dataKey}
            config={config}
            name="duotone"
            left={0.4}
            right={1}
          />
        )}
        {variant === "duotone-reverse" && (
          <DuotonePattern
            id={id}
            dataKey={dataKey}
            config={config}
            name="duotone-reverse"
            left={1}
            right={0.4}
          />
        )}
        {variant === "gradient" && (
          <FadePattern id={id} name="gradient" from={[20, 1]} to={[90, 0]} />
        )}
        {variant === "stripped" && (
          <FadePattern
            id={id}
            name="stripped"
            from={[0, 0.4]}
            to={[100, 0.1]}
          />
        )}
        {glow && <GlowFilter id={id} region={100} blur={8} glowOpacity={0.5} />}
      </defs>
    </>
  );
}

export interface ComposedLineProps {
  dataKey: string; // series key — must exist on the data and config
  strokeVariant?: ComposedStrokeVariant;
  curveType?: CurveType; // falls back to the chart default
  animationType?: ChartAnimationType; // falls back to the chart default
  connectNulls?: boolean; // join segments across null/missing values
  glow?: boolean; // applies a soft neon glow to this line
  isClickable?: boolean; // lets this line be selected by clicking it
  children?: ReactNode; // optional <Dot /> and <ActiveDot /> composition
  lineProps?: ComponentProps<typeof RechartsLine>; // escape hatch for raw Recharts Line props
}

/**
 * A single line series. Each <Line /> generates its own color gradient and
 * glow filter under a unique id, so any number of lines can share a chart.
 * Compose <Dot /> and <ActiveDot /> inside it to add point markers.
 */
function Line({
  dataKey,
  strokeVariant = "solid",
  curveType,
  animationType,
  connectNulls = false,
  glow = false,
  isClickable = false,
  children,
  lineProps
}: ComposedLineProps) {
  const {
    config,
    curveType: defaultCurve,
    animationType: defaultAnimation,
    isLoading,
    selectedDataKey,
    selectDataKey
  } = useComposedChart();
  const id = useId().replace(/:/g, "");
  const shouldReduceMotion = useReducedMotion();

  // The root renders the skeleton bar while loading
  if (isLoading) return null;

  const resolvedCurve = curveType ?? defaultCurve;
  const revealType: ChartAnimationType = shouldReduceMotion
    ? "none"
    : (animationType ?? defaultAnimation);
  const maskId = revealType === "none" ? undefined : `${id}-reveal-mask`;

  const opacity = getOpacity(selectedDataKey, dataKey);
  const hasSelection = selectedDataKey !== null;
  const filter = glow ? `url(#${id}-glow)` : undefined;

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
      {/* A wide transparent twin gives the thin stroke a usable click target */}
      {isClickable && (
        <RechartsLine
          type={resolvedCurve}
          dataKey={dataKey}
          connectNulls={connectNulls}
          stroke="transparent"
          strokeWidth={20}
          dot={false}
          activeDot={false}
          isAnimationActive={false}
          legendType="none"
          tooltipType="none"
          style={{ cursor: "pointer" }}
          onClick={() =>
            selectDataKey(selectedDataKey === dataKey ? null : dataKey)
          }
        />
      )}
      <RechartsLine
        type={resolvedCurve}
        dataKey={dataKey}
        connectNulls={connectNulls}
        strokeOpacity={opacity.stroke}
        stroke={`url(#${id}-line-colors-${dataKey})`}
        filter={filter}
        dot={dot}
        activeDot={activeDot}
        strokeWidth={STROKE_WIDTH}
        strokeDasharray={isDashed ? "5 5" : undefined}
        // Recharts' own animation is disabled; the reveal mask wipes stroke
        // and dots in together.
        isAnimationActive={false}
        style={{
          ...(maskId ? { mask: `url(#${maskId})` } : {}),
          ...(isClickable ? { cursor: "pointer", pointerEvents: "none" } : {})
        }}
        {...lineProps}>
        {isAnimatedDashed && !hasSelection && <AnimatedDashedStroke />}
      </RechartsLine>
      <defs>
        {revealType !== "none" && <ChartRevealMask id={id} type={revealType} />}
        <ChartColorGradient
          id={`${id}-line-colors-${dataKey}`}
          dataKey={dataKey}
          config={config}
        />
        {glow && <GlowFilter id={id} region={50} blur={10} glowOpacity={2} />}
      </defs>
    </>
  );
}

export interface ComposedDotProps {
  variant?: DotVariant; // visual style of the point marker
}

/**
 * Declares a resting point marker for the <Line /> it is composed inside. It
 * renders nothing on its own; the parent <Line /> wires it into Recharts.
 */
const Dot: FC<ComposedDotProps> = () => null;

/** Declares the hovered point marker for the <Line /> it is composed inside. */
const ActiveDot: FC<ComposedDotProps> = () => null;

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
  const { isLoading } = useComposedChart();

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
 * The vertical value axis. Every Recharts YAxis prop passes through. Hidden
 * while the chart is loading.
 */
function YAxis({
  tickLine = false,
  axisLine = false,
  tickMargin = 8,
  minTickGap = 8,
  width = "auto",
  ...props
}: ComponentProps<typeof RechartsYAxis>) {
  const { isLoading } = useComposedChart();

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

export interface ComposedTooltipProps {
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
}: ComposedTooltipProps) {
  const { isLoading, selectedDataKey } = useComposedChart();

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

export interface ComposedLegendProps {
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
}: ComposedLegendProps) {
  const { selectedDataKey, selectDataKey } = useComposedChart();

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

// Dims a line only when another series is selected
const getOpacity = (selectedDataKey: string | null, dataKey: string) =>
  selectedDataKey === null || selectedDataKey === dataKey
    ? { stroke: 1, dot: 1 }
    : { stroke: 0.3, dot: 0.3 };

// Bar fill opacity from both the click selection and the hovered column
const getBarOpacity = ({
  isClickable,
  isSelected,
  selectedDataKey,
  enableHoverHighlight,
  hoveredIndex,
  index
}: {
  isClickable: boolean;
  isSelected: boolean;
  selectedDataKey: string | null;
  enableHoverHighlight: boolean;
  hoveredIndex: number | null;
  index: number;
}) => {
  const clickOpacity =
    isClickable && selectedDataKey !== null ? (isSelected ? 1 : 0.15) : 1;

  if (enableHoverHighlight && hoveredIndex !== null) {
    return hoveredIndex === index ? clickOpacity : clickOpacity * 0.3;
  }

  return clickOpacity;
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

    const { variant } = (child as ReactElement<ComposedDotProps>).props;
    if (child.type === Dot) {
      dot = (
        <ChartDot
          type={variant}
          dataKey={dataKey}
          chartId={`${id}-line`}
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
          chartId={`${id}-line`}
          fillOpacity={dotOpacity}
        />
      );
    }
  });

  return { dot, activeDot };
};

// ─────────────────────────────────────────────────────────────────────────────
// Custom bar shape
// ─────────────────────────────────────────────────────────────────────────────

// Props Recharts passes to a bar's custom shape renderer
interface BarShapeProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
  fillOpacity?: number;
  dataKey?: string;
  index?: number;
  background?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
  [key: string]: unknown;
}

type CustomBarProps = {
  id: string; // unique id of the owning <Bar />
  variant: ComposedBarVariant;
  barRadius: number;
  filter?: string; // optional glow filter reference
  isClickable?: boolean;
  enableHoverHighlight?: boolean;
  animationType?: ChartAnimationType; // grow-in order for this bar
  dataLength?: number; // total bars in the series — drives the stagger
  introStartedAt?: number; // chart-mount timestamp anchoring the one-shot grow-in
  onClick?: () => void;
} & BarShapeProps;

// Renders a single bar rectangle with its variant fill, glow and hit area
const CustomBar = ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  fillOpacity = 1,
  background,
  index = -1,
  id,
  variant,
  barRadius,
  filter,
  isClickable,
  enableHoverHighlight,
  animationType = "none",
  dataLength = 0,
  introStartedAt = 0,
  onClick
}: CustomBarProps) => {
  const cursorStyle =
    isClickable || enableHoverHighlight ? { cursor: "pointer" } : undefined;
  // Motion grow-in props for this bar — null once it has finished
  const grow = getBarGrowAnimation(
    animationType,
    index,
    dataLength,
    introStartedAt
  );
  const fill =
    variant === "default" ? `url(#${id}-bar-colors)` : `url(#${id}-${variant})`;

  // Full-height invisible rect — keeps the column hoverable even mid grow-in
  const hitArea = enableHoverHighlight ? (
    <rect
      x={background?.x ?? x}
      y={background?.y ?? y}
      width={background?.width ?? width}
      height={background?.height ?? height}
      fill="transparent"
    />
  ) : null;

  if (variant === "stripped") {
    return (
      <g style={cursorStyle} onClick={onClick}>
        <motion.g
          {...grow}
          filter={filter}
          opacity={fillOpacity}
          style={{ ...grow?.style, ...OPACITY_TRANSITION }}>
          <rect x={x} y={y} width={width} height={height} fill={fill} />
          <rect
            x={x}
            y={y}
            width={width}
            height={2}
            fill={`url(#${id}-bar-colors)`}
          />
        </motion.g>
        {hitArea}
      </g>
    );
  }

  return (
    <g style={cursorStyle} onClick={onClick}>
      <motion.g {...grow}>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          rx={barRadius}
          ry={barRadius}
          fill={fill}
          opacity={fillOpacity}
          filter={filter}
          style={OPACITY_TRANSITION}
        />
      </motion.g>
      {hitArea}
    </g>
  );
};

/**
 * The motion grow-in for a single bar, or `null` when it renders statically
 * (`"none"`, an unknown index, or a bar that has already finished growing).
 *
 * The intro is anchored to `introStartedAt` rather than to component mount:
 * Recharts remounts every bar whenever the chart re-renders, so a mount-based
 * animation would replay endlessly. Reading elapsed time makes it a one-shot —
 * a bar caught mid-grow resumes from where it should already be.
 */
const getBarGrowAnimation = (
  animationType: ChartAnimationType,
  index: number,
  dataLength: number,
  introStartedAt: number
) => {
  if (animationType === "none" || index < 0 || dataLength <= 0) return null;

  const lastIndex = dataLength - 1;
  const center = lastIndex / 2;

  // How many bars this one waits behind before it starts growing
  let step: number;
  switch (animationType) {
    case "right-to-left":
      step = lastIndex - index;
      break;
    case "center-out":
      step = Math.abs(index - center);
      break;
    case "edges-in":
      step = center - Math.abs(index - center);
      break;
    case "left-to-right":
      step = index;
  }

  const startMs = step * BAR_STAGGER * 1000;
  const durationMs = BAR_GROW_DURATION * 1000;
  const endMs = startMs + durationMs;
  const elapsed = Date.now() - introStartedAt;

  if (elapsed >= endMs) return null;

  // Resume from wherever this bar should already be (0 before it starts)
  const from = elapsed <= startMs ? 0 : (elapsed - startMs) / durationMs;

  return {
    initial: { scaleY: from },
    animate: { scaleY: 1 },
    transition: {
      duration: (endMs - Math.max(elapsed, startMs)) / 1000,
      ease: REVEAL_EASE,
      delay: Math.max(0, startMs - elapsed) / 1000
    },
    style: { originY: 1 } // grow upward from the baseline
  };
};

// ─────────────────────────────────────────────────────────────────────────────
// Style definitions — one set per <Bar /> / <Line />, scoped to its unique id
// ─────────────────────────────────────────────────────────────────────────────

// Animated dashed-stroke effect, rendered as a child of the Recharts Line
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

/** Hatched diagonal-stripe fill for a bar, masked from the series gradient. */
const HatchedPattern = ({ id }: { id: string }) => (
  <>
    <pattern
      id={`${id}-hatched-mask-pattern`}
      x="0"
      y="0"
      width="5"
      height="5"
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(-45)">
      <rect width="5" height="5" fill="white" fillOpacity={0.3} />
      <rect width="1.5" height="5" fill="white" fillOpacity={1} />
    </pattern>
    <mask id={`${id}-hatched-mask`}>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-hatched-mask-pattern)`}
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
        fill={`url(#${id}-bar-colors)`}
        mask={`url(#${id}-hatched-mask)`}
      />
    </pattern>
  </>
);

/**
 * Two-tone fill that splits each bar into halves at `left` and `right`
 * opacity: `duotone` (light half first) and `duotone-reverse`.
 */
const DuotonePattern = ({
  id,
  dataKey,
  config,
  name,
  left,
  right
}: {
  id: string;
  dataKey: string;
  config: ChartConfig;
  name: string;
  left: number;
  right: number;
}) => (
  <>
    <linearGradient
      id={`${id}-${name}-mask-gradient`}
      gradientUnits="objectBoundingBox"
      x1="0"
      y1="0"
      x2="1"
      y2="0">
      <stop offset="50%" stopColor="white" stopOpacity={left} />
      <stop offset="50%" stopColor="white" stopOpacity={right} />
    </linearGradient>
    <ChartColorGradient
      id={`${id}-${name}-colors`}
      dataKey={dataKey}
      config={config}
      gradientUnits="objectBoundingBox"
      x2="0"
      y2="1"
    />
    <mask id={`${id}-${name}-mask`} maskContentUnits="objectBoundingBox">
      <rect
        x="0"
        y="0"
        width="1"
        height="1"
        fill={`url(#${id}-${name}-mask-gradient)`}
      />
    </mask>
    <pattern
      id={`${id}-${name}`}
      patternUnits="objectBoundingBox"
      patternContentUnits="objectBoundingBox"
      width="1"
      height="1">
      <rect
        x="0"
        y="0"
        width="1"
        height="1"
        fill={`url(#${id}-${name}-colors)`}
        mask={`url(#${id}-${name}-mask)`}
      />
    </pattern>
  </>
);

/**
 * The bar gradient masked by a vertical fade between two `[offset %, opacity]`
 * stops: `gradient` fades out toward the baseline, `stripped` stays faint
 * under the solid top strip drawn by `CustomBar`.
 */
const FadePattern = ({
  id,
  name,
  from,
  to
}: {
  id: string;
  name: string;
  from: [number, number];
  to: [number, number];
}) => (
  <>
    <linearGradient
      id={`${id}-${name}-mask-gradient`}
      x1="0"
      y1="0"
      x2="0"
      y2="1">
      <stop offset={`${from[0]}%`} stopColor="white" stopOpacity={from[1]} />
      <stop offset={`${to[0]}%`} stopColor="white" stopOpacity={to[1]} />
    </linearGradient>
    <mask id={`${id}-${name}-mask`}>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-${name}-mask-gradient)`}
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
        fill={`url(#${id}-bar-colors)`}
        mask={`url(#${id}-${name}-mask)`}
      />
    </pattern>
  </>
);

/**
 * Soft outer glow: the blurred source at `glowOpacity` under the original.
 * `region` is how far (in %) the filter extends past the element.
 */
const GlowFilter = ({
  id,
  region,
  blur,
  glowOpacity
}: {
  id: string;
  region: number;
  blur: number;
  glowOpacity: number;
}) => (
  <filter
    id={`${id}-glow`}
    x={`-${region}%`}
    y={`-${region}%`}
    width={`${100 + region * 2}%`}
    height={`${100 + region * 2}%`}>
    <feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="blur" />
    <feColorMatrix
      in="blur"
      type="matrix"
      values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${glowOpacity} 0`}
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

/** The skeleton bar the root renders in place of the real bars and lines. */
const LoadingBar = ({
  chartId,
  barRadius,
  onShimmerExit
}: {
  chartId: string;
  barRadius: number;
  onShimmerExit: () => void;
}) => (
  <>
    <RechartsBar
      dataKey={LOADING_DATA_KEY}
      fill={LOADING_COLOR}
      fillOpacity={0.15}
      radius={barRadius}
      isAnimationActive={false}
      legendType="none"
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

  // Tracks the last x value to detect the exit threshold crossing
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
ComposedChart.Bar = Bar;
ComposedChart.Line = Line;
ComposedChart.Dot = Dot;
ComposedChart.ActiveDot = ActiveDot;
ComposedChart.XAxis = XAxis;
ComposedChart.YAxis = YAxis;
ComposedChart.Grid = Grid;
ComposedChart.Tooltip = Tooltip;
ComposedChart.Legend = Legend;
ComposedChart.Brush = ChartBrush;

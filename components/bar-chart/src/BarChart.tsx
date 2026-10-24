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
  ChartAnimationType,
  ChartConfig,
  ChartContainerProps,
  ChartLegendVariant,
  TooltipRoundness,
  TooltipVariant
} from "@cyclone-ui/chart";
import {
  ChartBackground,
  ChartBrush,
  ChartBrushView,
  ChartColorGradient,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  getEasedGradientStops,
  LoadingIndicator,
  useChartBrush,
  useChartBrushSlot,
  useLoadingData
} from "@cyclone-ui/chart";
import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";
import {
  createContext,
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
  BarChart as RechartsBarChart,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis,
  Rectangle
} from "recharts";

const DEFAULT_BAR_RADIUS = 2;
const LOADING_BAR_DATA_KEY = "loading";
const LOADING_BARS = 12;
const LOADING_ANIMATION_DURATION = 2000; // in milliseconds
const STACK_ID = "cyclone-stacked";
const BAR_GROW_DURATION = 0.5; // per-bar grow-in length, in seconds
const BAR_STAGGER = 0.05; // delay between consecutive bars, in seconds
const REVEAL_EASE: [number, number, number, number] = [0, 0.7, 0.5, 1];
// Skeleton color; kept faint by the loading bar's fill opacity
const LOADING_COLOR = "var(--ink)";

type RectRadius = ComponentProps<typeof Rectangle>["radius"];
export type BarVariant =
  | "default"
  | "hatched"
  | "duotone"
  | "duotone-reverse"
  | "gradient"
  | "stripped";
export type BarStackType = "default" | "stacked" | "percent";
export type BarLayout = "vertical" | "horizontal";

// ─────────────────────────────────────────────────────────────────────────────
// Shared context
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Shared state for every part of the chart, so <Bar />, <XAxis />, <Legend />
 * and friends can read it without prop drilling.
 */
interface BarChartContextValue {
  config: ChartConfig;
  isStacked: boolean;
  isHorizontal: boolean; // whether bars are laid out horizontally
  isLoading: boolean;
  barRadius: number; // default corner radius each <Bar /> inherits
  animationType: ChartAnimationType; // default grow-in order each <Bar /> inherits
  introStartedAt: number; // timestamp the chart mounted — anchors the one-shot grow-in
  dataLength: number; // number of rows currently rendered
  selectedDataKey: string | null;
  selectDataKey: (dataKey: string | null) => void;
  isMouseInChart: boolean;
}

const BarChartContext = createContext<BarChartContextValue | null>(null);

function useBarChart() {
  const context = use(BarChartContext);

  if (!context) {
    throw new Error(
      "Bar chart parts (<Bar />, <XAxis />, …) must be used within <BarChart />"
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

export type BarChartProps<
  TData extends Record<string, unknown>,
  TConfig extends Record<string, ChartConfig[string]>
> = Omit<ChartContainerProps, "config" | "children" | "footer"> & {
  config: TConfig & ValidateConfigKeys<TData, TConfig>; // series colors + labels
  data: TData[];
  children: ReactNode; // composed parts — <Bar />, <XAxis />, <Legend />, …
  chartProps?: ComponentProps<typeof RechartsBarChart>; // escape hatch for the raw Recharts chart
  stackType?: BarStackType; // how multiple bars combine
  layout?: BarLayout; // orientation of the bars
  barRadius?: number; // default corner radius for every <Bar />
  /**
   * Default grow-in order for every <Bar />. Every bar grows from its baseline
   * (bottom when vertical, left when horizontal) in this stagger order.
   * `"none"` opts out; the OS "reduce motion" setting falls back to it.
   */
  animationType?: ChartAnimationType;
  barGap?: number; // gap between bars within the same category
  barCategoryGap?: number; // gap between categories of bars
  backgroundVariant?: BackgroundVariant; // pattern drawn behind the chart
  defaultSelectedDataKey?: string | null;
  onSelectionChange?: (selectedDataKey: string | null) => void;
  isLoading?: boolean; // shows the animated loading skeleton
  loadingBars?: number; // number of bars in the loading skeleton
  xDataKey?: keyof TData & string; // x-axis key — only needed for the <Brush /> labels
};

/**
 * A composable bar chart. The root owns the data, the shared state, the
 * loading skeleton and the optional zoom brush; axes, grid, tooltip, legend
 * and the bars themselves are composed as children.
 */
export function BarChart<
  TData extends Record<string, unknown>,
  TConfig extends Record<string, ChartConfig[string]>
>({
  config,
  data,
  children,
  chartProps,
  stackType = "default",
  layout = "vertical",
  barRadius = DEFAULT_BAR_RADIUS,
  animationType = "left-to-right",
  barGap,
  barCategoryGap,
  backgroundVariant,
  defaultSelectedDataKey = null,
  onSelectionChange,
  isLoading = false,
  loadingBars = LOADING_BARS,
  xDataKey,
  ...props
}: BarChartProps<TData, TConfig>) {
  const chartId = useId().replace(/:/g, "");
  // Stamped once, so re-renders and Recharts' bar remounts read the elapsed
  // time from here instead of replaying the grow-in.
  const [introStartedAt] = useState(() => Date.now());
  const [selectedDataKey, setSelectedDataKey] = useState<string | null>(
    defaultSelectedDataKey
  );
  const [isMouseInChart, setIsMouseInChart] = useState(false);
  const { loadingData, onShimmerExit } = useLoadingData(
    isLoading,
    loadingBars,
    20,
    80
  );
  const { visibleData, brushProps } = useChartBrush({ data });
  const { brush, chartChildren } = useChartBrushSlot(children);

  const isStacked = stackType === "stacked" || stackType === "percent";
  const isHorizontal = layout === "horizontal";
  const displayData = brush && !isLoading ? visibleData : data;

  const selectDataKey = useCallback(
    (newSelectedDataKey: string | null) => {
      setSelectedDataKey(newSelectedDataKey);
      onSelectionChange?.(newSelectedDataKey);
    },
    [onSelectionChange]
  );

  const contextValue = useMemo<BarChartContextValue>(
    () => ({
      config,
      isStacked,
      isHorizontal,
      isLoading,
      barRadius,
      animationType,
      introStartedAt,
      dataLength: displayData.length,
      selectedDataKey,
      selectDataKey,
      isMouseInChart
    }),
    [
      config,
      isStacked,
      isHorizontal,
      isLoading,
      barRadius,
      animationType,
      introStartedAt,
      displayData.length,
      selectedDataKey,
      selectDataKey,
      isMouseInChart
    ]
  );

  return (
    <BarChartContext value={contextValue}>
      <ChartContainer
        config={config}
        footer={
          brush &&
          !isLoading && (
            <ChartBrushView
              data={data}
              chartConfig={config}
              xDataKey={xDataKey}
              variant="bar"
              barRadius={barRadius}
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
        <RechartsBarChart
          id={chartId}
          accessibilityLayer
          layout={isHorizontal ? "vertical" : "horizontal"}
          data={isLoading ? loadingData : displayData}
          barGap={barGap}
          barCategoryGap={barCategoryGap}
          stackOffset={stackType === "percent" ? "expand" : undefined}
          onMouseEnter={() => setIsMouseInChart(true)}
          onMouseLeave={() => setIsMouseInChart(false)}
          {...chartProps}>
          {backgroundVariant && <ChartBackground variant={backgroundVariant} />}
          {chartChildren}
          {isLoading && (
            <LoadingBar chartId={chartId} onShimmerExit={onShimmerExit} />
          )}
        </RechartsBarChart>
      </ChartContainer>
    </BarChartContext>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Composable parts
// ─────────────────────────────────────────────────────────────────────────────

export interface BarProps {
  dataKey: string; // series key — must exist on the data and config
  variant?: BarVariant; // fill style for this bar only
  radius?: number; // corner radius — falls back to the chart default
  animationType?: ChartAnimationType; // grow-in order — falls back to the chart default
  isClickable?: boolean; // lets this bar be selected by clicking it
  enableHoverHighlight?: boolean; // dims the other bars while one is hovered
  glowing?: boolean; // applies a soft outer glow to this bar
  bufferBar?: boolean; // renders the last data point as a hatched "buffer" bar
  barProps?: ComponentProps<typeof RechartsBar>; // escape hatch for raw Recharts Bar props
}

/**
 * A single bar series. Each <Bar /> generates its own gradient, pattern and
 * filter definitions under a unique id, so any number of bars — each with its
 * own variant, radius, glow and clickability — can share a chart.
 */
function Bar({
  dataKey,
  variant = "default",
  radius,
  animationType,
  isClickable = false,
  enableHoverHighlight = false,
  glowing = false,
  bufferBar = false,
  barProps
}: BarProps) {
  const {
    config,
    isStacked,
    isHorizontal,
    isLoading,
    barRadius: defaultRadius,
    animationType: defaultAnimation,
    introStartedAt,
    dataLength,
    selectedDataKey,
    selectDataKey,
    isMouseInChart
  } = useBarChart();
  const id = useId().replace(/:/g, "");
  const shouldReduceMotion = useReducedMotion();

  // The root renders the skeleton bar while loading
  if (isLoading) return null;

  const resolvedRadius = radius ?? defaultRadius;
  const isSelected = selectedDataKey === dataKey;
  const revealType: ChartAnimationType = shouldReduceMotion
    ? "none"
    : (animationType ?? defaultAnimation);

  const customBarProps = {
    id,
    dataKey,
    variant,
    barRadius: resolvedRadius,
    glowing,
    bufferBar,
    isClickable,
    enableHoverHighlight,
    isMouseInChart,
    isHorizontal,
    introStartedAt,
    selectedDataKey,
    dataLength,
    onClick: () => {
      if (!isClickable) return;
      selectDataKey(isSelected ? null : dataKey);
    }
  };

  return (
    <>
      <RechartsBar
        dataKey={dataKey}
        stackId={isStacked ? STACK_ID : undefined}
        fill={`url(#${id}-colors-${dataKey})`}
        radius={resolvedRadius}
        // Recharts' own animation is off; each bar grows in from its baseline
        // through the staggered motion shape instead.
        isAnimationActive={false}
        style={
          isClickable || enableHoverHighlight
            ? { cursor: "pointer" }
            : undefined
        }
        shape={(shapeProps: unknown) => (
          <CustomBar
            {...(shapeProps as BarShapeProps)}
            {...customBarProps}
            animationType={revealType}
          />
        )}
        activeBar={(shapeProps: unknown) => (
          // The hovered bar must never re-run the grow-in
          <CustomBar
            {...(shapeProps as BarShapeProps)}
            {...customBarProps}
            animationType="none"
          />
        )}
        {...barProps}
      />
      <defs>
        <ChartColorGradient
          id={`${id}-colors-${dataKey}`}
          dataKey={dataKey}
          config={config}
          x2="0"
          y2="1"
        />
        {variant === "hatched" && (
          <HatchedPattern
            id={id}
            dataKey={dataKey}
            name="hatched"
            stripeWidth={1.5}
            baseOpacity={0.3}
          />
        )}
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
          <FadePattern
            id={id}
            dataKey={dataKey}
            name="gradient"
            from={[20, 1]}
            to={[90, 0]}
          />
        )}
        {variant === "stripped" && (
          <FadePattern
            id={id}
            dataKey={dataKey}
            name="stripped"
            from={[0, 0.2]}
            to={[100, 0.2]}
          />
        )}
        {bufferBar && (
          <HatchedPattern
            id={id}
            dataKey={dataKey}
            name="buffer-hatched"
            stripeWidth={1}
            baseOpacity={0}
          />
        )}
        {glowing && <GlowFilter id={id} dataKey={dataKey} />}
      </defs>
    </>
  );
}

/**
 * The category axis (numeric when the bars run horizontally), with flat
 * default styling. Every Recharts XAxis prop passes through. Hidden while the
 * chart is loading.
 */
function XAxis({
  tickLine = false,
  axisLine = false,
  tickMargin = 8,
  minTickGap = 8,
  type,
  ...props
}: ComponentProps<typeof RechartsXAxis>) {
  const { isLoading, isHorizontal } = useBarChart();

  if (isLoading) return null;

  return (
    <RechartsXAxis
      tickLine={tickLine}
      axisLine={axisLine}
      tickMargin={tickMargin}
      minTickGap={minTickGap}
      type={type ?? (isHorizontal ? "number" : "category")}
      {...props}
    />
  );
}

/**
 * The value axis (categorical when the bars run horizontally). Every Recharts
 * YAxis prop passes through. Hidden while the chart is loading.
 */
function YAxis({
  tickLine = false,
  axisLine = false,
  tickMargin = 8,
  minTickGap = 8,
  width = "auto",
  type,
  ...props
}: ComponentProps<typeof RechartsYAxis>) {
  const { isLoading, isHorizontal } = useBarChart();

  if (isLoading) return null;

  return (
    <RechartsYAxis
      tickLine={tickLine}
      axisLine={axisLine}
      tickMargin={tickMargin}
      minTickGap={minTickGap}
      width={width}
      type={type ?? (isHorizontal ? "category" : "number")}
      {...props}
    />
  );
}

/** Background grid lines; dashed and aligned to the value axis by default. */
function Grid({
  strokeDasharray = "3 3",
  vertical,
  horizontal,
  ...props
}: ComponentProps<typeof CartesianGrid>) {
  const { isHorizontal } = useBarChart();

  return (
    <CartesianGrid
      strokeDasharray={strokeDasharray}
      vertical={vertical ?? isHorizontal}
      horizontal={horizontal ?? !isHorizontal}
      {...props}
    />
  );
}

export interface BarTooltipProps {
  variant?: TooltipVariant;
  roundness?: TooltipRoundness;
  defaultIndex?: number; // data index shown with no hover
}

/** The hover tooltip; dims unselected series. Hidden while loading. */
function Tooltip({ variant, roundness, defaultIndex }: BarTooltipProps) {
  const { isLoading, selectedDataKey } = useBarChart();

  if (isLoading) return null;

  return (
    <ChartTooltip
      cursor={false}
      defaultIndex={defaultIndex}
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

export interface BarLegendProps {
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
}: BarLegendProps) {
  const { selectedDataKey, selectDataKey } = useBarChart();

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
// Custom bar shape
// ─────────────────────────────────────────────────────────────────────────────

// Raw geometry Recharts hands to a custom bar shape
interface BarShapeProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
  fillOpacity?: number;
  dataKey?: string;
  index?: number;
  [key: string]: unknown;
}

// Per-series config the <Bar /> threads into every CustomBar render
type CustomBarProps = {
  id: string;
  dataKey: string;
  variant: BarVariant;
  barRadius: number;
  glowing?: boolean;
  bufferBar?: boolean;
  isClickable?: boolean;
  enableHoverHighlight?: boolean;
  isMouseInChart?: boolean;
  isHorizontal?: boolean;
  animationType?: ChartAnimationType;
  introStartedAt?: number;
  selectedDataKey?: string | null;
  isActive?: boolean;
  dataLength?: number;
  onClick?: () => void;
} & BarShapeProps;

/**
 * Paints a bar with its series' variant fill, over an invisible rect of the
 * bar's full geometry that keeps it hoverable and clickable.
 */
const CustomBar = (props: CustomBarProps) => {
  const {
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    id,
    dataKey,
    variant,
    barRadius,
    glowing,
    bufferBar,
    isClickable,
    enableHoverHighlight,
    isMouseInChart,
    isHorizontal = false,
    animationType = "none",
    introStartedAt = 0,
    selectedDataKey,
    isActive,
    dataLength = 0,
    onClick
  } = props;

  const index = typeof props.index === "number" ? props.index : -1;
  const isLastBar = bufferBar && dataLength > 0 && index === dataLength - 1;
  const isStripped = variant === "stripped";
  const grow = getBarGrowAnimation(
    animationType,
    index,
    dataLength,
    isHorizontal,
    introStartedAt
  );

  const fill = isLastBar
    ? `url(#${id}-buffer-hatched-${dataKey})`
    : getVariantFill(variant, id, dataKey);
  const filter = glowing ? `url(#${id}-bar-glow-${dataKey})` : undefined;

  const fillOpacity = getBarOpacity({
    isClickable,
    selectedDataKey,
    dataKey,
    enableHoverHighlight,
    isMouseInChart,
    isActive
  });
  const cursorStyle =
    isClickable || enableHoverHighlight ? { cursor: "pointer" } : undefined;

  // Stripped bars round only their top corners
  const radius: RectRadius = isStripped
    ? [barRadius, barRadius, 0, 0]
    : barRadius;

  // The painted bar, plus the stripped variant's solid top strip
  const visibleBar = (
    <>
      <Rectangle
        x={x}
        y={y}
        width={width}
        opacity={fillOpacity}
        height={Math.max(0, height - 3)}
        radius={radius}
        fill={fill}
        filter={filter}
        stroke={isLastBar ? `url(#${id}-colors-${dataKey})` : undefined}
        strokeWidth={isLastBar ? 1 : undefined}
      />
      {isStripped && (
        <Rectangle
          x={x}
          y={y - 4}
          width={width}
          height={2}
          radius={1}
          fill={`url(#${id}-colors-${dataKey})`}
        />
      )}
    </>
  );

  return (
    <g style={cursorStyle} onClick={onClick}>
      {/* The <g> handles the click; leaving it on the rect too would toggle twice */}
      <Rectangle {...props} onClick={undefined} fill="transparent" />
      {/* The painted bar grows in from its baseline; the hit rect stays put */}
      {grow ? (
        <motion.g
          initial={grow.initial}
          animate={grow.animate}
          transition={grow.transition}
          style={grow.style}>
          {visibleBar}
        </motion.g>
      ) : (
        visibleBar
      )}
    </g>
  );
};

/**
 * The motion grow-in for one bar, or `null` when it renders statically
 * (`"none"`, an unknown index, or once it has finished growing).
 *
 * The intro is anchored to `introStartedAt` rather than to mount: Recharts
 * remounts every bar on re-render (for example on hover highlight), so a
 * mount-based animation would replay endlessly. A bar past its window renders
 * static, and one caught mid-grow resumes from where it should be.
 */
const getBarGrowAnimation = (
  animationType: ChartAnimationType,
  index: number,
  dataLength: number,
  isHorizontal: boolean,
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

  const from = elapsed <= startMs ? 0 : (elapsed - startMs) / durationMs;
  const transition = {
    duration: (endMs - Math.max(elapsed, startMs)) / 1000,
    ease: REVEAL_EASE,
    delay: Math.max(0, startMs - elapsed) / 1000
  };

  // Horizontal bars grow rightward from the left edge, vertical from the bottom
  return isHorizontal
    ? {
        initial: { scaleX: from },
        animate: { scaleX: 1 },
        transition,
        style: { originX: 0 }
      }
    : {
        initial: { scaleY: from },
        animate: { scaleY: 1 },
        transition,
        style: { originY: 1 }
      };
};

// ─────────────────────────────────────────────────────────────────────────────
// Selection + fill helpers
// ─────────────────────────────────────────────────────────────────────────────

// The `default` variant paints straight from the series color gradient
const getVariantFill = (variant: BarVariant, id: string, dataKey: string) =>
  variant === "default"
    ? `url(#${id}-colors-${dataKey})`
    : `url(#${id}-${variant}-${dataKey})`;

// Bar opacity from the click selection and hover-highlight state
const getBarOpacity = ({
  isClickable,
  selectedDataKey,
  dataKey,
  enableHoverHighlight,
  isMouseInChart,
  isActive
}: {
  isClickable?: boolean;
  selectedDataKey?: string | null;
  dataKey: string;
  enableHoverHighlight?: boolean;
  isMouseInChart?: boolean;
  isActive?: boolean;
}) => {
  const isSelectedDataKey =
    selectedDataKey === null || selectedDataKey === dataKey;
  const clickOpacity =
    isClickable && selectedDataKey !== null
      ? isSelectedDataKey
        ? 1
        : 0.15
      : 1;

  // While hovering, the hovered bar keeps its opacity and the rest dim further
  if (enableHoverHighlight && isMouseInChart) {
    return isActive ? clickOpacity : clickOpacity * 0.3;
  }

  return clickOpacity;
};

// ─────────────────────────────────────────────────────────────────────────────
// Style definitions — one set per <Bar />, scoped to its unique id
// ─────────────────────────────────────────────────────────────────────────────

interface StyleProps {
  id: string; // unique id of the owning <Bar />
  dataKey: string; // series key the colors belong to
}

/**
 * Diagonal stripes masked from the series gradient over a `baseOpacity`
 * background: the `hatched` fill, and (with no background) the buffer bar.
 */
const HatchedPattern = ({
  id,
  dataKey,
  name,
  stripeWidth,
  baseOpacity
}: StyleProps & { name: string; stripeWidth: number; baseOpacity: number }) => (
  <>
    <pattern
      id={`${id}-${name}-mask-pattern`}
      x="0"
      y="0"
      width="5"
      height="5"
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(-45)">
      <rect width="5" height="5" fill="white" fillOpacity={baseOpacity} />
      <rect width={stripeWidth} height="5" fill="white" fillOpacity={1} />
    </pattern>
    <mask id={`${id}-${name}-mask-${dataKey}`}>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-${name}-mask-pattern)`}
      />
    </mask>
    <pattern
      id={`${id}-${name}-${dataKey}`}
      patternUnits="userSpaceOnUse"
      width="100%"
      height="100%">
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-colors-${dataKey})`}
        mask={`url(#${id}-${name}-mask-${dataKey})`}
      />
    </pattern>
  </>
);

/**
 * Two-tone fill split down the middle of each bar, with `left` and `right`
 * opacities: the `duotone` and `duotone-reverse` fills.
 */
const DuotonePattern = ({
  id,
  dataKey,
  config,
  name,
  left,
  right
}: StyleProps & {
  config: ChartConfig;
  name: string;
  left: number;
  right: number;
}) => (
  <>
    <linearGradient
      id={`${id}-${name}-mask-gradient-${dataKey}`}
      gradientUnits="objectBoundingBox"
      x1="0"
      y1="0"
      x2="1"
      y2="0">
      <stop offset="50%" stopColor="white" stopOpacity={left} />
      <stop offset="50%" stopColor="white" stopOpacity={right} />
    </linearGradient>
    <ChartColorGradient
      id={`${id}-${name}-colors-${dataKey}`}
      dataKey={dataKey}
      config={config}
      gradientUnits="objectBoundingBox"
      x2="0"
      y2="1"
    />
    <mask
      id={`${id}-${name}-mask-${dataKey}`}
      maskContentUnits="objectBoundingBox">
      <rect
        x="0"
        y="0"
        width="1"
        height="1"
        fill={`url(#${id}-${name}-mask-gradient-${dataKey})`}
      />
    </mask>
    <pattern
      id={`${id}-${name}-${dataKey}`}
      patternUnits="objectBoundingBox"
      patternContentUnits="objectBoundingBox"
      width="1"
      height="1">
      <rect
        x="0"
        y="0"
        width="1"
        height="1"
        fill={`url(#${id}-${name}-colors-${dataKey})`}
        mask={`url(#${id}-${name}-mask-${dataKey})`}
      />
    </pattern>
  </>
);

/**
 * The series gradient masked by a vertical fade between two
 * `[offset %, opacity]` stops: the `gradient` fill (solid top to clear) and the
 * `stripped` body (a flat low opacity under CustomBar's solid top strip).
 */
const FadePattern = ({
  id,
  dataKey,
  name,
  from,
  to
}: StyleProps & {
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
    <mask id={`${id}-${name}-mask-${dataKey}`}>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-${name}-mask-gradient)`}
      />
    </mask>
    <pattern
      id={`${id}-${name}-${dataKey}`}
      patternUnits="userSpaceOnUse"
      width="100%"
      height="100%">
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-colors-${dataKey})`}
        mask={`url(#${id}-${name}-mask-${dataKey})`}
      />
    </pattern>
  </>
);

/** Soft outer-glow filter applied to a glowing bar. */
const GlowFilter = ({ id, dataKey }: StyleProps) => (
  <filter
    id={`${id}-bar-glow-${dataKey}`}
    x="-100%"
    y="-100%"
    width="300%"
    height="300%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
    <feColorMatrix
      in="blur"
      type="matrix"
      values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 0.5 0"
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

/** The skeleton bar the root renders in place of the real bars. */
const LoadingBar = ({
  chartId,
  onShimmerExit
}: {
  chartId: string;
  onShimmerExit: () => void;
}) => (
  <>
    <RechartsBar
      dataKey={LOADING_BAR_DATA_KEY}
      fill={LOADING_COLOR}
      fillOpacity={0.15}
      radius={DEFAULT_BAR_RADIUS}
      isAnimationActive={false}
      legendType="none"
      style={{ mask: `url(#${chartId}-loading-mask)` }}
    />
    <defs>
      <LoadingBarPattern chartId={chartId} onShimmerExit={onShimmerExit} />
    </defs>
  </>
);

/**
 * Animated shimmer for the loading skeleton. The visible area is normalized
 * to 0–1 and the pattern is 3× wide, so the shimmer travels x from -1 to 2;
 * `onShimmerExit` fires as it crosses x = 1, swapping the data off-screen.
 */
const LoadingBarPattern = ({
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
        id={`${chartId}-loading-mask-gradient`}
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
        id={`${chartId}-loading-mask-pattern`}
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
          fill={`url(#${chartId}-loading-mask-gradient)`}
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
          fill={`url(#${chartId}-loading-mask-pattern)`}
        />
      </mask>
    </>
  );
};

// Every part hangs off the root, so one import covers the whole chart.
BarChart.Bar = Bar;
BarChart.XAxis = XAxis;
BarChart.YAxis = YAxis;
BarChart.Grid = Grid;
BarChart.Tooltip = Tooltip;
BarChart.Legend = Legend;
BarChart.Brush = ChartBrush;

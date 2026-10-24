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
import { getTokens, getVariable, View } from "@tamagui/core";
import type { MotionValue } from "motion/react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform
} from "motion/react";
import type {
  ComponentProps,
  CSSProperties,
  FC,
  KeyboardEvent,
  PointerEvent,
  ReactNode,
  RefObject
} from "react";
import {
  Children,
  isValidElement,
  startTransition,
  useCallback,
  useDeferredValue,
  useId,
  useMemo,
  useRef,
  useState
} from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer
} from "recharts";
import type { ChartConfig } from "./Chart";
import { ChartColorGradient, ChartStyle } from "./Chart";
import type { ChartBrushDragType, ChartBrushRange } from "./utilities";
import { clampBrushRange } from "./utilities";

export type ChartBrushVariant = "line" | "area" | "bar";
type CurveType = ComponentProps<typeof Area>["type"];
type DragType = ChartBrushDragType;

/**
 * Props of the declarative `<Chart.Brush />` child. Its presence turns the
 * brush footer on, and its props set the strip height, the handle labels and
 * the range callback.
 */
export interface ChartBrushProps {
  /** Preview strip height in px. */
  height?: number;
  /** Formats the range-handle labels. */
  formatLabel?: (value: unknown, index: number) => string;
  /** Fires as the range moves. */
  onChange?: (range: ChartBrushRange) => void;
}

/** Declares the zoom brush below a chart. It renders nothing itself. */
export const ChartBrush: FC<ChartBrushProps> = () => null;

/**
 * Pulls the declarative `<Chart.Brush />` child out of a chart's children, so
 * it never reaches the Recharts tree, and returns its props.
 */
export function useChartBrushSlot(children: ReactNode) {
  return useMemo(() => {
    const parts = Children.toArray(children);
    const brush = parts.find(
      child => isValidElement(child) && child.type === ChartBrush
    );

    return {
      brush: isValidElement<ChartBrushProps>(brush) ? brush.props : null,
      chartChildren: parts.filter(
        child => !(isValidElement(child) && child.type === ChartBrush)
      )
    };
  }, [children]);
}

export interface ChartBrushViewProps {
  /** Full dataset, always drawn in the miniature chart. */
  data: Record<string, unknown>[];
  chartConfig: ChartConfig;
  /** Data keys to plot (default: every key in `chartConfig`). */
  dataKeys?: string[];
  /** X-axis data key, used for the handle labels. */
  xDataKey?: string;
  variant?: ChartBrushVariant;
  height?: number;
  style?: CSSProperties;
  /** Whether areas/bars stack in the mini chart. */
  stacked?: boolean;
  strokeVariant?: "solid" | "dashed" | "animated-dashed";
  connectNulls?: boolean;
  barRadius?: number;
  /** Controlled range. */
  startIndex?: number;
  endIndex?: number;
  /** Initial range when uncontrolled. */
  defaultStartIndex?: number;
  defaultEndIndex?: number;
  onChange?: (range: ChartBrushRange) => void;
  formatLabel?: (value: unknown, index: number) => string;
  curveType?: CurveType;
  /** Minimum number of data points that must stay selected. */
  minSpan?: number;
  showLabels?: boolean;
  /** Skip the color variables when a `ChartContainer` already provides them. */
  skipStyle?: boolean;
}

const SPRING_CONFIG = { stiffness: 300, damping: 35, mass: 0.8 };
// First-render size until the strip is measured (avoids Recharts' -1 warning)
const MINI_CHART_SIZE = { width: 320, height: 56 };

const DIM_STYLE: CSSProperties = {
  position: "absolute",
  top: 0,
  bottom: 0,
  pointerEvents: "none",
  backgroundColor: "color-mix(in oklab, var(--elevated) 70%, transparent)",
  backdropFilter: "blur(2px)"
};

// ─── Pointer-capture drag ───────────────────────────────────────────────────
// setPointerCapture routes every pointer event to the originating element, so
// mouse, touch and pen all work without global listeners.

// Component tsconfigs have no DOM lib; these are the DOM members used here.
interface PointerTarget {
  setPointerCapture: (pointerId: number) => void;
  releasePointerCapture: (pointerId: number) => void;
}
interface MeasurableElement {
  getBoundingClientRect: () => { width: number };
}

interface DragState {
  type: DragType;
  originX: number;
  originRange: ChartBrushRange;
}

function useBrushDrag({
  range,
  totalPoints,
  containerRef,
  commit
}: {
  range: ChartBrushRange;
  totalPoints: number;
  containerRef: RefObject<HTMLDivElement | null>;
  commit: (next: ChartBrushRange, mode?: DragType) => void;
}) {
  const dragRef = useRef<DragState | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const toIndexDelta = useCallback(
    (px: number) => {
      const container = containerRef.current as MeasurableElement | null;
      if (!container || totalPoints <= 1) return 0;
      return Math.round(
        (px / container.getBoundingClientRect().width) * (totalPoints - 1)
      );
    },
    [totalPoints, containerRef]
  );

  const onPointerDown = useCallback(
    (e: PointerEvent, type: DragType) => {
      e.preventDefault();
      (e.target as unknown as PointerTarget).setPointerCapture(e.pointerId);
      dragRef.current = { type, originX: e.clientX, originRange: { ...range } };
      setIsDragging(true);
    },
    [range]
  );

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag) return;

      const delta = toIndexDelta(e.clientX - drag.originX);
      const { type, originRange: origin } = drag;

      if (type === "left") {
        commit(
          { startIndex: origin.startIndex + delta, endIndex: origin.endIndex },
          "left"
        );
      } else if (type === "right") {
        commit(
          { startIndex: origin.startIndex, endIndex: origin.endIndex + delta },
          "right"
        );
      } else {
        const span = origin.endIndex - origin.startIndex;
        let start = origin.startIndex + delta;
        let end = start + span;
        if (start < 0) {
          start = 0;
          end = span;
        }
        if (end > totalPoints - 1) {
          end = totalPoints - 1;
          start = Math.max(0, end - span);
        }
        commit({ startIndex: start, endIndex: end }, "middle");
      }
    },
    [toIndexDelta, totalPoints, commit]
  );

  const onPointerUp = useCallback((e: PointerEvent) => {
    (e.target as unknown as PointerTarget).releasePointerCapture(e.pointerId);
    dragRef.current = null;
    setIsDragging(false);
  }, []);

  const bind = useCallback(
    (type: DragType) => ({
      onPointerDown: (e: PointerEvent) => onPointerDown(e, type),
      onPointerMove,
      onPointerUp
    }),
    [onPointerDown, onPointerMove, onPointerUp]
  );

  return { isDragging, bind };
}

// ─── Brush view ─────────────────────────────────────────────────────────────

/**
 * A miniature of the full dataset with draggable handles that pick the range
 * the chart above shows. The handles also move with the arrow keys.
 */
export function ChartBrushView({
  data,
  chartConfig,
  dataKeys,
  xDataKey,
  variant = "area",
  height = 56,
  style,
  stacked = false,
  strokeVariant = "solid",
  connectNulls = false,
  barRadius,
  startIndex: controlledStart,
  endIndex: controlledEnd,
  defaultStartIndex = 0,
  defaultEndIndex,
  onChange,
  formatLabel,
  curveType = "monotone",
  minSpan = 2,
  showLabels = true,
  skipStyle = false
}: ChartBrushViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const keys = useMemo(
    () => dataKeys ?? Object.keys(chartConfig),
    [dataKeys, chartConfig]
  );
  const totalPoints = data.length;
  const chartId = useId().replace(/:/g, "");

  const isControlled =
    controlledStart !== undefined && controlledEnd !== undefined;

  const [internalRange, setInternalRange] = useState<ChartBrushRange>(() =>
    isControlled
      ? { startIndex: controlledStart, endIndex: controlledEnd }
      : {
          startIndex: Math.max(0, Math.min(defaultStartIndex, totalPoints - 1)),
          endIndex: Math.max(
            0,
            Math.min(defaultEndIndex ?? totalPoints - 1, totalPoints - 1)
          )
        }
  );

  // Uncontrolled: keep the range inside the data when it shrinks
  const [prevTotalPoints, setPrevTotalPoints] = useState(totalPoints);
  if (totalPoints !== prevTotalPoints) {
    setPrevTotalPoints(totalPoints);
    if (!isControlled) {
      const maxIndex = Math.max(0, totalPoints - 1);
      setInternalRange({
        startIndex: Math.min(internalRange.startIndex, maxIndex),
        endIndex: Math.min(internalRange.endIndex, maxIndex)
      });
    }
  }

  const commit = useCallback(
    (next: ChartBrushRange, mode?: DragType) => {
      const clamped = clampBrushRange(next, totalPoints, minSpan, mode);

      // Moves that don't change an index are skipped
      if (
        internalRange.startIndex === clamped.startIndex &&
        internalRange.endIndex === clamped.endIndex
      ) {
        return;
      }

      setInternalRange(clamped);
      // The chart re-render runs at lower priority, so fast drags can skip
      // intermediate frames
      startTransition(() => {
        onChange?.(clamped);
      });
    },
    [internalRange, totalPoints, minSpan, onChange]
  );

  const { isDragging, bind } = useBrushDrag({
    range: internalRange,
    totalPoints,
    containerRef,
    commit
  });

  // Position always follows internalRange, so it never lags controlled props.
  // Outside a drag it follows the controlled range whenever that changes.
  const controlledKey =
    isControlled && !isDragging ? `${controlledStart}:${controlledEnd}` : null;
  const [prevControlledKey, setPrevControlledKey] = useState(controlledKey);
  if (controlledKey !== prevControlledKey) {
    setPrevControlledKey(controlledKey);
    if (isControlled && !isDragging) {
      setInternalRange({
        startIndex: controlledStart,
        endIndex: controlledEnd
      });
    }
  }
  const range = internalRange;

  const leftPct =
    totalPoints > 1 ? (range.startIndex / (totalPoints - 1)) * 100 : 0;
  const rightPct =
    totalPoints > 1 ? (range.endIndex / (totalPoints - 1)) * 100 : 100;

  // Every moving part follows the same sprung edge values
  const leftTarget = useMotionValue(leftPct);
  const rightTarget = useMotionValue(rightPct);
  if (leftTarget.get() !== leftPct) leftTarget.set(leftPct);
  if (rightTarget.get() !== rightPct) rightTarget.set(rightPct);

  const leftSpring = useSpring(leftTarget, SPRING_CONFIG);
  const rightSpring = useSpring(rightTarget, SPRING_CONFIG);
  const leftPosition = useTransform(leftSpring, v => `${v}%`);
  const rightPosition = useTransform(rightSpring, v => `${v}%`);
  const rightOverlayWidth = useTransform(
    rightSpring,
    v => `${Math.max(0, 100 - v)}%`
  );
  const selectedWidth = useMotionValue(`${Math.max(0, rightPct - leftPct)}%`);

  const updateSelectedWidth = useCallback(() => {
    selectedWidth.set(`${Math.max(0, rightSpring.get() - leftSpring.get())}%`);
  }, [leftSpring, rightSpring, selectedWidth]);

  useMotionValueEvent(leftSpring, "change", updateSelectedWidth);
  useMotionValueEvent(rightSpring, "change", updateSelectedWidth);

  const getLabel = useCallback(
    (index: number) => {
      if (!xDataKey) return String(index);
      const value = data[index]?.[xDataKey];

      return formatLabel ? formatLabel(value, index) : String(value ?? index);
    },
    [data, xDataKey, formatLabel]
  );

  if (totalPoints === 0) return null;

  return (
    <div
      ref={containerRef}
      className={
        skipStyle ? "cyclone-chart-brush" : "cyclone-chart-brush cyclone-chart"
      }
      data-chart={skipStyle ? undefined : chartId}
      style={{ position: "relative", userSelect: "none", height, ...style }}>
      {!skipStyle && <ChartStyle id={chartId} config={chartConfig} />}

      {/* Mini chart, always showing all the data */}
      <View
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        overflow="hidden"
        borderRadius="md">
        <MiniChart
          data={data}
          keys={keys}
          chartConfig={chartConfig}
          variant={variant}
          curveType={curveType}
          chartId={chartId}
          stacked={stacked}
          strokeVariant={
            strokeVariant === "animated-dashed" ? "dashed" : strokeVariant
          }
          connectNulls={connectNulls}
          barRadius={barRadius}
        />
      </View>

      <motion.div
        style={{
          ...DIM_STYLE,
          left: 0,
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
          width: leftPosition
        }}
      />
      <motion.div
        style={{
          ...DIM_STYLE,
          right: 0,
          borderTopRightRadius: 6,
          borderBottomRightRadius: 6,
          width: rightOverlayWidth
        }}
      />

      {/* Selected region, draggable to pan */}
      <motion.div
        className="cyclone-chart-brush-selection"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          touchAction: "none",
          borderRadius: 4,
          border: "1px solid var(--outline)",
          left: leftPosition,
          width: selectedWidth
        }}
        {...bind("middle")}
      />

      <BrushHandle
        side="left"
        position={leftPosition}
        label={showLabels ? getLabel(range.startIndex) : undefined}
        valueText={getLabel(range.startIndex)}
        value={range.startIndex}
        max={totalPoints - 1}
        bind={bind("left")}
        onStep={step =>
          commit(
            {
              startIndex: range.startIndex + step,
              endIndex: range.endIndex
            },
            "left"
          )
        }
      />
      <BrushHandle
        side="right"
        position={rightPosition}
        label={showLabels ? getLabel(range.endIndex) : undefined}
        valueText={getLabel(range.endIndex)}
        value={range.endIndex}
        max={totalPoints - 1}
        bind={bind("right")}
        onStep={step =>
          commit(
            {
              startIndex: range.startIndex,
              endIndex: range.endIndex + step
            },
            "right"
          )
        }
      />
    </div>
  );
}

function BrushHandle({
  side,
  position,
  label,
  valueText,
  value,
  max,
  bind,
  onStep
}: {
  side: "left" | "right";
  position: MotionValue<string>;
  label?: string;
  valueText: string;
  value: number;
  max: number;
  bind: {
    onPointerDown: (e: PointerEvent) => void;
    onPointerMove: (e: PointerEvent) => void;
    onPointerUp: (e: PointerEvent) => void;
  };
  onStep: (step: number) => void;
}) {
  const isLeft = side === "left";

  const onKeyDown = (e: KeyboardEvent) => {
    const step =
      e.key === "ArrowLeft" || e.key === "ArrowDown"
        ? -1
        : e.key === "ArrowRight" || e.key === "ArrowUp"
          ? 1
          : 0;
    if (step) {
      e.preventDefault();
      onStep(step);
    }
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        zIndex: 10,
        left: position
      }}>
      <div
        role="slider"
        tabIndex={0}
        aria-label={isLeft ? "Range start" : "Range end"}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={valueText}
        className="cyclone-chart-brush-handle"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...(!isLeft && { transform: "translateX(-100%)" })
        }}
        onKeyDown={onKeyDown}
        {...bind}>
        <div
          className="cyclone-chart-brush-grip"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 16,
            width: 6,
            borderRadius: 6,
            [isLeft ? "left" : "right"]: -5.5
          }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[0, 1, 2].map(dot => (
              <div
                key={dot}
                style={{
                  width: 2,
                  height: 2,
                  borderRadius: 1,
                  backgroundColor:
                    "color-mix(in oklab, var(--elevated) 70%, transparent)"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {label && (
        <View
          className="cyclone-chart-brush-label"
          position="absolute"
          bottom={-12}
          pointerEvents="none"
          paddingHorizontal="xl"
          paddingVertical="md"
          borderWidth={1}
          borderColor="outline"
          borderRadius="tooltip"
          backgroundColor="elevated"
          boxShadow={getVariable(getTokens().shadow?.xl)}
          style={{ transform: "translateY(-50%)" }}
          {...(isLeft ? { left: 6 } : { right: 6 })}>
          <BodyText
            size="xxs"
            fontWeight="medium"
            color="ink"
            whiteSpace="nowrap">
            {label}
          </BodyText>
        </View>
      )}
    </motion.div>
  );
}

function MiniChart({
  data,
  keys,
  chartConfig,
  variant,
  curveType,
  chartId,
  stacked,
  strokeVariant = "solid",
  connectNulls = false,
  barRadius
}: {
  data: Record<string, unknown>[];
  keys: string[];
  chartConfig: ChartConfig;
  variant: ChartBrushVariant;
  curveType: CurveType;
  chartId: string;
  stacked: boolean;
  strokeVariant?: "solid" | "dashed";
  connectNulls?: boolean;
  barRadius?: number;
}) {
  const dashArray = strokeVariant === "dashed" ? "4 4" : undefined;

  const defs = (
    <defs>
      {variant === "area" && (
        <linearGradient
          id={`${chartId}-zm-vertical-fade`}
          x1="0"
          y1="0"
          x2="0"
          y2="1">
          <stop offset="0%" stopColor="white" stopOpacity={0.15} />
          <stop offset="100%" stopColor="white" stopOpacity={0} />
        </linearGradient>
      )}
      {keys.map(dataKey => (
        <g key={dataKey}>
          {/* Vertical color gradient (stroke and bar fill) */}
          <ChartColorGradient
            id={`${chartId}-zm-${dataKey}`}
            dataKey={dataKey}
            config={chartConfig}
            x2="0"
            y2="1"
          />
          {/* Area fill: the color gradient masked by the vertical fade */}
          {variant === "area" && (
            <>
              <mask id={`${chartId}-zm-fill-mask-${dataKey}`}>
                <rect
                  width="100%"
                  height="100%"
                  fill={`url(#${chartId}-zm-vertical-fade)`}
                />
              </mask>
              <pattern
                id={`${chartId}-zm-fill-${dataKey}`}
                patternUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <rect
                  width="100%"
                  height="100%"
                  fill={`url(#${chartId}-zm-${dataKey})`}
                  mask={`url(#${chartId}-zm-fill-mask-${dataKey})`}
                />
              </pattern>
            </>
          )}
        </g>
      ))}
    </defs>
  );

  if (variant === "line") {
    return (
      <ResponsiveContainer
        width="100%"
        height="100%"
        initialDimension={MINI_CHART_SIZE}>
        <LineChart
          data={data}
          margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
          {defs}
          {keys.map(dataKey => (
            <Line
              key={dataKey}
              type={curveType}
              dataKey={dataKey}
              stroke={`url(#${chartId}-zm-${dataKey})`}
              strokeWidth={1}
              strokeOpacity={0.5}
              strokeDasharray={dashArray}
              connectNulls={connectNulls}
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (variant === "bar") {
    const r = barRadius ?? 3;

    return (
      <ResponsiveContainer
        width="100%"
        height="100%"
        initialDimension={MINI_CHART_SIZE}>
        <BarChart
          data={data}
          margin={{ top: 2, right: 0, bottom: 0, left: 0 }}
          barGap={2}
          barSize={14}>
          {defs}
          {keys.map(dataKey => (
            <Bar
              key={dataKey}
              dataKey={dataKey}
              fill={`url(#${chartId}-zm-${dataKey})`}
              fillOpacity={0.35}
              stackId={stacked ? "zm-stack" : undefined}
              isAnimationActive={false}
              radius={[r, r, r, r]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      initialDimension={MINI_CHART_SIZE}>
      <AreaChart data={data} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
        {defs}
        {keys.map(dataKey => (
          <Area
            key={dataKey}
            type={curveType}
            dataKey={dataKey}
            stroke={`url(#${chartId}-zm-${dataKey})`}
            fill={`url(#${chartId}-zm-fill-${dataKey})`}
            strokeWidth={1}
            strokeOpacity={0.5}
            strokeDasharray={dashArray}
            connectNulls={connectNulls}
            fillOpacity={1}
            stackId={stacked ? "zm-stack" : undefined}
            dot={false}
            activeDot={false}
            isAnimationActive={false}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}

/**
 * The brush range plus the slice of `data` it selects. The slice uses a
 * deferred range, so the handles move at full speed while the chart
 * re-renders at lower priority.
 */
export function useChartBrush<TData extends Record<string, unknown>>({
  data,
  defaultStartIndex = 0,
  defaultEndIndex
}: {
  data: TData[];
  defaultStartIndex?: number;
  defaultEndIndex?: number;
}) {
  const [range, setRange] = useState<ChartBrushRange>({
    startIndex: defaultStartIndex,
    endIndex: defaultEndIndex ?? Math.max(0, data.length - 1)
  });

  const deferredRange = useDeferredValue(range);

  // New data resets the range to cover all of it
  const [prevLength, setPrevLength] = useState(data.length);
  if (data.length !== prevLength) {
    setPrevLength(data.length);
    setRange({ startIndex: 0, endIndex: Math.max(0, data.length - 1) });
  }

  const visibleData = useMemo(
    () => data.slice(deferredRange.startIndex, deferredRange.endIndex + 1),
    [data, deferredRange.startIndex, deferredRange.endIndex]
  );

  return {
    range,
    visibleData,
    brushProps: {
      startIndex: range.startIndex,
      endIndex: range.endIndex,
      onChange: setRange
    } satisfies Pick<
      ChartBrushViewProps,
      "startIndex" | "endIndex" | "onChange"
    >
  };
}

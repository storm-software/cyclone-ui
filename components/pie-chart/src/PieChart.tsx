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
  getColorsCount,
  LoadingIndicator
} from "@cyclone-ui/chart";
import { motion } from "motion/react";
import type { ComponentProps, FC, ReactElement, ReactNode } from "react";
import {
  Children,
  createContext,
  isValidElement,
  use,
  useCallback,
  useId,
  useMemo,
  useState
} from "react";
import type { PieSectorShapeProps } from "recharts";
import {
  LabelList as RechartsLabelList,
  Pie as RechartsPie,
  PieChart as RechartsPieChart,
  Sector
} from "recharts";

const LOADING_SECTORS = 5;
const LOADING_ANIMATION_DURATION = 2000; // full loading cycle, in milliseconds
// Skeleton color; kept faint by the pulsing sector opacity
const LOADING_COLOR = "var(--ink)";
const DEFAULT_INNER_RADIUS = 0;
const DEFAULT_OUTER_RADIUS = "80%";
const DEFAULT_CORNER_RADIUS = 0;
const DEFAULT_PADDING_ANGLE = 0;
const DEFAULT_START_ANGLE = 0;
const DEFAULT_END_ANGLE = 360;
// Stable reference so the `glowingSectors` default doesn't change every render
const EMPTY_GLOWING_SECTORS: string[] = [];

type LabelListProps = ComponentProps<typeof RechartsLabelList>;
export type PieVariant = "gradient";

// ─────────────────────────────────────────────────────────────────────────────
// Shared context
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Shared state for every part of the chart, so <Pie />, <Tooltip />, <Legend />
 * and friends can read it without prop drilling.
 */
interface PieChartContextValue {
  config: ChartConfig; // colors + labels for every sector
  data: Record<string, unknown>[];
  dataKey: string; // key holding each sector's numeric value
  nameKey: string; // key holding each sector's name
  isLoading: boolean;
  selectedSector: string | null;
  selectSector: (sectorName: string | null) => void;
}

const PieChartContext = createContext<PieChartContextValue | null>(null);

function usePieChart() {
  const context = use(PieChartContext);

  if (!context) {
    throw new Error(
      "Pie chart parts (<Pie />, <Tooltip />, …) must be used within <PieChart />"
    );
  }

  return context;
}

// ─────────────────────────────────────────────────────────────────────────────
// Root container
// ─────────────────────────────────────────────────────────────────────────────

export type PieChartProps<TData extends Record<string, unknown>> = Omit<
  ChartContainerProps,
  "config" | "children" | "footer"
> & {
  config: ChartConfig; // sector colors + labels, keyed by sector name
  data: TData[];
  dataKey: keyof TData & string; // key holding each sector's numeric value
  nameKey: keyof TData & string; // key holding each sector's name
  children: ReactNode; // composed parts — <Pie />, <Tooltip />, <Legend />, …
  chartProps?: ComponentProps<typeof RechartsPieChart>; // escape hatch for the raw Recharts chart
  defaultSelectedSector?: string | null;
  onSelectionChange?: (
    selection: { dataKey: string; value: number } | null
  ) => void;
  isLoading?: boolean; // shows the animated loading skeleton
};

/**
 * A composable pie chart. The root owns the data, the shared state and the
 * loading indicator; the pie, tooltip, legend and an optional background are
 * composed as children.
 */
export function PieChart<TData extends Record<string, unknown>>({
  config,
  data,
  dataKey,
  nameKey,
  children,
  chartProps,
  defaultSelectedSector = null,
  onSelectionChange,
  isLoading = false,
  ...props
}: PieChartProps<TData>) {
  const chartId = useId().replace(/:/g, "");
  const [selectedSector, setSelectedSector] = useState<string | null>(
    defaultSelectedSector
  );

  // Updates selection state and notifies the parent with the sector's value
  const selectSector = useCallback(
    (sectorName: string | null) => {
      setSelectedSector(sectorName);

      if (sectorName === null) {
        onSelectionChange?.(null);
        return;
      }

      const selectedItem = data.find(
        item => (item[nameKey] as string) === sectorName
      );

      if (selectedItem) {
        onSelectionChange?.({
          dataKey: sectorName,
          value: selectedItem[dataKey] as number
        });
      }
    },
    [data, dataKey, nameKey, onSelectionChange]
  );

  const contextValue = useMemo<PieChartContextValue>(
    () => ({
      config,
      data,
      dataKey,
      nameKey,
      isLoading,
      selectedSector,
      selectSector
    }),
    [config, data, dataKey, nameKey, isLoading, selectedSector, selectSector]
  );

  return (
    <PieChartContext value={contextValue}>
      <ChartContainer config={config} {...props}>
        <LoadingIndicator isLoading={isLoading} />
        <RechartsPieChart id={chartId} accessibilityLayer {...chartProps}>
          {children}
        </RechartsPieChart>
      </ChartContainer>
    </PieChartContext>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Composable parts
// ─────────────────────────────────────────────────────────────────────────────

export interface PieProps {
  variant?: PieVariant; // fill style — currently always a diagonal color gradient
  innerRadius?: number | string; // set above 0 for a donut
  outerRadius?: number | string;
  cornerRadius?: number; // border-radius of each sector in pixels
  paddingAngle?: number; // gap between sectors in degrees — negative overlaps them
  startAngle?: number;
  endAngle?: number;
  isClickable?: boolean; // lets sectors be selected by clicking them
  glowingSectors?: string[]; // sector names that render with a soft outer glow
  children?: ReactNode; // optional <Label /> composition for sector labels
  pieProps?: Omit<
    ComponentProps<typeof RechartsPie>,
    "data" | "dataKey" | "nameKey"
  >; // escape hatch for raw Recharts Pie props
}

/**
 * The pie series. It generates its own color gradients and glow filters under
 * a unique id, so any number of pies can share a page. While the chart is
 * loading it renders a pulsing skeleton instead. Compose <Label /> inside it
 * to draw labels on each sector.
 */
function Pie({
  innerRadius = DEFAULT_INNER_RADIUS,
  outerRadius = DEFAULT_OUTER_RADIUS,
  cornerRadius = DEFAULT_CORNER_RADIUS,
  paddingAngle = DEFAULT_PADDING_ANGLE,
  startAngle = DEFAULT_START_ANGLE,
  endAngle = DEFAULT_END_ANGLE,
  isClickable = false,
  glowingSectors = EMPTY_GLOWING_SECTORS,
  children,
  pieProps
}: PieProps) {
  const {
    config,
    data,
    dataKey,
    nameKey,
    isLoading,
    selectedSector,
    selectSector
  } = usePieChart();
  const id = useId().replace(/:/g, "");

  if (isLoading) {
    return (
      <RechartsPie
        data={LOADING_PIE_DATA}
        dataKey="value"
        nameKey="name"
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        cornerRadius={cornerRadius}
        paddingAngle={paddingAngle}
        startAngle={startAngle}
        endAngle={endAngle}
        strokeWidth={0}
        isAnimationActive={false}
        shape={props => <AnimatedLoadingSector {...props} />}
      />
    );
  }

  const label = resolveLabel(children, dataKey);

  // `shape` paints the sectors; Recharts uses each entry's `fill` for its label
  const preparedData = data.map(item => {
    const sectorName = item[nameKey] as string;

    return {
      ...item,
      fill: getLabelColor(sectorName, getColorsCount(config[sectorName]))
    };
  });

  return (
    <>
      <RechartsPie
        data={preparedData}
        dataKey={dataKey}
        nameKey={nameKey}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        cornerRadius={cornerRadius}
        paddingAngle={paddingAngle}
        startAngle={startAngle}
        endAngle={endAngle}
        strokeWidth={0}
        isAnimationActive
        style={isClickable ? { cursor: "pointer" } : undefined}
        onClick={(_, index) => {
          if (!isClickable) return;
          const clickedName = data[index]?.[nameKey] as string;
          // Clicking the selected sector clears the selection
          selectSector(selectedSector === clickedName ? null : clickedName);
        }}
        shape={(props: PieSectorShapeProps) => {
          const sectorName = data[props.index ?? 0]?.[nameKey] as string;
          const isGlowing = glowingSectors.includes(sectorName);
          const isDimmed =
            isClickable &&
            selectedSector !== null &&
            selectedSector !== sectorName;

          return (
            <Sector
              {...props}
              fill={`url(#${id}-colors-${sectorName})`}
              filter={isGlowing ? `url(#${id}-glow-${sectorName})` : undefined}
              // Overlapping sectors get a surface-colored outline to separate them
              stroke={paddingAngle < 0 ? "var(--elevated)" : "none"}
              strokeWidth={paddingAngle < 0 ? 5 : 0}
              opacity={isDimmed ? 0.15 : 1}
              style={{ transition: "opacity 200ms" }}
            />
          );
        }}
        {...pieProps}>
        {label}
      </RechartsPie>
      <defs>
        {Object.keys(config).map(sectorKey => (
          <ChartColorGradient
            key={sectorKey}
            id={`${id}-colors-${sectorKey}`}
            dataKey={sectorKey}
            config={config}
            x2="1"
            y2="1"
          />
        ))}
        {glowingSectors.map(sectorName => (
          <GlowFilter key={sectorName} id={`${id}-glow-${sectorName}`} />
        ))}
      </defs>
    </>
  );
}

export interface PieLabelProps {
  dataKey?: string; // data key for the label text — defaults to the pie's value key
  labelListProps?: Omit<LabelListProps, "dataKey">; // escape hatch for raw Recharts LabelList props
}

/**
 * Declares per-sector labels for the <Pie /> it is composed inside. It renders
 * nothing on its own; the parent <Pie /> wires it into a Recharts LabelList.
 */
const Label: FC<PieLabelProps> = () => null;

export interface PieTooltipProps {
  variant?: TooltipVariant;
  roundness?: TooltipRoundness;
  defaultIndex?: number; // sector index shown with no hover
}

/** The hover tooltip. Hidden while the chart is loading. */
function Tooltip({ variant, roundness, defaultIndex }: PieTooltipProps) {
  const { isLoading, nameKey } = usePieChart();

  if (isLoading) return null;

  return (
    <ChartTooltip
      defaultIndex={defaultIndex}
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

export interface PieLegendProps {
  variant?: ChartLegendVariant;
  align?: "left" | "center" | "right";
  verticalAlign?: "top" | "middle" | "bottom";
  isClickable?: boolean; // lets each entry toggle selection of its sector
}

/** The sector legend; clickable entries toggle sector selection. */
function Legend({
  variant,
  align = "center",
  verticalAlign = "bottom",
  isClickable = false
}: PieLegendProps) {
  const { nameKey, selectedSector, selectSector } = usePieChart();

  return (
    <ChartLegend
      verticalAlign={verticalAlign}
      align={align}
      content={
        <ChartLegendContent
          selected={selectedSector}
          onSelectChange={selectSector}
          isClickable={isClickable}
          nameKey={nameKey}
          variant={variant}
        />
      }
    />
  );
}

export interface PieBackgroundProps {
  variant?: BackgroundVariant;
}

/** An optional decorative pattern drawn behind the pie. */
function Background({ variant = "dots" }: PieBackgroundProps) {
  return <ChartBackground variant={variant} />;
}

// ─────────────────────────────────────────────────────────────────────────────
// Label helper
// ─────────────────────────────────────────────────────────────────────────────

// Pulls a <Label /> out of a pie's children into a Recharts LabelList element
const resolveLabel = (children: ReactNode, valueKey: string): ReactNode => {
  let label: ReactNode = null;

  Children.forEach(children, child => {
    if (!isValidElement(child) || child.type !== Label) return;

    const { dataKey, labelListProps } = (child as ReactElement<PieLabelProps>)
      .props;

    label = (
      <RechartsLabelList
        dataKey={dataKey ?? valueKey}
        stroke="none"
        fontSize={12}
        fontWeight={500}
        {...labelListProps}
      />
    );
  });

  return label;
};

/**
 * White or black, whichever reads on the sector: white below OKLCH lightness
 * 0.565, black above. That is where their contrast crosses (~4.6:1), so labels
 * clear WCAG AA on any data color. Gradient sectors use their middle color.
 */
const getLabelColor = (sectorKey: string, colorsCount: number) => {
  const sectorColor =
    colorsCount > 1
      ? `color-mix(in oklch, var(--color-${sectorKey}-0), var(--color-${sectorKey}-${colorsCount - 1}))`
      : `var(--color-${sectorKey}-0)`;

  return `oklch(from ${sectorColor} clamp(0, (0.565 - l) * 1000, 1) 0 0)`;
};

// ─────────────────────────────────────────────────────────────────────────────
// Style definitions
// ─────────────────────────────────────────────────────────────────────────────

/** Soft outer-glow SVG filter for a glowing sector. */
const GlowFilter = ({ id }: { id: string }) => (
  <filter id={id} x="-100%" y="-100%" width="300%" height="300%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
    <feColorMatrix
      in="blur"
      type="matrix"
      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0"
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

// Equal-sized sectors for the pulsing loading skeleton
const LOADING_PIE_DATA = Array.from({ length: LOADING_SECTORS }, (_, i) => ({
  name: `loading${i}`,
  value: 100 / LOADING_SECTORS
}));

/**
 * A skeleton sector. Each one pulses with a staggered delay, producing a wave
 * that travels around the pie.
 */
const AnimatedLoadingSector = ({
  index = 0,
  ...sectorProps
}: ComponentProps<typeof Sector> & { index?: number }) => {
  const delay = (index / LOADING_SECTORS) * (LOADING_ANIMATION_DURATION / 1000);

  return (
    <motion.g
      initial={{ opacity: 0.15 }}
      animate={{ opacity: [0.15, 0.5, 0.15] }}
      transition={{
        duration: LOADING_ANIMATION_DURATION / 1000,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}>
      <Sector {...sectorProps} fill={LOADING_COLOR} />
    </motion.g>
  );
};

// Every part hangs off the root, so one import covers the whole chart.
PieChart.Pie = Pie;
PieChart.Label = Label;
PieChart.Tooltip = Tooltip;
PieChart.Legend = Legend;
PieChart.Background = Background;

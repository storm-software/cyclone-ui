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
  TooltipRoundness,
  TooltipVariant
} from "@cyclone-ui/chart";
import {
  ChartBackground,
  ChartColorGradient,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  LoadingIndicator
} from "@cyclone-ui/chart";
import { motion } from "motion/react";
import type { FC, ReactElement, ReactNode } from "react";
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
import type {
  SankeyLinkProps as RechartsSankeyLinkProps,
  SankeyNode as RechartsSankeyNode,
  SankeyNodeProps as RechartsSankeyNodeProps,
  SankeyProps as RechartsSankeyProps,
  SankeyData
} from "recharts";
import { Layer, Sankey as RechartsSankey } from "recharts";

const LOADING_ANIMATION_DURATION = 2000; // full loading cycle, in milliseconds
const DEFAULT_NODE_WIDTH = 10;
const DEFAULT_NODE_PADDING = 10;
const DEFAULT_LINK_CURVATURE = 0.5;
const DEFAULT_ITERATIONS = 32;
// Nodes and links without a config entry, and the loading skeleton
const FALLBACK_COLOR = "var(--ink)";
const LABEL_COLOR = "var(--ink)";
const VALUE_COLOR = "var(--subtle)";
const TRANSITION = "opacity 200ms";

export type SankeyLinkVariant = "gradient" | "solid" | "source" | "target";
export type SankeyNodeLabelPosition = "inside" | "outside";

// ─────────────────────────────────────────────────────────────────────────────
// Shared context
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Shared state for every part of the chart, so <Node />, <Link /> and
 * <Tooltip /> can read it without prop drilling. A sankey's data is rigid —
 * the root passes `nodes`/`links` straight to Recharts — so the parts
 * configure how those nodes and links render.
 */
interface SankeyChartContextValue {
  data: SankeyData;
  config: ChartConfig; // colors + labels keyed by node name
  chartId: string; // scopes this chart's SVG defs
  isLoading: boolean;
  selectedNode: string | null;
  selectNode: (nodeName: string | null) => void;
}

const SankeyChartContext = createContext<SankeyChartContextValue | null>(null);

function useSankeyChart() {
  const context = use(SankeyChartContext);

  if (!context) {
    throw new Error(
      "Sankey chart parts (<Node />, <Link />, <Tooltip />, …) must be used within <SankeyChart />"
    );
  }

  return context;
}

// ─────────────────────────────────────────────────────────────────────────────
// Root container
// ─────────────────────────────────────────────────────────────────────────────

export type SankeyChartProps = Omit<
  ChartContainerProps,
  "config" | "children" | "footer"
> & {
  data: SankeyData; // nodes + links rendered by the chart
  config: ChartConfig; // node colors + labels keyed by node name
  children: ReactNode; // composed parts — <Node />, <Link />, <Tooltip />
  sankeyProps?: Omit<RechartsSankeyProps, "data">; // escape hatch for the raw Recharts Sankey
  nodeWidth?: number; // width of each node in pixels
  nodePadding?: number; // vertical gap between nodes in pixels
  linkCurvature?: number; // link curve amount, 0 (straight) to 1 (maximum)
  iterations?: number; // layout iterations — higher is more accurate
  sort?: boolean; // sorts nodes automatically for an optimal layout
  align?: "left" | "justify"; // horizontal node alignment strategy
  verticalAlign?: "justify" | "top"; // vertical node alignment strategy
  backgroundVariant?: BackgroundVariant; // background pattern behind the chart
  defaultSelectedNode?: string | null;
  onSelectionChange?: (
    selection: { dataKey: string; value: number } | null
  ) => void;
  isLoading?: boolean; // shows the animated loading skeleton
};

/**
 * A composable Sankey diagram. The root owns the flow data, the shared state,
 * the layout options and the loading skeleton; the nodes, links and tooltip
 * are composed as children.
 */
export function SankeyChart({
  data,
  config,
  children,
  sankeyProps,
  nodeWidth = DEFAULT_NODE_WIDTH,
  nodePadding = DEFAULT_NODE_PADDING,
  linkCurvature = DEFAULT_LINK_CURVATURE,
  iterations = DEFAULT_ITERATIONS,
  sort = true,
  align = "justify",
  verticalAlign = "justify",
  backgroundVariant,
  defaultSelectedNode = null,
  onSelectionChange,
  isLoading = false,
  ...props
}: SankeyChartProps) {
  const chartId = useId().replace(/:/g, "");
  const [selectedNode, setSelectedNode] = useState<string | null>(
    defaultSelectedNode
  );

  // Updates the selection and notifies the parent with the node's flow value
  const selectNode = useCallback(
    (nodeName: string | null) => {
      setSelectedNode(nodeName);

      if (!onSelectionChange) return;

      onSelectionChange(
        nodeName === null
          ? null
          : { dataKey: nodeName, value: getNodeValue(data, nodeName) }
      );
    },
    [onSelectionChange, data]
  );

  const contextValue = useMemo<SankeyChartContextValue>(
    () => ({ data, config, chartId, isLoading, selectedNode, selectNode }),
    [data, config, chartId, isLoading, selectedNode, selectNode]
  );

  return (
    <SankeyChartContext value={contextValue}>
      <ChartContainer config={config} {...props}>
        <LoadingIndicator isLoading={isLoading} />
        {/* Sankey has no z-index layers, so the background gets its own SVG
            behind the chart */}
        {backgroundVariant && (
          <svg width="100%" height="100%" style={OVERLAY_STYLE}>
            <ChartBackground variant={backgroundVariant} />
          </svg>
        )}
        {!isLoading && (
          <RechartsSankey
            id={chartId}
            data={data}
            nodeWidth={nodeWidth}
            nodePadding={nodePadding}
            linkCurvature={linkCurvature}
            iterations={iterations}
            sort={sort}
            align={align}
            verticalAlign={verticalAlign}
            {...resolveSankeyRenderers(children)}
            {...sankeyProps}>
            {children}
            <defs>
              {Object.keys(config).map(dataKey => (
                // Vertical color gradient for every configured node
                <ChartColorGradient
                  key={dataKey}
                  id={`${chartId}-sankey-colors-${dataKey}`}
                  dataKey={dataKey}
                  config={config}
                  x2="0"
                  y2="1"
                />
              ))}
            </defs>
          </RechartsSankey>
        )}
        {isLoading && (
          <svg
            viewBox="0 0 500 250"
            preserveAspectRatio="xMidYMid meet"
            width="100%"
            height="100%"
            style={OVERLAY_STYLE}>
            <LoadingSankey />
          </svg>
        )}
      </ChartContainer>
    </SankeyChartContext>
  );
}

const OVERLAY_STYLE = { position: "absolute", inset: 0 } as const;

// ─────────────────────────────────────────────────────────────────────────────
// Composable parts
// ─────────────────────────────────────────────────────────────────────────────

export interface SankeyNodeProps {
  radius?: number; // corner radius of node rectangles in pixels
  isClickable?: boolean; // lets nodes be selected by clicking them
  children?: ReactNode; // optional <NodeLabel /> composition
}

/**
 * Configures how the nodes render. It renders nothing itself; the root wires
 * its props into the Recharts `node` renderer. Compose a <NodeLabel /> inside
 * it to show labels.
 */
const Node: FC<SankeyNodeProps> = () => null;

export interface SankeyNodeLabelProps {
  position?: SankeyNodeLabelPosition; // places labels inside or beside the nodes
  showValues?: boolean; // appends each node's total flow value
  valueFormatter?: (value: number) => string; // formats node values when shown
}

/** Declares labels for the <Node /> it is composed inside. */
const NodeLabel: FC<SankeyNodeLabelProps> = () => null;

export interface SankeyLinkProps {
  variant?: SankeyLinkVariant; // coloring strategy for the link bands
  verticalPadding?: number; // shrinks link width where it meets a node
}

/**
 * Configures how the links render. Like <Node />, it renders nothing itself;
 * `variant` controls how each link band is colored.
 */
const Link: FC<SankeyLinkProps> = () => null;

export interface SankeyTooltipProps {
  variant?: TooltipVariant;
  roundness?: TooltipRoundness;
  defaultIndex?: number; // data index shown with no hover
}

/** The hover tooltip. Hidden while loading. */
function Tooltip({ variant, roundness, defaultIndex }: SankeyTooltipProps) {
  const { isLoading } = useSankeyChart();

  if (isLoading) return null;

  return (
    <ChartTooltip
      defaultIndex={defaultIndex}
      content={
        <ChartTooltipContent
          nameKey="name"
          hideLabel
          roundness={roundness}
          variant={variant}
        />
      }
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Children resolution — turns composed <Node />/<Link /> into Sankey renderers
// ─────────────────────────────────────────────────────────────────────────────

// Sums a node's outgoing flow, falling back to incoming flow for leaf nodes
const getNodeValue = (data: SankeyData, nodeName: string): number => {
  const nodeIndex = data.nodes.findIndex(node => node.name === nodeName);
  if (nodeIndex === -1) return 0;

  const outgoing = data.links
    .filter(link => link.source === nodeIndex)
    .reduce((sum, link) => sum + link.value, 0);
  const incoming = data.links
    .filter(link => link.target === nodeIndex)
    .reduce((sum, link) => sum + link.value, 0);

  return outgoing > 0 ? outgoing : incoming;
};

// Reads composed <Node /> and <Link /> children into the Sankey `node`/`link`
// render props
const resolveSankeyRenderers = (
  children: ReactNode
): Pick<RechartsSankeyProps, "node" | "link"> => {
  let nodeProps: SankeyNodeProps | null = null;
  let linkProps: SankeyLinkProps | null = null;

  Children.forEach(children, child => {
    if (!isValidElement(child)) return;

    if (child.type === Node) {
      nodeProps = (child as ReactElement<SankeyNodeProps>).props;
    }

    if (child.type === Link) {
      linkProps = (child as ReactElement<SankeyLinkProps>).props;
    }
  });

  return {
    node: (props: RechartsSankeyNodeProps) => (
      <SankeyNode {...props} nodeConfig={nodeProps} />
    ),
    link: (props: RechartsSankeyLinkProps) => (
      <SankeyLink {...props} linkConfig={linkProps} />
    )
  };
};

// Reads the <NodeLabel /> composed inside a <Node />, if any
const resolveNodeLabel = (children: ReactNode): SankeyNodeLabelProps | null => {
  let label: SankeyNodeLabelProps | null = null;

  Children.forEach(children, child => {
    if (isValidElement(child) && child.type === NodeLabel) {
      label = (child as ReactElement<SankeyNodeLabelProps>).props;
    }
  });

  return label;
};

// ─────────────────────────────────────────────────────────────────────────────
// Node renderer
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Renders one node rectangle plus its optional label and value, configured
 * from the composed <Node />.
 */
const SankeyNode = ({
  x,
  y,
  width,
  height,
  payload,
  nodeConfig
}: RechartsSankeyNodeProps & { nodeConfig: SankeyNodeProps | null }) => {
  const { config, chartId, data, selectedNode, selectNode } = useSankeyChart();

  const radius = nodeConfig?.radius ?? 0;
  const isClickable = nodeConfig?.isClickable ?? false;
  const label = resolveNodeLabel(nodeConfig?.children);

  const nodeName: string = payload.name;
  const nodeValue = payload.value;
  const nodeIcon = (payload as RechartsSankeyNode & { icon?: ReactNode }).icon;

  const isHighlighted = isNodeConnected(data, selectedNode, nodeName);
  const hasConfigColor = nodeName in config;
  const configLabel = config[nodeName]?.label ?? nodeName;
  const dimmed = isClickable && !isHighlighted;

  const valueFormatter =
    label?.valueFormatter ?? ((value: number) => value.toLocaleString());
  const showValues = label?.showValues ?? false;

  const labelX = x + width / 2;
  const labelY = showValues ? y + height / 2 - 8 : y + height / 2;
  const valueY = y + height / 2 + 8;
  // Sinks (no outgoing links) sit on the right edge, so their outside labels
  // go on the left instead of being clipped by the chart
  const isSink = payload.targetLinks.length === 0;
  const outsideLabelX = isSink ? x - 8 : x + width + 8;
  const outsideAnchor = isSink ? "end" : "start";
  const outsideLabelY = y + height / 2;

  return (
    <Layer>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={radius}
        ry={radius}
        fill={
          hasConfigColor
            ? `url(#${chartId}-sankey-colors-${nodeName})`
            : FALLBACK_COLOR
        }
        fillOpacity={dimmed ? 0.15 : 0.9}
        style={{
          transition: TRANSITION,
          ...(isClickable ? { cursor: "pointer" } : {})
        }}
        onClick={() => {
          if (!isClickable) return;
          selectNode(selectedNode === nodeName ? null : nodeName);
        }}
      />
      {label?.position === "inside" && (
        <>
          {/* Tints the node toward the surface so the label stays legible */}
          <rect
            x={x + 1}
            y={y + 1}
            width={width - 2}
            height={height - 2}
            rx={Math.max(0, radius - 1)}
            ry={Math.max(0, radius - 1)}
            fill="var(--elevated)"
            fillOpacity={0.5}
            opacity={dimmed ? 0.3 : 1}
            style={{ transition: TRANSITION, pointerEvents: "none" }}
          />
          {nodeIcon && (
            <foreignObject
              x={labelX - 8}
              y={labelY - 30}
              width={16}
              height={16}
              opacity={dimmed ? 0.3 : 1}
              style={{ transition: TRANSITION, pointerEvents: "none" }}>
              <div style={ICON_STYLE}>{nodeIcon}</div>
            </foreignObject>
          )}
          <text
            x={labelX}
            y={nodeIcon ? labelY - 4 : labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={LABEL_COLOR}
            fontSize={10}
            fontWeight={500}
            opacity={dimmed ? 0.3 : 1}
            style={{ transition: TRANSITION, pointerEvents: "none" }}>
            {configLabel}
          </text>
          {showValues && (
            <text
              x={labelX}
              y={valueY}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={VALUE_COLOR}
              fontSize={12}
              fontWeight={500}
              opacity={dimmed ? 0.3 : 1}
              style={VALUE_STYLE}>
              {valueFormatter(nodeValue)}
            </text>
          )}
        </>
      )}
      {label?.position === "outside" && (
        <>
          <text
            x={outsideLabelX}
            y={outsideLabelY - (showValues ? 8 : 0)}
            textAnchor={outsideAnchor}
            dominantBaseline="middle"
            fill={LABEL_COLOR}
            fontSize={12}
            style={{ pointerEvents: "none" }}>
            {configLabel}
          </text>
          {showValues && (
            <text
              x={outsideLabelX}
              y={outsideLabelY + 8}
              textAnchor={outsideAnchor}
              dominantBaseline="middle"
              fill={VALUE_COLOR}
              fontSize={12}
              style={VALUE_STYLE}>
              {valueFormatter(nodeValue)}
            </text>
          )}
        </>
      )}
    </Layer>
  );
};

const ICON_STYLE = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--ink)",
  opacity: 0.8
} as const;

const VALUE_STYLE = {
  transition: TRANSITION,
  pointerEvents: "none",
  fontVariantNumeric: "tabular-nums"
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Link renderer
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Renders one link band, colored by the composed <Link /> variant. Bands
 * connected to the selected node are highlighted and the rest dimmed.
 */
const SankeyLink = ({
  sourceX,
  targetX,
  sourceY,
  targetY,
  sourceControlX,
  targetControlX,
  linkWidth,
  index,
  payload,
  linkConfig
}: RechartsSankeyLinkProps & { linkConfig: SankeyLinkProps | null }) => {
  const { config, chartId, selectedNode } = useSankeyChart();

  const variant = linkConfig?.variant ?? "gradient";
  const verticalPadding = linkConfig?.verticalPadding ?? 0;

  const sourceName: string = payload.source.name;
  const targetName: string = payload.target.name;

  const isConnected =
    selectedNode === null ||
    selectedNode === sourceName ||
    selectedNode === targetName;

  const halfWidth = Math.max(1, linkWidth - verticalPadding) / 2;

  const linkAreaPath = `M${sourceX},${sourceY - halfWidth}
    C${sourceControlX},${sourceY - halfWidth} ${targetControlX},${targetY - halfWidth} ${targetX},${targetY - halfWidth}
    L${targetX},${targetY + halfWidth}
    C${targetControlX},${targetY + halfWidth} ${sourceControlX},${sourceY + halfWidth} ${sourceX},${sourceY + halfWidth}
    Z`;

  return (
    <Layer>
      <defs>
        {variant === "gradient" && (
          <LinkGradient
            chartId={chartId}
            index={index}
            config={config}
            sourceName={sourceName}
            targetName={targetName}
          />
        )}
        <LinkStrokeGradient chartId={chartId} index={index} />
      </defs>
      <path
        d={linkAreaPath}
        fill={getLinkFill(
          variant,
          chartId,
          index,
          config,
          sourceName,
          targetName
        )}
        fillOpacity={isConnected ? 0.4 : 0.1}
        stroke={
          selectedNode !== null && isConnected
            ? `url(#${chartId}-link-stroke-${index})`
            : "none"
        }
        strokeWidth={1}
        strokeOpacity={1}
        style={{ transition: TRANSITION }}
      />
    </Layer>
  );
};

// Checks whether a node is the selected one or directly linked to it
const isNodeConnected = (
  data: SankeyData,
  selectedNode: string | null,
  nodeName: string
): boolean => {
  if (selectedNode === null || selectedNode === nodeName) return true;

  const selectedIdx = data.nodes.findIndex(node => node.name === selectedNode);
  const nodeIdx = data.nodes.findIndex(node => node.name === nodeName);

  return data.links.some(
    link =>
      (link.source === selectedIdx && link.target === nodeIdx) ||
      (link.source === nodeIdx && link.target === selectedIdx)
  );
};

// Resolves the SVG paint for a link band based on its variant
const getLinkFill = (
  variant: SankeyLinkVariant,
  chartId: string,
  index: number,
  config: ChartConfig,
  sourceName: string,
  targetName: string
): string => {
  switch (variant) {
    case "gradient":
      return `url(#${chartId}-link-gradient-${index})`;
    case "source":
      return sourceName in config
        ? `url(#${chartId}-sankey-colors-${sourceName})`
        : FALLBACK_COLOR;
    case "target":
      return targetName in config
        ? `url(#${chartId}-sankey-colors-${targetName})`
        : FALLBACK_COLOR;
    case "solid":
    default:
      return FALLBACK_COLOR;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Style definitions — SVG defs scoped to the chart's unique id
// ─────────────────────────────────────────────────────────────────────────────

/** Source-to-target fade that fills a single gradient-variant link. */
const LinkGradient = ({
  chartId,
  index,
  config,
  sourceName,
  targetName
}: {
  chartId: string;
  index: number;
  config: ChartConfig;
  sourceName: string;
  targetName: string;
}) => {
  const sourceColor =
    sourceName in config ? `var(--color-${sourceName}-0)` : FALLBACK_COLOR;
  const targetColor =
    targetName in config ? `var(--color-${targetName}-0)` : FALLBACK_COLOR;

  return (
    <linearGradient
      id={`${chartId}-link-gradient-${index}`}
      x1="0%"
      y1="0%"
      x2="100%"
      y2="0%">
      <stop offset="0%" stopColor={sourceColor} stopOpacity={0.2} />
      <stop offset="50%" stopColor={sourceColor} stopOpacity={0.5} />
      <stop offset="100%" stopColor={targetColor} stopOpacity={0.2} />
    </linearGradient>
  );
};

/** Primary-colored stroke highlighting a link connected to the selection. */
const LinkStrokeGradient = ({
  chartId,
  index
}: {
  chartId: string;
  index: number;
}) => (
  <linearGradient
    id={`${chartId}-link-stroke-${index}`}
    x1="0%"
    y1="0%"
    x2="100%"
    y2="0%">
    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0} />
    <stop offset="15%" stopColor="var(--primary)" stopOpacity={0.8} />
    <stop offset="50%" stopColor="var(--primary)" stopOpacity={1} />
    <stop offset="85%" stopColor="var(--primary)" stopOpacity={0.8} />
    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
  </linearGradient>
);

// ─────────────────────────────────────────────────────────────────────────────
// Loading skeleton
// ─────────────────────────────────────────────────────────────────────────────

const LOADING_NODES = [
  { x: 30, y: 25, width: 12, height: 65, delay: 0 },
  { x: 30, y: 110, width: 12, height: 50, delay: 0.3 },
  { x: 30, y: 180, width: 12, height: 45, delay: 0.15 },
  { x: 244, y: 20, width: 12, height: 55, delay: 0.45 },
  { x: 244, y: 95, width: 12, height: 75, delay: 0.6 },
  { x: 244, y: 190, width: 12, height: 40, delay: 0.25 },
  { x: 458, y: 35, width: 12, height: 80, delay: 0.5 },
  { x: 458, y: 135, width: 12, height: 90, delay: 0.1 }
];

const LOADING_LINKS = [
  { from: 0, to: 3, width: 26, delay: 0.2 },
  { from: 0, to: 4, width: 18, delay: 0.7 },
  { from: 1, to: 4, width: 24, delay: 0.4 },
  { from: 1, to: 5, width: 12, delay: 0.9 },
  { from: 2, to: 4, width: 16, delay: 0.1 },
  { from: 2, to: 5, width: 14, delay: 0.55 },
  { from: 3, to: 6, width: 22, delay: 0.35 },
  { from: 3, to: 7, width: 18, delay: 0.8 },
  { from: 4, to: 6, width: 28, delay: 0.05 },
  { from: 4, to: 7, width: 32, delay: 0.65 },
  { from: 5, to: 7, width: 16, delay: 0.45 }
];

// A bezier from the right edge of one skeleton node to the left of another
const getLoadingLinkPath = (fromIdx: number, toIdx: number) => {
  const from = LOADING_NODES[fromIdx]!;
  const to = LOADING_NODES[toIdx]!;
  const startX = from.x + from.width;
  const startY = from.y + from.height / 2;
  const endX = to.x;
  const endY = to.y + to.height / 2;
  const controlX1 = startX + (endX - startX) * 0.4;
  const controlX2 = startX + (endX - startX) * 0.6;

  return `M${startX},${startY} C${controlX1},${startY} ${controlX2},${endY} ${endX},${endY}`;
};

/**
 * The skeleton the root renders in place of the diagram: a fixed grid of
 * pulsing nodes and links.
 */
const LoadingSankey = () => {
  const baseDuration = LOADING_ANIMATION_DURATION / 1000;

  return (
    <>
      {LOADING_LINKS.map((link, i) => (
        <motion.path
          key={`loading-link-${link.from}-${link.to}`}
          d={getLoadingLinkPath(link.from, link.to)}
          fill="none"
          stroke={FALLBACK_COLOR}
          strokeWidth={link.width}
          initial={{ opacity: 0.04 }}
          animate={{ opacity: [0.04, 0.14, 0.04] }}
          transition={{
            duration: baseDuration * (0.8 + (i % 3) * 0.2),
            delay: link.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      {LOADING_NODES.map((node, i) => (
        <motion.rect
          key={`loading-node-${node.x}-${node.y}`}
          x={node.x}
          y={node.y}
          width={node.width}
          height={node.height}
          rx={2}
          fill={FALLBACK_COLOR}
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{
            duration: baseDuration * (0.9 + (i % 4) * 0.1),
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

// Every part hangs off the root, so one import covers the whole chart.
SankeyChart.Node = Node;
SankeyChart.NodeLabel = NodeLabel;
SankeyChart.Link = Link;
SankeyChart.Tooltip = Tooltip;

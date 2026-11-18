---
title: Sankey Chart
description: Reference for the SankeyChart component, a composable diagram of flow from sources to destinations.
documentType: reference
tags: [component, chart]
component:
  name: sankey-chart
  package: "@cyclone-ui/sankey-chart"
  stories:
    - title: Charts/SankeyChart
      file: components/sankey-chart/src/SankeyChart.stories.tsx
---

# Sankey Chart

`SankeyChart` shows how a quantity flows from sources to destinations. Links can use a gradient, a solid color, the source color, or the target color. Nodes can carry labels inside or beside them.

The chart also supports a loading skeleton.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add sankey-chart
pnpm install
```

- **File:** `SankeyChart.tsx`. The CLI writes it to `<path>/sankey-chart/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Chart](./chart.md), [Number Text](./number-text.md), and [Spinner](./spinner.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `motion` and `recharts`.

## Import

```tsx
import { SankeyChart } from "@cyclone-ui/sankey-chart";
```

Place the parts inside `SankeyChart`. Outside it they throw.

## Usage

```tsx
<SankeyChart
  data={{
    nodes: [{ name: "Source" }, { name: "Target" }],
    links: [{ source: 0, target: 1, value: 20 }]
  }}
  config={{
    Source: { label: "Source" },
    Target: { label: "Target" }
  }}
>
  <SankeyChart.Node>
    <SankeyChart.NodeLabel position="outside" showValues />
  </SankeyChart.Node>
  <SankeyChart.Link variant="gradient" />
  <SankeyChart.Tooltip />
</SankeyChart>
```

`config` is keyed by node name. `data` is the Recharts Sankey node and link model (`SankeyData`).

## Anatomy

```tsx
<SankeyChart>
  <SankeyChart.Node>
    <SankeyChart.NodeLabel />
  </SankeyChart.Node>
  <SankeyChart.Link />
  <SankeyChart.Tooltip />
</SankeyChart>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `SankeyChart` | A [`ChartContainer`](./chart.md#props) (a Tamagui `YStack` around a Recharts `ResponsiveContainer`) that holds a Recharts `Sankey` and SVG `<defs>` with one vertical gradient per `config` key. With `backgroundVariant`, a separate `<svg>` behind the chart holds a `ChartBackground`. | Owns the flow data, layout, selection, and loading skeleton. |
| `SankeyChart.Node` | Nothing by itself. The root gives its props to the Recharts `node` renderer, which draws each node as a Recharts `Layer` with an SVG `<rect>`. | The node rectangles. |
| `SankeyChart.NodeLabel` | Nothing by itself. The parent `Node` draws SVG `<text>` for the label and the value. An inside label also tints the node, and shows the node's `icon` (from `data`) in a `<foreignObject>`. | Labels. Place the label inside `Node`. |
| `SankeyChart.Link` | Nothing by itself. The root gives its props to the Recharts `link` renderer, which draws each link as a Recharts `Layer` with an SVG `<path>` band and its gradients. | The bands between nodes. |
| `SankeyChart.Tooltip` | A Recharts `Tooltip` with `ChartTooltipContent` | Hover details. It hides while the chart loads. |

While the chart loads, the root draws an animated skeleton diagram in its own `<svg>` instead of the Recharts `Sankey`, and a `LoadingIndicator`.

`SankeyChartNode`, `SankeyChartNodeLabel`, `SankeyChartLink`, and `SankeyChartTooltip` are also exported by name. Use them in React Server Components, which cannot read `SankeyChart.Node` from a client module.

## Examples

The examples are the stories in [`SankeyChart.stories.tsx`](../../../components/sankey-chart/src/SankeyChart.stories.tsx). Every story has clickable nodes (except `Loading`) and a tooltip. The nodes use the default data palette unless noted.

| Stories | What they show |
| --- | --- |
| `Base` | A marketing funnel with outside labels and values, and `source` links. |
| `Background` | The same funnel with `backgroundVariant="dots"`. |
| `LabeledNodes` | Wide nodes (`nodeWidth={80}`) with inside labels and values, `radius={4}`, `gradient` links with `verticalPadding={8}`, and one- and two-color node gradients. |
| `OutsideLabels` | Narrow nodes (`nodeWidth={8}`) with outside labels and formatted values. |
| `SolidLabeledNodes` | Wide nodes with inside labels and no values, and `source` links with `verticalPadding={8}`. |
| `SolidLinkVariant` | `solid` links on nodes with no labels. |
| `SourceLinkVariant` | `source` links on a data pipeline, with no labels. |
| `GradientColors` | Two-color (`subtle` to `emphasis`) node gradients with `gradient` links and outside labels. |
| `Loading` | The loading skeleton (`isLoading` with empty data). |

## Props

### SankeyChart

`SankeyChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `SankeyData` | - | Nodes and links. Required. |
| `config` | `ChartConfig` | - | Node colors and labels. Required. |
| `children` | `ReactNode` | - | The composed parts. Required. |
| `nodeWidth` | `number` | `10` | Width of each node, in pixels. |
| `nodePadding` | `number` | `10` | Vertical gap between nodes, in pixels. |
| `linkCurvature` | `number` | `0.5` | Curve amount, from `0` (straight) to `1`. |
| `iterations` | `number` | `32` | Layout passes. A higher number is more accurate. |
| `sort` | `boolean` | `true` | Sorts nodes for the layout. |
| `align` | `"left" \| "justify"` | `"justify"` | Horizontal node alignment. |
| `verticalAlign` | `"justify" \| "top"` | `"justify"` | Vertical node alignment. |
| `backgroundVariant` | `BackgroundVariant` | - | A [background pattern](./chart.md#background-patterns). |
| `defaultSelectedNode` | `string \| null` | `null` | The node selected on first render. |
| `onSelectionChange` | `(selection: { dataKey: string; value: number } \| null) => void` | - | Called with `{ dataKey, value }`, or `null`. `dataKey` is the node name. `value` is the node's outgoing flow, or its incoming flow when it has no outgoing links. |
| `isLoading` | `boolean` | `false` | Shows the loading skeleton. |
| `sankeyProps` | Recharts `Sankey` props | - | Extra Recharts Sankey props. `data` is omitted. |

A node name that is not a `config` key draws in the `ink` color.

### SankeyChart.Node

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `radius` | `number` | `0` | Corner radius in pixels. |
| `isClickable` | `boolean` | `false` | A click selects a node. Nodes that are not connected to the selected node dim. |
| `children` | `ReactNode` | - | Optional `NodeLabel`. |

### SankeyChart.NodeLabel

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `"inside" \| "outside"` | - | Places labels inside or beside the nodes. Without a position, no label shows. An outside label sits to the left of a node with no outgoing links, and to the right of other nodes. |
| `showValues` | `boolean` | `false` | Adds each node's total flow value under the label. |
| `valueFormatter` | `(value: number) => string` | `value.toLocaleString()` | Formats node values when shown. |

### SankeyChart.Link

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `SankeyLinkVariant` | `"gradient"` | `gradient` (source to target), `solid` (the `ink` color), `source`, or `target`. |
| `verticalPadding` | `number` | `0` | Shrinks the link where it meets a node, in pixels. |

When a node is selected, the links connected to it get an outline and the other links fade.

### SankeyChart.Tooltip

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `TooltipVariant` | `"default"` | `default` or `frosted-glass`. |
| `roundness` | `TooltipRoundness` | `tooltip` radius token | `sm`, `md`, `lg`, or `xl`. |
| `defaultIndex` | `number` | - | The data index shown with no hover. |

## Related

- [Chart](./chart.md)

## Source

- [`components/sankey-chart/src/SankeyChart.tsx`](../../../components/sankey-chart/src/SankeyChart.tsx)
- [`components/sankey-chart/src/SankeyChart.stories.tsx`](../../../components/sankey-chart/src/SankeyChart.stories.tsx) (title: `Charts/SankeyChart`)

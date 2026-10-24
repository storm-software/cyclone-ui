---
title: Sankey chart
description: Reference for the SankeyChart component, a composable diagram of flow from sources to destinations.
documentType: reference
tags: [component, chart]
---

# Sankey chart

`SankeyChart` shows how a quantity flows from sources to destinations. Links can use a gradient, a solid color, the source color, or the target color. Nodes can carry labels inside or beside them.

The chart also supports a loading skeleton.

Source: [`components/sankey-chart`](https://github.com/storm-software/cyclone-ui/tree/main/components/sankey-chart)

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

| Part | Purpose |
| --- | --- |
| `SankeyChart` | Owns the flow data, layout, selection, and loading skeleton. |
| `SankeyChart.Node` | The node rectangles. |
| `SankeyChart.NodeLabel` | Labels. Place the label inside `Node`. |
| `SankeyChart.Link` | The bands between nodes. |
| `SankeyChart.Tooltip` | Hover details. |

## Root props

`SankeyChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Purpose |
| --- | --- |
| `data` | Nodes and links. Required. |
| `config` | Node colors and labels. Required. |
| `children` | The composed parts. Required. |
| `nodeWidth` | Width of each node, in pixels. |
| `nodePadding` | Vertical gap between nodes, in pixels. |
| `linkCurvature` | Curve amount, from `0` (straight) to `1`. |
| `iterations` | Layout passes. A higher number is more accurate. |
| `sort` | Sorts nodes for the layout. |
| `align` | `left` or `justify`. |
| `verticalAlign` | `justify` or `top`. |
| `backgroundVariant` | A [background pattern](./chart.md#background-patterns). |
| `defaultSelectedNode` | The node selected on first render. Default `null`. |
| `onSelectionChange` | Called with `{ dataKey, value }`, or `null`. |
| `isLoading` | Shows the loading skeleton. Default `false`. |
| `sankeyProps` | Extra Recharts Sankey props. `data` is omitted. |

## Node, label, and link props

`Node` takes `radius` (corner radius in pixels), `isClickable`, and `children` for an optional `NodeLabel`.

`NodeLabel` takes `position` (`inside` or `outside`), `showValues`, and `valueFormatter`.

`Link` takes `variant` (`gradient`, `solid`, `source`, or `target`) and `verticalPadding`. Padding shrinks the link where it meets a node.

`Tooltip` takes `variant`, `roundness`, and `defaultIndex`. The shared values are on the [chart](./chart.md) page.

## Related pages

- [Chart](./chart.md)

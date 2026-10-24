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

import type { ChartConfig } from "@cyclone-ui/chart";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "@tamagui/stacks";
import type { SankeyData } from "recharts";
import { SankeyChart } from "./SankeyChart";

// Marketing funnel — user acquisition to conversions
const funnelData: SankeyData = {
  nodes: [
    { name: "Organic" },
    { name: "PaidAds" },
    { name: "Social" },
    { name: "Landing" },
    { name: "Product" },
    { name: "Cart" },
    { name: "Purchase" },
    { name: "Bounced" }
  ],
  links: [
    { source: 0, target: 3, value: 42000 },
    { source: 1, target: 3, value: 28000 },
    { source: 2, target: 3, value: 18000 },
    { source: 3, target: 4, value: 52000 },
    { source: 3, target: 7, value: 36000 },
    { source: 4, target: 5, value: 31000 },
    { source: 4, target: 7, value: 21000 },
    { source: 5, target: 6, value: 24000 },
    { source: 5, target: 7, value: 7000 }
  ]
};

// No `colors`: nodes take the theme's data palette in order
const funnelConfig = {
  Organic: { label: "Organic Search" },
  PaidAds: { label: "Paid Ads" },
  Social: { label: "Social Media" },
  Landing: { label: "Landing Page" },
  Product: { label: "Product Page" },
  Cart: { label: "Cart" },
  Purchase: { label: "Purchase" },
  Bounced: { label: "Bounced" }
} satisfies ChartConfig;

// Damage flow between three columns of CRT / PPT / DMG nodes
const damageNodes = [
  { name: "CRT_L" },
  { name: "PPT_L" },
  { name: "DMG_L" },
  { name: "PPT_M" },
  { name: "DMG_M" },
  { name: "CRT_R" },
  { name: "PPT_R" },
  { name: "DMG_R" }
];

const damageData: SankeyData = {
  nodes: damageNodes,
  links: [
    { source: 0, target: 3, value: 750 },
    { source: 0, target: 4, value: 502 },
    { source: 1, target: 3, value: 1500 },
    { source: 1, target: 4, value: 1498 },
    { source: 2, target: 3, value: 3931 },
    { source: 2, target: 4, value: 1612 },
    { source: 3, target: 5, value: 2000 },
    { source: 3, target: 6, value: 2091 },
    { source: 3, target: 7, value: 1840 },
    { source: 4, target: 5, value: 1991 },
    { source: 4, target: 7, value: 1158 }
  ]
};

const solidDamageData: SankeyData = {
  nodes: damageNodes,
  links: damageData.links.map((link, index) =>
    index === 0 ? { ...link, value: 800 } : link
  )
};

// Multi-color entries paint a vertical gradient down the node
const damageGradientConfig = {
  CRT_L: { label: "CRT", colors: ["data-green-emphasis"] },
  PPT_L: { label: "PPT", colors: ["data-purple-emphasis"] },
  DMG_L: {
    label: "DMG",
    colors: ["data-blue-emphasis", "data-purple-emphasis"]
  },
  PPT_M: { label: "PPT", colors: ["data-purple-emphasis"] },
  DMG_M: {
    label: "DMG",
    colors: ["data-blue-emphasis", "data-purple-emphasis"]
  },
  CRT_R: { label: "CRT", colors: ["data-green-emphasis"] },
  PPT_R: {
    label: "PPT",
    colors: ["data-purple-emphasis", "data-green-emphasis"]
  },
  DMG_R: {
    label: "DMG",
    colors: ["data-blue-emphasis", "data-green-emphasis"]
  }
} satisfies ChartConfig;

const damageConfig = {
  CRT_L: { label: "CRT" },
  PPT_L: { label: "PPT" },
  DMG_L: { label: "DMG" },
  PPT_M: { label: "PPT" },
  DMG_M: { label: "DMG" },
  CRT_R: { label: "CRT" },
  PPT_R: { label: "PPT" },
  DMG_R: { label: "DMG" }
} satisfies ChartConfig;

// Checkout journey — traffic sources to checkout or abandonment
const checkoutData: SankeyData = {
  nodes: [
    { name: "Direct" },
    { name: "Email" },
    { name: "Referral" },
    { name: "Browse" },
    { name: "Search" },
    { name: "ViewItem" },
    { name: "AddToCart" },
    { name: "Checkout" },
    { name: "Abandoned" }
  ],
  links: [
    { source: 0, target: 3, value: 15200 },
    { source: 1, target: 3, value: 8400 },
    { source: 2, target: 3, value: 6800 },
    { source: 3, target: 4, value: 18600 },
    { source: 3, target: 8, value: 11800 },
    { source: 4, target: 5, value: 12400 },
    { source: 4, target: 8, value: 6200 },
    { source: 5, target: 6, value: 8100 },
    { source: 5, target: 8, value: 4300 },
    { source: 6, target: 7, value: 5400 },
    { source: 6, target: 8, value: 2700 }
  ]
};

const checkoutConfig = {
  Direct: { label: "Direct Traffic" },
  Email: { label: "Email Campaign" },
  Referral: { label: "Referral" },
  Browse: { label: "Browse" },
  Search: { label: "Search" },
  ViewItem: { label: "View Item" },
  AddToCart: { label: "Add to Cart" },
  Checkout: { label: "Checkout" },
  Abandoned: { label: "Abandoned" }
} satisfies ChartConfig;

// Data pipeline — sources through processing to destinations
const pipelineData: SankeyData = {
  nodes: [
    { name: "API" },
    { name: "Database" },
    { name: "Logs" },
    { name: "Ingestion" },
    { name: "Transform" },
    { name: "Analytics" },
    { name: "MLPipeline" },
    { name: "Dashboard" },
    { name: "Archive" }
  ],
  links: [
    { source: 0, target: 3, value: 85000 },
    { source: 1, target: 3, value: 62000 },
    { source: 2, target: 3, value: 43000 },
    { source: 3, target: 4, value: 190000 },
    { source: 4, target: 5, value: 95000 },
    { source: 4, target: 6, value: 55000 },
    { source: 4, target: 8, value: 40000 },
    { source: 5, target: 7, value: 72000 },
    { source: 5, target: 8, value: 23000 },
    { source: 6, target: 7, value: 38000 },
    { source: 6, target: 8, value: 17000 }
  ]
};

const pipelineConfig = {
  API: { label: "API Events" },
  Database: { label: "Database" },
  Logs: { label: "Log Files" },
  Ingestion: { label: "Ingestion Layer" },
  Transform: { label: "Transform" },
  Analytics: { label: "Analytics" },
  MLPipeline: { label: "ML Pipeline" },
  Dashboard: { label: "Dashboard" },
  Archive: { label: "Archive" }
} satisfies ChartConfig;

// Budget allocation — revenue to expenses
const budgetData: SankeyData = {
  nodes: [
    { name: "ProductSales" },
    { name: "Subscriptions" },
    { name: "Services" },
    { name: "TotalRevenue" },
    { name: "Research" },
    { name: "Marketing" },
    { name: "Operations" },
    { name: "Salaries" },
    { name: "Profit" }
  ],
  links: [
    { source: 0, target: 3, value: 450000 },
    { source: 1, target: 3, value: 320000 },
    { source: 2, target: 3, value: 180000 },
    { source: 3, target: 4, value: 185000 },
    { source: 3, target: 5, value: 142000 },
    { source: 3, target: 6, value: 198000 },
    { source: 3, target: 7, value: 285000 },
    { source: 3, target: 8, value: 140000 }
  ]
};

// Light-to-dark shades of one hue per node
const budgetConfig = {
  ProductSales: {
    label: "Product Sales",
    colors: ["data-green-subtle", "data-green-emphasis"]
  },
  Subscriptions: {
    label: "Subscriptions",
    colors: ["data-blue-subtle", "data-blue-emphasis"]
  },
  Services: {
    label: "Services",
    colors: ["data-purple-subtle", "data-purple-emphasis"]
  },
  TotalRevenue: {
    label: "Total Revenue",
    colors: ["data-yellow-subtle", "data-yellow-emphasis"]
  },
  Research: {
    label: "R&D",
    colors: ["data-neutral-subtle", "data-neutral-emphasis"]
  },
  Marketing: {
    label: "Marketing",
    colors: ["data-pink-subtle", "data-pink-emphasis"]
  },
  Operations: {
    label: "Operations",
    colors: ["data-orange-subtle", "data-orange-emphasis"]
  },
  Salaries: {
    label: "Salaries",
    colors: ["data-red-subtle", "data-red-emphasis"]
  },
  Profit: {
    label: "Profit",
    colors: ["data-green-subtle", "data-green-emphasis"]
  }
} satisfies ChartConfig;

// Content distribution — formats to channels
const contentConfig = {
  BlogPosts: { label: "Blog Posts" },
  Videos: { label: "Videos" },
  Podcasts: { label: "Podcasts" },
  Twitter: { label: "Twitter" },
  LinkedIn: { label: "LinkedIn" },
  YouTube: { label: "YouTube" },
  Newsletter: { label: "Newsletter" }
} satisfies ChartConfig;

const formatValue = (value: number) => value.toLocaleString();

// Every story composes its own chart in `render`, so the meta takes no args.
const meta: Meta = {
  title: "Charts/SankeyChart",
  component: SankeyChart,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  decorators: [
    Story => (
      <YStack
        width={640}
        padding="4xl"
        borderWidth={1}
        borderColor="hairline"
        borderRadius="card"
        backgroundColor="elevated">
        <Story />
      </YStack>
    )
  ]
};

export default meta;

type Story = StoryObj;

export const Base: Story = {
  render: () => (
    <SankeyChart data={funnelData} config={funnelConfig}>
      <SankeyChart.Node isClickable>
        <SankeyChart.NodeLabel position="outside" showValues />
      </SankeyChart.Node>
      <SankeyChart.Link variant="source" />
      <SankeyChart.Tooltip />
    </SankeyChart>
  )
};

export const Background: Story = {
  render: () => (
    <SankeyChart
      data={funnelData}
      config={funnelConfig}
      backgroundVariant="dots">
      <SankeyChart.Node isClickable>
        <SankeyChart.NodeLabel position="outside" showValues />
      </SankeyChart.Node>
      <SankeyChart.Link variant="source" />
      <SankeyChart.Tooltip />
    </SankeyChart>
  )
};

export const LabeledNodes: Story = {
  render: () => (
    <SankeyChart
      data={damageData}
      config={damageGradientConfig}
      nodeWidth={80}
      nodePadding={24}>
      <SankeyChart.Node isClickable radius={4}>
        <SankeyChart.NodeLabel
          position="inside"
          showValues
          valueFormatter={formatValue}
        />
      </SankeyChart.Node>
      <SankeyChart.Link variant="gradient" verticalPadding={8} />
      <SankeyChart.Tooltip />
    </SankeyChart>
  )
};

export const OutsideLabels: Story = {
  render: () => (
    <SankeyChart
      data={funnelData}
      config={funnelConfig}
      nodeWidth={8}
      nodePadding={20}>
      <SankeyChart.Node isClickable radius={4}>
        <SankeyChart.NodeLabel
          position="outside"
          showValues
          valueFormatter={formatValue}
        />
      </SankeyChart.Node>
      <SankeyChart.Link variant="source" />
      <SankeyChart.Tooltip />
    </SankeyChart>
  )
};

export const SolidLabeledNodes: Story = {
  render: () => (
    <SankeyChart
      data={solidDamageData}
      config={damageConfig}
      nodeWidth={80}
      nodePadding={24}>
      <SankeyChart.Node isClickable radius={4}>
        <SankeyChart.NodeLabel position="inside" valueFormatter={formatValue} />
      </SankeyChart.Node>
      <SankeyChart.Link variant="source" verticalPadding={8} />
      <SankeyChart.Tooltip />
    </SankeyChart>
  )
};

export const SolidLinkVariant: Story = {
  render: () => (
    <SankeyChart data={checkoutData} config={checkoutConfig}>
      <SankeyChart.Node isClickable />
      <SankeyChart.Link variant="solid" />
      <SankeyChart.Tooltip />
    </SankeyChart>
  )
};

export const SourceLinkVariant: Story = {
  render: () => (
    <SankeyChart data={pipelineData} config={pipelineConfig}>
      <SankeyChart.Node isClickable />
      <SankeyChart.Link variant="source" />
      <SankeyChart.Tooltip />
    </SankeyChart>
  )
};

export const GradientColors: Story = {
  render: () => (
    <SankeyChart data={budgetData} config={budgetConfig}>
      <SankeyChart.Node isClickable>
        <SankeyChart.NodeLabel position="outside" showValues />
      </SankeyChart.Node>
      <SankeyChart.Link variant="gradient" />
      <SankeyChart.Tooltip />
    </SankeyChart>
  )
};

export const Loading: Story = {
  render: () => (
    <SankeyChart
      data={{ nodes: [], links: [] }}
      config={contentConfig}
      isLoading>
      <SankeyChart.Node />
      <SankeyChart.Link variant="source" />
      <SankeyChart.Tooltip />
    </SankeyChart>
  )
};

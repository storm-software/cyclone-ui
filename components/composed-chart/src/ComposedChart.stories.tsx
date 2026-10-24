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
import type { ReactNode } from "react";
import { ComposedChart } from "./ComposedChart";

const data = [
  { month: "January", revenue: 4200, profit: 1800 },
  { month: "February", revenue: 5800, profit: 2400 },
  { month: "March", revenue: 4100, profit: 1600 },
  { month: "April", revenue: 6200, profit: 2800 },
  { month: "May", revenue: 5400, profit: 2200 },
  { month: "June", revenue: 7800, profit: 3400 },
  { month: "July", revenue: 6100, profit: 2600 },
  { month: "August", revenue: 8200, profit: 3800 },
  { month: "September", revenue: 5900, profit: 2500 },
  { month: "October", revenue: 6800, profit: 3000 },
  { month: "November", revenue: 7200, profit: 3200 },
  { month: "December", revenue: 9100, profit: 4200 }
];

// No `colors`: series take the theme's data palette in order
const chartConfig = {
  revenue: { label: "Revenue" },
  profit: { label: "Profit" }
} satisfies ChartConfig;

const gradientConfig = {
  revenue: {
    label: "Revenue",
    colors: [
      "data-red-emphasis",
      "data-pink-emphasis",
      "data-purple-emphasis",
      "data-blue-emphasis"
    ]
  },
  profit: {
    label: "Profit",
    colors: ["data-green-emphasis", "data-blue-emphasis"]
  }
} satisfies ChartConfig;

const shortMonth = (value: string) => value.substring(0, 3);

// Every story composes its own chart in `render`, so the meta takes no args.
const meta: Meta = {
  title: "Charts/ComposedChart",
  component: ComposedChart,
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

// The grid, axis, clickable legend and tooltip every example shares
const Example = ({
  config = chartConfig,
  children
}: {
  config?: typeof chartConfig | typeof gradientConfig;
  children: ReactNode;
}) => (
  <ComposedChart data={data} config={config} xDataKey="month">
    <ComposedChart.Grid />
    <ComposedChart.XAxis dataKey="month" tickFormatter={shortMonth} />
    <ComposedChart.Legend isClickable />
    <ComposedChart.Tooltip />
    {children}
  </ComposedChart>
);

export const Base: Story = {
  render: () => (
    <ComposedChart data={data} config={chartConfig} xDataKey="month">
      <ComposedChart.Grid />
      <ComposedChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <ComposedChart.Brush formatLabel={value => shortMonth(String(value))} />
      <ComposedChart.Legend isClickable />
      <ComposedChart.Tooltip />
      <ComposedChart.Bar dataKey="revenue" isClickable />
      <ComposedChart.Line dataKey="profit" isClickable>
        <ComposedChart.ActiveDot variant="colored-border" />
        <ComposedChart.Dot variant="default" />
      </ComposedChart.Line>
    </ComposedChart>
  )
};

export const DuotoneVariant: Story = {
  render: () => (
    <Example>
      <ComposedChart.Bar dataKey="revenue" variant="duotone" isClickable />
      <ComposedChart.Line dataKey="profit" isClickable />
    </Example>
  )
};

export const GradientVariant: Story = {
  render: () => (
    <Example>
      <ComposedChart.Bar dataKey="revenue" variant="gradient" isClickable />
      <ComposedChart.Line dataKey="profit" isClickable />
    </Example>
  )
};

export const HatchedVariant: Story = {
  render: () => (
    <Example>
      <ComposedChart.Bar dataKey="revenue" variant="hatched" isClickable />
      <ComposedChart.Line dataKey="profit" isClickable />
    </Example>
  )
};

export const StrippedVariant: Story = {
  render: () => (
    <Example>
      <ComposedChart.Bar dataKey="revenue" variant="stripped" isClickable />
      <ComposedChart.Line dataKey="profit" isClickable />
    </Example>
  )
};

export const DashedStroke: Story = {
  render: () => (
    <Example>
      <ComposedChart.Bar dataKey="revenue" isClickable />
      <ComposedChart.Line dataKey="profit" strokeVariant="dashed" isClickable />
    </Example>
  )
};

export const AnimatedDashedStroke: Story = {
  render: () => (
    <Example>
      <ComposedChart.Bar dataKey="revenue" isClickable />
      <ComposedChart.Line
        dataKey="profit"
        strokeVariant="animated-dashed"
        isClickable
      />
    </Example>
  )
};

export const BumpCurve: Story = {
  render: () => (
    <Example>
      <ComposedChart.Bar dataKey="revenue" isClickable />
      <ComposedChart.Line dataKey="profit" curveType="bump" isClickable />
    </Example>
  )
};

export const Dots: Story = {
  render: () => (
    <Example>
      <ComposedChart.Bar dataKey="revenue" isClickable />
      <ComposedChart.Line dataKey="profit" isClickable>
        <ComposedChart.Dot variant="default" />
        <ComposedChart.ActiveDot variant="border" />
      </ComposedChart.Line>
    </Example>
  )
};

export const Glowing: Story = {
  render: () => (
    <Example>
      <ComposedChart.Bar dataKey="revenue" glow isClickable />
      <ComposedChart.Line dataKey="profit" glow isClickable />
    </Example>
  )
};

export const GradientColors: Story = {
  render: () => (
    <Example config={gradientConfig}>
      <ComposedChart.Bar dataKey="revenue" isClickable />
      <ComposedChart.Line dataKey="profit" isClickable />
    </Example>
  )
};

export const HoverHighlight: Story = {
  render: () => (
    <Example>
      <ComposedChart.Bar dataKey="revenue" enableHoverHighlight isClickable />
      <ComposedChart.Line dataKey="profit" isClickable />
    </Example>
  )
};

export const Loading: Story = {
  render: () => (
    <ComposedChart
      data={[] as typeof data}
      config={chartConfig}
      isLoading
      xDataKey="month">
      <ComposedChart.Grid />
      <ComposedChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <ComposedChart.Legend />
      <ComposedChart.Tooltip />
      <ComposedChart.Bar dataKey="revenue" />
      <ComposedChart.Line dataKey="profit" />
    </ComposedChart>
  )
};

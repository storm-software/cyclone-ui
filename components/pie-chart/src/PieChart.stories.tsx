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
import type { PieProps } from "./PieChart";
import { PieChart } from "./PieChart";

const data = [
  { browser: "chrome", visitors: 275 },
  { browser: "safari", visitors: 200 },
  { browser: "firefox", visitors: 187 },
  { browser: "edge", visitors: 173 },
  { browser: "other", visitors: 90 }
];

// Sectors are keyed by name; each takes the next color of the data palette.
const chartConfig = {
  chrome: { label: "Chrome" },
  safari: { label: "Safari" },
  firefox: { label: "Firefox" },
  edge: { label: "Edge" },
  other: { label: "Other" }
} satisfies ChartConfig;

const gradientConfig = {
  chrome: {
    label: "Chrome",
    colors: ["data-blue-subtle", "data-blue-emphasis"]
  },
  safari: {
    label: "Safari",
    colors: ["data-green-subtle", "data-green-emphasis"]
  },
  firefox: {
    label: "Firefox",
    colors: ["data-orange-subtle", "data-orange-emphasis"]
  },
  edge: {
    label: "Edge",
    colors: ["data-purple-subtle", "data-purple-emphasis"]
  },
  other: {
    label: "Other",
    colors: ["data-neutral-subtle", "data-neutral-emphasis"]
  }
} satisfies ChartConfig;

// Every story composes its own chart in `render`, so meta takes no args.
const meta: Meta = {
  title: "Charts/PieChart",
  component: PieChart,
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

const pieStory = (pieProps: PieProps, config: ChartConfig = chartConfig) => ({
  render: () => (
    <PieChart data={data} dataKey="visitors" nameKey="browser" config={config}>
      <PieChart.Legend isClickable />
      <PieChart.Tooltip />
      <PieChart.Pie {...pieProps} />
    </PieChart>
  )
});

export const Base: Story = pieStory({ isClickable: true });

export const Donut: Story = pieStory({ isClickable: true, innerRadius: 60 });

export const Labels: Story = pieStory({
  isClickable: true,
  innerRadius: 30,
  paddingAngle: 4,
  cornerRadius: 8,
  children: <PieChart.Label />
});

export const Padded: Story = pieStory({
  isClickable: true,
  innerRadius: 30,
  paddingAngle: 4,
  cornerRadius: 8
});

export const OverlappingPadded: Story = pieStory({
  innerRadius: 60,
  paddingAngle: -25,
  cornerRadius: 99
});

export const Glowing: Story = pieStory({
  isClickable: true,
  glowingSectors: ["chrome", "safari"]
});

export const GradientColors: Story = pieStory(
  { isClickable: true },
  gradientConfig
);

export const Loading: Story = {
  render: () => (
    <PieChart
      data={[] as typeof data}
      dataKey="visitors"
      nameKey="browser"
      config={chartConfig}
      isLoading>
      <PieChart.Legend isClickable />
      <PieChart.Tooltip />
      <PieChart.Pie isClickable />
    </PieChart>
  )
};

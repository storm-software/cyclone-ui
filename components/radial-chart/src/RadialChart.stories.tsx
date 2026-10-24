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
import { RadialChart } from "./RadialChart";

const data = [
  { browser: "chrome", visitors: 275 },
  { browser: "safari", visitors: 200 },
  { browser: "firefox", visitors: 187 },
  { browser: "edge", visitors: 173 },
  { browser: "other", visitors: 90 }
];

// Bars are keyed by name; each takes the next color of the data palette.
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
    colors: ["data-red-emphasis", "data-yellow-emphasis", "data-blue-emphasis"]
  },
  safari: {
    label: "Safari",
    colors: [
      "data-purple-emphasis",
      "data-pink-emphasis",
      "data-yellow-emphasis"
    ]
  },
  firefox: {
    label: "Firefox",
    colors: [
      "data-green-emphasis",
      "data-blue-emphasis",
      "data-purple-emphasis"
    ]
  },
  edge: {
    label: "Edge",
    colors: [
      "data-orange-emphasis",
      "data-red-emphasis",
      "data-purple-emphasis"
    ]
  },
  other: {
    label: "Other",
    colors: ["data-green-subtle", "data-green-emphasis", "data-blue-emphasis"]
  }
} satisfies ChartConfig;

// Every story composes its own chart in `render`, so meta takes no args.
const meta: Meta = {
  title: "Charts/RadialChart",
  component: RadialChart,
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
    <RadialChart
      data={data}
      nameKey="browser"
      config={chartConfig}
      variant="full">
      <RadialChart.Legend isClickable />
      <RadialChart.Tooltip />
      <RadialChart.RadialBar dataKey="visitors" isClickable />
    </RadialChart>
  )
};

export const SemiVariant: Story = {
  render: () => (
    <RadialChart
      data={data}
      nameKey="browser"
      config={chartConfig}
      variant="semi">
      <RadialChart.Legend />
      <RadialChart.Tooltip />
      <RadialChart.RadialBar dataKey="visitors" />
    </RadialChart>
  )
};

export const GradientColors: Story = {
  render: () => (
    <RadialChart data={data} nameKey="browser" config={gradientConfig}>
      <RadialChart.Legend />
      <RadialChart.Tooltip />
      <RadialChart.RadialBar dataKey="visitors" />
    </RadialChart>
  )
};

export const Loading: Story = {
  render: () => (
    <RadialChart
      data={[] as typeof data}
      nameKey="browser"
      config={chartConfig}
      isLoading>
      <RadialChart.Legend />
      <RadialChart.Tooltip />
      <RadialChart.RadialBar dataKey="visitors" />
    </RadialChart>
  )
};

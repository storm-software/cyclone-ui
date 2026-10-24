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
import type { RadarVariant } from "./RadarChart";
import { RadarChart } from "./RadarChart";

const data = [
  { skill: "JavaScript", desktop: 186, mobile: 80 },
  { skill: "TypeScript", desktop: 305, mobile: 200 },
  { skill: "React", desktop: 237, mobile: 120 },
  { skill: "Node.js", desktop: 173, mobile: 190 },
  { skill: "CSS", desktop: 209, mobile: 130 },
  { skill: "Python", desktop: 214, mobile: 140 }
];

// No `colors`: series take the theme's data palette in order
const chartConfig = {
  desktop: { label: "Desktop" },
  mobile: { label: "Mobile" }
} satisfies ChartConfig;

const gradientConfig = {
  desktop: {
    label: "Desktop",
    colors: ["data-blue-emphasis", "data-purple-emphasis", "data-pink-emphasis"]
  },
  mobile: {
    label: "Mobile",
    colors: ["data-green-emphasis", "data-blue-emphasis"]
  }
} satisfies ChartConfig;

// Every story composes its own chart in `render`, so the meta takes no args.
const meta: Meta = {
  title: "Charts/RadarChart",
  component: RadarChart,
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

const Series = ({
  variant = "filled",
  isClickable,
  isGlowing
}: {
  variant?: RadarVariant;
  isClickable?: boolean;
  isGlowing?: boolean;
}) => (
  <>
    <RadarChart.Radar
      dataKey="desktop"
      variant={variant}
      isClickable={isClickable}
      isGlowing={isGlowing}>
      <RadarChart.Dot variant="colored-border" />
      <RadarChart.ActiveDot variant="default" />
    </RadarChart.Radar>
    <RadarChart.Radar
      dataKey="mobile"
      variant={variant}
      isClickable={isClickable}>
      <RadarChart.Dot variant="colored-border" />
      <RadarChart.ActiveDot variant="default" />
    </RadarChart.Radar>
  </>
);

export const Base: Story = {
  render: () => (
    <RadarChart data={data} config={chartConfig}>
      <RadarChart.PolarGrid />
      <RadarChart.PolarAngleAxis dataKey="skill" />
      <RadarChart.Legend isClickable />
      <RadarChart.Tooltip />
      <Series isClickable />
    </RadarChart>
  )
};

export const CircleGrid: Story = {
  render: () => (
    <RadarChart data={data} config={chartConfig}>
      <RadarChart.PolarGrid gridType="circle" />
      <RadarChart.PolarAngleAxis dataKey="skill" />
      <RadarChart.Legend />
      <RadarChart.Tooltip />
      <Series />
    </RadarChart>
  )
};

export const LinesVariant: Story = {
  render: () => (
    <RadarChart data={data} config={chartConfig}>
      <RadarChart.PolarGrid />
      <RadarChart.PolarAngleAxis dataKey="skill" />
      <RadarChart.Legend />
      <RadarChart.Tooltip />
      <Series variant="lines" />
    </RadarChart>
  )
};

export const Glowing: Story = {
  render: () => (
    <RadarChart data={data} config={chartConfig}>
      <RadarChart.PolarGrid />
      <RadarChart.PolarAngleAxis dataKey="skill" />
      <RadarChart.Legend />
      <RadarChart.Tooltip />
      <Series isGlowing />
    </RadarChart>
  )
};

export const GradientColors: Story = {
  render: () => (
    <RadarChart data={data} config={gradientConfig}>
      <RadarChart.PolarGrid />
      <RadarChart.PolarAngleAxis dataKey="skill" />
      <RadarChart.Legend />
      <RadarChart.Tooltip />
      <Series />
    </RadarChart>
  )
};

export const Loading: Story = {
  render: () => (
    <RadarChart data={[] as typeof data} config={chartConfig} isLoading>
      <RadarChart.PolarGrid />
      <RadarChart.PolarAngleAxis dataKey="skill" />
      <RadarChart.Legend />
      <RadarChart.Tooltip />
      <RadarChart.Radar dataKey="desktop" variant="filled" />
      <RadarChart.Radar dataKey="mobile" variant="filled" />
    </RadarChart>
  )
};

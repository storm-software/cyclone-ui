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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text, View } from "@tamagui/tailwind";
import type { GlitchSeparatorProps } from "./GlitchSeparator.tailwind";
import { GlitchSeparator } from "./GlitchSeparator.tailwind";

// A theme key (`canvas`) or a hex color (`[#171920]`) as a class suffix.
const color = (value: string) => (value.startsWith("#") ? `[${value}]` : value);

const sections =
  (top: string, bottom: string) => (args: GlitchSeparatorProps) => (
    <View className="min-h-[360px] w-full flex-col">
      <View className={`flex-1 items-center justify-center bg-${color(top)}`}>
        <Text className={`text-${color(bottom)}`}>Top section</Text>
      </View>
      <GlitchSeparator
        {...args}
        className={`bg-${color(top)} ${args.className ?? ""}`}
        bottomColor={bottom}
      />
      <View
        className={`flex-1 items-center justify-center bg-${color(bottom)}`}>
        <Text className={`text-${color(top)}`}>Bottom section</Text>
      </View>
    </View>
  );

const meta = {
  title: "Display/GlitchSeparator/Tailwind",
  component: GlitchSeparator,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  },
  args: {
    seed: 27,
    animate: "scroll"
  },
  render: sections("#171920", "#f4f3ef")
} satisfies Meta<typeof GlitchSeparator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Reversed: Story = {
  render: sections("#f4f3ef", "#171920")
};

export const AlternatePattern: Story = {
  args: {
    seed: 913
  }
};

export const ThemeTokens: Story = {
  render: sections("canvas", "surface")
};

export const Still: Story = {
  args: {
    animate: "never"
  }
};

export const Always: Story = {
  args: { animate: "always" }
};

export const FixedHeight: Story = {
  args: { className: "h-[120px]" }
};

export const Scroll: Story = {
  args: { animate: "scroll" },
  render: args => (
    <View className="h-[520px] overflow-scroll bg-[#171920]">
      <View className="min-h-[650px] items-center justify-center">
        <Text className="text-[#f4f3ef]">
          Scroll down, then back up to reverse the square reveal.
        </Text>
      </View>
      <GlitchSeparator
        {...args}
        className="bg-[#171920]"
        bottomColor="#f4f3ef"
      />
      <View className="min-h-[700px] bg-[#f4f3ef]" />
    </View>
  )
};

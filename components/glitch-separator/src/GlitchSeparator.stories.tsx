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
import { Text, View } from "@tamagui/core";
import { GlitchSeparator } from "./GlitchSeparator";

const meta = {
  title: "Display/GlitchSeparator",
  component: GlitchSeparator,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  },
  args: {
    topColor: "#171920",
    bottomColor: "#f4f3ef",
    seed: 27,
    animate: "scroll"
  },
  render: args => (
    <View flexDirection="column" minHeight={360} width="100%">
      <View
        flex={1}
        alignItems="center"
        justifyContent="center"
        backgroundColor={args.topColor}>
        <Text color={args.bottomColor}>Top section</Text>
      </View>
      <GlitchSeparator {...args} />
      <View
        flex={1}
        alignItems="center"
        justifyContent="center"
        backgroundColor={args.bottomColor}>
        <Text color={args.topColor}>Bottom section</Text>
      </View>
    </View>
  )
} satisfies Meta<typeof GlitchSeparator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Reversed: Story = {
  args: {
    topColor: "#f4f3ef",
    bottomColor: "#171920"
  }
};

export const AlternatePattern: Story = {
  args: {
    seed: 913
  }
};

export const ThemeTokens: Story = {
  args: {
    topColor: "$surfaceCanvas",
    bottomColor: "$surfaceElevated"
  }
};

export const Still: Story = {
  args: {
    animate: "never"
  }
};

export const Always: Story = {
  args: { animate: "always" }
};

export const Scroll: Story = {
  args: { animate: "scroll" },
  render: args => (
    <View height={520} overflow="scroll" backgroundColor={args.topColor}>
      <View minHeight={650} alignItems="center" justifyContent="center">
        <Text color={args.bottomColor}>
          Scroll down, then back up to reverse the square reveal.
        </Text>
      </View>
      <GlitchSeparator {...args} />
      <View minHeight={700} backgroundColor={args.bottomColor} />
    </View>
  )
};

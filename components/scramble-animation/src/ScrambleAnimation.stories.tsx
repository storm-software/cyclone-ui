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

import {
  HeadingExtraSmallText,
  HeadingLargeText
} from "@cyclone-ui/heading-text";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";

import { ScrambleAnimation } from "./ScrambleAnimation";

const meta: Meta<typeof ScrambleAnimation> = {
  title: "Display/ScrambleAnimation",
  component: ScrambleAnimation,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  decorators: [
    Story => (
      <View backgroundColor="canvas" padding="6xl" maxWidth={720}>
        <Story />
      </View>
    )
  ],
  args: {
    children: (
      <HeadingLargeText color="primary">
        Presence-aware identity management
      </HeadingLargeText>
    )
  }
} satisfies Meta<typeof ScrambleAnimation>;

export default meta;

type Story = StoryObj<typeof ScrambleAnimation>;

export const Default: Story = {};

export const BinaryCharacters: Story = {
  args: {
    scrambleChars: "01",
    speed: 1
  }
};

export const NoIntro: Story = {
  args: {
    intro: false
  }
};

export const MultiLine: Story = {
  args: {
    radius: 60,
    children: (
      <HeadingExtraSmallText color="primary">
        Once upon a time, in a world full of scrambled text, every character
        waited for the pointer to pass by so it could shuffle through random
        symbols before settling back into place.
      </HeadingExtraSmallText>
    )
  }
};

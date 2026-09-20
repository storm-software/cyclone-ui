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

import { HeadingExtraLargeText } from "@cyclone-ui/heading-text";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { Image } from "react-native";

import { RedactedAnimation } from "./RedactedAnimation";

const imageSource = {
  uri: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 128'%3E%3Crect width='192' height='128' fill='%23191a1c'/%3E%3Ccircle cx='96' cy='64' r='44' fill='%236bf1e7'/%3E%3Cpath d='M105 28 67 70h25l-5 30 38-46h-25z' fill='%23191a1c'/%3E%3C/svg%3E"
};

const meta: Meta<typeof RedactedAnimation> = {
  title: "Display/RedactedAnimation",
  component: RedactedAnimation,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  decorators: [
    Story => (
      <View backgroundColor="$surfaceCanvas" padding="$6xl">
        <Story />
      </View>
    )
  ],
  args: {
    children: (
      <HeadingExtraLargeText color="$accent">
        Presence-aware identity management
      </HeadingExtraLargeText>
    )
  }
} satisfies Meta<typeof RedactedAnimation>;

export default meta;

type Story = StoryObj<typeof RedactedAnimation>;

export const SlideLeft: Story = {};

export const SlideRight: Story = {
  args: {
    direction: "right"
  }
};

export const ImageContent: Story = {
  args: {
    children: (
      <Image
        accessibilityLabel="Cyclone UI lightning bolt"
        resizeMode="contain"
        source={imageSource}
        style={{ width: 288, height: 192 }}
      />
    )
  }
};

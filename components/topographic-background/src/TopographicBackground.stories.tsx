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
import { View } from "@tamagui/core";
import { TopographicBackground } from "./TopographicBackground";

const meta: Meta<typeof TopographicBackground> = {
  title: "Display/TopographicBackground",
  component: TopographicBackground,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  },
  args: {
    variant: "interactive"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["interactive", "dark", "light", "color"]
    }
  },
  decorators: [
    Story => (
      <View position="relative" minHeight="100vh" alignSelf="stretch">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof TopographicBackground>;

/** Follows the toolbar theme. Move the pointer to paint colour in. */
export const Interactive: Story = {};

export const Dark: Story = {
  args: { variant: "dark" }
};

export const Light: Story = {
  args: { variant: "light" }
};

export const Color: Story = {
  args: { variant: "color" }
};

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
import { ColorCompositions } from "./ColorCompositions";

const meta = {
  title: "Display/ColorCompositions",
  component: ColorCompositions,
  tags: ["autodocs"],
  args: {
    interval: 1000,
    panelSize: 80,
    maxWidth: 640
  },
  argTypes: {
    interval: { control: { type: "range", min: 0, max: 5000, step: 100 } },
    panelSize: { control: { type: "range", min: 20, max: 200, step: 10 } }
  }
} satisfies Meta<typeof ColorCompositions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const OriginalPalette: Story = {
  args: { interval: 150, palette: "original" }
};

export const VibrantPalette: Story = {
  args: { interval: 150, palette: "vibrant" }
};

export const Fast: Story = {
  args: { interval: 150 }
};

export const Still: Story = {
  args: { interval: 0 }
};

export const Banner: Story = {
  args: { maxWidth: undefined, height: 230 }
};

export const SmallPanels: Story = {
  args: { panelSize: 40 }
};

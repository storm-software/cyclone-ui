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
import { Calendar } from "./Calendar";

const meta = {
  title: "Display/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  args: {
    mode: "single",
    size: "md"
  },
  argTypes: {
    mode: { control: "inline-radio", options: ["single", "range"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] }
  }
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {};

export const Range: Story = {
  args: { mode: "range" }
};

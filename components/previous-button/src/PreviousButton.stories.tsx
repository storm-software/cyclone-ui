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
import { PreviousButton } from "./PreviousButton";

const meta: Meta<typeof PreviousButton> = {
  title: "Triggers/PreviousButton",
  component: PreviousButton,
  tags: ["autodocs"],
  render: (args: any) => <PreviousButton {...args} />
} satisfies Meta<typeof PreviousButton>;

export default meta;

type Story = StoryObj<typeof PreviousButton>;

export const Base: Story = {
  args: {}
};

export const CustomText: Story = {
  args: {
    children: "Custom Text"
  }
};

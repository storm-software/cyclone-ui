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
import { VisuallyHidden } from "./VisuallyHidden";

const meta: Meta<typeof VisuallyHidden> = {
  title: "Base/VisuallyHidden",
  component: VisuallyHidden,
  tags: ["autodocs"],
  render: (args: any) => (
    <VisuallyHidden {...args}>Now you see me...</VisuallyHidden>
  )
} satisfies Meta<typeof VisuallyHidden>;

export default meta;

type Story = StoryObj<typeof VisuallyHidden>;

export const Base: Story = {
  args: {}
};

export const PreserveDimensions: Story = {
  args: {
    preserveDimensions: true
  }
};

export const Visible: Story = {
  args: {
    visible: true
  }
};

export const Animate: Story = {
  args: {
    animate: true
  }
};

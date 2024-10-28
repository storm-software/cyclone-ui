/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import type { Meta, StoryObj } from "@storybook/react";
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

export const Visiable: Story = {
  args: {
    visible: true
  }
};

export const Animate: Story = {
  args: {
    animate: true
  }
};

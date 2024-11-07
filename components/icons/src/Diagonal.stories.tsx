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
import { Diagonal } from "./Diagonal";

const meta: Meta<typeof Diagonal> = {
  title: "Icons/Diagonal",
  component: Diagonal,
  tags: ["autodocs"],
  render: (args: any) => <Diagonal {...args} height="200" width="600" />
} satisfies Meta<typeof Diagonal>;

export default meta;

type Story = StoryObj<typeof Diagonal>;

export const Base: Story = {
  args: {}
};

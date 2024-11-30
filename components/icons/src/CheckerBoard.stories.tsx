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
import { CheckerBoard } from "./CheckerBoard";

const meta: Meta<typeof CheckerBoard> = {
  title: "Icons/CheckerBoard",
  component: CheckerBoard,
  tags: ["autodocs"],
  render: (args: any) => <CheckerBoard {...args} width="790" height="640" />
} satisfies Meta<typeof CheckerBoard>;

export default meta;

type Story = StoryObj<typeof CheckerBoard>;

export const Base: Story = {
  args: {}
};

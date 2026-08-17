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
import { CheckerBoard } from "./CheckerBoard";

const meta: Meta<typeof CheckerBoard> = {
  title: "Vectors/CheckerBoard",
  component: CheckerBoard,
  tags: ["autodocs"],
  render: (args: any) => <CheckerBoard {...args} width="790" height="640" />
} satisfies Meta<typeof CheckerBoard>;

export default meta;

type Story = StoryObj<typeof CheckerBoard>;

export const Base: Story = {
  args: {}
};

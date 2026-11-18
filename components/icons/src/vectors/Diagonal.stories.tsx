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
import { Diagonal } from "./Diagonal";

const meta: Meta<typeof Diagonal> = {
  title: "Vectors/Diagonal",
  component: Diagonal,
  tags: ["autodocs"],
  render: (args: any) => <Diagonal {...args} height="200" width="600" />
} satisfies Meta<typeof Diagonal>;

export default meta;

type Story = StoryObj<typeof Diagonal>;

export const Base: Story = {
  args: {}
};

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
import { PackageCommandCodeBlock } from "./PackageCommandCodeBlock";

const meta = {
  title: "Documentation/PackageCommandCodeBlock",
  tags: ["autodocs", "docs"],
  component: PackageCommandCodeBlock,
  args: {
    packageName: "@cyclone-ui/code-block"
  }
} satisfies Meta<typeof PackageCommandCodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DevelopmentDependency: Story = {
  args: {
    dev: true
  }
};

export const SharedSelection: Story = {
  render: args => (
    <>
      <PackageCommandCodeBlock {...args} />
      <PackageCommandCodeBlock packageName="@cyclone-ui/button" dev={true} />
    </>
  )
};

export const NiAliases: Story = {
  render: () => (
    <>
      <PackageCommandCodeBlock command="nr" args={["dev", "--port=3000"]} />
      <PackageCommandCodeBlock command="nlx" args={["--local", "vitest"]} />
      <PackageCommandCodeBlock command="nup" args={["-i"]} />
      <PackageCommandCodeBlock command="nun" args={["-g", "eslint"]} />
      <PackageCommandCodeBlock command="nci" />
      <PackageCommandCodeBlock command="nd" />
      <PackageCommandCodeBlock command="na" args={["run", "build"]} />
    </>
  )
};

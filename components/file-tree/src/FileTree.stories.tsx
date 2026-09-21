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
import type { ComponentProps } from "react";
import { expect, userEvent, within } from "storybook/test";
import { File, FileTree, Folder } from "./FileTree";

const meta = {
  title: "Docs/FileTree",
  component: FileTree,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    Story => (
      <div style={{ minWidth: 360 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof FileTree>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderFileTree = (args: ComponentProps<typeof FileTree>) => (
  <FileTree {...args}>
    <Folder name="app" defaultOpen>
      <File name="layout.tsx" />
      <File name="page.tsx" />
      <File name="globals.css" />
    </Folder>
    <Folder name="components">
      <File name="button.tsx" />
      <File name="dialog.tsx" />
    </Folder>
    <File name="package.json" />
  </FileTree>
);

const getFolderIcon = (node: unknown, state: "open" | "closed") =>
  (
    node as {
      querySelector: (selector: string) => unknown;
    }
  ).querySelector(`[data-file-tree-folder-icon="${state}"]`);

export const Base: Story = { render: renderFileTree };

export const TogglesFolder: Story = {
  render: renderFileTree,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const components = canvas.getByRole("treeitem", { name: "components" });

    await expect(components).toHaveAttribute("aria-expanded", "false");
    await expect(getFolderIcon(components, "closed")).not.toBeNull();
    await userEvent.click(components);
    await expect(components).toHaveAttribute("aria-expanded", "true");
    await expect(getFolderIcon(components, "open")).not.toBeNull();
    await expect(canvas.getByText("button.tsx")).toBeVisible();
  }
};

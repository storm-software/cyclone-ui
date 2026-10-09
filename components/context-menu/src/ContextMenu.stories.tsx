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

import { Button } from "@cyclone-ui/button";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { ContextMenu } from "./ContextMenu";

const ACTIONS = ["Copy", "Duplicate", "Rename", "Archive", "Delete"];

const meta: Meta<typeof ContextMenu> = {
  title: "Containers/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    }
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string>();

    return (
      <ContextMenu
        {...args}
        open={open}
        onOpenChange={setOpen}
        value={selected}
        onValueChange={value => {
          setSelected(value);
          setOpen(false);
        }}>
        <ContextMenu.Trigger asChild={true}>
          <Button>{selected ?? "Actions"}</Button>
        </ContextMenu.Trigger>
        <ContextMenu.Content width={320}>
          <ContextMenu.Content.ScrollView>
            {ACTIONS.map(action => (
              <ContextMenu.Item
                key={action}
                aria-label={action}
                value={action}
                disabled={action === "Delete"}>
                <ContextMenu.Item.Text>{action}</ContextMenu.Item.Text>
              </ContextMenu.Item>
            ))}
          </ContextMenu.Content.ScrollView>
        </ContextMenu.Content>
      </ContextMenu>
    );
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const document = within(canvasElement.ownerDocument.body);

    await userEvent.click(canvas.getByRole("button", { name: "Actions" }));
    await userEvent.click(
      await document.findByRole("button", { name: "Rename" })
    );
    await waitFor(async () =>
      expect(
        document.queryByRole("button", { name: "Archive" })
      ).not.toBeInTheDocument()
    );
    await expect(canvas.getByRole("button", { name: "Rename" })).toBeVisible();

    // Reopened, the selected item is adorned with a check mark, and the
    // disabled one (adorned with a lock) doesn't close the menu.
    await userEvent.click(canvas.getByRole("button", { name: "Rename" }));
    const menuItem = async (name: string) =>
      (await document.findAllByRole("button", { name })).find(element =>
        element.hasAttribute("data-context-menu-item")
      );
    await expect(await menuItem("Rename")).toHaveAttribute(
      "data-context-menu-item-adorned"
    );
    const remove = await menuItem("Delete");
    await expect(remove).toHaveAttribute("aria-disabled", "true");
    await userEvent.click(remove!);
    await expect(await menuItem("Archive")).toBeInTheDocument();
    await expect(canvas.getByRole("button", { name: "Rename" })).toBeVisible();
  }
};

export const SmallSize: Story = { args: { size: "sm" } };

export const LargeSize: Story = { args: { size: "lg" } };

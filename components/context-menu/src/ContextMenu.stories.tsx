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

const LONG_ACTION = "Move to another workspace and notify every collaborator";

const ACTIONS = [
  "Copy",
  "Duplicate",
  "Rename",
  "Archive",
  LONG_ACTION,
  "Delete"
];

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
    },
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "tertiary", "outlined"]
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
    // On small screens the menu unmounts after the sheet slides out.
    await waitFor(
      async () =>
        expect(
          document.queryByRole("button", { name: "Archive" })
        ).not.toBeInTheDocument(),
      { timeout: 3000 }
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

    // Text that doesn't fit ends in an ellipsis, and hovering it shows the
    // full text in a tooltip.
    const [longText] = await document.findAllByText(LONG_ACTION);
    await waitFor(async () =>
      expect(longText!.scrollWidth).toBeGreaterThan(longText!.clientWidth)
    );
    await userEvent.hover(longText!);
    await waitFor(async () =>
      expect(document.getAllByText(LONG_ACTION)).toHaveLength(2)
    );
  }
};

export const SmallSize: Story = { args: { size: "sm" } };

export const LargeSize: Story = { args: { size: "lg" } };

export const Primary: Story = { args: { variant: "primary" } };

export const Secondary: Story = { args: { variant: "secondary" } };

export const Tertiary: Story = { args: { variant: "tertiary" } };

export const Outlined: Story = { args: { variant: "outlined" } };

export const ThemedAndChildItems: Story = {
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
            <ContextMenu.Item aria-label="Copy" value="Copy">
              <ContextMenu.Item.Text>Copy</ContextMenu.Item.Text>
            </ContextMenu.Item>
            <ContextMenu.Item
              aria-label="Share"
              items={["Email", "Link", "Slack"].map(target => (
                <ContextMenu.Item
                  key={target}
                  aria-label={target}
                  value={target}>
                  <ContextMenu.Item.Text>{target}</ContextMenu.Item.Text>
                </ContextMenu.Item>
              ))}>
              <ContextMenu.Item.Label>Share</ContextMenu.Item.Label>
            </ContextMenu.Item>
            <ContextMenu.Item
              aria-label="Publish"
              value="Publish"
              theme="brand">
              <ContextMenu.Item.Icon>★</ContextMenu.Item.Icon>
              <ContextMenu.Item.Text>Publish</ContextMenu.Item.Text>
            </ContextMenu.Item>
            <ContextMenu.Item aria-label="Delete" value="Delete" theme="danger">
              <ContextMenu.Item.Icon>✕</ContextMenu.Item.Icon>
              <ContextMenu.Item.Text>Delete</ContextMenu.Item.Text>
            </ContextMenu.Item>
          </ContextMenu.Content.ScrollView>
        </ContextMenu.Content>
      </ContextMenu>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const document = within(canvasElement.ownerDocument.body);

    await userEvent.click(canvas.getByRole("button", { name: "Actions" }));
    await userEvent.click(
      await document.findByRole("button", { name: "Share" })
    );
    await userEvent.click(
      await document.findByRole("button", { name: "Slack" })
    );
    await waitFor(
      async () =>
        expect(
          document.queryByRole("button", { name: "Share" })
        ).not.toBeInTheDocument(),
      { timeout: 3000 }
    );
    await expect(canvas.getByRole("button", { name: "Slack" })).toBeVisible();
  }
};

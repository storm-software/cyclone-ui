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
import { ContextMenu } from "@cyclone-ui/context-menu";
import { Clipboard } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import { DropdownButton } from "./DropdownButton";

const ITEMS = [
  { value: "markdown", label: "Copy as Markdown" },
  { value: "view", label: "View as Markdown" },
  { value: "link", label: "Copy link" }
];

const meta: Meta<typeof DropdownButton> = {
  title: "Triggers/DropdownButton",
  component: DropdownButton,
  tags: ["autodocs"],
  args: {
    size: "md",
    onPress: fn(),
    onValueChange: fn()
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "outlined",
        "sunken",
        "canvas",
        "surface",
        "elevated",
        "floating",
        "ghost"
      ]
    }
  },
  render: (args: any) => (
    <DropdownButton
      {...args}
      items={ITEMS.map(item => (
        <ContextMenu.Item
          key={item.value}
          aria-label={item.label}
          value={item.value}>
          <ContextMenu.Item.Text>{item.label}</ContextMenu.Item.Text>
        </ContextMenu.Item>
      ))}>
      <Button.Icon>
        <Clipboard />
      </Button.Icon>
      <Button.Text>Copy page</Button.Text>
    </DropdownButton>
  )
} satisfies Meta<typeof DropdownButton>;

export default meta;

type Story = StoryObj<typeof DropdownButton>;

export const Base: Story = {
  play: async ({ args, canvasElement }) => {
    const document = within(canvasElement.ownerDocument.body);
    const main = document.getByRole("button", { name: "Copy page" });
    const chevron = document.getByRole("button", { name: "More options" });

    // The halves join: no radius on the sides that meet.
    await expect(getComputedStyle(main).borderTopRightRadius).toBe("0px");
    await expect(getComputedStyle(chevron).borderTopLeftRadius).toBe("0px");

    await userEvent.click(main);
    await expect(args.onPress).toHaveBeenCalled();
    await expect(document.queryByText("Copy link")).not.toBeInTheDocument();

    // The chevron opens the menu; pressing an item reports it and closes it.
    await userEvent.click(chevron);
    await userEvent.click(
      await document.findByRole("button", { name: "Copy link" })
    );
    await expect(args.onValueChange).toHaveBeenCalledWith("link");
    await waitFor(
      async () =>
        expect(
          document.queryByRole("button", { name: "Copy link" })
        ).not.toBeInTheDocument(),
      { timeout: 3000 }
    );
  }
};

export const SmallSize: Story = { args: { size: "sm" } };

export const LargeSize: Story = { args: { size: "lg" } };

export const Primary: Story = { args: { variant: "primary" } };

export const Outlined: Story = { args: { variant: "outlined" } };

export const Disabled: Story = { args: { disabled: true } };

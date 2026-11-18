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

import {
  Account,
  Briefcase,
  ClipboardList,
  Cog,
  Document,
  DocumentCode,
  FileDocument,
  Folder,
  FolderZip,
  Grid3,
  Mailbox,
  Puzzle,
  Robot
} from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { expect, userEvent, within } from "storybook/test";
import { NavigationSidebar } from "./NavigationSidebar";

const icon = (Icon: typeof Document) => (
  <Icon aria-hidden={true} size={16} color="currentColor" />
);

const meta: Meta<typeof NavigationSidebar> = {
  title: "Blocks/NavigationSidebar",
  component: NavigationSidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  args: {
    bordered: true,
    "aria-label": "Sidebar"
  },
  decorators: [
    Story => (
      <View width={288} height={740} flexDirection="column">
        <Story />
      </View>
    )
  ],
  render: args => (
    <NavigationSidebar {...args}>
      <NavigationSidebar.Header>
        <NavigationSidebar.Switcher
          title="Northwind Logistics"
          description="Enterprise"
          aria-label="Switch workspace"
        />
        <NavigationSidebar.Search
          placeholder="Search Northwind"
          shortcut={["Ctrl", "K"]}
        />
      </NavigationSidebar.Header>
      <NavigationSidebar.Body>
        <NavigationSidebar.Group label="Pinned">
          <NavigationSidebar.Item href="#runbook" icon={icon(FileDocument)}>
            Escalation runbook
          </NavigationSidebar.Item>
          <NavigationSidebar.Item href="#compliance" icon={icon(ClipboardList)}>
            Quarter-end compliance review
          </NavigationSidebar.Item>
          <NavigationSidebar.Item href="#vendors" icon={icon(Briefcase)}>
            Vendor renewal tracker
          </NavigationSidebar.Item>
        </NavigationSidebar.Group>
        <NavigationSidebar.Group label="Workspace">
          <NavigationSidebar.Item
            href="#boards"
            icon={icon(Grid3)}
            active={true}>
            Boards
          </NavigationSidebar.Item>
          <NavigationSidebar.Item href="#inbox" icon={icon(Mailbox)} end={7}>
            Inbox
          </NavigationSidebar.Item>
          <NavigationSidebar.Item href="#projects" icon={icon(Folder)}>
            Projects
          </NavigationSidebar.Item>
          <NavigationSidebar.Item href="#people" icon={icon(Account)}>
            People
          </NavigationSidebar.Item>
          <NavigationSidebar.Item href="#documents" icon={icon(Document)}>
            Documents
          </NavigationSidebar.Item>
        </NavigationSidebar.Group>
        <NavigationSidebar.Group label="Administration">
          <NavigationSidebar.Item href="#automations" icon={icon(Robot)}>
            Automations
          </NavigationSidebar.Item>
          <NavigationSidebar.Item
            href="#integrations"
            icon={icon(Puzzle)}
            end={3}>
            Integrations
          </NavigationSidebar.Item>
          <NavigationSidebar.Item
            href="#settings"
            icon={icon(Cog)}
            disabled={true}>
            Settings
          </NavigationSidebar.Item>
        </NavigationSidebar.Group>
      </NavigationSidebar.Body>
      <NavigationSidebar.Footer>
        <NavigationSidebar.Account name="Dana Mireles" description="Admin" />
      </NavigationSidebar.Footer>
    </NavigationSidebar>
  )
} satisfies Meta<typeof NavigationSidebar>;

export default meta;

type Story = StoryObj<typeof NavigationSidebar>;

/** A workspace switcher, search, pinned and grouped items, and the account. */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("navigation", { name: "Sidebar" })
    ).toBeVisible();
    await expect(canvas.getByRole("link", { name: "Boards" })).toHaveAttribute(
      "aria-current",
      "page"
    );
    await expect(
      canvas.getByRole("button", { name: "Search Northwind" })
    ).toHaveAttribute("aria-keyshortcuts", "Ctrl+K");
    await expect(
      canvas.getByRole("group", { name: "Administration" })
    ).toBeVisible();
    await expect(
      canvas.getByRole("button", { name: "Settings" })
    ).toHaveAttribute("aria-disabled", "true");
    await expect(canvas.getByText("DM")).toBeVisible();
  }
};

/** Without `bordered`, the sidebar sits flush on the page, as in `DocsPage`. */
export const Borderless: Story = {
  args: {
    bordered: false
  }
};

/** Folders expand to show nested items, like a docs page tree. */
export const Folders: Story = {
  render: args => (
    <NavigationSidebar {...args}>
      <NavigationSidebar.Header>
        <NavigationSidebar.Search shortcut={["Ctrl", "K"]} />
      </NavigationSidebar.Header>
      <NavigationSidebar.Body>
        <NavigationSidebar.Group label="Guide">
          <NavigationSidebar.Item
            href="#introduction"
            icon={icon(FileDocument)}>
            Introduction
          </NavigationSidebar.Item>
        </NavigationSidebar.Group>
        <NavigationSidebar.Group label="API References">
          <NavigationSidebar.Folder
            label="MDX Plugins"
            icon={icon(DocumentCode)}
            defaultOpen={true}>
            <NavigationSidebar.Item href="#headings" active={true}>
              Headings
            </NavigationSidebar.Item>
            <NavigationSidebar.Item href="#rehype-code">
              Rehype Code
            </NavigationSidebar.Item>
          </NavigationSidebar.Folder>
          <NavigationSidebar.Folder label="Packages" icon={icon(FolderZip)}>
            <NavigationSidebar.Item href="#installation">
              Installation
            </NavigationSidebar.Item>
          </NavigationSidebar.Folder>
        </NavigationSidebar.Group>
      </NavigationSidebar.Body>
    </NavigationSidebar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const packages = canvas.getByRole("button", { name: "Packages" });

    await expect(packages).toHaveAttribute("aria-expanded", "false");
    await expect(canvas.getByText("Installation")).not.toBeVisible();

    await userEvent.click(packages);
    await expect(packages).toHaveAttribute("aria-expanded", "true");
    await expect(
      canvas.getByRole("link", { name: "Installation" })
    ).toBeVisible();

    const plugins = canvas.getByRole("button", { name: "MDX Plugins" });
    await expect(plugins).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(plugins);
    await expect(canvas.getByText("Headings")).not.toBeVisible();
  }
};

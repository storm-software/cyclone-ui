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
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import { CopyPageDropdownButton } from "./CopyPageDropdownButton";

const meta: Meta<typeof CopyPageDropdownButton> = {
  title: "Docs/CopyPageDropdownButton",
  component: CopyPageDropdownButton,
  tags: ["autodocs"],
  args: {
    markdownUrl:
      "https://raw.githubusercontent.com/storm-software/cyclone-ui/main/README.md",
    size: "md",
    variant: "tertiary",
    onPress: fn()
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
  }
} satisfies Meta<typeof CopyPageDropdownButton>;

export default meta;

type Story = StoryObj<typeof CopyPageDropdownButton>;

export const Base: Story = {
  play: async ({ args, canvasElement }) => {
    const window = canvasElement.ownerDocument.defaultView!;
    const document = within(canvasElement.ownerDocument.body);

    // Stubbed: headless browsers deny clipboard access and new tabs.
    const copied: string[] = [];
    Object.defineProperty(window.navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async (text: string) => copied.push(text),
        write: async (items: ClipboardItem[]) =>
          copied.push(await (await items[0]!.getType("text/plain")).text())
      }
    });
    const open = fn();
    window.open = open;

    await userEvent.click(document.getByRole("button", { name: "Copy page" }));
    await expect(args.onPress).toHaveBeenCalled();
    await document.findByRole("button", { name: "Copied" }, { timeout: 5000 });
    await expect(copied[0]).toContain("Cyclone UI");

    await userEvent.click(
      document.getByRole("button", { name: "More page options" })
    );
    await userEvent.click(
      await document.findByRole("button", { name: "Open in Claude" })
    );
    await expect(open).toHaveBeenCalledWith(
      `https://claude.ai/new?q=${encodeURIComponent(
        `Read ${args.markdownUrl}, I want to ask questions about it.`
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
    await waitFor(
      async () =>
        expect(
          document.queryByRole("button", { name: "Open in Claude" })
        ).not.toBeInTheDocument(),
      { timeout: 3000 }
    );
  }
};

export const SmallSize: Story = { args: { size: "sm" } };

export const LargeSize: Story = { args: { size: "lg" } };

export const Primary: Story = { args: { variant: "primary" } };

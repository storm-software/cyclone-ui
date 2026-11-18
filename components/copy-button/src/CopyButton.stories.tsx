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
import { toast, Toaster } from "@cyclone-ui/toast";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import { CopyButton } from "./CopyButton";

const copiedValues: string[] = [];
const writeText = fn(async (text: string) => {
  copiedValues.push(text);
});
const pause = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const meta: Meta<typeof CopyButton> = {
  title: "Triggers/CopyButton",
  component: CopyButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: { value: "Hello, Cyclone!" },
  decorators: [
    Story => (
      <>
        <Story />
        <Toaster />
      </>
    )
  ],
  beforeEach: () => {
    const original = Object.getOwnPropertyDescriptor(navigator, "clipboard");
    copiedValues.length = 0;
    writeText.mockClear();
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText,
        write: async (items: ClipboardItem[]) => {
          copiedValues.push(
            await (await items[0]!.getType("text/plain")).text()
          );
        }
      }
    });
    return () => {
      toast.dismiss(undefined, { immediate: true });
      if (original) Object.defineProperty(navigator, "clipboard", original);
      else Reflect.deleteProperty(navigator, "clipboard");
    };
  }
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const CopiesText: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole("button", { name: "Copy text" }));
    await expect(
      await canvas.findByRole("button", { name: "Copied text" })
    ).toBeVisible();
    await expect(copiedValues).toEqual(["Hello, Cyclone!"]);
    await waitFor(() =>
      expect(body.getByText("Copied to clipboard")).toBeVisible()
    );
    await waitFor(
      () =>
        expect(canvas.getByRole("button", { name: "Copy text" })).toBeVisible(),
      { timeout: 3000 }
    );
  }
};

export const LazyValue: Story = {
  args: { value: async () => "# Fetched Markdown" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Copy text" }));
    await expect(
      await canvas.findByRole("button", { name: "Copied text" })
    ).toBeVisible();
    await expect(copiedValues).toEqual(["# Fetched Markdown"]);
  }
};

export const WithLabel: Story = {
  args: { circular: false, variant: "outlined" },
  render: args => (
    <CopyButton {...args}>
      {copied => <Button.Text>{copied ? "Copied" : "Copy value"}</Button.Text>}
    </CopyButton>
  )
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole("button", {
      name: "Copy text"
    });
    await expect(button).toBeDisabled();
    button.click();
    await expect(copiedValues).toEqual([]);
    await expect(button).not.toHaveAttribute("data-checked");
  }
};

export const RejectedCopy: Story = {
  args: {
    value: () => {
      throw new Error("Clipboard unavailable");
    }
  },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole("button", {
      name: "Copy text"
    });
    await userEvent.click(button);
    await expect(button).not.toHaveAttribute("data-checked");
    await expect(
      within(canvasElement.ownerDocument.body).queryByText(
        "Copied to clipboard"
      )
    ).not.toBeInTheDocument();
  }
};

export const RepeatedCopy: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Copy text" }));
    await canvas.findByRole("button", { name: "Copied text" });
    await pause(1200);
    await userEvent.click(canvas.getByRole("button", { name: "Copied text" }));
    await pause(1000);
    await expect(
      canvas.getByRole("button", { name: "Copied text" })
    ).toBeVisible();
    await expect(copiedValues).toEqual(["Hello, Cyclone!", "Hello, Cyclone!"]);
    await waitFor(
      () =>
        expect(canvas.getByRole("button", { name: "Copy text" })).toBeVisible(),
      { timeout: 2000 }
    );
  }
};

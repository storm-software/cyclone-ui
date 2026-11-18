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
import { View } from "@tamagui/core";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { ColorToken } from "./ColorToken";

const copiedValues: string[] = [];

const RED_PALETTE = [
  ["1", "oklch(0.714965 0.122063 4.087)", "Pale coral red."],
  ["2", "oklch(0.671856 0.143542 5.515)", "Light coral red."],
  ["3", "oklch(0.633160 0.164939 7.419)", "Soft coral red."],
  ["4", "oklch(0.597030 0.182815 9.564)", "Warm salmon red."],
  ["5", "oklch(0.565931 0.196727 12.263)", "Muted raspberry red."],
  ["6", "oklch(0.501021 0.169738 11.551)", "Deep raspberry red."],
  ["7", "oklch(0.435213 0.143350 10.543)", "Rich raspberry red."],
  ["8", "oklch(0.368783 0.116318 10.101)", "Dark burgundy red."],
  ["9", "oklch(0.298555 0.088507 9.007)", "Deep wine red."]
] as const;

const meta: Meta<typeof ColorToken> = {
  title: "Docs/ColorToken",
  component: ColorToken,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    name: "color.red.1",
    value: "oklch(0.714965 0.122063 4.087)",
    description: "Pale coral red."
  },
  beforeEach: () => {
    const original = Object.getOwnPropertyDescriptor(navigator, "clipboard");
    copiedValues.length = 0;
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async (text: string) => {
          copiedValues.push(text);
        }
      }
    });
    return () => {
      if (original) Object.defineProperty(navigator, "clipboard", original);
      else Reflect.deleteProperty(navigator, "clipboard");
    };
  }
} satisfies Meta<typeof ColorToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Palette: Story = {
  render: () => (
    <View flexDirection="row" flexWrap="wrap" gap="2xl">
      {RED_PALETTE.map(([step, value, description]) => (
        <ColorToken
          key={step}
          name={`color.red.${step}`}
          value={value}
          description={description}
        />
      ))}
    </View>
  )
};

export const ShowsTooltip: Story = {
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.hover(
      within(canvasElement).getByRole("button", { name: /color\.red\.1/ })
    );
    await waitFor(() => expect(body.getByText("color.red.1")).toBeVisible());
    await expect(body.getByText("Pale coral red.")).toBeVisible();
  }
};

export const CopiesHex: Story = {
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole("button", {
      name: "color.red.1, #e2819a"
    });
    await expect(button).toHaveTextContent("#e2819a");
    await userEvent.click(button);
    await waitFor(() => expect(copiedValues).toEqual(["#e2819a"]));
    await expect(button).toHaveAttribute("data-copied", "hex");
    await expect(button).toHaveTextContent("Copied");
    await waitFor(() => expect(button).toHaveTextContent("#e2819a"), {
      timeout: 3000
    });
  }
};

export const ShiftClickCopiesOklch: Story = {
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole("button", {
      name: /color\.red\.1/
    });
    await userEvent.keyboard("{Shift>}");
    await userEvent.click(button);
    await userEvent.keyboard("{/Shift}");
    await waitFor(() =>
      expect(copiedValues).toEqual(["oklch(0.714965 0.122063 4.087)"])
    );
    await expect(button).toHaveAttribute("data-copied", "OKLCH");
  }
};

export const HexValue: Story = {
  args: { name: "color.brand", value: "#2e7aff", description: undefined },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole("button", {
      name: "color.brand, #2e7aff"
    });
    await userEvent.keyboard("{Shift>}");
    await userEvent.click(button);
    await userEvent.keyboard("{/Shift}");
    await waitFor(() =>
      expect(copiedValues).toEqual(["oklch(0.609361 0.21185 260.783)"])
    );
  }
};

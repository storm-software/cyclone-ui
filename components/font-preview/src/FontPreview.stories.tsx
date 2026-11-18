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
import { expect, userEvent, waitFor, within } from "storybook/test";
import { FontPreview } from "./FontPreview";

const meta = {
  title: "Text/FontPreview",
  component: FontPreview,
  tags: ["autodocs"],
  args: {
    fontFamily: "editorial" as never
  }
} satisfies Meta<typeof FontPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Every face the Storm Serif (`editorial`) font declares, upright and italic. */
export const Base: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("Regular 400")).toBeInTheDocument();
    await expect(canvas.getByText("Regular 400 Italic")).toBeInTheDocument();
    await expect(canvas.getByText("ExtraBold 800 Italic")).toBeInTheDocument();

    const input = canvasElement.querySelector<HTMLInputElement>("input")!;
    await userEvent.type(input, "Some custom text");
    await waitFor(async () =>
      expect(canvas.getAllByText("Some custom text")).toHaveLength(14)
    );

    // The slider and the size select share the size.
    const thumb = canvas.getByRole("slider", { name: "Font size" });
    await expect(thumb).toHaveAttribute("aria-valuenow", "64");
    thumb.focus();
    await userEvent.keyboard("{ArrowRight}");
    await waitFor(async () =>
      expect(thumb).toHaveAttribute("aria-valuenow", "65")
    );
    await waitFor(async () =>
      expect(canvasElement.textContent).toContain("65px")
    );
  }
};

/** Chosen weights and styles, as in a type specimen of a display face. */
export const Styles: Story = {
  args: {
    defaultSize: 120,
    sampleText: "Some custom text",
    styles: [
      { weight: 400 },
      { weight: 400, italic: true },
      { weight: 800, label: "ExtraBold 800" },
      { weight: 800, italic: true, label: "ExtraBold 800 Italic" }
    ]
  }
};

/** The sans-serif body font, with a short list of preset sizes. */
export const Body: Story = {
  args: {
    fontFamily: "body" as never,
    sizes: [12, 16, 24, 32, 48],
    defaultSize: 32
  }
};

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
import { expect, userEvent, within } from "storybook/test";
import { TypeTable } from "./TypeTable";

const meta: Meta<typeof TypeTable> = {
  title: "Docs/TypeTable",
  component: TypeTable,
  tags: ["autodocs"],
  args: {
    id: "type-table-example",
    type: {
      label: {
        description: "The text displayed inside the control.",
        required: true,
        type: "string"
      },
      percentage: {
        default: 0.2,
        description:
          "The percentage of scroll position used to display the roll button.",
        type: "number"
      },
      onOpenChange: {
        description: "Called whenever the open state changes.",
        parameters: [
          {
            name: "open",
            description: "The next open state."
          }
        ],
        returns: "void",
        type: "(open: boolean) => void",
        typeDescription: "(open: boolean) => void"
      },
      legacyLabel: {
        deprecated: true,
        description: "Use label instead.",
        type: "string",
        typeDescriptionLink: "https://www.typescriptlang.org/docs/"
      }
    }
  },
  decorators: [
    Story => (
      <View width="100%" minWidth={760} maxWidth={760} gap="md">
        <Story />
      </View>
    )
  ],
  parameters: {
    layout: "centered"
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Details: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const storyWindow = globalThis as typeof globalThis & {
      location: { hash: string };
    };
    const trigger = canvas.getByRole("button", {
      name: /percentage\?.*number/i
    });

    await userEvent.click(trigger);

    await expect(
      canvas.getByText(/percentage of scroll position/i)
    ).toBeVisible();
    await expect(canvas.getByText("Default")).toBeVisible();
    await expect(canvas.getByText("0.2")).toBeVisible();
    await expect(storyWindow.location.hash).toBe(
      "#type-table-example-percentage"
    );

    await userEvent.click(trigger);

    await expect(
      canvas.queryByText(/percentage of scroll position/i)
    ).not.toBeInTheDocument();
  }
};

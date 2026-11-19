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
import { expect, within } from "storybook/test";
import { AddressMap } from "./AddressMap";

const CITY_HALL = {
  label: "200 N Spring St, Los Angeles, CA 90012, USA",
  latitude: 34.0537,
  longitude: -118.2428
};

const meta = {
  title: "Form/AddressMap",
  component: AddressMap,
  tags: ["autodocs"],
  args: { maxWidth: 560 }
} satisfies Meta<typeof AddressMap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { address: CITY_HALL },
  play: async ({ canvasElement }) => {
    const map = within(canvasElement).getByRole("img", {
      name: `Map of ${CITY_HALL.label}`
    });
    await expect(map).toHaveTextContent("© OpenStreetMap contributors");
  }
};

export const Empty: Story = {
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).queryByRole("img")).toBeNull();
  }
};

export const ZoomedOut: Story = {
  args: { address: CITY_HALL, zoom: 11 }
};

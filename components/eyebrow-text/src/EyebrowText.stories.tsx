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

import { EyebrowText } from "./EyebrowText";

const meta: Meta<typeof EyebrowText> = {
  title: "Typography/EyebrowText",
  component: EyebrowText,
  tags: ["autodocs"],
  render: (args: any) => (
    <EyebrowText {...args}>Lorem ipsum dolor sit amet</EyebrowText>
  )
} satisfies Meta<typeof EyebrowText>;

export default meta;

type Story = StoryObj<typeof EyebrowText>;

export const Base: Story = {
  args: {}
};

export const Primary: Story = {
  args: {
    theme: "brand"
  }
};

export const Secondary: Story = {
  args: {
    theme: "alternate"
  }
};

export const Discovery: Story = {
  args: {
    theme: "discovery"
  }
};

export const Error: Story = {
  args: {
    theme: "danger"
  }
};

export const Warning: Story = {
  args: {
    theme: "warning"
  }
};

export const Info: Story = {
  args: {
    theme: "info"
  }
};

export const Success: Story = {
  args: {
    theme: "success"
  }
};

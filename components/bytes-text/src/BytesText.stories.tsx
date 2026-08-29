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

import { BytesText } from "./BytesText";

const meta: Meta<typeof BytesText> = {
  title: "Typography/BytesText",
  component: BytesText,
  tags: ["autodocs"],
  render: ({ children, ...props }: any) => (
    <BytesText {...props}>{children}</BytesText>
  )
} satisfies Meta<typeof BytesText>;

export default meta;

type Story = StoryObj<typeof BytesText>;

export const Base: Story = {
  args: {
    children: "1337"
  }
};

export const NoChildren: Story = {
  args: {}
};

export const Bytes: Story = {
  args: {
    children: "25"
  }
};

export const KiloBytes: Story = {
  args: {
    children: "1337"
  }
};

export const GigaBytes: Story = {
  args: {
    children: "12345678"
  }
};

export const Primary: Story = {
  args: {
    theme: "brand",
    children: "1337"
  }
};

export const Secondary: Story = {
  args: {
    theme: "alternate",
    children: "1337"
  }
};

export const Discovery: Story = {
  args: {
    theme: "discovery",
    children: "1337"
  }
};

export const Error: Story = {
  args: {
    theme: "danger",
    children: "1337"
  }
};

export const Warning: Story = {
  args: {
    theme: "warning",
    children: "1337"
  }
};

export const Info: Story = {
  args: {
    theme: "info",
    children: "1337"
  }
};

export const Success: Story = {
  args: {
    theme: "success",
    children: "1337"
  }
};

/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import type { Meta, StoryObj } from "@storybook/react";

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

export const Brand: Story = {
  args: {
    theme: "brand",
    children: "1337"
  }
};

export const Alternate: Story = {
  args: {
    theme: "alternate",
    children: "1337"
  }
};

export const Help: Story = {
  args: {
    theme: "help",
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

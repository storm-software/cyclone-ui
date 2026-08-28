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

import { HeadingText } from "./HeadingText";

const meta: Meta<typeof HeadingText> = {
  title: "Typography/HeadingText",
  component: HeadingText,
  tags: ["autodocs"],
  render: (args: any) => (
    <HeadingText {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </HeadingText>
  )
} satisfies Meta<typeof HeadingText>;

export default meta;

type Story = StoryObj<typeof HeadingText>;

export const Base: Story = {
  args: {}
};

export const Heading1: Story = {
  args: {
    level: 1
  }
};

export const Heading2: Story = {
  args: {
    level: 2
  }
};

export const Heading3: Story = {
  args: {
    level: 3
  }
};

export const Heading4: Story = {
  args: {
    level: 4
  }
};

export const Heading5: Story = {
  args: {
    level: 5
  }
};

export const Heading6: Story = {
  args: {
    level: 6
  }
};

export const Accent: Story = {
  args: {
    theme: "accent"
  }
};

export const Discovery: Story = {
  args: {
    theme: "discovery"
  }
};

export const Danger: Story = {
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

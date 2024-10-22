import type { Meta, StoryObj } from "@storybook/react";

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

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const Alternate: Story = {
  args: {
    theme: "alternate"
  }
};

export const Help: Story = {
  args: {
    theme: "help"
  }
};

export const Error: Story = {
  args: {
    theme: "error"
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

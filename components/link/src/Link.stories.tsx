import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "General/Link",
  component: Link,
  tags: ["autodocs"],
  render: (args: any) => <Link {...args}>Link Text</Link>
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof Link>;

export const Base: Story = {
  args: {
    href: "#"
  }
};

export const UnderlineHover: Story = {
  args: {
    href: "#",
    underline: "hover"
  }
};

export const UnderlineInitial: Story = {
  args: {
    href: "#",
    underline: "initial"
  }
};

export const UnderlineStatic: Story = {
  args: {
    href: "#",
    underline: "static"
  }
};

export const UnderlineNone: Story = {
  args: {
    href: "#",
    underline: "none"
  }
};

export const Brand: Story = {
  args: {
    href: "#",
    theme: "brand"
  }
};

export const Help: Story = {
  args: {
    href: "#",
    theme: "help"
  }
};

export const Error: Story = {
  args: {
    href: "#",
    theme: "error"
  }
};

export const Warning: Story = {
  args: {
    href: "#",
    theme: "warning"
  }
};

export const Info: Story = {
  args: {
    href: "#",
    theme: "info"
  }
};

export const Success: Story = {
  args: {
    href: "#",
    theme: "success"
  }
};

import type { Meta, StoryObj } from "@storybook/react";
import { ThemeableIcon } from "./ThemeableIcon";

const meta: Meta<typeof ThemeableIcon> = {
  title: "General/ThemeableIcon",
  component: ThemeableIcon,
  tags: ["autodocs"],
  render: ({ ...rest }: any) => <ThemeableIcon {...rest} />
} satisfies Meta<typeof ThemeableIcon>;

export default meta;

type Story = StoryObj<typeof ThemeableIcon>;

export const Base: Story = {
  args: {}
};

export const Help: Story = {
  args: {
    theme: "help"
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

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "General/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  render: (args: any) => (
    <Breadcrumb {...args}>
      <Breadcrumb.Item href="#">Item One</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Item Two</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Item Three</Breadcrumb.Item>
    </Breadcrumb>
  )
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Base: Story = {
  args: {
    current: "Current Page"
  }
};

export const Slash: Story = {
  args: {
    current: "Current Page",
    divider: "slash"
  }
};

export const Chevron: Story = {
  args: {
    current: "Current Page",
    divider: "chevron"
  }
};

export const DoubleChevron: Story = {
  args: {
    current: "Current Page",
    divider: "double"
  }
};

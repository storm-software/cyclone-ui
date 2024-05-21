import type { Meta, StoryObj } from "@storybook/react";

import { FilePicker } from "./FilePicker";

const meta: Meta<typeof FilePicker> = {
  title: "Form/FilePicker",
  component: FilePicker,
  tags: ["autodocs"],
  render: ({ children, ...args }: any) => (
    <FilePicker name="filePickerName" width="500px" {...args}>
      <FilePicker.Label>Label Text</FilePicker.Label>
      <FilePicker.Box>{children}</FilePicker.Box>
      <FilePicker.Details>
        This is an example detailed message for a file-picker
      </FilePicker.Details>
    </FilePicker>
  )
} satisfies Meta<typeof FilePicker>;

export default meta;

type Story = StoryObj<typeof FilePicker>;

export const Base: Story = {
  args: {}
};

export const Required: Story = {
  args: {
    required: true
  }
};

export const CustomText: Story = {
  args: {
    children: "Custom button text"
  }
};

export const Multiple: Story = {
  args: {
    max: 10
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
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

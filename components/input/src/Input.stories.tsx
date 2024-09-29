import { FormProvider } from "@cyclone-ui/form";
import { FormField } from "@cyclone-ui/form-field";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  render: ({ theme, ...rest }: any) => (
    <FormProvider name="formName" defaultValues={{ inputName: "" }}>
      <FormField name="inputName" {...rest}>
        <FormField.Label>Label Text</FormField.Label>
        <Input placeholder="email@example.com" {...rest} />
        <FormField.Details>
          This is an example detailed message for an input
        </FormField.Details>
      </FormField>
    </FormProvider>
  )
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Base: Story = {
  args: {}
};

export const Required: Story = {
  args: {
    required: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const DefaultValue: Story = {
  args: {
    defaultValue: "Defaulted Text"
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

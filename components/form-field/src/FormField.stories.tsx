import { FormProvider } from "@cyclone-ui/form";
import { Input } from "@cyclone-ui/input";
import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./FormField";

const meta: Meta<typeof FormField> = {
  title: "Form/FormField",
  component: FormField,
  tags: ["autodocs"],
  render: ({ ...rest }: any) => (
    <FormProvider name="formName" defaultValues={{ formFieldName: "" }}>
      <FormField name="formFieldName" {...rest}>
        <FormField.Label>Label Text</FormField.Label>
        <Input placeholder="email@example.com" {...rest} />
        <FormField.Details>
          This is an example detailed message for an input
        </FormField.Details>
      </FormField>
    </FormProvider>
  )
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof FormField>;

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


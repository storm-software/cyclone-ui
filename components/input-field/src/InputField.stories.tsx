import { FormProvider } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Form/InputField",
  component: InputField,
  tags: ["autodocs"],
  render: (props: any) => (
    <FormProvider name="formName" defaultValues={{ inputFieldName: "" }}>
      <InputField name="inputFieldName" {...props}>
        <InputField.Label>Label Text</InputField.Label>
        <InputField.Value placeholder="email@example.com" />
        <InputField.Details>
          This is an example detailed message for an input field
        </InputField.Details>
      </InputField>
    </FormProvider>
  )
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof InputField>;

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
    initialValue: "Defaulted Text"
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
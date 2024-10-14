import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Form/InputField",
  component: InputField,
  tags: ["autodocs"],
  render: (props: any) => (
    <Form name="formName" defaultValues={{ inputFieldName: "" }}>
      <InputField name="inputFieldName" {...props}>
        <InputField.Label>Label Text</InputField.Label>
        <InputField.Control placeholder="email@example.com" />
        <InputField.Details>
          This is an example detailed message for an input field
        </InputField.Details>
      </InputField>
    </Form>
  )
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof InputField>;

export const Base: Story = {
  args: {}
};

export const Required: Story = {
  args: {
    isRequired: true
  }
};

export const Disabled: Story = {
  args: {
    isDisabled: true
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

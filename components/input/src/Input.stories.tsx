import { Form } from "@cyclone-ui/form";
import { Field } from "@cyclone-ui/form-state";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Base/Input",
  component: Input,
  tags: ["autodocs"],
  render: (props: any) => (
    <Form name="formName" defaultValues={{ inputName: "" }}>
      <Field name="inputName" {...props}>
        <Field.Label>Label Text</Field.Label>
        <Input placeholder="email@example.com" />
        <Field.Details>
          This is an example detailed message for an input
        </Field.Details>
      </Field>
    </Form>
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

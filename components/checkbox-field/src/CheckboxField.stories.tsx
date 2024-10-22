import { Form } from "@cyclone-ui/form-state";
import type { Meta, StoryObj } from "@storybook/react";
import { XStack } from "@tamagui/stacks";
import { CheckboxField } from "./CheckboxField";

const meta: Meta<typeof CheckboxField> = {
  title: "Form/CheckboxField",
  component: CheckboxField,
  tags: ["autodocs"],
  render: ({ defaultValue, ...props }: any) => (
    <Form name="formName" defaultValues={{ checkboxFieldName: defaultValue }}>
      <CheckboxField name="checkboxFieldName" {...props}>
        <XStack gap="$3" alignContent="center" verticalAlign="center">
          <CheckboxField.Control />
          <CheckboxField.Label>
            This is an example label message for a checkbox field
          </CheckboxField.Label>
        </XStack>
        <CheckboxField.Details>
          This is an example detailed message for an input field
        </CheckboxField.Details>
      </CheckboxField>
    </Form>
  )
} satisfies Meta<typeof CheckboxField>;

export default meta;

type Story = StoryObj<typeof CheckboxField>;

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
    defaultValue: true
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

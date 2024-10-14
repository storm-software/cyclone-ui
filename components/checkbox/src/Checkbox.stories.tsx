import { Field, FieldValueType, Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react";
import { XStack } from "@tamagui/stacks";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  render: (props: any) => (
    <Form name="formName" defaultValues={{ inputName: false }}>
      <Field name="inputName" valueType={FieldValueType.BOOLEAN} {...props}>
        <XStack gap="$3" alignContent="center" verticalAlign="center">
          <Checkbox />
          <Field.Label paddingBottom={0}>
            This is an example label message for a checkbox
          </Field.Label>
        </XStack>
        <Field.Details>
          This is an example detailed message for a checkbox
        </Field.Details>
      </Field>
    </Form>
  )
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

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

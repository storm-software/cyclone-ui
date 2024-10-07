import { FieldValueType, FormProvider } from "@cyclone-ui/form";
import { FormField } from "@cyclone-ui/form-field";
import type { Meta, StoryObj } from "@storybook/react";
import { XStack } from "@tamagui/stacks";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  render: (props: any) => (
    <FormProvider name="formName" defaultValues={{ inputName: false }}>
      <FormField name="inputName" valueType={FieldValueType.BOOLEAN} {...props}>
        <XStack gap="$3" alignContent="center" verticalAlign="center">
          <Checkbox />
          <FormField.Label paddingBottom={0}>
            This is an example label message for a checkbox
          </FormField.Label>
        </XStack>
        <FormField.Details>
          This is an example detailed message for a checkbox
        </FormField.Details>
      </FormField>
    </FormProvider>
  )
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

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
    defaultChecked: true
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

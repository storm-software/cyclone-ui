/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react";
import { XStack } from "@tamagui/stacks";
import { CheckboxField } from "./CheckboxField";

const meta: Meta<typeof CheckboxField> = {
  title: "Form/CheckboxField",
  component: CheckboxField,
  tags: ["autodocs"],
  render: ({ defaultValue, ...props }: any) => (
    <Form name="formName" initialValues={{ checkboxFieldName: defaultValue }}>
      <CheckboxField name="checkboxFieldName" {...props}>
        <XStack gap="$2.5" alignContent="center" alignItems="center">
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

export const Indeterminate: Story = {
  args: {
    defaultValue: "indeterminate"
  }
};

export const Help: Story = {
  args: {
    theme: "help"
  }
};

export const Error: Story = {
  args: {
    theme: "danger"
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

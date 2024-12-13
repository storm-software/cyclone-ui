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
import { SwitchField } from "./SwitchField";

const meta: Meta<typeof SwitchField> = {
  title: "Form/SwitchField",
  component: SwitchField,
  tags: ["autodocs"],
  render: ({ defaultValue, ...props }: any) => (
    <Form name="formName" initialValues={{ switchFieldName: defaultValue }}>
      <SwitchField name="switchFieldName" {...props}>
        <XStack gap="$2.5" alignContent="center" alignItems="center">
          <SwitchField.Control />
          <SwitchField.Label>
            This is an example label message for a switch field
          </SwitchField.Label>
        </XStack>
        <SwitchField.Details>
          This is an example detailed message for an switch field
        </SwitchField.Details>
      </SwitchField>
    </Form>
  )
} satisfies Meta<typeof SwitchField>;

export default meta;

type Story = StoryObj<typeof SwitchField>;

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

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

import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react";
import { FilePicker } from "./FilePicker";

const meta: Meta<typeof FilePicker> = {
  title: "Base/FilePicker",
  component: FilePicker,
  tags: ["autodocs"],
  render: ({ defaultValue, disabled, children, ...props }: any) => (
    <Form name="formName" defaultValues={{ filePickerName: defaultValue }}>
      <Field name="filePickerName" {...props} disabled={disabled} width="500px">
        <Field.Label>Label Text</Field.Label>
        <FilePicker width="500px" disabled={disabled}>
          <FilePicker.Trigger>
            <FilePicker.Trigger.Button />
          </FilePicker.Trigger>
        </FilePicker>
        <Field.Details>
          This is an example detailed message for an file-picker
        </Field.Details>
      </Field>
    </Form>
  )
} satisfies Meta<typeof FilePicker>;

export default meta;

type Story = StoryObj<typeof FilePicker>;

export const Base: Story = {
  args: {}
};

export const Required: Story = {
  args: {
    required: true
  }
};

export const CustomText: Story = {
  args: {
    children: "Custom button text"
  }
};

export const Multiple: Story = {
  args: {
    max: 10
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
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

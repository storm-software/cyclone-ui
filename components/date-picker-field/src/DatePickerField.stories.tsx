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
import { DatePickerField } from "./DatePickerField";

const meta: Meta<typeof DatePickerField> = {
  title: "Form/DatePickerField",
  component: DatePickerField,
  tags: ["autodocs"],
  render: (props: any) => {
    return (
      <Form name="formName" defaultValues={{ datePickerFieldName: "" }}>
        <DatePickerField name="datePickerFieldName" {...props}>
          <DatePickerField.Label>Label Text</DatePickerField.Label>
          <DatePickerField.Control />
          <DatePickerField.Details>
            This is an example detailed message for an date-picker field
          </DatePickerField.Details>
        </DatePickerField>
      </Form>
    );
  }
} satisfies Meta<typeof DatePickerField>;

export default meta;

type Story = StoryObj<typeof DatePickerField>;

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

// export const DefaultValue: Story = {
//   args: {
//     defaultValue: "Defaulted Text"
//   }
// };

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

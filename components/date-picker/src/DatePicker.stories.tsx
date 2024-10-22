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
import { Field } from "@cyclone-ui/form-state";
import { StormDate } from "@storm-stack/date-time/storm-date";
import { formatDate } from "@storm-stack/date-time/utilities/format-date";
import type { Meta, StoryObj } from "@storybook/react";
import { useCallback } from "react";
import { DatePicker } from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Form/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  render: (props: any) => {
    const handleFormat = useCallback((value: any) => {
      return formatDate(StormDate.create(value), {
        returnEmptyIfNotSet: true,
        returnEmptyIfInvalid: true
      });
    }, []);

    const handleParse = useCallback((value: any) => {
      const date = StormDate.create(value);

      const invalid = date.validate();

      return !invalid ? date : null;
    }, []);

    return (
      <Form name="formName" defaultValues={{ datePickerName: null }}>
        <Field
          name="datePickerName"
          {...props}
          format={handleFormat}
          parse={handleParse}>
          <Field.Label>Label Text</Field.Label>
          <DatePicker />
          <Field.Details>
            This is an example detailed message for an date-picker
          </Field.Details>
        </Field>
      </Form>
    );
  }
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof DatePicker>;

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

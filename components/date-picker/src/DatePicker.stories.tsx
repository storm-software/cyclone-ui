/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { formatDate } from "@stryke/date/format";
import { useCallback } from "react";
import { DatePicker } from "./DatePicker";

const toDate = (value: unknown) => {
  if (value == null || value === "") {
    return null;
  }

  const date =
    value instanceof Date ? value : new Date(value as string | number);

  return Number.isNaN(date.getTime()) ? null : date;
};

const meta: Meta<typeof DatePicker> = {
  title: "Base/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  render: (props: any) => {
    const handleFormat = useCallback((value: any) => {
      const date = toDate(value);
      if (!date) {
        return "";
      }

      return formatDate(date, "MM.DD.YYYY");
    }, []);

    const handleParse = useCallback((value: any) => {
      return toDate(value);
    }, []);

    return (
      <Form name="formName" defaultValues={{ datePickerName: null }}>
        <Field
          name="datePickerName"
          {...props}
          format={handleFormat}
          parse={handleParse}>
          <Field.Label>Label Text</Field.Label>
          <DatePicker>
            <DatePicker.TextBox>
              <DatePicker.TextBox.Value />
            </DatePicker.TextBox>
          </DatePicker>
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

export const Discovery: Story = {
  args: {
    theme: "discovery"
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

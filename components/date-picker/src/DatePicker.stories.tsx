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
  render: ({ variant, ...props }: any) => {
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
          variant={variant}
          format={handleFormat}
          parse={handleParse}>
          <Field.Label>Label Text</Field.Label>
          <DatePicker variant={variant}>
            <DatePicker.TextBox>
              <DatePicker.TextBox.Value />
            </DatePicker.TextBox>
          </DatePicker>
        </Field>
      </Form>
    );
  }
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof DatePicker>;

const validation = (
  type:
    | "danger"
    | "warning"
    | "info"
    | "discovery"
    | "success"
    | "positive"
    | "negative"
) => ({
  onChange: [
    () => [
      {
        message: "This is an example validation message",
        type
      }
    ]
  ]
});

export const Base: Story = {
  args: {}
};

export const Underline: Story = {
  args: {
    variant: "underline"
  }
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

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const Discovery: Story = {
  args: {
    validate: validation("discovery")
  }
};

export const Error: Story = {
  args: {
    validate: validation("danger")
  }
};

export const Warning: Story = {
  args: {
    validate: validation("warning")
  }
};

export const Info: Story = {
  args: {
    validate: validation("info")
  }
};

export const Success: Story = {
  args: {
    validate: validation("success")
  }
};

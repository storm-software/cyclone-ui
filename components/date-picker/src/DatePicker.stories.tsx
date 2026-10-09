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
import { Calendar } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { formatDate } from "@stryke/date/format";
import type { GetProps } from "@tamagui/core";
import { useCallback, useState } from "react";
import { DATE_RANGE_SEPARATOR, DatePicker } from "./DatePicker";

const toDate = (value: unknown) => {
  if (value == null || value === "") {
    return null;
  }

  const date =
    value instanceof Date ? value : new Date(value as string | number);

  return Number.isNaN(date.getTime()) ? null : date;
};

interface DatePickerValidation {
  onChange: (() => { message: string; type: string }[])[];
}

/** Story-only args consumed by the custom `render` (the Form and Field). */
type DatePickerStoryArgs = GetProps<typeof DatePicker> & {
  required?: boolean;
  validate?: DatePickerValidation;
};

const meta: Meta<DatePickerStoryArgs> = {
  title: "Base/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  render: ({ variant, ...props }: any, { id }: { id: string }) => {
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
      <Form name={`formName-${id}`} initialValues={{ datePickerName: null }}>
        <Field
          name="datePickerName"
          {...props}
          variant={variant}
          format={handleFormat}
          parse={handleParse}>
          <Field.Label>Label Text</Field.Label>
          <DatePicker variant={variant} size={props.size}>
            <DatePicker.TextBox>
              <DatePicker.TextBox.Value />
            </DatePicker.TextBox>
          </DatePicker>
        </Field>
      </Form>
    );
  }
} satisfies Meta<DatePickerStoryArgs>;

export default meta;

type Story = StoryObj<DatePickerStoryArgs>;

const validation = (
  type:
    | "danger"
    | "warning"
    | "info"
    | "discovery"
    | "success"
    | "positive"
    | "negative"
): DatePickerValidation => ({
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

export const OutlinedFloating: Story = {
  args: {
    variant: "outlined",
    labelVariant: "floating"
  }
};

export const UnderlinedFloating: Story = {
  args: {
    variant: "underlined",
    labelVariant: "floating"
  }
};

export const InlinedFloating: Story = {
  args: {
    variant: "inlined",
    labelVariant: "floating"
  }
};

export const OutlinedAbove: Story = {
  args: {
    variant: "outlined",
    labelVariant: "above"
  }
};

export const UnderlinedAbove: Story = {
  args: {
    variant: "underlined",
    labelVariant: "above"
  }
};

export const InlinedAbove: Story = {
  args: {
    variant: "inlined",
    labelVariant: "above"
  }
};

export const Range: Story = {
  render: props => {
    const [dates, setDates] = useState<Date[]>([
      new Date(2026, 0, 28),
      new Date(2026, 1, 3)
    ]);
    const [focused, setFocused] = useState(false);
    const value = dates
      .map(date => formatDate(date, "MM.DD.YYYY"))
      .join(DATE_RANGE_SEPARATOR);

    return (
      <DatePicker
        {...props}
        mode="range"
        focused={focused}
        selectedDates={dates}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onDatesChange={event => setDates(event.detail)}>
        <DatePicker.TextBox>
          <DatePicker.TextBox.Value
            value={value}
            placeholder="MM.DD.YYYY"
            readOnly={true}
          />
        </DatePicker.TextBox>
        <DatePicker.Separator />
        <DatePicker.Trigger>
          <Calendar />
        </DatePicker.Trigger>
      </DatePicker>
    );
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

export const SmallSize: Story = { args: { size: "sm" } };

export const MediumSize: Story = { args: { size: "md" } };

export const LargeSize: Story = { args: { size: "lg" } };

import { Field, FieldValueType, Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Form/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  render: (props: any) => (
    <Form name="formName" defaultValues={{ datePickerName: null }}>
      <Field name="datePickerName" valueType={FieldValueType.DATE} {...props}>
        <Field.Label>Label Text</Field.Label>
        <DatePicker />
        <Field.Details>
          This is an example detailed message for an date-picker
        </Field.Details>
      </Field>
    </Form>
  )
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

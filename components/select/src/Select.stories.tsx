import { FieldValueType, FormProvider } from "@cyclone-ui/form";
import { FormField } from "@cyclone-ui/form-field";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
  render: (props: any) => (
    <FormProvider name="formName" defaultValues={{ selectName: "" }}>
      <FormField name="selectName" valueType={FieldValueType.STRING} {...props}>
        <FormField.Label>Label Text</FormField.Label>
        <Select placeholder="email@example.com">
          {options.map((option, i) => (
            <Select.Item key={i} index={i} value={option.value}>
              {option.name}
            </Select.Item>
          ))}
        </Select>
        <FormField.Details>
          This is an example detailed message for an select
        </FormField.Details>
      </FormField>
    </FormProvider>
  )
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { name: "Apple", value: "Apple" },
  { name: "Pear", value: "Pear" },
  { name: "Blackberry", value: "Blackberry" },
  { name: "Peach", value: "Peach" },
  { name: "Apricot", value: "Apricot" },
  { name: "Melon", value: "Melon" },
  { name: "Honeydew", value: "Honeydew" },
  { name: "Starfruit", value: "Starfruit" },
  { name: "Blueberry", value: "Blueberry" },
  { name: "Raspberry", value: "Raspberry" },
  { name: "Strawberry", value: "Strawberry" },
  { name: "Mango", value: "Mango" },
  { name: "Pineapple", value: "Pineapple" },
  { name: "Lime", value: "Lime" },
  { name: "Lemon", value: "Lemon" },
  { name: "Coconut", value: "Coconut" },
  { name: "Guava", value: "Guava" },
  { name: "Papaya", value: "Papaya" },
  { name: "Orange", value: "Orange" },
  { name: "Grape", value: "Grape" },
  { name: "Jackfruit", value: "Jackfruit" },
  { name: "Durian", value: "Durian" }
];

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

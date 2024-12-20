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
import { SelectField } from "./SelectField";

const meta: Meta<typeof SelectField> = {
  title: "Form/SelectField",
  component: SelectField,
  tags: ["autodocs"],
  render: ({ defaultValue, ...props }: any) => (
    <Form
      name="formName"
      defaultValues={{ selectFieldName: defaultValue ?? "" }}>
      <SelectField name="selectFieldName" {...props} items={items}>
        <SelectField.Label>Label Text</SelectField.Label>
        <SelectField.Control placeholder="email@example.com" />
        <SelectField.Details>
          This is an example detailed message for an select field
        </SelectField.Details>
      </SelectField>
    </Form>
  )
} satisfies Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof SelectField>;

const items = [
  { name: "Apple", value: "Apple" },
  { name: "Pear", value: "Pear" },
  { name: "Blackberry", value: "Blackberry" },
  { name: "Peach", value: "Peach", disabled: true },
  { name: "Apricot", value: "Apricot" },
  { name: "Melon", value: "Melon" },
  { name: "Honeydew", value: "Honeydew" },
  { name: "Starfruit", value: "Starfruit" },
  { name: "Blueberry", value: "Blueberry" },
  { name: "Raspberry", value: "Raspberry", disabled: true },
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

export const DefaultValue: Story = {
  args: {
    defaultValue: "Starfruit"
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

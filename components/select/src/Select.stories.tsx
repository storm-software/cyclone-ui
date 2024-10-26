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
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Base/Select",
  component: Select,
  tags: ["autodocs"],
  render: ({ defaultValue, ...props }: any) => (
    <Form name="formName" defaultValues={{ selectName: defaultValue }}>
      <Field name="selectName" {...props}>
        <Field.Label>Label Text</Field.Label>
        <Select>
          <Select.Trigger>
            <Select.Trigger.Value placeholder="email@example.com" />
            <Select.Trigger.Chevron />
          </Select.Trigger>

          <Select.Items>
            {options.map((option, i) => (
              <Select.Items.Item
                key={option.value}
                index={i}
                value={option.value}
                disabled={false}
                selected={false}>
                {option.name}
              </Select.Items.Item>
            ))}
          </Select.Items>
        </Select>
        <Field.Details>
          This is an example detailed message for an select
        </Field.Details>
      </Field>
    </Form>
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

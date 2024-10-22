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
import { RadioGroupField } from "./RadioGroupField";

const meta: Meta<typeof RadioGroupField> = {
  title: "Form/RadioGroupField",
  component: RadioGroupField,
  tags: ["autodocs"],
  render: (props: any) => (
    <Form name="formName" defaultValues={{ selectFieldName: "" }}>
      <RadioGroupField name="selectFieldName" {...props} maxWidth="500px">
        <RadioGroupField.Label>Label Text</RadioGroupField.Label>
        <RadioGroupField.Control maxWidth="500px">
          {options.map((option, i) => (
            <RadioGroupField.Control.Item
              key={i}
              index={i}
              value={option.value}
              description={option.description}>
              {option.name}
            </RadioGroupField.Control.Item>
          ))}
        </RadioGroupField.Control>
        <RadioGroupField.Details>
          This is an example detailed message for an select field
        </RadioGroupField.Details>
      </RadioGroupField>
    </Form>
  )
} satisfies Meta<typeof RadioGroupField>;

export default meta;

type Story = StoryObj<typeof RadioGroupField>;

const options = [
  {
    name: "Apple",
    value: "Apple",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    name: "Pear",
    value: "Pear",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
    name: "Blackberry",
    value: "Blackberry",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
  },
  {
    name: "Peach",
    value: "Peach",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  }
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

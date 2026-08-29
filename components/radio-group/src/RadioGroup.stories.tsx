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
import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Base/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  render: ({ defaultValue, ...props }: any) => (
    <Form name="formName" defaultValues={{ selectName: defaultValue }}>
      <Field name="selectName" {...props}>
        <Field.Label>Label Text</Field.Label>
        <RadioGroup width="500px">
          {options.map((option, i) => (
            <RadioGroup.Item
              key={option.value}
              index={i}
              value={option.value}
              description={option.description}
              disabled={false}
              selected={false}>
              {option.name}
            </RadioGroup.Item>
          ))}
        </RadioGroup>
        <Field.Details>
          This is an example detailed message for an select
        </Field.Details>
      </Field>
    </Form>
  )
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof RadioGroup>;

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
    defaultValue: "Blackberry"
  }
};

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

export const Positive: Story = {
  args: {
    theme: "positive"
  }
};

export const Negative: Story = {
  args: {
    theme: "negative"
  }
};

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

import type { FieldLabelVariant } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { GetProps } from "@tamagui/core";
import { expect, within } from "storybook/test";
import { SelectField } from "./SelectField";

/** Field props plus the story-only `labelVariant`, passed to `SelectField.Label`. */
type SelectFieldStoryArgs = GetProps<typeof SelectField> & {
  labelVariant?: FieldLabelVariant;
};

const meta: Meta<SelectFieldStoryArgs> = {
  title: "Form/SelectField",
  component: SelectField,
  tags: ["autodocs"],
  render: (
    { defaultValue, labelVariant, ...props }: any,
    { id }: { id: string }
  ) => (
    <Form
      name={`formName-${id}`}
      initialValues={{ selectFieldName: defaultValue ?? "" }}>
      <SelectField name="selectFieldName" {...props} items={items}>
        <SelectField.Label variant={labelVariant}>Label Text</SelectField.Label>
        <SelectField.Control placeholder="email@example.com" />
      </SelectField>
    </Form>
  )
} satisfies Meta<SelectFieldStoryArgs>;

export default meta;

type Story = StoryObj<SelectFieldStoryArgs>;

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
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("button", { name: /Label Text/ });
    const label = canvas.getByText("Label Text").closest("label");

    await expect(label).not.toBeNull();
    await expect(
      Math.abs(
        label!.getBoundingClientRect().top +
          label!.getBoundingClientRect().height / 2 -
          (input.getBoundingClientRect().top +
            input.getBoundingClientRect().height / 2)
      )
    ).toBeLessThan(2);
  }
};

export const Floating: Story = {
  args: {
    labelVariant: "floating"
  },
  render: ({ labelVariant, ...props }, { id }) => (
    <Form name={`formName-${id}`} initialValues={{ selectFieldName: "" }}>
      <SelectField {...props} name="selectFieldName" items={items}>
        <SelectField.Label variant={labelVariant}>Label Text</SelectField.Label>
        <SelectField.Control />
      </SelectField>
    </Form>
  )
};

export const FloatingWithPlaceholder: Story = {
  args: {
    labelVariant: "floating"
  }
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

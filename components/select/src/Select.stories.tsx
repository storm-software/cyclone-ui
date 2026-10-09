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

import type { FieldProps } from "@cyclone-ui/field";
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { Select } from "./Select";

// Story args configure the wrapping `Field`, not the `Select` itself.
type SelectStoryArgs = Omit<FieldProps<string>, "children" | "name">;

const meta: Meta<SelectStoryArgs> = {
  title: "Base/Select",
  component: Select,
  tags: ["autodocs"],
  render: (
    { defaultValue, variant, ...props }: any,
    { id }: { id: string }
  ) => (
    <Form name={`formName-${id}`} initialValues={{ selectName: defaultValue }}>
      <Field name="selectName" {...props} variant={variant}>
        <Field.Label>Label Text</Field.Label>
        <Select variant={variant} size={props.size}>
          <Select.TextBox>
            <Select.TextBox.Value placeholder="email@example.com" />
          </Select.TextBox>

          <Select.Items>
            {options.map((option, i) => (
              <Select.Items.Item
                key={option.value}
                index={i}
                value={option.value}
                disabled={option.disabled ?? false}
                selected={false}>
                {option.name}
              </Select.Items.Item>
            ))}
          </Select.Items>
        </Select>
      </Field>
    </Form>
  )
} satisfies Meta<SelectStoryArgs>;

export default meta;

type Story = StoryObj<SelectStoryArgs>;

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

const options = [
  { name: "Apple", value: "Apple" },
  { name: "Pear", value: "Pear" },
  { name: "Blackberry", value: "Blackberry" },
  { name: "Peach", value: "Peach" },
  { name: "Apricot", value: "Apricot" },
  { name: "Melon", value: "Melon", disabled: true },
  { name: "Honeydew", value: "Honeydew" },
  { name: "Starfruit", value: "Starfruit" },
  { name: "Blueberry", value: "Blueberry" },
  { name: "Raspberry", value: "Raspberry" },
  { name: "Strawberry", value: "Strawberry" },
  { name: "Mango", value: "Mango" },
  { name: "Pineapple", value: "Pineapple" },
  { name: "Lime", value: "Lime" },
  { name: "Lemon", value: "Lemon", disabled: true },
  { name: "Coconut", value: "Coconut" },
  { name: "Guava", value: "Guava" },
  { name: "Papaya", value: "Papaya" },
  { name: "Orange", value: "Orange" },
  { name: "Grape", value: "Grape" },
  { name: "Jackfruit", value: "Jackfruit" },
  {
    name: "Yellow dragon fruit from northern Ecuador",
    value: "Yellow dragon fruit"
  },
  { name: "Durian", value: "Durian" }
];

export const Base: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const document = within(canvasElement.ownerDocument.body);
    const trigger = canvasElement.querySelector<HTMLElement>(
      "[data-select-trigger]"
    )!;

    await userEvent.click(trigger);
    await userEvent.click(
      await document.findByRole("option", { name: "Pear" })
    );
    await waitFor(async () =>
      expect(document.queryByRole("listbox")).not.toBeInTheDocument()
    );
    await expect(trigger).toHaveTextContent("Pear");

    // Reopened, the selected option is marked and disabled ones can't be
    // chosen.
    await userEvent.click(trigger);
    await expect(
      await document.findByRole("option", { name: "Pear" })
    ).toHaveAttribute("aria-selected", "true");
    await userEvent.click(document.getByRole("option", { name: "Melon" }));
    await expect(document.getByRole("listbox")).toBeInTheDocument();
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

export const Small: Story = {
  args: {
    size: "sm",
    defaultValue: "Blackberry"
  }
};

export const Large: Story = {
  args: {
    size: "lg",
    defaultValue: "Blackberry"
  }
};

export const LongValue: Story = {
  args: {
    size: "sm",
    defaultValue: "Yellow dragon fruit"
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

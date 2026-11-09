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

import type { FieldLabelVariant, FieldProps } from "@cyclone-ui/field";
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { Input } from "@cyclone-ui/input";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { Select } from "./Select";

// Story args configure the wrapping `Field`, not the `Select` itself, apart from
// `description` (rendered as its `Field.Details`).
type SelectStoryArgs = Omit<FieldProps<string>, "children" | "name"> & {
  labelVariant?: FieldLabelVariant;
  description?: string;
};

const meta: Meta<SelectStoryArgs> = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
  render: (
    { defaultValue, description, labelVariant, variant, ...props }: any,
    { id }: { id: string }
  ) => (
    <Form name={`formName-${id}`} initialValues={{ selectName: defaultValue }}>
      <Field name="selectName" {...props} variant={variant}>
        <Field.Label variant={labelVariant}>Label Text</Field.Label>
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
        {description && <Field.Details>{description}</Field.Details>}
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
    // On small screens the menu unmounts after the sheet slides out.
    await waitFor(
      async () =>
        expect(document.queryByRole("listbox")).not.toBeInTheDocument(),
      { timeout: 3000 }
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

export const Floating: Story = {
  args: {
    labelVariant: "floating"
  },
  render: ({ labelVariant, ...props }, { id }) => (
    <Form name={`formName-${id}`} initialValues={{ selectName: "" }}>
      <Field {...props} name="selectName">
        <Field.Label variant={labelVariant}>Label Text</Field.Label>
        <Select>
          <Select.TextBox>
            <Select.TextBox.Value />
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

export const Description: Story = {
  args: {
    labelVariant: "above",
    description:
      "This is a description that is longer than the label and will wrap to multiple lines. It is used to provide more information about the field."
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

export const Discovery: Story = {
  args: {
    defaultValue: "Blueberry",
    showErrorsBeforeBlur: true,
    validate: validation("discovery")
  }
};

export const Error: Story = {
  args: {
    showErrorsBeforeBlur: true,
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

/** Narrow controls reproduce long address values and compare value typography. */
export const TruncatedValue: Story = {
  render: () => (
    <Form
      name="truncated-select"
      initialValues={{
        sm: "Armed Forces Americas",
        md: "Armed Forces Americas",
        lg: "Armed Forces Americas"
      }}>
      <div style={{ width: 180, display: "grid", gap: 24 }}>
        {(["sm", "md", "lg"] as const).map(size => (
          <div key={size} data-size={size} style={{ minWidth: 0 }}>
            <Field name={size} size={size}>
              <Field.Label>State</Field.Label>
              <Select size={size}>
                <Select.TextBox>
                  <Select.TextBox.Value />
                </Select.TextBox>
                <Select.Items>
                  <Select.Items.Item index={0} value="Armed Forces Americas">
                    Armed Forces Americas
                  </Select.Items.Item>
                  <Select.Items.Item index={1} value="California">
                    California
                  </Select.Items.Item>
                </Select.Items>
              </Select>
            </Field>
            <Input size={size}>
              <Input.TextBox>
                <Input.TextBox.Value
                  aria-label={`Input ${size}`}
                  value="California"
                />
              </Input.TextBox>
            </Input>
          </div>
        ))}
      </div>
    </Form>
  ),
  play: async ({ canvasElement }) => {
    for (const size of ["sm", "md", "lg"]) {
      const row = canvasElement.querySelector(`[data-size="${size}"]`)!;
      const text = row.querySelector("[data-select-trigger] .is_Text")!;
      const input = row.querySelector("input")!;
      await waitFor(() => {
        expect(text.scrollWidth).toBeGreaterThan(text.clientWidth);
        expect(getComputedStyle(text).whiteSpace).toBe("nowrap");
        expect(getComputedStyle(text).textOverflow).toBe("ellipsis");
        for (const property of [
          "fontSize",
          "fontWeight",
          "fontFamily",
          "lineHeight"
        ] as const) {
          expect(getComputedStyle(text)[property]).toBe(
            getComputedStyle(input)[property]
          );
        }
      });
    }
    const trigger = canvasElement.querySelector("[data-select-trigger]")!;
    await userEvent.click(trigger.querySelector(".is_Text")!.parentElement!);
    const document = within(canvasElement.ownerDocument.body);
    await userEvent.click(
      await document.findByRole("option", { name: "California", exact: true })
    );
    await waitFor(() => expect(trigger).toHaveTextContent("California"));
  }
};

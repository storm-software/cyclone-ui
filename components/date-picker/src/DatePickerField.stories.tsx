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
import type { FieldLabelVariant } from "@cyclone-ui/helpers";
import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { GetProps } from "@tamagui/core";
import { expect, screen, userEvent, within } from "storybook/test";
import type { DatePickerMode, DateSeparator } from "./DatePicker";
import { DatePicker } from "./DatePicker";

/**
 * Field props plus the picker's `mode`/`separator` and the story-only
 * `labelVariant`, passed to `Field.Label`.
 */
type DatePickerFieldStoryArgs = GetProps<typeof Field> & {
  mode?: DatePickerMode;
  separator?: DateSeparator;
  labelVariant?: FieldLabelVariant;
};

const meta: Meta<DatePickerFieldStoryArgs> = {
  title: "Form/DatePicker",
  component: Field,
  tags: ["autodocs"],
  render: (
    { labelVariant, mode, separator, ...props }: any,
    { id }: { id: string }
  ) => {
    return (
      <Form
        name={`formName-${id}`}
        initialValues={{ datePickerFieldName: new Date(2026, 0, 28) }}>
        <Field name="datePickerFieldName" {...props}>
          <Field.Label variant={labelVariant}>Label Text</Field.Label>
          <DatePicker mode={mode} separator={separator} />
        </Field>
      </Form>
    );
  }
} satisfies Meta<DatePickerFieldStoryArgs>;

export default meta;

type Story = StoryObj<DatePickerFieldStoryArgs>;

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

export const Base: Story = {
  args: {},
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox") as HTMLInputElement;
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

    await userEvent.click(input);
    input.setSelectionRange(1, 1);
    await userEvent.keyboard("{ArrowUp}");
    await expect(input).toHaveValue("02.28.2026");

    input.setSelectionRange(4, 4);
    await userEvent.keyboard("{ArrowDown}");
    await expect(input).toHaveValue("02.27.2026");

    input.setSelectionRange(8, 8);
    await userEvent.keyboard("{ArrowUp}");
    await expect(input).toHaveValue("02.27.2027");
    await expect(screen.getByText("February")).toBeVisible();
    await expect(screen.getByText("2027")).toBeVisible();
  }
};

export const Floating: Story = {
  args: {
    labelVariant: "floating"
  },
  render: ({ labelVariant, mode, separator, ...props }, { id }) => (
    <Form name={`formName-${id}`} initialValues={{ datePickerFieldName: null }}>
      <Field {...props} name="datePickerFieldName">
        <Field.Label variant={labelVariant}>Label Text</Field.Label>
        <DatePicker mode={mode} separator={separator} />
      </Field>
    </Form>
  )
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

export const Dot: Story = {
  args: {
    separator: "."
  }
};

export const Slash: Story = {
  args: {
    separator: "/"
  }
};

export const Range: Story = {
  args: {
    mode: "range"
  },
  render: ({ labelVariant, mode, separator, ...props }, { id }) => (
    <Form
      name={`formName-${id}`}
      initialValues={{
        datePickerFieldName: [new Date(2026, 0, 28), new Date(2026, 1, 3)]
      }}>
      <Field {...props} name="datePickerFieldName">
        <Field.Label variant={labelVariant}>Travel dates</Field.Label>
        <DatePicker mode={mode} separator={separator} />
      </Field>
    </Form>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const input = within(canvasElement).getByRole("textbox");
    const trigger = input.closest<HTMLElement>("[aria-expanded]");

    await expect(input).toHaveValue("01.28.2026 – 02.03.2026");
    await expect(trigger).not.toBeNull();
    await userEvent.click(trigger!);
    await userEvent.click(screen.getByText("10"));
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await expect(input).toHaveValue("01.10.2026");
    await userEvent.click(screen.getByText("15"));
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(input).toHaveValue("01.10.2026 – 01.15.2026");
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

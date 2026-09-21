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

import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, screen, userEvent, within } from "storybook/test";
import { DatePickerField } from "./DatePickerField";

const meta: Meta<typeof DatePickerField> = {
  title: "Form/DatePickerField",
  component: DatePickerField,
  tags: ["autodocs"],
  render: (props: any) => {
    return (
      <Form
        name="formName"
        initialValues={{ datePickerFieldName: new Date(2026, 0, 28) }}>
        <DatePickerField name="datePickerFieldName" {...props}>
          <DatePickerField.Label>Label Text</DatePickerField.Label>
          <DatePickerField.Control />
        </DatePickerField>
      </Form>
    );
  }
} satisfies Meta<typeof DatePickerField>;

export default meta;

type Story = StoryObj<typeof DatePickerField>;

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
    const input = canvas.getByRole("textbox");
    const label = canvas.getByText("Label Text").closest("label");

    await expect(label).not.toBeNull();
    await expect(
      Math.abs(
        label!.getBoundingClientRect().top +
          label!.getBoundingClientRect().height / 2 -
          input.getBoundingClientRect().top
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
    variant: "floating"
  },
  render: props => (
    <Form name="formName" initialValues={{ datePickerFieldName: null }}>
      <DatePickerField name="datePickerFieldName" {...props}>
        <DatePickerField.Label>Label Text</DatePickerField.Label>
        <DatePickerField.Control />
      </DatePickerField>
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

export const Underline: Story = {
  args: {
    variant: "underline"
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
  render: props => (
    <Form
      name="formName"
      initialValues={{
        datePickerFieldName: [new Date(2026, 0, 28), new Date(2026, 1, 3)]
      }}>
      <DatePickerField name="datePickerFieldName" {...props}>
        <DatePickerField.Label>Travel dates</DatePickerField.Label>
        <DatePickerField.Control />
      </DatePickerField>
    </Form>
  )
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

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
          <DatePickerField.Details>
            This is an example detailed message for an date-picker field
          </DatePickerField.Details>
        </DatePickerField>
      </Form>
    );
  }
} satisfies Meta<typeof DatePickerField>;

export default meta;

type Story = StoryObj<typeof DatePickerField>;

export const Base: Story = {
  args: {},
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox") as HTMLInputElement;

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

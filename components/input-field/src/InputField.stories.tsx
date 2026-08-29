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
import { expect, userEvent, within } from "storybook/test";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Form/InputField",
  component: InputField,
  tags: ["autodocs"],
  render: ({ defaultValue = "", ...props }: any) => (
    <Form name="formName" initialValues={{ inputFieldName: defaultValue }}>
      <InputField name="inputFieldName" {...props}>
        <InputField.Label>Label Text</InputField.Label>
        <InputField.Control>
          <InputField.Control.TextBox>
            <InputField.Control.TextBox.Value placeholder="email@example.com" />
          </InputField.Control.TextBox>
        </InputField.Control>
        <InputField.Details>
          This is an example detailed message for an input field
        </InputField.Details>
      </InputField>
    </Form>
  )
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof InputField>;

export const Base: Story = {
  args: {},
  tags: ["input-height-regression"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole("textbox");
    await expect(input).toHaveStyle({ height: "40px" });
    await userEvent.type(input, "input value");
    await expect(input).toHaveValue("input value");
  }
};

export const Required: Story = {
  args: {
    required: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.queryByText("(Optional)")).not.toBeInTheDocument();
  }
};

export const Clearable: Story = {
  args: {
    clearable: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const DefaultValue: Story = {
  args: {
    defaultValue: "Defaulted Text"
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole("button");
    const iconContainer = iconButton.parentElement as HTMLElement;

    await expect(iconContainer).toHaveStyle({
      flexShrink: "0",
      width: "32px",
      minWidth: "32px"
    });

    await userEvent.hover(iconButton);
    await expect(
      await within(document.body).findByText(
        "This is an example detailed message for an input field"
      )
    ).toBeVisible();
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

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
import { NumberInputField } from "./NumberInputField";

const meta: Meta<typeof NumberInputField> = {
  title: "Form/NumberInputField",
  component: NumberInputField,
  tags: ["autodocs"],
  render: ({ defaultValue = "", ...props }: any) => (
    <Form name="formName" initialValues={{ inputFieldName: defaultValue }}>
      <NumberInputField name="inputFieldName" {...props}>
        <NumberInputField.Label>Label Text</NumberInputField.Label>
        <NumberInputField.Control>
          <NumberInputField.Control.TextBox>
            <NumberInputField.Control.TextBox.Value placeholder="0" />
          </NumberInputField.Control.TextBox>
        </NumberInputField.Control>
        <NumberInputField.Details>
          This is an example detailed message for an input field
        </NumberInputField.Details>
      </NumberInputField>
    </Form>
  )
} satisfies Meta<typeof NumberInputField>;

export default meta;

type Story = StoryObj<typeof NumberInputField>;

export const Base: Story = {
  args: {},
  tags: ["input-height-regression"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole("spinbutton");
    await expect(input).toHaveStyle({ height: "40px" });
    await expect(input).toHaveAttribute("type", "number");
    await userEvent.type(input, "12");
    await expect(input).toHaveValue(12);
    await userEvent.keyboard("{ArrowUp}");
    await expect(input).toHaveValue(13);
    await userEvent.keyboard("{ArrowDown}");
    await expect(input).toHaveValue(12);
    await userEvent.tab();
    await expect(input).toHaveValue(12);
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

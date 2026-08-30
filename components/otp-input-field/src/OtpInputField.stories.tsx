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
import { expect, fn, userEvent, within } from "storybook/test";
import { OtpInputField } from "./OtpInputField";

const meta = {
  title: "Form/OtpInputField",
  component: OtpInputField,
  tags: ["autodocs"],
  args: {
    length: 4,
    onComplete: fn()
  },
  render: ({ defaultValue = "", ...props }: any) => (
    <Form name="formName" initialValues={{ code: defaultValue }}>
      <OtpInputField name="code" {...props}>
        <OtpInputField.Label>Code</OtpInputField.Label>
        <OtpInputField.Control />
        <OtpInputField.Details>
          Enter the one-time password sent to your device
        </OtpInputField.Details>
      </OtpInputField>
    </Form>
  )
} satisfies Meta<typeof OtpInputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole("textbox");

    await expect(inputs).toHaveLength(4);
    await expect(inputs[0]).toHaveAttribute("autocomplete", "one-time-code");
    await expect(inputs[0]).toHaveAttribute("inputmode", "numeric");

    await userEvent.type(inputs[0]!, "1");
    await expect(inputs[1]).toHaveFocus();
    await userEvent.type(inputs[1]!, "2");
    await userEvent.type(inputs[2]!, "3");
    await userEvent.type(inputs[3]!, "4");

    await expect(
      inputs.map(input => (input as HTMLInputElement).value)
    ).toEqual(["1", "2", "3", "4"]);
    await expect(args.onComplete).toHaveBeenCalledWith("1234");

    await userEvent.keyboard("{Backspace}");
    await expect(inputs[3]).toHaveValue("");
    await userEvent.keyboard("{Backspace}");
    await expect(inputs[2]).toHaveValue("");
    await expect(inputs[2]).toHaveFocus();
  }
};

export const Paste: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole("textbox");

    await userEvent.click(inputs[0]!);
    await userEvent.paste("0123");

    await expect(
      inputs.map(input => (input as HTMLInputElement).value)
    ).toEqual(["0", "1", "2", "3"]);
    await expect(args.onComplete).toHaveBeenCalledWith("0123");
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
    defaultValue: "0123"
  }
};

export const SixDigits: Story = {
  args: {
    length: 6
  }
};

export const Error: Story = {
  args: {
    theme: "danger"
  }
};

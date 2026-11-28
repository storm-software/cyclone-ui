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
import type { ComponentType } from "react";
import { expect, fn, userEvent, within } from "storybook/test";
import type { OtpInputProps } from "./OtpInput";
import { OtpInput } from "./OtpInput";

/**
 * Field props plus the options passed to `OtpInput`, and a
 * `description` rendered as its `Field.Details`.
 */
type OtpInputStoryArgs = Partial<FieldProps> &
  Pick<OtpInputProps, "length" | "middleLabel" | "numericOnly" | "onComplete"> & {
    defaultValue?: string;
    description?: string;
  };

const meta: Meta<OtpInputStoryArgs> = {
  title: "Form/OtpInput",
  component: OtpInput as unknown as ComponentType<OtpInputStoryArgs>,
  tags: ["autodocs"],
  args: {
    name: "code",
    length: 4,
    onComplete: fn()
  },
  render: (
    {
      defaultValue = "",
      length,
      middleLabel,
      numericOnly,
      onComplete,
      description,
      ...props
    }: any,
    { id }: { id: string }
  ) => (
    <Form name={`formName-${id}`} initialValues={{ code: defaultValue }}>
      <Field name="code" {...props}>
        <Field.Label>Code</Field.Label>
        <OtpInput
          length={length}
          middleLabel={middleLabel}
          numericOnly={numericOnly}
          onComplete={onComplete}
        />
        {description && <Field.Details>{description}</Field.Details>}
      </Field>
    </Form>
  )
};

export default meta;

type Story = StoryObj<OtpInputStoryArgs>;

const validation = (
  type: "danger" | "warning" | "info" | "discovery" | "success"
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
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole("textbox");

    await expect(inputs).toHaveLength(4);
    await expect(inputs[0]).toHaveAttribute("autocomplete", "one-time-code");
    await expect(inputs[0]).toHaveAttribute("inputmode", "numeric");

    await userEvent.type(inputs[0]!, "A");
    await expect(inputs[0]).toHaveValue("");
    await expect(inputs[0]).toHaveFocus();

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

export const Alphanumeric: Story = {
  args: { length: 8, numericOnly: false },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole("textbox");

    await expect(inputs[0]).toHaveAttribute("inputmode", "text");
    await userEvent.click(canvas.getByText("Code", { exact: true }));
    await expect(inputs[0]).toHaveFocus();
    await userEvent.type(inputs[0]!, "A");
    await expect(inputs[1]).toHaveFocus();
    await userEvent.click(inputs[0]!);
    await userEvent.paste("AbCD-2345");

    await expect(
      inputs.map(input => (input as HTMLInputElement).value)
    ).toEqual([..."AbCD2345"]);
    await expect(args.onComplete).toHaveBeenCalledWith("AbCD2345");
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

export const Description: Story = {
  args: {
    description:
      "This is a description that is longer than the label and will wrap to multiple lines. It is used to provide more information about the field."
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

export const MiddleLabel: Story = {
  args: {
    middleLabel: "-"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const children = [...canvas.getByRole("group").children];

    await expect(canvas.getAllByRole("textbox")).toHaveLength(4);
    await expect(children).toHaveLength(5);
    await expect(children[2]).toHaveTextContent("-");
  }
};

export const Error: Story = {
  args: {
    showErrorsBeforeBlur: true,
    validate: validation("danger")
  }
};

export const SmallSize: Story = { args: { size: "sm" } };

export const MediumSize: Story = { args: { size: "md" } };

export const LargeSize: Story = { args: { size: "lg" } };

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
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import {
  createEvent,
  expect,
  fireEvent,
  userEvent,
  waitFor,
  within
} from "storybook/test";
import { PasswordInput } from "./PasswordInput";

/** Field props plus the story-only `labelVariant`, passed to `Field.Label`. */
type PasswordInputStoryArgs = Partial<FieldProps> & {
  labelVariant?: FieldLabelVariant;
  defaultValue?: string;
};

// Annotated rather than inferred: the inferred type reaches `MaskitoOptions`
// through the Field props, which is not portable from this package.
const meta: Meta<PasswordInputStoryArgs> = {
  title: "Form/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  args: {
    name: "inputFieldName"
  },
  parameters: {
    layout: "centered"
  },
  decorators: [
    Story => (
      <View width={480} maxWidth="calc(100vw - 48px)">
        <Story />
      </View>
    )
  ],
  render: (
    { defaultValue = "", labelVariant, ...props }: any,
    { id }: { id: string }
  ) => (
    <Form
      name={`formName-${id}`}
      initialValues={{ inputFieldName: defaultValue }}>
      <Field name="inputFieldName" {...props}>
        <Field.Label variant={labelVariant}>New Password</Field.Label>
        <PasswordInput>
          <PasswordInput.TextBox>
            <PasswordInput.TextBox.Value autoComplete="new-password" />
          </PasswordInput.TextBox>
          <PasswordInput.Trigger />
        </PasswordInput>
      </Field>
    </Form>
  )
};

export default meta;

type Story = StoryObj<PasswordInputStoryArgs>;

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("New Password");
    const strength = canvas.getByRole("meter", { name: "Password strength" });

    // Floating is the default variant: a 45px frame, 43px inside its border.
    await expect(input).toHaveStyle({ height: "43px" });
    await expect(input).toHaveAttribute("type", "password");
    await expect(
      canvas.getByRole("button", { name: "Show password" }).querySelector("svg")
    ).not.toBeNull();
    await expect(strength).toHaveAttribute("aria-valuenow", "0");
    await expect(strength).toHaveTextContent("Password strength");

    await userEvent.click(input);
    await waitFor(() => {
      const label = canvas.getByText("New Password");
      const labelBounds = label.getBoundingClientRect();
      const inputBounds = input.getBoundingClientRect();

      expect(labelBounds.top + labelBounds.height / 2).toBeCloseTo(
        inputBounds.top,
        1
      );
    });

    await userEvent.type(input, "OrangeBoatTree1234");
    await expect(strength).toHaveAttribute("aria-valuenow", "4");
    await expect(strength).toHaveTextContent("Strong");
    await waitFor(async () =>
      expect(
        canvas.queryByText("Use at least 8 characters")
      ).not.toBeInTheDocument()
    );

    await userEvent.click(
      canvas.getByRole("button", { name: "Show password" })
    );
    await expect(input).toHaveAttribute("type", "text");
    await expect(input).toHaveValue("OrangeBoatTree1234");
    await expect(
      canvas.getByRole("button", { name: "Hide password" })
    ).toBeInTheDocument();

    const capsLockEvent = createEvent.keyDown(input, { key: "A" });
    Object.defineProperty(capsLockEvent, "getModifierState", {
      value: () => true
    });
    await fireEvent(input, capsLockEvent);
    await expect(canvas.getByText("Caps lock on")).toBeInTheDocument();

    const capsLockOffEvent = createEvent.keyUp(input, { key: "a" });
    Object.defineProperty(capsLockOffEvent, "getModifierState", {
      value: () => false
    });
    await fireEvent(input, capsLockOffEvent);
    await expect(canvas.queryByText("Caps lock on")).not.toBeInTheDocument();
  }
};

export const MissingCriteria: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("New Password");

    await userEvent.type(input, "pass!");
    await waitFor(async () => {
      await expect(
        canvas.getByText("Use at least 8 characters")
      ).toBeInTheDocument();
      await expect(
        canvas.getByText("Include an uppercase letter")
      ).toBeInTheDocument();
      await expect(
        canvas.queryByText("Include a lowercase letter")
      ).not.toBeInTheDocument();
      await expect(
        canvas.queryByText("Include a number or special character")
      ).not.toBeInTheDocument();
    });
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

export const Floating: Story = {
  args: {
    labelVariant: "floating"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("New Password");
    const label = canvas.getByText("New Password");
    const inputBounds = input.getBoundingClientRect();
    const labelBounds = label.getBoundingClientRect();

    await expect(
      Math.abs(
        labelBounds.top +
          labelBounds.height / 2 -
          (inputBounds.top + inputBounds.height / 2)
      )
    ).toBeLessThan(2);
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

export const DefaultValue: Story = {
  args: {
    defaultValue: "OrangeBoatTree1234"
  }
};

export const VeryWeak: Story = {
  args: {
    defaultValue: "abc"
  }
};

export const Weak: Story = {
  args: {
    defaultValue: "password"
  }
};

export const Good: Story = {
  args: {
    defaultValue: "passwordTree"
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

export const Positive: Story = {
  args: {
    validate: validation("positive")
  }
};

export const Negative: Story = {
  args: {
    validate: validation("negative")
  }
};

export const SmallSize: Story = { args: { size: "sm" } };

export const MediumSize: Story = { args: { size: "md" } };

export const LargeSize: Story = { args: { size: "lg" } };

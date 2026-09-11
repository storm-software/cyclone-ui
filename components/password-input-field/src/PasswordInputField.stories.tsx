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
import { View } from "@tamagui/core";
import {
  createEvent,
  expect,
  fireEvent,
  userEvent,
  waitFor,
  within
} from "storybook/test";
import { PasswordInputField } from "./PasswordInputField";

const meta = {
  title: "Form/PasswordInputField",
  component: PasswordInputField,
  tags: ["autodocs"],
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
  render: ({ defaultValue = "", ...props }: any) => (
    <Form name="formName" initialValues={{ inputFieldName: defaultValue }}>
      <PasswordInputField name="inputFieldName" {...props}>
        <PasswordInputField.Label hideOptional={true}>
          New Password
        </PasswordInputField.Label>
        <PasswordInputField.Control>
          <PasswordInputField.Control.TextBox>
            <PasswordInputField.Control.TextBox.Value autoComplete="new-password" />
          </PasswordInputField.Control.TextBox>
          <PasswordInputField.Control.Trigger />
        </PasswordInputField.Control>
      </PasswordInputField>
    </Form>
  )
} satisfies Meta<typeof PasswordInputField>;

export default meta;

type Story = StoryObj<typeof meta>;

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

    await expect(input).toHaveStyle({ height: "40px" });
    await expect(input).toHaveAttribute("type", "password");
    await expect(
      canvas.getByRole("button", { name: "Show password" }).querySelector("svg")
    ).not.toBeNull();
    await expect(strength).toHaveAttribute("aria-valuenow", "0");
    await expect(strength).toHaveTextContent("Password strength");

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
    variant: "floating"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("New Password");
    const label = canvas.getByText("New Password");
    const inputBounds = input.getBoundingClientRect();
    const labelBounds = label.getBoundingClientRect();

    await expect(labelBounds.top + labelBounds.height / 2).toBeCloseTo(
      inputBounds.top + inputBounds.height / 2,
      1
    );
  }
};

export const Underline: Story = {
  args: {
    variant: "underline"
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

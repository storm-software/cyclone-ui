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
import { expect, userEvent, waitFor, within } from "storybook/test";
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
      </InputField>
    </Form>
  )
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof InputField>;

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
        message: "This is an example detailed message for an input field",
        type
      }
    ]
  ]
});

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

export const Floating: Story = {
  args: {
    variant: "floating"
  },
  render: props => (
    <Form name="formName" initialValues={{ inputFieldName: "" }}>
      <InputField name="inputFieldName" {...props}>
        <InputField.Label>Label Text</InputField.Label>
        <InputField.Control>
          <InputField.Control.TextBox>
            <InputField.Control.TextBox.Value />
          </InputField.Control.TextBox>
        </InputField.Control>
      </InputField>
    </Form>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    const labelText = canvas.getByText("Label Text");
    const label = labelText.closest("label") as HTMLLabelElement;
    const initialFontSize = Number.parseFloat(
      getComputedStyle(labelText).fontSize
    );
    const inputRect = input.getBoundingClientRect();
    const labelRect = label.getBoundingClientRect();

    await expect(
      Math.abs(
        labelRect.top +
          labelRect.height / 2 -
          (inputRect.top + inputRect.height / 2)
      )
    ).toBeLessThan(2);

    await userEvent.click(input);
    await waitFor(() => {
      const focusedLabelRect = label.getBoundingClientRect();
      expect(
        Math.abs(
          focusedLabelRect.top + focusedLabelRect.height / 2 - inputRect.top
        )
      ).toBeLessThan(2);
      expect(
        Number.parseFloat(getComputedStyle(labelText).fontSize)
      ).toBeLessThan(initialFontSize);
    });

    await userEvent.type(input, "input value");
    await userEvent.tab();
    await waitFor(() => {
      const valuedLabelRect = label.getBoundingClientRect();
      expect(
        Math.abs(
          valuedLabelRect.top + valuedLabelRect.height / 2 - inputRect.top
        )
      ).toBeLessThan(2);
    });
  }
};

export const FloatingWithPlaceholder: Story = {
  args: {
    variant: "floating"
  }
};

export const Underline: Story = {
  args: {
    variant: "underline"
  }
};

export const WithLink: Story = {
  args: {},
  render: props => (
    <Form name="formName" initialValues={{ inputFieldName: "" }}>
      <InputField name="inputFieldName" {...props}>
        <InputField.Label>Email</InputField.Label>
        <InputField.Link href="#input-field-link">Why we ask</InputField.Link>
        <InputField.Control>
          <InputField.Control.TextBox>
            <InputField.Control.TextBox.Value placeholder="email@example.com" />
          </InputField.Control.TextBox>
        </InputField.Control>
      </InputField>
    </Form>
  )
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await userEvent.type(input, "input value");
    const clearButton = canvas.getByRole("button");
    await expect(clearButton).toBeVisible();
    await userEvent.click(clearButton);
    await expect(input).toHaveValue("");
    await expect(input).toHaveFocus();
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

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const BrandFloating: Story = {
  args: {
    theme: "brand",
    variant: "floating"
  }
};

export const BrandUnderline: Story = {
  args: {
    theme: "brand",
    variant: "underline"
  }
};

export const Discovery: Story = {
  args: {
    validate: validation("discovery")
  }
};

export const DiscoveryFloating: Story = {
  args: {
    validate: validation("discovery"),
    variant: "floating"
  }
};

export const DiscoveryUnderline: Story = {
  args: {
    validate: validation("discovery"),
    variant: "underline"
  }
};

export const Error: Story = {
  args: {
    validate: validation("danger")
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(
      "This is an example detailed message for an input field"
    );
    const iconButton = canvas.getAllByRole("button").at(-1)!;
    const iconContainer = iconButton;

    await expect(iconContainer).toHaveStyle({
      flexShrink: "0",
      width: "32px",
      minWidth: "32px"
    });

    await userEvent.hover(iconButton);
    const messages = await within(document.body).findAllByText(
      "This is an example detailed message for an input field"
    );
    await waitFor(async () => {
      await expect(messages.at(-1)!).toBeVisible();
    });
  }
};

export const ErrorFloating: Story = {
  args: {
    validate: validation("danger"),
    variant: "floating"
  }
};

export const ErrorUnderline: Story = {
  args: {
    validate: validation("danger"),
    variant: "underline"
  }
};

export const Warning: Story = {
  args: {
    validate: validation("warning")
  }
};

export const WarningFloating: Story = {
  args: {
    validate: validation("warning"),
    variant: "floating"
  }
};

export const WarningUnderline: Story = {
  args: {
    validate: validation("warning"),
    variant: "underline"
  }
};

export const Info: Story = {
  args: {
    validate: validation("info")
  }
};

export const InfoFloating: Story = {
  args: {
    validate: validation("info"),
    variant: "floating"
  }
};

export const InfoUnderline: Story = {
  args: {
    validate: validation("info"),
    variant: "underline"
  }
};

export const Success: Story = {
  args: {
    validate: validation("success")
  }
};

export const SuccessFloating: Story = {
  args: {
    validate: validation("success"),
    variant: "floating"
  }
};

export const SuccessUnderline: Story = {
  args: {
    validate: validation("success"),
    variant: "underline"
  }
};

export const Positive: Story = {
  args: {
    validate: validation("positive")
  }
};

export const PositiveFloating: Story = {
  args: {
    validate: validation("positive"),
    variant: "floating"
  }
};

export const PositiveUnderline: Story = {
  args: {
    validate: validation("positive"),
    variant: "underline"
  }
};

export const Negative: Story = {
  args: {
    validate: validation("negative")
  }
};

export const NegativeFloating: Story = {
  args: {
    validate: validation("negative"),
    variant: "floating"
  }
};

export const NegativeUnderline: Story = {
  args: {
    validate: validation("negative"),
    variant: "underline"
  }
};

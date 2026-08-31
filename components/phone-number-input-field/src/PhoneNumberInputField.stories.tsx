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
import { PhoneNumberInputField } from "./PhoneNumberInputField";

const meta = {
  title: "Form/PhoneNumberInputField",
  component: PhoneNumberInputField,
  tags: ["autodocs"],
  render: ({ defaultValue = "", ...props }: any) => (
    <Form name="formName" initialValues={{ inputFieldName: defaultValue }}>
      <PhoneNumberInputField name="inputFieldName" {...props}>
        <PhoneNumberInputField.Label>Label Text</PhoneNumberInputField.Label>
        <PhoneNumberInputField.Control>
          <PhoneNumberInputField.Control.TextBox>
            <PhoneNumberInputField.Control.TextBox.Value placeholder="Phone number" />
          </PhoneNumberInputField.Control.TextBox>
        </PhoneNumberInputField.Control>
        <PhoneNumberInputField.Details>
          This is an example detailed message for an input field
        </PhoneNumberInputField.Details>
      </PhoneNumberInputField>
    </Form>
  )
} satisfies Meta<typeof PhoneNumberInputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
  tags: ["input-height-regression", "phone-number-input-field"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    let input = canvas.getByRole("textbox");
    await expect(input).toHaveStyle({ height: "40px" });
    await expect(input).toHaveAttribute("type", "tel");
    await expect(input).toHaveValue("+1 ");

    await userEvent.type(input, "2125550123");
    await expect(input).toHaveValue("+1 212 555-0123");

    const countryTrigger = canvas.getByRole("button", {
      name: /select country code/i
    });
    await expect(countryTrigger).toHaveStyle({
      width: "32px",
      minWidth: "32px"
    });
    await userEvent.click(countryTrigger);
    const document = within(canvasElement.ownerDocument.body);
    const search = document.getByRole("textbox", { name: "Search countries" });
    const firstCountry = document.getByRole("button", {
      name: /AC\s+\+247/i
    });
    const firstCountryLabel = firstCountry.lastElementChild as HTMLElement;
    const firstCountryLabelRange = firstCountry.ownerDocument.createRange();
    firstCountryLabelRange.selectNodeContents(firstCountryLabel);

    await expect(
      firstCountryLabelRange.getBoundingClientRect().right
    ).toBeLessThanOrEqual(firstCountry.getBoundingClientRect().right);

    await userEvent.type(search, "United Kingdom");
    await userEvent.click(document.getByRole("button", { name: /GB.*\+44/i }));

    // The concrete input remounts when its country-specific Maskito options
    // change, so continue the interaction through the new DOM node.
    input = canvas.getByRole("textbox");
    await waitFor(async () => expect(input).toHaveValue("+44 "));
    await waitFor(async () =>
      expect(
        document.queryByRole("textbox", { name: "Search countries" })
      ).not.toBeInTheDocument()
    );
    input = canvas.getByRole("textbox");
    await userEvent.type(input, "2071234567");
    await expect(input).toHaveValue("+44 20 7123-4567");
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
    defaultValue: "+44 20 7123-4567"
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

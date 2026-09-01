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
import { SearchInputField } from "./SearchInputField";

const meta: Meta<typeof SearchInputField> = {
  title: "Form/SearchInputField",
  component: SearchInputField,
  tags: ["autodocs"],
  render: ({ defaultValue = "", ...props }: any) => (
    <Form
      name="formName"
      defaultValues={{ searchInputFieldName: defaultValue }}>
      <SearchInputField name="searchInputFieldName" {...props}>
        <SearchInputField.Label>Label Text</SearchInputField.Label>
        <SearchInputField.Control>
          <SearchInputField.Control.TextBox />
        </SearchInputField.Control>
        <SearchInputField.Details>
          This is an example detailed message for a search input field
        </SearchInputField.Details>
      </SearchInputField>
    </Form>
  )
} satisfies Meta<typeof SearchInputField>;

export default meta;

type Story = StoryObj<typeof SearchInputField>;

export const Base: Story = {
  args: {}
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

export const DefaultValue: Story = {
  args: {
    defaultValue: "Defaulted Text"
  }
};

export const AutoComplete: Story = {
  args: {
    suggestions: ["Apple", "Apricot", "Banana", "Blueberry"]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const document = within(canvasElement.ownerDocument.body);
    const input = canvas.getByRole("combobox");

    await userEvent.type(input, "ap");
    await expect(input).toHaveAttribute("aria-expanded", "true");
    await waitFor(async () => {
      await expect(
        document.getByRole("option", { name: "Apple" })
      ).toBeVisible();
      await expect(
        document.getByRole("option", { name: "Apricot" })
      ).toBeVisible();
    });
    await expect(
      document.queryByRole("option", { name: "Banana" })
    ).not.toBeInTheDocument();

    await userEvent.click(document.getByRole("option", { name: "Apricot" }));
    await expect(input).toHaveValue("Apricot");
    await waitFor(async () =>
      expect(document.queryByRole("listbox")).not.toBeInTheDocument()
    );

    await userEvent.clear(input);
    await userEvent.type(input, "bl");
    await userEvent.keyboard("{ArrowDown}{Enter}");
    await expect(input).toHaveValue("Blueberry");
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

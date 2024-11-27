/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react";
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

export const Help: Story = {
  args: {
    theme: "help"
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

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
import { Filter } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import type { SearchInputProps } from "./SearchInput";
import { SearchInput } from "./SearchInput";

/**
 * Story-only args consumed by the custom `render`: Field options plus the
 * SearchInput's own `suggestions`, the `labelVariant` passed to `Field.Label`,
 * and the `description` rendered as its `Field.Details`.
 */
type SearchInputStoryArgs = Pick<
  FieldProps,
  | "theme"
  | "size"
  | "disabled"
  | "required"
  | "validate"
  | "showErrorsBeforeBlur"
  | "clearable"
> &
  Pick<SearchInputProps, "suggestions"> & {
    defaultValue?: string;
    icon?: ReactNode;
    labelVariant?: FieldLabelVariant;
    description?: string;
  };

const meta: Meta<SearchInputStoryArgs> = {
  title: "Form/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  render: (
    {
      defaultValue = "",
      suggestions,
      icon,
      labelVariant,
      description,
      ...props
    }: SearchInputStoryArgs,
    { id }: { id: string }
  ) => (
    <Form
      name={`formName-${id}`}
      initialValues={{ searchInputFieldName: defaultValue }}>
      <Field name="searchInputFieldName" {...props}>
        <Field.Label variant={labelVariant}>Label Text</Field.Label>
        <SearchInput suggestions={suggestions}>
          <SearchInput.TextBox icon={icon} />
        </SearchInput>
        {description && <Field.Details>{description}</Field.Details>}
      </Field>
    </Form>
  )
} satisfies Meta<SearchInputStoryArgs>;

export default meta;

type Story = StoryObj<SearchInputStoryArgs>;

const validation = (
  type:
    | "danger"
    | "warning"
    | "info"
    | "discovery"
    | "success"
    | "positive"
    | "negative"
): NonNullable<FieldProps["validate"]> => ({
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
  args: {}
};

export const CustomIcon: Story = {
  args: {
    icon: <Filter />
  }
};

export const NoIcon: Story = {
  args: {
    icon: null
  }
};

export const Required: Story = {
  args: {
    required: true
  }
};

export const Description: Story = {
  args: {
    labelVariant: "above",
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
    defaultValue: "Defaulted Text"
  }
};

export const AutoComplete: Story = {
  args: {
    suggestions: [
      "Apple",
      "Pear",
      "Blackberry",
      "Peach",
      "Apricot",
      "Melon",
      "Honeydew",
      "Starfruit",
      "Blueberry",
      "Raspberry",
      "Strawberry",
      "Mango",
      "Pineapple",
      "Lime",
      "Lemon",
      "Coconut",
      "Guava",
      "Papaya",
      "Orange",
      "Grape",
      "Jackfruit",
      "Durian"
    ]
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
    // "bl" matches Blackberry then Blueberry; the first ArrowDown highlights
    // Blackberry, the second moves on to Blueberry.
    await userEvent.keyboard("{ArrowDown}{ArrowDown}{Enter}");
    await expect(input).toHaveValue("Blueberry");
  }
};

export const Discovery: Story = {
  args: {
    validate: validation("discovery")
  }
};

export const Error: Story = {
  args: {
    showErrorsBeforeBlur: true,
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

export const SmallSize: Story = { args: { size: "sm" } };

export const MediumSize: Story = { args: { size: "md" } };

export const LargeSize: Story = { args: { size: "lg" } };

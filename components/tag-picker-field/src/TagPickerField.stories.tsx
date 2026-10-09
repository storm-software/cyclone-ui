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

import type { FieldLabelVariant } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { GetProps } from "@tamagui/core";
import { View } from "@tamagui/core";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { TagPickerField } from "./TagPickerField";

/** Field props plus the story-only `labelVariant`, passed to `TagPickerField.Label`. */
type TagPickerFieldStoryArgs = GetProps<typeof TagPickerField> & {
  labelVariant?: FieldLabelVariant;
};

const meta: Meta<TagPickerFieldStoryArgs> = {
  title: "Form/TagPickerField",
  component: TagPickerField,
  tags: ["autodocs"],
  // `control` holds props for `TagPickerField.Control`, such as `tagVariant`.
  render: (
    { defaultValue = [], control, labelVariant, ...props }: any,
    { id }: { id: string }
  ) => (
    <Form
      name={`formName-${id}`}
      initialValues={{ tagPickerFieldName: defaultValue }}>
      <View width={360}>
        <TagPickerField name="tagPickerFieldName" {...props}>
          <TagPickerField.Label variant={labelVariant}>
            Topics
          </TagPickerField.Label>
          <TagPickerField.Control placeholder="Add a topic" {...control} />
          <TagPickerField.Details>
            Press Enter to add a topic
          </TagPickerField.Details>
        </TagPickerField>
      </View>
    </Form>
  )
} satisfies Meta<TagPickerFieldStoryArgs>;

export default meta;

type Story = StoryObj<TagPickerFieldStoryArgs>;

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
        message: "This is an example detailed message for a tag select field",
        type
      }
    ]
  ]
});

export const Base: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    // The label targets the text box.
    await userEvent.click(canvas.getByText("Topics"));
    await expect(input).toHaveFocus();

    // The control's value comes from the form, so pills only appear (and
    // leave) once a change reaches the form state.
    await userEvent.keyboard("Design{Enter}Research{Enter}");
    await waitFor(async () =>
      expect(canvas.getByText("Research")).toBeTruthy()
    );
    await expect(canvas.getByText("Design")).toBeTruthy();

    await userEvent.keyboard("{Backspace}");
    await waitFor(async () =>
      expect(canvas.queryByText("Research")).toBeNull()
    );

    await userEvent.click(
      canvas.getByRole("button", { name: "Remove Design" })
    );
    await waitFor(async () => expect(canvas.queryByText("Design")).toBeNull());
    await expect(input).toHaveFocus();
  }
};

export const DefaultValue: Story = {
  args: {
    defaultValue: ["Design", "Engineering", "Research"]
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
    disabled: true,
    defaultValue: ["Design", "Engineering"]
  }
};

export const MaxTags: Story = {
  args: {
    defaultValue: ["Design", "Engineering", "Research"],
    validate: {
      onChange: [
        (tags: string[] | null) =>
          (tags?.length ?? 0) > 3
            ? [{ message: "Choose at most 3 topics", type: "warning" }]
            : []
      ]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByRole("textbox"), "Marketing{Enter}");
    await canvas.findByText("Choose at most 3 topics");

    await userEvent.keyboard("{Backspace}");
    await waitFor(async () =>
      expect(canvas.queryByText("Choose at most 3 topics")).toBeNull()
    );
  }
};

export const Floating: Story = {
  args: {
    labelVariant: "floating"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    const label = canvas.getByText("Topics").closest("label")!;
    const inputRect = input.getBoundingClientRect();
    const restingRect = label.getBoundingClientRect();

    // The empty field rests the label on the text box, like an `Input`.
    await expect(
      Math.abs(
        restingRect.top +
          restingRect.height / 2 -
          (inputRect.top + inputRect.height / 2)
      )
    ).toBeLessThan(2);

    await userEvent.click(input);
    await userEvent.keyboard("Design{Enter}");
    await userEvent.tab();
    await userEvent.tab();

    // With tags the label stays floated after focus leaves.
    await waitFor(async () =>
      expect(label.getBoundingClientRect().top).toBeLessThan(
        restingRect.top - 5
      )
    );
  }
};

export const FloatingWithValue: Story = {
  args: {
    labelVariant: "floating",
    defaultValue: ["Design", "Engineering"]
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

export const PrimaryTags: Story = {
  args: {
    defaultValue: ["Design", "Engineering"],
    control: { tagVariant: "primary" }
  }
};

export const Brand: Story = {
  args: {
    theme: "brand",
    defaultValue: ["Design", "Engineering"]
  }
};

export const Error: Story = {
  args: {
    validate: validation("danger"),
    defaultValue: ["Design"]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByRole("textbox"), "Research{Enter}");
    await canvas.findByText(
      "This is an example detailed message for a tag select field"
    );
  }
};

export const ErrorFloating: Story = {
  args: {
    validate: validation("danger"),
    labelVariant: "floating",
    defaultValue: ["Design"]
  }
};

export const Warning: Story = {
  args: {
    validate: validation("warning"),
    defaultValue: ["Design"]
  }
};

export const Info: Story = {
  args: {
    validate: validation("info"),
    defaultValue: ["Design"]
  }
};

export const Success: Story = {
  args: {
    validate: validation("success"),
    defaultValue: ["Design"]
  }
};

export const SmallSize: Story = {
  args: { size: "sm", defaultValue: ["Design", "Engineering"] }
};

export const MediumSize: Story = {
  args: { size: "md", defaultValue: ["Design", "Engineering"] }
};

export const LargeSize: Story = {
  args: { size: "lg", defaultValue: ["Design", "Engineering"] }
};

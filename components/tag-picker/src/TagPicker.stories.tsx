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
import { Text, View } from "@tamagui/core";
import { useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import type { TagPickerProps } from "./TagPicker";
import { TagPicker } from "./TagPicker";

type TagPickerStoryArgs = Omit<TagPickerProps, "name"> &
  Omit<FieldProps<string[]>, "children" | "name"> & {
    labelVariant?: FieldLabelVariant;
  };

const meta: Meta<TagPickerStoryArgs> = {
  title: "Form/TagPicker",
  component: TagPicker,
  tags: ["autodocs"],
  args: {
    placeholder: "Add a tag",
    testID: "tag-picker"
  },
  render: (
    {
      defaultValue = [],
      disabled,
      labelVariant,
      required,
      size,
      tagVariant,
      theme,
      validate,
      variant,
      ...control
    }: any,
    { id }: { id: string }
  ) => (
    <Form
      name={`formName-${id}`}
      initialValues={{ tagPickerName: defaultValue }}>
      <View width={360}>
        <Field
          name="tagPickerName"
          disabled={disabled}
          required={required}
          size={size}
          theme={theme}
          validate={validate}
          variant={variant}>
          <Field.Label variant={labelVariant}>Topics</Field.Label>
          <TagPicker
            {...control}
            disabled={disabled}
            size={size}
            tagVariant={tagVariant}
            variant={variant}
          />
          <Field.Details>Press Enter to add a topic</Field.Details>
        </Field>
      </View>
    </Form>
  )
} satisfies Meta<TagPickerStoryArgs>;

export default meta;

type Story = StoryObj<TagPickerStoryArgs>;

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
        message: "This is an example detailed message for a tag select field",
        type
      }
    ]
  ]
});

/** Waits until a removed pill has finished its exit animation. */
const expectTagRemoved = async (canvasElement: HTMLElement, tag: string) =>
  waitFor(async () =>
    expect(within(canvasElement).queryByText(tag)).toBeNull()
  );

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await userEvent.type(input, "react{Enter}");
    await expect(canvas.getByText("react")).toBeTruthy();
    await expect(input).toHaveValue("");
    await expect(input).not.toHaveAttribute("placeholder");

    await userEvent.type(input, "  tamagui  {Enter}");
    await expect(canvas.getByText("tamagui")).toBeTruthy();

    // Backspace in the empty field removes the last tag.
    await userEvent.keyboard("{Backspace}");
    await expectTagRemoved(canvasElement, "tamagui");
    await expect(canvas.getByText("react")).toBeTruthy();

    // The remove button removes its tag and keeps focus in the field.
    await userEvent.click(canvas.getByRole("button", { name: "Remove react" }));
    await expectTagRemoved(canvasElement, "react");
    await expect(input).toHaveFocus();
    await expect(input).toHaveAttribute("placeholder", "Add a tag");
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
    await expect(
      within(canvasElement).queryByText("(Optional)")
    ).not.toBeInTheDocument();
  }
};

export const Wrapping: Story = {
  args: {
    defaultValue: [
      "TypeScript",
      "React",
      "React Native",
      "Tamagui",
      "Storybook",
      "Vite",
      "Design systems"
    ]
  }
};

export const IgnoresDuplicates: Story = {
  args: {
    defaultValue: ["react"]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await userEvent.type(input, "react{Enter}");
    await expect(canvas.getAllByText("react")).toHaveLength(1);
    await expect(input).toHaveValue("");
  }
};

export const EditTag: Story = {
  args: {
    defaultValue: ["Design", "Engineering", "Research"]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.dblClick(canvas.getByText("Engineering"));
    const input = canvas.getByRole("textbox", { name: "Edit Engineering" });
    await userEvent.clear(input);
    await userEvent.type(input, "Operations{Enter}");

    await waitFor(async () =>
      expect(canvas.queryByText("Engineering")).toBeNull()
    );
    await expect(canvas.getByText("Operations")).toBeInTheDocument();
  }
};

export const FocusWithin: Story = {
  args: {
    defaultValue: ["react"]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const frame = canvas.getByTestId("tag-picker");
    const getStyles = (
      globalThis as unknown as {
        getComputedStyle: (element: unknown) => { boxShadow: string };
      }
    ).getComputedStyle;

    await expect(getStyles(frame).boxShadow).toBe("none");

    // Focus on a remove button is still focus within the field.
    await userEvent.tab();
    await expect(
      canvas.getByRole("button", { name: "Remove react" })
    ).toHaveFocus();
    await waitFor(async () =>
      expect(getStyles(frame).boxShadow).not.toBe("none")
    );

    await userEvent.tab();
    await expect(canvas.getByRole("textbox")).toHaveFocus();
    await expect(getStyles(frame).boxShadow).not.toBe("none");
  }
};

export const Disabled: Story = {
  args: {
    defaultValue: ["Design", "Engineering"],
    disabled: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.queryByRole("button")).toBeNull();
    await expect(canvas.getByRole("textbox")).toBeDisabled();
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

export const PrimaryTags: Story = {
  args: {
    defaultValue: ["Design", "Engineering", "Research"],
    tagVariant: "primary"
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

const ControlledExample = () => {
  const [tags, setTags] = useState(["Design", "Engineering"]);

  return (
    <View width={360} gap="xl">
      <TagPicker
        name="controlled-tags"
        placeholder="Add a tag"
        value={tags}
        onChange={setTags}
      />
      <Text color="ink" fontFamily="body-md">
        {`Value: ${JSON.stringify(tags)}`}
      </Text>
    </View>
  );
};

export const Controlled: Story = {
  render: () => <ControlledExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByRole("textbox"), "Research{Enter}");
    await expect(
      canvas.getByText('Value: ["Design","Engineering","Research"]')
    ).toBeTruthy();
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

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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text, View } from "@tamagui/core";
import { useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { TagPicker } from "./TagPicker";

const meta: Meta<typeof TagPicker> = {
  title: "Base/TagPicker",
  component: TagPicker,
  tags: ["autodocs"],
  args: {
    name: "tags",
    placeholder: "Add a tag",
    testID: "tag-picker"
  },
  render: (args: any) => (
    <View width={360}>
      <TagPicker {...args} />
    </View>
  )
} satisfies Meta<typeof TagPicker>;

export default meta;

type Story = StoryObj<typeof TagPicker>;

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

export const PrimaryTags: Story = {
  args: {
    defaultValue: ["Design", "Engineering", "Research"],
    tagVariant: "primary"
  }
};

export const Underline: Story = {
  args: {
    defaultValue: ["Design", "Engineering"],
    variant: "underline"
  }
};

export const Brand: Story = {
  args: {
    defaultValue: ["Design", "Engineering"],
    theme: "brand"
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
      <Text color="inkBody" fontFamily="body-md">
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

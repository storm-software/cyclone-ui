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
import { View } from "@tamagui/core";
import { useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";

import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Triggers/Tag",
  component: Tag,
  tags: ["autodocs"],
  render: (args: any) => (
    <Tag {...args}>
      <Tag.Text>{args.children}</Tag.Text>
    </Tag>
  )
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof Tag>;

export const Base: Story = {
  args: {
    children: "Tag Text"
  }
};

export const Rounded: Story = {
  args: {
    children: "Tag Text",
    circular: true
  }
};

const expectOutlinedTextToMatchBorder = async (canvasElement: HTMLElement) => {
  const text = within(canvasElement).getByText("Tag Text");
  const frame = (text as unknown as { parentElement: unknown | null })
    .parentElement;
  const getStyles = (
    globalThis as unknown as {
      getComputedStyle: (element: unknown) => {
        borderColor: string;
        borderWidth: string;
        color: string;
      };
    }
  ).getComputedStyle;

  await expect(frame).not.toBeNull();
  await expect(getStyles(frame).borderWidth).toBe("2px");
  await expect(getStyles(text).color).toBe(getStyles(frame).borderColor);
};

export const Outlined: Story = {
  args: {
    children: "Tag Text",
    outlined: true
  },
  play: async ({ canvasElement }) =>
    expectOutlinedTextToMatchBorder(canvasElement)
};

export const Pressable: Story = {
  args: {
    children: "Tag Text",
    pressable: true
  }
};

export const PressableOutlined: Story = {
  args: {
    children: "Tag Text",
    pressable: true,
    outlined: true
  }
};

export const Removable: Story = {
  args: {
    children: "Tag Text",
    removable: true,
    removeButtonLabel: "Remove Tag Text"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const removeButton = canvas.getByRole("button", {
      name: "Remove Tag Text"
    });

    await userEvent.click(removeButton);
    await waitFor(async () =>
      expect(canvas.queryByText("Tag Text")).toBeNull()
    );
  }
};

export const RemovableOutlined: Story = {
  args: {
    children: "Tag Text",
    removable: true,
    outlined: true
  }
};

export const RemovableSecondary: Story = {
  args: {
    children: "Tag Text",
    removable: true,
    variant: "secondary"
  }
};

export const RemovableRounded: Story = {
  args: {
    children: "Tag Text",
    removable: true,
    circular: true
  }
};

export const RemovablePrevented: Story = {
  args: {
    children: "Tag Text",
    removable: true,
    onBeforeRemove: () => false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: "Remove" }));
    await expect(canvas.getByText("Tag Text")).toBeTruthy();
  }
};

const AddRemoveTagExample = () => {
  const [tags, setTags] = useState(["Design", "Engineering", "Research"]);

  return (
    <View flexDirection="row" gap="md">
      {tags.map(tag => (
        <Tag
          key={tag}
          removable={true}
          removeButtonLabel={`Remove ${tag}`}
          onAfterRemove={() => setTags(prev => prev.filter(t => t !== tag))}>
          <Tag.Text>{tag}</Tag.Text>
        </Tag>
      ))}
    </View>
  );
};

export const RemovableGroup: Story = {
  render: () => <AddRemoveTagExample />
};

export const Secondary: Story = {
  args: {
    children: "Tag Text",
    variant: "secondary"
  }
};

export const SecondaryOutlined: Story = {
  args: {
    children: "Tag Text",
    variant: "secondary",
    outlined: true
  },
  play: async ({ canvasElement }) =>
    expectOutlinedTextToMatchBorder(canvasElement)
};

export const Brand: Story = {
  args: {
    children: "Tag Text",
    theme: "brand"
  }
};

export const BrandRounded: Story = {
  args: {
    children: "Tag Text",
    theme: "brand",
    circular: true
  }
};

export const BrandOutlined: Story = {
  args: {
    children: "Tag Text",
    theme: "brand",
    outlined: true
  }
};

export const BrandSecondary: Story = {
  args: {
    children: "Tag Text",
    theme: "brand",
    variant: "secondary"
  }
};

export const BrandSecondaryRounded: Story = {
  args: {
    children: "Tag Text",
    theme: "brand",
    variant: "secondary",
    circular: true
  }
};

export const BrandSecondaryOutlined: Story = {
  args: {
    children: "Tag Text",
    theme: "brand",
    variant: "secondary",
    outlined: true
  }
};

export const Discovery: Story = {
  args: {
    children: "Tag Text",
    theme: "discovery"
  }
};

export const DiscoveryRounded: Story = {
  args: {
    children: "Tag Text",
    theme: "discovery",
    circular: true
  }
};

export const DiscoveryOutlined: Story = {
  args: {
    children: "Tag Text",
    theme: "discovery",
    outlined: true
  }
};

export const DiscoverySecondary: Story = {
  args: {
    children: "Tag Text",
    theme: "discovery",
    variant: "secondary"
  }
};

export const DiscoverySecondaryRounded: Story = {
  args: {
    children: "Tag Text",
    theme: "discovery",
    variant: "secondary",
    circular: true
  }
};

export const DiscoverySecondaryOutlined: Story = {
  args: {
    children: "Tag Text",
    theme: "discovery",
    variant: "secondary",
    outlined: true
  }
};

export const Error: Story = {
  args: {
    children: "Tag Text",
    theme: "danger"
  }
};

export const ErrorRounded: Story = {
  args: {
    children: "Tag Text",
    theme: "danger",
    circular: true
  }
};

export const ErrorOutlined: Story = {
  args: {
    children: "Tag Text",
    theme: "danger",
    outlined: true
  }
};

export const ErrorSecondary: Story = {
  args: {
    children: "Tag Text",
    theme: "danger",
    variant: "secondary"
  }
};

export const ErrorSecondaryRounded: Story = {
  args: {
    children: "Tag Text",
    theme: "danger",
    variant: "secondary",
    circular: true
  }
};

export const ErrorSecondaryOutlined: Story = {
  args: {
    children: "Tag Text",
    theme: "danger",
    variant: "secondary",
    outlined: true
  }
};

export const Warning: Story = {
  args: {
    children: "Tag Text",
    theme: "warning"
  }
};

export const WarningRounded: Story = {
  args: {
    children: "Tag Text",
    theme: "warning",
    circular: true
  }
};

export const WarningOutlined: Story = {
  args: {
    children: "Tag Text",
    theme: "warning",
    outlined: true
  }
};

export const WarningSecondary: Story = {
  args: {
    children: "Tag Text",
    theme: "warning",
    variant: "secondary"
  }
};

export const WarningSecondaryRounded: Story = {
  args: {
    children: "Tag Text",
    theme: "warning",
    variant: "secondary",
    circular: true
  }
};

export const WarningSecondaryOutlined: Story = {
  args: {
    children: "Tag Text",
    theme: "warning",
    variant: "secondary",
    outlined: true
  }
};

export const Info: Story = {
  args: {
    children: "Tag Text",
    theme: "info"
  }
};

export const InfoRounded: Story = {
  args: {
    children: "Tag Text",
    theme: "info",
    circular: true
  }
};

export const InfoOutlined: Story = {
  args: {
    children: "Tag Text",
    theme: "info",
    outlined: true
  }
};

export const InfoSecondary: Story = {
  args: {
    children: "Tag Text",
    theme: "info",
    variant: "secondary"
  }
};

export const InfoSecondaryRounded: Story = {
  args: {
    children: "Tag Text",
    theme: "info",
    variant: "secondary",
    circular: true
  }
};

export const InfoSecondaryOutlined: Story = {
  args: {
    children: "Tag Text",
    theme: "info",
    variant: "secondary",
    outlined: true
  }
};

export const Success: Story = {
  args: {
    children: "Tag Text",
    theme: "success"
  }
};

export const SuccessRounded: Story = {
  args: {
    children: "Tag Text",
    theme: "success",
    circular: true
  }
};

export const SuccessOutlined: Story = {
  args: {
    children: "Tag Text",
    theme: "success",
    outlined: true
  }
};

export const SuccessSecondary: Story = {
  args: {
    children: "Tag Text",
    theme: "success",
    variant: "secondary"
  }
};

export const SuccessSecondaryRounded: Story = {
  args: {
    children: "Tag Text",
    theme: "success",
    variant: "secondary",
    circular: true
  }
};

export const SuccessSecondaryOutlined: Story = {
  args: {
    children: "Tag Text",
    theme: "success",
    variant: "secondary",
    outlined: true
  }
};

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

import {
  TextAlignCenter,
  TextAlignJustify,
  TextAlignLeft,
  TextAlignRight
} from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text, View } from "@tamagui/core";
import { useState } from "react";
import { expect, userEvent, within } from "storybook/test";
import type { ToggleGroupProps } from "./ToggleGroup";
import { ToggleGroup } from "./ToggleGroup";

const meta: Meta<typeof ToggleGroup> = {
  title: "Base/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  args: {
    size: "md",
    fluid: false,
    invalid: false,
    disabled: false,
    borderless: false,
    rounded: false,
    allowEmpty: true
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    }
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
      <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
      <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
    </ToggleGroup>
  )
};

export default meta;
type Story = StoryObj<typeof meta>;

const iconColor = (pressed: boolean) => (pressed ? "inkEmphasis" : "inkSubtle");

export const Base: Story = {
  args: {
    defaultValue: "left"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const left = canvas.getByRole("button", { name: "Left" });
    const center = canvas.getByRole("button", { name: "Center" });

    await expect(left).toHaveAttribute("aria-pressed", "true");
    await userEvent.click(center);
    await expect(center).toHaveAttribute("aria-pressed", "true");
    await expect(left).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(center);
    await expect(center).toHaveAttribute("aria-pressed", "false");
  }
};

export const Icons: Story = {
  args: {
    defaultValue: "left",
    allowEmpty: false
  },
  render: args => (
    <ToggleGroup {...args}>
      {(
        [
          ["left", "Align left", TextAlignLeft],
          ["center", "Align center", TextAlignCenter],
          ["right", "Align right", TextAlignRight],
          ["justify", "Justify", TextAlignJustify]
        ] as const
      ).map(([value, label, Icon]) => (
        <ToggleGroup.Item key={value} value={value} aria-label={label}>
          {(pressed: boolean) => <Icon size={18} color={iconColor(pressed)} />}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup>
  ),
  play: async ({ canvasElement }) => {
    const left = within(canvasElement).getByRole("button", {
      name: "Align left"
    });

    await userEvent.click(left);
    await expect(left).toHaveAttribute("aria-pressed", "true");
  }
};

export const Multiple: Story = {
  args: {
    multiple: true
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
      <ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
      <ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>
    </ToggleGroup>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const bold = canvas.getByRole("button", { name: "Bold" });
    const italic = canvas.getByRole("button", { name: "Italic" });

    await userEvent.click(bold);
    await userEvent.click(italic);
    await expect(bold).toHaveAttribute("aria-pressed", "true");
    await expect(italic).toHaveAttribute("aria-pressed", "true");
  }
};

const ControlledToggleGroup = (args: ToggleGroupProps) => {
  const [value, setValue] = useState<string | null>("monthly");

  return (
    <View flexDirection="row" alignItems="center" gap="md">
      <ToggleGroup
        {...args}
        value={value}
        onValueChange={next => setValue(next as string | null)}>
        <ToggleGroup.Item value="monthly">Monthly</ToggleGroup.Item>
        <ToggleGroup.Item value="yearly">Yearly</ToggleGroup.Item>
      </ToggleGroup>
      <Text color="color">{value ?? "Nothing selected"}</Text>
    </View>
  );
};

export const Controlled: Story = {
  render: args => <ControlledToggleGroup {...args} />
};

export const Sizes: Story = {
  render: args => (
    <View alignItems="flex-start" gap="md">
      {(["sm", "md", "lg"] as const).map(size => (
        <ToggleGroup key={size} {...args} size={size} defaultValue="left">
          <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
          <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
          <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
        </ToggleGroup>
      ))}
    </View>
  )
};

export const Fluid: Story = {
  args: {
    fluid: true,
    defaultValue: "left"
  }
};

export const Borderless: Story = {
  args: {
    borderless: true,
    defaultValue: "left"
  }
};

export const Rounded: Story = {
  args: {
    rounded: true,
    defaultValue: "left"
  }
};

const InvalidToggleGroup = (args: ToggleGroupProps) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ToggleGroup
      {...args}
      invalid={value === null}
      value={value}
      onValueChange={next => setValue(next as string | null)}>
      <ToggleGroup.Item value="monthly">Monthly</ToggleGroup.Item>
      <ToggleGroup.Item value="yearly">Yearly</ToggleGroup.Item>
    </ToggleGroup>
  );
};

export const Invalid: Story = {
  render: args => <InvalidToggleGroup {...args} />
};

export const Disabled: Story = {
  render: args => (
    <View flexDirection="row" alignItems="center" gap="md">
      <ToggleGroup {...args} disabled defaultValue="on">
        <ToggleGroup.Item value="off">Off</ToggleGroup.Item>
        <ToggleGroup.Item value="on">On</ToggleGroup.Item>
      </ToggleGroup>
      <ToggleGroup {...args}>
        <ToggleGroup.Item value="option1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="option2" disabled>
          Option 2
        </ToggleGroup.Item>
      </ToggleGroup>
    </View>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByRole("button", { name: "On" })).toBeDisabled();
    await expect(
      canvas.getByRole("button", { name: "Option 2" })
    ).toBeDisabled();
    await expect(
      canvas.getByRole("button", { name: "Option 1" })
    ).not.toBeDisabled();
  }
};

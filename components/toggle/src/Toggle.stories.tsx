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
  Bookmark,
  LockSimple,
  LockSimpleOpen,
  SpeakerHigh,
  SpeakerSlash
} from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text, View } from "@tamagui/core";
import { useState } from "react";
import { expect, userEvent, within } from "storybook/test";
import type { ToggleProps } from "./Toggle";
import { Toggle, ToggleText } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Base/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  args: {
    children: "Toggle",
    defaultPressed: false,
    size: "md",
    fluid: false,
    invalid: false,
    disabled: false,
    borderless: false,
    rounded: false,
    circular: false
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const iconColor = (pressed: boolean) => (pressed ? "inkEmphasis" : "inkSubtle");

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const toggle = within(canvasElement).getByRole("button", {
      name: "Toggle"
    });

    await expect(toggle).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-pressed", "true");
    await userEvent.keyboard(" ");
    await expect(toggle).toHaveAttribute("aria-pressed", "false");
  }
};

export const Icon: Story = {
  args: {
    "aria-label": "Bookmark",
    children: pressed => (
      <Bookmark
        size={18}
        weight={pressed ? "fill" : "regular"}
        color={iconColor(pressed)}
      />
    )
  }
};

export const RenderProps: Story = {
  render: args => (
    <View flexDirection="row" gap="md">
      <Toggle {...args} minWidth={80}>
        {pressed => (pressed ? "On" : "Off")}
      </Toggle>
      <Toggle {...args} minWidth={128}>
        {pressed => (
          <>
            {pressed ? (
              <LockSimple size={16} color={iconColor(pressed)} />
            ) : (
              <LockSimpleOpen size={16} color={iconColor(pressed)} />
            )}
            <ToggleText active={pressed}>
              {pressed ? "Locked" : "Unlocked"}
            </ToggleText>
          </>
        )}
      </Toggle>
      <Toggle {...args} minWidth={112}>
        {pressed => (
          <>
            {pressed ? (
              <SpeakerSlash size={16} color={iconColor(pressed)} />
            ) : (
              <SpeakerHigh size={16} color={iconColor(pressed)} />
            )}
            <ToggleText active={pressed}>
              {pressed ? "Unmute" : "Mute"}
            </ToggleText>
          </>
        )}
      </Toggle>
    </View>
  )
};

const ControlledToggle = (args: ToggleProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <View flexDirection="row" alignItems="center" gap="md">
      <Toggle {...args} pressed={pressed} onPressedChange={setPressed} />
      <Text color="color">{pressed ? "Pressed" : "Not pressed"}</Text>
    </View>
  );
};

export const Controlled: Story = {
  render: args => <ControlledToggle {...args} />
};

export const Sizes: Story = {
  render: args => (
    <View flexDirection="row" alignItems="center" gap="md">
      <Toggle {...args} size="sm">
        Small
      </Toggle>
      <Toggle {...args} size="md">
        Normal
      </Toggle>
      <Toggle {...args} size="lg">
        Large
      </Toggle>
    </View>
  )
};

export const Fluid: Story = {
  args: {
    fluid: true
  }
};

export const Borderless: Story = {
  args: {
    borderless: true
  }
};

export const Rounded: Story = {
  args: {
    rounded: true
  }
};

export const Circular: Story = {
  args: {
    ...Icon.args,
    circular: true
  }
};

const InvalidToggle = (args: ToggleProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Toggle
      {...args}
      invalid={!pressed}
      pressed={pressed}
      onPressedChange={setPressed}
    />
  );
};

export const Invalid: Story = {
  render: args => <InvalidToggle {...args} />
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true
  },
  play: async ({ canvasElement }) => {
    const toggle = within(canvasElement).getByRole("button", {
      name: "Disabled"
    });

    await expect(toggle).toBeDisabled();
    await expect(toggle).toHaveAttribute("aria-pressed", "false");
  }
};

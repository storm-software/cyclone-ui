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

import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { Kbd, KbdGroup } from "./Kbd";

const meta: Meta<typeof Kbd> = {
  title: "Typography/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  args: {
    size: "md"
  },
  render: (args: any) => (
    <View flexDirection="column" alignItems="center" gap="4xl">
      <KbdGroup>
        <Kbd {...args}>⌘</Kbd>
        <Kbd {...args}>⇧</Kbd>
        <Kbd {...args}>⌥</Kbd>
        <Kbd {...args}>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd {...args}>Ctrl</Kbd>+<Kbd {...args}>B</Kbd>
      </KbdGroup>
    </View>
  )
} satisfies Meta<typeof Kbd>;

export default meta;

type Story = StoryObj<typeof Kbd>;

export const Base: Story = {};

export const Small: Story = {
  args: {
    size: "sm"
  }
};

export const Large: Story = {
  args: {
    size: "lg"
  }
};

export const Group: Story = {
  render: (args: any) => (
    <BodyText color="subtle">
      Use{" "}
      <KbdGroup>
        <Kbd {...args}>Ctrl + B</Kbd>
        <Kbd {...args}>Ctrl + K</Kbd>
      </KbdGroup>{" "}
      to open the command palette
    </BodyText>
  )
};

export const InButton: Story = {
  render: (args: any) => (
    <Button variant="outlined" size="sm" flexGrow={0}>
      <Button.Text>Accept</Button.Text>
      <Kbd {...args}>⏎</Kbd>
    </Button>
  )
};

export const Icons: Story = {
  render: (args: any) => (
    <KbdGroup>
      {Object.entries({ ArrowUp, ArrowDown, ArrowLeft, ArrowRight }).map(
        ([name, Icon]) => (
          <Kbd key={name} {...args}>
            <Icon size={12} color="currentColor" />
          </Kbd>
        )
      )}
    </KbdGroup>
  )
};

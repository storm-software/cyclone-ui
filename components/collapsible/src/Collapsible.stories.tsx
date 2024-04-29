import type { Meta, StoryObj } from "@storybook/react";

import { Collapsible } from "./Collapsible";
import { Text, View } from "@tamagui/web";

const meta: Meta<typeof Collapsible> = {
  title: "General/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  render: (args: any) => (
    <View>
      <Collapsible.Trigger>+</Collapsible.Trigger>
      <Collapsible.Content>
        <Text>Some collapsed content</Text>
      </Collapsible.Content>
    </View>
  )
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Base: Story = {
  args: {
    children: "Button Text"
  }
};

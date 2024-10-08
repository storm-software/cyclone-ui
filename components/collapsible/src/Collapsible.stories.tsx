import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "@tamagui/web";
import { Collapsible } from "./Collapsible";

const meta: Meta<typeof Collapsible> = {
  title: "General/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  render: (args: any) => (
    <Collapsible>
      <Collapsible.Trigger>+</Collapsible.Trigger>
      <Collapsible.Content>
        <Text>{args.children}</Text>
      </Collapsible.Content>
    </Collapsible>
  )
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Base: Story = {
  args: {
    children: "Some collapsed content"
  }
};

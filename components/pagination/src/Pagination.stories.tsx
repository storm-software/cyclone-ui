import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Buttons/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  render: (args: any) => <Pagination {...args} />
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

export const FirstOfTen: Story = {
  args: {
    current: 1,
    count: 10
  }
};

export const SecondOfTen: Story = {
  args: {
    current: 2,
    count: 10
  }
};

export const ThirdOfTen: Story = {
  args: {
    current: 3,
    count: 10
  }
};

export const ForthOfTen: Story = {
  args: {
    current: 4,
    count: 10
  }
};

export const FifthOfTen: Story = {
  args: {
    current: 5,
    count: 10
  }
};

export const SixthOfTen: Story = {
  args: {
    current: 6,
    count: 10
  }
};

export const SeventhOfTen: Story = {
  args: {
    current: 7,
    count: 10
  }
};

export const EightOfTen: Story = {
  args: {
    current: 8,
    count: 10
  }
};

export const NinthOfTen: Story = {
  args: {
    current: 9,
    count: 10
  }
};

export const LastOfTen: Story = {
  args: {
    current: 10,
    count: 10
  }
};

export const FirstOfFive: Story = {
  args: {
    current: 1,
    count: 5
  }
};

export const SecondOfFive: Story = {
  args: {
    current: 2,
    count: 5
  }
};

export const ThirdOfFive: Story = {
  args: {
    current: 3,
    count: 5
  }
};

export const ForthOfFive: Story = {
  args: {
    current: 4,
    count: 5
  }
};

export const LastOfFive: Story = {
  args: {
    current: 5,
    count: 5
  }
};

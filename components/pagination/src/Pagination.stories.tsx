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
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Triggers/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  render: (args: any) => <Pagination {...args} />
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Base: Story = {
  args: {
    pageIndex: 5,
    pageCount: 10
  }
};

export const FirstOfThree: Story = {
  args: {
    pageIndex: 0,
    pageCount: 3
  }
};

export const SecondOfThree: Story = {
  args: {
    pageIndex: 1,
    pageCount: 3
  }
};

export const LastOfThree: Story = {
  args: {
    pageIndex: 2,
    pageCount: 3
  }
};

export const FirstOfFive: Story = {
  args: {
    pageIndex: 0,
    pageCount: 5
  }
};

export const SecondOfFive: Story = {
  args: {
    pageIndex: 1,
    pageCount: 5
  }
};

export const ThirdOfFive: Story = {
  args: {
    pageIndex: 2,
    pageCount: 5
  }
};

export const ForthOfFive: Story = {
  args: {
    pageIndex: 3,
    pageCount: 5
  }
};

export const LastOfFive: Story = {
  args: {
    pageIndex: 4,
    pageCount: 5
  }
};

export const FirstOfTen: Story = {
  args: {
    pageIndex: 0,
    pageCount: 10
  }
};

export const SecondOfTen: Story = {
  args: {
    pageIndex: 1,
    pageCount: 10
  }
};

export const ThirdOfTen: Story = {
  args: {
    pageIndex: 2,
    pageCount: 10
  }
};

export const ForthOfTen: Story = {
  args: {
    pageIndex: 3,
    pageCount: 10
  }
};

export const FifthOfTen: Story = {
  args: {
    pageIndex: 4,
    pageCount: 10
  }
};

export const SixthOfTen: Story = {
  args: {
    pageIndex: 5,
    pageCount: 10
  }
};

export const SeventhOfTen: Story = {
  args: {
    pageIndex: 6,
    pageCount: 10
  }
};

export const EightOfTen: Story = {
  args: {
    pageIndex: 7,
    pageCount: 10
  }
};

export const NinthOfTen: Story = {
  args: {
    pageIndex: 8,
    pageCount: 10
  }
};

export const LastOfTen: Story = {
  args: {
    pageIndex: 9,
    pageCount: 10
  }
};

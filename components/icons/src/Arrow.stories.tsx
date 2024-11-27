/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { Arrow } from "./Arrow";

const meta: Meta<typeof Arrow> = {
  title: "Icons/Arrow",
  component: Arrow,
  tags: ["autodocs"],
  render: (args: any) => {
    const [isComplete, setIsComplete] = useState(false);
    useEffect(() => {
      setInterval(() => {
        setIsComplete((prev: boolean) => !prev);
      }, 2000);
    }, [setIsComplete]);

    return <Arrow {...args} isComplete={isComplete} />;
  }
} satisfies Meta<typeof Arrow>;

export default meta;

type Story = StoryObj<typeof Arrow>;

export const Base: Story = {
  args: {
    size: "$6"
  }
};

export const Up: Story = {
  args: {
    size: "$6",
    pointing: "up"
  }
};

export const Right: Story = {
  args: {
    size: "$6",
    pointing: "right"
  }
};

export const Down: Story = {
  args: {
    size: "$6",
    pointing: "down"
  }
};

export const Left: Story = {
  args: {
    size: "$6",
    pointing: "left"
  }
};

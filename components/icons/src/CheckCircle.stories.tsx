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
import { CheckCircle } from "./CheckCircle";

const meta: Meta<typeof CheckCircle> = {
  title: "Icons/CheckCircle",
  component: CheckCircle,
  tags: ["autodocs"],
  render: (args: any) => {
    const [isComplete, setIsComplete] = useState(false);
    useEffect(() => {
      setInterval(() => {
        setIsComplete((prev: boolean) => !prev);
      }, 5000);
    }, [setIsComplete]);

    return <CheckCircle {...args} isComplete={isComplete} />;
  }
} satisfies Meta<typeof CheckCircle>;

export default meta;

type Story = StoryObj<typeof CheckCircle>;

export const Base: Story = {
  args: {
    size: "$6"
  }
};

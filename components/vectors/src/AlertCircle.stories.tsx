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
import { AlertCircle } from "./AlertCircle";

const meta: Meta<typeof AlertCircle> = {
  title: "Vectors/AlertCircle",
  component: AlertCircle,
  tags: ["autodocs"],
  render: (args: any) => {
    const [isComplete, setIsComplete] = useState(false);
    useEffect(() => {
      setInterval(() => {
        setIsComplete((prev: boolean) => !prev);
      }, 5000);
    }, [setIsComplete]);

    return <AlertCircle {...args} isComplete={isComplete} />;
  }
} satisfies Meta<typeof AlertCircle>;

export default meta;

type Story = StoryObj<typeof AlertCircle>;

export const Base: Story = {
  args: {
    size: "$6"
  }
};

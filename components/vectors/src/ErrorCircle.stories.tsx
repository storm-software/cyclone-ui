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
import { useEffect, useState } from "react";
import { ErrorCircle } from "./ErrorCircle";

const meta: Meta<typeof ErrorCircle> = {
  title: "Vectors/ErrorCircle",
  component: ErrorCircle,
  tags: ["autodocs"],
  render: (args: any) => {
    const [isComplete, setIsComplete] = useState(false);
    useEffect(() => {
      setInterval(() => {
        setIsComplete((prev: boolean) => !prev);
      }, 5000);
    }, [setIsComplete]);

    return <ErrorCircle {...args} isComplete={isComplete} />;
  }
} satisfies Meta<typeof ErrorCircle>;

export default meta;

type Story = StoryObj<typeof ErrorCircle>;

export const Base: Story = {
  args: {
    size: "$13xl"
  }
};

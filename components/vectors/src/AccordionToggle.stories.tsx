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
import { AccordionToggle } from "./AccordionToggle";

const meta: Meta<typeof AccordionToggle> = {
  title: "Vectors/AccordionToggle",
  component: AccordionToggle,
  tags: ["autodocs"],
  render: (args: any) => {
    const [isExpanded, setIsExpanded] = useState(false);
    useEffect(() => {
      setInterval(() => {
        setIsExpanded((prev: boolean) => !prev);
      }, 2000);
    }, [setIsExpanded]);

    return <AccordionToggle {...args} isExpanded={isExpanded} />;
  }
} satisfies Meta<typeof AccordionToggle>;

export default meta;

type Story = StoryObj<typeof AccordionToggle>;

export const Base: Story = {
  args: {
    size: "$8xl"
  }
};

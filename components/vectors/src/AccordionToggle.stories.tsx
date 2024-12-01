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
    size: "$6"
  }
};

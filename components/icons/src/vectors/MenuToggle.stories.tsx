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
import { MenuToggle } from "./MenuToggle";

const meta: Meta<typeof MenuToggle> = {
  title: "Vectors/MenuToggle",
  component: MenuToggle,
  tags: ["autodocs"],
  render: (args: any) => {
    // cycles closed → closed + hovered → open → open + hovered
    const [step, setStep] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setStep((prev: number) => (prev + 1) % 4);
      }, 1500);

      return () => clearInterval(interval);
    }, []);

    return (
      <MenuToggle {...args} isOpen={step >= 2} isHovered={step % 2 === 1} />
    );
  }
} satisfies Meta<typeof MenuToggle>;

export default meta;

type Story = StoryObj<typeof MenuToggle>;

export const Base: Story = {
  args: {
    size: "13xl"
  }
};

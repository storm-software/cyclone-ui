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
import { Binary } from "./Binary";

const meta: Meta<typeof Binary> = {
  title: "Vectors/Binary",
  component: Binary,
  tags: ["autodocs"],
  render: (args: any) => {
    const [state, setState] = useState("off");
    useEffect(() => {
      setInterval(() => {
        setState((prev: string) => (prev === "off" ? "on" : "off"));
      }, 3000);
    }, [setState]);

    return <Binary {...args} state={state} />;
  }
} satisfies Meta<typeof Binary>;

export default meta;

type Story = StoryObj<typeof Binary>;

export const Base: Story = {
  args: {
    size: "$6"
  }
};

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
import { SearchTrigger } from "./SearchTrigger";

const meta: Meta<typeof SearchTrigger> = {
  title: "Vectors/SearchTrigger",
  component: SearchTrigger,
  tags: ["autodocs"],
  render: (args: any) => {
    // toggles idle ↔ loading
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      const interval = setInterval(() => {
        setIsLoading((prev: boolean) => !prev);
      }, 2000);

      return () => clearInterval(interval);
    }, []);

    return <SearchTrigger {...args} isLoading={isLoading} />;
  }
} satisfies Meta<typeof SearchTrigger>;

export default meta;

type Story = StoryObj<typeof SearchTrigger>;

export const Base: Story = {
  args: {
    size: "13xl"
  }
};

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
import { NumberText } from "./NumberText";

const meta: Meta<typeof NumberText> = {
  title: "Typography/NumberText",
  component: NumberText,
  tags: ["autodocs"],
  render: (args: any) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      setInterval(() => {
        setValue(prev => (prev + Math.floor(Math.random() * 25)) % 100_000_000);
      }, 1000);
    }, [setValue]);

    return <NumberText {...args}>{value}</NumberText>;
  }
} satisfies Meta<typeof NumberText>;

export default meta;

type Story = StoryObj<typeof NumberText>;

export const Base: Story = {
  args: {}
};

export const Primary: Story = {
  args: {
    theme: "brand"
  }
};

export const Secondary: Story = {
  args: {
    theme: "alternate"
  }
};

export const Accent: Story = {
  args: {
    theme: "accent"
  }
};

export const Discovery: Story = {
  args: {
    theme: "discovery"
  }
};

export const Info: Story = {
  args: {
    theme: "info"
  }
};

export const Success: Story = {
  args: {
    theme: "success"
  }
};

export const Warning: Story = {
  args: {
    theme: "warning"
  }
};

export const Danger: Story = {
  args: {
    theme: "danger"
  }
};

export const Positive: Story = {
  args: {
    theme: "positive"
  }
};

export const Negative: Story = {
  args: {
    theme: "negative"
  }
};

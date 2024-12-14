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

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const Alternate: Story = {
  args: {
    theme: "alternate"
  }
};

export const Accent: Story = {
  args: {
    theme: "accent"
  }
};

export const Help: Story = {
  args: {
    theme: "help"
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

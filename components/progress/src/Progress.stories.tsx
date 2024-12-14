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
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Base/Progress",
  component: Progress,
  tags: ["autodocs"],
  render: (args: any) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      setInterval(() => {
        setValue(prev => (prev + Math.floor(Math.random() * 5)) % 100);
      }, 1000);
    }, [setValue]);

    return <Progress value={value} {...args} />;
  }
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof Progress>;

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

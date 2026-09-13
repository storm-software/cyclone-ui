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
import { CircularProgress } from "./CircularProgress";

const meta = {
  title: "Base/CircularProgress",
  component: CircularProgress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  render: (args: any) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setValue(prev => (prev + Math.floor(Math.random() * 5)) % 100);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return <CircularProgress value={value} {...args} />;
  }
} satisfies Meta<typeof CircularProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {}
};

export const Small: Story = {
  args: {
    size: "sm"
  }
};

export const Medium: Story = {
  args: {
    size: "md"
  }
};

export const Large: Story = {
  args: {
    size: "lg"
  }
};

export const ExtraLarge: Story = {
  args: {
    size: "xl"
  }
};

export const DataColor: Story = {
  args: {
    color: "$dataPinkEmphasis"
  }
};

export const Brand: Story = {
  args: {
    theme: "brand"
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

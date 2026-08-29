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

import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "General/Badge",
  component: Badge,
  tags: ["autodocs"],
  render: (args: any) => (
    <Badge {...args}>
      <Badge.Text>{args.children}</Badge.Text>
    </Badge>
  )
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Base: Story = {
  args: {
    children: "Badge Text"
  }
};

export const Rounded: Story = {
  args: {
    children: "Badge Text",
    circular: true
  }
};

export const Outlined: Story = {
  args: {
    children: "Badge Text",
    outlined: true
  }
};

export const Primary: Story = {
  args: {
    children: "Badge Text",
    theme: "brand"
  }
};

export const PrimaryRounded: Story = {
  args: {
    children: "Badge Text",
    theme: "brand",
    circular: true
  }
};

export const PrimaryOutlined: Story = {
  args: {
    children: "Badge Text",
    theme: "brand",
    outlined: true
  }
};

export const Secondary: Story = {
  args: {
    children: "Badge Text",
    theme: "alternate"
  }
};

export const SecondaryRounded: Story = {
  args: {
    children: "Badge Text",
    theme: "alternate",
    circular: true
  }
};

export const SecondaryOutlined: Story = {
  args: {
    children: "Badge Text",
    theme: "alternate",
    outlined: true
  }
};

export const Discovery: Story = {
  args: {
    children: "Badge Text",
    theme: "discovery"
  }
};

export const DiscoveryRounded: Story = {
  args: {
    children: "Badge Text",
    theme: "discovery",
    circular: true
  }
};

export const DiscoveryOutlined: Story = {
  args: {
    children: "Badge Text",
    theme: "discovery",
    outlined: true
  }
};

export const Error: Story = {
  args: {
    children: "Badge Text",
    theme: "danger"
  }
};

export const ErrorRounded: Story = {
  args: {
    children: "Badge Text",
    theme: "danger",
    circular: true
  }
};

export const ErrorOutlined: Story = {
  args: {
    children: "Badge Text",
    theme: "danger",
    outlined: true
  }
};

export const Warning: Story = {
  args: {
    children: "Badge Text",
    theme: "warning"
  }
};

export const WarningRounded: Story = {
  args: {
    children: "Badge Text",
    theme: "warning",
    circular: true
  }
};

export const WarningOutlined: Story = {
  args: {
    children: "Badge Text",
    theme: "warning",
    outlined: true
  }
};

export const Info: Story = {
  args: {
    children: "Badge Text",
    theme: "info"
  }
};

export const InfoRounded: Story = {
  args: {
    children: "Badge Text",
    theme: "info",
    circular: true
  }
};

export const InfoOutlined: Story = {
  args: {
    children: "Badge Text",
    theme: "info",
    outlined: true
  }
};

export const Success: Story = {
  args: {
    children: "Badge Text",
    theme: "success"
  }
};

export const SuccessRounded: Story = {
  args: {
    children: "Badge Text",
    theme: "success",
    circular: true
  }
};

export const SuccessOutlined: Story = {
  args: {
    children: "Badge Text",
    theme: "success",
    outlined: true
  }
};

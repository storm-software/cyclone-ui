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
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Triggers/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  render: (args: any) => (
    <Breadcrumb {...args}>
      <Breadcrumb.Item href="#">Page One</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Page Two</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Page Three</Breadcrumb.Item>
    </Breadcrumb>
  )
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Base: Story = {
  args: {
    currentName: "Current Page"
  }
};

export const Slash: Story = {
  args: {
    currentName: "Current Page",
    variant: "slash"
  }
};

export const Chevron: Story = {
  args: {
    currentName: "Current Page",
    variant: "chevron"
  }
};

export const DoubleChevron: Story = {
  args: {
    currentName: "Current Page",
    variant: "double"
  }
};

export const BaseTheme: Story = {
  args: {
    currentName: "Current Page",
    theme: "base"
  }
};

export const BrandTheme: Story = {
  args: {
    currentName: "Current Page",
    theme: "brand"
  }
};

export const AlternateTheme: Story = {
  args: { currentName: "Current Page", theme: "alternate" }
};

export const HelpTheme: Story = {
  args: { currentName: "Current Page", theme: "help" }
};

export const ErrorTheme: Story = {
  args: { currentName: "Current Page", theme: "danger" }
};

export const WarningTheme: Story = {
  args: { currentName: "Current Page", theme: "warning" }
};

export const InfoTheme: Story = {
  args: { currentName: "Current Page", theme: "info" }
};

export const SuccessTheme: Story = {
  args: { currentName: "Current Page", theme: "success" }
};

export const PositiveTheme: Story = {
  args: {
    currentName: "Current Page",
    theme: "positive"
  }
};

export const NegativeTheme: Story = {
  args: { currentName: "Current Page", theme: "negative" }
};

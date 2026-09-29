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
import type { ComponentProps } from "react";
import { Form } from "./Form";

/** Story-only args spread onto `Form` by the custom `render`. */
type FormStoryArgs = ComponentProps<typeof Form> & {
  size?: "small" | "large";
};

const meta: Meta<FormStoryArgs> = {
  title: "Form/Form",
  component: Form,
  tags: ["autodocs"],
  render: (args: any) => <Form {...args} />
} satisfies Meta<FormStoryArgs>;

export default meta;

type Story = StoryObj<FormStoryArgs>;

export const Base: Story = {
  args: {}
};

export const Small: Story = {
  args: {
    size: "small"
  }
};

export const Large: Story = {
  args: {
    size: "large"
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

export const Error: Story = {
  args: {
    theme: "danger"
  }
};

export const Warning: Story = {
  args: {
    theme: "warning"
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

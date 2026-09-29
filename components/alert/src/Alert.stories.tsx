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

import { Question } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps, ReactNode } from "react";
import { Alert } from "./Alert";

// `icon` is a story-only arg consumed by the custom `render` below.
type AlertStoryArgs = ComponentProps<typeof Alert> & { icon?: ReactNode };

const meta: Meta<AlertStoryArgs> = {
  title: "Containers/Alert",
  component: Alert,
  tags: ["autodocs"],
  render: ({ children, icon, theme, type, ...rest }: any) => (
    <Alert {...rest} theme={theme} type={type}>
      <Alert.Icon>{icon}</Alert.Icon>
      <Alert.Content>
        <Alert.Content.Heading>Alert Heading</Alert.Content.Heading>
        <Alert.Content.Body>{children}</Alert.Content.Body>
      </Alert.Content>

      <Alert.Close />
    </Alert>
  )
} satisfies Meta<AlertStoryArgs>;

export default meta;

type Story = StoryObj<AlertStoryArgs>;

const bodyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.";

export const Base: Story = {
  args: {
    children: bodyText
  }
};

export const CustomIcon: Story = {
  args: {
    children: bodyText,
    icon: <Question />
  }
};

export const Brand: Story = {
  args: {
    children: bodyText,
    type: "brand"
  }
};

export const Danger: Story = {
  args: {
    children: bodyText,
    type: "danger"
  }
};

export const Warning: Story = {
  args: {
    children: bodyText,
    type: "warning"
  }
};

export const Info: Story = {
  args: {
    children: bodyText,
    type: "info"
  }
};

export const Success: Story = {
  args: {
    children: bodyText,
    type: "success"
  }
};

export const Discovery: Story = {
  args: {
    children: bodyText,
    type: "discovery"
  }
};

export const Positive: Story = {
  args: {
    children: bodyText,
    type: "positive"
  }
};

export const Negative: Story = {
  args: {
    children: bodyText,
    type: "negative"
  }
};

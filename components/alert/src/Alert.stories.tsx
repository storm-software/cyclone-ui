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

import { QuestionCircle } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps, ReactNode } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
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

export const Brand: Story = {
  args: {
    children: bodyText,
    type: "brand"
  }
};

export const CustomIcon: Story = {
  args: {
    children: bodyText,
    icon: <QuestionCircle />
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

export const WithDetails: Story = {
  args: {
    children: bodyText,
    type: "danger"
  },
  render: ({ children, icon, theme, type, ...rest }: any) => (
    <Alert {...rest} theme={theme} type={type}>
      <Alert.Icon>{icon}</Alert.Icon>
      <Alert.Content>
        <Alert.Content.Heading>Alert Heading</Alert.Content.Heading>
        <Alert.Content.Body>{children}</Alert.Content.Body>
        <Alert.Content.Details>
          Request ID 7f3a-21c9. The server returned 503 Service Unavailable
          after 3 retries.
        </Alert.Content.Details>
      </Alert.Content>

      <Alert.Close />
    </Alert>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole("button", { name: "Show details" });

    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(canvas.queryByText(/Request ID 7f3a-21c9/)).toBeNull();

    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(toggle).toHaveAccessibleName("Hide details");
    await waitFor(async () =>
      expect(canvas.getByText(/Request ID 7f3a-21c9/)).toBeVisible()
    );

    await userEvent.click(toggle);
    await waitFor(async () =>
      expect(canvas.queryByText(/Request ID 7f3a-21c9/)).toBeNull()
    );
  }
};

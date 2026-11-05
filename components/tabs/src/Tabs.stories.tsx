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

import { BodyText } from "@cyclone-ui/body-text";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Containers/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  render: ({ theme, ...rest }: any) => {
    // The panel text keeps its own color; on a filled `tabbed` panel it uses
    // the matching `on-*` color.
    const color =
      rest.tabStyle === "tabbed" && rest.variant === "primary"
        ? "on-primary"
        : rest.tabStyle === "tabbed" && rest.variant === "secondary"
          ? // `on-secondary` is faint on the base theme's light `secondary`.
            theme && theme !== "base"
            ? "on-secondary"
            : "primary"
          : undefined;

    return (
      <Tabs {...rest} theme={theme}>
        <Tabs.Header>
          <Tabs.Header.Item key="tab1" value="tab1">
            Tab One
          </Tabs.Header.Item>
          <Tabs.Header.Item key="tab2" value="tab2">
            Tab Two
          </Tabs.Header.Item>
          <Tabs.Header.Item key="tab3" value="tab3">
            Tab Three
          </Tabs.Header.Item>
        </Tabs.Header>

        <Tabs.Content>
          <Tabs.Content.Item key="tab1" value="tab1" padding="2xl">
            <BodyText {...(color && { color })}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </BodyText>
          </Tabs.Content.Item>
          <Tabs.Content.Item key="tab2" value="tab2" padding="2xl">
            <BodyText {...(color && { color })}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </BodyText>
          </Tabs.Content.Item>
          <Tabs.Content.Item key="tab3" value="tab3" padding="2xl">
            <BodyText {...(color && { color })}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </BodyText>
          </Tabs.Content.Item>
        </Tabs.Content>
      </Tabs>
    );
  }
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Base: Story = {
  args: {}
};

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const Floating: Story = {
  args: {
    tabStyle: "floating"
  },
  play: async ({ canvasElement }) => {
    const tabList = within(canvasElement).getByRole("tablist");
    const frame = tabList.parentElement;
    const indicator = frame?.firstElementChild;

    await expect(frame).not.toBeNull();
    await expect(indicator).not.toBeNull();
    await expect(
      Number.parseFloat(getComputedStyle(frame as Element).borderTopLeftRadius)
    ).toBeGreaterThan(
      Number.parseFloat(
        getComputedStyle(indicator as Element).borderTopLeftRadius
      )
    );
  }
};

export const FloatingBorderless: Story = {
  args: {
    tabStyle: "floating",
    bordered: false
  }
};

export const Underline: Story = {
  args: {
    tabStyle: "underline"
  }
};

export const UnderlineBorderless: Story = {
  args: {
    tabStyle: "underline",
    bordered: false
  }
};

export const Tabbed: Story = {
  args: {
    tabStyle: "tabbed"
  }
};

export const TabbedBorderless: Story = {
  args: {
    tabStyle: "tabbed",
    bordered: false
  }
};

export const TabbedVertical: Story = {
  args: {
    orientation: "vertical",
    tabStyle: "tabbed"
  }
};

export const Fluid: Story = {
  args: {
    tabStyle: "fluid"
  },
  play: async ({ canvasElement }) => {
    const tabList = within(canvasElement).getByRole("tablist");

    await expect(tabList.parentElement?.querySelector("canvas")).not.toBeNull();
    await expect(tabList.querySelectorAll("[data-fluid-overlay]")).toHaveLength(
      3
    );
  }
};

export const FluidBrand: Story = {
  args: {
    tabStyle: "fluid",
    theme: "brand"
  }
};

export const FluidVertical: Story = {
  args: {
    orientation: "vertical",
    tabStyle: "fluid"
  }
};

export const Horizontal: Story = {
  args: {
    orientation: "horizontal"
  }
};

export const Vertical: Story = {
  args: {
    orientation: "vertical"
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

export const Primary: Story = {
  args: {
    variant: "primary"
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary"
  }
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary"
  }
};

export const Outlined: Story = {
  args: {
    variant: "outlined"
  }
};

export const UnderlinePrimary: Story = {
  args: {
    tabStyle: "underline",
    variant: "primary"
  }
};

export const UnderlineSecondary: Story = {
  args: {
    tabStyle: "underline",
    variant: "secondary"
  }
};

export const UnderlineTertiary: Story = {
  args: {
    tabStyle: "underline",
    variant: "tertiary"
  }
};

export const UnderlineOutlined: Story = {
  args: {
    tabStyle: "underline",
    variant: "outlined"
  }
};

export const TabbedPrimary: Story = {
  args: {
    tabStyle: "tabbed",
    variant: "primary"
  }
};

export const TabbedSecondary: Story = {
  args: {
    tabStyle: "tabbed",
    variant: "secondary"
  }
};

export const TabbedTertiary: Story = {
  args: {
    tabStyle: "tabbed",
    variant: "tertiary"
  }
};

export const TabbedOutlined: Story = {
  args: {
    tabStyle: "tabbed",
    variant: "outlined"
  }
};

export const FluidPrimary: Story = {
  args: {
    tabStyle: "fluid",
    variant: "primary"
  }
};

export const FluidSecondary: Story = {
  args: {
    tabStyle: "fluid",
    variant: "secondary"
  }
};

export const FluidTertiary: Story = {
  args: {
    tabStyle: "fluid",
    variant: "tertiary"
  }
};

export const FluidOutlined: Story = {
  args: {
    tabStyle: "fluid",
    variant: "outlined"
  }
};

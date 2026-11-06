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
            <BodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </BodyText>
          </Tabs.Content.Item>
          <Tabs.Content.Item key="tab2" value="tab2" padding="2xl">
            <BodyText>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </BodyText>
          </Tabs.Content.Item>
          <Tabs.Content.Item key="tab3" value="tab3" padding="2xl">
            <BodyText>
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

export const FluidFloating: Story = {
  args: {
    tabStyle: "fluid",
    variant: "floating"
  }
};

export const FloatingSurface: Story = {
  args: {
    variant: "floating"
  }
};

export const Flat: Story = {
  args: {
    shadowStyle: "flat"
  }
};

export const Accented: Story = {
  args: {
    accented: true
  }
};

export const Glass: Story = {
  args: {
    variant: "primary",
    glass: true
  }
};

export const Noise: Story = {
  args: {
    variant: "primary",
    noise: true
  }
};

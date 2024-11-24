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

import { BodyText } from "@cyclone-ui/body-text";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Containers/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  render: ({ theme, ...rest }: any) => (
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
        <Tabs.Content.Item key="tab1" value="tab1">
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </BodyText>
        </Tabs.Content.Item>
        <Tabs.Content.Item key="tab2" value="tab2">
          <BodyText>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </BodyText>
        </Tabs.Content.Item>
        <Tabs.Content.Item key="tab3" value="tab3">
          <BodyText>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </BodyText>
        </Tabs.Content.Item>
      </Tabs.Content>
    </Tabs>
  )
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Base: Story = {
  args: {}
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

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const Help: Story = {
  args: {
    theme: "help"
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

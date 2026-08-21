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
import { Button } from "@cyclone-ui/button";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Containers/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  render: (props: any) => {
    return (
      <Tooltip {...props}>
        <Tooltip.Trigger asChild={true}>
          <Button>
            <Button.Text>Open Tooltip</Button.Text>
          </Button>
        </Tooltip.Trigger>

        <Tooltip.Content>
          <BodyText>Lorem ipsum dolor</BodyText>
        </Tooltip.Content>
      </Tooltip>
    );
  }
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof Tooltip>;

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

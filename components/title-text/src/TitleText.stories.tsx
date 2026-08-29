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
import { TitleText } from "./TitleText";

const meta: Meta<typeof TitleText> = {
  title: "Typography/TitleText",
  component: TitleText,
  tags: ["autodocs"],
  render: (args: any) => (
    <TitleText {...args}>
      Lorem ipsum dolor sit amet consectetur adipiscing elit
    </TitleText>
  )
} satisfies Meta<typeof TitleText>;

export default meta;

type Story = StoryObj<typeof TitleText>;

export const Base: Story = {
  args: {}
};

export const Title1: Story = {
  args: {
    level: 1
  }
};

export const Title2: Story = {
  args: {
    level: 2
  }
};

export const Title3: Story = {
  args: {
    level: 3
  }
};

export const Title4: Story = {
  args: {
    level: 4
  }
};

export const Title5: Story = {
  args: {
    level: 5
  }
};

export const Title6: Story = {
  args: {
    level: 6
  }
};

export const Primary: Story = {
  args: {
    theme: "brand"
  }
};

export const Secondary: Story = {
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

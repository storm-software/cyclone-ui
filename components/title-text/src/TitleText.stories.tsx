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

import type { Meta, StoryObj } from "@storybook/react";
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

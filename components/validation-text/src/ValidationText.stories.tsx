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

import { MessageType } from "@storm-stack/types/utility-types/messages";
import type { Meta, StoryObj } from "@storybook/react";
import { ValidationText } from "./ValidationText";

const meta: Meta<typeof ValidationText> = {
  title: "Typography/ValidationText",
  component: ValidationText,
  tags: ["autodocs"],
  render: (args: any) => (
    <ValidationText
      {...args}
      messages={[
        { type: MessageType.ERROR, message: "This is an example message" },
        { type: MessageType.ERROR, message: "This is another example message" },
        {
          type: MessageType.ERROR,
          message: "Finally, one last example message"
        }
      ]}
    />
  )
} satisfies Meta<typeof ValidationText>;

export default meta;

type Story = StoryObj<typeof ValidationText>;

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

export const Help: Story = {
  args: {
    theme: "help"
  }
};

export const Error: Story = {
  args: {
    theme: "error"
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

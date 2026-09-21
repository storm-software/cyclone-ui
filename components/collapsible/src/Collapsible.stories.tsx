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
import { Collapsible } from "./Collapsible";

const meta = {
  title: "Containers/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  args: {
    variant: "default"
  },
  render: (args: any) => (
    <Collapsible {...args}>
      <Collapsible.Header>
        <Collapsible.Header.Heading>
          Collapsible Heading
        </Collapsible.Header.Heading>
      </Collapsible.Header>

      <Collapsible.Content>
        <BodyText>
          Cold showers can help reduce inflammation, relieve pain, improve
          circulation, lower stress levels, and reduce muscle soreness and
          fatigue.
        </BodyText>
      </Collapsible.Content>
    </Collapsible>
  )
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = {
  args: {
    defaultValue: "collapsible"
  }
};

export const BackgroundColor: Story = {
  args: {
    backgroundColor: "$surfaceCanvas"
  }
};

export const Bordered: Story = {
  args: {
    variant: "bordered"
  }
};

export const Borderless: Story = {
  args: {
    bordered: false
  }
};

export const Ghost: Story = {
  args: {
    variant: "ghost"
  }
};

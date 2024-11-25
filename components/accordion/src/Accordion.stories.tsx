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
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Containers/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  render: (args: any) => (
    <Accordion {...args}>
      <Accordion.Item value="item1">
        <Accordion.Item.Header>
          <Accordion.Item.Header.Heading>
            Accordion Heading 1
          </Accordion.Item.Header.Heading>
        </Accordion.Item.Header>

        <Accordion.Item.Content>
          <BodyText>
            Cold showers can help reduce inflammation, relieve pain, improve
            circulation, lower stress levels, and reduce muscle soreness and
            fatigue.
          </BodyText>
        </Accordion.Item.Content>
      </Accordion.Item>

      <Accordion.Item value="item2">
        <Accordion.Item.Header>
          <Accordion.Item.Header.Heading>
            Accordion Heading 2
          </Accordion.Item.Header.Heading>
        </Accordion.Item.Header>

        <Accordion.Item.Content>
          <BodyText>
            Cold showers can help reduce inflammation, relieve pain, improve
            circulation, lower stress levels, and reduce muscle soreness and
            fatigue.
          </BodyText>
        </Accordion.Item.Content>
      </Accordion.Item>

      <Accordion.Item value="item3">
        <Accordion.Item.Header>
          <Accordion.Item.Header.Heading>
            Accordion Heading 3
          </Accordion.Item.Header.Heading>
        </Accordion.Item.Header>

        <Accordion.Item.Content>
          <BodyText>
            Cold showers can help reduce inflammation, relieve pain, improve
            circulation, lower stress levels, and reduce muscle soreness and
            fatigue.
          </BodyText>
        </Accordion.Item.Content>
      </Accordion.Item>
    </Accordion>
  )
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Base: Story = {
  args: {
    children: "Some collapsed content"
  }
};

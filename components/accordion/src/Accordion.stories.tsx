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
import { Accordion } from "./Accordion";

const meta = {
  title: "Containers/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    variant: "default",
    single: false
  },
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

type Story = StoryObj<typeof meta> & {
  args: Parameters<typeof Accordion>[0];
};

type LayoutElement = {
  getBoundingClientRect: () => { left: number; right: number };
  querySelector: (selector: string) => LayoutElement | null;
};

export const Default: Story = {
  args: {
    children: "Some collapsed content"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("button", {
      name: "Accordion Heading 1"
    }) as unknown as LayoutElement;
    const heading = canvas.getByText(
      "Accordion Heading 1"
    ) as unknown as LayoutElement;
    const icon = header.querySelector("svg");

    if (!icon) {
      throw new Error("Expected the Accordion header icon to render");
    }

    await expect(icon.getBoundingClientRect().left).toBeGreaterThan(
      heading.getBoundingClientRect().right
    );
  }
};

export const Single: Story = {
  args: {
    single: true,
    children: "Some collapsed content"
  }
};

export const BackgroundColor: Story = {
  args: {
    backgroundColor: "$surfaceCanvas",
    children: "Some collapsed content"
  }
};

export const Separated: Story = {
  args: {
    variant: "separated",
    children: "Some collapsed content"
  }
};

export const Bordered: Story = {
  args: {
    variant: "bordered",
    children: "Some collapsed content"
  }
};

export const Borderless: Story = {
  args: {
    bordered: false,
    children: "Some collapsed content"
  }
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Some collapsed content"
  }
};

export const Numbered: Story = {
  args: {
    numbered: true,
    children: "Some collapsed content"
  }
};

export const Chevron: Story = {
  args: {
    icon: "chevron",
    children: "Some collapsed content"
  }
};

export const IconLeft: Story = {
  args: {
    iconDirection: "left",
    children: "Some collapsed content"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("button", {
      name: "Accordion Heading 1"
    }) as unknown as LayoutElement;
    const heading = canvas.getByText(
      "Accordion Heading 1"
    ) as unknown as LayoutElement;
    const icon = header.querySelector("svg");

    if (!icon) {
      throw new Error("Expected the Accordion header icon to render");
    }

    await expect(icon.getBoundingClientRect().right).toBeLessThan(
      heading.getBoundingClientRect().left
    );
  }
};

export const IconRight: Story = {
  args: {
    iconDirection: "right",
    children: "Some collapsed content"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("button", {
      name: "Accordion Heading 1"
    }) as unknown as LayoutElement;
    const heading = canvas.getByText(
      "Accordion Heading 1"
    ) as unknown as LayoutElement;
    const icon = header.querySelector("svg");

    if (!icon) {
      throw new Error("Expected the Accordion header icon to render");
    }

    await expect(icon.getBoundingClientRect().left).toBeGreaterThan(
      heading.getBoundingClientRect().right
    );
  }
};

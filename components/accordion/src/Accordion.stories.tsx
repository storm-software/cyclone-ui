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

const meta: Meta<typeof Accordion> = {
  title: "Containers/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    variant: "surface",
    bordered: true,
    separated: false,
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

interface LayoutElement {
  getBoundingClientRect: () => {
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  querySelector: (selector: string) => LayoutElement | null;
}

export const Base: Story = {
  args: {
    children: "Some collapsed content"
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
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

export const DirectionDown: Story = {
  args: {
    defaultValue: ["item1"],
    direction: "down"
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("button", {
      name: "Accordion Heading 1"
    }) as unknown as LayoutElement;
    const content = canvas.getByText(
      /Cold showers can help reduce inflammation/
    ) as unknown as LayoutElement;

    await expect(header.getBoundingClientRect().bottom).toBeLessThan(
      content.getBoundingClientRect().top
    );
  }
};

export const DirectionUp: Story = {
  args: {
    defaultValue: ["item1"],
    direction: "up",
    icon: "chevron"
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("button", {
      name: "Accordion Heading 1"
    }) as unknown as LayoutElement;
    const content = canvas.getByText(
      /Cold showers can help reduce inflammation/
    ) as unknown as LayoutElement;

    await expect(content.getBoundingClientRect().bottom).toBeLessThanOrEqual(
      header.getBoundingClientRect().top
    );
  }
};

export const Sunken: Story = {
  args: {
    variant: "sunken",
    children: "Some collapsed content"
  }
};

export const Canvas: Story = {
  args: {
    variant: "canvas",
    children: "Some collapsed content"
  }
};

export const Surface: Story = {
  args: {
    variant: "surface",
    children: "Some collapsed content"
  }
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: "Some collapsed content"
  }
};

export const Floating: Story = {
  args: {
    variant: "floating",
    children: "Some collapsed content"
  }
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Some collapsed content"
  }
};

export const Separated: Story = {
  args: {
    separated: true,
    children: "Some collapsed content"
  }
};

export const SeparatedOutlined: Story = {
  args: {
    variant: "outlined",
    separated: true,
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
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
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
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
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

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
import { HeadingText } from "@cyclone-ui/heading-text";
import type { IconProps } from "@cyclone-ui/icons";
import { Check, Gear, ShoppingCart, Truck } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import type { ComponentType } from "react";
import { expect, within } from "storybook/test";
import type { TimelineProps } from "./Timeline";
import { Timeline, TimelineMarker } from "./Timeline";

interface TimelineEvent {
  status: string;
  date: string;
  description: string;
  icon: ComponentType<IconProps>;
}

const events: TimelineEvent[] = [
  {
    status: "Ordered",
    date: "15/10/2026 10:30",
    description: "The order was placed and payment was confirmed.",
    icon: ShoppingCart
  },
  {
    status: "Processing",
    date: "15/10/2026 14:00",
    description: "The warehouse is picking and packing the items.",
    icon: Gear
  },
  {
    status: "Shipped",
    date: "16/10/2026 09:15",
    description: "The package left the warehouse with the carrier.",
    icon: Truck
  },
  {
    status: "Delivered",
    date: "18/10/2026 16:45",
    description: "The package was signed for at the front door.",
    icon: Check
  }
];

const meta: Meta<TimelineProps<TimelineEvent>> = {
  title: "Containers/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  args: {
    value: events,
    layout: "vertical",
    content: event => (
      <View gap="xs">
        <BodyText size="sm" color="inkSubtlest">
          {event.date}
        </BodyText>
        <HeadingText level="sm">{event.status}</HeadingText>
        <BodyText color="inkSubtle">{event.description}</BodyText>
      </View>
    )
  },
  argTypes: {
    layout: {
      control: "inline-radio",
      options: ["vertical", "horizontal"]
    },
    align: {
      control: "inline-radio",
      options: ["left", "right", "top", "bottom", "alternate"]
    }
  },
  decorators: [
    Story => (
      <View padding="8xl" backgroundColor="surfaceCanvas">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

const dateOpposite: TimelineProps<TimelineEvent>["opposite"] = event => (
  <BodyText size="sm" color="inkSubtlest">
    {event.date}
  </BodyText>
);

const statusContent: TimelineProps<TimelineEvent>["content"] = event => (
  <View gap="xs">
    <HeadingText level="sm">{event.status}</HeadingText>
    <BodyText color="inkSubtle">{event.description}</BodyText>
  </View>
);

export const Base: Story = {
  args: {
    maxWidth: 480
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByRole("list")).toBeInTheDocument();
    await expect(canvas.getAllByRole("listitem")).toHaveLength(events.length);
  }
};

export const Opposite: Story = {
  args: {
    opposite: dateOpposite,
    content: statusContent
  }
};

export const Right: Story = {
  args: {
    align: "right",
    maxWidth: 480
  }
};

export const Alternate: Story = {
  args: {
    align: "alternate",
    opposite: dateOpposite,
    content: statusContent
  }
};

export const CustomMarkers: Story = {
  args: {
    maxWidth: 480,
    marker: (event, index) => (
      <TimelineMarker
        width={32}
        height={32}
        alignItems="center"
        justifyContent="center"
        borderWidth={0}
        backgroundColor={index < 3 ? "accent" : "muted"}>
        <event.icon size={16} color={index < 3 ? "onAccent" : "onMuted"} />
      </TimelineMarker>
    )
  }
};

export const Horizontal: Story = {
  args: {
    layout: "horizontal",
    content: event => <HeadingText level="sm">{event.status}</HeadingText>
  }
};

export const HorizontalBottom: Story = {
  args: {
    layout: "horizontal",
    align: "bottom",
    content: event => <HeadingText level="sm">{event.status}</HeadingText>
  }
};

export const HorizontalAlternate: Story = {
  args: {
    layout: "horizontal",
    align: "alternate",
    opposite: dateOpposite,
    content: event => <HeadingText level="sm">{event.status}</HeadingText>
  }
};

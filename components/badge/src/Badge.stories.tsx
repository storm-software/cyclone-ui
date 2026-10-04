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

import { Button } from "@cyclone-ui/button";
import { Envelope, ShoppingCart } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";

import type { BadgeColor, BadgeOrigin, BadgeProps } from "./Badge";
import { Badge } from "./Badge";

const MailIcon = () => <Envelope size={24} color="inkEmphasis" />;

const Shape = ({ circle = false }: { circle?: boolean }) => (
  <View
    width={40}
    height={40}
    backgroundColor="inkSubtle"
    borderRadius={circle ? 1000_000_000 : 0}
  />
);

const Row = ({ children }: { children: React.ReactNode }) => (
  <View flexDirection="row" flexWrap="wrap" alignItems="center" gap="8xl">
    {children}
  </View>
);

const meta: Meta<typeof Badge> = {
  title: "Base/Badge",
  component: Badge,
  tags: ["autodocs"],
  render: (args: BadgeProps) => (
    <Badge {...args}>
      <MailIcon />
    </Badge>
  )
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

interface StoryBox {
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;
}

interface StoryElement {
  parentElement: StoryElement | null;
  textContent: string | null;
  getAttribute: (name: string) => string | null;
  getBoundingClientRect: () => StoryBox;
}

const getStyles = (element: StoryElement) =>
  (
    globalThis as unknown as {
      getComputedStyle: (element: StoryElement) => {
        display: string;
        transform: string;
      };
    }
  ).getComputedStyle(element);

/**
 * The badge's root. A `color` theme wraps the badge in a `display: contents`
 * span, which has no box of its own, so those wrappers are skipped.
 */
const getRoot = (badge: StoryElement) => {
  let root = badge.parentElement;
  while (root && getStyles(root).display === "contents") {
    root = root.parentElement;
  }
  if (!root) {
    throw new Error("The badge has no root");
  }

  return root;
};

/** The badge element that shows `text` (the text's own parent). */
const getBadge = (canvasElement: HTMLElement, text: string) => {
  const badge = (
    within(canvasElement).getByText(text) as unknown as StoryElement
  ).parentElement;
  if (!badge) {
    throw new Error(`No badge shows "${text}"`);
  }

  return badge;
};

/** The badge's current scale, read from its computed transform matrix. */
const getScale = (badge: StoryElement) => {
  const match = /^matrix\(([^,]+)/.exec(getStyles(badge).transform);

  return match ? Number(match[1]) : 1;
};

/**
 * Checks the badge's center sits on the root's `anchorOrigin` corner, pulled
 * in by `inset` (a fraction of the root's size) for `overlap="circular"`.
 */
const expectCenteredOnCorner = async (
  badge: StoryElement,
  { vertical = "top", horizontal = "right" }: BadgeOrigin,
  inset = 0
) => {
  const root = getRoot(badge).getBoundingClientRect();
  const box = badge.getBoundingClientRect();
  const x =
    horizontal === "right"
      ? root.right - root.width * inset
      : root.left + root.width * inset;
  const y =
    vertical === "top"
      ? root.top + root.height * inset
      : root.bottom - root.height * inset;

  await expect(Math.abs(box.left + box.width / 2 - x)).toBeLessThan(1);
  await expect(Math.abs(box.top + box.height / 2 - y)).toBeLessThan(1);
};

export const Base: Story = {
  args: {
    badgeContent: 4,
    color: "primary"
  },
  play: async ({ canvasElement }) => {
    const badge = getBadge(canvasElement, "4");

    await expect(badge.getAttribute("aria-hidden")).toBe("true");
    await expect(getScale(badge)).toBe(1);
    await expectCenteredOnCorner(badge, {});
  }
};

const COLORS: BadgeColor[] = [
  "default",
  "primary",
  "secondary",
  "error",
  "info",
  "success",
  "warning"
];

export const Colors: Story = {
  render: (args: BadgeProps) => (
    <Row>
      {COLORS.map(color => (
        <Badge key={color} badgeContent={4} {...args} color={color}>
          <MailIcon />
        </Badge>
      ))}
    </Row>
  )
};

export const Dot: Story = {
  args: {
    color: "secondary",
    variant: "dot",
    slotProps: { badge: { testID: "dot" } }
  },
  play: async ({ canvasElement }) => {
    const badge = within(canvasElement).getByTestId(
      "dot"
    ) as unknown as StoryElement;

    await expect(badge.textContent).toBe("");
    await expect(getScale(badge)).toBe(1);
    await expect(badge.getBoundingClientRect().width).toBe(8);
  }
};

export const MaxValue: Story = {
  render: (args: BadgeProps) => (
    <Row>
      <Badge color="secondary" badgeContent={99} {...args}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={100} {...args}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={1000} max={999} {...args}>
        <MailIcon />
      </Badge>
    </Row>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("99")).toBeTruthy();
    await expect(canvas.getByText("99+")).toBeTruthy();
    await expect(canvas.getByText("999+")).toBeTruthy();
  }
};

export const ShowZero: Story = {
  render: (args: BadgeProps) => (
    <Row>
      <Badge color="secondary" badgeContent={0} {...args}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={0} showZero {...args}>
        <MailIcon />
      </Badge>
    </Row>
  ),
  play: async ({ canvasElement }) => {
    const [hidden, shown] = within(canvasElement)
      .getAllByText("0")
      .map(text => (text as unknown as StoryElement).parentElement!);

    await expect(getScale(hidden!)).toBeLessThan(0.01);
    await expect(getScale(shown!)).toBe(1);
  }
};

export const Invisible: Story = {
  args: {
    badgeContent: 4,
    color: "secondary",
    invisible: true
  },
  play: async ({ canvasElement }) => {
    await expect(getScale(getBadge(canvasElement, "4"))).toBeLessThan(0.01);
  }
};

export const Visibility: Story = {
  render: (args: BadgeProps) => {
    const [count, setCount] = useState(1);
    const [invisible, setInvisible] = useState(false);

    return (
      <Row>
        <View flexDirection="row" alignItems="center" gap="5xl">
          <Badge color="secondary" badgeContent={count} {...args}>
            <MailIcon />
          </Badge>
          <Button
            aria-label="Reduce"
            variant="outlined"
            onPress={() => setCount(prev => Math.max(prev - 1, 0))}>
            <Button.Text>-</Button.Text>
          </Button>
          <Button
            aria-label="Increase"
            variant="outlined"
            onPress={() => setCount(prev => prev + 1)}>
            <Button.Text>+</Button.Text>
          </Button>
        </View>
        <View flexDirection="row" alignItems="center" gap="5xl">
          <Badge
            color="secondary"
            variant="dot"
            invisible={invisible}
            {...args}>
            <MailIcon />
          </Badge>
          <Button variant="outlined" onPress={() => setInvisible(!invisible)}>
            <Button.Text>{invisible ? "Show Badge" : "Hide Badge"}</Button.Text>
          </Button>
        </View>
      </Row>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = getBadge(canvasElement, "1");

    // Reaching zero scales the badge out, still showing its last count.
    await userEvent.click(canvas.getByLabelText("Reduce"));
    await waitFor(async () => expect(getScale(badge)).toBeLessThan(0.01));
    await expect(badge.textContent).toBe("1");

    await userEvent.click(canvas.getByLabelText("Increase"));
    await waitFor(async () => expect(getScale(badge)).toBe(1));
  }
};

const ORIGINS: (BadgeOrigin & { content: number })[] = [
  { vertical: "top", horizontal: "right", content: 1 },
  { vertical: "bottom", horizontal: "right", content: 2 },
  { vertical: "top", horizontal: "left", content: 3 },
  { vertical: "bottom", horizontal: "left", content: 4 }
];

export const Alignment: Story = {
  render: (args: BadgeProps) => (
    <Row>
      {ORIGINS.map(({ content, ...anchorOrigin }) => (
        <Badge
          key={content}
          color="secondary"
          badgeContent={content}
          anchorOrigin={anchorOrigin}
          {...args}>
          <MailIcon />
        </Badge>
      ))}
    </Row>
  ),
  play: async ({ canvasElement }) => {
    for (const { content, ...anchorOrigin } of ORIGINS) {
      await expectCenteredOnCorner(
        getBadge(canvasElement, String(content)),
        anchorOrigin
      );
    }
  }
};

export const Overlap: Story = {
  render: (args: BadgeProps) => (
    <Row>
      <Badge color="secondary" badgeContent="R" {...args}>
        <Shape />
      </Badge>
      <Badge color="secondary" variant="dot" {...args}>
        <Shape />
      </Badge>
      <Badge color="secondary" overlap="circular" badgeContent="C" {...args}>
        <Shape circle />
      </Badge>
      <Badge color="secondary" overlap="circular" variant="dot" {...args}>
        <Shape circle />
      </Badge>
    </Row>
  ),
  play: async ({ canvasElement }) => {
    await expectCenteredOnCorner(getBadge(canvasElement, "R"), {});
    await expectCenteredOnCorner(getBadge(canvasElement, "C"), {}, 0.14);
  }
};

export const Customized: Story = {
  render: (args: BadgeProps) => (
    <Badge
      color="secondary"
      badgeContent={4}
      slotProps={{
        badge: {
          top: 13,
          right: -3,
          borderWidth: 2,
          borderColor: "surfaceCanvas",
          paddingHorizontal: 4
        }
      }}
      {...args}>
      <ShoppingCart size={24} color="inkEmphasis" />
    </Badge>
  )
};

export const Brand: Story = {
  args: {
    badgeContent: 4,
    theme: "brand"
  }
};

export const Danger: Story = {
  args: {
    badgeContent: 4,
    theme: "danger"
  }
};

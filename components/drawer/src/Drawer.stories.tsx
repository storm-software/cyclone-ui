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
import { ChevronLeft, ChevronRight } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "@tamagui/stacks";
import { useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import type { DrawerProps } from "./Drawer";
import { Drawer } from "./Drawer";

const meta: Meta<typeof Drawer> = {
  title: "Containers/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  render: ({ children, ...props }: DrawerProps) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onPress={() => setOpen(true)}>
          <Button.Text>Open Drawer</Button.Text>
        </Button>
        <Drawer {...props} open={open} onOpenChange={setOpen}>
          <Drawer.Overlay />
          <Drawer.Frame>
            <Drawer.Handle />
            <Drawer.Content>
              <Drawer.Header closable={true}>
                <Drawer.Title>Drawer title</Drawer.Title>
                <Drawer.Description>Supporting description</Drawer.Description>
              </Drawer.Header>
              <Drawer.Body>{children}</Drawer.Body>
            </Drawer.Content>
            <Drawer.Footer>
              <Drawer.Footer.Actions.Secondary>
                <Button
                  onPress={() => setOpen(false)}
                  variant="outlined"
                  size="sm">
                  <Button.Text>Cancel</Button.Text>
                </Button>
              </Drawer.Footer.Actions.Secondary>
              <Drawer.Footer.Actions.Primary>
                <Button
                  onPress={() => setOpen(false)}
                  variant="primary"
                  size="sm">
                  <Button.Text>Save changes</Button.Text>
                </Button>
              </Drawer.Footer.Actions.Primary>
            </Drawer.Footer>
          </Drawer.Frame>
        </Drawer>
      </>
    );
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children:
      "A modal drawer keeps focus within its contents and can be dismissed using the overlay, close button, or drag handle."
  }
};

export const Small: Story = {
  args: {
    ...Base.args,
    size: "sm"
  }
};

export const Medium: Story = {
  args: {
    ...Base.args,
    size: "md"
  }
};

export const Large: Story = {
  args: {
    ...Base.args,
    size: "lg"
  }
};

export const Top: Story = {
  args: {
    ...Base.args,
    direction: "top"
  }
};

export const Right: Story = {
  args: {
    ...Base.args,
    direction: "right"
  }
};

export const Bottom: Story = {
  args: {
    ...Base.args,
    direction: "bottom"
  }
};

export const Left: Story = {
  args: {
    ...Base.args,
    direction: "left"
  }
};

export const ShowGaps: Story = {
  args: {
    ...Base.args,
    showGaps: true
  }
};

export const WithoutHandle: Story = {
  render: ({ children, ...props }: DrawerProps) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onPress={() => setOpen(true)}>
          <Button.Text>Open Drawer</Button.Text>
        </Button>
        <Drawer {...props} open={open} onOpenChange={setOpen}>
          <Drawer.Overlay />
          <Drawer.Frame>
            <Drawer.Content>
              <Drawer.Header closable={true}>
                <Drawer.Title>Drawer without a handle</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>{children}</Drawer.Body>
            </Drawer.Content>
          </Drawer.Frame>
        </Drawer>
      </>
    );
  },
  args: {
    ...Base.args,
    disableDrag: true
  }
};

export const Uncontrolled: Story = {
  render: ({ children, ...props }: DrawerProps) => (
    <Drawer {...props} defaultOpen={true}>
      <Drawer.Overlay />
      <Drawer.Frame>
        <Drawer.Handle />
        <Drawer.Content>
          <Drawer.Header closable={true}>
            <Drawer.Title>Uncontrolled drawer</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>{children}</Drawer.Body>
        </Drawer.Content>
      </Drawer.Frame>
    </Drawer>
  ),
  args: {
    ...Base.args
  }
};

export const Scrollable: Story = {
  render: ({ children, ...props }: DrawerProps) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onPress={() => setOpen(true)}>
          <Button.Text>Open Drawer</Button.Text>
        </Button>
        <Drawer {...props} open={open} onOpenChange={setOpen} snapPoints={[90]}>
          <Drawer.Overlay />
          <Drawer.Frame>
            <Drawer.Handle />
            <Drawer.Content>
              <Drawer.Header closable={true} onBack={() => setOpen(false)}>
                <Drawer.Title>Scrollable drawer</Drawer.Title>
                <Drawer.Description>
                  The header and footer stay visible while the content scrolls.
                </Drawer.Description>
              </Drawer.Header>
              <YStack gap="3xl">
                {Array.from({ length: 64 }, (_, index) => (
                  <Drawer.Body key={index}>{children}</Drawer.Body>
                ))}
              </YStack>
            </Drawer.Content>
            <Drawer.Footer>
              <Drawer.Footer.Actions.Secondary>
                <Button
                  onPress={() => setOpen(false)}
                  variant="outlined"
                  size="sm">
                  <Button.Text>Cancel</Button.Text>
                </Button>
              </Drawer.Footer.Actions.Secondary>
              <Drawer.Footer.Actions.Primary>
                <Button
                  onPress={() => setOpen(false)}
                  variant="primary"
                  size="sm">
                  <Button.Text>Save</Button.Text>
                </Button>
              </Drawer.Footer.Actions.Primary>
            </Drawer.Footer>
          </Drawer.Frame>
        </Drawer>
      </>
    );
  },
  args: {
    children:
      "Drawer.Content keeps long content reachable without changing the drawer's modal behavior."
  }
};

// Secondary buttons start the row and primary buttons end it, all as wide as
// the widest. Below `sm`, or once they don't fit, they stack at full width with
// the primary button on top.
export const FooterActions: Story = {
  render: ({ children, ...props }: DrawerProps) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onPress={() => setOpen(true)}>
          <Button.Text>Open Drawer</Button.Text>
        </Button>
        <Drawer {...props} open={open} onOpenChange={setOpen}>
          <Drawer.Overlay />
          <Drawer.Frame>
            <Drawer.Handle />
            <Drawer.Content>
              <Drawer.Header closable={true}>
                <Drawer.Title>Contact details</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>{children}</Drawer.Body>
            </Drawer.Content>
            <Drawer.Footer>
              <Drawer.Footer.Actions.Secondary>
                <Button variant="outlined" size="sm">
                  <Button.Icon>
                    <ChevronLeft />
                  </Button.Icon>
                  <Button.Text>Previous</Button.Text>
                </Button>
                <Button theme="danger" variant="outlined" size="sm">
                  <Button.Text>Clear</Button.Text>
                </Button>
              </Drawer.Footer.Actions.Secondary>
              <Drawer.Footer.Actions.Primary>
                <Button variant="primary" size="sm">
                  <Button.Text>Next</Button.Text>
                  <Button.Icon>
                    <ChevronRight />
                  </Button.Icon>
                </Button>
              </Drawer.Footer.Actions.Primary>
            </Drawer.Footer>
          </Drawer.Frame>
        </Drawer>
      </>
    );
  },
  args: {
    ...Base.args,
    size: "md"
  },
  play: async ({ canvasElement }) => {
    await userEvent.click(
      within(canvasElement).getByRole("button", { name: "Open Drawer" })
    );
    const body = within(document.body);
    const buttons = await Promise.all(
      ["Previous", "Clear", "Next"].map(name =>
        body.findByRole("button", { name })
      )
    );
    // Retried until the slide-in and the first measurement settle.
    await waitFor(
      async () => {
        const [previous, clear, next] = buttons.map(button =>
          button.getBoundingClientRect()
        );
        for (const rect of [clear, next]) {
          await expect(Math.abs(rect!.width - previous!.width)).toBeLessThan(1);
        }
        if (window.matchMedia("(max-width: 639px)").matches) {
          // Stacked: Next on top, then Previous and Clear.
          await expect(next!.top).toBeLessThan(previous!.top);
          await expect(previous!.top).toBeLessThan(clear!.top);
        } else {
          await expect(previous!.right).toBeLessThan(clear!.left);
          // The primary button ends the row, away from the secondary ones.
          await expect(next!.left - clear!.right).toBeGreaterThan(
            clear!.left - previous!.right
          );
        }
      },
      { timeout: 3000 }
    );
  }
};

// One `padding` spaces the panel from the frame, the panel from the footer, and
// the footer buttons from each other and the frame.
export const Padding: Story = {
  ...FooterActions,
  args: {
    ...FooterActions.args,
    padding: "4xl"
  }
};

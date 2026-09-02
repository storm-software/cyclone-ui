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
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "@tamagui/stacks";
import { useState } from "react";
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
          <Drawer.Frame padding="$5xl" gap="$3xl">
            <Drawer.Handle />
            <Drawer.Heading>Drawer heading</Drawer.Heading>
            <Drawer.Body>{children}</Drawer.Body>
            <Drawer.Footer>
              <Button onPress={() => setOpen(false)} variant="outlined">
                <Button.Text>Close</Button.Text>
              </Button>
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
            <Drawer.ScrollView padding="$5xl">
              <YStack gap="$3xl">
                <Drawer.Heading>Scrollable drawer</Drawer.Heading>
                {Array.from({ length: 12 }, (_, index) => (
                  <Drawer.Body key={index}>{children}</Drawer.Body>
                ))}
              </YStack>
            </Drawer.ScrollView>
          </Drawer.Frame>
        </Drawer>
      </>
    );
  },
  args: {
    children:
      "Drawer.ScrollView keeps long content reachable without changing the drawer's modal behavior."
  }
};

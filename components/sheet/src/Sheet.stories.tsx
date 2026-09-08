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
import type { SheetProps } from "./Sheet";
import { Sheet } from "./Sheet";

const meta: Meta<typeof Sheet> = {
  title: "Containers/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  render: ({ children, ...props }: SheetProps) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onPress={() => setOpen(true)}>
          <Button.Text>Open Sheet</Button.Text>
        </Button>
        <Sheet {...props} open={open} onOpenChange={setOpen}>
          <Sheet.Overlay />
          <Sheet.Frame padding="$5xl" gap="$3xl">
            <Sheet.Handle />
            <Sheet.Heading>Sheet heading</Sheet.Heading>
            <Sheet.Body>{children}</Sheet.Body>
            <Sheet.Footer>
              <Button onPress={() => setOpen(false)} variant="outlined">
                <Button.Text>Close</Button.Text>
              </Button>
            </Sheet.Footer>
          </Sheet.Frame>
        </Sheet>
      </>
    );
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children:
      "A modal sheet keeps focus within its contents and can be dismissed using the overlay, close button, or drag handle."
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
  render: ({ children, ...props }: SheetProps) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onPress={() => setOpen(true)}>
          <Button.Text>Open Sheet</Button.Text>
        </Button>
        <Sheet {...props} open={open} onOpenChange={setOpen} snapPoints={[90]}>
          <Sheet.Overlay />
          <Sheet.Frame>
            <Sheet.Handle />
            <Sheet.ScrollView padding="$5xl">
              <YStack gap="$3xl">
                <Sheet.Heading>Scrollable sheet</Sheet.Heading>
                {Array.from({ length: 12 }, (_, index) => (
                  <Sheet.Body key={index}>{children}</Sheet.Body>
                ))}
              </YStack>
            </Sheet.ScrollView>
          </Sheet.Frame>
        </Sheet>
      </>
    );
  },
  args: {
    children:
      "Sheet.ScrollView keeps long content reachable without changing the sheet's modal behavior."
  }
};

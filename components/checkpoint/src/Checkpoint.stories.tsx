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

import { PromptMessage } from "@cyclone-ui/prompt-message";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { Fragment, useState } from "react";
import { expect, fn, screen, userEvent, waitFor, within } from "storybook/test";
import type { CheckpointProps } from "./Checkpoint";
import { Checkpoint } from "./Checkpoint";

const meta: Meta<CheckpointProps> = {
  title: "AI/Checkpoint",
  component: Checkpoint,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <View padding="xl" maxWidth={560} width="100%">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<CheckpointProps>;

const onRestore = fn();

export const Base: Story = {
  render: () => (
    <Checkpoint>
      <Checkpoint.Icon />
      Button renamed
      <Checkpoint.Trigger
        tooltip="Restore the chat to this point"
        onPress={onRestore}
      />
    </Checkpoint>
  ),
  play: async ({ canvasElement }) => {
    const restore = within(canvasElement).getByRole("button", {
      name: "Restore"
    });

    // The tooltip shows right away on keyboard focus.
    await userEvent.tab();
    await expect(restore).toHaveFocus();
    await waitFor(async () =>
      expect(screen.getByText("Restore the chat to this point")).toBeVisible()
    );
    await userEvent.keyboard("{Enter}");
    await expect(onRestore).toHaveBeenCalledTimes(1);
  }
};

export const Variants: Story = {
  render: () => (
    <View gap="7xl">
      <Checkpoint>
        <Checkpoint.Icon />
        separator
        <Checkpoint.Trigger />
      </Checkpoint>
      <Checkpoint variant="border">
        <Checkpoint.Icon />
        border
        <Checkpoint.Trigger />
      </Checkpoint>
      <Checkpoint variant="inline">
        <Checkpoint.Icon />
        inline
        <Checkpoint.Trigger />
      </Checkpoint>
      <Checkpoint>
        Today
      </Checkpoint>
    </View>
  )
};

interface Turn {
  id: string;
  from: "user" | "assistant";
  text: string;
  checkpoint?: string;
}

const TURNS: Turn[] = [
  { id: "1", from: "user", text: "Rename the button component to action." },
  {
    id: "2",
    from: "assistant",
    text: "Renamed Button to Action in components/ui/button.tsx.",
    checkpoint: "Button renamed"
  },
  { id: "3", from: "user", text: "Update the docs to match." },
  {
    id: "4",
    from: "assistant",
    text: "Updated the Button page to say Action.",
    checkpoint: "Docs updated"
  }
];

// Restore keeps the turn with the checkpoint and drops every message after
// it. The last checkpoint has nothing to restore.
const Conversation = () => {
  const [turns, setTurns] = useState(TURNS);

  return (
    <View gap="6xl">
      {turns.map((turn, index) => (
        <Fragment key={turn.id}>
          <PromptMessage from={turn.from}>
            <PromptMessage.Content>{turn.text}</PromptMessage.Content>
          </PromptMessage>
          {turn.checkpoint && (
            <Checkpoint>
              <Checkpoint.Icon />
              {turn.checkpoint}
              {index < turns.length - 1 && (
                <Checkpoint.Trigger
                  aria-label={`Restore to ${turn.checkpoint}`}
                  tooltip="Drop the messages after this point"
                  onPress={() => setTurns(turns.slice(0, index + 1))}
                />
              )}
            </Checkpoint>
          )}
        </Fragment>
      ))}
    </View>
  );
};

export const InConversation: Story = {
  render: () => <Conversation />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.queryByRole("button", { name: "Restore to Docs updated" })
    ).toBeNull();
    await userEvent.click(
      canvas.getByRole("button", { name: "Restore to Button renamed" })
    );
    await waitFor(async () =>
      expect(canvas.queryByText("Update the docs to match.")).toBeNull()
    );
    await expect(canvas.getByText("Button renamed")).toBeVisible();
    // Now the last checkpoint, it has nothing left to restore.
    await expect(canvas.queryByRole("button", { name: /Restore/ })).toBeNull();
  }
};

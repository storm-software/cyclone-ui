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

import { Console } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type {
  ConfirmationProps,
  ToolApproval,
  ToolState
} from "./Confirmation";
import { Confirmation } from "./Confirmation";

const meta: Meta<ConfirmationProps> = {
  title: "AI/Confirmation",
  component: Confirmation,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <View padding="xl" maxWidth={480} width="100%">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<ConfirmationProps>;

const RunCommand = ({
  approval,
  state,
  onApprove,
  onDeny
}: {
  approval: ToolApproval;
  state: ToolState;
  onApprove?: () => void;
  onDeny?: () => void;
}) => (
  <Confirmation approval={approval} state={state} icon={<Console />}>
    <Confirmation.Title description="The command runs in this project.">
      <Confirmation.Request>Run rm -rf dist?</Confirmation.Request>
      <Confirmation.Accepted>You approved rm -rf dist</Confirmation.Accepted>
      <Confirmation.Rejected>You denied rm -rf dist</Confirmation.Rejected>
    </Confirmation.Title>
    <Confirmation.Actions>
      <Confirmation.Action variant="outlined" onPress={onDeny}>
        Deny
      </Confirmation.Action>
      <Confirmation.Action variant="primary" onPress={onApprove}>
        Approve
      </Confirmation.Action>
    </Confirmation.Actions>
  </Confirmation>
);

const onApprove = fn();
const onDeny = fn();

export const Request: Story = {
  render: () => (
    <RunCommand
      approval={{ id: "approval-1" }}
      state="approval-requested"
      onApprove={onApprove}
      onDeny={onDeny}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // The question names the group around the buttons.
    await expect(
      canvas.getByRole("group", { name: "Run rm -rf dist?" })
    ).toBeVisible();
    await userEvent.click(canvas.getByRole("button", { name: "Deny" }));
    await expect(onDeny).toHaveBeenCalledOnce();
    await userEvent.click(canvas.getByRole("button", { name: "Approve" }));
    await expect(onApprove).toHaveBeenCalledOnce();
  }
};

export const Accepted: Story = {
  render: () => (
    <RunCommand
      approval={{ id: "approval-1", approved: true }}
      state="approval-responded"
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("You approved rm -rf dist")).toBeVisible();
    await expect(canvas.queryByRole("button")).toBeNull();
  }
};

export const Rejected: Story = {
  render: () => (
    <RunCommand
      approval={{ id: "approval-1", approved: false }}
      state="output-denied"
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("You denied rm -rf dist")).toBeVisible();
    await expect(canvas.queryByRole("button")).toBeNull();
  }
};

// Answering updates the part's approval and state, as `useChat`'s
// `addToolApprovalResponse` does.
const Answerable = () => {
  const [approval, setApproval] = useState<ToolApproval>({ id: "approval-1" });
  const answer = (approved: boolean) => setApproval({ ...approval, approved });

  return (
    <RunCommand
      approval={approval}
      state={
        approval.approved === undefined
          ? "approval-requested"
          : "approval-responded"
      }
      onApprove={() => answer(true)}
      onDeny={() => answer(false)}
    />
  );
};

export const Answer: Story = {
  render: () => <Answerable />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Keyboard: Tab to Deny, then to Approve, and press it.
    await userEvent.tab();
    await expect(canvas.getByRole("button", { name: "Deny" })).toHaveFocus();
    await userEvent.tab();
    await userEvent.keyboard("{Enter}");
    await waitFor(async () =>
      expect(canvas.getByText("You approved rm -rf dist")).toBeVisible()
    );
    await expect(canvas.queryByRole("button")).toBeNull();
  }
};

export const InputStreaming: Story = {
  name: "Hidden while the input streams",
  render: () => (
    <RunCommand approval={{ id: "approval-1" }} state="input-streaming" />
  ),
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).queryByRole("group")).toBeNull();
  }
};

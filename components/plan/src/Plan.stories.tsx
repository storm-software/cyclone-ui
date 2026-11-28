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
import { Button } from "@cyclone-ui/button";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useEffect, useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type { PlanProps, PlanStepStatus } from "./Plan";
import { Plan } from "./Plan";

const meta: Meta<PlanProps> = {
  title: "AI/Plan",
  component: Plan,
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
type Story = StoryObj<PlanProps>;

const STEPS = [
  "Install @base-ui/react",
  "Replace the Radix imports",
  "Rename asChild to render",
  "Run the type checker"
];

const statusAt = (index: number, current: number): PlanStepStatus =>
  index < current ? "done" : index === current ? "running" : "pending";

// The agent finishes a step every 600ms.
const StreamingPlan = () => {
  const [current, setCurrent] = useState(0);
  const isStreaming = current < STEPS.length;

  useEffect(() => {
    if (!isStreaming) return;
    const timer = setTimeout(() => setCurrent(value => value + 1), 600);

    return () => clearTimeout(timer);
  }, [current, isStreaming]);

  return (
    <Plan isStreaming={isStreaming}>
      <Plan.Header>
        <Plan.Title>Plan: migrate to Base UI</Plan.Title>
        <Plan.Description>
          {Math.min(current, STEPS.length)} of {STEPS.length} done
        </Plan.Description>
      </Plan.Header>
      <Plan.Content>
        {STEPS.map((step, index) => (
          <Plan.Step key={step} status={statusAt(index, current)}>
            {step}
          </Plan.Step>
        ))}
      </Plan.Content>
    </Plan>
  );
};

/** The steps are known up front; each turns done in order. */
export const Streaming: Story = {
  render: () => <StreamingPlan />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole("button", { name: /0 of 4 done/ })
    ).toHaveAttribute("aria-expanded", "true");
    // Stays open when it is done.
    await waitFor(
      async () =>
        expect(
          canvas.getByRole("button", { name: /4 of 4 done/ })
        ).toHaveAttribute("aria-expanded", "true"),
      { timeout: 10_000 }
    );
  }
};

/** Every state at once: done, running (not streaming, so no shimmer) and pending. */
export const Steps: Story = {
  render: () => (
    <Plan>
      <Plan.Header>
        <Plan.Title>Plan: migrate to Base UI</Plan.Title>
        <Plan.Description>2 of 4 done</Plan.Description>
      </Plan.Header>
      <Plan.Content>
        {STEPS.map((step, index) => (
          <Plan.Step key={step} status={statusAt(index, 2)}>
            {step}
          </Plan.Step>
        ))}
      </Plan.Content>
    </Plan>
  )
};

const DARK_MODE = [
  "Add a dark variant to the theme tokens",
  "Read the theme from a cookie on the server",
  "Add a toggle to the settings page",
  "Check contrast on the charts"
];

/** Text above the steps explains the approach. Closed, the plan reads as one line. */
export const Details: Story = {
  args: { onOpenChange: fn() },
  render: args => (
    <Plan {...args}>
      <Plan.Header>
        <Plan.Title>Plan: add dark mode</Plan.Title>
        <Plan.Description>1 of {DARK_MODE.length} done</Plan.Description>
      </Plan.Header>
      <Plan.Content>
        <BodyText size="sm">
          Store the theme in a cookie so the server renders the right one and
          the page does not flash on load.
        </BodyText>
        {DARK_MODE.map((step, index) => (
          <Plan.Step key={step} status={index === 0 ? "done" : "pending"}>
            {step}
          </Plan.Step>
        ))}
      </Plan.Content>
    </Plan>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /Plan: add dark mode/ });

    trigger.focus();
    await userEvent.keyboard("{Enter}");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(args.onOpenChange).toHaveBeenCalledWith(false);
    await waitFor(async () =>
      expect(canvas.queryByText(/Store the theme/)).toBeNull()
    );
  }
};

/** A button beside the line and an approval row below the plan. */
export const Actions: Story = {
  args: { onOpenChange: fn() },
  render: args => (
    <Plan {...args}>
      <Plan.Header>
        <Plan.Title>Plan: add dark mode</Plan.Title>
        <Plan.Description>0 of {DARK_MODE.length} done</Plan.Description>
        <Plan.Action>
          <Button variant="outlined" size="sm" flexGrow={0}>
            <Button.Text>Edit</Button.Text>
          </Button>
        </Plan.Action>
      </Plan.Header>
      <Plan.Content>
        {DARK_MODE.map(step => (
          <Plan.Step key={step}>{step}</Plan.Step>
        ))}
      </Plan.Content>
      <Plan.Footer>
        <Button variant="primary" size="sm" flexGrow={0}>
          <Button.Text>Build</Button.Text>
        </Button>
        <Button variant="outlined" size="sm" flexGrow={0}>
          <Button.Text>Keep planning</Button.Text>
        </Button>
      </Plan.Footer>
    </Plan>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // The action is not part of the trigger, so it doesn't toggle the plan.
    await userEvent.click(canvas.getByRole("button", { name: "Edit" }));
    await expect(args.onOpenChange).not.toHaveBeenCalled();
    await expect(
      canvas.getByRole("button", { name: /Plan: add dark mode/ })
    ).toHaveAttribute("aria-expanded", "true");
  }
};

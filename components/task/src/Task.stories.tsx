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

import { Document, Edit, Search } from "@cyclone-ui/icons";
import { Trace } from "@cyclone-ui/trace";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useEffect, useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type { TaskProps } from "./Task";
import { Task } from "./Task";

const meta: Meta<TaskProps> = {
  title: "AI/Task",
  component: Task,
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
type Story = StoryObj<TaskProps>;

interface Step {
  running: string;
  done: string;
  target: string;
}

const TASKS: { title: [string, string]; steps: Step[] }[] = [
  {
    title: ["Finding the project files", "Found the project files"],
    steps: [
      { running: "Searching for", done: "Searched for", target: "generateMetadata" },
      { running: "Reading", done: "Read", target: "app/layout.tsx" },
      { running: "Reading", done: "Read", target: "app/page.tsx" }
    ]
  },
  {
    title: ["Updating the page metadata", "Updated the page metadata"],
    steps: [
      { running: "Editing", done: "Edited", target: "app/layout.tsx" },
      { running: "Editing", done: "Edited", target: "app/page.tsx" }
    ]
  }
];

// The tick each task starts on: its steps so far, the last one running, then
// all of them done before the next task starts.
const STARTS = TASKS.map((_, index) =>
  TASKS.slice(0, index).reduce((sum, task) => sum + task.steps.length + 1, 0)
);
const LAST = STARTS.at(-1)! + TASKS.at(-1)!.steps.length;

// The agent takes a step every 600ms.
const useSchedule = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (tick >= LAST) return;
    const timer = setTimeout(() => setTick(value => value + 1), 600);

    return () => clearTimeout(timer);
  }, [tick]);

  return TASKS.flatMap((task, index) => {
    const done = tick - STARTS[index]!;

    return done < 0 ? [] : [{ task, done: Math.min(done, task.steps.length) }];
  });
};

const StreamingTasks = () => (
  <Trace>
    {useSchedule().map(({ task, done }) => (
      <Task key={task.title[1]}>
        <Task.Trigger title={task.title[done < task.steps.length ? 0 : 1]} />
        <Task.Content>
          {task.steps.slice(0, done + 1).map((step, index) => (
            <Task.Item
              key={`${step.done} ${step.target}`}
              status={index < done ? undefined : "running"}>
              {index < done ? step.done : step.running}{" "}
              <Task.ItemFile>{step.target}</Task.ItemFile>
            </Task.Item>
          ))}
        </Task.Content>
      </Task>
    ))}
  </Trace>
);

/**
 * Each step appears when the agent takes it. A task opens while it runs and
 * closes once it is done.
 */
export const Streaming: Story = {
  render: () => <StreamingTasks />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () =>
      expect(
        canvas.getByRole("button", { name: "Finding the project files" })
      ).toHaveAttribute("aria-expanded", "true")
    );
    await waitFor(
      async () => {
        await expect(
          canvas.getByRole("button", { name: "Found the project files" })
        ).toHaveAttribute("aria-expanded", "false");
        await expect(
          canvas.getByRole("button", { name: "Updated the page metadata" })
        ).toHaveAttribute("aria-expanded", "false");
      },
      { timeout: 10_000 }
    );
  }
};

/** A running step runs the task. Its title shimmers, file names too. */
export const Running: Story = {
  render: () => (
    <Task>
      <Task.Trigger title="Updating the page metadata" />
      <Task.Content>
        <Task.Item>
          Edited <Task.ItemFile>app/layout.tsx</Task.ItemFile>
        </Task.Item>
        <Task.Item status="running">
          Editing <Task.ItemFile>app/page.tsx</Task.ItemFile>
        </Task.Item>
      </Task.Content>
    </Task>
  ),
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByRole("button", {
        name: "Updating the page metadata"
      })
    ).toHaveAttribute("aria-expanded", "true");
  }
};

/** A failed step fails the task once nothing else runs. */
export const Failed: Story = {
  render: () => (
    <Task>
      <Task.Trigger title="Failed to update the page metadata" />
      <Task.Content>
        <Task.Item>
          Edited <Task.ItemFile>app/layout.tsx</Task.ItemFile>
        </Task.Item>
        <Task.Item status="error">
          Failed to edit <Task.ItemFile>app/page.tsx</Task.ItemFile>
        </Task.Item>
      </Task.Content>
    </Task>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", {
      name: "Failed to update the page metadata"
    });

    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(trigger);
    await waitFor(async () =>
      expect(canvas.getByText(/Failed to edit/)).toBeVisible()
    );
  }
};

/**
 * Steps with icons for their kind, a description and a link to the file. The
 * task starts open as the reader's choice; closed, its steps leave the tab
 * order.
 */
export const Done: Story = {
  args: { defaultOpen: true, onOpenChange: fn() },
  render: args => (
    <Task {...args}>
      <Task.Trigger title="Found the project files" />
      <Task.Content>
        <Task.Item icon={<Search />} description="3 results">
          Searched for <Task.ItemFile>generateMetadata</Task.ItemFile>
        </Task.Item>
        <Trace.Link href="#app/layout.tsx">
          <Task.Item icon={<Document />}>
            Read <Task.ItemFile>app/layout.tsx</Task.ItemFile>
          </Task.Item>
        </Trace.Link>
        <Task.Item icon={<Edit />} description="+12 −3">
          Edited <Task.ItemFile>app/page.tsx</Task.ItemFile>
        </Task.Item>
      </Task.Content>
    </Task>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", {
      name: "Found the project files"
    });
    const link = canvas.getByRole("link", { name: /Read app\/layout\.tsx/ });

    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await expect(link.closest("[inert]")).toBeNull();

    trigger.focus();
    await userEvent.keyboard("{Enter}");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(args.onOpenChange).toHaveBeenCalledWith(false);
    await expect(link.closest("[inert]")).not.toBeNull();
  }
};

/** A custom trigger line with a step count. */
export const CustomTrigger: Story = {
  render: () => (
    <Task defaultOpen={true}>
      <Task.Trigger>
        <Trace.Line>
          <Trace.Title>Explored the workspace</Trace.Title>
          <Trace.Description>2 steps</Trace.Description>
        </Trace.Line>
      </Task.Trigger>
      <Task.Content>
        <Task.Item icon={<Search />}>Searched for minimumReleaseAge</Task.Item>
        <Task.Item icon={<Document />}>Read pnpm-workspace.yaml</Task.Item>
      </Task.Content>
    </Task>
  )
};

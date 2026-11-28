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

import { CheckList3, List, Trash } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useEffect, useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type { QueueProps, QueueTodo } from "./Queue";
import { Queue } from "./Queue";

const meta: Meta<QueueProps> = {
  title: "AI/Queue",
  component: Queue,
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
type Story = StoryObj<QueueProps>;

const TODOS = [
  "Add a dark variant to the theme tokens",
  "Read the theme from a cookie",
  "Add a toggle to the settings page",
  "Check contrast on the charts"
];

const todosAt = (current: number): QueueTodo[] =>
  TODOS.map((title, index) => ({
    id: title,
    title,
    status:
      index < current
        ? "completed"
        : index === current
          ? "in_progress"
          : "pending"
  }));

// The agent rewrites its todo list every 700ms, one more todo done each time.
const StreamingQueue = () => {
  const [current, setCurrent] = useState(0);
  const isStreaming = current < TODOS.length;

  useEffect(() => {
    if (!isStreaming) return;
    const timer = setTimeout(() => setCurrent(value => value + 1), 700);

    return () => clearTimeout(timer);
  }, [current, isStreaming]);

  return <Queue todos={todosAt(current)} isStreaming={isStreaming} />;
};

/** Each todo moves to the completed section when the agent is done with it. */
export const Streaming: Story = {
  render: () => <StreamingQueue />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByRole("button", { name: "4 to do" })).toBeVisible();
    await waitFor(
      async () =>
        expect(
          canvas.getByRole("button", { name: "4 completed" })
        ).toBeVisible(),
      { timeout: 10_000 }
    );
    await expect(canvas.queryByRole("button", { name: /to do/ })).toBeNull();
  }
};

/** Every status at once: completed, in progress (not streaming) and pending. */
export const Todos: Story = {
  args: { todos: todosAt(2) }
};

const DESCRIBED: QueueTodo[] = [
  {
    id: "guide",
    title: "Write the migration guide",
    description: "Cover the renamed props and the new data attributes.",
    status: "completed"
  },
  { id: "changeset", title: "Add a changeset", status: "completed" },
  {
    id: "focus",
    title: "Fix the focus ring on the select trigger",
    description: "It is clipped by overflow-hidden on the field.",
    status: "in_progress"
  },
  { id: "snapshots", title: "Update the registry snapshots" },
  {
    id: "tests",
    title: "Add tests for the combobox",
    description: "Typing, clearing and keyboard selection."
  }
];

/** A todo with a description opens to show it. One without stays a line. */
export const Descriptions: Story = {
  args: { todos: DESCRIBED },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const todo = canvas.getByRole("button", { name: /Fix the focus ring/ });

    await expect(todo).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(todo);
    await waitFor(async () =>
      expect(canvas.getByText(/clipped by overflow-hidden/)).toBeVisible()
    );
    // Closing the section hides its todos.
    await userEvent.click(canvas.getByRole("button", { name: "3 to do" }));
    await waitFor(async () =>
      expect(canvas.queryByText("Update the registry snapshots")).toBeNull()
    );
  }
};

const removed = fn();

const ComposedQueue = ({ onRemove }: { onRemove: (title: string) => void }) => {
  const [todos, setTodos] = useState(() => todosAt(1));
  const left = todos.filter(todo => todo.status !== "completed");
  const done = todos.filter(todo => todo.status === "completed");

  return (
    <Queue>
      <Queue.Section>
        <Queue.SectionTrigger>
          <Queue.SectionLabel count={left.length} label="queued" icon={<List />} />
        </Queue.SectionTrigger>
        <Queue.SectionContent>
          <Queue.List>
            {left.map(todo => (
              <Queue.Item key={todo.id} status={todo.status}>
                <Queue.ItemIndicator />
                <Queue.ItemContent>{todo.title}</Queue.ItemContent>
                <Queue.ItemActions>
                  <Queue.ItemAction
                    aria-label={`Remove ${todo.title}`}
                    onPress={() => {
                      onRemove(todo.title);
                      setTodos(prev => prev.filter(t => t.id !== todo.id));
                    }}>
                    <Trash />
                  </Queue.ItemAction>
                </Queue.ItemActions>
              </Queue.Item>
            ))}
          </Queue.List>
        </Queue.SectionContent>
      </Queue.Section>
      <Queue.Section defaultOpen={false}>
        <Queue.SectionTrigger>
          <Queue.SectionLabel
            count={done.length}
            label="done"
            icon={<CheckList3 />}
          />
        </Queue.SectionTrigger>
        <Queue.SectionContent>
          <Queue.List>
            {done.map(todo => (
              <Queue.Item key={todo.id} status={todo.status}>
                <Queue.ItemIndicator />
                <Queue.ItemContent>{todo.title}</Queue.ItemContent>
                <Queue.ItemDescription>2m</Queue.ItemDescription>
              </Queue.Item>
            ))}
          </Queue.List>
        </Queue.SectionContent>
      </Queue.Section>
    </Queue>
  );
};

/** The parts composed: custom labels, a closed section, a time and a remove button. */
export const Composed: Story = {
  render: () => <ComposedQueue onRemove={removed} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("button", { name: "1 done" })
    ).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(
      canvas.getByRole("button", { name: "Remove Check contrast on the charts" })
    );
    await expect(removed).toHaveBeenCalledWith("Check contrast on the charts");
    await expect(canvas.getByRole("button", { name: "2 queued" })).toBeVisible();
  }
};


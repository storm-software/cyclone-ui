---
title: Task
description: A Trace line for a piece of work an agent is doing that opens into the steps it took, with a status that follows the steps.
documentType: reference
tags: [component, task, ai, agent, steps, trace, collapsible]
component:
  name: task
  package: "@cyclone-ui/task"
  stories:
    - title: AI/Task
      file: components/task/src/Task.stories.tsx
---

# Task

`Task` is a piece of work an agent is doing, such as finding the project files or updating a page, shown as a [Trace](./trace.md) line. Each step the agent takes, such as a search, a read or an edit, appears under the task as a `Task.Item` when the agent takes it. The task's status follows its steps: it runs while a step runs, fails once a step failed, and is done when every step is. It opens while it runs and closes when it is done, unless the reader opened or closed it.

It is the Cyclone UI version of the [AI SDK Elements](https://elements.ai-sdk.dev) Task component, rebuilt on `Trace` like the [shadcn/ui](https://ui.shadcn.com/docs/ai-elements) one. The exports keep their AI SDK Elements names. [Chain of Thought](./chain-of-thought.md) is built on it.

## Task or Plan

Both are a list of steps under a line. The difference is when the steps are known.

|               | [Plan](./plan.md)                      | Task                                            |
| ------------- | -------------------------------------- | ----------------------------------------------- |
| Steps         | Every step, from the start             | Each step, once the agent takes it              |
| Pending steps | Yes, waiting their turn                | None                                            |
| Title         | The goal, with progress: "2 of 4 done" | What the agent is doing, then what it did       |
| Per reply     | One plan                               | One or more tasks, each closing when it is done |

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add task
pnpm install
```

- **File:** `Task.tsx`. The CLI writes it to `<path>/task/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Trace](./trace.md), [Accordion](./accordion.md), [Body Text](./body-text.md), [Collapsible](./collapsible.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Inline Code Text](./inline-code-text.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/constants` and `@tamagui/core`.

## Import

```tsx
import { Task, useTask } from "@cyclone-ui/task";
```

## Usage

Write the title in the present tense while the task runs and in the past tense once it is done. Give a step a `status` while it runs or after it failed; a done step has none:

```tsx
<Task>
  <Task.Trigger
    title={running ? "Updating the page metadata" : "Updated the page metadata"}
  />
  <Task.Content>
    <Task.Item>
      Edited <Task.ItemFile>app/layout.tsx</Task.ItemFile>
    </Task.Item>
    <Task.Item status={running ? "running" : undefined}>
      {running ? "Editing" : "Edited"} <Task.ItemFile>app/page.tsx</Task.ItemFile>
    </Task.Item>
  </Task.Content>
</Task>
```

| Steps                   | Task status | Title                              |
| ----------------------- | ----------- | ---------------------------------- |
| A step is still running | `running`   | Updating the page metadata         |
| A step failed           | `error`     | Failed to update the page metadata |
| Every step is done      | None        | Updated the page metadata          |

Put several tasks in one [`Trace`](./trace.md), a line each. With the AI SDK, stream each task as a data part with its own `id`: the SDK replaces a data part with the same `id`, so the task updates in place.

```tsx
<Trace>
  {message.parts
    .filter(part => part.type === "data-task")
    .map(part => (
      <Task key={part.id}>
        <Task.Trigger title={part.data.title} />
        <Task.Content>
          {part.data.steps.map(step => (
            <Task.Item
              key={step.title}
              status={step.status === "done" ? undefined : step.status}>
              {step.title}
            </Task.Item>
          ))}
        </Task.Content>
      </Task>
    ))}
</Trace>
```

Between two steps, no step runs, so the task would read as done for a moment. Set `isStreaming` while the agent is still working on the task to keep it running.

A step can have an icon for its kind and a description, and it can link to what it read by wrapping it in a `Trace.Link`:

```tsx
<Task.Item icon={<Search />} description="3 results">
  Searched for <Task.ItemFile>generateMetadata</Task.ItemFile>
</Task.Item>
<Trace.Link href="/files/app/layout.tsx">
  <Task.Item icon={<Document />}>
    Read <Task.ItemFile>app/layout.tsx</Task.ItemFile>
  </Task.Item>
</Trace.Link>
```

## Anatomy

```tsx
<Task>
  <Task.Trigger />
  <Task.Content>
    <Task.Item>
      <Task.ItemFile />
    </Task.Item>
  </Task.Content>
</Task>
```

| Part            | Renders                                                                                   | Purpose                                                                |
| --------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `Task`          | A [`Trace.Collapsible`](./trace.md#tracecollapsible)                                      | Holds the state and counts the steps.                                  |
| `Task.Trigger`  | A `Trace.Collapsible.Trigger` with a `Trace.Line`: a spinner, alert or check, and `title` | Opens and closes the steps.                                            |
| `Task.Content`  | `Trace.Collapsible.Content` with a `Trace`                                                | The steps, indented under a rule. They stay mounted while closed.      |
| `Task.Item`     | A `Trace.Line` with an optional icon, a title and an optional description                 | One step. Its `status` counts toward the task's.                       |
| `Task.ItemFile` | An [`InlineCodeText`](./inline-code-text.md) in the line's color, without a fill          | A file name or symbol inside a step's title.                           |

## Examples

The examples are the stories in [`Task.stories.tsx`](../../../components/task/src/Task.stories.tsx).

| Stories         | What they show                                                                                                                                                             |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Streaming`     | Two tasks whose steps appear one by one. The play function checks that the first task is open while it runs and that both are closed and in the past tense at the end. |
| `Running`       | A task with a running step: the title and the file name shimmer.                                                                                                           |
| `Failed`        | A task with a failed step, in the danger color. The play function opens it.                                                                                               |
| `Done`          | Steps with icons, descriptions and a link, open as the reader's choice. The play function closes it with `Enter` and checks that the hidden link is inert.               |
| `CustomTrigger` | `Task.Trigger` children in place of the default line, with a step count.                                                                                                   |

## Props

### Task

`Task` accepts the [`Trace.Collapsible`](./trace.md#tracecollapsible) props and adds these props:

| Prop           | Type                      | Default | Description                                                                                                       |
| -------------- | ------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| `isStreaming`  | `boolean`                 | `false` | Keeps the task running between steps, while the agent is still working on it.                                     |
| `open`         | `boolean`                 | None    | Whether the steps are shown. Setting it makes the task controlled: it no longer opens and closes with its status. |
| `defaultOpen`  | `boolean`                 | None    | Whether the task starts open, as if the reader had chosen. Without it, the task is open while it runs.           |
| `onOpenChange` | `(open: boolean) => void` | None    | Called with the new state when the reader opens or closes the task.                                               |

### Task.Trigger

`Task.Trigger` accepts the `Trace.Collapsible.Trigger` props and adds this prop:

| Prop    | Type        | Default | Description                                                                                       |
| ------- | ----------- | ------- | ------------------------------------------------------------------------------------------------- |
| `title` | `ReactNode` | None    | What the agent is doing, then what it did. Children replace the whole line, keeping the trigger. |

### Task.Content

`Task.Content` accepts the `Trace.Collapsible.Content` props.

### Task.Item

`Task.Item` accepts the [`Trace.Line`](./trace.md#traceline) props, including `status`, and adds these props:

| Prop          | Type        | Default | Description                                                     |
| ------------- | ----------- | ------- | --------------------------------------------------------------- |
| `icon`        | `ReactNode` | None    | An icon before the title, such as the kind of step.             |
| `description` | `ReactNode` | None    | Secondary text after the title, such as a count or a duration.  |
| `children`    | `ReactNode` | None    | The title.                                                      |

### Task.ItemFile

`Task.ItemFile` accepts the [`InlineCodeText`](./inline-code-text.md) props. It defaults to `size="xs"`.

### useTask

`useTask()` returns the state of the nearest `Task`. It throws outside one.

| Field        | Type                                         | Description                                                                                        |
| ------------ | -------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `isOpen`     | `boolean`                                    | Whether the steps are shown.                                                                       |
| `setIsOpen`  | `(open: boolean) => void`                    | Shows or hides the steps, as the reader's choice.                                                  |
| `status`     | `"running" \| "error" \| undefined`          | `running` while a step runs or waits (or `isStreaming` is set), `error` once one failed, else none. |
| `itemCount`  | `number`                                     | The number of steps.                                                                               |
| `errorCount` | `number`                                     | The number of failed steps.                                                                        |

The exported types are `TaskProps`, `TaskTriggerProps`, `TaskContentProps`, `TaskItemProps`, `TaskItemFileProps`, and `TaskContextValue`. For React Server Components, the parts are also exported as `TaskTrigger`, `TaskContent`, `TaskItem`, and `TaskItemFile`.

## Behavior

- The task runs while any step is `running` or `pending`, or while `isStreaming` is `true`. Once nothing runs, it fails if any step is `error`, and is done otherwise.
- The line shows a spinner while the task runs, an alert when it failed, and a check when it is done. A running title shimmers, and a failed task is drawn in the danger color.
- The task opens when it starts running and closes when it stops. Once the reader opens or closes it, it stays the way they left it.
- The steps stay mounted while the task is closed, so they keep counting toward its status and keep their own open state. While closed they are `inert`: out of the tab order and the accessibility tree.
- `Task.ItemFile` has no fill, so a running title's shimmer shows through the file name.

## Variants and states

- **Status:** running, failed, or done, from the steps.
- **Open:** follows the status, the reader's choice, or the `open` prop.
- **Step:** each `Task.Item` is done, `running`, `error`, or `pending`.

## Accessibility

- The trigger is a button with `aria-expanded`, named by the title. Say the status in the title too: "Updating …", "Updated …", "Failed to update …".
- The icons are hidden from screen readers.
- Closed steps are `inert`, so keyboard and screen reader users don't reach links inside a closed task.
- The shimmer stops when the reader prefers reduced motion.

## Related

- [Plan](./plan.md)
- [Chain of Thought](./chain-of-thought.md)
- [Trace](./trace.md)
- [Queue](./queue.md)

## Source

- [`components/task/src/Task.tsx`](../../../components/task/src/Task.tsx)
- [`components/task/src/Task.stories.tsx`](../../../components/task/src/Task.stories.tsx)

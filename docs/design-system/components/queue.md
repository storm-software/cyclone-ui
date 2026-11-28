---
title: Queue
description: An agent's todo list as Trace lines, split into a "to do" and a "completed" section, with a status icon per todo and descriptions that open.
documentType: reference
tags: [component, queue, ai, agent, todo, trace, collapsible]
component:
  name: queue
  package: "@cyclone-ui/queue"
  stories:
    - title: AI/Queue
      file: components/queue/src/Queue.stories.tsx
---

# Queue

`Queue` is an agent's todo list, built from [Trace](./trace.md) lines. The todos sit in two sections that open and close, "2 to do" and "3 completed", and the icon on each todo shows its status. The agent updates the list as it works, so a todo moves from one section to the other when it is done.

It is the Cyclone UI version of the [AI SDK Elements](https://elements.ai-sdk.dev) Queue component, rebuilt on `Trace` like the [shadcn/ui](https://ui.shadcn.com/docs/ai-elements) one. The exports keep their AI SDK Elements names.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add queue
pnpm install
```

- **File:** `Queue.tsx`. The CLI writes it to `<path>/queue/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Trace](./trace.md), [Accordion](./accordion.md), [Body Text](./body-text.md), [Button](./button.md), [Collapsible](./collapsible.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), [Tooltip](./tooltip.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { Queue } from "@cyclone-ui/queue";
import type { QueueTodo } from "@cyclone-ui/queue";
```

## Usage

Pass the todo list as `todos`. `Queue` splits it into the two sections:

```tsx
<Queue todos={todos} isStreaming={streaming} />
```

The agent writes its todos with a tool, such as `writeTodos`. Each call sends the whole list, so render the last call and skip one whose input is still streaming:

```tsx
const todos = message.parts
  .filter(part => part.type === "tool-writeTodos")
  .filter(part => part.state !== "input-streaming")
  .at(-1)?.input?.todos;

<Queue
  isStreaming={streaming}
  todos={todos?.map(todo => ({
    id: todo.content,
    title: todo.content,
    status: todo.status
  }))}
/>;
```

| Todo status   | Section   | Icon          | Line status                       |
| ------------- | --------- | ------------- | --------------------------------- |
| `pending`     | To do     | Empty circle  | None                              |
| `in_progress` | To do     | Dotted circle | `running` while `isStreaming` is set |
| `completed`   | Completed | Check         | None                              |

A todo with a `description` opens to show it. A todo without one stays a line.

To change the sections, compose the parts:

```tsx
<Queue isStreaming={streaming}>
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
                onPress={() => remove(todo.id)}>
                <Trash />
              </Queue.ItemAction>
            </Queue.ItemActions>
          </Queue.Item>
        ))}
      </Queue.List>
    </Queue.SectionContent>
  </Queue.Section>
</Queue>
```

## Anatomy

```tsx
<Queue>
  <Queue.Section>
    <Queue.SectionTrigger>
      <Queue.SectionLabel />
    </Queue.SectionTrigger>
    <Queue.SectionContent>
      <Queue.List>
        <Queue.Item>
          <Queue.ItemIndicator />
          <Queue.ItemContent />
          <Queue.ItemDescription />
          <Queue.ItemActions>
            <Queue.ItemAction />
          </Queue.ItemActions>
        </Queue.Item>
      </Queue.List>
    </Queue.SectionContent>
  </Queue.Section>
</Queue>
```

| Part                    | Renders                                                                 | Purpose                                                             |
| ----------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `Queue`                 | A [`Trace`](./trace.md), with the default sections when `todos` is set | Holds `isStreaming`.                                                |
| `Queue.Section`         | A `Trace.Collapsible`, open by default                                  | One section.                                                        |
| `Queue.SectionTrigger`  | `Trace.Collapsible.Trigger`                                             | Opens and closes the section.                                       |
| `Queue.SectionLabel`    | A `Trace.Line` with an icon and "`count` `label`"                       | The section's line: "2 to do".                                      |
| `Queue.SectionContent`  | `Trace.Collapsible.Content`                                             | The section's todos, indented under a rule.                         |
| `Queue.List`            | A `Trace`                                                               | The todos.                                                          |
| `Queue.Item`            | A `Trace.Line`                                                          | One todo.                                                           |
| `Queue.ItemIndicator`   | A `Trace.Icon` with an icon for the todo's status                       | Pending, in progress, or completed. Children replace the icon.      |
| `Queue.ItemContent`     | `Trace.Title`                                                           | The todo's title.                                                   |
| `Queue.ItemDescription` | `Trace.Description`                                                     | Secondary text after the title, such as a time.                     |
| `Queue.ItemActions`     | A row `View`                                                            | Buttons after the title.                                            |
| `Queue.ItemAction`      | A ghost, circular [`Button`](./button.md) as tall as the line           | An icon button, such as remove.                                     |

## Examples

The examples are the stories in [`Queue.stories.tsx`](../../../components/queue/src/Queue.stories.tsx).

| Stories        | What they show                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Streaming`    | The agent rewrites the list, one more todo done each time. The play function waits for "4 completed" and checks that the to-do section is gone. |
| `Todos`        | Completed, in-progress and pending todos without streaming.                                                                                      |
| `Descriptions` | Todos with descriptions. The play function opens one, then closes the "3 to do" section.                                                         |
| `Composed`     | Custom labels, a closed section, a time per completed todo and a remove button. The play function removes a todo.                               |

## Props

### Queue

`Queue` accepts the [`Trace`](./trace.md) props and adds these props:

| Prop          | Type          | Default | Description                                                                                         |
| ------------- | ------------- | ------- | --------------------------------------------------------------------------------------------------- |
| `todos`       | `QueueTodo[]` | None    | The todo list, shown in a "N to do" and a "N completed" section. Children replace the sections.     |
| `isStreaming` | `boolean`     | `false` | Whether the agent is still working, which makes the todo in progress shimmer.                       |

### QueueTodo

| Field         | Type                                         | Description                          |
| ------------- | -------------------------------------------- | ------------------------------------ |
| `id`          | `string`                                     | A unique key.                        |
| `title`       | `string`                                     | The todo.                            |
| `description` | `string`                                     | Shown when the reader opens the todo. |
| `status`      | `"pending" \| "in_progress" \| "completed"`  | Defaults to `pending`.               |

### Queue.Section

`Queue.Section` accepts the [`Trace.Collapsible`](./trace.md#tracecollapsible) props. `defaultOpen` defaults to `true`.

### Queue.SectionLabel

`Queue.SectionLabel` accepts the [`Trace.Line`](./trace.md#traceline) props and adds these props:

| Prop    | Type        | Default  | Description                                       |
| ------- | ----------- | -------- | ------------------------------------------------- |
| `count` | `number`    | None     | The number of todos, shown before the label.      |
| `label` | `string`    | Required | What the todos are: "to do", "completed".         |
| `icon`  | `ReactNode` | None     | An icon before the label.                         |

### Queue.Item

`Queue.Item` accepts the `Trace.Line` props except `status`, and adds this prop:

| Prop     | Type                                         | Default     | Description                                                     |
| -------- | -------------------------------------------- | ----------- | --------------------------------------------------------------- |
| `status` | `"pending" \| "in_progress" \| "completed"`  | `"pending"` | The todo's status, shown by `Queue.ItemIndicator`.              |

### Queue.ItemAction

`Queue.ItemAction` accepts the [`Button`](./button.md) props. Its children are the icon. Name it with `aria-label`, and add a `tooltip` if the icon is not obvious.

`Queue.SectionTrigger`, `Queue.SectionContent`, `Queue.ItemContent`, and `Queue.ItemDescription` are the `Trace` parts they render and accept their props. `Queue.List` accepts the `Trace` props, `Queue.ItemIndicator` the `Trace.Icon` props, and `Queue.ItemActions` the `View` props.

The exported types are `QueueProps`, `QueueTodo`, `QueueTodoStatus`, `QueueSectionProps`, `QueueSectionTriggerProps`, `QueueSectionLabelProps`, `QueueSectionContentProps`, `QueueListProps`, `QueueItemProps`, `QueueItemIndicatorProps`, `QueueItemContentProps`, `QueueItemDescriptionProps`, `QueueItemActionsProps`, and `QueueItemActionProps`. For React Server Components, the parts are also exported as `QueueSection`, `QueueSectionTrigger`, `QueueSectionLabel`, `QueueSectionContent`, `QueueList`, `QueueItem`, `QueueItemIndicator`, `QueueItemContent`, `QueueItemDescription`, `QueueItemActions`, and `QueueItemAction`.

## Behavior

- With `todos`, the to-do section lists the pending and in-progress todos and the completed section lists the rest. A section with no todos is not rendered.
- Both sections start open. A todo moves to the completed section when its status changes, and its check draws itself in.
- The todo in progress shimmers only while `isStreaming` is `true`, so it stops when the agent stops.
- A todo with a `description` is a collapsible line. Buttons can't sit inside its trigger, so don't add `Queue.ItemActions` to a todo that opens.

## Variants and states

- **Todo:** `pending`, `in_progress`, or `completed`.
- **Section:** open or closed.
- **Streaming:** the todo in progress shimmers, or nothing does.

## Accessibility

- Each section's trigger is a button with `aria-expanded`, named by its label: "2 to do".
- The status icons are hidden from screen readers, and the section a todo is in says whether it is done.
- A todo with a description is a button with `aria-expanded`, named by its title.
- `Queue.ItemAction` has no visible text: give it an `aria-label`, such as "Remove Add a changeset".
- The shimmer stops when the reader prefers reduced motion.

## Related

- [Plan](./plan.md)
- [Task](./task.md)
- [Trace](./trace.md)

## Source

- [`components/queue/src/Queue.tsx`](../../../components/queue/src/Queue.tsx)
- [`components/queue/src/Queue.stories.tsx`](../../../components/queue/src/Queue.stories.tsx)

---
title: Checkpoint
description: A point in an AI conversation that the person can return to. A label between two rules after a turn, with a Restore button that drops every later message.
documentType: reference
tags: [component, checkpoint, chat, ai, separator, marker, restore]
component:
  name: checkpoint
  package: "@cyclone-ui/checkpoint"
  stories:
    - title: AI/Checkpoint
      file: components/checkpoint/src/Checkpoint.stories.tsx
---

# Checkpoint

A `Checkpoint` marks a point in the conversation that the person can return to. It sits after a turn, as a label between two rules, with a Restore button. Restoring keeps that turn and drops every message after it; the person then sends a new message to continue from there.

It is the Cyclone UI version of the shadcn AI Elements Checkpoint. It follows the shadcn Marker layouts (separator, border and inline) with a Cyclone [Divider](./divider.md), [Body Text](./body-text.md) and [Button](./button.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add checkpoint
pnpm install
```

- **File:** `Checkpoint.tsx`. The CLI writes it to `<path>/checkpoint/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Divider](./divider.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/helpers-tamagui`.

## Import

```tsx
import { Checkpoint } from "@cyclone-ui/checkpoint";
```

## Usage

Render a checkpoint after the turn it restores:

```tsx
<Checkpoint>
  <Checkpoint.Icon />
  Button renamed
  <Checkpoint.Trigger
    tooltip="Restore the chat to this point"
    onPress={() => restore(message.id)}
  />
</Checkpoint>
```

Restore replaces the thread with the messages up to and including that turn:

```tsx
const restore = (messageId: string) => {
  const index = messages.findIndex(message => message.id === messageId);
  if (index !== -1) setMessages(messages.slice(0, index + 1));
};
```

Leave out the trigger on the last checkpoint, which has nothing after it to drop. Without a trigger or an icon, a separator `Checkpoint` is a labeled divider, such as a date.

## Anatomy

```tsx
<Checkpoint>
  <Checkpoint.Icon />
  Label
  <Checkpoint.Trigger />
</Checkpoint>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Checkpoint` | A row `View`, between two 1px `hairline` [`Divider`](./divider.md) rules (`separator`) | Lays out the checkpoint. Text children are `sm` `BodyText` in the `subtle` color. |
| `Checkpoint.Icon` | A 16px `<span>` in the `subtle` color, hidden from screen readers | Marks the row as a checkpoint. Defaults to the `BackupRestore` icon. |
| `Checkpoint.Trigger` | A small `tertiary` [`Button`](./button.md), labeled `Restore` by default | Restores the conversation to this point. |

## Examples

The examples are the stories in [`Checkpoint.stories.tsx`](../../../components/checkpoint/src/Checkpoint.stories.tsx).

| Stories | What they show |
| --- | --- |
| `Base` | A checkpoint with a tooltip on its trigger. The play function tabs to Restore, checks that the tooltip shows, and presses it with Enter. |
| `Variants` | The `separator`, `border` and `inline` layouts, and a separator with only a label ("Today"). |
| `InConversation` | Two turns, each followed by a checkpoint. The last one has no trigger. The play function restores the first one and checks that the later messages are gone. |

## Props

### Checkpoint

`Checkpoint` accepts the `View` props and adds this prop:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"separator" \| "border" \| "inline"` | `"separator"` | `separator` centers the row between two rules, `border` puts a rule under it, and `inline` has no rule. |

### Checkpoint.Icon

`Checkpoint.Icon` accepts the `Text` props. Pass an icon as its child to replace the default; it is sized to 16px and colored `subtle` unless it sets its own `size` or `color`.

### Checkpoint.Trigger

`Checkpoint.Trigger` accepts the [`Button`](./button.md) props, such as `onPress`, `tooltip` and `aria-label`. Its children default to `Restore`, and it defaults to `size="sm"`.

A text label stays the button's accessible name when it has a `tooltip` (a `Button` otherwise names itself after its tooltip). Pass an `aria-label` that contains the label for more context, such as "Restore to Button renamed".

The exported types are `CheckpointProps`, `CheckpointVariant`, `CheckpointIconProps`, and `CheckpointTriggerProps`. For React Server Components, the parts are also exported as `CheckpointIcon` and `CheckpointTrigger`.

### From AI SDK Elements

| AI SDK Elements | Checkpoint |
| --- | --- |
| `Checkpoint` | `Checkpoint`, a separator between two rules instead of a row followed by a `Separator` |
| `CheckpointIcon` | `Checkpoint.Icon`, a restore clock instead of a bookmark by default |
| `CheckpointTrigger` (`tooltip`) | `Checkpoint.Trigger` (`tooltip`) |

## Behavior

- In the `separator` layout, the rules share the space left beside the content and are at least 16px wide. A long label wraps; the icon and the trigger don't shrink.
- The trigger's tooltip shows after the pointer rests on it for two seconds, or right away on keyboard focus, and never on touch screens.

## Variants and states

- **Layout:** `separator`, `border`, or `inline`.
- **Restorable:** with or without a `Checkpoint.Trigger`.

## Accessibility

- A checkpoint has no role: the rules are decorative, and the label is read as text. Don't add `role="separator"`, which would hide the label from screen readers.
- `Checkpoint.Icon` is hidden from screen readers.
- Every Restore button is named "Restore" by default. When a thread has several checkpoints, give each trigger an `aria-label` that names its checkpoint, such as "Restore to Button renamed".

## Related

- [Prompt Message](./prompt-message.md)
- [Divider](./divider.md)
- [Button](./button.md)

## Source

- [`components/checkpoint/src/Checkpoint.tsx`](../../../components/checkpoint/src/Checkpoint.tsx)
- [`components/checkpoint/src/Checkpoint.stories.tsx`](../../../components/checkpoint/src/Checkpoint.stories.tsx)

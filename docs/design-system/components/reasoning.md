---
title: Reasoning
description: A Trace line for a model's thinking that reads "Thinking" while it streams and "Thought for 5s" after, and opens to show the thinking text.
documentType: reference
tags: [component, reasoning, ai, agent, thinking, trace, collapsible]
component:
  name: reasoning
  package: "@cyclone-ui/reasoning"
  stories:
    - title: AI/Reasoning
      file: components/reasoning/src/Reasoning.stories.tsx
---

# Reasoning

`Reasoning` shows a model's thinking as a [Trace](./trace.md) line. While the model thinks, the line reads "Thinking" with a spinner and a shimmer, and it opens to show the text as it streams in. When the model is done, the line reads "Thought for 5s" and closes. If the reader opens or closes it, their choice wins.

It is the Cyclone UI version of the [AI SDK Elements](https://elements.ai-sdk.dev) Reasoning component, rebuilt on `Trace` like the [shadcn/ui](https://ui.shadcn.com/docs/ai-elements) one. The exports and props keep their AI SDK Elements names.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add reasoning
pnpm install
```

- **File:** `Reasoning.tsx`. The CLI writes it to `<path>/reasoning/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Trace](./trace.md), [Accordion](./accordion.md), [Body Text](./body-text.md), [Collapsible](./collapsible.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { Reasoning, useReasoning } from "@cyclone-ui/reasoning";
```

## Usage

Pass the thinking text as children. The line follows `isStreaming`:

```tsx
<Reasoning isStreaming={streaming}>{text}</Reasoning>
```

Some models send several reasoning parts in one message. Render each one as a line in the same [`Trace`](./trace.md):

```tsx
<Trace>
  {message.parts
    .filter(part => part.type === "reasoning")
    .map((part, index) => (
      <Reasoning
        key={index}
        isStreaming={streaming && part.state === "streaming"}>
        {part.text}
      </Reasoning>
    ))}
</Trace>
```

Without a `duration`, `Reasoning` times the thinking itself, from when `isStreaming` turns on to when it turns off. A message loaded from history has no such time, so its line reads "Thought". To show the time anyway, measure it on the server, send it with the message, and pass it as `duration` in seconds:

```tsx
<Reasoning duration={message.metadata.reasoningSeconds}>{text}</Reasoning>
```

For a custom line, compose the parts. `getThinkingMessage` changes the title, and children of `Reasoning.Trigger` replace the whole line:

```tsx
<Reasoning isStreaming={streaming}>
  <Reasoning.Trigger
    getThinkingMessage={(isStreaming, duration) =>
      isStreaming ? "Reasoning" : `Reasoned for ${duration} seconds`
    }
  />
  <Reasoning.Content>{text}</Reasoning.Content>
</Reasoning>
```

## Anatomy

```tsx
<Reasoning>
  <Reasoning.Trigger />
  <Reasoning.Content />
</Reasoning>
```

| Part                | Renders                                                                                                   | Purpose                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `Reasoning`         | A [`Trace.Collapsible`](./trace.md#tracecollapsible), or a plain `Trace.Line` when the text is empty       | Holds the state. With string children, it renders both parts.   |
| `Reasoning.Trigger` | A `Trace.Collapsible.Trigger` with a `Trace.Line`: a spinner or a check, and the title                    | Opens and closes the thinking.                                  |
| `Reasoning.Content` | `Trace.Collapsible.Content`                                                                               | The thinking, indented under a rule. A string keeps its breaks. |

## Examples

The examples are the stories in [`Reasoning.stories.tsx`](../../../components/reasoning/src/Reasoning.stories.tsx). The streaming stories stream the text in with timers.

| Stories        | What they show                                                                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Streaming`    | The text streams in. The play function checks that the line reads "Thinking" and is open, then reads "Thought for Ns" and is closed.                                 |
| `ReaderChoice` | The play function closes the line while it streams, checks that it stays closed when the thinking ends, then opens it again with `Enter`, checking `onOpenChange`. |
| `Done`         | A finished part with `duration={12}`. The play function opens it.                                                                                                    |
| `DefaultOpen`  | A finished part without a duration, open from the start. It reads "Thought".                                                                                         |
| `Empty`        | Streaming with no text yet: a plain line that is not a button.                                                                                                       |
| `SeveralParts` | Two reasoning parts that stream one after the other, as two lines in one `Trace`.                                                                                    |
| `Composed`     | A custom title from `getThinkingMessage`, and a custom line that reads `useReasoning()`.                                                                             |

## Props

### Reasoning

`Reasoning` accepts the [`Trace.Collapsible`](./trace.md#tracecollapsible) props and adds these props:

| Prop           | Type                      | Default | Description                                                                                                                                  |
| -------------- | ------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `isStreaming`  | `boolean`                 | `false` | Whether the model is still thinking.                                                                                                         |
| `duration`     | `number`                  | None    | How long the model thought, in seconds. Without it, the time from when `isStreaming` turns on to when it turns off is shown.                 |
| `open`         | `boolean`                 | None    | Whether the thinking is shown. Setting it makes the line controlled: it no longer opens and closes with `isStreaming`.                       |
| `defaultOpen`  | `boolean`                 | None    | Whether the line starts open, as if the reader had chosen. Without it, the line is open while `isStreaming` is `true` and closed otherwise. |
| `onOpenChange` | `(open: boolean) => void` | None    | Called with the new state when the reader opens or closes the line.                                                                          |
| `children`     | `ReactNode`               | None    | The thinking text, shown under a default trigger, or the `Reasoning.Trigger` and `Reasoning.Content` parts. An empty string renders a line with nothing to open. |

### Reasoning.Trigger

`Reasoning.Trigger` accepts the `Trace.Collapsible.Trigger` props and adds this prop:

| Prop                 | Type                                                   | Default                                                    | Description                                         |
| -------------------- | ------------------------------------------------------ | ---------------------------------------------------------- | --------------------------------------------------- |
| `getThinkingMessage` | `(isStreaming: boolean, duration?: number) => ReactNode` | "Thinking", then "Thought for 5s" (or "Thought" without a duration) | The title. Children replace the whole line instead. |

### Reasoning.Content

`Reasoning.Content` is `Trace.Collapsible.Content` and accepts its props.

### useReasoning

`useReasoning()` returns the state of the nearest `Reasoning`. It throws outside one.

| Field         | Type                      | Description                                           |
| ------------- | ------------------------- | ----------------------------------------------------- |
| `isStreaming` | `boolean`                 | Whether the model is still thinking.                  |
| `isOpen`      | `boolean`                 | Whether the thinking is shown.                        |
| `setIsOpen`   | `(open: boolean) => void` | Shows or hides the thinking, as the reader's choice.  |
| `duration`    | `number \| undefined`     | How long the model thought, in seconds, once known.   |

The exported types are `ReasoningProps`, `ReasoningTriggerProps`, `ReasoningContentProps`, and `ReasoningContextValue`. For React Server Components, the parts are also exported as `ReasoningTrigger` and `ReasoningContent`.

## Behavior

- While `isStreaming` is `true`, the line reads "Thinking", shows a spinner, and its title shimmers. After, it shows a check and reads "Thought for Ns".
- The line opens when the thinking starts and closes when it ends. Once the reader opens or closes it, it stays the way they left it.
- The measured duration is rounded up to whole seconds. It is measured again each time `isStreaming` turns on and off.
- With an empty string as children, the line is not a button: there is nothing to open until the model writes something. It becomes a collapsible line when text arrives.

## Variants and states

- **Streaming:** "Thinking" with a spinner and a shimmer, or done with a check.
- **Open:** follows the stream, the reader's choice, or the `open` prop.
- **Empty:** a plain line before any text arrives.

## Accessibility

- The trigger is a button with `aria-expanded`, named by its title: "Thinking" or "Thought for 5s". The icons are hidden from screen readers.
- The shimmer stops when the reader prefers reduced motion; the title still says "Thinking".
- Opening and closing work with `Enter` and `Space`, and the trigger shows the `ring-offset` focus ring.

## Related

- [Trace](./trace.md)
- [Chain of Thought](./chain-of-thought.md)
- [Task](./task.md)
- [Collapsible](./collapsible.md)

## Source

- [`components/reasoning/src/Reasoning.tsx`](../../../components/reasoning/src/Reasoning.tsx)
- [`components/reasoning/src/Reasoning.stories.tsx`](../../../components/reasoning/src/Reasoning.stories.tsx)

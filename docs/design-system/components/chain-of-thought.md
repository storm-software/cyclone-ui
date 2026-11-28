---
title: Chain of Thought
description: A summary Trace line that expands into the steps behind an agent's answer, with a status and title that follow the steps, search results as tags, and captioned images.
documentType: reference
tags: [component, chain-of-thought, ai, agent, steps, research, trace, collapsible]
component:
  name: chain-of-thought
  package: "@cyclone-ui/chain-of-thought"
  stories:
    - title: AI/ChainOfThought
      file: components/chain-of-thought/src/ChainOfThought.stories.tsx
---

# Chain of Thought

`ChainOfThought` is a summary line that expands into the steps an agent took, built from [Trace](./trace.md) lines. The summary says what happened, like "Researched in 3 steps", and the steps sit inside it, each a line of its own. The summary follows the steps: it reads "Researching" and shimmers while they run, counts the failed ones, and turns the danger color when any failed. It opens while the steps run and closes when they are done, unless the reader opened or closed it.

It is the Cyclone UI version of the [AI SDK Elements](https://elements.ai-sdk.dev) Chain of Thought component, rebuilt on `Trace` like the [shadcn/ui](https://ui.shadcn.com/docs/ai-elements) one. The exports and props keep their AI SDK Elements names. It is built on [Task](./task.md), which tracks the steps' statuses.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add chain-of-thought
pnpm install
```

- **File:** `ChainOfThought.tsx`. The CLI writes it to `<path>/chain-of-thought/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Task](./task.md), [Trace](./trace.md), [Tag](./tag.md), [Accordion](./accordion.md), [Body Text](./body-text.md), [Collapsible](./collapsible.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Inline Code Text](./inline-code-text.md), [Ripple Animation](./ripple-animation.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { ChainOfThought } from "@cyclone-ui/chain-of-thought";
```

## Usage

Render each step as a `ChainOfThought.Step`, with its label in the tense of its status. A step with children opens to show them:

```tsx
<ChainOfThought>
  <ChainOfThought.Header />
  <ChainOfThought.Content>
    <ChainOfThought.Step label="Read the build log for dpl_8Kx2" />
    <ChainOfThought.Step label="Searched the web for next.js image cache key">
      <ChainOfThought.SearchResults>
        {results.map(result => (
          <ChainOfThought.SearchResult key={result.url}>
            {new URL(result.url).hostname}
          </ChainOfThought.SearchResult>
        ))}
      </ChainOfThought.SearchResults>
    </ChainOfThought.Step>
    <ChainOfThought.Step
      label="Searching the code for cacheKey"
      status="active"
    />
  </ChainOfThought.Content>
</ChainOfThought>
```

| Step              | `status`     | Label                         |
| ----------------- | ------------ | ----------------------------- |
| Running           | `"active"`   | Searching for …               |
| Waiting its turn  | `"pending"`  | Search for …                  |
| Done              | `"complete"` | Searched for …                |
| Failed            | `"error"`    | Failed to search for …        |

With the AI SDK, render each tool part as a step: `active` while its input streams or it runs, `complete` with its output, and `error` with its error text. Between two tool calls no step runs, so set `isStreaming` while the agent is still working, and turn it off when the reply starts:

```tsx
<ChainOfThought isStreaming={streaming && !answering}>
  <ChainOfThought.Header />
  <ChainOfThought.Content>
    {toolParts.map(part => (
      <ChainOfThought.Step
        key={part.toolCallId}
        label={labelFor(part)}
        status={
          part.state === "output-available"
            ? "complete"
            : part.state === "output-error"
              ? "error"
              : "active"
        }>
        {part.state === "output-error" && part.errorText}
      </ChainOfThought.Step>
    ))}
  </ChainOfThought.Content>
</ChainOfThought>
```

To word the summary for your agent, pass children to `ChainOfThought.Header`. Read the counts with [`useTask()`](./task.md#usetask) in a component inside `ChainOfThought`:

```tsx
<ChainOfThought.Header>
  {running ? "Planning the layout" : "Planned the layout"}
</ChainOfThought.Header>
```

## Anatomy

```tsx
<ChainOfThought>
  <ChainOfThought.Header />
  <ChainOfThought.Content>
    <ChainOfThought.Step>
      <ChainOfThought.SearchResults>
        <ChainOfThought.SearchResult />
      </ChainOfThought.SearchResults>
      <ChainOfThought.Image />
    </ChainOfThought.Step>
  </ChainOfThought.Content>
</ChainOfThought>
```

| Part                          | Renders                                                                                       | Purpose                                                              |
| ----------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `ChainOfThought`              | A [`Task`](./task.md): a `Trace.Collapsible`                                                  | Holds the state and counts the steps.                                |
| `ChainOfThought.Header`       | `Task.Trigger`: a spinner, alert or check, and the summary                                    | Opens and closes the steps.                                          |
| `ChainOfThought.Content`      | `Task.Content`: `Trace.Collapsible.Content` with a `Trace`                                    | The steps, indented under a rule. They stay mounted while closed.    |
| `ChainOfThought.Step`         | A `Task.Item` line, in a `Trace.Collapsible` when it has children                            | One step.                                                            |
| `ChainOfThought.SearchResults` | A row `View` that wraps                                                                      | The results of a search step.                                        |
| `ChainOfThought.SearchResult` | A `surface` [`Tag`](./tag.md)                                                                 | One result, such as a hostname or a file name.                       |
| `ChainOfThought.Image`        | A `<figure>`: the image on a `sunken` panel, and an optional `<figcaption>`                  | An image a step produced or read, such as a chart or a screenshot.   |

## Examples

The examples are the stories in [`ChainOfThought.stories.tsx`](../../../components/chain-of-thought/src/ChainOfThought.stories.tsx).

| Stories     | What they show                                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Streaming` | Three steps that appear one by one: a build log in a [Code Block](./code-block.md), web results and files as tags. The play function checks "Researching" open, then "Researched in 3 steps" closed. |
| `Failed`    | A failed step with its error. The summary reads "Researched in 3 steps, 1 failed" in the danger color.                                                                                |
| `Done`      | A finished chain, closed. The play function opens it and a step, closes and reopens the summary, and checks that the step is still open and was inert while hidden.                  |
| `Steps`     | A custom summary title, an image with a caption, and an active and a pending step, which keep the summary running.                                                                   |

## Props

### ChainOfThought

`ChainOfThought` accepts the [`Task`](./task.md) props:

| Prop           | Type                      | Default | Description                                                                                                       |
| -------------- | ------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| `isStreaming`  | `boolean`                 | `false` | Keeps the summary running between steps, while the agent is still working.                                        |
| `open`         | `boolean`                 | None    | Whether the steps are shown. Setting it makes the chain controlled: it no longer opens and closes with its status. |
| `defaultOpen`  | `boolean`                 | None    | Whether it starts open, as if the reader had chosen. Without it, it is open while it runs.                       |
| `onOpenChange` | `(open: boolean) => void` | None    | Called with the new state when the reader opens or closes it.                                                     |

### ChainOfThought.Header

`ChainOfThought.Header` accepts the `Task.Trigger` props except `title`. Its children replace the summary, which defaults to "Researching" while a step runs and "Researched in N steps" after, with ", N failed" when steps failed.

### ChainOfThought.Step

`ChainOfThought.Step` accepts the [`Trace.Line`](./trace.md#traceline) props except `status`, and adds these props:

| Prop          | Type                                                   | Default            | Description                                                         |
| ------------- | ------------------------------------------------------ | ------------------ | ------------------------------------------------------------------- |
| `label`       | `ReactNode`                                            | Required           | What the step did, in the tense of its status.                      |
| `status`      | `"complete" \| "active" \| "pending" \| "error"`       | `"complete"`       | Maps to the line's status: none, `running`, `pending`, or `error`.  |
| `icon`        | `ReactNode`                                            | An icon for the status | An icon before the label: a check, spinner, empty circle, or alert. |
| `description` | `ReactNode`                                            | None               | Secondary text after the label, such as "2 results".                |
| `defaultOpen` | `boolean`                                              | `false`            | Whether a step with children starts open.                           |
| `children`    | `ReactNode`                                            | None               | The step's detail. With children, the line opens to show them.      |

### ChainOfThought.SearchResult

`ChainOfThought.SearchResult` accepts the [`Tag`](./tag.md) props. Its children are the tag's text.

### ChainOfThought.Image

`ChainOfThought.Image` accepts the `View` props and adds this prop:

| Prop      | Type        | Default | Description         |
| --------- | ----------- | ------- | ------------------- |
| `caption` | `ReactNode` | None    | Text under the image. |

`ChainOfThought.Content` accepts the `Task.Content` props, and `ChainOfThought.SearchResults` the `View` props.

The exported types are `ChainOfThoughtProps`, `ChainOfThoughtHeaderProps`, `ChainOfThoughtContentProps`, `ChainOfThoughtStepProps`, `ChainOfThoughtStepStatus`, `ChainOfThoughtSearchResultsProps`, `ChainOfThoughtSearchResultProps`, and `ChainOfThoughtImageProps`. For React Server Components, the parts are also exported as `ChainOfThoughtHeader`, `ChainOfThoughtContent`, `ChainOfThoughtStep`, `ChainOfThoughtSearchResults`, `ChainOfThoughtSearchResult`, and `ChainOfThoughtImage`.

## Behavior

- The summary runs while any step is `active` or `pending`, or while `isStreaming` is `true`. Once nothing runs, it fails if any step is `error`, and is done otherwise.
- The summary opens when it starts running and closes when it stops. Once the reader opens or closes it, it stays the way they left it.
- The steps stay mounted while the summary is closed, so they keep their own open state. While closed they are `inert`: out of the tab order and the accessibility tree.
- A step without children is a plain line. With children, it is a collapsible line, closed unless `defaultOpen` is set.

## Variants and states

- **Summary:** running, failed, or done, from the steps.
- **Step:** `complete`, `active`, `pending`, or `error`, with or without detail.
- **Open:** follows the status, the reader's choice, or the `open` prop.

## Accessibility

- The summary is a button with `aria-expanded`, named by its title: "Researched in 3 steps, 1 failed". A step with detail is a button too, named by its label and description.
- The icons are hidden from screen readers, so write each label in the tense of its status: "Searching …", "Searched …", "Failed to search …".
- `ChainOfThought.Image` is a `<figure>` named by its caption. Give the image itself alternative text.
- Closed steps are `inert`, so keyboard and screen reader users don't reach a closed chain's content.
- The shimmer stops when the reader prefers reduced motion.

## Related

- [Task](./task.md)
- [Reasoning](./reasoning.md)
- [Trace](./trace.md)
- [Tag](./tag.md)

## Source

- [`components/chain-of-thought/src/ChainOfThought.tsx`](../../../components/chain-of-thought/src/ChainOfThought.tsx)
- [`components/chain-of-thought/src/ChainOfThought.stories.tsx`](../../../components/chain-of-thought/src/ChainOfThought.stories.tsx)

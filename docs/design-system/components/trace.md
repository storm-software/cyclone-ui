---
title: Trace
description: A list of lines that report what an agent did, each with an icon, a one-line title, an optional description and status, and an optional expandable detail. The building block of the AI components.
documentType: reference
tags: [component, trace, ai, agent, reasoning, tool, list]
component:
  name: trace
  package: "@cyclone-ui/trace"
  stories:
    - title: AI/Trace
      file: components/trace/src/Trace.stories.tsx
---

# Trace

`Trace` is a list of lines that report what an agent did: thinking, calling a tool, reading a file, citing a source. Each line has an icon, a title and an optional description and status. A line can expand to show more detail, link to a page, or open a dialog, sheet or popover.

Every line has the same shape, so the AI components built from `Trace` ([Reasoning](./reasoning.md), [Tool](./tool.md), [Sources](./sources.md), [Plan](./plan.md), [Task](./task.md) and the others) look and behave the same. Use `Trace` for the steps an agent takes, and [Prompt Message](./prompt-message.md) for its reply.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add trace
pnpm install
```

- **File:** `Trace.tsx`. The CLI writes it to `<path>/trace/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Collapsible](./collapsible.md), [Accordion](./accordion.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/constants`, `@tamagui/core`, and `@tamagui/helpers-tamagui`.

## Import

```tsx
import { Trace } from "@cyclone-ui/trace"
```

## Usage

A line on its own reads as plain text:

```tsx
<Trace>
  <Trace.Line>
    <Trace.Icon>
      <Search />
    </Trace.Icon>
    <Trace.Title>Searched for minimumReleaseAge</Trace.Title>
  </Trace.Line>
</Trace>
```

Wrap a line in a `Trace.Collapsible` to show more detail when it expands:

```tsx
<Trace>
  <Trace.Collapsible>
    <Trace.Collapsible.Trigger>
      <Trace.Line>
        <Trace.Icon>
          <Console />
        </Trace.Icon>
        <Trace.Title>Ran node --version</Trace.Title>
      </Trace.Line>
    </Trace.Collapsible.Trigger>
    <Trace.Collapsible.Content>v24.18.0</Trace.Collapsible.Content>
  </Trace.Collapsible>
</Trace>
```

To open a line while its work streams and let the reader's click win, keep the reader's choice in state and fall back to the running state:

```tsx
const [open, setOpen] = useState<boolean>()

;<Trace.Collapsible open={open ?? running} onOpenChange={setOpen}>
  <Trace.Collapsible.Trigger>
    <Trace.Line status={running ? "running" : undefined}>
      <Trace.Icon>{running ? <Loading /> : <ConfirmCircle />}</Trace.Icon>
      <Trace.Title>{running ? "Thinking" : "Thought for 5s"}</Trace.Title>
    </Trace.Line>
  </Trace.Collapsible.Trigger>
  <Trace.Collapsible.Content>{text}</Trace.Collapsible.Content>
</Trace.Collapsible>
```

To open a page, wrap the line in a `Trace.Link`. To open a [Dialog](./dialog.md), [Sheet](./sheet.md) or [Popover](./popover.md), wrap it in a `Trace.Button` inside the trigger:

```tsx
<Dialog>
  <Dialog.Trigger asChild={true}>
    <Trace.Button>
      <Trace.Line>
        <Trace.Title>Explored 4 files</Trace.Title>
        <Trace.Icon>
          <ChevronRight />
        </Trace.Icon>
      </Trace.Line>
    </Trace.Button>
  </Dialog.Trigger>
  …
</Dialog>
```

## Anatomy

```tsx
<Trace>
  <Trace.Line>
    <Trace.Icon />
    <Trace.Title />
    <Trace.Description />
  </Trace.Line>
  <Trace.Collapsible>
    <Trace.Collapsible.Trigger>
      <Trace.Line />
    </Trace.Collapsible.Trigger>
    <Trace.Collapsible.Content />
  </Trace.Collapsible>
  <Trace.Link>
    <Trace.Line />
  </Trace.Link>
  <Trace.Button>
    <Trace.Line />
  </Trace.Button>
</Trace>
```

| Part                        | Renders                                                             | Purpose                                                                                        |
| --------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `Trace`                     | A column `View` with a small gap                                    | Groups lines. Lines and the triggers around them keep their own width.                         |
| `Trace.Line`                | A row `<span>`                                                      | One line. It is not a button or a tab stop on its own.                                         |
| `Trace.Icon`                | A 16px `<span>`, hidden from screen readers                         | An icon before the title names the action. An icon after it is an indicator, such as an arrow. |
| `Trace.Title`               | A one-line `BodyText` `<span>`                                      | What happened. It truncates with an ellipsis.                                                  |
| `Trace.Description`         | A `BodyText` `<span>` in the `subtle` color                         | A count, a duration or a diff stat. It does not truncate.                                      |
| `Trace.Collapsible`         | A ghost, borderless [`Collapsible`](./collapsible.md)               | A line that expands.                                                                           |
| `Trace.Collapsible.Trigger` | The collapsible's header button, with a chevron                     | Opens and closes the line.                                                                     |
| `Trace.Collapsible.Content` | The collapsible's content, indented under a rule                    | The detail. A string renders as `BodyText` that keeps its line breaks.                         |
| `Trace.Link`                | An `<a>` (web) or a pressable that calls `Linking.openURL` (native) | A line that opens a page.                                                                      |
| `Trace.Button`              | A `<button>`                                                        | A line that opens something, through a trigger's `asChild`.                                    |

## Examples

The examples are the stories in [`Trace.stories.tsx`](../../../components/trace/src/Trace.stories.tsx).

| Stories       | What they show                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `Base`        | Three plain lines.                                                                                                              |
| `Status`      | A done, a failed, a running and a pending line.                                                                                 |
| `Description` | Lines with a diff stat, a duration and a count.                                                                                 |
| `Collapsible` | A line that opens into a code block and a line that starts open with reasoning text. The play function opens the first one.     |
| `Streaming`   | Reasoning text that streams in: the line reads "Thinking" and stays open while it runs, then reads "Thought for 5s" and closes. |
| `Link`        | An internal link and an external link. The play function checks the external link's target and accessible name.                 |
| `InDialog`    | A line that opens a [Dialog](./dialog.md) listing the files the agent read.                                                     |
| `Nested`      | A summary line that expands into its steps, one of which failed and expands into its error.                                     |

## Props

### Trace

`Trace` accepts the `View` props.

### Trace.Line

`Trace.Line` accepts the `View` props and adds these props:

| Prop     | Type                                | Default | Description                                                      |
| -------- | ----------------------------------- | ------- | ---------------------------------------------------------------- |
| `status` | `"running" \| "error" \| "pending"` | None    | The state of the work the line reports. Done work has no status. |

| Status      | Looks                          | Use for                                                                       |
| ----------- | ------------------------------ | ----------------------------------------------------------------------------- |
| None        | `ink`                          | Work that is done: "Ran pnpm install".                                        |
| `"error"`   | The `danger` theme's `primary` | Work that failed. Say so in the title: "Failed to run pnpm lint".             |
| `"running"` | The title shimmers             | Work in progress. Write the title in the present tense: "Running pnpm build". |
| `"pending"` | Dimmed to 60%                  | Work that has not started, such as a plan step: "Run pnpm test".              |

### Trace.Icon

`Trace.Icon` accepts the `Text` props. Its child icon is sized to 16px and colored like the line unless the icon sets its own `size` or `color`.

### Trace.Title and Trace.Description

Both accept the [`BodyText`](./body-text.md) props.

### Trace.Collapsible

`Trace.Collapsible` accepts the [`Collapsible`](./collapsible.md) props except `value`, `defaultValue` and `onValueChange`, and adds these props:

| Prop           | Type                      | Default | Description                                                                              |
| -------------- | ------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| `open`         | `boolean`                 | None    | Whether the line is open. Setting it makes the line controlled; pass `onOpenChange` too. |
| `defaultOpen`  | `boolean`                 | `false` | Whether the line starts open when uncontrolled.                                          |
| `onOpenChange` | `(open: boolean) => void` | None    | Called with the new state when the reader opens or closes the line.                      |

### Trace.Collapsible.Trigger and Trace.Collapsible.Content

They accept the props of `Collapsible.Header` and `Collapsible.Content`.

### Trace.Link

`Trace.Link` accepts the `View` props and adds these props:

| Prop       | Type      | Default  | Description                                                                                |
| ---------- | --------- | -------- | ------------------------------------------------------------------------------------------ |
| `href`     | `string`  | Required | The page the line opens.                                                                   |
| `external` | `boolean` | `false`  | Opens the page in a new tab and adds "(opens in a new tab)" to the link's accessible name. |

### Trace.Button

`Trace.Button` accepts the `View` props. It renders a `<button type="button">`.

### useTraceStatus

`useTraceStatus()` returns the `status` of the nearest `Trace.Line`, or `undefined`.

The exported types are `TraceProps`, `TraceStatus`, `TraceLineProps`, `TraceIconProps`, `TraceTitleProps`, `TraceDescriptionProps`, `TraceCollapsibleProps`, `TraceCollapsibleTriggerProps`, `TraceCollapsibleContentProps`, `TraceLinkProps`, and `TraceButtonProps`. For React Server Components, the parts are also exported as `TraceLine`, `TraceIcon`, `TraceTitle`, `TraceDescription`, `TraceCollapsible`, `TraceCollapsibleTrigger`, `TraceCollapsibleContent`, `TraceLink`, and `TraceButton`.

## Behavior

- Lines are `ink`. When the collapsible trigger, link or button around a line is hovered, the line's title, icons and chevron darken to `emphasis`.
- A collapsible line animates its height as it opens and closes, and its chevron turns over.
- A running title shimmers with a sweep of the `emphasis` color on the web. The shimmer stops when the reader prefers reduced motion; the title still says what is happening.

## Variants and states

- **Status:** none, `running`, `error`, or `pending` on `Trace.Line`.
- **Open:** a `Trace.Collapsible` is closed or open, controlled or uncontrolled.

## Accessibility

- `Trace` adds no roles of its own. Each line takes its semantics from the element around it: a line on its own is text, a line in a `Trace.Collapsible.Trigger` is a button with `aria-expanded`, and a line in a `Trace.Link` is a link.
- `Trace.Icon` is hidden from screen readers, so the title is the accessible name. Write it as a sentence that says what happened, such as "Edited Trace.tsx", not just "Trace.tsx".
- Status is shown with color and motion, so say it in the title too: "Running pnpm build" while it runs and "Failed to run pnpm build" when it fails.
- An `external` link adds "(opens in a new tab)" to its accessible name.
- Triggers, links and buttons show the Cyclone `ring-offset` focus ring on keyboard focus.

## Related

- [Collapsible](./collapsible.md)
- [Reasoning](./reasoning.md)
- [Tool](./tool.md)
- [Sources](./sources.md)
- [Chain of Thought](./chain-of-thought.md)

## Source

- [`components/trace/src/Trace.tsx`](../../../components/trace/src/Trace.tsx)
- [`components/trace/src/Trace.stories.tsx`](../../../components/trace/src/Trace.stories.tsx)

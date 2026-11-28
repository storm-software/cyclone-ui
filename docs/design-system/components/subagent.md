---
title: Subagent
description: Work the agent hands to a subagent, as a Trace line with the model in a tag that opens to the task, a nested list of the subagent's tool calls, and what it found. An AI component.
documentType: reference
tags: [component, subagent, agent, ai, tool, trace]
component:
  name: subagent
  package: "@cyclone-ui/subagent"
  stories:
    - title: AI/Subagent
      file: components/subagent/src/Subagent.stories.tsx
---

# Subagent

`Subagent` is a line for work the agent hands to a subagent. The run is the title, like "Ran the research agent". Open it for the task the subagent was given, the tool calls it made, and what it found.

It is the Cyclone UI version of the [AI SDK Elements](https://elements.ai-sdk.dev) Agent. Its parts are also exported under those names (`Agent`, `AgentHeader`, `AgentContent`, `AgentInstructions`, `AgentTools`, `AgentTool`, `AgentOutput`) for code that migrates from it.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add subagent
pnpm install
```

- **File:** `Subagent.tsx`. The CLI writes it to `<path>/subagent/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Tool](./tool.md), [Trace](./trace.md), [Tag](./tag.md), [Body Text](./body-text.md), [Code Block](./code-block.md), [Confirmation](./confirmation.md), [Accordion](./accordion.md), [Button](./button.md), [Collapsible](./collapsible.md), [Container](./container.md), [Copy Button](./copy-button.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Toast](./toast.md), [Tooltip](./tooltip.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { Subagent } from "@cyclone-ui/subagent";
```

## Usage

```tsx
<Subagent defaultOpen={true}>
  <Subagent.Header
    name="the research agent"
    model="claude-sonnet-4.5"
    state={part.state}
    preliminary={part.preliminary}>
    <Trace.Description>48s</Trace.Description>
  </Subagent.Header>
  <Subagent.Content>
    <Subagent.Instructions>{part.input.task}</Subagent.Instructions>
    <Subagent.Tools>
      {calls.map(call => (
        <Subagent.Tool
          key={call.toolCallId}
          tool={call}
          title={call.input.command}
        />
      ))}
    </Subagent.Tools>
    <Subagent.Output>{report}</Subagent.Output>
  </Subagent.Content>
</Subagent>
```

With the AI SDK, a subagent is a tool whose `execute` yields the subagent's `UIMessage` as it streams. Render the tool part as the `Subagent`, and the tool parts in `part.output.parts` as `Subagent.Tool`s. Each yield is a preliminary output: the part is `output-available` with `preliminary: true`. The final output replaces it, so pass `preliminary` to the header, which reads "Running …" until the final output.

## Anatomy

```tsx
<Subagent>
  <Subagent.Header />
  <Subagent.Content>
    <Subagent.Instructions />
    <Subagent.Tools>
      <Subagent.Tool />
    </Subagent.Tools>
    <Subagent.Output />
  </Subagent.Content>
</Subagent>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Subagent` | A [`Tool`](./tool.md): a `Trace` with a `Trace.Collapsible` | Opens and closes the run. |
| `Subagent.Header` | A `Tool.Header` titled "{verb} {name}", its children, and the model in a [`Tag`](./tag.md) | The line. |
| `Subagent.Content` | `Tool.Content` | The detail, indented under the line. |
| `Subagent.Instructions` | A subtle `BodyText` | The task the subagent was given. |
| `Subagent.Tools` | A nested `Trace` | The subagent's tool calls. |
| `Subagent.Tool` | A `Tool` with a header, and its input and output | One tool call. |
| `Subagent.Output` | A `BodyText`, and the `schema` as a code block | What the subagent found. |

## Examples

The examples are the stories in [`Subagent.stories.tsx`](../../../components/subagent/src/Subagent.stories.tsx). A research agent finds out why image optimization reruns on every deploy, with three `runCommand` calls.

| Stories | What they show |
| --- | --- |
| `Running` | One tool call finishes every 700 ms, then the subagent reports back. The play function checks the running line and calls, waits for "Ran the research agent" and the report, and opens a call's output. |
| `Details` | The finished run with the model, the duration and the task. The play function closes and reopens it with Enter. |
| `Failed` | The run and its tool call failed. |
| `Stopped while running` | The chat stopped before the subagent finished (`isStreaming={false}`), so the run and its running call read "Failed to run …". |

## Props

### Subagent

`Subagent` accepts the [`Tool`](./tool.md) props: `open`, `defaultOpen` (default `false`) and `onOpenChange`.

### Subagent.Header

`Subagent.Header` accepts the [`Tool.Header`](./tool.md#toolheader) props except `type`, `toolName` and `title`, and adds:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | Required | What ran, after the verb, such as "the research agent". |
| `model` | `string` | None | The subagent's model, in a tag after the title. |
| `state` | `ToolState` | `"output-available"` | The subagent tool part's `state`. |
| `preliminary` | `boolean` | `false` | The part's `preliminary` flag, `true` while the subagent streams. |
| `isStreaming` | `boolean` | `true` | Whether the chat is still streaming. |
| `children` | `ReactNode` | None | Content after the title, such as a `Trace.Description` with how long it ran. |

### Subagent.Content, Subagent.Instructions and Subagent.Tools

`Subagent.Content` accepts the `Tool.Content` props, `Subagent.Instructions` the [`BodyText`](./body-text.md) props, and `Subagent.Tools` the [`Trace`](./trace.md) props.

### Subagent.Tool

`Subagent.Tool` accepts the `Tool` props except `children`, and adds:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `tool` | `ToolPart` | Required | One of the subagent's tool parts. |
| `title` | `ReactNode` | The tool's name | What the tool ran, after the verb. |
| `isStreaming` | `boolean` | `true` | Whether the chat is still streaming. |

### Subagent.Output

`Subagent.Output` accepts the [`BodyText`](./body-text.md) props and adds:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `schema` | `string` | None | The schema of a structured result, shown as code labeled "Output schema" under the text. |

The exported types are `SubagentProps`, `SubagentHeaderProps`, `SubagentContentProps`, `SubagentInstructionsProps`, `SubagentToolsProps`, `SubagentToolProps`, and `SubagentOutputProps`, also as `AgentProps`, `AgentHeaderProps`, and so on. For React Server Components, the parts are also exported as `SubagentHeader`, `SubagentContent`, `SubagentInstructions`, `SubagentTools`, `SubagentTool`, and `SubagentOutput`.

## Behavior

The header and each tool call map their state as [Tool](./tool.md#behavior) does:

| Subagent tool part | Status | Title |
| --- | --- | --- |
| `input-streaming`, `input-available` | `running` while the chat streams | Running … |
| `output-available` with `preliminary` | `running` while the chat streams | Running … |
| `output-available` | None | Ran … |
| `output-error`, or still running after the chat stops | `error` | Failed to run … |

- The run starts closed. Pass `defaultOpen` to show its tool calls as they arrive.
- Each tool call is its own line that opens to its input and output.

## Variants and states

- **States:** running, done and failed, as in the table above.
- **Details:** the model tag and the header's children (such as the duration) are optional.

## Accessibility

- `Subagent.Header` is a button with `aria-expanded`, named by its title, the model and its children. The title says the state in words.
- Each tool call's header is its own button in the nested trace.

## Related

- [Tool](./tool.md)
- [Trace](./trace.md)
- [Tag](./tag.md)

## Source

- [`components/subagent/src/Subagent.tsx`](../../../components/subagent/src/Subagent.tsx)
- [`components/subagent/src/Subagent.stories.tsx`](../../../components/subagent/src/Subagent.stories.tsx)

---
title: Tool
description: A tool call the agent makes, as a Trace line whose title, status and icon follow the call from input to output, and that opens to the call's input and output as JSON code blocks. An AI component.
documentType: reference
tags: [component, tool, ai, agent, trace]
component:
  name: tool
  package: "@cyclone-ui/tool"
  stories:
    - title: AI/Tool
      file: components/tool/src/Tool.stories.tsx
---

# Tool

`Tool` is a tool call the agent makes, such as running a command or reading a file. It is a [Trace](./trace.md) line that follows the call from input to output: "Running pnpm test" while it runs, "Ran pnpm test" when it is done, "Failed to run pnpm test" when it fails, and "Denied rm -rf dist" when the person denies it. The line opens to the call's input and output.

It is the Cyclone UI version of the [AI SDK Elements](https://elements.ai-sdk.dev) Tool, with the same exports and props. It has no AI SDK dependency: `ToolPart` describes the fields of an AI SDK tool part that it reads, so you can pass the parts of `useChat` messages as they are.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add tool
pnpm install
```

- **File:** `Tool.tsx`. The CLI writes it to `<path>/tool/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Trace](./trace.md), [Code Block](./code-block.md), [Confirmation](./confirmation.md), [Accordion](./accordion.md), [Body Text](./body-text.md), [Button](./button.md), [Collapsible](./collapsible.md), [Container](./container.md), [Copy Button](./copy-button.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Toast](./toast.md), [Tooltip](./tooltip.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { Tool } from "@cyclone-ui/tool";
```

## Usage

```tsx
<Tool>
  <Tool.Header
    type={part.type}
    state={part.state}
    approval={part.approval}
    title={part.input?.command}
  />
  <Tool.Content>
    <Tool.Input input={part.input} />
    <Tool.Output output={part.output} errorText={part.errorText} />
  </Tool.Content>
</Tool>
```

`Tool` renders its own [Trace](./trace.md), so a list of calls is a column of `Tool`s. To put calls in one trace with other lines, render them inside a `Trace`.

Pass `isStreaming={false}` to `Tool.Header` once the chat stops: a call that is still `input-streaming` or `input-available` then failed. A tool that runs on the client stays `input-available` after the chat stops until you add its output, so leave `isStreaming` out for it.

### Approval

A pending approval is a question for the person, so it sits outside the trace as a [Confirmation](./confirmation.md). Once the person answers, render the call as a `Tool` again:

```tsx
part.state === "approval-requested" ? (
  <Confirmation approval={part.approval} state={part.state} icon={<Console />}>
    <Confirmation.Title>Run {part.input.command}?</Confirmation.Title>
    <Confirmation.Actions>
      <Confirmation.Action variant="outlined" onPress={deny}>Deny</Confirmation.Action>
      <Confirmation.Action variant="primary" onPress={approve}>Approve</Confirmation.Action>
    </Confirmation.Actions>
  </Confirmation>
) : (
  <Tool>
    <Tool.Header state={part.state} approval={part.approval} title={part.input.command} />
    <Tool.Content>
      <Tool.Output output={part.output} errorText={part.errorText} />
    </Tool.Content>
  </Tool>
)
```

### Output in a sheet

For long output, make the line a `Trace.Button` that opens a [Drawer](./drawer.md) with the output, instead of a `Tool` that expands under the line. `Tool.Output` with `label=""` shows the output without its label. See the `OutputInSheet` story.

## Anatomy

```tsx
<Tool>
  <Tool.Header />
  <Tool.Content>
    <Tool.Input />
    <Tool.Output />
  </Tool.Content>
</Tool>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Tool` | A `Trace` with a `Trace.Collapsible` | Opens and closes the call. |
| `Tool.Header` | A `Trace.Collapsible.Trigger` with a `Trace.Line`: the state's icon, "{verb} {title}", and its children | The line. |
| `Tool.Content` | `Trace.Collapsible.Content` | The detail, indented under the line. |
| `Tool.Input` | A small "Input" label over a [`CodeBlock`](./code-block.md) with the input as pretty-printed JSON | The call's arguments. |
| `Tool.Output` | A small "Output" (or "Error") label over a `CodeBlock` with the output | The result, or the error. |

## Examples

The examples are the stories in [`Tool.stories.tsx`](../../../components/tool/src/Tool.stories.tsx).

| Stories | What they show |
| --- | --- |
| `States` | One line per state: done, failed, denied, running, still running when the chat stopped, and waiting for approval. The play function checks each title and opens the failed call's error. |
| `InputAndOutput` | A `tool-searchDocs` call titled from its type, open to its JSON input and output. The play function closes and reopens it with Space. |
| `Streaming` | Three commands that stream their input, run and finish, the last one with an error. |
| `Approval`, `ApprovalDenied` | A [Confirmation](./confirmation.md) that turns into "Running rm -rf dist" and then "Ran rm -rf dist" when approved, or "Denied rm -rf dist" when denied. |
| `OutputInSheet` | "Read package.json" opens the file in a [Drawer](./drawer.md). The play function opens it, closes it with Escape, and opens it again. |

## Props

### Tool

`Tool` accepts the [`Trace.Collapsible`](./trace.md#tracecollapsible) props: `open`, `defaultOpen` (default `false`) and `onOpenChange`.

### Tool.Header

`Tool.Header` accepts the `Trace.Collapsible.Trigger` props and adds:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `state` | `ToolState` | Required | The part's `state`, which sets the line's status, icon and verb. |
| `title` | `ReactNode` | The tool's name | What ran, after the verb, such as the command. |
| `type` | `` `tool-${string}` \| "dynamic-tool" `` | None | The part's `type`. Without a `title`, the name after `tool-` is the title. |
| `toolName` | `string` | None | The part's `toolName`, the title of a `dynamic-tool` without a `title`. |
| `approval` | `ToolApproval` | None | The part's `approval`. An `approval-responded` call that was denied reads "Denied …". |
| `preliminary` | `boolean` | `false` | The part's `preliminary` flag. A preliminary output still reads "Running …". |
| `isStreaming` | `boolean` | `true` | Whether the chat is still streaming. A call that is still running when it stops reads "Failed to run …". |
| `icon` | `ReactNode` | The state's icon | An icon that names the tool, such as `<Console />`. |
| `children` | `ReactNode` | None | Content after the title, such as a `Trace.Description`. |

### Tool.Content

`Tool.Content` accepts the `Trace.Collapsible.Content` props.

### Tool.Input and Tool.Output

Both accept the [`CodeBlock`](./code-block.md) props, except `children`, and add:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `input` | `unknown` | Required (`Tool.Input`) | The part's `input`. Renders nothing while it is `undefined`. |
| `output` | `unknown` | None (`Tool.Output`) | The part's `output`. A string shows as is, a React element renders as is, and anything else shows as pretty-printed JSON. |
| `errorText` | `string` | None (`Tool.Output`) | The part's `errorText`, shown in place of the output. |
| `label` | `string` | `"Input"`, `"Output"` or `"Error"` | The small label above the code. Pass `""` for none. |

### Helpers

- `getToolLine(state, { approval, preliminary, isStreaming })` returns the `{ status, verb, icon }` that `Tool.Header` uses, for lines you build yourself (such as a `Trace.Button` that opens a sheet).
- `getStatusBadge(state)` returns a `Trace.Line` with the state's icon and label ("Running", "Completed", "Error", …), kept from AI SDK Elements.

The exported types are `ToolProps`, `ToolHeaderProps`, `ToolContentProps`, `ToolInputProps`, `ToolOutputProps`, `ToolLineOptions`, `ToolPart`, `ToolState`, and `ToolApproval`. For React Server Components, the parts are also exported as `ToolHeader`, `ToolContent`, `ToolInput`, and `ToolOutput`.

## Behavior

`Tool.Header` maps the part's state to the line:

| State | Status | Icon | Title |
| --- | --- | --- | --- |
| `input-streaming`, `input-available` | `running` | Spinner | Running … |
| The same, with `isStreaming={false}` | `error` | Alert | Failed to run … |
| `approval-requested` | `pending` | Clock | Waiting to run … (render a [Confirmation](./confirmation.md) instead) |
| `approval-responded`, approved | `running` | Spinner | Running … |
| `approval-responded`, denied, or `output-denied` | None | Close | Denied … |
| `output-available` with `preliminary` | `running` | Spinner | Running … |
| `output-available` | None | Check | Ran … |
| `output-error` | `error` | Alert | Failed to run … |

- Lines start closed. Pass `defaultOpen`, or `open` and `onOpenChange`, to open one, for example a failed call once the chat is done.
- The code blocks wrap long lines, scroll past 256 px, and have a copy button.

## Variants and states

- **Status:** running (shimmering title), done, failed (danger color), pending (dimmed) and denied, as in the table above.
- **Icon:** the state's icon by default, or the tool's own `icon`.

## Accessibility

- `Tool.Header` is a button with `aria-expanded`, named by its title. The title says the state in words ("Running", "Failed to run"), so it does not rely on color or motion.
- The icon is hidden from assistive tech.
- The code blocks are scrollable regions that you can focus with the keyboard.

## Related

- [Trace](./trace.md)
- [Confirmation](./confirmation.md)
- [Terminal](./terminal.md)
- [Subagent](./subagent.md)
- [Code Block](./code-block.md)

## Source

- [`components/tool/src/Tool.tsx`](../../../components/tool/src/Tool.tsx)
- [`components/tool/src/Tool.stories.tsx`](../../../components/tool/src/Tool.stories.tsx)

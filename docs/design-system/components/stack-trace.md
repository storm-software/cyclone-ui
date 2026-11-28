---
title: Stack Trace
description: A Trace line for a failed tool call that reads "Failed: TypeError: …" and opens into the full error, your own stack frames as links, and the framework frames folded away.
documentType: reference
tags: [component, stack-trace, error, ai, agent, tool, trace, collapsible]
component:
  name: stack-trace
  package: "@cyclone-ui/stack-trace"
  stories:
    - title: AI/StackTrace
      file: components/stack-trace/src/StackTrace.stories.tsx
---

# Stack Trace

`StackTrace` shows a tool call that failed. It parses a JavaScript stack string and renders a [Trace](./trace.md) line in the danger color whose title is the error, like "Failed: TypeError: Cannot read properties of undefined". Opening it shows the full error, the frames from your own code (which can open the file at the line), and the frames from `node_modules` and Node folded into a line of their own, so the frames you can fix come first.

It is the Cyclone UI version of the [AI SDK Elements](https://elements.ai-sdk.dev) Stack Trace component, rebuilt on `Trace` like the [shadcn/ui](https://ui.shadcn.com/docs/ai-elements) one. The exports and props keep their AI SDK Elements names.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add stack-trace
pnpm install
```

- **Files:** `StackTrace.tsx` and `parse-stack-trace.ts`. The CLI writes them to `<path>/stack-trace/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Trace](./trace.md), [Code Block](./code-block.md), Copy Button, [Accordion](./accordion.md), [Body Text](./body-text.md), [Button](./button.md), [Collapsible](./collapsible.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), Toast, [Tooltip](./tooltip.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { parseStackTrace, StackTrace, useStackTrace } from "@cyclone-ui/stack-trace";
```

## Usage

Pass the stack as `trace`. Without children, `StackTrace` renders the line, a copy button beside it, and the frames:

```tsx
<StackTrace
  trace={error.stack}
  onFilePathClick={(filePath, lineNumber) => openInEditor(filePath, lineNumber)}
/>
```

With the AI SDK, a tool that throws has a part in the `output-error` state. By default its `errorText` is only the message, with no frames. To send the frames, return `error.stack` from `onError` in `toUIMessageStreamResponse`, in development only, since a stack shows your server's file paths:

```ts
return result.toUIMessageStreamResponse({
  onError: error =>
    error instanceof Error ? (error.stack ?? error.message) : String(error)
});
```

```tsx
{part.state === "output-error" && <StackTrace trace={part.errorText} />}
```

Compose the parts for a custom layout. `StackTrace.Actions` among the header's children render beside the line, not inside it:

```tsx
<StackTrace trace={stack} defaultOpen={true}>
  <StackTrace.Header>
    <StackTrace.Error />
    <StackTrace.Actions>
      <StackTrace.CopyButton />
    </StackTrace.Actions>
  </StackTrace.Header>
  <StackTrace.Content>
    <StackTrace.Frames showInternalFrames={false} />
  </StackTrace.Content>
</StackTrace>
```

## Anatomy

```tsx
<StackTrace>
  <StackTrace.Header>
    <StackTrace.Error>
      <StackTrace.ErrorType />
      <StackTrace.ErrorMessage />
    </StackTrace.Error>
    <StackTrace.Actions>
      <StackTrace.CopyButton />
    </StackTrace.Actions>
  </StackTrace.Header>
  <StackTrace.Content>
    <StackTrace.Frames />
  </StackTrace.Content>
</StackTrace>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `StackTrace` | A `Trace` with a `Trace.Collapsible` | Parses the stack and holds the open state. |
| `StackTrace.Header` | A row of a `Trace.Collapsible.Trigger` (a `Trace.Line` with `status="error"` and an alert icon) and any `StackTrace.Actions` | The line that opens the frames. |
| `StackTrace.Error` | A `Trace.Title`: "Failed: ", then the type and the first line of the message | The line's title. It truncates. |
| `StackTrace.ErrorType` | A `<span>`: the type and a colon, like `TypeError:` | Nothing when the stack has no type. |
| `StackTrace.ErrorMessage` | A `<span>`: the first line of the message | |
| `StackTrace.Actions` | A row | Buttons beside the line. |
| `StackTrace.CopyButton` | A circular `ghost` Copy Button (`@cyclone-ui/copy-button`) | Copies the whole stack. |
| `StackTrace.ExpandButton` | Nothing | Kept so AI SDK Elements code compiles: the whole line opens the frames. |
| `StackTrace.Content` | A `Trace.Collapsible.Content` | The detail under the line. |
| `StackTrace.Frames` | The full error in the code font, then a `Trace` of your frames and a `Trace.Collapsible` of the internal ones | The frames. |

## Examples

The examples are the stories in [`StackTrace.stories.tsx`](../../../components/stack-trace/src/StackTrace.stories.tsx).

| Story | What it shows |
| --- | --- |
| `Base` | The default parts, open, with `onFilePathClick`. The play function presses a frame and checks the file, line and column it reports, opens the framework frames, and closes and reopens the line with `Enter`. |
| `Closed` | The default parts, closed. |
| `Composed` | The parts composed by hand: the type only in the title, and no framework frames. Without `onFilePathClick`, the frames are plain lines. |
| `MessageOnly` | An error without frames. |
| `InToolRun` | A successful tool line, then a running one that fails after a second and turns into a `StackTrace`. |

## Props

### StackTrace

`StackTrace` accepts the [`Trace.Collapsible`](./trace.md) props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `trace` | `string` | Required | The stack, such as `error.stack` or a tool's `errorText`. |
| `onFilePathClick` | `(filePath: string, lineNumber?: number, columnNumber?: number) => void` | None | Called when one of your frames is pressed. Without it, the frames are not buttons. |
| `open` | `boolean` | None | Whether the line is open. Setting it makes `StackTrace` controlled; pass `onOpenChange` too. |
| `defaultOpen` | `boolean` | `false` | Whether the line starts open when uncontrolled. |
| `onOpenChange` | `(open: boolean) => void` | None | Called with the new open state. |
| `children` | `ReactNode` | The header with a copy button, and the content | The parts. |

### StackTrace.Header

`StackTrace.Header` accepts the `Trace.Collapsible.Trigger` props. Its children default to `StackTrace.Error`; `StackTrace.Actions` among them render beside the line.

### StackTrace.Error, .ErrorType, .ErrorMessage

`StackTrace.Error` accepts the `Trace.Title` props; its `children` replace the type and message after "Failed: ". `StackTrace.ErrorType` and `StackTrace.ErrorMessage` accept the Tamagui `Text` props; their `children` replace the parsed text.

### StackTrace.Actions

`StackTrace.Actions` accepts the `View` props.

### StackTrace.CopyButton

`StackTrace.CopyButton` accepts the Copy Button props except `value`, such as `copiedDuration` (default 2000 ms) and `onPress`. It is named "Copy stack trace".

### StackTrace.Content

`StackTrace.Content` accepts the `Trace.Collapsible.Content` props. Its children default to `StackTrace.Frames`.

### StackTrace.Frames

`StackTrace.Frames` accepts the `View` props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `showInternalFrames` | `boolean` | `true` | Show the internal frames, folded into a line like "4 framework frames". |

### parseStackTrace

`parseStackTrace(trace: string): ParsedStackTrace` parses a V8 (Node, Chrome) stack string.

| Field | Type | Description |
| --- | --- | --- |
| `errorType` | `string \| undefined` | The type before the first colon, when it ends in `Error` or `Exception`, like `TypeError` or `AssertionError [ERR_ASSERTION]`. |
| `errorMessage` | `string` | The rest of the lines before the first frame. Without a type, all of them. |
| `frames` | `StackFrame[]` | One per `at …` line. |

Each `StackFrame` has `raw` (the trimmed line), `functionName`, `filePath`, `lineNumber`, `columnNumber` (all `undefined` when the line has no location, like `at Array.forEach (<anonymous>)`) and `isInternal`: `true` for frames in `node_modules`, Node's own `node:` modules, `<anonymous>` and native code. Firefox and Safari stacks (`fn@file:1:2`) are not parsed.

### useStackTrace

`useStackTrace()` returns `{ trace, raw, onFilePathClick }` for the nearest `StackTrace`: the parsed stack, the string as given, and the callback. It throws outside one.

The exported types are `StackTraceProps`, `StackTraceHeaderProps`, `StackTraceErrorProps`, `StackTraceErrorTypeProps`, `StackTraceErrorMessageProps`, `StackTraceActionsProps`, `StackTraceCopyButtonProps`, `StackTraceContentProps`, `StackTraceFramesProps`, `StackTraceContextValue`, `ParsedStackTrace`, and `StackFrame`. For React Server Components, the parts are also exported under their AI SDK Elements names: `StackTraceHeader`, `StackTraceError`, `StackTraceErrorType`, `StackTraceErrorMessage`, `StackTraceActions`, `StackTraceCopyButton`, `StackTraceExpandButton`, `StackTraceContent`, and `StackTraceFrames`.

## Behavior

- The line starts closed unless `defaultOpen` or `open` says otherwise. Pressing it, or `Enter` or `Space` on it, opens and closes the frames.
- The title truncates, so the content repeats the whole error, with every line of its message, in the code font and the danger color.
- Your frames read "formatInvoice in app/lib/billing.ts:42", or just the location for a frame without a function.
- The internal frames start folded. Opened, they show their lines as written, dimmed, in a scrolling code block.

## Variants and states

- **Closed and open:** the chevron after the title points down when closed and up when open.
- **With and without `onFilePathClick`:** your frames are buttons or plain lines.
- **No frames:** only the full error shows.

## Accessibility

- The line is a button with `aria-expanded`, named by the title, like "Failed: TypeError: Cannot read properties of undefined (reading 'total')".
- The copy button sits beside the line, never inside it, so it is a separate tab stop named "Copy stack trace".
- With `onFilePathClick`, each frame is a button named by its function and location. The icons are decorative.
- The danger color is not the only signal: the title starts with "Failed".

## Related

- [Trace](./trace.md)
- [Tool](./tool.md)
- [Test Results](./test-results.md)
- [Code Block](./code-block.md)

## Source

- [`components/stack-trace/src/StackTrace.tsx`](../../../components/stack-trace/src/StackTrace.tsx)
- [`components/stack-trace/src/parse-stack-trace.ts`](../../../components/stack-trace/src/parse-stack-trace.ts)
- [`components/stack-trace/src/parse-stack-trace.spec.ts`](../../../components/stack-trace/src/parse-stack-trace.spec.ts)
- [`components/stack-trace/src/StackTrace.stories.tsx`](../../../components/stack-trace/src/StackTrace.stories.tsx)

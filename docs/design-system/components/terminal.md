---
title: Terminal
description: A shell command the agent runs, as a Trace line that names the command and its exit code and opens to the output as it streams, in the code font. An AI component.
documentType: reference
tags: [component, terminal, command, ai, agent, trace]
component:
  name: terminal
  package: "@cyclone-ui/terminal"
  stories:
    - title: AI/Terminal
      file: components/terminal/src/Terminal.stories.tsx
---

# Terminal

`Terminal` is a shell command the agent runs, such as a lint, a test run or a build. It is a [Trace](./trace.md) line that names the command, and its output streams in underneath while it runs: "Running pnpm build" while it runs, "Ran pnpm build" when it exits with `0`, and "pnpm lint exited with code 1" in the danger color when it exits with another code.

It is the Cyclone UI version of the [AI SDK Elements](https://elements.ai-sdk.dev) Terminal, with the same exports and props, plus `command` and `exitCode` for the title. The command is a tool call; see [Tool](./tool.md) for its other states.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add terminal
pnpm install
```

- **File:** `Terminal.tsx`. The CLI writes it to `<path>/terminal/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Trace](./trace.md), [Code Block](./code-block.md), [Copy Button](./copy-button.md), [Accordion](./accordion.md), [Body Text](./body-text.md), [Button](./button.md), [Collapsible](./collapsible.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Toast](./toast.md), [Tooltip](./tooltip.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { Terminal } from "@cyclone-ui/terminal";
```

## Usage

```tsx
<Terminal
  command="pnpm build"
  output={output}
  isStreaming={running}
  exitCode={exitCode}
  onClear={() => setOutput("")}
/>
```

With the AI SDK, a tool result arrives only once the command exits. To stream the output while it runs, write it from the tool as a data part with the tool call's id (`writer.write({ type: "data-terminal", id: toolCallId, data: { output } })`). The AI SDK replaces a data part that has the same id, so the output grows in place. On the client, pass the data part's output that matches each tool part.

To lay out the parts yourself, pass children:

```tsx
<Terminal command="pnpm test" output={output} isStreaming={running}>
  <Terminal.Header>
    <Terminal.Title>Testing the chat helpers</Terminal.Title>
    <Terminal.Status />
    <Terminal.Actions>
      <Terminal.CopyButton />
    </Terminal.Actions>
  </Terminal.Header>
  <Terminal.Content />
</Terminal>
```

## Anatomy

```tsx
<Terminal>
  <Terminal.Header>
    <Terminal.Title />
    <Terminal.Status />
    <Terminal.Actions>
      <Terminal.CopyButton />
      <Terminal.ClearButton />
    </Terminal.Actions>
  </Terminal.Header>
  <Terminal.Content />
</Terminal>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Terminal` | A `Trace` with a `Trace.Collapsible`, and by default a header and content | Holds the output and state, and opens while the output streams. |
| `Terminal.Header` | A row; by default the title, and the copy and clear buttons | Puts the buttons beside the line, since a button can't go in a button. |
| `Terminal.Title` | A `Trace.Collapsible.Trigger` with a `Trace.Line`: a terminal icon and the title | The line that opens and closes the output. |
| `Terminal.Status` | A spinner (or its children) while the command runs | An extra busy indicator. |
| `Terminal.Actions` | A row at the end of the header | Holds the buttons, lined up with the output's edge. |
| `Terminal.CopyButton` | A [`CopyButton`](./copy-button.md) labeled "Copy output" | Copies the output. Disabled while there is none. |
| `Terminal.ClearButton` | A ghost icon [`Button`](./button.md) with a trash icon and the tooltip "Clear output" | Calls `onClear`. Renders nothing without it. |
| `Terminal.Content` | `Trace.Collapsible.Content` with a [`CodeBlock`](./code-block.md) of the output | The output, in the code font. |

## Examples

The examples are the stories in [`Terminal.stories.tsx`](../../../components/terminal/src/Terminal.stories.tsx).

| Stories | What they show |
| --- | --- |
| `Streaming` | `pnpm build` prints a line every 150 ms. The play function checks that the line opens once output arrives, that the output stays scrolled to its end, and that the line closes when the command is done. |
| `ExitCode` | "Ran pnpm install" (closed), and "pnpm lint exited with code 1" in the danger color, open to the lint errors. |
| `Actions` | Copy and clear buttons. The play function clears the output, which calls `onClear` and disables the copy button. |
| `Composed` | The parts laid out by hand, with a custom title and `Terminal.Status`. The play function closes the running line, and the reader's choice wins. |

## Props

### Terminal

`Terminal` accepts the [`Trace.Collapsible`](./trace.md#tracecollapsible) props and adds:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `output` | `string` | Required | Everything the command has printed so far. ANSI color codes are not parsed. |
| `isStreaming` | `boolean` | `false` | Whether the command is still running. The line shimmers and opens once there is output. |
| `command` | `string` | None | The command, which the title names. |
| `exitCode` | `number` | None | The exit code once the command exits. Any code but `0` turns the line into a failure. |
| `autoScroll` | `boolean` | `true` | Scroll the output to its end as it grows while the command runs. |
| `onClear` | `() => void` | None | Clears the output. Shows the clear button. |
| `open`, `defaultOpen`, `onOpenChange` | | None | Control the line. Without `open`, it follows the reader's choice, then `defaultOpen`, then opens while the command runs and has output. |
| `children` | `ReactNode` | A header and content | Custom parts. |

### Terminal.Title

`Terminal.Title` accepts the `Trace.Collapsible.Trigger` props. Its `children` replace the title text.

### Terminal.Header and Terminal.Actions

Both accept the `View` props.

### Terminal.Status

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | A spinner | Shown while the command runs. |

### Terminal.CopyButton

`Terminal.CopyButton` accepts the [`CopyButton`](./copy-button.md) props except `value`, and adds `onCopy` (called when the button is pressed) and `timeout` (how long it shows that it copied, in milliseconds; default `2000`).

### Terminal.ClearButton

`Terminal.ClearButton` accepts the [`Button`](./button.md) props. Its `children` replace the icon.

### Terminal.Content

`Terminal.Content` accepts the `Trace.Collapsible.Content` props. Its `children` replace the output's code block.

### useTerminal

`useTerminal()` returns `{ output, isStreaming, autoScroll, onClear, command, exitCode }` for the nearest `Terminal`. It throws outside one.

The exported types are `TerminalProps`, `TerminalHeaderProps`, `TerminalTitleProps`, `TerminalStatusProps`, `TerminalActionsProps`, `TerminalCopyButtonProps`, `TerminalClearButtonProps`, `TerminalContentProps`, and `TerminalContextValue`. For React Server Components, the parts are also exported as `TerminalHeader`, `TerminalTitle`, `TerminalStatus`, `TerminalActions`, `TerminalCopyButton`, `TerminalClearButton`, and `TerminalContent`.

## Behavior

| Command | Status | Title |
| --- | --- | --- |
| Running (`isStreaming`) | `running` | Running pnpm build |
| Exited with `0` (or no `exitCode`) | None | Ran pnpm build |
| Exited with another code | `error` | pnpm lint exited with code 1 |

- The line opens once the first output arrives while the command runs, so the output is visible as it streams, and closes when the command is done. Once the reader opens or closes it, their choice wins.
- The output wraps and scrolls past 256 px. While the command runs, it scrolls to the end each time the output grows (web only), unless `autoScroll` is `false`.
- Without a `command`, the title reads "Running the command", "Ran the command" or "Exited with code 1".

## Variants and states

- **States:** running, done and failed, as in the table above.
- **Actions:** the copy button always shows; the clear button shows with `onClear`.

## Accessibility

- `Terminal.Title` is a button with `aria-expanded`, named by its title, which says the state in words.
- The buttons beside it are named "Copy output" and "Clear output". `Terminal.Status` is hidden from assistive tech, since the title already says "Running …".
- The output is a scrollable region that you can focus with the keyboard.

## Related

- [Tool](./tool.md)
- [Trace](./trace.md)
- [Code Block](./code-block.md)
- [Copy Button](./copy-button.md)

## Source

- [`components/terminal/src/Terminal.tsx`](../../../components/terminal/src/Terminal.tsx)
- [`components/terminal/src/Terminal.stories.tsx`](../../../components/terminal/src/Terminal.stories.tsx)

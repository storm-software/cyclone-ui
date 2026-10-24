---
title: Code block
description: Reference for the CodeBlock component, a framed display for Shiki-highlighted code with a copy button and optional tabs.
documentType: reference
tags: [component, code]
---

# Code block

`CodeBlock` frames code that is already highlighted. It can show a title, an icon, a copy button, line numbers, and a scrollable viewport. `CodeBlock.Tabs` switches between several samples.

Syntax highlighting happens before render. The component owns the frame and the copy action.

Source: [`components/code-block`](https://github.com/storm-software/cyclone-ui/tree/main/components/code-block)

## Import

```tsx
import { CodeBlock } from "@cyclone-ui/code-block";
```

## Usage

```tsx
<CodeBlock title="Install" allowCopy>
  <CodeBlock.Pre>{highlightedHtml}</CodeBlock.Pre>
</CodeBlock>
```

`highlightedHtml` is the markup from Shiki. Pass it as children of `CodeBlock.Pre` in the form your highlighter returns.

To switch samples:

```tsx
<CodeBlock.Tabs defaultValue="pnpm">
  <CodeBlock.Tabs.List>
    <CodeBlock.Tabs.Trigger value="pnpm">pnpm</CodeBlock.Tabs.Trigger>
    <CodeBlock.Tabs.Trigger value="npm">npm</CodeBlock.Tabs.Trigger>
  </CodeBlock.Tabs.List>
  <CodeBlock.Tabs.Content value="pnpm">
    <CodeBlock>
      <CodeBlock.Pre>pnpm add @cyclone-ui/button</CodeBlock.Pre>
    </CodeBlock>
  </CodeBlock.Tabs.Content>
</CodeBlock.Tabs>
```

## Anatomy

| Part | Purpose |
| --- | --- |
| `CodeBlock` | The frame. |
| `CodeBlock.Header`, `Header.Icon`, `Header.Heading` | The caption row. |
| `CodeBlock.Body`, `CodeBlock.Pre` | The `<pre>` that holds the code. |
| `CodeBlock.CopyButton` | Copies the text in `containerRef`. |
| `CodeBlock.Tabs`, `Tabs.List`, `Tabs.Trigger`, `Tabs.Content` | A tab set around several blocks. |

## Props

`CodeBlock` also accepts `View` props except `title`.

| Prop | Default | Purpose |
| --- | --- | --- |
| `title` | - | Caption above the code. |
| `icon` | - | Icon in the title. A string is treated as trusted SVG or HTML so a Shiki transformer can pass an icon through. |
| `allowCopy` | `true` | Shows the copy action. Also accepts the strings `"true"` and `"false"`. |
| `keepBackground` | `false` | Keeps Shiki's `--shiki-light-bg` and `--shiki-dark-bg` colors. |
| `viewportProps` | `{}` | Props for the scrolling viewport. |
| `data-line-numbers` | - | Shows line numbers for Shiki `[data-line]` elements. |
| `data-line-numbers-start` | `1` | The first displayed line number. |
| `Actions` | built-in row | Renders the action container. Return the copy button if you still want it. |

`CodeBlock.CopyButton` requires `containerRef`, a ref to the element whose text is copied. `copiedDuration` defaults to `2000` milliseconds. The button label is "Copy text", then "Copied text".

The copy action uses `navigator.clipboard` when it exists. Otherwise it uses a temporary textarea and `document.execCommand("copy")`. If the browser rejects the write, the copied state stays off.

## Related pages

- [Package command code block](./package-command-code-block.md)
- [Inline code text](./inline-code-text.md)

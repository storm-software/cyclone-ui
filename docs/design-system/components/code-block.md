---
title: Code Block
description: Reference for the CodeBlock component, a framed display for Shiki-highlighted code with a copy button and optional tabs.
documentType: reference
tags: [component, code]
component:
  name: code-block
  package: "@cyclone-ui/code-block"
  stories:
    - title: Docs/CodeBlock
      file: components/code-block/src/CodeBlock.stories.tsx
---

# Code Block

`CodeBlock` frames code that is already highlighted. It can show a title, an icon, a copy button, line numbers, and a scrollable viewport. `CodeBlock.Tabs` switches between several samples.

Syntax highlighting happens before render. The component owns the frame and the copy action. For a short snippet inside a sentence, use [Inline Code Text](./inline-code-text.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add code-block
pnpm install
```

- **File:** `CodeBlock.tsx`. The CLI writes it to `<path>/code-block/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/create-context`, `@tamagui/group`, `@tamagui/stacks`, `@tamagui/tabs`, and `@tamagui/web`.

## Import

```tsx
import { CodeBlock } from "@cyclone-ui/code-block";
```

## Usage

```tsx
<CodeBlock title="Install" allowCopy>
  <CodeBlock.Pre>{highlighted}</CodeBlock.Pre>
</CodeBlock>
```

`highlighted` is the `<code>` element from your highlighter, such as Shiki, as React elements. Shiki's `[data-line]`, `[data-highlighted-line]`, and `[data-highlighted-chars]` elements get styles. A plain HTML string renders as text.

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

```tsx
<CodeBlock title="example.ts" icon={icon}>
  <CodeBlock.Pre>
    <code>{lines}</code>
  </CodeBlock.Pre>
</CodeBlock>

<CodeBlock>
  <CodeBlock.Header>
    <CodeBlock.Header.Icon>{icon}</CodeBlock.Header.Icon>
    <CodeBlock.Header.Heading>terminal</CodeBlock.Header.Heading>
  </CodeBlock.Header>
  <CodeBlock.Body>{code}</CodeBlock.Body>
</CodeBlock>

<CodeBlock.Tabs defaultValue="pnpm">
  <CodeBlock.Tabs.List>
    <CodeBlock.Tabs.Trigger value="pnpm">pnpm</CodeBlock.Tabs.Trigger>
  </CodeBlock.Tabs.List>
  <CodeBlock.Tabs.Content value="pnpm">
    <CodeBlock>{code}</CodeBlock>
  </CodeBlock.Tabs.Content>
</CodeBlock.Tabs>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `CodeBlock` | A Tamagui `View` as `<figure>`, with a `surface` background, a 1 px `hairline` border, and the `container` radius. It holds a [Scroll View](./scroll-view.md) viewport with `role="region"` and an `elevated` background | The frame. The viewport scrolls on both axes, takes keyboard focus, and has a maximum height of 600 px. The frame adds the copy button. |
| `CodeBlock.Header` | A Tamagui `XStack` as `<figcaption>` | The caption row. The `title` prop renders one for you. The copy button goes at its end. |
| `CodeBlock.Header.Icon` | A Tamagui `View` | Holds the title icon. |
| `CodeBlock.Header.Heading` | A Tamagui `Text` as `<span>`, in the `display` font, size `sm`, weight `medium`, and color `emphasis` | The caption text. It stays on one line and ends with an ellipsis when it is too long. |
| `CodeBlock.Pre`, `CodeBlock.Body` | A Tamagui `Text` as `<pre>`, in the `code` font with `whiteSpace: pre` | Holds the code. `Body` is the same component as `Pre`. |
| `CodeBlock.CopyButton` | A circular ghost [Button](./button.md) with the `ClipboardText` icon, which changes to a `Check` icon | Copies the text of the first `<pre>` in `containerRef`. |
| `CodeBlock.Tabs` | Tamagui `Tabs` in a framed column | A tab set around several blocks. A block inside it loses its own border, radius, and margin. |
| `CodeBlock.Tabs.List` | Tamagui `Tabs.List` in a row that scrolls on the x axis | Holds the triggers. |
| `CodeBlock.Tabs.Trigger` | Tamagui `Tabs.Tab` with a `Text` label in the `display` font | One tab. The active tab has an `elevated` background and a `medium` label. |
| `CodeBlock.Tabs.Content` | Tamagui `Tabs.Content` with an `elevated` background | The panel of one tab. |

The parts are also exported by name: `Pre`, `CodeBlockCopyButton`, `CodeBlockTabs`, `CodeBlockTabsList`, `CodeBlockTabsTrigger`, and `CodeBlockTab`. `CodeBlockHeader`, `CodeBlockHeaderIcon`, `CodeBlockHeaderHeading`, and `CodeBlockBody` are flat named exports for React Server Components, which cannot read `CodeBlock.Header.Icon` from a client module.

## Examples

The examples are the stories in [`CodeBlock.stories.tsx`](../../../components/code-block/src/CodeBlock.stories.tsx). The stories set `width` to 640. Most stories show a short TypeScript sample with a highlighted line, highlighted characters, and a `$ ` prompt that has the `nd-copy-ignore` class.

| Stories | What they show |
| --- | --- |
| `Base` | A `title` and a `DocumentCode` icon. The play function presses the copy button, checks that its label changes to "Copied text", and checks that the frame and the viewport both have a border. |
| `WithoutTitle` | No header, so the copy button floats at the top right. The play function checks that the viewport has no border, so the frame border is not doubled. |
| `WithoutCopy` | `allowCopy={false}`. |
| `LineNumbers` | `data-line-numbers` with `data-line-numbers-start={4}`. |
| `KeepShikiBackground` | `keepBackground`, with `--shiki-light-bg` and `--shiki-dark-bg` set in `style`. |
| `ScrollbarsWhenContentOverflows`, `NoScrollbarsWhenContentFits` | A viewport `maxHeight` of 120 px, with 48 long lines and with the short sample. The play functions check that the viewport scrolls only when the content overflows. |
| `Tabs` | `pnpm` and `npm` install commands in `CodeBlockTabs`. |
| `CompoundCompatibility` | A compound `CodeBlock.Header` with `Header.Icon` and `Header.Heading`, and `CodeBlock.Body`, with `allowCopy={false}`. |

## Props

`CodeBlock` also accepts `View` props except `title`. The exported type is `CodeBlockProps`.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `title` | `ReactNode` | - | Caption above the code. A string title is also the `aria-label` of the viewport. |
| `icon` | `ReactNode` | - | Icon in the title. A string is treated as trusted SVG or HTML so a Shiki transformer can pass an icon through. |
| `allowCopy` | `boolean \| "true" \| "false"` | `true` | Shows the copy action. |
| `keepBackground` | `boolean` | `false` | Keeps Shiki's `--shiki-light-bg` and `--shiki-dark-bg` colors. |
| `viewportProps` | `HTMLAttributes<HTMLElement>` | `{}` | Props for the scrolling viewport. `style.maxHeight` replaces the default maximum height of 600 px. |
| `data-line-numbers` | `boolean` | - | Shows line numbers for Shiki `[data-line]` elements. |
| `data-line-numbers-start` | `number` | `1` | The first displayed line number. |
| `Actions` | `(props: CodeBlockActionsProps) => ReactNode` | built-in row | Renders the action container. It gets the copy button as `children`. Return the children if you still want the button. |

`CodeBlock.CopyButton` (`CodeBlockCopyButtonProps`) accepts the `Button` props except `children` and `onPress`. It requires `containerRef`, a ref to the element whose text is copied. `copiedDuration` defaults to `2000` milliseconds. The button label is "Copy text", then "Copied text". Its tooltip is "Copy to clipboard", then "Copied to clipboard".

`CodeBlock.Tabs`, `Tabs.List`, `Tabs.Trigger`, and `Tabs.Content` accept the props of the matching Tamagui `Tabs` parts.

The copy action reads the first `<pre>` in the container. Each element with the `nd-copy-ignore` class becomes a line break in the copied text. The copy action uses `navigator.clipboard` when it exists. Otherwise it uses a temporary textarea and `document.execCommand("copy")`. If the browser rejects the write, the copied state stays off.

## Accessibility

- The viewport has `role="region"` and `tabIndex={0}`, so keyboard users can scroll it. Its `aria-label` is a string `title`, or "Code". It shows a 2 px outline on `focus-visible`.
- The copy button has the label "Copy text", which changes to "Copied text" after a copy.
- `CodeBlock.Tabs.List` has the `aria-label` "Code samples" unless you set one.

## Related

- [Package Command Code Block](./package-command-code-block.md)
- [Inline Code Text](./inline-code-text.md)
- [Scroll View](./scroll-view.md)
- [Tabs](./tabs.md)

## Source

- [`components/code-block/src/CodeBlock.tsx`](../../../components/code-block/src/CodeBlock.tsx)
- [`components/code-block/src/CodeBlock.stories.tsx`](../../../components/code-block/src/CodeBlock.stories.tsx) (title: `Docs/CodeBlock`)

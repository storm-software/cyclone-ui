---
title: Copy Page Dropdown Button
description: Reference for the Copy Page Dropdown Button component, a docs split button that copies a page's Markdown and opens the page in AI chats.
documentType: reference
tags: [component, docs, copy-page-dropdown-button, dropdown-button, clipboard, markdown]
component:
  name: copy-page-dropdown-button
  package: "@cyclone-ui/copy-page-dropdown-button"
  stories:
    - title: Docs/CopyPageDropdownButton
      file: components/copy-page-dropdown-button/src/CopyPageDropdownButton.stories.tsx
---

# Copy Page Dropdown Button

`CopyPageDropdownButton` is a ready-made [Dropdown Button](./dropdown-button.md) for documentation pages. The main button copies the page's Markdown source to the clipboard. Its menu opens that Markdown, or asks Claude, ChatGPT, T3 Chat, or Cursor about the page.

Use it in the header of a docs page that has its Markdown source at a URL. For a split button with your own menu actions, use [Dropdown Button](./dropdown-button.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add copy-page-dropdown-button
pnpm install
```

- **File:** `CopyPageDropdownButton.tsx`. The CLI writes it to `<path>/copy-page-dropdown-button/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Context Menu](./context-menu.md), [Dropdown Button](./dropdown-button.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Popover](./popover.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Sheet](./sheet.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { CopyPageDropdownButton } from "@cyclone-ui/copy-page-dropdown-button";
```

## Usage

```tsx
<CopyPageDropdownButton markdownUrl="/docs/quick-start.md" />

<CopyPageDropdownButton
  markdownUrl="/docs/quick-start.md"
  variant="primary"
  size="sm"
/>
```

## Anatomy

```tsx
<CopyPageDropdownButton markdownUrl="/docs/page.md" />
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `CopyPageDropdownButton` | A [`DropdownButton`](./dropdown-button.md) | Joins the main button and the chevron, and holds the "Copied" state. |
| Main button | The Dropdown Button's main [`Button`](./button.md) (`<button role="button">`), with `Button.Icon` and `Button.Text` | Copies the Markdown. It shows the `Clipboard` icon and "Copy page". After a copy, it shows the `ClipboardCheck` icon and "Copied" for 2 seconds. |
| Chevron | The Dropdown Button's chevron `Button` | Opens the menu. Its label and tooltip are `menuLabel`. |
| Menu items | Five `ContextMenu.Item` elements (`<button>`), each with an `aria-label` | Each item has a `ContextMenu.Item.Icon` and two `ContextMenu.Item.Text` lines: the label and a description. The icon is a logo drawn as an SVG with `react-native-svg` (Simple Icons paths), or the text "T3" for T3 Chat. |

## Examples

The examples are the stories in [`CopyPageDropdownButton.stories.tsx`](../../../components/copy-page-dropdown-button/src/CopyPageDropdownButton.stories.tsx). The stories use the Cyclone UI `README.md` on GitHub as `markdownUrl`.

| Stories | What they show |
| --- | --- |
| `Base` | The `md` size and the `tertiary` variant. The play function replaces the clipboard and `window.open` with stubs. It presses "Copy page", waits for "Copied", and checks the copied text. Then it opens the menu, presses "Open in Claude", checks the URL that opens, and checks that the menu closes. |
| `SmallSize`, `LargeSize` | The `sm` and `lg` sizes. |
| `Primary` | The `primary` variant. |

## Props

`CopyPageDropdownButton` accepts the props of [Dropdown Button](./dropdown-button.md), except `items`, `value`, `onValueChange`, and `children`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `markdownUrl` | `string` | Required | The URL of the page's Markdown source. The main button copies it, "View as Markdown" opens it, and the AI chats are asked to read it. |
| `menuLabel` | `string` | `"More page options"` | The accessible label and the tooltip of the chevron. |
| `onPress` | `(event) => void` | — | Called when you press the main button, before the copy starts. |

## Behavior

### Copy

1. The main button fetches `markdownUrl`. A response that is not OK makes the copy fail.
2. When the browser has `ClipboardItem`, the button writes one `text/plain` item whose content waits for the fetch. This keeps Safari's user activation during the fetch. Without `ClipboardItem`, the button calls `navigator.clipboard.writeText` after the fetch.
3. When the copy succeeds, the button shows "Copied" for 2 seconds. When it fails, the button keeps "Copy page" and shows no error.

### Menu

| Item | Opens |
| --- | --- |
| View as Markdown | `markdownUrl` |
| Open in Claude | `https://claude.ai/new?q=<prompt>` |
| Open in ChatGPT | `https://chatgpt.com/?hints=search&q=<prompt>` |
| Open in T3 Chat | `https://t3.chat/new?q=<prompt>` |
| Open in Cursor | `https://cursor.com/link/prompt?text=<prompt>` |

`<prompt>` is "Read `<url>`, I want to ask questions about it.", URL-encoded. `<url>` is `markdownUrl` resolved against the current page, because the chats fetch the page themselves. Each item opens a new tab with `window.open` and `noopener,noreferrer`. The menu closes after you press an item.

## Accessibility

- The main button is a native button. Its accessible name comes from its text: "Copy page", then "Copied" after a copy. The `Base` story finds it by both names. The source adds no live region for this change.
- The chevron's accessible name is `menuLabel` ("More page options" by default).
- Each menu item is a native button. Its `aria-label` is its label, for example "Open in Claude", so the description line is not part of its name. The items open new tabs from script, not from links.
- In the open menu, ArrowDown and ArrowUp move focus between the items. See [Context menu](./context-menu.md).

## Related

- [Dropdown Button](./dropdown-button.md)
- [Button](./button.md)
- [Context menu](./context-menu.md)
- [Code Block](./code-block.md), which has its own copy button

## Source

- [`components/copy-page-dropdown-button/src/CopyPageDropdownButton.tsx`](../../../components/copy-page-dropdown-button/src/CopyPageDropdownButton.tsx)
- [`components/copy-page-dropdown-button/src/CopyPageDropdownButton.stories.tsx`](../../../components/copy-page-dropdown-button/src/CopyPageDropdownButton.stories.tsx) (title: `Docs/CopyPageDropdownButton`)

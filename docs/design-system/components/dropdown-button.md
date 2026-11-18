---
title: Dropdown Button
description: Reference for the Dropdown Button component, a split button that joins a main action to a chevron that opens a menu of related actions.
documentType: reference
tags: [component, triggers, dropdown-button, button, menu, action]
component:
  name: dropdown-button
  package: "@cyclone-ui/dropdown-button"
  stories:
    - title: Triggers/DropdownButton
      file: components/dropdown-button/src/DropdownButton.stories.tsx
---

# Dropdown Button

`DropdownButton` is a split button. The main [Button](./button.md) runs one action. A square chevron button, joined to its right side, opens a [Context menu](./context-menu.md) of related actions.

Use it when one action is the usual choice and a small number of related actions are less frequent, for example "Copy page" with other copy options. For one action only, use [Button](./button.md). For a menu with no main action, use a [Context menu](./context-menu.md) with its own trigger.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add dropdown-button
pnpm install
```

- **File:** `DropdownButton.tsx`. The CLI writes it to `<path>/dropdown-button/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Context Menu](./context-menu.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Popover](./popover.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Sheet](./sheet.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { DropdownButton } from "@cyclone-ui/dropdown-button";
```

## Usage

The children go to the main button. The menu items are `ContextMenu.Item` elements from [`@cyclone-ui/context-menu`](./context-menu.md).

```tsx
import { Button } from "@cyclone-ui/button";
import { ContextMenu } from "@cyclone-ui/context-menu";
import { DropdownButton } from "@cyclone-ui/dropdown-button";

<DropdownButton
  variant="primary"
  onPress={copyPage}
  onValueChange={value => runAction(value)}
  items={
    <>
      <ContextMenu.Item value="markdown">
        <ContextMenu.Item.Text>Copy as Markdown</ContextMenu.Item.Text>
      </ContextMenu.Item>
      <ContextMenu.Item value="link">
        <ContextMenu.Item.Text>Copy link</ContextMenu.Item.Text>
      </ContextMenu.Item>
    </>
  }>
  <Button.Text>Copy page</Button.Text>
</DropdownButton>
```

## Anatomy

```tsx
<DropdownButton
  items={
    <ContextMenu.Item value="action">
      <ContextMenu.Item.Text>Action</ContextMenu.Item.Text>
    </ContextMenu.Item>
  }>
  <Button.Icon>{icon}</Button.Icon>
  <Button.Text>Label</Button.Text>
</DropdownButton>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| Wrapper (internal) | A Tamagui `View` in a row, with `width="fit-content"` | Holds the two halves side by side. |
| Main button | A [`Button`](./button.md): a Tamagui `View` as `<button role="button">` | The main action. It gets the children, `ref`, and the other Button props, such as `onPress`. Its right corners are square. |
| Chevron | A square `tight` [`Button`](./button.md) with a `ChevronDown` icon, used as the `ContextMenu.Trigger` | Opens and closes the menu. `menuLabel` is its `aria-label` and its tooltip. Its left corners are square. It overlaps the main button by one border width, so the two borders make one divider. On the `primary` variant, which has no border, it draws a left border in `on-primary/25`. |
| Menu | A [`ContextMenu`](./context-menu.md) with `ContextMenu.Content` and `ContextMenu.Content.ScrollView` | Shows the `items`. It opens at `bottom-end`. Its size is `sm` or `lg` when `size` is, and `md` otherwise. |
| `items` | The `ContextMenu.Item` elements that you supply. Each item is a `<button>`. | The related actions. |

## Examples

The examples are the stories in [`DropdownButton.stories.tsx`](../../../components/dropdown-button/src/DropdownButton.stories.tsx). Each story shows a "Copy page" button with a clipboard icon and three menu items: "Copy as Markdown", "View as Markdown", and "Copy link".

| Stories | What they show |
| --- | --- |
| `Base` | The `md` size. The play function checks that the inner corners are square. It presses the main button and checks `onPress`. Then it opens the menu, presses "Copy link", checks that `onValueChange` receives `"link"`, and checks that the menu closes. |
| `SmallSize`, `LargeSize` | The `sm` and `lg` sizes. |
| `Primary`, `Outlined` | The `primary` and `outlined` variants, with their divider between the halves. |
| `Disabled` | Both halves disabled. |

## Props

`DropdownButton` accepts the props of [Button](./button.md). These Button props apply to both halves: `variant`, `size`, `disabled`, `theme`, `shadowStyle`, `glass`, `noise`, `accented`, `animate`, `ringed`, and `rounded`. The other props, and the children, go to the main button only.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `ReactNode` | Required | The menu's `ContextMenu.Item` elements. The chevron opens them. |
| `menuLabel` | `string` | `"More options"` | The accessible label and the tooltip of the chevron. |
| `value` | `string` | — | The `value` of the selected item. That item shows a check mark. |
| `onValueChange` | `(value: string) => void` | — | Called with an item's `value` when you press that item. |
| `borderRadius` | radius token or number | `"button"`, or `100000` when `rounded` | The radius of the outer corners of both halves. |
| `ref` | `Ref<TamaguiElement>` | — | The ref of the main button. |

## Behavior

- The component keeps the menu's open state. It has no `open` prop.
- When you press an item that has a `value`, the menu closes and `onValueChange` receives the value. An item without a `value` does not close the menu.
- While one half has keyboard focus, it moves above the other half, so the other half does not cover its focus ring.

## Accessibility

- The two halves are separate native buttons, so each one is a separate Tab stop.
- The main button gets its accessible name from its children. For an icon-only main button, set `aria-label`.
- The chevron's accessible name is `menuLabel` ("More options" by default). Its tooltip shows the same text. The `Base` story finds the chevron by this name.
- In the open menu, ArrowDown and ArrowUp move focus between the enabled items, and wrap at the ends. See [Context menu](./context-menu.md).
- `disabled` disables both halves.

## Related

- [Button](./button.md)
- [Context menu](./context-menu.md)
- [Copy Page Dropdown Button](./copy-page-dropdown-button.md), a ready-made "Copy page" Dropdown Button for docs pages
- [Popover](./popover.md)

## Source

- [`components/dropdown-button/src/DropdownButton.tsx`](../../../components/dropdown-button/src/DropdownButton.tsx)
- [`components/dropdown-button/src/DropdownButton.stories.tsx`](../../../components/dropdown-button/src/DropdownButton.stories.tsx) (title: `Triggers/DropdownButton`)

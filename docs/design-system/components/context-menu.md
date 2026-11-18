---
title: Context Menu
description: Reference for the ContextMenu component, an action list that uses a popover on large screens and a sheet on small screens.
documentType: reference
tags: [component, menu, overlay]
component:
  name: context-menu
  package: "@cyclone-ui/context-menu"
  stories:
    - title: Containers/ContextMenu
      file: components/context-menu/src/ContextMenu.stories.tsx
---

# Context Menu

`ContextMenu` shows a list of actions. On large screens the list is a popover. On small screens it is a bottom sheet.

An item shows a check mark when its `value` matches the menu `value`. A disabled item shows a lock. An item with child `items` shows a chevron and opens a submenu. An item can also stay highlighted while focus is elsewhere, which is how a combobox marks the active option.

[Phone number input](./phone-number-input.md) uses this menu for its country list.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add context-menu
pnpm install
```

- **Files:** `ContextMenu.tsx` and `utilities.ts`. The CLI writes them to `<path>/context-menu/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Popover](./popover.md), [Scroll View](./scroll-view.md), [Sheet](./sheet.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { ContextMenu } from "@cyclone-ui/context-menu";
```

## Usage

```tsx
<ContextMenu value={country} onValueChange={setCountry} size="md">
  <ContextMenu.Trigger asChild={true}>
    <Button>Country</Button>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Content.ScrollView>
      <ContextMenu.Item value="us">
        <ContextMenu.Item.Label>United States</ContextMenu.Item.Label>
      </ContextMenu.Item>
      <ContextMenu.Item value="ca">
        <ContextMenu.Item.Label>Canada</ContextMenu.Item.Label>
      </ContextMenu.Item>
    </ContextMenu.Content.ScrollView>
  </ContextMenu.Content>
</ContextMenu>
```

## Anatomy

```tsx
<ContextMenu>
  <ContextMenu.Trigger />
  <ContextMenu.Anchor />
  <ContextMenu.Content>
    <ContextMenu.Content.ScrollView>
      <ContextMenu.Item items={childItems}>
        <ContextMenu.Item.Icon />
        <ContextMenu.Item.Label />
        <ContextMenu.Item.Text />
      </ContextMenu.Item>
    </ContextMenu.Content.ScrollView>
  </ContextMenu.Content>
</ContextMenu>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `ContextMenu` | A [Popover](./popover.md) with `placement="bottom-start"`, a `2xl` offset, and the form-control size token of `size`. Like every `Popover`, it opens in a bottom [Sheet](./sheet.md) on `max-sm`. | Holds `value`, `onValueChange`, `size`, and `variant`. |
| `ContextMenu.Trigger` | `Popover.Trigger`. | Opens the menu. |
| `ContextMenu.Anchor` | `Popover.Anchor`. | Positions the popover. |
| `ContextMenu.Content` | `Popover.Content` with `maxWidth="90vw"` and a maximum height that fits the space on the side where the popover opens. An inner `View` holds the children and handles the arrow keys. On web, it adds a `<style>` element for the dividers and the narrow-menu layout. | The list surface. |
| `ContextMenu.Content.ScrollView` | `Popover.Content.ScrollView`, at most `47xl` high. It adds right padding only when its content overflows. | A scrollable list. |
| `ContextMenu.Item` | A Tamagui `View` as `<button type="button">`, with `aria-disabled` when disabled. It holds a hover background, a bottom divider, and an `aria-hidden` indicator: a check mark, a lock, or a chevron. With `items`, it is the trigger of a hoverable submenu `Popover` (`placement="right-start"`). On `max-sm`, the child items expand inline below it. | One action. |
| `ContextMenu.Item.Text` | A [Body Text](./body-text.md) as `<span>`, on one line with an ellipsis. While the text is cut off, a [Tooltip](./tooltip.md) shows the full text. | Trailing or extra text. |
| `ContextMenu.Item.Label` | `ContextMenu.Item.Text` with `flex={1}`. | The main label. It fills the space before trailing text. |
| `ContextMenu.Item.Icon` | A [Body Text](./body-text.md) as `<span aria-hidden>`. | A leading icon, flag, or other adornment. |

`ContextMenuTrigger`, `ContextMenuAnchor`, `ContextMenuContent`, `ContextMenuScrollView`, `ContextMenuItem`, `ContextMenuItemText`, `ContextMenuItemLabel`, and `ContextMenuItemIcon` are also exported by name. Use them in React Server Components, which cannot read `ContextMenu.Trigger` from a client module.

The package also exports `getContextMenuSize(size)`. It returns the text, spacing, and indicator metrics of a menu size, scaled with the form-control size.

## Examples

The examples are the stories in [`ContextMenu.stories.tsx`](../../../components/context-menu/src/ContextMenu.stories.tsx). Each story opens a 320px menu from an "Actions" button. A selected item closes the menu, and the trigger then shows its value.

| Stories | What they show |
| --- | --- |
| `Base` | Six actions. The play function selects "Rename", reopens the menu, and checks that "Rename" has a check mark. "Delete" is disabled: it shows a lock, and a press does not close the menu. A long action ends in an ellipsis, and hover shows its full text in a tooltip. |
| `SmallSize`, `LargeSize` | The `sm` and `lg` sizes. |
| `Primary`, `Secondary`, `Tertiary`, `Outlined`, `Floating` | Each of these `variant` values. On `primary` and `secondary`, the items use `on-primary` and `on-secondary`. |
| `Accented`, `Glass`, `Flat` | The `accented`, `glass`, and `shadowStyle="flat"` surface props. |
| `ThemedAndChildItems` | A "Share" item with child items in a submenu, and items themed `brand` and `danger` with a leading `ContextMenu.Item.Icon`. The play function opens "Share" and selects "Slack". |

## Props

### `ContextMenu`

`ContextMenu` also accepts the [Popover](./popover.md#props) props (except `size` and `variant`), such as `open`, `onOpenChange`, `shadowStyle`, `glass`, `noise`, `accented`, `placement`, and `offset`.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The control size. It scales the item text, spacing, and indicators, and sets the popover size. |
| `value` | `string` | - | The selected item. That item shows a check mark. |
| `onValueChange` | `(value: string) => void` | - | Called with the pressed item's `value`. |
| `variant` | [Container](./container.md) variant | - | The menu surface, passed to [Popover](./popover.md#variants) with its other surface props (`shadowStyle`, `glass`, `noise`, `accented`). On `primary` and `secondary`, item text, icons, and indicators use `on-primary` / `on-secondary` (`primary` on `secondary` with the uncolored base theme). Hovered, focused, and highlighted items use `primary-hovered`, `secondary-hovered`, or `surface-hovered` on the `primary`, `secondary`, and `tertiary` menus, and `floating-active` on the others. Unset, the menu uses the `Popover` default, `elevated`. |

### `ContextMenu.Item`

`ContextMenu.Item` also accepts the props of a Tamagui `View` (except `size`).

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `value` | `string` | - | Passed to the menu's `onValueChange` on press. The item is selected when this value equals the menu `value`. |
| `disabled` | `boolean` | `false` | Shows a lock, dims the item, and sets `aria-disabled`. Presses are ignored. |
| `highlighted` | `boolean` | `false` | Shows the item as hovered while focus stays elsewhere, for example on a combobox's `aria-activedescendant` option. |
| `theme` | `ThemeName \| null` | - | Colors the item's text and icons with this theme's `primary` tokens, for example `danger` on a destructive action. The hover background stays the menu's. |
| `items` | `ReactNode` | - | Child items, shown in a submenu that opens beside this item on hover, press, or `ArrowRight`. The item shows a right chevron. On `max-sm`, the child items expand inline. |
| `onPress` | `(event) => void` | - | Called on press, before `onValueChange`. It does not run when the item is disabled. |

### Other parts

- `ContextMenu.Content` accepts the `Popover.Content` props.
- `ContextMenu.Content.ScrollView` accepts the [ScrollView](./scroll-view.md) props.
- `ContextMenu.Item.Text`, `ContextMenu.Item.Label`, and `ContextMenu.Item.Icon` accept the [Body Text](./body-text.md) props.

## Behavior

- **Selection.** A press on an item calls `onValueChange` with its `value`. The menu does not close by itself. The stories close it in `onValueChange`.
- **Dividers.** A hairline divider separates the items. The last item has no divider.
- **Narrow menus.** A menu narrower than the `20xl` size token centers its item text, unless an item shows an indicator.
- **Submenus.** On large screens, a submenu is a `Popover` to the right of the item. It opens on hover, press, or `ArrowRight`. On `max-sm`, the child items expand inline below the item, and the chevron turns 90 degrees.

## Accessibility

- Each item is a `<button type="button">`, so it does not submit a form. The source sets no `menu` or `menuitem` role. Give each item an accessible name. The stories set `aria-label` on each item.
- `ArrowDown` and `ArrowUp` move focus to the next or previous enabled item, and wrap at the ends. Disabled items are skipped.
- `ArrowRight` opens an item's submenu. `ArrowLeft` closes it. In the inline form, `ArrowLeft` also moves focus back to the parent item.
- When the menu opens, its first item gets focus. The item shows its highlight only on `focus-visible`, not on that first focus.
- The check mark, lock, chevron, and `ContextMenu.Item.Icon` are `aria-hidden`. A disabled item has `aria-disabled="true"`.
- The [Popover](./popover.md#accessibility) supplies the trigger state, the focus trap, and the Escape key.

## Related

- [Popover](./popover.md)
- [Select](./select.md)
- [Dropdown button](./dropdown-button.md)
- [Phone number input](./phone-number-input.md)
- [Sheet](./sheet.md)
- [Tooltip](./tooltip.md)

## Source

- [`components/context-menu/src/ContextMenu.tsx`](../../../components/context-menu/src/ContextMenu.tsx)
- [`components/context-menu/src/utilities.ts`](../../../components/context-menu/src/utilities.ts)
- [`components/context-menu/src/ContextMenu.stories.tsx`](../../../components/context-menu/src/ContextMenu.stories.tsx) (title: `Containers/ContextMenu`)

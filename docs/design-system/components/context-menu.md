---
title: Context menu
description: Reference for the ContextMenu component, an action list that uses a popover on large screens and a sheet on small screens.
documentType: reference
tags: [component, menu, overlay]
---

# Context menu

`ContextMenu` shows a list of actions. On large screens the list is a popover. On small screens it is a bottom sheet.

An item shows a check mark when its `value` matches the menu `value`. A disabled item shows a lock. An item can also stay highlighted while focus is elsewhere, which is how a combobox marks the active option.

[Phone number input](./phone-number-input.md) uses this menu for its country list.

Source: [`components/context-menu`](https://github.com/storm-software/cyclone-ui/tree/main/components/context-menu)

## Import

```tsx
import { ContextMenu } from "@cyclone-ui/context-menu";
```

## Usage

```tsx
<ContextMenu value={country} onValueChange={setCountry} size="md">
  <ContextMenu.Trigger>
    <Button>Country</Button>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item value="us">
      <ContextMenu.Item.Label>United States</ContextMenu.Item.Label>
    </ContextMenu.Item>
    <ContextMenu.Item value="ca">
      <ContextMenu.Item.Label>Canada</ContextMenu.Item.Label>
    </ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu>
```

## Anatomy

| Part | Purpose |
| --- | --- |
| `ContextMenu` | Holds `value`, `onValueChange`, and `size`. |
| `ContextMenu.Trigger` | Opens the menu. A popover trigger. |
| `ContextMenu.Anchor` | Positions the popover. |
| `ContextMenu.Content` | The list surface. |
| `ContextMenu.Content.ScrollView` | A scrollable list. |
| `ContextMenu.Item` | One action. |
| `ContextMenu.Item.Text` | Trailing or extra text. |
| `ContextMenu.Item.Label` | The main label. It fills the space before trailing text. |
| `ContextMenu.Item.Icon` | An icon in the item. |

## Props

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `size` | `"sm"`, `"md"`, or `"lg"` | - | The control size. `getContextMenuSize` treats a missing size as `"md"`. |
| `value` | `string` | - | The selected item. That item shows a check mark. |
| `onValueChange` | `(value: string) => void` | - | Called with the pressed item's `value`. |

`ContextMenu.Item` takes `value`. The item is selected when that value equals the menu `value`. Pressing the item calls `onValueChange`.

`ContextMenu.Content` accepts popover content props.

## Related pages

- [Popover](./popover.md)
- [Select](./select.md)
- [Sheet](./sheet.md)

---
title: Tabs
description: A tabbed interface with header triggers and content panels. It has underline, floating, and tabbed variants in two orientations.
documentType: reference
tags: [component, tabs, navigation, container]
---

# Tabs

`Tabs` switches between panels of content. It builds on the Tamagui `Tabs`. It adds three visual variants, horizontal or vertical layout, and an animated active indicator.

## Import

```tsx
import { Tabs } from "@cyclone-ui/tabs";
```

## Usage

Each `Tabs.Header.Item` and its `Tabs.Content.Item` share the same `value`.

```tsx
import { Tabs } from "@cyclone-ui/tabs";

export function Example() {
  return (
    <Tabs variant="floating" onValueChange={value => console.log(value)}>
      <Tabs.Header>
        <Tabs.Header.Item value="tab1">Overview</Tabs.Header.Item>
        <Tabs.Header.Item value="tab2">Details</Tabs.Header.Item>
      </Tabs.Header>
      <Tabs.Content>
        <Tabs.Content.Item value="tab1">First panel</Tabs.Content.Item>
        <Tabs.Content.Item value="tab2">Second panel</Tabs.Content.Item>
      </Tabs.Content>
    </Tabs>
  );
}
```

The first header item becomes the current tab when no tab is set.

## Parts

| Part | Role |
| --- | --- |
| `Tabs` | The root. It holds the shared state and passes variant settings to its parts. |
| `Tabs.Header` | The list that holds the triggers. It draws the active and hover indicators. |
| `Tabs.Header.Item` | One trigger. It needs a `value`. Its label uses `HeadingSmallText`. |
| `Tabs.Content` | The wrapper for the panels. |
| `Tabs.Content.Item` | One panel. It needs a `value`. |

## Props

`TabsProps` is the Tamagui tabs frame props, with the four context props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"underline" \| "floating" \| "tabbed"` | `"floating"` | The visual style. |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | The direction of the tab list. |
| `bordered` | `boolean` | `true` | Shows the borders that the variant owns. |
| `size` | `SizeTokens` | `true` | Sets the item padding and label size. Only size token names restyle the root. |
| `onValueChange` | `(value: string) => void` | — | Called with the selected tab value. |
| `theme` | Tamagui theme name | Inherited | The stories use `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. |

`Tabs.Header.Item` and `Tabs.Content.Item` take a required `value` (`string`) and the matching Tamagui tab props. `Tabs.Header.Item` also accepts `onInteraction`.

## Variants and states

| Variant | Header style | Indicator |
| --- | --- | --- |
| `underline` | A `sunken` bottom border (`lg` width) with no radius. | An active bar and a hover bar. |
| `floating` | A `sunken` background, `hairline` border, and the `tabs` radius. | None. |
| `tabbed` | No background and no padding. Each item has its own border and the `tab` radius. | None. Items and panel use `surface` when selected. The panel has a `surface` background. |

- **Selected item:** The label uses `primary-active` and `semibold`. Other labels use `primary-inactive` and `medium`.
- **Hover:** A label uses `primary` when the pointer is over its item. The `tabbed` items use `canvas-hovered` on hover.
- **Vertical:** The header list has a minimum width of `20xl`. The panel takes the remaining space.
- **Borderless:** Set `bordered={false}` to remove the variant borders.
- **Panels:** Only the active panel is in the layout. The others are positioned absolutely.

The stories cover `Floating`, `Underline`, `Tabbed`, their borderless forms, `TabbedVertical`, `Horizontal`, and `Vertical`.

## Accessibility

- The root sets `activationMode` to `manual`. The user selects a tab by press, not by arrow-key focus.
- The tab list sets `aria-label="Tabs"` and does not loop with the keyboard (`loop={false}`).
- The roles and keyboard handling come from the Tamagui `Tabs`. The source adds no other ARIA attributes.

## Related

- [Design tokens](../tokens/index.md)

## Source

- [`components/tabs/src/Tabs.tsx`](../../../components/tabs/src/Tabs.tsx)
- [`components/tabs/src/Tabs.stories.tsx`](../../../components/tabs/src/Tabs.stories.tsx)
- [`components/tabs/src/Tabs.bordered.spec.ts`](../../../components/tabs/src/Tabs.bordered.spec.ts)

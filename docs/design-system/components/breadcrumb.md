---
title: Breadcrumb
description: Reference for the Breadcrumb component, a trail of links that shows where the current page is in a site hierarchy.
documentType: reference
tags: [component, triggers, navigation, breadcrumb]
---

# Breadcrumb

`Breadcrumb` shows the path to the current page. Each ancestor is a link. The current page is plain text at the end.

When the trail is long, the middle links collapse into a menu behind a `...` button.

## Import

```tsx
import { Breadcrumb } from "@cyclone-ui/breadcrumb";
```

## Usage

```tsx
<Breadcrumb currentName="Headings" separator="chevron">
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
</Breadcrumb>
```

## Anatomy

| Part                | Purpose                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------- |
| `Breadcrumb`        | The root. It sets the separator and the link style for all items.                            |
| `Breadcrumb.Item`   | One ancestor link, followed by a separator. It is a [Link](./link.md). In the collapsed menu, it is a menu row. |
| Current page        | The `currentName` text. It has the `primary` color and no link.                              |

## Props

### `Breadcrumb`

| Prop                  | Type                                | Default       | Description                                                                 |
| --------------------- | ----------------------------------- | ------------- | --------------------------------------------------------------------------- |
| `currentName`         | `string`                            | -             | The name of the current page. Required. If empty, `Current` is shown.       |
| `separator`           | `"chevron" \| "double" \| "slash"`  | `"slash"`     | The mark between items.                                                     |
| `variant`             | link text variant                   | `"base"`      | The link color. The stories use `base`, `emphasis`, `ink`, `subtle`, and `subtlest`. |
| `mixed`               | `boolean`                           | `false`       | Passed to each link. See [Link Text](./link-text.md).                       |
| `inverse`             | `boolean`                           | `false`       | Passed to each link.                                                        |
| `themed`              | `boolean`                           | `false`       | Colors links with the `primary` token of the theme.                         |
| `size`                | `"sm" \| "md"`                      | link `sm`     | The link size. Any other value renders as `sm`.                             |
| `theme`               | theme name                          | -             | The color theme. The stories use `discovery`, `danger`, `warning`, `info`, and `success`. |
| `maxItems`            | `number`                            | `8`           | The most items to show, counting the current page.                          |
| `itemsBeforeCollapse` | `number`                            | `1`           | The links to show before the menu.                                          |
| `itemsAfterCollapse`  | `number`                            | `1`           | The items to show after the menu, counting the current page.                |
| `expandText`          | `string`                            | `"Show path"` | The accessible label of the menu button.                                    |

`Breadcrumb.Item` accepts the props of [Link](./link.md), such as `href`.

## Separators

| Value     | Mark                                  |
| --------- | ------------------------------------- |
| `slash`   | A bold `/`                            |
| `chevron` | A bold right caret                    |
| `double`  | A double right caret                  |

Separators use the `outline` color token. See [Design tokens](../tokens/index.md).

## Collapse rules

`getBreadcrumbCollapse` decides which links move into the menu. It is in `utilities.ts`.

- The current page counts as an item. The total is the number of links plus one.
- Nothing collapses if the total is at most `maxItems`.
- Nothing collapses if `itemsBeforeCollapse + itemsAfterCollapse` is at least the total.
- Otherwise, the links after the first `itemsBeforeCollapse` links and before the last `itemsAfterCollapse - 1` links collapse.
- The current page always shows last.

Example: with the defaults and 8 links, links 2 to 8 move into the menu. The first link and the current page stay.

## Behavior

- **Collapsed menu.** The `...` button opens a popover with the hidden links. Pressing a link closes the popover.
- **Menu width.** Long link names end with an ellipsis in the menu.

## Accessibility

- The menu button has an `aria-label` from `expandText`.

## Related

- [Link](./link.md)
- [Link Text](./link-text.md)
- [Popover](./popover.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/breadcrumb/src/Breadcrumb.tsx`](../../../components/breadcrumb/src/Breadcrumb.tsx)
- [`components/breadcrumb/src/utilities.ts`](../../../components/breadcrumb/src/utilities.ts)
- [`components/breadcrumb/src/Breadcrumb.stories.tsx`](../../../components/breadcrumb/src/Breadcrumb.stories.tsx) (title: `Triggers/Breadcrumb`)

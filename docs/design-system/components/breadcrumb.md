---
title: Breadcrumb
description: Reference for the Breadcrumb component, a trail of links that shows where the current page is in a site hierarchy.
documentType: reference
tags: [component, triggers, navigation, breadcrumb]
component:
  name: breadcrumb
  package: "@cyclone-ui/breadcrumb"
  stories:
    - title: Triggers/Breadcrumb
      file: components/breadcrumb/src/Breadcrumb.stories.tsx
---

# Breadcrumb

`Breadcrumb` shows the path to the current page. Each ancestor is a link. The current page is plain text at the end.

When the trail is long, the middle links collapse into a menu behind a `...` button.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add breadcrumb
pnpm install
```

- **Files:** `Breadcrumb.tsx` and `utilities.ts`. The CLI writes them to `<path>/breadcrumb/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Link](./link.md), [Link Text](./link-text.md), [Popover](./popover.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Sheet](./sheet.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/group`, `@tamagui/helpers`, `@tamagui/stacks`, and `@tamagui/text`.

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

```tsx
<Breadcrumb currentName="Headings">
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
</Breadcrumb>
```

| Part              | Renders                                                                                                                         | Purpose                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `Breadcrumb`      | A Tamagui `XStack` in a `Theme`. An `XGroup` with `display: contents` holds the trail.                                           | The root. It sets the size, the separator, and the link style for all items.                 |
| `Breadcrumb.Item` | An `XGroup.Item` with a [Link](./link.md) (`<a role="link">`) and a separator. In the collapsed menu, a block `Link` with no separator. | One ancestor link. In the collapsed menu, it is a menu row.                          |
| Separator         | A bold `ChevronRight` or `ChevronDoubleRight` icon, or a `/` in a `SizableText`.                                                | The mark after each link and after the menu button.                                          |
| Menu button       | A ghost, circular [Button](./button.md) with a `DotsHorizontal` icon. It is the trigger of a [Popover](./popover.md).           | Stands in for the collapsed links. It shows only when links collapse.                        |
| Current page      | A Tamagui `Text` in the `base` theme.                                                                                           | The `currentName` text. It has the `primary` color, the `display` font, and no link.         |

`BreadcrumbItem` is also exported by name. Use it in React Server Components, which cannot read `Breadcrumb.Item` from a client module.

## Examples

The examples are the stories in [`Breadcrumb.stories.tsx`](../../../components/breadcrumb/src/Breadcrumb.stories.tsx). Each story renders three links and the current page `Current Page`.

| Stories                                                                     | What they show                                                                   |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `Base`                                                                      | The default `md` size, `base` link variant, and `slash` separator.               |
| `Small`, `Large`                                                            | The `sm` and `lg` sizes.                                                         |
| `Emphasis`, `Ink`, `Subtle`                                                 | The `emphasis`, `ink`, and `subtle` link variants.                               |
| `Mixed`, `MixedInverse`                                                     | `mixed` on the `emphasis` variant, then `mixed` with `inverse`.                  |
| `Themed`                                                                    | `themed`, which colors the links with the theme's `primary` token.               |
| `Slash`, `Chevron`, `DoubleChevron`                                         | The `slash`, `chevron`, and `double` separators.                                 |
| `DiscoveryTheme`, `ErrorTheme`, `WarningTheme`, `InfoTheme`, `SuccessTheme` | The `discovery`, `danger`, `warning`, `info`, and `success` themes.              |

No story has enough links to collapse the trail into the menu.

## Props

### `Breadcrumb`

| Prop                  | Type                                | Default       | Description                                                                 |
| --------------------- | ----------------------------------- | ------------- | --------------------------------------------------------------------------- |
| `currentName`         | `string`                            | -             | The name of the current page. Required. If empty, `Current` is shown.       |
| `separator`           | `"chevron" \| "double" \| "slash"`  | `"slash"`     | The mark between items.                                                     |
| `variant`             | link text variant                   | `"base"`      | The link color. The stories use `base`, `emphasis`, `ink`, `subtle`. |
| `mixed`               | `boolean`                           | `false`       | Passed to each link. See [Link Text](./link-text.md).                       |
| `inverse`             | `boolean`                           | `false`       | Passed to each link.                                                        |
| `themed`              | `boolean`                           | `false`       | Colors links with the `primary` token of the theme.                         |
| `size`                | `"sm" \| "md" \| "lg"`              | `"md"`        | The size of the links, the current page, the separators, and the gaps. For any other font size token, the links render at `sm`. |
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

Separators use the `border` color token. See [Design tokens](../tokens/index.md).

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

- The menu button has an `aria-label` and a tooltip from `expandText`.
- The source sets no landmark element, landmark role, or `aria-current` on the trail.

## Related

- [Link](./link.md)
- [Link Text](./link-text.md)
- [Popover](./popover.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/breadcrumb/src/Breadcrumb.tsx`](../../../components/breadcrumb/src/Breadcrumb.tsx)
- [`components/breadcrumb/src/utilities.ts`](../../../components/breadcrumb/src/utilities.ts)
- [`components/breadcrumb/src/Breadcrumb.stories.tsx`](../../../components/breadcrumb/src/Breadcrumb.stories.tsx) (title: `Triggers/Breadcrumb`)

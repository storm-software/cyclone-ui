---
title: Table of Contents
description: A page navigation list built from heading items. It highlights the current section while the reader scrolls.
documentType: reference
tags: [component, navigation, docs, table-of-contents]
component:
  name: table-of-contents
  package: "@cyclone-ui/table-of-contents"
  stories:
    - title: Docs/TableOfContents
      file: components/table-of-contents/src/TableOfContents.stories.tsx
---

# Table of Contents

`TableOfContents` renders a `nav` with a list of links to headings. It draws an indented rail beside the links. On web, the rail and the link colors show the active heading path. Use it beside long documents.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add table-of-contents
pnpm install
```

- **Files:** `TableOfContents.tsx` and `utilities.ts`. The CLI writes them to `<path>/table-of-contents/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md) and [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/stacks`.

## Import

```tsx
import { TableOfContents } from "@cyclone-ui/table-of-contents";
import type { TableOfContentsItem } from "@cyclone-ui/table-of-contents";
```

## Usage

```tsx
import { TableOfContents } from "@cyclone-ui/table-of-contents";

const items = [
  { title: "Overview", url: "#overview", depth: 2 },
  { title: "Hot Keys", url: "#hot-keys", depth: 3 },
  { title: "Custom UI", url: "#custom-ui", depth: 2 }
];

export function Example() {
  return <TableOfContents items={items}>On this page</TableOfContents>;
}
```

The `url` of each item must match the `id` of a heading on the page. The component finds the heading with `document.getElementById`.

## Anatomy

```tsx
<TableOfContents items={items}>On this page</TableOfContents>
```

`TableOfContents` is one part. It renders these pieces:

| Part              | Renders                                                                                                                                                                   | Purpose                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `TableOfContents` | A Tamagui `YStack` as `<nav aria-label="Table of contents">`, 240 px to 360 px wide.                                                                                      | The root.                                                     |
| Title             | An `XStack` with a `List` icon (`aria-hidden`) and a `BodyText` `<span>` in the `subtle` color.                                                                           | Shows `children`.                                             |
| Rail              | On web, two SVG `<path>` elements (a `hairline` path and a clipped `primary` path) and a 7 px `primary` dot that moves along the path. On native, a 2 px `hairline` bar. All `aria-hidden`. | Shows the heading levels and the active heading path.         |
| List              | A Tamagui `YStack` as `<ol>`, with one `<li>` for each item.                                                                                                              | Holds the links.                                              |
| Link              | A Tamagui `View` as `<a href>`, with a `BodyText` `<span>` label. The active link has `aria-current="location"`.                                                         | Goes to the heading. Indented by its depth.                   |

## Examples

The examples are the stories in [`TableOfContents.stories.tsx`](../../../components/table-of-contents/src/TableOfContents.stories.tsx). Both stories use five items at depths 2 and 3, with the title `On this page`.

| Stories          | What they show                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| `Base`           | The title, the rail, and the links alone, without the headings they point to.                                      |
| `ScrollTracking` | The list in a sticky sidebar next to a scrolling article with matching heading `id`s. Scroll the article to move the active item. |

## Props

`TableOfContentsProps` is `GetProps<typeof TableOfContents>`. The component also accepts the Tamagui `YStack` props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `readonly TableOfContentsItem[]` | — | Headings in document order. The component renders nothing when the array is empty. |
| `children` | `ReactNode` | `"On this page"` | The title above the links. |

### `TableOfContentsItem`

| Field | Type | Description |
| --- | --- | --- |
| `title` | `ReactNode` | The label for the heading. |
| `url` | `string` | A hash URL, for example `#installation`. |
| `depth` | `number` | The heading level. The lowest depth in the list is the top level. Other levels are indented by 16px each. |

## Behavior

- **Active item:** On web, the component finds the last heading above the activation line (35% of the window height, at most 180px). It updates on scroll, resize, and `hashchange`. When the reader scrolls to the end of the content, the last item becomes active.
- **Press:** Pressing a link sets that item as active.
- **Rail:** An SVG path joins the item markers. A `hairline` path shows the full rail. A `primary` path shows the active part. Depth changes use a curve.
- **Link color:** Links use `primary-inactive`. They use `primary-hovered` on hover. Links on the active path use `primary` and the `medium` font weight.
- **Native platforms:** The scroll tracking runs only when `Platform.OS` is `web`.
- **Scroll end check:** The exported `isScrolledToEnd` helper returns `true` when `scrollTop > 0` and the view is within 2px of the end. A view that does not scroll returns `false`.
- **Hooks:** The package also exports `useActiveTableOfContentsItem(items)`, which returns `activeIndex`, `activeUrl`, `scrolledToEnd`, and `setActiveUrl`, and `usePrefersReducedMotion()`.

## Accessibility

- The root element is a `nav` with `aria-label="Table of contents"`.
- The list is an `ol`. The active link has `aria-current="location"`.
- The icon and the SVG rails are hidden from assistive technology with `aria-hidden`.
- The link text transition is turned off when the user prefers reduced motion. The rail motion also respects this setting.
- Links show a `ring-subtle` shadow when focused.

## Related

- [Design tokens](../tokens/index.md)
- [Type table](./type-table.md)

## Source

- [`components/table-of-contents/src/TableOfContents.tsx`](../../../components/table-of-contents/src/TableOfContents.tsx)
- [`components/table-of-contents/src/utilities.ts`](../../../components/table-of-contents/src/utilities.ts)
- [`components/table-of-contents/src/TableOfContents.stories.tsx`](../../../components/table-of-contents/src/TableOfContents.stories.tsx)

---
title: Table of contents
description: A page navigation list built from heading items. It highlights the current section while the reader scrolls.
documentType: reference
tags: [component, navigation, docs, table-of-contents]
---

# Table of contents

`TableOfContents` renders a `nav` with a list of links to headings. It draws an indented rail beside the links. On web, the rail and the link colors show the active heading path. Use it beside long documents.

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

- **Active item:** On web, the component finds the last heading above the activation line. It updates on scroll, resize, and `hashchange`. When the reader scrolls to the end of the content, the last item becomes active.
- **Press:** Pressing a link sets that item as active.
- **Rail:** An SVG path joins the item markers. A `hairline` path shows the full rail. A `primary` path shows the active part. Depth changes use a curve.
- **Link color:** Links use `primary-inactive`. They use `primary-hovered` on hover. Links on the active path use `primary`.
- **Native platforms:** The scroll tracking runs only when `Platform.OS` is `web`.
- **Scroll end check:** The exported `isScrolledToEnd` helper returns `true` when `scrollTop > 0` and the view is within 2px of the end. A view that does not scroll returns `false`.

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

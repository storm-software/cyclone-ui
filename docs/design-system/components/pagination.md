---
title: Pagination
description: A page navigation bar with previous and next buttons, first and last page buttons, and a sliding window of page numbers.
documentType: reference
tags: [component, navigation, pagination, trigger]
---

# Pagination

`Pagination` is a page navigation bar. It shows previous and next buttons, a first page button, a last page button, and a window of page numbers with ellipses. You control it with `pageCount`, `pageIndex`, and `setPageIndex`.

## Import

```tsx
import { Pagination } from "@cyclone-ui/pagination";
```

## Usage

`pageIndex` starts at `0`. Page 1 is index `0`.

```tsx
import { useState } from "react";
import { Pagination } from "@cyclone-ui/pagination";

export function Example() {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <Pagination
      pageCount={10}
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
    />
  );
}
```

## Props

`PaginationProps` combines the `XStack` props (without `color`), the `color` and `size` props of [Button](./button.md), and the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `pageCount` | `number` | — | Total number of pages. Required. |
| `pageIndex` | `number` | — | Zero-based index of the current page. Required. |
| `setPageIndex` | `(pageIndex: number) => void` | — | Called with the new zero-based index. Required. |
| `hideText` | `boolean` | `false` | Hides the text on the previous and next buttons. |
| `buttonWidth` | `SizeTokens` | — | Width of every button. |
| `onFirst` | `() => void` | — | Replaces the default "go to first page" action. |
| `onLast` | `() => void` | — | Replaces the default "go to last page" action. |
| `onPrevious` | `() => void` | — | Replaces the default "go to previous page" action. |
| `onNext` | `() => void` | — | Replaces the default "go to next page" action. |
| `size` | Button `size` | — | Size of the buttons. |
| `color` | Button `color` | — | Color of the buttons. |
| `theme` | theme name | — | Theme of the buttons. |

## Behavior and states

- The current page uses the `outlined` button variant. All other pages use `ghost`.
- The previous button is hidden on the first page. The next button is hidden on the last page.
- The first page button always shows `1`.
- The last page button shows only when `pageCount` is greater than `4`.
- When `pageCount` is greater than `5`, the numbers between the first and last page slide with the current page. An ellipsis (`DotsThree` icon) marks each gap.
- The component clamps the current page between `1` and `pageCount`.

The stories show first, middle, and last pages for 3, 5, and 10 pages.

## Related

- [PreviousButton](./previous-button.md)
- [Button](./button.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/pagination/src/Pagination.tsx`](../../../components/pagination/src/Pagination.tsx)
- [`components/pagination/src/Pagination.stories.tsx`](../../../components/pagination/src/Pagination.stories.tsx)
- [`components/pagination/src/Pagination.spec.ts`](../../../components/pagination/src/Pagination.spec.ts)

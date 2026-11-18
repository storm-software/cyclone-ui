---
title: Pagination
description: A page navigation bar with previous and next buttons, first and last page buttons, and a sliding window of page numbers.
documentType: reference
tags: [component, navigation, pagination, trigger]
component:
  name: pagination
  package: "@cyclone-ui/pagination"
  stories:
    - title: Triggers/Pagination
      file: components/pagination/src/Pagination.stories.tsx
---

# Pagination

`Pagination` is a page navigation bar. It shows previous and next buttons, a first page button, a last page button, and a window of page numbers with ellipses. You control it with `pageCount`, `pageIndex`, and `setPageIndex`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add pagination
pnpm install
```

- **File:** `Pagination.tsx`. The CLI writes it to `<path>/pagination/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Next Button](./next-button.md), [Previous Button](./previous-button.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/stacks`, and `react-native-svg`.

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

## Anatomy

```tsx
<Pagination pageCount={10} pageIndex={pageIndex} setPageIndex={setPageIndex} />
```

`Pagination` has no child parts. It renders these pieces in a row:

| Part            | Renders                                                                          | Purpose                                                                              |
| --------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Row             | A Tamagui `XStack` with an `lg` gap.                                             | Holds the buttons and ellipses.                                                      |
| Previous button | A ghost [PreviousButton](./previous-button.md) with `aria-label="Previous"`.     | Goes to the previous page. It is hidden on the first page.                           |
| Page buttons    | Up to five [Button](./button.md) parts, each with a `Button.Text` page number.   | The first page, a window of up to three pages, and the last page.                    |
| Ellipsis        | A `DotsHorizontal` icon in the `primary` color.                                  | Marks a gap in the page numbers. It shows only when `pageCount` is greater than `5`. |
| Next button     | A ghost [NextButton](./next-button.md) with `aria-label="Next"`.                 | Goes to the next page. It is hidden on the last page.                                |

## Examples

The examples are the stories in [`Pagination.stories.tsx`](../../../components/pagination/src/Pagination.stories.tsx). Each story sets `pageCount` and `pageIndex`.

| Stories                                                                                                                                       | What they show                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `Base`                                                                                                                                        | Page 6 of 10, with an ellipsis on each side of the page window.                   |
| `FirstOfThree`, `SecondOfThree`, `LastOfThree`                                                                                                | Each page of 3. There is no last page button and no ellipsis.                     |
| `FirstOfFive`, `SecondOfFive`, `ThirdOfFive`, `ForthOfFive`, `LastOfFive`                                                                     | Each page of 5. The last page button shows, but there is no ellipsis.             |
| `FirstOfTen`, `SecondOfTen`, `ThirdOfTen`, `ForthOfTen`, `FifthOfTen`, `SixthOfTen`, `SeventhOfTen`, `EightOfTen`, `NinthOfTen`, `LastOfTen` | Each page of 10. The page window slides, and the ellipses show and hide.          |

## Props

`PaginationProps` combines the `XStack` props (without `color`), the `color` and `size` props of [Button](./button.md), and the props below. The component passes the other props to each page button, not to the row.

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
- When `pageCount` is greater than `5`, the numbers between the first and last page slide with the current page. An ellipsis (`DotsHorizontal` icon) marks each gap.
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

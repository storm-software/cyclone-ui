---
title: SearchDialog
description: A search button that opens a dialog with a search box, results, filters, and a saved history of chosen results.
documentType: reference
tags: [component, block, search, dialog]
---

# SearchDialog

`SearchDialog` is a search icon [Button](./button.md) that opens a [Dialog](./dialog.md). The dialog has a search box, a list of results, and optional filters. It also opens with `Cmd+K` or `Ctrl+K`. Its design follows the fumadocs search dialog.

You supply the `search` function. It can use a static index or a remote API.

## Import

```tsx
import { SearchDialog } from "@cyclone-ui/search-dialog";
```

## Usage

```tsx
<SearchDialog
  search={(query, { filters, signal }) => findResults(query, filters, signal)}
  filters={[
    {
      name: "section",
      label: "Section",
      options: [
        { label: "Guides", value: "guides" },
        { label: "Components", value: "components" }
      ]
    }
  ]}
  defaultResults={[
    {
      id: "installation",
      url: "/docs/installation",
      content: "Installation",
      breadcrumbs: ["Docs"]
    }
  ]}
  onSelect={result => router.push(result.url)}
/>
```

## Props

`SearchDialogProps` is the [Button](./button.md) props plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `search` | `(query, options) => SearchDialogResult[] \| Promise<SearchDialogResult[]>` | — | Finds results for a query. The query is never empty. It runs `100ms` after the query or a filter stops changing. `options` has `filters` and an abort `signal`. Required. |
| `filters` | `SearchDialogFilter[]` | — | Toggles shown under the results. |
| `defaultResults` | `SearchDialogResult[]` | — | Results listed before the user types, after the "Recent" ones. |
| `onSelect` | `(result: SearchDialogResult) => void` | Go to `result.url` | Called with the chosen result, after the dialog closes. |
| `label` | `string` | `"Search"` | Accessible name of the trigger, dialog, and text box. |
| `placeholder` | `string` | `"Search..."` | Placeholder of the text box. |
| `historyKey` | `string` | `"cyclone-ui:search-dialog-history"` | The `localStorage` key for chosen results. Use a different key for each search dialog on a site. |

### `SearchDialogResult`

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique and stable. The history uses it. |
| `url` | `string` | Where the result leads. |
| `type` | `"page" \| "heading" \| "text"` | Default `"page"`. Headings and text are indented, so list them after their page. |
| `content` | `string` | The text shown. The words of the query are highlighted. |
| `breadcrumbs` | `string[]` | Where the page sits, for example `["Docs", "Components"]`. |

### `SearchDialogFilter`

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The key of the value in `options.filters`. |
| `label` | `string` | Accessible name of the toggles. |
| `options` | `{ label: string; value: string }[]` | The values. One value is selected at most. |

## Behavior

- Focus stays in the text box. `ArrowDown` and `ArrowUp` move the active result. `Enter` chooses it.
- Chosen results are saved in `localStorage` and listed under "Recent". Five results are kept. `Shift+Delete` forgets the active recent result. The "Clear" button clears all of them.
- A message with `role="status"` shows when there are no results.
- While a remote search runs, the previous results stay on screen.

## Accessibility

- The trigger has `aria-label` (the `label`) and `aria-keyshortcuts="Meta+K Control+K"`.
- The text box has `role="combobox"` with `aria-autocomplete="list"`, `aria-expanded`, `aria-controls`, and `aria-activedescendant`.
- Results are `option` items with `aria-selected`.
- The close button has the label `Close`.

## Stories

`Base` (static index with filters), `History`, `Remote` (results arrive after a delay), and `NoFilters`.

## Related

- [SearchInput](./search-input.md)
- [Dialog](./dialog.md)
- [Button](./button.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/search-dialog/src/SearchDialog.tsx`](../../../components/search-dialog/src/SearchDialog.tsx)
- [`components/search-dialog/src/SearchDialog.stories.tsx`](../../../components/search-dialog/src/SearchDialog.stories.tsx)

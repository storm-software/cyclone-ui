---
title: Search Dialog
description: A search button that opens a dialog with a search box, results, filters, and a saved history of chosen results.
documentType: reference
tags: [component, block, search, dialog]
component:
  name: search-dialog
  package: "@cyclone-ui/search-dialog"
  stories:
    - title: Blocks/SearchDialog
      file: components/search-dialog/src/SearchDialog.stories.tsx
---

# Search Dialog

`SearchDialog` is a search icon [Button](./button.md) that opens a [Dialog](./dialog.md). The dialog has a search box, a list of results, and optional filters. It also opens with `Cmd+K` or `Ctrl+K`. Its design follows the fumadocs search dialog.

You supply the `search` function. It can use a static index or a remote API.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add search-dialog
pnpm install
```

- **File:** `SearchDialog.tsx`. The CLI writes it to `<path>/search-dialog/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Dialog](./dialog.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Input](./input.md), [Kbd](./kbd.md), [Overlay](./overlay.md), [Ripple Animation](./ripple-animation.md), [Toggle](./toggle.md), [Toggle Group](./toggle-group.md), [Tooltip](./tooltip.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

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

## Anatomy

`SearchDialog` has no public parts. It renders this tree:

```tsx
<Dialog>
  <Dialog.Trigger asChild={true}>
    <Button>{/* search icon */}</Button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Container>
      <Dialog.Heading />         {/* visually hidden */}
      <Input />                  {/* search box and close button */}
      <ToggleGroup />            {/* one for each filter */}
      {/* results list, or the empty state */}
      {/* footer: key hints and settings button */}
    </Dialog.Container>
  </Dialog.Portal>
</Dialog>
```

| Part        | Renders                                                                                                                            | Purpose                                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Trigger     | A circular `ghost` [Button](./button.md) with a search icon, size `9xl`, as the `Dialog.Trigger`. It has a `tooltip` of `label`.  | Opens the dialog. The `SearchDialog` props other than its own go to this button.                            |
| Dialog      | A [Dialog](./dialog.md) with its `Overlay`, in a portal. The `Dialog.Container` is up to 640 px wide and pinned near the top.     | Holds the search UI. It stays in place when the number of results changes.                                  |
| Heading     | `Dialog.Heading` inside `VisuallyHidden`                                                                                            | Gives the dialog the accessible name `label`.                                                               |
| Search box  | An `underlined` [Input](./input.md), size `lg`. The text box has `role="combobox"`. `Input.Trigger` is the close button.         | Takes the query. The search icon shows a loading animation while a search runs.                                     |
| Filters     | A `ToggleGroup` (`multiple`, `borderless`, size `sm`) for each filter, with `aria-label` from the filter's `label`                 | Narrows the results. The row scrolls sideways and does not wrap.                                            |
| Results     | A `View` with `role="listbox"`. Recent results are in a `role="group"` labelled "Recent". Each result has `role="option"`.          | Lists the results. Words of the query show in a `<mark>` element. Recent rows have a remove button.         |
| Empty state | A `View` with `role="status"`, and a "Clear filters" button when a filter is set                                                   | Shows "No results found" or "Search failed".                                                                |
| Footer      | [Kbd](./kbd.md) hints for `↵`, `↑` `↓`, and `Esc`, and a settings `Button` when `onSettingsPress` is set                           | Shows the keys. The settings button's label is `label` plus " settings", for example "Search settings".                                |

## Examples

The examples are the stories in [`SearchDialog.stories.tsx`](../../../components/search-dialog/src/SearchDialog.stories.tsx). They all search a static index of pages, headings, and text, with a "Section" filter, three default results, and a settings button.

| Stories     | What they show                                                                                                                                                                                                        |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Base`      | Starts with no history. The play function opens the dialog, types a query, sets a filter that gives no results, clears the filters, presses the settings button, chooses a result with the keyboard, and reopens with `Ctrl+K` to find it under "Recent". |
| `History`   | Three saved results under a custom `historyKey`. The play function removes one with `Shift+Delete`, one with its remove button, and the rest with "Clear".                                                            |
| `Remote`    | A `search` function that resolves after 800 ms, so the search icon shows its loading animation while results load.                                                                                                                              |
| `NoFilters` | No filters, no default results, and no settings button.                                                                                                                                                               |

## Props

`SearchDialogProps` is the [Button](./button.md) props plus the props below. The Button props style the trigger.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `search` | `(query, options) => SearchDialogResult[] \| Promise<SearchDialogResult[]>` | — | Finds results for a query. The query is never empty. It runs `100ms` after the query or a filter stops changing. `options` has `filters` and an abort `signal`. The `signal` aborts when a newer search replaces this one. Required. |
| `filters` | `SearchDialogFilter[]` | — | Toggles shown under the search box. |
| `defaultResults` | `SearchDialogResult[]` | — | Results listed before the user types, after the "Recent" ones. A default result that is also recent shows once. |
| `onSelect` | `(result: SearchDialogResult) => void` | Go to `result.url` | Called with the chosen result, after the dialog closes. |
| `onSettingsPress` | `() => void` | — | Shows a settings button in the footer. Called when it is pressed. |
| `label` | `string` | `"Search"` | Accessible name of the trigger, dialog, and text box. |
| `placeholder` | `string` | `"Search..."` | Placeholder of the text box. |
| `historyKey` | `string` | `"cyclone-ui:search-dialog-history"` | The `localStorage` key for chosen results. Use a different key for each search dialog on a site. |
| `size` | size token | `"9xl"` | The size of the trigger button and its icon. |

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
| `options` | `{ label: string; value: string }[]` | The values. The toggles are a `multiple` `ToggleGroup`, so more than one value can be selected. |

## Behavior

- `Cmd+K` or `Ctrl+K` opens and closes the dialog from anywhere on the page.
- When the dialog opens, focus moves to the text box. Focus stays there. `ArrowDown` and `ArrowUp` move the active result and wrap at the ends. `Enter` chooses it. The pointer also makes a result active.
- Chosen results are saved in `localStorage` and listed under "Recent". Five results are kept. `Shift+Delete` forgets the active recent result. The "Clear" button clears all of them.
- A message with `role="status"` shows when there are no results. If `search` throws or rejects, the message is "Search failed".
- When a filter is set and there are no results, a "Clear filters" button clears the filters.
- While a search runs, the previous results and message stay on screen.

### Filter values

Because the filter toggles are `multiple`, the value of a filter in `options.filters` is an array of the selected values at run time. `SearchDialogFilterValues` declares it as `string | null`. Handle both forms in your `search` function.

## Accessibility

- The trigger has `aria-label` (the `label`) and `aria-keyshortcuts="Meta+K Control+K"`.
- The dialog has a visually hidden heading with the `label`.
- The text box has `role="combobox"` with `aria-label`, `aria-autocomplete="list"`, `aria-expanded`, `aria-controls`, and `aria-activedescendant`.
- The results are a `listbox` with the label `label` plus " results", for example "Search results". Results are `option` items with `aria-selected`. Recent results are in a `group` labelled "Recent".
- Each filter is a toggle group with the filter's `label` as its accessible name.
- The remove button on a recent result is for the pointer only. It has `aria-hidden` and `tabIndex={-1}`. From the keyboard, use `Shift+Delete`.
- The close button has the label `Close`.

## Related

- [SearchInput](./search-input.md)
- [Dialog](./dialog.md)
- [Button](./button.md)
- [Input](./input.md)
- [Toggle group](./toggle-group.md)
- [Kbd](./kbd.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/search-dialog/src/SearchDialog.tsx`](../../../components/search-dialog/src/SearchDialog.tsx)
- [`components/search-dialog/src/SearchDialog.stories.tsx`](../../../components/search-dialog/src/SearchDialog.stories.tsx) (title: `Blocks/SearchDialog`)

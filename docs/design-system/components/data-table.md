---
title: Data Table
description: Reference for the DataTable component, a TanStack Table grid with sorting, filtering, pagination, and optional row selection.
documentType: reference
tags: [component, table, data]
component:
  name: data-table
  package: "@cyclone-ui/data-table"
  stories:
    - title: Tables/DataTable
      file: components/data-table/src/DataTable.stories.tsx
    - title: Tables/DataTable Cells
      file: components/data-table/src/DataTableCells.stories.tsx
---

# Data Table

`DataTable` displays a large, interactive data set. It is built on TanStack Table and the Cyclone [Table](./table.md).

You pass table options (`columns` and `data`). The grid adds sorting, faceted column filtering, client-side pagination, optional row-selection checkboxes, and optional resizable columns.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add data-table
pnpm install
```

- **Files:** `DataTable.tsx` and `DataTableCells.tsx`. The CLI writes them to `<path>/data-table/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Avatar](./avatar.md), [Badge](./badge.md), [Body Text](./body-text.md), [Button](./button.md), [Checkbox](./checkbox.md), [Container](./container.md), [Context Menu](./context-menu.md), [Dialog](./dialog.md), [Field](./field.md), [Form](./form.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Input](./input.md), [Link](./link.md), [Link Text](./link-text.md), [Modal](./modal.md), [Next Button](./next-button.md), [Overlay](./overlay.md), [Pagination](./pagination.md), [Popover](./popover.md), [Previous Button](./previous-button.md), [Progress](./progress.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Search Input](./search-input.md), [Select](./select.md), [Sheet](./sheet.md), [Slider](./slider.md), [Spinner](./spinner.md), [Table](./table.md), [Tooltip](./tooltip.md), and [Validation Text](./validation-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@stryke/helpers`, `@stryke/string-format`, `@stryke/type-checks`, `@stryke/types`, `@tamagui/core`, `@tamagui/helpers`, `@tamagui/stacks`, `@tanstack/react-table`, `@tanstack/react-virtual`, and `@tanstack/table-core`.

## Import

```tsx
import {
  createDataTableViewColumn,
  DataTable,
  DataTableAvatarCell,
  DataTableCell,
  DataTableCopyCell,
  DataTableHeader,
  DataTableViewButton
} from "@cyclone-ui/data-table";
```

## Usage

```tsx
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("name", { header: DataTableHeader, cell: DataTableCell }),
  columnHelper.accessor("role", { header: DataTableHeader, cell: DataTableCell })
];

<DataTable
  pageSize={25}
  options={{
    data: rows,
    columns
  }}
/>
```

`options` is a TanStack `TableOptions` object. You can omit `getCoreRowModel`. The grid supplies it.

Set `DataTableHeader` as a column `header` to get the sort control and the filter popover. Without it, the column has no sort or filter controls.

Set `enableRowSelection` on `options` to add a checkbox column. The value `false` leaves the column out. Any other value, including `true` and a row predicate, adds it.

The grid copies `options.data` once, on the first render. Later changes to `options.data` do not show in the table.

## Anatomy

```tsx
<DataTable
  options={{
    data,
    columns: [{ accessorKey: "role", header: DataTableHeader, cell: DataTableCell }],
    enableRowSelection: true
  }}
  rowActions={actions}>
  <DataTable.SelectionAction onAction={rows => exportRows(rows)}>
    Export
  </DataTable.SelectionAction>
</DataTable>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `DataTable` | A Tamagui `YStack` around a [Table](./table.md) (`<table>`) with `sizing="content"`, a `<colgroup>`, `Table.Header`, `Table.Body`, and `Table.Footer`. Each body row sets `aria-selected`. With no rows, the body shows "No data to display". | Owns the TanStack table and its sorting, filter, column order, pagination, and selection state. |
| Selection bar | A header `Table.Row` with one `Table.Cell` that spans every column. It holds the "N selected" count (`aria-live="polite"`), the selection actions, and a "Clear selection" `Button`. | Acts on the selected rows. It shows only while rows are selected. |
| `DataTable.SelectionAction` | A Cyclone `Button` (`theme="base"`, `size="sm"`) with an optional `Button.Icon` and a `Button.Text` | One action in the selection bar. |
| Selection column | A select-all `Checkbox` in the header ("Select all rows on this page") and one `Checkbox` per row ("Select row N") | Added when `enableRowSelection` is set. |
| Actions column | A circular ghost `Button` ("Actions for row N", tooltip "Show row actions") that opens a `ContextMenu` of the row actions | Added when `rowActions` is set. |
| `DataTableHeader` | A Tamagui `XStack` with the column title and sort marker, and a filter `Button` that opens a `Popover`. The popover holds a `Form` with a `SearchInput` and a virtualized list of `Checkbox` fields. | Header content for one column. Set it as the column `header`. |
| `DataTableCell` | A `BodyText` | Cell content. Set it as the column `cell`. |
| Column resizer | A Tamagui `View` with `role="separator"` and `aria-orientation="vertical"` on the right edge of each header cell | Added when `resizable` is set. Double-click resets the column size. |
| `DataTablePagination` | A Tamagui `XStack` with a "Per page" `Select` field, the row range text, and a `Pagination` control when there is more than one page | The footer. The grid renders it in a `Table.Footer` row. |

`DataTableSelectionAction` is also exported by name. It is the same component as `DataTable.SelectionAction`.

## Examples

The examples are the stories in [`DataTable.stories.tsx`](../../../components/data-table/src/DataTable.stories.tsx). Each story shows 13 people in four columns (user with avatar, age, status, and role). Every column uses `DataTableHeader`, and the user column has a `facetFn` that filters by user name.

| Stories | What they show |
| --- | --- |
| `Base` | The default grid. The default page size shows all 13 rows. |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | The `brand`, `discovery`, `danger`, `warning`, `info`, and `success` themes. |
| `Resizable` | `resizable` columns. |
| `Reorderable` | `reorderable` and `resizable` columns with row selection and 5 rows per page. The play function drags the role header onto the user header. |
| `RowSelection` | `enableRowSelection` with 5 rows per page. The play function filters out `@john`, which three rows share, and checks the filter count. |
| `SelectionActions` | Hold and Export `DataTable.SelectionAction` buttons. The play function selects two rows, presses Export, and clears the selection. |
| `Pagination` | 65 rows (the data five times) with 5 rows per page. |
| `Card` | `variant="card"` with row selection and 5 rows per page. |
| `RowActions` | A `rowActions` function with Approve, Decline, and Send Message. Approve is disabled for active rows. The play function picks Decline on row 2 and checks `onRowAction`. |
| `ManyFilterValues` | 3,000 rows with unique user names. The filter list mounts only the rows in view. |

The helper cells have their own stories in [`DataTableCells.stories.tsx`](../../../components/data-table/src/DataTableCells.stories.tsx), with five customers.

| Stories | What they show |
| --- | --- |
| `AllCells` | Every helper cell, including the [Table cells](./table.md#cells), and a View column. The play function presses View on row 2 and checks the details panel under the grid. |
| `ViewButtons` | View columns with the default button, an icon-only button, a link (`href`), and an Edit label and icon. The play function checks the link's `href` and the icon-only button's `onView` call. |
| `CopyCell` | Copyable IDs and emails (the email cell shows only the name). The play function stubs the clipboard, copies an ID, and waits for the button to reset. |
| `AvatarCell` | Avatar cells with and without a description, a status dot, the initials fallback, and a square `md` avatar. |

## Props

### DataTable

`DataTable` also accepts [Table](./table.md) props. The grid sets `sizing="content"`, start-aligned header and body cells, and a `100%` width. Your props override them.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `DataTableOptions<TData>` | - | TanStack table options, including `columns` and `data`. Required. |
| `pageSize` | `number \| null \| false` | `100` | Rows per page. A positive number is capped at the row count. Any other value, including `null` and `false`, uses 100, also capped at the row count. With `null` or `false`, the table shows no pagination footer. |
| `resizable` | `boolean` | `false` | Lets the user drag column edges. The table then uses a fixed layout and the sum of column sizes as its width. |
| `reorderable` | `boolean` | `false` | Lets the user drag a header onto another header. The selection and actions columns stay at the edges. |
| `variant` | `"standard" \| "card"` | `"standard"` | `standard` divides rows with hairlines. `card` draws the header, each row, and the pagination footer as separate rounded cards. |
| `rowActions` | `DataTableRowAction[] \| ((row: Row<TData>) => DataTableRowAction[])` | - | A trailing actions column. An array, or a function that returns actions for one row. |
| `onRowAction` | `(value: string, row: Row<TData>) => void` | - | Called with the action `value` and the row. |
| `children` | `ReactNode` | - | `DataTable.SelectionAction` elements for the selection bar. |

A row action has `value`, `label`, an optional `icon`, and an optional `disabled` flag.

The grid holds the sorting, filter, column order, pagination, and row selection state. Values in `options.state` override it. The grid also calls `options.onRowSelectionChange`.

A column's `meta.facetFn` maps a cell value to the key that the filter uses. Rows with the same key filter together. A column without its own `filterFn` gets a filter that hides the unchecked keys.

### DataTable.SelectionAction

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | - | The button label. Required. |
| `onAction` | `(rows: Row<TData>[]) => void` | - | Called with the selected rows (across every page) on press. Required. |
| `icon` | `ReactNode` | - | An icon before the label. |
| `disabled` | `boolean` | - | Disables the button. |

### DataTableHeader and DataTableCell

`DataTableHeader` takes the TanStack header context, so you can set it directly as a column `header`. It shows the column `id` in title case. Press the title to sort. The order goes from descending to ascending to none. Each sorted column adds to the sort, and its header shows its sort position. When the column can filter, a filter button shows on hover, or all the time while a filter is set. The filter popover lists up to 5,000 values, each with its row count, plus a search box and a "(Select All)" checkbox.

`DataTableCell` takes the TanStack cell context and an optional `value` string. It shows `value` when set, and the cell's `renderValue()` when not.

### Helper cells

These render the content of a cell. Use them in a column's `cell`. For statuses, yes/no values, numbers, dates, progress, and tags, use the [Table cells](./table.md#cells).

```tsx
const columns = [
  columnHelper.accessor("name", {
    header: DataTableHeader,
    cell: ({ row }) => (
      <DataTableAvatarCell
        name={row.original.name}
        description={row.original.email}
        src={row.original.avatar}
      />
    )
  }),
  columnHelper.accessor("id", {
    header: DataTableHeader,
    cell: info => <DataTableCopyCell value={info.getValue()} />
  }),
  createDataTableViewColumn<Customer>({
    onView: customer => setSelected(customer)
  })
];
```

| Component | Props | What it shows |
| --- | --- | --- |
| `DataTableAvatarCell` | `name` (required), `description`, and [Avatar](./avatar.md) props (`src`, `size` default `"sm"`, `status`, and so on) | An avatar beside the name and an optional muted second line. The avatar is hidden from screen readers, which read the name beside it. |
| `DataTableCopyCell` | `value`, `children` | The value (or `children`) and a button that copies `value` to the clipboard. The button shows a check for 2 seconds after a copy. It uses the web clipboard, so it does nothing on native. |
| `DataTableViewButton` | `row` (required), `onView`, `href`, `label` (default `"View"`), `icon` (default an eye), `iconOnly` (default `false`), and [Button](./button.md) props | A ghost button that opens a row's detail view. It calls `onView(row.original, row)`. `href` (a string, or a function of the row's data and the row) renders it as a link. Screen readers hear the label with the row number, such as "View row 2". With `iconOnly`, it is a round icon button with the label as its tooltip. |
| `createDataTableViewColumn` | The `DataTableViewButton` props except `row`, plus `id` (default `"view"`) | A column definition with a `DataTableViewButton` in each row and no header, sorting, filtering, or resizing. Change `label` and `icon` for other row buttons, such as Edit. |

### DataTablePagination

| Prop | Type | Description |
| --- | --- | --- |
| `pageIndex`, `pageSize`, `pageCount` | `number` | The current page, the rows per page, and the number of pages. |
| `totalCount` | `number` | All rows. |
| `unfilteredCount` | `number` | The rows that pass the filters. The range text and the page size options use it. |
| `setPageIndex`, `nextPage`, `previousPage`, `firstPage`, `lastPage` | TanStack table methods | Move between pages. |

The "Per page" options are 5, 10, 25, 50, 100, 500, and 1000 (each one only when there are at least that many rows), plus the row count. When filters hide rows, the footer also shows how many.

Sorting, column filters, pagination state, and the selected rows are also available from `DataTableContext`.

## Related

- [Table](./table.md)
- [Pagination](./pagination.md)

## Source

- [`components/data-table/src/DataTable.tsx`](../../../components/data-table/src/DataTable.tsx)
- [`components/data-table/src/DataTable.stories.tsx`](../../../components/data-table/src/DataTable.stories.tsx) (title: `Tables/DataTable`)
- [`components/data-table/src/DataTableCells.tsx`](../../../components/data-table/src/DataTableCells.tsx)
- [`components/data-table/src/DataTableCells.stories.tsx`](../../../components/data-table/src/DataTableCells.stories.tsx) (title: `Tables/DataTable Cells`)

---
title: Data table
description: Reference for the DataTable component, a TanStack Table grid with sorting, filtering, pagination, and optional row selection.
documentType: reference
tags: [component, table, data]
---

# Data table

`DataTable` displays a large, interactive data set. It is built on TanStack Table and the Cyclone [Table](./table.md).

You pass table options (`columns` and `data`). The grid adds sorting, faceted column filtering, client-side pagination, optional row-selection checkboxes, and optional resizable columns.

Source: [`components/data-table`](https://github.com/storm-software/cyclone-ui/tree/main/components/data-table)

## Import

```tsx
import { DataTable } from "@cyclone-ui/data-table";
```

## Usage

```tsx
<DataTable
  pageSize={25}
  options={{
    data: rows,
    columns
  }}
/>
```

`options` is a TanStack `TableOptions` object. You can omit `getCoreRowModel`. The grid supplies it.

Set `enableRowSelection` on `options` to add a checkbox column. The value `false` leaves the column out. Any other value, including `true` and a row predicate, adds it.

## Props

`DataTable` also accepts [Table](./table.md) props.

| Prop | Default | Purpose |
| --- | --- | --- |
| `options` | - | TanStack table options, including `columns` and `data`. Required. |
| `pageSize` | `100` | Rows per page. A positive number is capped at the row count. Any other value, including `null` and `false`, uses 100, also capped at the row count. |
| `resizable` | `false` | Lets the user drag column edges. The table then uses a fixed layout and the sum of column sizes as its width. |
| `reorderable` | `false` | Lets the user drag a header onto another header. The selection and actions columns stay at the edges. |
| `variant` | `"standard"` | `standard` divides rows with hairlines. `card` draws the header, each row, and the pagination footer as separate rounded cards. |
| `rowActions` | - | A trailing actions column. An array, or a function that returns actions for one row. |
| `onRowAction` | - | Called with the action `value` and the row. |

A row action has `value`, `label`, an optional `icon`, and an optional `disabled` flag.

## Parts

`DataTableCell` renders one cell. It receives the TanStack cell context and an optional `value` string.

`DataTableHeader` renders one header from the TanStack header context.

`DataTablePagination` takes `pageIndex`, `pageSize`, `pageCount`, and the table methods `setPageIndex`, `nextPage`, `previousPage`, `firstPage`, and `lastPage`.

Sorting, column filters, and pagination state are also available from `DataTableContext`.

## Related pages

- [Table](./table.md)
- [Pagination](./pagination.md)

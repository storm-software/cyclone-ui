---
title: Table
description: A compound component that renders semantic table elements with shared cell size, alignment, and border settings.
documentType: reference
tags: [component, table, data, layout]
component:
  name: table
  package: "@cyclone-ui/table"
  stories:
    - title: Tables/Table
      file: components/table/src/Table.stories.tsx
    - title: Tables/Table Cells
      file: components/table/src/TableCells.stories.tsx
---

# Table

`Table` is a compound component for tabular data. Each part renders a semantic HTML table element. Table-level props set cell size, alignment, and border color for all parts.

The package also exports [cell helpers](#cells) that format common values inside a cell: statuses, yes/no values, numbers, dates, progress, and tags.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add table
pnpm install
```

- **Files:** `Table.tsx`, `TableCells.tsx`, and `utilities.ts`. The CLI writes them to `<path>/table/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), and [Progress](./progress.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/stacks`, and `react-native-svg`.

## Import

```tsx
import {
  Table,
  TableBooleanCell,
  TableCellText,
  TableDateCell,
  TableEmptyCell,
  TableNumberCell,
  TableProgressCell,
  TableStatusCell,
  TableTagsCell
} from "@cyclone-ui/table";
```

## Usage

```tsx
import { Table } from "@cyclone-ui/table";

export function Example() {
  return (
    <Table cellWidth="20xl" cellHeight="9xl" sizing="content">
      <Table.Header>
        <Table.Row header>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Ada</Table.Cell>
          <Table.Cell>Engineer</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell>1 row</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
```

The story builds rows from a `@tanstack/react-table` instance. The table itself has no data props. You render each row and cell yourself.

## Anatomy

```tsx
<Table>
  <Table.Header>
    <Table.Row header>
      <Table.HeaderCell />
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell />
    </Table.Row>
  </Table.Body>
  <Table.Footer>
    <Table.Row>
      <Table.Cell />
    </Table.Row>
  </Table.Footer>
</Table>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Table` | A Tamagui `YStack` as `<table>`, with `border-collapse: separate` and no border spacing | The frame. It has `maxWidth: 100%` and hides overflow. It shares the cell size, alignment, and sizing with the parts. |
| `Table.Header` | A Tamagui `YStack` as `<thead>`. In `fixed` sizing, a Tamagui `View` inside it wraps the children with `2xl` vertical padding. | Holds the header rows. |
| `Table.Body` | A Tamagui `YStack` as `<tbody>` | Holds the data rows. |
| `Table.Row` | A Tamagui `YStack` as `<tr>`, laid out as a flex row. In `fixed` sizing, an absolute, blurred `YStack` layer inside it draws the hover highlight. | One row. Set `header` on rows inside `Table.Header`. |
| `Table.HeaderCell` | A Tamagui `YStack` as `<th>` | Header cell with a bottom hairline border. |
| `Table.Cell` | A Tamagui `YStack` as `<td>` | Body cell with a bottom hairline border. |
| `Table.Footer` | A Tamagui `YStack` as `<tfoot>` | Same wrapping as the header. |

`TableHeader`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableCell`, and `TableFooter` are also exported by name. Use them in React Server Components, which cannot read `Table.Header` from a client module.

## Cells

The cell helpers render the content of a `Table.Cell` (or a `DataTable` column's `cell`), not the cell itself. A missing value (`null`, `undefined`, `NaN`, an invalid date, or no tags) shows `TableEmptyCell`.

```tsx
<Table.Row>
  <Table.Cell>
    <TableStatusCell status={order.status} />
  </Table.Cell>
  <Table.Cell>
    <TableNumberCell
      value={order.total}
      format={{ style: "currency", currency: "USD" }}
    />
  </Table.Cell>
  <Table.Cell>
    <TableDateCell value={order.createdAt} relative />
  </Table.Cell>
</Table.Row>
```

| Component | Props | What it shows |
| --- | --- | --- |
| `TableStatusCell` | `status`, `children`, `themes`, `theme`, and `XStack` props | A pill with a dot and the status (or `children`), tinted with a color theme. Common statuses pick one, ignoring case: `active`, `approved`, `complete(d)`, `online`, `paid`, and `success` are `success`. `info`, `new`, and `processing` are `info`. `paused`, `pending`, and `warning` are `warning`. `cancel(l)ed`, `declined`, `error`, `failed`, `overdue`, and `rejected` are `danger`. `themes` (a status-to-theme map) is checked first, and `theme` wins over both. Other statuses keep the surrounding theme. |
| `TableBooleanCell` | `value`, `variant` (`"icon"` or `"text"`, default `"icon"`), `trueLabel` (default `"Yes"`), `falseLabel` (default `"No"`), `colored` (default `false`) | A green check or a muted cross. Screen readers hear the label. The `text` variant writes the label instead. `colored` draws `true` in the `success` theme and `false` in the `danger` theme, as icons or text. |
| `TableNumberCell` | `value` (`number` or `bigint`), `format` (`Intl.NumberFormatOptions`), `locale`, and text props | The number formatted with `Intl.NumberFormat`, in tabular figures. Use `format` for currency, percent, or compact notation. |
| `TableDateCell` | `value` (`Date`, string, or timestamp), `format` (`Intl.DateTimeFormatOptions`, default `{ dateStyle: "medium" }`), `relative` (default `false`), `locale`, and text props | The formatted date, or with `relative`, the time from now in its largest unit ("3 days ago", "in 2 hours", "yesterday"). |
| `TableProgressCell` | `value`, `max` (default `100`), `showValue` (default `true`), and [Progress](./progress.md) props | A small progress bar and its percentage. The value is clamped to `0`–`max`. |
| `TableTagsCell` | `tags`, `max` (default `3`), `themes` | A row of tag pills. Tags past `max` collapse into a `+N` pill. `themes` maps a tag to a color theme. |
| `TableEmptyCell` | Text props; `children` defaults to `—` | A muted placeholder for a missing value. |
| `TableCellText` | Text props | The cell text style the helpers use (body font, one line, darker on row hover). Use it for your own cell content. |

Set `locale` on `TableNumberCell` and `TableDateCell` when you render on a server, so the client renders the same text. A relative date also depends on the current time.

## Examples

The examples are the stories in [`Table.stories.tsx`](../../../components/table/src/Table.stories.tsx). Every story renders the same table from a `@tanstack/react-table` instance: 13 people with avatar, age, status, and role columns, and a footer row. The table uses `sizing="content"`, `cellWidth="20xl"`, `cellHeight="9xl"`, and start alignment for header and body cells.

| Stories | What they show |
| --- | --- |
| `Base` | The table with the inherited theme. |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | The `brand`, `discovery`, `danger`, `warning`, `info`, and `success` themes. |

The cell helpers have their own stories in [`TableCells.stories.tsx`](../../../components/table/src/TableCells.stories.tsx). Each story lists a helper's examples in a two-column table: the props, then the rendered cell. The play functions check the rendered text.

| Stories | What they show |
| --- | --- |
| `StatusCell` | Default status themes, an unlisted status, a `theme` and `children` override, a `themes` map, and a missing status. |
| `BooleanCell` | Icon and text variants, custom labels, `colored` icons and text, and a missing value. The play function checks that `colored` turns the cross and the false text red and keeps true green. |
| `NumberCell` | Plain, USD and EUR currency, percent, compact notation, and `NaN`. |
| `DateCell` | A medium date, a date and time in UTC, a relative date, and an invalid date. |
| `ProgressCell` | 0%, 42%, 100%, a custom `max`, a `success` theme, no percentage, and a missing value. |
| `TagsCell` | Two tags, five tags collapsed to three and `+2`, themed tags, and no tags. |
| `EmptyCell` | The default dash and custom text. |

## Props

Set these props on `Table`. The cells read them from context. `TableProps` is `GetProps<typeof TableFrame>`, so `Table` also accepts the Tamagui `YStack` props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `cellWidth` | `SizeTokens \| number` | `"10xl"` | Width of each cell. The value is read from the size tokens. A number sets no width. |
| `cellHeight` | `SizeTokens \| number` | `"10xl"` | Minimum height of each body cell. A number sets no height. |
| `sizing` | `"fixed" \| "content"` | `"fixed"` | `fixed` uses the cell size. `content` uses native table layout and sizes cells to their content. |
| `alignHeaderCells` | `{ x, y }` | `{ x: "start", y: "center" }` | Aligns header cell content. Each axis is `"start"`, `"center"`, or `"end"`. |
| `alignCells` | `{ x, y }` | `{ x: "center", y: "center" }` | Aligns body cell content. Same values as above. |
| `borderColor` | `string` | `"hairline"` | Border color in the table context. |
| `theme` | Tamagui theme name | Inherited | The stories use `brand`, `discovery`, `danger`, `success`, `warning`, and `info`. |

`Table.Row` also takes `header` (`boolean`, default `false`).

`Table.HeaderCell` also takes `edgePadding` (`"start" | "end" | "both"`). A header row sets it on its first and last header cells for you. See [Variants and states](#variants-and-states).

## Variants and states

- **Fixed sizing:** A row shows a `surface` highlight when you hover it. The highlight is not shown on header rows.
- **Content sizing:** The table renders with `display: table`. Rows, cells, and groups use native table display values on web. A body row uses a `surface` background on hover.
- **Header edges:** In a header row, the first and last `Table.HeaderCell` get extra `4xl` padding on the outer side. A header row with one cell uses `2xl` padding on both sides.
- **Focus:** Rows and cells use `hairline-active` as the border color and a `ring-offset` shadow when focused with the keyboard.

## Accessibility

The parts render `table`, `thead`, `tbody`, `tfoot`, `tr`, `th`, and `td`. Native table semantics are therefore available to assistive technology. The source does not add `scope` or other ARIA attributes.

## Related

- [Design tokens](../tokens/index.md)
- [Type table](./type-table.md)

## Source

- [`components/table/src/Table.tsx`](../../../components/table/src/Table.tsx)
- [`components/table/src/Table.stories.tsx`](../../../components/table/src/Table.stories.tsx) (title: `Tables/Table`)
- [`components/table/src/Table.spec.ts`](../../../components/table/src/Table.spec.ts)
- [`components/table/src/TableCells.tsx`](../../../components/table/src/TableCells.tsx)
- [`components/table/src/TableCells.stories.tsx`](../../../components/table/src/TableCells.stories.tsx) (title: `Tables/Table Cells`)
- [`components/table/src/utilities.ts`](../../../components/table/src/utilities.ts)
- [`components/table/src/utilities.spec.ts`](../../../components/table/src/utilities.spec.ts)

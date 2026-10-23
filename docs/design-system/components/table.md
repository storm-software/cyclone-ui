---
title: Table
description: A compound component that renders semantic table elements with shared cell size, alignment, and border settings.
documentType: reference
tags: [component, table, data, layout]
---

# Table

`Table` is a compound component for tabular data. Each part renders a semantic HTML table element. Table-level props set cell size, alignment, and border color for all parts.

## Import

```tsx
import { Table } from "@cyclone-ui/table";
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

## Parts

| Part | Element | Notes |
| --- | --- | --- |
| `Table` | `table` | The frame. It has `maxWidth: 100%` and hides overflow. |
| `Table.Header` | `thead` | In `fixed` sizing, it wraps its children with `2xl` vertical padding. |
| `Table.Body` | `tbody` | Holds the data rows. |
| `Table.Row` | `tr` | Set `header` on rows inside `Table.Header`. |
| `Table.HeaderCell` | `th` | Header cell with a bottom hairline border. |
| `Table.Cell` | `td` | Body cell with a bottom hairline border. |
| `Table.Footer` | `tfoot` | Same wrapping as the header. |

## Props

Set these props on `Table`. The cells read them from context. `TableProps` is `GetProps<typeof TableFrame>`, so `Table` also accepts the Tamagui `YStack` props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `cellWidth` | `SizeTokens \| number` | `"10xl"` | Width of each cell. The value is read from the size tokens. |
| `cellHeight` | `SizeTokens \| number` | `"10xl"` | Minimum height of each body cell. |
| `sizing` | `"fixed" \| "content"` | `"fixed"` | `fixed` uses the cell size. `content` uses native table layout and sizes cells to their content. |
| `alignHeaderCells` | `{ x, y }` | `{ x: "start", y: "center" }` | Aligns header cell content. Each axis is `"start"`, `"center"`, or `"end"`. |
| `alignCells` | `{ x, y }` | `{ x: "center", y: "center" }` | Aligns body cell content. Same values as above. |
| `borderColor` | `string` | `"hairline"` | Border color in the table context. |
| `theme` | Tamagui theme name | Inherited | The stories use `brand`, `discovery`, `danger`, `success`, `warning`, and `info`. |

`Table.Row` also takes `header` (`boolean`, default `false`).

## Variants and states

- **Fixed sizing:** A row shows a `surface` highlight when you hover it. The highlight is not shown on header rows.
- **Content sizing:** The table renders with `display: table`. Rows, cells, and groups use native table display values on web. A body row uses a `surface` background on hover.
- **Header edges:** In a header row, the first and last `Table.HeaderCell` get extra `4xl` padding on the outer side. A header row with one cell uses `2xl` padding on both sides.
- **Focus:** Rows and cells use `outline-active` as the border color and a `ring-offset` shadow when focused with the keyboard.

## Accessibility

The parts render `table`, `thead`, `tbody`, `tfoot`, `tr`, `th`, and `td`. Native table semantics are therefore available to assistive technology. The source does not add `scope` or other ARIA attributes.

## Related

- [Design tokens](../tokens/index.md)
- [Type table](./type-table.md)

## Source

- [`components/table/src/Table.tsx`](../../../components/table/src/Table.tsx)
- [`components/table/src/Table.stories.tsx`](../../../components/table/src/Table.stories.tsx)
- [`components/table/src/Table.spec.ts`](../../../components/table/src/Table.spec.ts)

---
title: Type table
description: A documentation table that lists properties and their types. Each row expands to show details and can be deep-linked.
documentType: reference
tags: [component, type-table, docs, table]
---

# Type table

`TypeTable` lists the properties of a component or function. Each row shows the property name and type. The user expands a row to read the description, default, parameters, and return value. Use it in API reference pages.

## Import

```tsx
import { TypeTable } from "@cyclone-ui/type-table";
import type {
  TypeTableProps,
  TypeNode,
  ParameterNode
} from "@cyclone-ui/type-table";
```

## Usage

Pass an object to `type`. Each key is a property name. Each value is a `TypeNode`.

```tsx
import { TypeTable } from "@cyclone-ui/type-table";

export function Example() {
  return (
    <TypeTable
      id="button-props"
      type={{
        variant: {
          type: '"primary" | "secondary"',
          description: "The visual style.",
          default: '"primary"'
        },
        onPress: {
          type: "(event) => void",
          required: true,
          parameters: [{ name: "event", description: "The press event." }],
          returns: "Nothing."
        },
        legacy: { type: "boolean", deprecated: true }
      }}
    />
  );
}
```

## Props

`TypeTableProps` extends the Tamagui `ViewProps` and adds:

| Prop | Type | Description |
| --- | --- | --- |
| `type` | `Record<string, TypeNode>` | The rows. The object key is the property name. |
| `id` | `string` | The table id. It is the base for row anchors. Without it, rows have no deep link. |

### `TypeNode`

| Field | Type | Description |
| --- | --- | --- |
| `type` | `ReactNode` | The type shown in the row. |
| `description` | `ReactNode` | Text at the top of the expanded details. |
| `typeDescription` | `ReactNode` | A full form of the type, shown as the `Type` detail. |
| `typeDescriptionLink` | `string` | Makes the row type a link to this URL. |
| `default` | `ReactNode` | The `Default` detail. |
| `required` | `boolean` | When not `true`, the name shows a `?` suffix. |
| `deprecated` | `boolean` | Shows the name in `subtle` with a line through it. |
| `parameters` | `ParameterNode[]` | The `Parameters` detail. Each item has a `name` and a `description`. |
| `returns` | `ReactNode` | The `Returns` detail. |

## Behavior

- **Header row:** The table starts with a `Prop` and `Type` header row.
- **Expand:** Each row is a ghost `Collapsible`. Several rows can be open at the same time. A detail renders only when its field has a value. The values `false` and `0` render as text.
- **Deep links:** The row id is `<table id>-<name>`. Opening a row sets the URL hash to this id. When the page loads with a matching hash, the row opens.
- **Shape:** The first row and rows below an open row have rounded top corners. The bottom corners stay square.
- **Small screens:** The type column is hidden below the `sm` breakpoint (`max-sm`).

The stories are `Base` and `Details`.

## Accessibility

The expand behavior comes from [`Collapsible`](./collapsible.md). The source adds no other roles or labels.

## Related

- [Design tokens](../tokens/index.md)
- [Table](./table.md)
- [Table of contents](./table-of-contents.md)

## Source

- [`components/type-table/src/TypeTable.tsx`](../../../components/type-table/src/TypeTable.tsx)
- [`components/type-table/src/TypeTableItemDetails.tsx`](../../../components/type-table/src/TypeTableItemDetails.tsx)
- [`components/type-table/src/TypeTable.test.tsx`](../../../components/type-table/src/TypeTable.test.tsx)
- [`components/type-table/src/TypeTable.stories.tsx`](../../../components/type-table/src/TypeTable.stories.tsx)

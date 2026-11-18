---
title: Type Table
description: A documentation table that lists properties and their types. Each row expands to show details and can be deep-linked.
documentType: reference
tags: [component, type-table, docs, table]
component:
  name: type-table
  package: "@cyclone-ui/type-table"
  stories:
    - title: Docs/TypeTable
      file: components/type-table/src/TypeTable.stories.tsx
---

# Type Table

`TypeTable` lists the properties of a component or function. Each row shows the property name and type. The user expands a row to read the description, default, parameters, and return value. Use it in API reference pages.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add type-table
pnpm install
```

- **Files:** `TypeTable.tsx` and `TypeTableItemDetails.tsx`. The CLI writes them to `<path>/type-table/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Accordion](./accordion.md), [Body Text](./body-text.md), [Collapsible](./collapsible.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Inline Code Text](./inline-code-text.md), [Link](./link.md), and [Link Text](./link-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

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

## Anatomy

```tsx
<TypeTable id="button-props" type={types} />
// renders:
<Container tight id="button-props">
  {/* header row: Prop | Type */}
  <Collapsible variant="ghost" id="button-props-variant">
    <Collapsible.Header>{/* name | type */}</Collapsible.Header>
    <Collapsible.Content>{/* details */}</Collapsible.Content>
  </Collapsible>
  {/* one Collapsible for each key of `type` */}
</Container>
```

| Part        | Renders                                                                                                     | Purpose                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `TypeTable` | A [Container](./container.md) with `tight`                                                                  | The table frame. It gets the `id` and the other `View` props.           |
| Header row  | A Tamagui `View` row with the labels `Prop` and `Type`, each a `BodyText` in the `display` font, size `sm`, weight 600, and color `subtle` | The column labels.                                                      |
| Row         | A ghost [Collapsible](./collapsible.md) with no border. Its header has an `elevated` background             | One property. Press the header to show or hide the details.             |
| Name        | An [Inline Code Text](./inline-code-text.md) with no background or padding, in the `primary` color          | The property name, with a `?` suffix when it is not required.           |
| Type        | A `BodyText` in the `display` font, size `sm`, weight 600, and color `subtle`. With `typeDescriptionLink`, an underlined [Link](./link.md) in the `emphasis` color | The property type.                                                      |
| Details     | `BodyText` labels and values on a `surface` background                                                      | The description, `Type`, `Default`, `Parameters`, and `Returns` details. |

Only `TypeTable` and its types are exported. The parts are internal.

## Examples

The examples are the stories in [`TypeTable.stories.tsx`](../../../components/type-table/src/TypeTable.stories.tsx). Both stories render a 760 px wide table with `id="type-table-example"` and four rows: a required `label`, `percentage` with a `default` of `0.2`, `onOpenChange` with `parameters`, `returns`, and `typeDescription`, and a deprecated `legacyLabel` whose type links to the TypeScript docs.

| Stories   | What they show                                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| `Base`    | The table with all rows closed.                                                                                      |
| `Details` | The play function opens the `percentage` row, checks the description and the `Default` value `0.2`, checks that the URL hash is `#type-table-example-percentage`, and then closes the row. |

## Props

`TypeTableProps` extends the Tamagui `ViewProps` and adds `type`. The `id` prop comes from `ViewProps`, and the table also uses it for row anchors.

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
- **Expand:** Each row is a ghost `Collapsible`. Several rows can be open at the same time. A detail renders only when its field is not `undefined` or `null`. The values `false` and `0` render as text.
- **Deep links:** The row id is `<table id>-<name>`. Opening a row sets the URL hash to this id. When the page loads with a matching hash, the row opens.
- **Shape:** The first row and rows below an open row have rounded top corners. The bottom corners stay square.
- **Small screens:** The type column, and its header label, is hidden below the `sm` breakpoint (`max-sm`).

## Accessibility

The expand behavior comes from [`Collapsible`](./collapsible.md). The source adds no other roles or labels.

## Related

- [Collapsible](./collapsible.md)
- [Table](./table.md)
- [Table of contents](./table-of-contents.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/type-table/src/TypeTable.tsx`](../../../components/type-table/src/TypeTable.tsx)
- [`components/type-table/src/TypeTableItemDetails.tsx`](../../../components/type-table/src/TypeTableItemDetails.tsx)
- [`components/type-table/src/TypeTable.test.tsx`](../../../components/type-table/src/TypeTable.test.tsx)
- [`components/type-table/src/TypeTable.stories.tsx`](../../../components/type-table/src/TypeTable.stories.tsx) (title: `Docs/TypeTable`)

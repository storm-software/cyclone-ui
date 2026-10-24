---
title: Collapsible
description: Reference for the Collapsible component, a single disclosure panel built on Accordion.
documentType: reference
tags: [component, disclosure]
---

# Collapsible

`Collapsible` shows and hides one section of content. It is a single-item [Accordion](./accordion.md) with a chevron icon.

Open state is a boolean. You can control it with `value`, or leave it uncontrolled with `defaultValue`.

Source: [`components/collapsible`](https://github.com/storm-software/cyclone-ui/tree/main/components/collapsible)

## Import

```tsx
import { Collapsible } from "@cyclone-ui/collapsible";
```

## Usage

```tsx
<Collapsible defaultValue={false}>
  <Collapsible.Header>Details</Collapsible.Header>
  <Collapsible.Content>
    The panel content.
  </Collapsible.Content>
</Collapsible>
```

## Anatomy

| Part | Purpose |
| --- | --- |
| `Collapsible` | The panel. It forces a single, collapsible accordion item. |
| `Collapsible.Header` | The trigger. Same props as `Accordion.Item.Header`. |
| `Collapsible.Content` | The panel body. Same props as `Accordion.Item.Content`. |

## Props

`Collapsible` accepts [Accordion](./accordion.md) props except `children`, `value`, `defaultValue`, `collapsible`, and `type`.

| Prop | Type | Purpose |
| --- | --- | --- |
| `value` | `boolean` | Controlled open state. |
| `defaultValue` | `boolean` | Open state on first render. |
| `children` | `ReactNode` | The header and content. |

The component always sets `collapsible`, `single`, and `type="single"`. It also sets `icon="chevron"`.

`getCollapsibleValue` maps `true` to the item value `"collapsible"` and any other value to `undefined`. That helper is exported from `@cyclone-ui/collapsible`.

## Related pages

- [Accordion](./accordion.md)

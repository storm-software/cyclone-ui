---
title: Collapsible
description: Reference for the Collapsible component, a single disclosure panel built on Accordion.
documentType: reference
tags: [component, disclosure]
component:
  name: collapsible
  package: "@cyclone-ui/collapsible"
  stories:
    - title: Containers/Collapsible
      file: components/collapsible/src/Collapsible.stories.tsx
---

# Collapsible

`Collapsible` shows and hides one section of content. It is a single-item [Accordion](./accordion.md) with a chevron icon.

Open state is a boolean. You can control it with `value`, or leave it uncontrolled with `defaultValue`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add collapsible
pnpm install
```

- **Files:** `Collapsible.tsx` and `get-collapsible-value.ts`. The CLI writes them to `<path>/collapsible/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Accordion](./accordion.md), [Container](./container.md), [Heading Text](./heading-text.md), and [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/helpers`.

## Import

```tsx
import { Collapsible } from "@cyclone-ui/collapsible";
```

## Usage

```tsx
<Collapsible defaultValue={false}>
  <Collapsible.Header>
    <Collapsible.Header.Heading>Details</Collapsible.Header.Heading>
  </Collapsible.Header>
  <Collapsible.Content>
    The panel content.
  </Collapsible.Content>
</Collapsible>
```

## Anatomy

```tsx
<Collapsible>
  <Collapsible.Header>
    <Collapsible.Header.Heading>Heading</Collapsible.Header.Heading>
  </Collapsible.Header>
  <Collapsible.Content>{content}</Collapsible.Content>
</Collapsible>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Collapsible` | An [Accordion](./accordion.md) with one `Accordion.Item` (value `"collapsible"`) around the children. | The panel. It forces a single, collapsible accordion item. |
| `Collapsible.Header` | `Accordion.Item.Header`: a Tamagui accordion trigger as `<button>` with `aria-expanded`, and a `ChevronDown` icon by default. | The trigger. Same props as `Accordion.Item.Header`. |
| `Collapsible.Header.Heading` | `Accordion.Item.Header.Heading` (`HeadingSmallText`). | The heading text of the header. |
| `Collapsible.Content` | `Accordion.Item.Content`: a Tamagui accordion content (`role="region"`) in a height animator. | The panel body. Same props as `Accordion.Item.Content`. |

`CollapsibleHeader` and `CollapsibleContent` are also exported by name. Use them in React Server Components, which cannot read `Collapsible.Header` from a client module.

## Examples

The examples are the stories in [`Collapsible.stories.tsx`](../../../components/collapsible/src/Collapsible.stories.tsx). Each story renders one heading and one paragraph.

| Stories | What they show |
| --- | --- |
| `Base`, `Open` | A closed panel in the default `surface` variant, and a panel open at start (`defaultValue`). |
| `DirectionDown`, `DirectionUp` | `direction="down"` and `direction="up"`. The play functions check that the content is below or above the header. |
| `Primary`, `Secondary`, `Tertiary`, `Sunken`, `Canvas`, `Surface`, `Elevated`, `Floating`, `Outlined` | Each container variant. |
| `Separated`, `Borderless` | `separated`, and `bordered={false}`. |
| `Ghost`, `GhostBorderless` | The `ghost` variant, with and without borders. |
| `Raised`, `Flat`, `Accented` | `shadowStyle="raised"`, `shadowStyle="flat"`, and `accented`. |

## Props

`Collapsible` accepts [Accordion](./accordion.md) props except `children`, `value`, `defaultValue`, `collapsible`, and `type`.

| Prop | Type | Purpose |
| --- | --- | --- |
| `value` | `boolean` | Controlled open state. |
| `defaultValue` | `boolean` | Open state on first render. |
| `children` | `ReactNode` | The header and content. |
| `icon` | `"toggle" \| "chevron"` | The icon at the end of the header. Defaults to `"chevron"`. |

The component always sets `collapsible`, `single`, and `type="single"`.

`variant` takes the Accordion variants: the [Container](./container.md) variants and `ghost`. The Accordion's `shadowStyle`, `glass`, `noise`, and `accented` props work too. See [Accordion variants](./accordion.md#variants).

`getCollapsibleValue` maps `true` to the item value `"collapsible"`, `false` to `""`, and `undefined` to `undefined`. That helper is not exported from the package root. Import it from the `@cyclone-ui/collapsible/get-collapsible-value` subpath.

## Related

- [Accordion](./accordion.md)

## Source

- [`components/collapsible/src/Collapsible.tsx`](../../../components/collapsible/src/Collapsible.tsx)
- [`components/collapsible/src/get-collapsible-value.ts`](../../../components/collapsible/src/get-collapsible-value.ts)
- [`components/collapsible/src/Collapsible.stories.tsx`](../../../components/collapsible/src/Collapsible.stories.tsx) (title: `Containers/Collapsible`)

---
title: Accordion
description: Reference for the Accordion component, a stack of headers that expand and collapse their content.
documentType: reference
tags: [component, containers, accordion, disclosure]
component:
  name: accordion
  package: "@cyclone-ui/accordion"
  stories:
    - title: Containers/Accordion
      file: components/accordion/src/Accordion.stories.tsx
---

# Accordion

`Accordion` shows a list of items. Each item has a header and a content area. The user selects a header to open or close its content.

Use it for FAQs or for sections that the user opens only when needed. For one standalone disclosure, use [Collapsible](./collapsible.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add accordion
pnpm install
```

- **File:** `Accordion.tsx`. The CLI writes it to `<path>/accordion/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Container](./container.md), [Heading Text](./heading-text.md), and [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@stryke/type-checks`, `@tamagui/accordion`, `@tamagui/collapsible`, `@tamagui/core`, `@tamagui/group`, `@tamagui/helpers`, `@tamagui/react-native-types`, and `@tamagui/stacks`.

## Import

```tsx
import { Accordion } from "@cyclone-ui/accordion";
```

## Usage

```tsx
import { Accordion } from "@cyclone-ui/accordion";
import { BodyText } from "@cyclone-ui/body-text";

export function Faq() {
  return (
    <Accordion variant="surface" defaultValue={["item1"]}>
      <Accordion.Item value="item1">
        <Accordion.Item.Header>
          <Accordion.Item.Header.Heading>
            Why take cold showers?
          </Accordion.Item.Header.Heading>
        </Accordion.Item.Header>
        <Accordion.Item.Content>
          <BodyText>They can help reduce muscle soreness.</BodyText>
        </Accordion.Item.Content>
      </Accordion.Item>
    </Accordion>
  );
}
```

## Anatomy

```tsx
<Accordion>
  <Accordion.Item value="item1">
    <Accordion.Item.Header>
      <Accordion.Item.Header.Heading>Heading</Accordion.Item.Header.Heading>
    </Accordion.Item.Header>
    <Accordion.Item.Content>{content}</Accordion.Item.Content>
  </Accordion.Item>
</Accordion>
```

| Part                            | Renders                                                                                                                                                  | Purpose                                                    |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `Accordion`                     | Tamagui `Accordion` in the `base` theme, with a `YGroup` of items. A `ContainerBackground` layer draws the group surface (not for `ghost` or `separated`). | The root. Holds the open state and the visual options.     |
| `Accordion.Item`                | A `YGroup.Item` with a Tamagui `Accordion.Item`. When `separated`, it has its own `ContainerBackground` layer.                                             | One entry. It needs a unique `value`.                      |
| `Accordion.Item.Header`         | A Tamagui `Accordion.Trigger` as `<button>` with `aria-expanded`. It ends with an `AccordionToggle` SVG or a `ChevronDown` icon.                          | The trigger. It shows the icon and the number (if used).   |
| `Accordion.Item.Header.Heading` | `HeadingSmallText`.                                                                                                                                      | The heading text of the header.                            |
| `Accordion.Item.Content`        | A Tamagui `Accordion.Content` (`role="region"`) in an `Accordion.HeightAnimator`.                                                                         | The content that opens and closes. It animates its height. |

`AccordionItem`, `AccordionItemHeader`, `AccordionItemHeaderHeading`, and `AccordionItemContent` are also exported by name. Use them in React Server Components, which cannot read `Accordion.Item.Header` from a client module.

## Examples

The examples are the stories in [`Accordion.stories.tsx`](../../../components/accordion/src/Accordion.stories.tsx). Each story renders three items with a heading and a paragraph.

| Stories                                                                          | What they show                                                                                         |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Base`                                                                           | The default `surface` variant. The play function checks that the icon is to the right of the heading. |
| `Single`                                                                         | `single`: opening one item closes the others.                                                          |
| `DirectionDown`, `DirectionUp`                                                   | The first item open with `direction="down"`, and with `direction="up"` and the chevron. The play functions check that the content is below or above the header. |
| `Primary`, `Secondary`, `Tertiary`, `Sunken`, `Canvas`, `Surface`, `Elevated`, `Floating`, `Outlined` | Each container variant.                                                           |
| `Separated`, `SeparatedPrimary`, `SeparatedSecondary`, `SeparatedTertiary`, `SeparatedOutlined` | `separated` items in the default and other variants.                                    |
| `Borderless`, `Ghost`                                                            | `bordered={false}`, and the `ghost` variant.                                                           |
| `Numbered`, `Chevron`                                                            | `numbered` headings, and `icon="chevron"`.                                                             |
| `IconLeft`, `IconRight`                                                          | `iconDirection`. The play functions check the side of the icon.                                        |
| `Raised`, `SeparatedRaised`, `Flat`, `SeparatedFlat`                             | `shadowStyle="raised"` and `shadowStyle="flat"`, on the group and on separated items.                  |
| `Accented`, `Glass`, `Noise`                                                     | `accented`, and a `primary` group with `glass` or `noise`.                                              |

## Props

### `Accordion`

The root also accepts the other props of the Tamagui accordion, such as `collapsible`. The `direction`, `type`, `value`, `defaultValue`, and `onValueChange` props of Tamagui are replaced by the ones below.

| Prop            | Type                                                                                      | Default      | Description                                                        |
| --------------- | ----------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------ |
| `type`          | `"single" \| "multiple"`                                                                  | `"multiple"` | Whether one or many items can be open.                             |
| `value`         | `string \| string[]`                                                                      | -            | The open item values, for a controlled accordion.                 |
| `defaultValue`  | `string \| string[]`                                                                      | -            | The item values that are open at start.                            |
| `onValueChange` | `(value: string \| string[]) => void`                                                     | -            | Called when an item opens or closes.                               |
| `single`        | `boolean`                                                                                 | `false`      | Same as `type="single"`.                                           |
| `variant`       | [Container](./container.md) variant, or `"ghost"`                                          | `"surface"`  | The background style.                                              |
| `shadowStyle`   | `"none" \| "raised" \| "elevated" \| "flat"`                                                        | -            | The shadow of the group, or of each item when `separated`.         |
| `glass`, `noise`, `accented` | `boolean`                                                                    | `false`      | The [Container](./container.md) options: frosted glass, film grain, and a `primary` border. |
| `bordered`      | `boolean`                                                                                 | `true`       | Shows the borders and the item dividers.                           |
| `separated`     | `boolean`                                                                                 | `false`      | Draws each item as its own box with a gap between items.           |
| `numbered`      | `boolean`                                                                                 | `false`      | Shows a two-digit number before each heading (`01`, `02`, ...).    |
| `icon`          | `"toggle" \| "chevron"`                                                                   | `"toggle"`   | The icon at the end of the header.                                 |
| `iconDirection` | `"left" \| "right"`                                                                       | `"right"`    | The side of the header that holds the icon.                        |
| `direction`     | `"up" \| "down"`                                                                          | `"down"`     | The side where the content opens.                                  |
| `borderRadius`  | radius token                                                                              | `"container"` | The radius of the group.                                          |
| `backgroundColor` | `never`                                                                                 | -            | Not allowed. The `variant` sets the background.                    |

### `Accordion.Item`

| Prop    | Type     | Description                                    |
| ------- | -------- | ---------------------------------------------- |
| `value` | `string` | The unique ID of the item. Used for the state. |

## Variants

Every variant but `ghost` is a [Container](./container.md) variant, the same set as [Button](./button.md): a Container draws the surface behind the group or, when `separated`, behind each item. See the [Container variants](./container.md#variants) for each background and border. `surface` is the default.

- On `primary` and `secondary`, headings, numbers, and icons use `on-primary` / `on-secondary` (`primary` on `secondary` with the uncolored base theme).
- When `separated`, a header shows its item's `-hovered` shade on hover (`surface-hovered` for `outlined`).
- `ghost` has no surface, outer border, or padding. Each header has an underline.

## States and behavior

- **Closed and open.** The state is a list of open `value` strings. Use `defaultValue` or `value` to set it.
- **Single mode.** When `single` or `type="single"` is set, opening one item closes the others.
- **Hover.** The heading and the icon change color on hover.
- **Direction.** With `direction="up"`, the content shows above the header. With `direction="down"`, the chevron turns 180 degrees when the item opens. With `direction="up"`, it turns 180 degrees when the item closes.
- **Separated.** Each item paints its own background and its own hover color.
- **Borderless.** `bordered={false}` removes the group border, the item borders, and the header borders.

## Accessibility

- The header is a Tamagui accordion trigger. It renders a `<button>` with `aria-expanded`. The content has the `region` role and is labelled by its header.
- The chevron icon is hidden from assistive technology (`aria-hidden`).
- The header shows a focus ring on keyboard focus (`focus-visible`).

## Related

- [Collapsible](./collapsible.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/accordion/src/Accordion.tsx`](../../../components/accordion/src/Accordion.tsx)
- [`components/accordion/src/Accordion.stories.tsx`](../../../components/accordion/src/Accordion.stories.tsx) (title: `Containers/Accordion`)

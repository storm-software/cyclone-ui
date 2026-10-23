---
title: Accordion
description: Reference for the Accordion component, a stack of headers that expand and collapse their content.
documentType: reference
tags: [component, containers, accordion, disclosure]
---

# Accordion

`Accordion` shows a list of items. Each item has a header and a content area. The user selects a header to open or close its content.

Use it for FAQs or for sections that the user opens only when needed. For one standalone disclosure, use [Collapsible](./collapsible.md).

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

| Part                                | Purpose                                                    |
| ----------------------------------- | ---------------------------------------------------------- |
| `Accordion`                         | The root. Holds the open state and the visual options.     |
| `Accordion.Item`                    | One entry. It needs a unique `value`.                      |
| `Accordion.Item.Header`             | The trigger. It shows the icon and the number (if used).   |
| `Accordion.Item.Header.Heading`     | The heading text of the header (`HeadingSmallText`).       |
| `Accordion.Item.Content`            | The content that opens and closes. It animates its height. |

## Props

### `Accordion`

The root also accepts the props of the Tamagui accordion, such as `defaultValue`, `value`, and `onValueChange`. The `direction` prop of Tamagui is replaced by the one below.

| Prop            | Type                                                                                      | Default      | Description                                                        |
| --------------- | ----------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------ |
| `type`          | `"single" \| "multiple"`                                                                  | `"multiple"` | Whether one or many items can be open.                             |
| `single`        | `boolean`                                                                                 | `false`      | Same as `type="single"`.                                           |
| `variant`       | `"sunken" \| "canvas" \| "surface" \| "elevated" \| "floating" \| "outlined" \| "ghost"` | `"surface"`  | The background style.                                              |
| `bordered`      | `boolean`                                                                                 | `true`       | Shows the borders and the item dividers.                           |
| `separated`     | `boolean`                                                                                 | `false`      | Draws each item as its own box with a gap between items.           |
| `numbered`      | `boolean`                                                                                 | `false`      | Shows a two-digit number before each heading (`01`, `02`, ...).    |
| `icon`          | `"toggle" \| "chevron"`                                                                   | `"toggle"`   | The icon at the end of the header.                                 |
| `iconDirection` | `"left" \| "right"`                                                                       | `"right"`    | The side of the header that holds the icon.                        |
| `direction`     | `"up" \| "down"`                                                                          | `"down"`     | The side where the content opens.                                  |
| `backgroundColor` | `never`                                                                                 | -            | Not allowed. The `variant` sets the background.                    |

### `Accordion.Item`

| Prop    | Type     | Description                                    |
| ------- | -------- | ---------------------------------------------- |
| `value` | `string` | The unique ID of the item. Used for the state. |

## Variants

Each filled variant uses the background token with the same name. See [Design tokens](../tokens/index.md).

| Variant    | Background    | Notes                                                       |
| ---------- | ------------- | ----------------------------------------------------------- |
| `sunken`   | `sunken`      |                                                             |
| `canvas`   | `canvas`      |                                                             |
| `surface`  | `surface`     | The default.                                                |
| `elevated` | `elevated`    |                                                             |
| `floating` | `floating`    |                                                             |
| `outlined` | `transparent` | Headers use `surface-hovered` on hover when `separated`.    |
| `ghost`    | `transparent` | No outer border or padding. Each header has an underline.   |

## States and behavior

- **Closed and open.** The state is a list of open `value` strings. Use `defaultValue` or `value` to set it.
- **Single mode.** When `single` or `type="single"` is set, opening one item closes the others.
- **Hover.** The heading and the icon change color on hover.
- **Direction.** With `direction="up"`, the content shows above the header. The chevron turns 180 degrees when the item is open.
- **Separated.** Each item paints its own background and its own hover color.
- **Borderless.** `bordered={false}` removes the group border, the item borders, and the header borders.

## Accessibility

- The header is a Tamagui accordion trigger. It has the `button` role.
- The chevron icon is hidden from assistive technology (`aria-hidden`).
- The header shows a focus ring on keyboard focus (`focus-visible`).

## Related

- [Collapsible](./collapsible.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/accordion/src/Accordion.tsx`](../../../components/accordion/src/Accordion.tsx)
- [`components/accordion/src/Accordion.stories.tsx`](../../../components/accordion/src/Accordion.stories.tsx) (title: `Containers/Accordion`)

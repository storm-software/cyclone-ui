---
title: Kbd
description: Reference for the Kbd component, a keyboard key cap that renders a `<kbd>` element in three sizes, and KbdGroup for key combinations such as Ctrl + K.
documentType: reference
tags: [component, typography, keyboard, shortcut]
component:
  name: kbd
  package: "@cyclone-ui/kbd"
  stories:
    - title: Typography/Kbd
      file: components/kbd/src/Kbd.stories.tsx
---

# Kbd

`Kbd` shows a keyboard key, such as `Ctrl`, `⌘`, or `Esc`, in a small bordered box. It renders a `<kbd>` element that sits inline in text, buttons, and tooltips. `KbdGroup` puts several keys side by side for a key combination, such as Ctrl + K.

Use `Kbd` for keys that the reader presses. For code, commands, or file names that the reader types or reads, use [Inline Code Text](./inline-code-text.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add kbd
pnpm install
```

- **File:** `Kbd.tsx`. The CLI writes it to `<path>/kbd/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { Kbd, KbdGroup } from "@cyclone-ui/kbd";
```

## Usage

```tsx
<BodyText>
  Press{" "}
  <KbdGroup>
    <Kbd>Ctrl</Kbd>+<Kbd>K</Kbd>
  </KbdGroup>{" "}
  to open the command palette.
</BodyText>

<Button variant="outlined" size="sm">
  <Button.Text>Accept</Button.Text>
  <Kbd size="sm">⏎</Kbd>
</Button>
```

## Anatomy

```tsx
<KbdGroup>
  <Kbd>Ctrl</Kbd>+<Kbd>K</Kbd>
</KbdGroup>
```

| Part       | Renders                                                                                         | Purpose                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `Kbd`      | A Tamagui `View` as `<kbd>`, with an inner Tamagui `Text` in the `body` font, `medium` weight, and `ink` color | One key cap. The frame has a 1 px `hairline` border, the `sm` radius, and a `surface` background. The inner text holds the key label or icon. |
| `KbdGroup` | A Tamagui `Text` as `<kbd>`, in the `body` font and `subtle` color                              | Keys pressed together. It lays out its `Kbd` children, and any text between them such as `+`, in a row.   |

A `Kbd` inside a `KbdGroup` gives a `<kbd>` element inside a `<kbd>` element.

## Examples

The examples are the stories in [`Kbd.stories.tsx`](../../../components/kbd/src/Kbd.stories.tsx).

| Stories                   | What they show                                                                                                       |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `Base`, `Small`, `Large`  | Two groups at the `md`, `sm`, and `lg` sizes: the `⌘`, `⇧`, `⌥`, and `⌃` symbol keys, and `Ctrl` + `B`.               |
| `Group`                   | A `KbdGroup` with two keys inside a sentence of subtle `BodyText`.                                                  |
| `InButton`                | A `⏎` key after the label of a small outlined `Button`.                                                              |
| `Icons`                   | Four arrow icons as keys, each at 12 px with `color="currentColor"`.                                                 |

## Props

### `Kbd`

`Kbd` also accepts the props of a Tamagui `View`. The exported type is `KbdProps`.

| Prop       | Type                     | Default | Description                                                                                         |
| ---------- | ------------------------ | ------- | --------------------------------------------------------------------------------------------------- |
| `size`     | `"sm" \| "md" \| "lg"`   | `"md"`  | The key size. It sets the height, minimum width, horizontal padding, and font size. See [Sizes](#sizes). |
| `children` | `ReactNode`              | -       | The key label, or an icon. For an icon, set a `size` that fits (12 px at `md`) and `color="currentColor"`. |

### `KbdGroup`

`KbdGroup` accepts the props of a Tamagui `Text`. The exported type is `KbdGroupProps`. It has no custom props.

## Sizes

| Size | Height and minimum width | Horizontal padding | Font size |
| ---- | ------------------------ | ------------------ | --------- |
| `sm` | `2xl`                    | `md`               | `xxxs`    |
| `md` | `4xl`                    | `lg`               | `xxs`     |
| `lg` | `6xl`                    | `xl`               | `xs`      |

The text has a line height of `1`. The fixed frame height centers it. See [Design tokens](../tokens/index.md).

## Behavior

- **Pointer.** A key has `pointerEvents: "none"` and `userSelect: "none"`. A key inside a button does not catch the press, and the user cannot select its text.
- **Wrapping.** The key text and the group do not wrap (`whiteSpace: nowrap`).
- **Icons.** The inner `Text` sets the color, so an icon with `color="currentColor"` uses the key's `ink` color.

## Accessibility

- `Kbd` and `KbdGroup` render `<kbd>` elements. The source sets no `role` and no `aria-*` attributes. A screen reader reads the text content of each key.
- The source adds no text alternative for symbol keys (such as `⌘`) or icon keys. When the key is important, also write its name in the text, or add a [Visually Hidden](./visually-hidden.md) label.

## Related

- [Inline Code Text](./inline-code-text.md)
- [Button](./button.md)
- [Body Text](./body-text.md)
- [Tooltip](./tooltip.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/kbd/src/Kbd.tsx`](../../../components/kbd/src/Kbd.tsx)
- [`components/kbd/src/Kbd.stories.tsx`](../../../components/kbd/src/Kbd.stories.tsx) (title: `Typography/Kbd`)

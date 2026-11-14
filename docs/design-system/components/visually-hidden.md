---
title: Visually Hidden
description: A wrapper that hides its content on screen but keeps it available to screen readers.
documentType: reference
tags: [component, visually-hidden, accessibility]
component:
  name: visually-hidden
  package: "@cyclone-ui/visually-hidden"
  stories:
    - title: Display/VisuallyHidden
      file: components/visually-hidden/src/VisuallyHidden.stories.tsx
    - title: Display/VisuallyHidden/Tailwind
      file: components/visually-hidden/src/VisuallyHidden.tailwind.stories.tsx
      style: tailwind
---

# Visually Hidden

`VisuallyHidden` hides its content from sighted users. Assistive technology can still read it. Use it for accessible labels and for text that only a screen reader should announce.

To show and hide content on screen with a fade, set `visible` and `animate`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add visually-hidden
pnpm install
```

- **File:** `VisuallyHidden.tsx`. The CLI writes it to `<path>/visually-hidden/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`.
- **Tailwind:** with `style: "tailwind"` in `components.json`, the CLI copies the Tailwind CSS version of this component. See the [CLI configuration](../../packages/cli.md).

## Import

```tsx
import { VisuallyHidden } from "@cyclone-ui/visually-hidden";
```

## Usage

```tsx
import { VisuallyHidden } from "@cyclone-ui/visually-hidden";

export function Example() {
  return <VisuallyHidden>Close dialog</VisuallyHidden>;
}
```

`VisuallyHidden` is a Tamagui `View` with three variants. It accepts all `View` props.

## Anatomy

```tsx
<VisuallyHidden>Label</VisuallyHidden>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `VisuallyHidden` | A Tamagui `View` (`styled(View)`). The source sets no element, role, or ARIA attribute. While hidden, it is a `1 × 1` absolute box with `overflow: hidden` and an opacity of `0.00000001`. With `animate`, a `200ms` Tamagui `transition` animates between the states. | Holds the content. It hides the content on screen and keeps it in the accessibility tree. |

## Examples

The examples are the stories in [`VisuallyHidden.stories.tsx`](../../../components/visually-hidden/src/VisuallyHidden.stories.tsx). Each story wraps the text "Now you see me...".

| Stories | What they show |
| --- | --- |
| `Base` | The default hidden state. The text is not visible. |
| `PreserveDimensions` | `preserveDimensions` on the hidden text. The text stays transparent. |
| `Visible` | `visible`. The text shows in the normal layout. |
| `Animate` | `animate`. The text is hidden. Toggle `visible` in the controls to see the `200ms` transition. |

The Tailwind version has the same stories (`Base`, `PreserveDimensions`, `Visible`, and `Animate`) in [`VisuallyHidden.tailwind.stories.tsx`](../../../components/visually-hidden/src/VisuallyHidden.tailwind.stories.tsx).

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `visible` | `boolean` | `false` | When `true`, shows the content in the normal layout. |
| `preserveDimensions` | `boolean` | — | Keeps the element in the layout with automatic width and height. |
| `animate` | `boolean` | — | Adds a `200ms` transition, so the content can fade between states. |

## Variants and states

| State | Styles |
| --- | --- |
| Hidden (`visible` is `false`) | `position: absolute`, a `1 × 1` box, a `-1` margin, `overflow: hidden`, `opacity: 0.00000001`, `pointerEvents: none`, and `zIndex: -10000`. |
| `visible` | `position: relative`, automatic size, `overflow: visible`, `opacity: 1`, and `pointerEvents: auto`. |
| `preserveDimensions` | `position: relative`, `width: auto`, and `height: auto`. |
| `animate` | A `200ms` transition. |

The source sets `isVisuallyHidden` on the component. Tamagui core checks this flag when it computes spacing.

## Accessibility

The hidden state uses a near-zero opacity and a `1 × 1` box. It does not use `display: none`, so the content stays in the accessibility tree. The source sets no role or label.

## Related

- [Design tokens](../tokens/index.md)
- [Tooltip](./tooltip.md)
- [PDF document display](./pdf-document-display.md), which uses `visible` and `animate` to switch between its loading and loaded content

## Source

- [`components/visually-hidden/src/VisuallyHidden.tsx`](../../../components/visually-hidden/src/VisuallyHidden.tsx)
- [`components/visually-hidden/src/VisuallyHidden.tailwind.tsx`](../../../components/visually-hidden/src/VisuallyHidden.tailwind.tsx)
- [`components/visually-hidden/src/VisuallyHidden.stories.tsx`](../../../components/visually-hidden/src/VisuallyHidden.stories.tsx) (title: `Display/VisuallyHidden`)
- [`components/visually-hidden/src/VisuallyHidden.tailwind.stories.tsx`](../../../components/visually-hidden/src/VisuallyHidden.tailwind.stories.tsx) (title: `Display/VisuallyHidden/Tailwind`)

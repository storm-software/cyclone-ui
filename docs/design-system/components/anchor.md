---
title: Anchor
description: Reference for the Anchor component, a wrapper that adds a hover permalink link icon next to its children.
documentType: reference
tags: [component, triggers, link, permalink]
component:
  name: anchor
  package: "@cyclone-ui/anchor"
  stories:
    - title: Triggers/Anchor
      file: components/anchor/src/Anchor.stories.tsx
    - title: Triggers/Anchor/Tailwind
      file: components/anchor/src/Anchor.tailwind.stories.tsx
      style: tailwind
---

# Anchor

`Anchor` wraps its children and adds a link icon after them. The icon appears when the user hovers over the wrapper or focuses the icon. It is useful for headings that readers can link to.

Despite the name, it does not turn the children into a link. The link is the icon. To make the text itself a link, use [Link](./link.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add anchor
pnpm install
```

- **File:** `Anchor.tsx`. The CLI writes it to `<path>/anchor/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.
- **Tailwind:** with `style: "tailwind"` in `components.json`, the CLI copies the Tailwind CSS version of this component. See the [CLI configuration](../../packages/cli.md).

## Import

```tsx
import { Anchor } from "@cyclone-ui/anchor";
```

## Usage

```tsx
<Anchor href="#install" permalinkLabel="Link to Install">
  <HeadingText>Install</HeadingText>
</Anchor>
```

## Anatomy

```tsx
<Anchor href="#install" permalinkLabel="Link to Install">
  <HeadingText>Install</HeadingText>
  {/* permalink */}
</Anchor>
```

| Part      | Renders                                                                                               | Purpose                                                                                  |
| --------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `Anchor`  | A Tamagui `View` as `<span>`, in a row                                                                 | The wrapper. It holds the children and the permalink, and is the `anchor` group for the hover effect. |
| Permalink | A Tamagui `View` as `<a>`, with the `Link` or `Anchor` icon from `@cyclone-ui/icons` set to `aria-hidden` | The link to the wrapped content. It gets `href`, `title`, and `aria-label` only when `href` is set. |

## Examples

The examples are the stories in [`Anchor.stories.tsx`](../../../components/anchor/src/Anchor.stories.tsx). Each story wraps a `HeadingText` and sets `href="#anchor"`.

| Stories                  | What they show                                               |
| ------------------------ | ------------------------------------------------------------ |
| `Base`                   | The default `link` icon. Hover the heading to show the icon. |
| `LinkIcon`, `AnchorIcon` | `icon="link"` and `icon="anchor"`.                           |

[`Anchor.tailwind.stories.tsx`](../../../components/anchor/src/Anchor.tailwind.stories.tsx) (title: `Triggers/Anchor/Tailwind`) has one story, `Base`, which renders the Tailwind CSS version with the same args.

## Props

`Anchor` also accepts the props of a Tamagui `View`. The wrapper renders as a `span`. The exported types are `AnchorProps` and `AnchorExtraProps`.

| Prop             | Type                   | Default  | Description                                                                  |
| ---------------- | ---------------------- | -------- | ---------------------------------------------------------------------------- |
| `href`           | `string`               | -        | The target of the permalink icon. Without it, the icon has no link behavior. |
| `target`         | `string`               | -        | The link target. Web only.                                                   |
| `rel`            | `string`               | -        | The link relationship. Web only.                                             |
| `download`       | `string`               | -        | The download file name. Web only.                                            |
| `permalinkLabel` | `string`               | -        | The accessible label and the title of the permalink.                         |
| `icon`           | `"link" \| "anchor"`   | `"link"` | The permalink icon. The Tailwind CSS version has no `icon` prop and always shows the `link` icon. |

## Behavior

- **Hidden.** The icon has opacity 0 and no offset.
- **Hover or focus.** The icon fades in and moves 10 px to the right over 250ms.
- **Touch.** With the `touchable` media condition, the icon always shows at the 10 px offset.
- **Icon hover.** The icon color changes from `neutral7` to `primary`.
- **Native.** On native platforms, pressing the icon calls `Linking.openURL(href)`, after `onPress` if you set it.

## Accessibility

- The permalink gets `aria-label` from `permalinkLabel` only when `href` is set.
- The icon itself is hidden from assistive technology (`aria-hidden`).
- Set `permalinkLabel` so screen reader users know where the link goes.

## Related

- [Link](./link.md)
- [Heading Text](./heading-text.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/anchor/src/Anchor.tsx`](../../../components/anchor/src/Anchor.tsx)
- [`components/anchor/src/Anchor.stories.tsx`](../../../components/anchor/src/Anchor.stories.tsx) (title: `Triggers/Anchor`)
- [`components/anchor/src/Anchor.tailwind.tsx`](../../../components/anchor/src/Anchor.tailwind.tsx)
- [`components/anchor/src/Anchor.tailwind.stories.tsx`](../../../components/anchor/src/Anchor.tailwind.stories.tsx) (title: `Triggers/Anchor/Tailwind`)

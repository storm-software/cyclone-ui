---
title: Popover
description: A floating popover with a trigger, an anchor, and elevated content. It turns into a bottom sheet on small screens.
documentType: reference
tags: [component, popover, container, overlay]
---

# Popover

`Popover` is a floating panel built on the Tamagui `Popover`. It is a compound component. On small screens (the `max-sm` media query), the content opens in a bottom [Sheet](./sheet.md) by default.

## Import

```tsx
import { Popover } from "@cyclone-ui/popover";
```

## Usage

```tsx
<Popover>
  <Popover.Trigger asChild={true}>
    <Button>
      <Button.Text>Open Popover</Button.Text>
    </Button>
  </Popover.Trigger>
  <Popover.Content hasArrow>
    <YStack gap="3xl">
      <HeadingText>Heading Text</HeadingText>
      <BodyText>Popover body text.</BodyText>
      <Popover.Content.Close asChild={true}>
        <Button>
          <Button.Text>Close</Button.Text>
        </Button>
      </Popover.Content.Close>
    </YStack>
  </Popover.Content>
</Popover>
```

## Parts

| Part | Description |
| --- | --- |
| `Popover` | The root. Holds state and the `size` context. |
| `Popover.Trigger` | The element that opens the popover. Tamagui `Popover.Trigger`. |
| `Popover.Anchor` | An element to position the content against. Tamagui `Popover.Anchor`. |
| `Popover.Content` | The floating panel. |
| `Popover.Content.ScrollView` | A [ScrollView](./scroll-view.md) for long content. |
| `Popover.Content.Close` | An element that closes the popover. Tamagui `Popover.Close`. |

## Props

### `Popover`

The root accepts the Tamagui `Popover` props plus the props below. It sets `allowFlip` to `true`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `SizeTokens` | `true` | Size, shared with the parts through `PopoverContext`. |
| `shouldAdapt` | `boolean` | `true` | Renders the content in a bottom `Sheet` on small screens. |
| `variant` | [Container](./container.md) variant | `"elevated"` | The surface of the content, the arrow, and the small-screen sheet. See [Variants](#variants). |
| `shadowStyle` | `"none" \| "raised" \| "elevated" \| "flat"` | `"elevated"` | The content's shadow. |
| `glass`, `noise`, `accented` | `boolean` | `false` | The [Container](./container.md) options: frosted glass, film grain, and a `primary` border. |
| `theme` | theme name | — | Theme. |

### `Popover.Content`

It accepts the Tamagui `Popover.Content` props plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `hasArrow` | `boolean` | `false` | Shows an arrow that points to the trigger. |
| `variant`, `shadowStyle`, `glass`, `noise`, `accented` | Same as `Popover` | The `Popover`'s | Override the root's surface for this content. `shadowStyle` replaces the former `elevated` flag. |

## Appearance

- A [Container](./container.md) draws the surface behind the content: `elevated` with a 1px `border` border and the `elevated` shadow by default.
- Padding `3xl`, border radius `popover`. A 2px `primary-active` outline shows on `focus-visible`.
- Enter and exit: the content fades and moves `-10px` on `y` in `100ms`.

## Variants

`variant` takes any [Container](./container.md) variant, the same set as [Button](./button.md). The arrow takes the variant's background and border.

- An `outlined` popover keeps an opaque `elevated` backing so its content stays readable over the page.
- Explicit `backgroundColor`, `borderColor`, and `borderWidth` on `Popover.Content` win over the variant, on the surface and the arrow.
- The content is yours, so text inside a `primary` or `secondary` popover should use `getContainerForeground(variant, themeName)` from `@cyclone-ui/container` (`on-primary` / `on-secondary`, or `primary` on `secondary` with the uncolored base theme).
- On small screens, the surface props pass to the adapted [Sheet](./sheet.md).

The stories show the default popover, `hasArrow`, each Button `variant` (with `PrimaryArrow` and `OutlinedArrow`), `Floating`, `Raised`, `Accented`, `Glass`, `Noise`, and the themes `brand`, `discovery`, `danger`, `warning`, `info`, and `success`.

## Related

- [ScrollView](./scroll-view.md)
- [Sheet](./sheet.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/popover/src/Popover.tsx`](../../../components/popover/src/Popover.tsx)
- [`components/popover/src/Popover.stories.tsx`](../../../components/popover/src/Popover.stories.tsx)

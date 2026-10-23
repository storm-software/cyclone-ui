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
| `theme` | theme name | — | Theme. |

### `Popover.Content`

It accepts the Tamagui `Popover.Content` props plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `hasArrow` | `boolean` | `false` | Shows an arrow that points to the trigger. |
| `elevated` | `boolean` | `true` | Adds the shadow `0px 4px 30px #0D0C0766`. |

## Appearance

- Background `elevated`, padding `3xl`, border radius `popover`.
- Border `1` wide in `hairline`. It changes to `primary-active` on `focus-visible`.
- Enter and exit: the content fades and moves `-10px` on `y` in `100ms`.

## Variants

The stories show the default popover, `hasArrow`, and the themes `brand`, `discovery`, `danger`, `warning`, `info`, and `success`.

## Related

- [ScrollView](./scroll-view.md)
- [Sheet](./sheet.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/popover/src/Popover.tsx`](../../../components/popover/src/Popover.tsx)
- [`components/popover/src/Popover.stories.tsx`](../../../components/popover/src/Popover.stories.tsx)

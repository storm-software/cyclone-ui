---
title: Popover
description: A floating popover with a trigger, an anchor, and elevated content. It turns into a bottom sheet on small screens.
documentType: reference
tags: [component, popover, container, overlay]
component:
  name: popover
  package: "@cyclone-ui/popover"
  stories:
    - title: Containers/Popover
      file: components/popover/src/Popover.stories.tsx
---

# Popover

`Popover` is a floating panel built on the Tamagui `Popover`. It is a compound component. On small screens (the `max-sm` media query), the content opens in a bottom [Sheet](./sheet.md) by default.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add popover
pnpm install
```

- **File:** `Popover.tsx`. The CLI writes it to `<path>/popover/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Scroll View](./scroll-view.md), and [Sheet](./sheet.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/adapt`, `@tamagui/core`, `@tamagui/floating`, `@tamagui/popover`, `@tamagui/popper`, and `@tamagui/stacks`.

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

## Anatomy

```tsx
<Popover>
  <Popover.Trigger />
  <Popover.Anchor />
  <Popover.Content>
    <Popover.Content.ScrollView>{content}</Popover.Content.ScrollView>
    <Popover.Content.Close />
  </Popover.Content>
</Popover>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Popover` | A Tamagui `Popover` with `allowFlip` and `stayInFrame`. With `shouldAdapt`, an `Adapt` on `max-sm` moves the content into a bottom [Sheet](./sheet.md) with a `fit` snap point, an overlay, a handle, and `5xl` padding. | The root. Holds the open state, the `size` context, and the surface props. |
| `Popover.Trigger` | The Tamagui `Popover.Trigger`: a `View` with `aria-expanded` and `data-state`. Floating UI adds `aria-controls` while the popover is open. | The element that opens the popover. Use `asChild` to use your own element. |
| `Popover.Anchor` | The Tamagui `Popover.Anchor`. | An element to position the content against. |
| `Popover.Content` | The Tamagui `Popover.Content` in a portal, with `role="dialog"` from Floating UI. A `ContainerBackground` draws the surface under the children. With `hasArrow`, a Tamagui `Popover.Arrow` is added. | The floating panel. It is never wider than the viewport less 20px. |
| `Popover.Content.ScrollView` | A [ScrollView](./scroll-view.md). | Scrolls long content. |
| `Popover.Content.Close` | The Tamagui `Popover.Close`. | An element that closes the popover. |

`PopoverTrigger`, `PopoverAnchor`, `PopoverContent`, `PopoverContentScrollView`, and `PopoverContentClose` are also exported by name. Use them in React Server Components, which cannot read `Popover.Content` from a client module.

## Examples

The examples are the stories in [`Popover.stories.tsx`](../../../components/popover/src/Popover.stories.tsx). Each story opens from an "Open Popover" button. The content has a heading, body text, and a close button. On `primary` and `secondary` popovers, the text uses `getContainerForeground`.

| Stories | What they show |
| --- | --- |
| `Base`, `Arrow` | The default `elevated` popover, and the same popover with `hasArrow`. |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | The `brand`, `discovery`, `danger`, `warning`, `info`, and `success` themes. |
| `Primary`, `Secondary`, `Tertiary`, `Outlined`, `Floating` | Each of these `variant` values. |
| `PrimaryArrow`, `OutlinedArrow` | The arrow takes the background and border of the `primary` and `outlined` variants. |
| `Raised` | The `surface` variant with the `raised` shadow. |
| `Accented`, `Glass`, `Noise`, `Flat` | `accented` with an arrow, `glass`, `noise` on a `primary` popover, and the `flat` shadow with an arrow. |

## Props

### `Popover`

The root accepts the Tamagui `Popover` props (such as `open`, `onOpenChange`, `placement`, and `offset`) plus the props below. It sets `allowFlip` and `stayInFrame` to `true`. You can override both.

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
| `borderRadius` | radius token | `"popover"` | The radius of the content and its surface. |
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
- With `accented`, the arrow border is also `primary`. With `shadowStyle="flat"`, the arrow has no border.

## Accessibility

The Tamagui `Popover` supplies this behavior:

- The trigger has `aria-expanded`. While the popover is open, it also has `aria-controls`, which points to the content.
- The content has `role="dialog"`. While it is open, focus stays in the content and loops. When it closes, focus goes back to the trigger.
- The Escape key and a press outside the content close the popover.
- On small screens, the popover's focus trap is off. The [Sheet](./sheet.md) controls focus there.

The content shows a 2px `primary-active` outline on `focus-visible`. Give an icon-only trigger an accessible name, for example `aria-label`.

## Related

- [Context menu](./context-menu.md), which is built on `Popover`
- [Tooltip](./tooltip.md)
- [ScrollView](./scroll-view.md)
- [Sheet](./sheet.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/popover/src/Popover.tsx`](../../../components/popover/src/Popover.tsx)
- [`components/popover/src/Popover.stories.tsx`](../../../components/popover/src/Popover.stories.tsx) (title: `Containers/Popover`)

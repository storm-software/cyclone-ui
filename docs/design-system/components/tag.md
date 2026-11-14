---
title: Tag
description: A compact label chip with text and icon parts. It takes the Container variants, circular, pressable, removable, and editable modes.
documentType: reference
tags: [component, tag, chip, label]
component:
  name: tag
  package: "@cyclone-ui/tag"
  stories:
    - title: Triggers/Tag
      file: components/tag/src/Tag.stories.tsx
---

# Tag

`Tag` is a compact label chip. Use it to show a short keyword, status, or category. Make it pressable, removable, or editable when the user must act on it.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add tag
pnpm install
```

- **File:** `Tag.tsx`. The CLI writes it to `<path>/tag/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Container](./container.md), [Icons](../icons/index.md), and [Ripple Animation](./ripple-animation.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/animate-presence`, `@tamagui/core`, `@tamagui/font-size`, `@tamagui/get-font-sized`, `@tamagui/helpers`, `@tamagui/helpers-tamagui`, and `@tamagui/text`.

## Import

```tsx
import { Tag } from "@cyclone-ui/tag";
```

## Usage

```tsx
import { Tag } from "@cyclone-ui/tag";

export function Example() {
  return (
    <Tag
      variant="secondary"
      outlined
      removable
      removeButtonLabel="Remove design"
      onAfterRemove={() => console.log("removed")}>
      <Tag.Text>Design</Tag.Text>
    </Tag>
  );
}
```

## Anatomy

```tsx
<Tag>
  <Tag.Icon>{icon}</Tag.Icon>
  <Tag.Text>Label</Tag.Text>
  <Tag.Button>{icon}</Tag.Button>
</Tag>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Tag` | A Tamagui `View` with a `ContainerBackground` layer for the surface. A pressable or editable tag has `role="button"` and `tabIndex={0}`, and adds a ripple layer. With `removable`, a native `<button>` with a bold `Close` icon follows the children. | The frame. It sets the variant, size, and mode for its children. |
| `Tag.Text` | A Tamagui `SizableText` as `<span>`. In edit mode, a native `<input>` in the same font. | The label. It reads the tag variant and size. |
| `Tag.Icon` | A Tamagui `View` that sizes and colors its child icon. | An icon sized to the tag. Pass the icon as its child. |
| `Tag.Button` | A round Tamagui `View` with `role="button"`, `tabIndex={0}`, and a press ripple. | A round button inside the tag. It has `alignLeft` and `alignRight` props that move it out of the tag edge. |

`TagText`, `TagIcon`, and `TagButton` are also exported by name. Use them in React Server Components, which cannot read `Tag.Text` from a client module.

## Examples

The examples are the stories in [`Tag.stories.tsx`](../../../components/tag/src/Tag.stories.tsx). Most stories render one tag with the label `Tag Text`.

| Stories | What they show |
| --- | --- |
| `Base`, `Brand`, `Rounded` | The default `primary` tag, the `brand` theme, and `circular`. |
| `Secondary`, `Tertiary`, `Surface`, `Floating` | The `secondary`, `tertiary`, `surface`, and `floating` variants. |
| `Outlined`, `SecondaryOutlined` | `variant="outlined"`, and the deprecated `outlined` flag on `secondary`. The play functions check that the text color matches the 2 px border. |
| `Pressable`, `PressableSecondary`, `PressableTertiary`, `PressableOutlined`, `PressableSurface` | `pressable` on several variants. |
| `Removable` | `removable` with a custom `removeButtonLabel`. The play function presses the remove button and checks that the tag goes away. |
| `RemovableOutlined`, `RemovableSecondary`, `RemovableRounded` | `removable` on other variants and on a circular tag. |
| `RemovablePrevented` | An `onBeforeRemove` that returns `false`. The play function checks that the tag stays. |
| `RemovableGroup` | Three removable tags. `onAfterRemove` takes each tag out of the list. |
| `Editable` | `editable` with `onEdit`. The play function edits the text with Enter, then cancels an edit with Escape. |
| `Discovery` through `DiscoverySecondaryOutlined`, and the same set for `Error`, `Warning`, `Info`, and `Success` | Each status theme (`discovery`, `danger`, `warning`, `info`, `success`) on the default, rounded, outlined, secondary, secondary rounded, and secondary outlined tags. |
| `Accented`, `Raised`, `Glass`, `Flat` | `accented` and `shadowStyle="raised"` on `elevated`, `glass`, and `shadowStyle="flat"` on `surface`. |

No story shows `Tag.Icon` or `Tag.Button`.

## Props

`TagProps` is the Tamagui frame props plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | [Container](./container.md) variant | `"primary"` | The surface, drawn by a Container as on [Button](./button.md). See below. |
| `shadowStyle` | `"none" \| "raised" \| "elevated" \| "flat"` | `"none"` | The tag's shadow. `flat` also removes the border, including an `outlined` tag's. |
| `glass`, `accented` | `boolean` | `false` | The [Container](./container.md) options: frosted glass and a `primary` border. A tag is too small for `noise`. |
| `size` | `SizeTokens \| number` | `true` | Sets the padding. `Tag.Text` and `Tag.Icon` also follow it. |
| `outlined` | `boolean` | `false` | Deprecated: use `variant="outlined"`. Outlines the tag in the `primary` or `secondary` variant's color. |
| `circular` | `boolean` | `false` | Fully rounds the tag. The `Rounded` story uses this prop. |
| `pressable` | `boolean` | `false` | Makes the tag focusable with `role="button"` and a press ripple. |
| `removable` | `boolean` | `false` | Adds a remove button after the children. |
| `removeButtonLabel` | `string` | `"Remove"` | The accessible label of the remove button. |
| `onBeforeRemove` | `() => boolean` | — | Called before removal. The tag is removed only when it returns `true`. |
| `onAfterRemove` | `() => void` | — | Called after the exit animation ends. |
| `editable` | `boolean` | `false` | Double-click turns a plain-text `Tag.Text` into a text box. |
| `editInputLabel` | `string` | `"Edit tag"` | The accessible label of the text box. |
| `onEdit` | `(value: string) => void` | — | Called with the new text when it differs from the old text. |

`TagContextProps` also lists a `rounded` field. The source applies no style for it.

### `Tag.Icon`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | — | The icon. |
| `color` | `ColorTokens \| string` | Tag text color | The icon color. |
| `size` | `SizeTokens` | Tag size | The icon size basis. |
| `scaleIcon` | `number` | `0.7` | Scales the icon size. |

## Variants and states

- **Surface:** A [Container](./container.md) of the `variant` draws the background and border (see its variant table). The text is `on-primary` on `primary`, `on-secondary` on `secondary` (`primary` on the uncolored base theme's light `secondary`), and `primary` on the other variants.
- **`outlined`:** A transparent background with a 2px `primary` border and `primary` text. With the deprecated `outlined` flag, a `secondary` tag outlines in `secondary` instead.
- **Pressable:** The background (or the outlined border) changes to its `-hovered` shade on hover. A ripple starts at the press point. The focus ring uses `ring-offset`.
- **Removable:** Hovering or focusing the remove button switches the whole tag to the `danger` theme. The tag fades and shrinks to `0.8` scale on exit, over 200ms.
- **Editable:** The tag responds to hover like a pressable tag. In edit mode, Enter or blur commits the text. Escape restores the old text. The remove button is hidden during editing.
- **Themes:** The stories also show the `brand`, `discovery`, `danger`, `warning`, `info`, and `success` themes.

## Accessibility

- The remove control is a native `button` with the `aria-label` from `removeButtonLabel`. Enter and Space activate it.
- A pressable tag and `Tag.Button` set `tabIndex` to `0` and `role="button"`.
- The edit text box has an `aria-label` from `editInputLabel`.
- The remove button stops the press event, so a pressable tag does not also fire.

## Related

- [Design tokens](../tokens/index.md)
- [Tag picker](./tag-picker.md)

## Source

- [`components/tag/src/Tag.tsx`](../../../components/tag/src/Tag.tsx)
- [`components/tag/src/Tag.stories.tsx`](../../../components/tag/src/Tag.stories.tsx)

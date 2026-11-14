---
title: Tabs
description: A tabbed interface with header triggers and content panels. It has underline, floating, and tabbed variants in two orientations.
documentType: reference
tags: [component, tabs, navigation, container]
component:
  name: tabs
  package: "@cyclone-ui/tabs"
  stories:
    - title: Containers/Tabs
      file: components/tabs/src/Tabs.stories.tsx
---

# Tabs

`Tabs` switches between panels of content. It builds on the Tamagui `Tabs`. It adds three visual variants, horizontal or vertical layout, and an animated active indicator.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add tabs
pnpm install
```

- **Files:** `fluid.tsx` and `Tabs.tsx`. The CLI writes them to `<path>/tabs/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Container](./container.md), [Heading Text](./heading-text.md), and [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/animate-presence`, `@tamagui/constants`, `@tamagui/core`, `@tamagui/get-font-sized`, `@tamagui/stacks`, `@tamagui/tabs`, and `react-native-svg`.

## Import

```tsx
import { Tabs } from "@cyclone-ui/tabs";
```

## Usage

Each `Tabs.Header.Item` and its `Tabs.Content.Item` share the same `value`.

```tsx
import { Tabs } from "@cyclone-ui/tabs";

export function Example() {
  return (
    <Tabs tabStyle="floating" onValueChange={value => console.log(value)}>
      <Tabs.Header>
        <Tabs.Header.Item value="tab1">Overview</Tabs.Header.Item>
        <Tabs.Header.Item value="tab2">Details</Tabs.Header.Item>
      </Tabs.Header>
      <Tabs.Content>
        <Tabs.Content.Item value="tab1">First panel</Tabs.Content.Item>
        <Tabs.Content.Item value="tab2">Second panel</Tabs.Content.Item>
      </Tabs.Content>
    </Tabs>
  );
}
```

The first header item becomes the current tab when no tab is set.

## Anatomy

```tsx
<Tabs>
  <Tabs.Header>
    <Tabs.Header.Item value="tab1">Label</Tabs.Header.Item>
  </Tabs.Header>
  <Tabs.Content>
    <Tabs.Content.Item value="tab1">{panel}</Tabs.Content.Item>
  </Tabs.Content>
</Tabs>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Tabs` | Tamagui `Tabs` with `activationMode="manual"`. | The root. It holds the shared state and passes variant settings to its parts. |
| `Tabs.Header` | A Tamagui `YStack` that holds the indicators and a Tamagui `Tabs.List` (`role="tablist"`, `aria-label="Tabs"`). The `fluid` style draws its pill on a WebGL `<canvas aria-hidden="true">`. | The list that holds the triggers. It draws the active and hover indicators. |
| `Tabs.Header.Item` | A Tamagui `Tabs.Tab` (`role="tab"`) with a `HeadingSmallText` label. The `fluid` style adds a second, `aria-hidden` copy of the label that shows on the pill. | One trigger. It needs a `value`. |
| `Tabs.Content` | A Tamagui `View`. | The wrapper for the panels. |
| `Tabs.Content.Item` | A Tamagui `Tabs.Content` (`role="tabpanel"`) in an animated view. | One panel. It needs a `value`. |

`TabsHeaderList`, `TabsHeaderItem`, `TabsContentList`, and `TabsContentItem` are also exported by name. Use them in React Server Components, which cannot read `Tabs.Header.Item` from a client module.

## Examples

The examples are the stories in [`Tabs.stories.tsx`](../../../components/tabs/src/Tabs.stories.tsx). Each story renders three tabs and three text panels.

| Stories | What they show |
| --- | --- |
| `Base`, `Brand` | The default `floating` style, and the `brand` theme. |
| `Floating`, `FloatingBorderless` | `tabStyle="floating"`, with and without borders. The play function checks that the header radius is larger than the pill radius. |
| `Underline`, `UnderlineBorderless` | `tabStyle="underline"`, with and without borders. |
| `Tabbed`, `TabbedBorderless`, `TabbedVertical` | `tabStyle="tabbed"`, without borders, and in a vertical layout. |
| `Fluid`, `FluidBrand`, `FluidVertical` | `tabStyle="fluid"`, in the `brand` theme, and in a vertical layout. The play function checks for the canvas and the three label copies. |
| `Horizontal`, `Vertical` | The two `orientation` values. |
| `Discovery`, `Error`, `Warning`, `Info`, `Success` | The `discovery`, `danger`, `warning`, `info`, and `success` themes. |
| `Primary`, `Secondary`, `Tertiary`, `Outlined`, `FloatingSurface` | The `floating` pill with the `primary`, `secondary`, `tertiary`, `outlined`, and `floating` variants. |
| `FluidPrimary`, `FluidSecondary`, `FluidTertiary`, `FluidFloating` | The `fluid` pill with the `primary`, `secondary`, `tertiary`, and `floating` variants. |
| `Flat`, `Accented`, `Glass`, `Noise` | `shadowStyle="flat"`, `accented`, and a `primary` pill with `glass` or `noise`. |

## Props

`TabsProps` is the Tamagui tabs frame props, with the context props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `tabStyle` | `"underline" \| "floating" \| "tabbed" \| "fluid"` | `"floating"` | The layout style. Named `variant` before. |
| `variant` | [Container](./container.md) variant | — | The selected tab's indicator in the `floating` and `fluid` styles. See [Indicator variants](#indicator-variants). |
| `shadowStyle`, `glass`, `noise`, `accented` | Container props | — | The rest of the `floating` pill's surface. |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | The direction of the tab list. |
| `bordered` | `boolean` | `true` | Shows the borders that the style owns, and the `floating` pill's border. |
| `size` | `SizeTokens` | `true` | Sets the item padding and label size. Only size token names restyle the root. |
| `onValueChange` | `(value: string) => void` | — | Called with the selected tab value. |
| `theme` | Tamagui theme name | Inherited | The stories use `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. |

`Tabs.Header.Item` and `Tabs.Content.Item` take a required `value` (`string`) and the matching Tamagui tab props. `Tabs.Header.Item` also accepts `onInteraction`.

## Styles and states

| `tabStyle` | Header style | Indicator |
| --- | --- | --- |
| `underline` | A `sunken` bottom border (`lg` width) with no radius. | An active bar and a hover bar. |
| `floating` | A `sunken` background, `hairline` border, and the `tabs` radius. | A pill under the selected tab, drawn by a [Container](./container.md). |
| `tabbed` | No background and no padding. Each item has its own border and the `tab` radius. | None. Items and panel use `surface` when selected. The panel has a `surface` background. |
| `fluid` | A `sunken` background, `hairline` border, and a fully rounded radius. | A WebGL pill that flows to the selected tab. Web only: native uses `floating`. |

- **Selected item:** The label uses `primary`, the `md` font size, and `semibold`. Other labels use `primary-inactive`, the `sm` font size, and `normal`. Below the `sm` breakpoint, each font size is one step smaller.
- **Hover:** A label uses `primary-active` when the pointer is over its item. The `tabbed` items use `canvas-hovered` on hover.
- **Vertical:** The header list has a minimum width of `20xl`. The panel takes the remaining space.
- **Borderless:** Set `bordered={false}` to remove the style's borders and the pill's border.
- **Panels:** Only the active panel is in the layout. The others are positioned absolutely.

The stories cover `Floating`, `Underline`, `Tabbed`, their borderless forms, `TabbedVertical`, `Horizontal`, and `Vertical`, plus the indicator variants (for example `Primary`, `FloatingSurface`, `Glass`, `FluidSecondary`).

## Indicator variants

The surface props style only the selected tab's indicator. The tab list, the items, and the panel keep their `tabStyle` styling.

- **`floating`:** The pill is a [Container](./container.md) of the `variant` (any Container variant, the same set as [Button](./button.md)), `tertiary` with the `raised` shadow by default. It takes `shadowStyle`, `glass`, `noise`, and `accented` too. The selected label uses `on-primary` / `on-secondary` on `primary` / `secondary` (`primary` on the uncolored base theme's light `secondary`).
- **`fluid`:** The pill takes the `variant`'s background (`primary` by default and for `outlined`), and the label it covers takes that variant's text color. The other surface props don't apply to the WebGL pill.
- **`underline` and `tabbed`:** The surface props don't apply.

## Accessibility

- The root sets `activationMode` to `manual`. The user selects a tab by press, not by arrow-key focus.
- The tab list sets `aria-label="Tabs"` and does not loop with the keyboard (`loop={false}`).
- The roles and keyboard handling come from the Tamagui `Tabs`. The source adds no other ARIA attributes.

## Related

- [Design tokens](../tokens/index.md)

## Source

- [`components/tabs/src/Tabs.tsx`](../../../components/tabs/src/Tabs.tsx)
- [`components/tabs/src/Tabs.stories.tsx`](../../../components/tabs/src/Tabs.stories.tsx)
- [`components/tabs/src/Tabs.bordered.spec.ts`](../../../components/tabs/src/Tabs.bordered.spec.ts)

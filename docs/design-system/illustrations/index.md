---
title: Illustrations
description: Gallery of the Cyclone UI isometric line illustrations, which answer the pointer and take their colors from the theme, with their props, theming, and accessibility.
documentType: reference
tags: [illustrations, svg, animation, theme]
component:
  name: illustrations
  package: "@cyclone-ui/illustrations"
  stories:
    - title: Display/Illustrations
      file: components/illustrations/src/Illustrations.stories.tsx
---

# Illustrations

The `@cyclone-ui/illustrations` package has isometric line illustrations that answer the pointer. Each one is a Tamagui component that draws with `react-native-svg`, so the same illustration runs on web, on React Native, and on the server. Its five colors come from the Cyclone UI theme.

Use an illustration for a hero, an empty state, or a feature section. Use an [icon](../icons/index.md) to label a control or a short piece of text.

The illustrations are built on the [Hairline](https://github.com/lucasmarkes/hairline) engine by Lucas Marques (MIT License).

## Installation

Copy the package into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add illustrations
pnpm install
```

- **Files:** one file for each illustration, `create-illustration.tsx`, and the engine files. The CLI writes them to `<path>/illustrations/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core` and `react-native-svg`.

## Import

```tsx
import { KeypadIllustration, TerrainIllustration } from "@cyclone-ui/illustrations";
```

The package root also exports `createIllustration`, the engine namespace `HL`, and the types `IllustrationProps`, `IllustrationComponent`, `IllustrationDefinition`, and `PaletteKey`.

## Usage

```tsx
import { TerrainIllustration } from "@cyclone-ui/illustrations";

export function EmptyState() {
  return <TerrainIllustration intensity={0.5} label="No results yet" />;
}
```

Wrap an illustration in a theme to change its highlight color:

```tsx
import { Theme } from "@tamagui/core";

<Theme name="success">
  <TerrainIllustration />
</Theme>
```

## Anatomy

```tsx
<TerrainIllustration />
```

| Part                     | Renders                                                                 | Purpose                                                                                                  |
| ------------------------ | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `<Name>Illustration`     | A Tamagui `View` that holds a `react-native-svg` `<Svg role="img">`     | Draws the engine's node tree with SVG paths, lines, polygons, and gradients, and follows the pointer.    |
| `createIllustration`     | -                                                                       | Makes a themed component from an illustration definition. Each illustration file calls it.               |

Strokes do not scale with the drawing (`vectorEffect="non-scaling-stroke"`). On the server, an illustration renders its rest pose.

## Examples

The examples are the stories in [`Illustrations.stories.tsx`](../../../components/illustrations/src/Illustrations.stories.tsx). The `illustration` control selects the illustration, and the `intensity` control is a slider from 0 to 1. Each story shows the read-out from `onRead` under the drawing.

| Stories                        | What they show                                                         |
| ------------------------------ | ---------------------------------------------------------------------- |
| `Terrain`, `Riffle`, `Keypad`  | Three illustrations at `intensity` 0.5.                                |
| `Playing`                      | `Riffle` with `play`: an unseen pointer walks the tour until a real one arrives. |
| `Still`                        | `Terrain` with `animated={false}`: the rest pose, still.               |
| `SuccessTheme`                 | `Terrain` inside the `success` theme, so the highlight is green.       |
| `Gallery`                      | Every illustration, with its name and read-out.                        |

## Props

Every illustration takes these props and the Tamagui `View` props, except `children`.

| Prop          | Type                                   | Default                    | Description                                                                                                  |
| ------------- | -------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `intensity`   | `number`                               | `0.5`                      | How strongly the illustration answers, from 0 to 1. It maps onto the illustration's own range.               |
| `animated`    | `boolean`                              | `true`                     | Answers the pointer and moves. `false` draws the rest pose, still.                                           |
| `play`        | `boolean`                              | -                          | Walks the illustration's tour with an unseen pointer until a real pointer arrives.                           |
| `label`       | `string`                               | What the illustration means | The accessible label.                                                                                        |
| `onRead`      | `(text: string) => void`               | -                          | Receives the read-out: what is under the pointer, or `"rest"`.                                               |
| `strokeWidth` | `number`                               | `0.9`                      | The stroke width in pixels.                                                                                  |
| `palette`     | `Partial<Record<PaletteKey, string>>`  | -                          | Overrides one or more of the five colors with a theme token name (such as `"surface"`) or a color. Set `plate` to the surface the illustration sits on, so its solids are filled with it. |

## Colors

An illustration has five colors (`PaletteKey`). Each one reads a theme token:

| Key     | Role                               | Light theme | Dark theme  |
| ------- | ---------------------------------- | ----------- | ----------- |
| `plate` | The fill of solids (the ground)    | `canvas`    | `canvas`    |
| `hi`    | The one bright highlight           | `primary`   | `primary`   |
| `edge`  | The silhouette                     | `subtle`    | `neutral10` |
| `mid`   | The default stroke                 | `neutral7`  | `hairline`  |
| `lo`    | The dim crease                     | `hairline`  | `neutral12` |

On web, the CSS variable `--illustration-<key>` (for example `--illustration-hi`) overrides a color. When the page defines no Cyclone UI tokens, each color falls back to its value in the default `light_base` and `dark_base` themes. See [`engine/palette.ts`](../../../components/illustrations/src/engine/palette.ts).

## Motion

- All illustrations share one frame loop. It sleeps when nothing moves and, on web, when the illustration is off screen.
- When the user prefers reduced motion, a movement lands at once.
- On web, stroke and fill colors fade when they change. On React Native they change at once.

## Accessibility

The SVG has `role="img"` and an `aria-label`. The label is `label`, or the illustration's own description (`means`) when you do not set `label`. Set `label` to describe what the illustration shows in your context. The illustration answers pointer events only. It does not take focus and has no keyboard control, so do not put information only in its motion.

## Gallery

The package has 34 illustrations. The descriptions are the `means` text of each illustration, which is also its default accessible label.

| Component                | What it shows                                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `BasketIllustration`     | An empty wire basket under a bail handle. The pointer tilts it so the bare floor shows, and the handle swings after it. |
| `BranchesIllustration`   | A commit graph on a board. The commit under the pointer rises, and its history rises after it.                         |
| `CabinetIllustration`    | A rack of twelve blades. The pointer's height pulls the nearest ones out on their rails.                               |
| `DishIllustration`       | A parabolic dish on a two-axis gimbal. The pointer aims it, and it follows on a spring.                                |
| `DrawerIllustration`     | A filing cabinet of three drawers. The pointer's height picks one, and it slides out.                                  |
| `ElevatorIllustration`   | Four floors beside an open shaft. The pointer's height picks a floor, and the car travels there.                       |
| `ExplodedIllustration`   | An app window taken apart into four layers. Moving across opens the gap. Moving down picks a layer.                    |
| `FormatIllustration`     | A file of ten crooked lines. The pointer runs the formatter down it, and each line above snaps square.                 |
| `HubIllustration`        | A hub and eight tiles on a grid. The tile under the pointer rises and its link turns solid.                            |
| `KeyboardIllustration`   | A sixty-key board. The key under the pointer sinks, and its neighbors follow it down.                                  |
| `KeypadIllustration`     | A door keypad and intercom under its hood. The key under the pointer presses in, and its neighbors dip in turn.        |
| `LaptopIllustration`     | A thin laptop. The pointer's height sets how far the lid stands open.                                                  |
| `LockersIllustration`    | A bank of twelve lockers. The locker under the pointer opens, and the one open before it swings shut.                  |
| `LoupeIllustration`      | A stand loupe over a ruled sheet. The pointer drags it across, and the rules pass enlarged under the glass.            |
| `PadlockIllustration`    | A padlock. As the pointer nears, the shackle springs up and swings open.                                               |
| `PatchIllustration`      | A patch panel of twenty-four ports. The cable under the pointer lifts, and its neighbors lean away.                    |
| `PhoneIllustration`      | A phone in layers: glass, board, battery, shell. Moving across opens the gap. Moving down picks a layer.               |
| `PhosphorIllustration`   | A seven by seven dot matrix that plays a loop and fades like phosphor where you paint it.                              |
| `PlotIllustration`       | A bar chart with no data. The pointer brushes the seven flat tabs, and each lifts a little and drops back.             |
| `PlugIllustration`       | A wall socket and a plug on the floor. The pointer draws the plug up toward the socket, and it stops short.            |
| `QueryIllustration`      | A question mark built as a solid. The hook turns toward the pointer, and the ball rolls after it.                      |
| `RailIllustration`       | A garment rail with seven bare hangers. The pointer brushes them, and each rocks away and settles.                     |
| `RebuildIllustration`    | A tree of package tiles. The one touched rises, and each package that depends on it rises after it.                    |
| `RelayIllustration`      | A hub and four branches of tiles. The path to the leaf under the pointer lights hop by hop.                            |
| `RiffleIllustration`     | Eight cards in a tray. The one under the pointer stands up, and its neighbors lean away in turn.                       |
| `RouterIllustration`     | A wifi router whose antennas lean toward the pointer.                                                                  |
| `SettleIllustration`     | Twelve crooked tiles round a hub. As the pointer nears, they slide into a tree and the links draw in.                  |
| `SieveIllustration`      | Three test sieves over a pan. The pointer's height picks one, and it rises clear of the stack.                         |
| `SlowIllustration`       | Crates riding a belt through a gate. Hovering slows the clock without stopping it.                                     |
| `StackIllustration`      | A call stack of five frames. The pointer's height picks one, and the frames above lift away.                           |
| `TerminalIllustration`   | A terminal window. The pointer's height scrolls back through its history, and the line under it lifts off the screen.  |
| `TerrainIllustration`    | A field of pillars that rises under the pointer and falls off with distance.                                          |
| `TurntableIllustration`  | Blocks on a turntable. Flick across it to spin it. It settles on the nearest quarter turn.                             |
| `VaultIllustration`      | A vault door. Circling the pointer turns its dial. On forty, its three bolts draw back.                                |

## Add an illustration

Each illustration file calls `createIllustration` with a definition that draws into the engine's node tree. The source drawings are in [`components/illustrations/sources`](../../../components/illustrations/sources). In this repository, the `cyclone-ui-illustration` agent skill (`.agents/skills/cyclone-ui-illustration`) draws a new illustration, checks it in a browser, and adds the component.

## Related

- [Icons](../icons/index.md)
- [Semantic colors](../tokens/semantic-colors.md)
- [Design system overview](../index.md)

## Source

- [`components/illustrations/src/create-illustration.tsx`](../../../components/illustrations/src/create-illustration.tsx)
- [`components/illustrations/src/engine`](../../../components/illustrations/src/engine)
- [`components/illustrations/src/Illustrations.stories.tsx`](../../../components/illustrations/src/Illustrations.stories.tsx)

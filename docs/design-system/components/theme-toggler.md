---
title: Theme Toggler
description: Reference for the Theme Toggler component, a button that switches between light and dark mode, with a shape reveal on the web.
documentType: reference
tags: [component, triggers, theme-toggler, button, theme, color-mode]
component:
  name: theme-toggler
  package: "@cyclone-ui/theme-toggler"
  stories:
    - title: Triggers/ThemeToggler
      file: components/theme-toggler/src/ThemeToggler.stories.tsx
---

# Theme Toggler

`ThemeToggler` is a circular ghost [Button](./button.md) that switches the color mode between light and dark. It shows the icon of the mode that it switches to: a moon in light mode and a sun in dark mode. On the web, a growing shape reveals the new mode, from the button or from the center of the viewport.

Use it for one control that flips the whole app between light and dark. It has only these two modes. It does not offer a "system" choice.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add theme-toggler
pnpm install
```

- **File:** `ThemeToggler.tsx`. The CLI writes it to `<path>/theme-toggler/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { ThemeToggler } from "@cyclone-ui/theme-toggler";
```

## Usage

Without `mode`, the toggler reads and changes the color mode in [`@cyclone-ui/state/theme`](../../packages/state.md):

```tsx
<ThemeToggler />
<ThemeToggler shape="star" duration={600} />
<ThemeToggler shape="hexagon" fromCenter />
```

With `mode`, the toggler is controlled. It reports the new mode, and you apply it. In Next.js, use `useThemeSetting` from [`@cyclone-ui/nextjs/provider`](../../packages/nextjs.md):

```tsx
const theme = useThemeSetting();

<ThemeToggler
  mode={theme.resolvedTheme === "dark" ? "dark" : "light"}
  onModeChange={theme.set}
/>;
```

## Anatomy

```tsx
<ThemeToggler />
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `ThemeToggler` | A [`Button`](./button.md) with `variant="ghost"` and `circular`: a Tamagui `View` as `<button role="button">` with `aria-label="Toggle theme"` | The pressable control. A press switches the mode. |
| Icon | `Button.Icon` with the `MoonSimple` icon (filled) in light mode, or the `SunnyOutline` icon in dark mode. Both are SVG icons with `animated={false}`. | Shows the mode that a press switches to. |
| Reveal (internal, web only) | A `<style id="cyclone-ui-theme-toggler">` element in `document.head`, and a `clip-path` animation on `::view-transition-new(root)` | Replaces the default View Transition cross-fade with the shape reveal. The style element is removed when the transition ends. |

## Examples

The examples are the stories in [`ThemeToggler.stories.tsx`](../../../components/theme-toggler/src/ThemeToggler.stories.tsx). A decorator applies the Cyclone theme state to a full-height page, as the root `ThemeProvider` of an app does.

| Stories | What they show |
| --- | --- |
| `Base` | The `circle` reveal from the button. The play function presses the button two times. Each time, it checks the `t_light` or `t_dark` class on the root element and waits until the reveal ends. |
| `Star` | `shape="star"` with `duration={600}`. |
| `FromCenter` | `shape="hexagon"` with `fromCenter`. |
| `Controlled` | `mode` and `onModeChange` from React state. The story applies the mode to its own page. |

## Props

`ThemeToggler` accepts the props of [Button](./button.md), except `children`. It sets `variant="ghost"`, `circular`, and `aria-label="Toggle theme"`, and your props can override them.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `mode` | `ColorThemeMode` (`"light" \| "dark"`) | — | The color mode. Setting it makes the toggler controlled. Without it, the toggler follows and changes the `@cyclone-ui/state/theme` mode. A state mode other than `light` counts as `dark`. |
| `onModeChange` | `(mode: ColorThemeMode) => void` | — | Called with the new mode when you press the toggler. A controlled toggler only reports the mode. Apply it yourself. |
| `shape` | `ThemeTogglerShape` | `"circle"` | The shape that reveals the new mode: `"circle"`, `"square"`, `"triangle"`, `"diamond"`, `"hexagon"`, `"rectangle"`, or `"star"`. |
| `duration` | `number` | `400` | The reveal duration in milliseconds. |
| `fromCenter` | `boolean` | `false` | Reveals the new mode from the center of the viewport instead of from the button. |
| `onPress` | `(event) => void` | — | Called when you press the toggler, before the mode changes. |

The package also exports the `ThemeTogglerProps` and `ThemeTogglerShape` types.

## Behavior

- A press switches light to dark, or dark to light. Without `mode`, the toggler calls `changeMode` from `useThemeActions`. It always calls `onModeChange`.
- On the web, the toggler starts a View Transition. It uses `flushSync`, so the new mode is in the DOM when the transition takes its snapshot. Then it animates the `clip-path` of the new snapshot from the start point until the shape covers the viewport. The easing is `ease-in-out`, or `linear` for the star. The star starts small, not as a point.
- While a reveal runs, more presses do not change the mode. `onPress` still runs.
- Without the View Transitions API, when the user prefers reduced motion, or on native, the mode changes at once.

## Accessibility

- The toggler is a native `button`, so it takes keyboard focus. The unit test checks for the `<button` element and `aria-label="Toggle theme"`.
- The accessible name stays "Toggle theme" in both modes. The button has no `aria-pressed`, so the current mode is not announced as a state.
- The reveal does not run when the user prefers reduced motion.

## Related

- [Button](./button.md)
- [State package](../../packages/state.md)
- [Next.js package](../../packages/nextjs.md)

## Source

- [`components/theme-toggler/src/ThemeToggler.tsx`](../../../components/theme-toggler/src/ThemeToggler.tsx)
- [`components/theme-toggler/src/ThemeToggler.test.tsx`](../../../components/theme-toggler/src/ThemeToggler.test.tsx)
- [`components/theme-toggler/src/ThemeToggler.stories.tsx`](../../../components/theme-toggler/src/ThemeToggler.stories.tsx) (title: `Triggers/ThemeToggler`)

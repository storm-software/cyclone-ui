---
title: Theme Select
description: Reference for the Theme Select component, a Select preloaded with each color theme, each option in its theme's primary color.
documentType: reference
tags: [component, form, theme-select, select, theme]
component:
  name: theme-select
  package: "@cyclone-ui/theme-select"
  stories:
    - title: Form/ThemeSelect
      file: components/theme-select/src/ThemeSelect.stories.tsx
---

# Theme Select

`ThemeSelect` is a [Select](./select.md) with an option for each color theme in the Tamagui config: `base`, `brand`, `discovery`, `info`, `warning`, `danger` and `success`, plus any theme your own config adds. Each option's text is its theme's `primary` color token. The selected value is the theme name, such as `"brand"`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add theme-select
pnpm install
```

- **File:** `ThemeSelect.tsx`. The CLI writes it to `<path>/theme-select/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Select](./select.md) and the components it copies.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { ThemeSelect } from "@cyclone-ui/theme-select";
```

## Usage

Wrap it in a [Field](./field.md) to connect it to a form, as with `Select`:

```tsx
<Field name="theme">
  <Field.Label>Theme</Field.Label>
  <ThemeSelect />
</Field>
```

## Examples

| Stories | What they show |
| --- | --- |
| `Base` | A field with `brand` selected. The play function opens the menu and checks the option labels. |

## Props

`ThemeSelect` accepts the props of [Select](./select.md), except `children`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `placeholder` | `string` | `"Select a theme"` | Shown while no theme is selected. |

The package also exports the `ThemeSelectProps` type.

## Behavior

- The options come from the keys of `getConfig().themes` that match `light_<name>` or `dark_<name>`. Each name appears once, with its first letter capitalized.
- Each option is a themed `ContextMenu.Item` (`theme={name}`), so its text stays at that theme's `primary` color in light and dark mode.

## Related

- [Select](./select.md)
- [Field](./field.md)
- [Theme Toggler](./theme-toggler.md)

## Source

- [`components/theme-select/src/ThemeSelect.tsx`](../../../components/theme-select/src/ThemeSelect.tsx)
- [`components/theme-select/src/ThemeSelect.stories.tsx`](../../../components/theme-select/src/ThemeSelect.stories.tsx) (title: `Form/ThemeSelect`)

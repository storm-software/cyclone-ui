# Cyclone UI - Storybook

The [Storybook](https://storybook.js.org) app for the Cyclone UI design system. It collects the stories of every component in [`components`](../../components) and adds pages for the design tokens, colors, typography, and fonts.

## Quick Features

- Loads every `*.stories.*` file under `components/**` and under `apps/storybook/src` (see [`.storybook/main.ts`](./.storybook/main.ts)).
- Wraps each story in the Cyclone UI theme and providers (see [`.storybook/preview.tsx`](./.storybook/preview.tsx) and [`preview-decorators.tsx`](./.storybook/preview-decorators.tsx)).
- Has documentation pages for the tokens, colors, typography, and fonts (`src/Tokens.mdx`, `src/Colors.mdx`, `src/Typography.mdx`, `src/Fonts.mdx`).
- Runs the stories' play functions as tests with Vitest (the `test` target).

## Installation

This app is private to the repository. Install the workspace dependencies from the repository root:

```bash
pnpm install
```

## Usage

Start the Storybook dev server:

```bash
pnpm nx run storybook:serve
```

It runs `storybook dev` on port 4400. Open <http://localhost:4400>.

Build the static Storybook:

```bash
pnpm build-storybook
```

The `build` target writes the static site to `dist/apps/storybook`.

The component pages in [`docs/design-system/components`](../../docs/design-system/components/index.md) list the stories of each component in their **Examples** section. The `component.stories` front matter of each page names the stories file and the Storybook title.

## Development

Run the story tests with Vitest:

```bash
pnpm nx run storybook:test
```

To add a story for a component, put a `*.stories.tsx` file next to the component in `components/<name>/src`. Storybook finds it with the glob in `.storybook/main.ts`.

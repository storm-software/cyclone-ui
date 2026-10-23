---
title: "Walk-through: Adopt Cyclone UI in your app"
description: Start from an app with no Cyclone UI code. Copy the Button component from the registry, set up the Tamagui theme, and render the component.
audience: Application developer who uses React and Tamagui
perspective: hands-on
tags: [cli, registry, theme, tamagui, button]
---

# Walk-through: Adopt Cyclone UI in your app

**Audience:** Application developer who uses React and Tamagui · **Perspective:** hands-on · **Time:** ~15 min

## What you will learn

Cyclone UI follows the copy-and-own model of shadcn/ui. You do not import components from one package. The Cyclone CLI copies component source into your repository. You then connect the generated Tamagui theme and render the component. At the end, a `Button` renders with the Cyclone dark theme.

## Before you start

- A React app that already uses [Tamagui](https://tamagui.dev) (`@tamagui/core`) and has a `package.json`.
- Node.js and a package manager. The examples use pnpm.
- Network access to the public registry at `https://public.storm-cdn.com/cyclone-ui/registry`.

The repository marks its packages as in initial development. Published versions of `@cyclone-ui/*` packages can change. See the [root README](../../../README.md).

## The path at a glance

1. Install the CLI.
2. Initialize the project (`components.json`).
3. Preview and add the `button` component.
4. Install the new dependencies.
5. Install the theme config and state provider.
6. Wrap the app in the theme provider.
7. Render the button.

## Step 1 — Install the CLI

The `@cyclone-ui/cli` package exposes one executable, `cyclone-ui` ([packages/cli/package.json](../../../packages/cli/package.json)).

```bash
pnpm add -D @cyclone-ui/cli
```

Use `pnpm exec cyclone-ui` to run it from the project.

## Step 2 — Initialize the project

`init` creates `components.json` and the folder for the copied components ([init command](../../../packages/cli/src/commands/init/command.ts)). It stops if `components.json` already exists. Add `--force` to replace it.

```bash
pnpm exec cyclone-ui init --path src/components/ui
```

The file records three things ([config utilities](../../../packages/cli/src/utilities/config.ts)):

```json
{
  "registry": "https://public.storm-cdn.com/cyclone-ui/registry",
  "path": "src/components/ui",
  "components": {}
}
```

- `registry` is the URL the CLI reads from.
- `path` is where components are written. Without `--path`, the default is `components`.
- `components` lists what you installed. The CLI fills it in later.

For a Next.js App Router project, add `--rsc` to keep the registry `"use client"` directives. See the [CLI README](../../../packages/cli/README.md) for the full `rsc` rules.

## Step 3 — Preview and add the component

Find the component name, then look at what would change before you write files.

```bash
pnpm exec cyclone-ui search --query button
pnpm exec cyclone-ui add button --dry-run
```

`--dry-run` prints one line for each file with a status: `create`, `overwrite`, or `unchanged`. It writes nothing. When the plan looks right, run the command without the flag:

```bash
pnpm exec cyclone-ui add button
```

The output below is illustrative, and file names can differ. The registry was not reachable from the environment that wrote this guide:

```text
create    src/components/ui/button/Button.tsx
create    src/components/ui/body-text/BodyText.tsx
create    src/components/ui/ripple-animation/RippleAnimation.tsx
```

The CLI also copies the components that `button` depends on. In [registry.json](../../../registry.json), the `button` item lists `body-text`, `ripple-animation`, and `themeable-icon` as registry dependencies. Other packages, such as `@cyclone-ui/helpers`, are added to `package.json` instead of copied. Imports between copied components become relative paths, so the copied folders work without the `@cyclone-ui/*` component packages. See the [Button page](../components/button.md) for its props.

## Step 4 — Install the new dependencies

`add` merges the component dependencies into your `package.json`. It keeps versions you already declared. It does not run your package manager.

```bash
pnpm install
```

## Step 5 — Install the theme config and state provider

The copied components read design tokens through Tamagui themes. The generated Tamagui config lives in the `@cyclone-ui/tokens` package. The theme provider lives in `@cyclone-ui/state`.

```bash
pnpm add @cyclone-ui/tokens @cyclone-ui/state
```

`@cyclone-ui/tokens/tamagui` exports `config` ([packages/tokens/package.json](../../../packages/tokens/package.json)). It contains the tokens, themes, and fonts. To learn how this file is produced, read [How Cyclone UI themes and tokens are generated](./how-themes-and-tokens-are-generated.md).

## Step 6 — Wrap the app in the theme provider

The [Storybook decorator](../../../apps/storybook/.storybook/preview-decorators.tsx) is the reference setup. This is a reduced version of it:

```tsx
import { ThemeProvider } from "@cyclone-ui/state/theme";
import { config } from "@cyclone-ui/tokens/tamagui";
import { Theme } from "@tamagui/core";
import type { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider config={config} defaultMode="dark">
      <Theme name="dark_base">{children}</Theme>
    </ThemeProvider>
  );
}
```

Notes:

- `ThemeProvider` wraps Tamagui's provider. It accepts `defaultMode` (`"light"` or `"dark"`, default `"dark"`) and a `config`. If the user's system prefers a color scheme, that choice wins over `defaultMode` ([ThemeProvider source](../../../packages/state/src/theme/providers/ThemeProvider.tsx)).
- Child themes use the `<mode>_base` name, for example `dark_base` and `light_base`. Storybook passes the active mode in this form.
- The Storybook decorator also adds a safe-area provider, a portal provider, and a message provider. Components such as dialogs and messages can need them. This guide did not test which components need which provider.

## Step 7 — Render the button

`Button` uses sub-components for its content. This follows the [Button story](../../../components/button/src/Button.stories.tsx):

```tsx
import { Button } from "./components/ui/button/Button";
import { Providers } from "./Providers";

export function App() {
  return (
    <Providers>
      <Button>
        <Button.Text>Save changes</Button.Text>
      </Button>
    </Providers>
  );
}
```

The story also shows `theme="brand"`, `animate`, and `rounded`. Run your app. You should see a button that uses the Cyclone colors. Switch `defaultMode` to `"light"` to see the other theme.

## Recap

`init` records the registry and the target folder. `add` resolves the dependency tree, rewrites imports, writes the files, merges dependencies, and records the install in `components.json`. The theme comes from `@cyclone-ui/tokens/tamagui`. `ThemeProvider` and a `<mode>_base` theme give the copied component its tokens.

## Where to go next

- Keep copied components current: [Preview and update copied components](../../packages/guides/update-copied-components.md).
- Browse every component: [Components](../components/index.md).
- Look up colors, spacing, and type: [Tokens](../tokens/index.md) and [Fonts](../fonts/index.md).

## Not verified

- `add` was not run end to end. The public registry was not reachable from the authoring environment.
- The generated registry file at the repository root also describes a shadcn route (`npx shadcn@latest add button --registry ./registry.json`) in [INSTALL.md](../../../INSTALL.md). This guide did not test it.
- The built CLI in `packages/cli/dist` was older than the source and pointed to a different default registry URL. This guide follows the source.

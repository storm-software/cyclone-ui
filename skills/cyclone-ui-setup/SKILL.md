---
name: cyclone-ui-setup
description: Set up Cyclone UI in a React and Tamagui workspace and install copied source components from the Cyclone registry. Use when someone asks to adopt or initialize Cyclone UI, add or update its components, choose a registry or output folder, or connect copied components to Cyclone tokens and themes.
---

# Set up Cyclone UI in a workspace

Work in the target application, not the Cyclone UI source repository. Identify the app root, package manager, React/Tamagui setup, existing theme provider, and any `components.json` or copied component files. If the target is ambiguous, establish the workspace before writing. Preserve existing configuration and local component changes.

The [adoption guide](https://github.com/storm-software/cyclone-ui/blob/main/docs/design-system/guides/adopt-cyclone-ui.md) shows a complete Button example. Check the [CLI reference](https://github.com/storm-software/cyclone-ui/blob/main/docs/packages/cli.md) and the installed CLI's help when command behavior matters; published versions and the public registry can differ from the repository's main branch.

## Protect installed components

Do not change installed or added Cyclone UI component files unless the user specifically instructs you to do so. Read `components.json` to identify the configured component path and installed files; copied source is not permission to edit it. This includes fixes, refactors, formatting, renaming, deleting, and registry updates or overwrites (`add --overwrite`, `update-components`, or forced initialization).

A request to build a feature, style a page, fix an application, or wire up a framework does not authorize component changes. Prefer supported props, composition, application-owned wrappers, and theme configuration outside the installed components. If a component change is necessary, explain why and ask for specific instructions before changing it. An explicit request to add or change a component authorizes only that scope; preserve unrelated installed files and local edits, including when resolving internal dependencies.

## Initialize and add components

Use the app's package manager. These commands use pnpm:

```bash
pnpm add -D @cyclone-ui/cli
pnpm exec cyclone-ui init --path src/components/ui
pnpm exec cyclone-ui search --query button
pnpm exec cyclone-ui view button
pnpm exec cyclone-ui add button --dry-run
pnpm exec cyclone-ui add button
pnpm install
```

- Choose `--path` to fit the app; the CLI defaults to `components`. `init` creates the folder and `components.json`, which records the registry, output path, and installed components. If `components.json` exists, verify it has Cyclone's `registry`, `path`, and `components` fields before using it; another CLI may use the same filename with an incompatible format. Continue with a valid existing configuration. `init --force` replaces it, so use that only when replacement is intended.
- The default registry is `https://public.storm-cdn.com/cyclone-ui/registry`. Use `init --registry <url>` or the existing `components.json` registry value when the user specifies another source. Use `--registry` on an individual command for a one-off override.
- Discover actual component names with `search` or `view`. Preview the resolved file list with `add --dry-run` before writing. `add` copies internal component dependencies, rewrites their imports, updates `package.json` for external dependencies, and records installed files in `components.json`. It does not run the package manager afterward.
- A changed local file blocks `add` unless `--overwrite` is supplied. Compare it with `cyclone-ui diff <name>` or `cyclone-ui add <name> --diff`; preserve local edits. Only merge or overwrite installed files when the user specifically instructs you to change them. `--dry-run`, `--diff`, and `--view` on `add` are read-only previews.
- For a Next.js App Router project, `init --rsc` records `rsc: true`. The CLI preserves registry directives when `rsc` is true or omitted; explicit `rsc: false` removes top-level `use client` directives from installed script files. The CLI does not infer or insert missing client boundaries. `add --rsc` is an installation-only override.
- When the user wants Tailwind class names (Tamagui Tailwind, `@tamagui/tailwind`), `init --style tailwind` records `style: "tailwind"`. Components with a `*.tailwind.tsx` variant then install it in place of the default file and take `className` instead of style props; components without one install their Tamagui source, which works alongside. `add` adds `@tamagui/tailwind` to `package.json` only for this style. For this style, `init` also sets `tailwind: true` in `cycloneUI()` / `withCycloneUI()` and imports `@cyclone-ui/tokens/tailwind.css` above `@import "tailwindcss"` in the app stylesheet (`--css <file>` when it's not in a common place). Then Tailwind classes such as `bg-primary` and `p-lg` work on Cyclone components and app markup. It prints any step it couldn't do; relay those to the user.

## Connect the theme

If the app does not already provide compatible Cyclone tokens and a Tamagui provider, install `@cyclone-ui/tokens` and `@cyclone-ui/state`:

```bash
pnpm add @cyclone-ui/tokens @cyclone-ui/state
```

Adapt this provider to the app's framework and existing provider tree:

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

In a Next.js or Vite app, don't hand-write this provider: follow the **cyclone-ui-nextjs** skill (`@cyclone-ui/nextjs`: `withCycloneUI` + `CycloneUIProvider`) or the **cyclone-ui-vite** skill (`@cyclone-ui/vite`: `cycloneUI()` + `ThemeProvider` with `disableInjectCSS={false}`). They cover the bundler config, theme switching, and framework-specific pitfalls.

Put the provider in a client boundary when the framework requires one. Use a matching `light_base` theme for light mode. Add component-specific providers only when the chosen components need them. The token package already supplies the generated Tamagui config; a custom `razorwind.config.ts` and `cyclone-ui build` are for a requested custom-token workflow, not baseline component installation.

## Verify the consumer workspace

Run `pnpm exec cyclone-ui info` (or the package-manager equivalent), inspect the recorded components and copied files, and run the app's relevant typecheck/build or rendering check. For a newly copied component, render a small usage example using its actual exports; do not assume every component has the same API as Button. Report which commands and app checks ran, and distinguish source inspection from a live registry install if network access is unavailable.

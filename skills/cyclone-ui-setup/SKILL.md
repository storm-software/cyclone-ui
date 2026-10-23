---
name: cyclone-ui-setup
description: Set up Cyclone UI in a React and Tamagui workspace and install copied source components from the Cyclone registry. Use when someone asks to adopt or initialize Cyclone UI, add or update its components, choose a registry or output folder, or connect copied components to Cyclone tokens and themes.
---

# Set up Cyclone UI in a workspace

Work in the target application, not the Cyclone UI source repository. Identify the app root, package manager, React/Tamagui setup, existing theme provider, and any `components.json` or copied component files. If the target is ambiguous, establish the workspace before writing. Preserve existing configuration and local component changes.

The [adoption guide](https://github.com/storm-software/cyclone-ui/blob/main/docs/design-system/guides/adopt-cyclone-ui.md) shows a complete Button example. Check the [CLI reference](https://github.com/storm-software/cyclone-ui/blob/main/docs/packages/cli.md) and the installed CLI's help when command behavior matters; published versions and the public registry can differ from the repository's main branch.

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
- A changed local file blocks `add` unless `--overwrite` is supplied. Compare it with `cyclone-ui diff <name>` or `cyclone-ui add <name> --diff`; preserve local edits or merge them deliberately before overwriting. `--dry-run`, `--diff`, and `--view` on `add` are read-only previews.
- For a Next.js App Router project, `init --rsc` records `rsc: true`. The CLI preserves registry directives when `rsc` is true or omitted; explicit `rsc: false` removes top-level `use client` directives from installed script files. The CLI does not infer or insert missing client boundaries. `add --rsc` is an installation-only override.

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

Put the provider in a client boundary when the framework requires one. Use a matching `light_base` theme for light mode. Add component-specific providers only when the chosen components need them. The token package already supplies the generated Tamagui config; a custom `razorwind.config.ts` and `cyclone-ui build` are for a requested custom-token workflow, not baseline component installation.

## Verify the consumer workspace

Run `pnpm exec cyclone-ui info` (or the package-manager equivalent), inspect the recorded components and copied files, and run the app's relevant typecheck/build or rendering check. For a newly copied component, render a small usage example using its actual exports; do not assume every component has the same API as Button. Report which commands and app checks ran, and distinguish source inspection from a live registry install if network access is unavailable.

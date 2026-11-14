---
title: "@cyclone-ui/cli"
description: Reference for the Cyclone UI command-line interface. Use it to copy components into your project, compare them with the registry, and build Tamagui configuration from design tokens.
documentType: reference
tags: [cli, registry, components, mcp]
---

# @cyclone-ui/cli

`@cyclone-ui/cli` installs the `cyclone-ui` command. It copies component source code from the Cyclone UI registry into your project. This is the same copy-and-own workflow that shadcn/ui uses. The CLI also builds a Tamagui configuration from design tokens and starts an MCP server.

Source: [`packages/cli`](https://github.com/storm-software/cyclone-ui/tree/main/packages/cli)

## Install

```bash
pnpm add @cyclone-ui/cli
```

The package declares a `cyclone-ui` binary (`./dist/bin.mjs`). Run it with `pnpm exec cyclone-ui <command>`.

The CLI is built with [Shell Shock](https://github.com/storm-software/shell-shock). The `package.json` export map lists one subpath for each command, for example `@cyclone-ui/cli/add`.

## Quick start

```bash
# Create components.json and the component folder
pnpm exec cyclone-ui init --path src/components/ui

# Find and copy a component
pnpm exec cyclone-ui search --query button
pnpm exec cyclone-ui add button
pnpm install
```

`add` copies the component and its internal dependencies. It adds the packages that the component needs to your `package.json`. Run your package manager afterward to install them.

## Registry

By default, the CLI reads from the public registry at `https://public.storm-cdn.com/cyclone-ui/registry`. The registry holds a `registry.json` catalog and one JSON file for each component. No server API is needed.

To use another registry:

- Pass `--registry <url>` to a command.
- Set `registry` in `components.json`.

A URL that ends in `/registry.json` also works. For a prerelease channel, use the registry `/tags/<tag>` URL. A URL that ends in `/api` uses the typed client of the [registry API](./registry-api.md) instead.

## Project configuration: `components.json`

`init` writes `components.json` in your project.

| Key | Type | Purpose |
| --- | --- | --- |
| `registry` | `string` | The registry URL |
| `path` | `string` | The component folder. The default is `components`. |
| `rsc` | `boolean` (optional) | `true` keeps registry directives. `false` removes module-level `"use client"` directives. If you omit it, the CLI does not change the content. |
| `style` | `"tamagui"` or `"tailwind"` (optional) | `tailwind` installs the `@tamagui/tailwind` variant (`<Name>.tailwind.tsx`) of components that have one, and adds `@tamagui/tailwind` to `package.json`. |
| `components` | object | The installed components, each with `version` and `files` |

The CLI only writes inside the configured folder. It rejects registry file paths that leave it.

## Commands

All commands accept `--cwd` (the working directory). The default is the current directory.

### Registry commands

| Command | Purpose | Options and arguments |
| --- | --- | --- |
| `init [components...]` | Creates `components.json` and the folder. It can install components. With `--style tailwind`, it also sets the project up for Tailwind CSS. Alias: `create`. | `--path`, `--registry`, `--rsc`, `--style`, `--css`, `--force`, `--silent` |
| `add [components...]` | Copies components into your project. | `--all`, `--overwrite`, `--path`, `--dry-run`, `--diff`, `--view`, `--silent`, `--registry`, `--rsc` |
| `search` | Lists components that match a query. Alias: `list`. | `--query`, `--limit` (default 100), `--offset`, `--json`, `--registry` |
| `view <components...>` | Prints component metadata and files as JSON. | `--registry` |
| `diff [components...]` | Compares installed components with the registry. Without names, it compares all installed components. | `--registry` |
| `update-components [components...]` | Updates installed components to the newest registry version. It overwrites local edits and removes files that the new version dropped. Without names, it updates all installed components. | `--dry-run`, `--diff`, `--silent`, `--registry` |
| `docs <components...>` | Prints a documentation link for each component. | `--json`, `--registry` |
| `info` | Shows the project configuration and installed components. | `--json` |
| `registry validate [registry]` | Checks a local shadcn-format registry manifest and its source files. The default is `registry.json`. | None |

How `add` behaves:

- It needs at least one component name or `--all`.
- It refuses to overwrite a changed local file unless you pass `--overwrite`.
- `--dry-run`, `--diff`, and `--view` do not write files.
- Imports between copied components become relative imports.
- Other packages, such as `@cyclone-ui/helpers` and `@cyclone-ui/state`, go to `package.json` with published version ranges. Existing declarations stay.
- `--rsc` overrides the project setting for one installation. It is not saved.

### Token commands

| Command | Purpose | Options |
| --- | --- | --- |
| `build-tokens` | Generates a Tamagui config file from design tokens. | `--config`, `--tokens`, `--output` |
| `build` | Runs `build-tokens`, then compiles the config and CSS. | `--config`, `--tokens`, `--output` |

- `--config` is the path to the Razorwind configuration file.
- `--tokens` is a token source path or glob. It overrides `tokensPath`.
- `--output` is the output path. The default is `tamagui.config.ts`.

`build` writes the compiled output to `.tamagui/` and the CSS to `tamagui.generated.css` in the working directory. The Tamagui compiler is included. You do not need to install the Tamagui CLI. `build-tokens` fails with `No design tokens found` when it finds no tokens.

```bash
pnpm exec cyclone-ui build --config razorwind.config.ts --output tamagui.config.ts
```

### Design-system commands

The build bakes this repository's design system into the CLI. These commands search that data. Descriptions here come from the built command definitions.

| Command | Purpose |
| --- | --- |
| `search-components`, `search-tokens`, `search-icons`, `search-fonts` | Search one kind of record. They take `--terms` and `--limit`. `search-tokens` also takes `--include-metadata`. |
| `list-components`, `list-tokens`, `list-icons`, `list-fonts` | Return every record. The output is large. |
| `plan` | Searches tokens, icons, components, and fonts in one call. |
| `guidelines` | Returns design-system guidelines as Markdown. |
| `analyze-a11y` | Checks React or JSX code for likely accessibility issues and hard-coded colors. |

### Other commands

| Command | Purpose |
| --- | --- |
| `mcp` | Starts an MCP server on stdio. It exposes the commands as tools. |
| `update` | Checks the CLI version and updates it (`--latest`, `--version`). |
| `changelog` | Shows the changelog. |
| `help` | Shows usage details. |
| `completions <shell> config` and `completions <shell> script` | Set up or print shell completions for `bash`, `fish`, `powershell`, and `zsh`. |

## Use a registry in a Next.js project

Add RSC support when you initialize the project:

```bash
pnpm exec cyclone-ui init --rsc
```

Registry authors must supply `"use client"` directives on client-only components, hooks, and helpers. The CLI does not infer client boundaries.

## Use Tailwind CSS

```bash
pnpm exec cyclone-ui init --style tailwind
```

Besides recording `style: "tailwind"`, `init` sets the project up for Tailwind CSS v4 classes next to Cyclone UI components:

- It sets `tailwind: true` in the `cycloneUI()` call in `vite.config.*`, or the `withCycloneUI()` call in `next.config.*`.
- It adds `@import "@cyclone-ui/tokens/tailwind.css";` above `@import "tailwindcss"` in the app stylesheet. When the config passes `tokens`, it imports `.cyclone-ui/tailwind.css` instead. It looks for the stylesheet in common places (`src/index.css`, `app/globals.css`, …), or uses the path from `--css`.
- When it can't edit a file (no Tailwind import yet, or options that aren't an object literal), it prints the step to do by hand.

Running it again changes nothing. See [Use Tailwind CSS with Cyclone UI](./guides/tailwind.md).

## Tests

The tests check component installation, the RSC options, the Tailwind setup, the static public registry, the `build` command, and the `docs` command metadata. They are in `tests/`.

```bash
pnpm nx test cli
```

## Related pages

- [Package map](./index.md)
- [@cyclone-ui/registry-api](./registry-api.md)
- [@cyclone-ui/theme-builder](./theme-builder.md)
- [Use Tailwind CSS with Cyclone UI](./guides/tailwind.md)
- [Components](../design-system/components/index.md)

---
title: CLI command reference
description: Synopsis, arguments, and options for each cyclone-ui command.
documentType: reference
tags: [cli, commands]
---

# CLI command reference

Run commands as `pnpm exec cyclone-ui <command>`. Placeholders use `<required>` and `[optional]`. Every command below accepts `--cwd <dir>`. The default working directory is the current directory.

The package export map also exposes each command as a module, for example `@cyclone-ui/cli/add`.

## Registry

### init

```bash
cyclone-ui init [components...] [--path <dir>] [--registry <url>] [--rsc] [--force] [--silent]
```

Alias: `create`.

Creates `components.json` and the component folder. Names after the command are components to copy in the same run. `--force` replaces an existing `components.json` and overwrites files for those components.

Success text: `Initialized Cyclone UI in <root>.`

### add

```bash
cyclone-ui add [components...] [--all] [--overwrite] [--path <dir>] [--dry-run] [--diff] [--view] [--silent] [--registry <url>] [--rsc]
```

Copies components into the project. `--all` copies every component from the registry. `--dry-run`, `--diff`, and `--view` do not write files. `--diff` prints a diff. `--view` prints the resolved file contents.

The name `email` adds every React Email component.

### search

```bash
cyclone-ui search [--query <text>] [--limit <n>] [--offset <n>] [--json] [--registry <url>]
```

Alias: `list`.

Matches `query` against names, descriptions, and tags. `--limit` defaults to `100`. `--offset` defaults to `0`. Text output is one line per component: name (28 columns), version or `-`, then the description.

### view

```bash
cyclone-ui view <components...> [--registry <url>]
```

Prints metadata and files for each component as JSON.

### diff

```bash
cyclone-ui diff [components...] [--registry <url>]
```

Compares installed components with the registry. With no names, it compares every component recorded in `components.json`. With none installed, it throws `No installed components to compare.`

### docs

```bash
cyclone-ui docs <components...> [--json] [--registry <url>]
```

Prints `<name>: https://docs.stormsoftware.com/projects/cyclone-ui/components/<name>` for each component. `--json` prints `name`, `description`, and `url`.

### info

```bash
cyclone-ui info [--json]
```

Prints the project root, config path, registry, component folder, and installed components.

### registry validate

```bash
cyclone-ui registry validate [registry]
```

Checks a local registry manifest and its source files. The default manifest path is `registry.json`.

## Tokens

### build-tokens

```bash
cyclone-ui build-tokens [--config <file>] [--tokens <path>] [--output <file>]
```

Writes a Tamagui config. The default `--output` is `tamagui.config.ts`. When no tokens are found, the command throws `No design tokens found. Pass --tokens or set tokensPath in razorwind.config.ts.`

### build

```bash
cyclone-ui build [--config <file>] [--tokens <path>] [--output <file>]
```

Runs `build-tokens`, then compiles that config with `@tamagui/static`. The CSS path is `tamagui.generated.css` in the working directory. If compilation returns no config, the command throws `Unable to build Tamagui config: <output path>`.

## Design system

These modules are part of the published export map. They search the design system baked into the CLI.

| Command | Module |
| --- | --- |
| `search-components`, `search-tokens`, `search-icons`, `search-fonts` | `./search-*.mjs` |
| `list-components`, `list-tokens`, `list-icons`, `list-fonts` | `./list-*.mjs` |
| `plan` | `./plan.mjs` |
| `guidelines` | `./guidelines.mjs` |
| `analyze-a11y` | `./analyze-a11y.mjs` |

Option details for these commands are documented on the [package page](./packages/cli.md#design-system-commands). That page reads the built command definitions.

## Other built commands

The export map also includes `help`, `mcp`, `update`, `changelog`, and `completions-<shell>-config` / `completions-<shell>-script` for `bash`, `fish`, `powershell`, and `zsh`.

```bash
cyclone-ui mcp
```

`mcp` starts an MCP server on stdio. The design-system commands are exposed as tools.

## Related pages

- [Configuration](./configuration.md)
- [Troubleshooting](./troubleshooting.md)
- [Package reference](./packages/cli.md)

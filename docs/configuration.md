---
title: CLI configuration
description: The components.json file, registry URLs, and options that apply to every Cyclone UI command.
documentType: reference
tags: [cli, configuration]
---

# CLI configuration

`cyclone-ui init` writes `components.json` in the working directory. Later commands read that file.

## components.json

| Key | Type | Purpose |
| --- | --- | --- |
| `registry` | string | Registry URL. The default written by `init` is `https://public.storm-cdn.com/cyclone-ui/registry`. |
| `path` | string | Folder for copied components, relative to the working directory. The default is `components`. |
| `rsc` | boolean, optional | `true` keeps registry directives. `false` removes module-level `"use client"` directives. When the key is absent, the CLI leaves file contents unchanged. |
| `components` | object | Installed components. Each entry records `version` and `files`. |

The CLI writes only inside the configured folder. It rejects a registry file path that leaves that folder.

## Where a value comes from

1. A command option, such as `--registry` or `--path`, applies to that run.
2. Otherwise the command reads `components.json`.
3. Commands that can run before a config exists (`search`, `view`, `docs`) fall back to `https://public.storm-cdn.com/cyclone-ui/registry`.

`--cwd` sets the working directory. The default is the current directory. Every command in `packages/cli/src/commands` accepts it.

`--rsc` on `add` overrides the project setting for that installation. The command does not save the override.

A registry URL that ends in `/registry.json` is accepted. A prerelease channel uses the registry `/tags/<tag>` URL. A URL that ends in `/api` uses the typed client from `@cyclone-ui/registry-api`.

## Token build options

`build` and `build-tokens` read a Razorwind config.

| Option | Purpose |
| --- | --- |
| `--config` | Path to the Razorwind configuration file. |
| `--tokens` | Token source path or glob. It overrides `tokensPath`. |
| `--output` | Tamagui config output. The default is `tamagui.config.ts`. |

## Related pages

- [Command reference](./api-reference.md)
- [Registry API package](./packages/registry-api.md)

---
title: Copy your first component
description: Initialize a project with the Cyclone UI CLI, search the registry, and copy the button component.
documentType: tutorial
tags: [cli, components]
---

# Copy your first component

This flow creates `components.json`, finds the button component, and copies it into your project.

## 1. Initialize the project

From the project root:

```bash
pnpm exec cyclone-ui init --path src/components/ui
```

`init` writes `components.json` and creates the component folder. The default folder is `components` when you omit `--path`.

When `components.json` already exists, the command stops with:

```text
components.json already exists. Re-run with --force to replace it.
```

Pass `--force` only when you intend to replace that file.

On success the command prints `Initialized Cyclone UI in <project root>.`

## 2. Search the registry

```bash
pnpm exec cyclone-ui search --query button
```

Each matching line is the component name, padded to 28 characters, then the version (or `-`), then the description. `--limit` defaults to `100`. `--json` prints the same matches as JSON.

## 3. Copy the component

```bash
pnpm exec cyclone-ui add button
pnpm install
```

`add` copies the component and the components it depends on. It adds packages such as `@cyclone-ui/helpers` and `@cyclone-ui/state` to `package.json`. Run your package manager afterward so those packages install.

If you pass no names and you omit `--all`, the command throws `Provide at least one component or use --all.`

## 4. Confirm the result

```bash
pnpm exec cyclone-ui info
```

`info` prints the project root, the path to `components.json`, the registry URL, the component folder, and the installed components. `--json` prints that object as JSON.

## Related pages

- [Configuration](./configuration.md)
- [Command reference](./api-reference.md)

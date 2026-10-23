---
title: "Walk-through: Preview and update copied components"
description: Use the Cyclone CLI to check what changed in the registry, review a diff against your local edits, and update a copied component safely.
audience: Application developer who already copied Cyclone UI components into a project
perspective: hands-on
tags: [cli, diff, update, registry, components]
---

# Walk-through: Preview and update copied components

**Audience:** Application developer who already ran `cyclone-ui add` · **Perspective:** hands-on · **Time:** ~10 min

## What you will learn

Copied components are your code. The registry can publish a newer version, and you may have edited the local file. This guide shows how to see the difference first, then update on purpose. The [CLI README](../../../packages/cli/README.md) lists the commands. This guide explains how they decide what to write.

## Before you start

- A project with a `components.json` file and at least one installed component. See [Adopt Cyclone UI in your app](../../design-system/guides/adopt-cyclone-ui.md).
- Your changes are committed to version control. An update replaces file contents, so you can then recover local edits with your VCS.

## The path at a glance

1. Check the installed state with `info`.
2. Compare with the registry with `diff`.
3. Read the plan with `add --dry-run`, `--diff`, or `--view`.
4. Update with `add --overwrite`.
5. Install new dependencies.

## Step 1 — Check the installed state

`info` reads `components.json` and prints the registry, the component path, and the installed components ([info command](../../../packages/cli/src/commands/info/command.ts)).

```bash
pnpm exec cyclone-ui info
```

```text
Project: /path/to/app
Configuration: /path/to/app/components.json
Registry: https://public.storm-cdn.com/cyclone-ui/registry
Components: button, body-text, ripple-animation, themeable-icon
```

The values above are illustrative. Add `--json` for machine-readable output. Before you run `init`, the command prints `Configuration: not initialized`.

## Step 2 — Compare with the registry

`diff` rebuilds the install plan for each component in a dry run, then prints the differences ([diff command](../../../packages/cli/src/commands/diff/command.ts)). With no names, it checks everything listed in `components.json`.

```bash
pnpm exec cyclone-ui diff            # all installed components
pnpm exec cyclone-ui diff button     # one component
```

Know how to read the output ([formatDiff](../../../packages/cli/src/utilities/components.ts)):

- `No differences found.` means every file matches the registry.
- A file that differs prints the old file with a `-` prefix on each line, then the new file with a `+` prefix. It does not print short hunks, so pipe long output to a pager.
- A file that does not exist locally prints as new, with a `/dev/null` header.

The comparison uses the same transformations as a real install. Imports between copied components become relative paths, and `"use client"` directives follow your `rsc` setting. Your own edits and registry changes both appear as differences. The command cannot tell which side changed.

## Step 3 — Read the plan before you write

`add` accepts three preview flags. Each one writes nothing:

| Flag | Prints |
| --- | --- |
| `--dry-run` | One line per file with a status |
| `--diff` | The same output as `diff`, for the components you name |
| `--view` | The full resolved content of each file |

Each file gets one of three statuses ([createInstallPlan](../../../packages/cli/src/utilities/components.ts)):

| Status | Meaning |
| --- | --- |
| `create` | The file does not exist yet. |
| `unchanged` | The file already has the registry content. It is skipped on write. |
| `overwrite` | The file exists and differs from the registry. |

```bash
pnpm exec cyclone-ui add button --diff
```

Dependencies are part of the plan. `add button` also plans `button`'s registry dependencies, so a diff can list files from other components.

## Step 4 — Update on purpose

Without a flag, `add` stops with an error when it would replace a changed file:

```text
src/components/ui/button/Button.tsx already exists. Re-run with --overwrite to replace it.
```

This is a safety check. The plan is built for every file first, so the command fails before it writes any file. To accept the registry version, add `--overwrite`:

```bash
pnpm exec cyclone-ui add button --overwrite
```

Local edits in the files that the plan marks `overwrite` are lost. To keep an edit, copy it out first, or recover it from version control after the update.

After a successful write, the CLI updates `components.json` with the component version and file list. Files with the `unchanged` status are not rewritten.

To refresh several components, name them all in one command. Do not use `--all` for an update: it adds every registry component, including ones you never installed.

## Step 5 — Install new dependencies

The update merges component dependencies into `package.json`. It adds a package only when your `dependencies` and `devDependencies` do not already declare it. A version of `catalog:` or `workspace:` from the registry is written as `latest`. It never runs your package manager.

```bash
pnpm install
```

Review the `package.json` diff. Then run your own type check and tests.

## Recap

`info` shows what is installed. `diff` and `add --diff` show a full before-and-after for each file. `add` refuses to replace a changed file unless you pass `--overwrite`. An update writes the files, merges dependencies, and records the new version.

## Where to go next

- Each component page lists its props and changes: [Components](../../design-system/components/index.md).
- Change where components are written or which registry is used: edit `path` and `registry` in `components.json`, or pass `--path` and `--registry` per command.
- Generate a Tamagui config from your own tokens: `cyclone-ui build` and `cyclone-ui build-tokens` ([README](../../../packages/cli/README.md)).

## Not verified

- No command in this guide was run against the live registry. The registry was not reachable from the authoring environment. Example output is illustrative.
- `package.json` lists an `update` export for the CLI, but no `update` command exists in `packages/cli/src/commands`. This guide uses `add --overwrite` instead.

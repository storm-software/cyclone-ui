---
title: PackageCommandCodeBlock
description: A tabbed code block that shows the npm, pnpm, yarn, and bun form of an ni-style command, with a copy button.
documentType: reference
tags: [component, code, documentation, package-manager]
---

# PackageCommandCodeBlock

`PackageCommandCodeBlock` shows one command in four tabs: `npm`, `pnpm`, `yarn`, and `bun`. Each tab has a copy button. Use it for install instructions in docs.

The component remembers the reader's choice. It stores the package manager in `localStorage` under `cyclone-ui.package-manager`. All instances on the page stay in sync. The default is `pnpm`.

## Import

```tsx
import { PackageCommandCodeBlock } from "@cyclone-ui/package-command-code-block";
```

## Usage

```tsx
<PackageCommandCodeBlock packageName="@cyclone-ui/button" />
<PackageCommandCodeBlock packageName="@cyclone-ui/button" dev />
<PackageCommandCodeBlock command="nr" args={["dev", "--port=3000"]} />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `command` | `NiCommand` | `"ni"` | The ni command to express. |
| `args` | `readonly string[]` | — | Arguments for the ni command. |
| `packageName` | `string` | — | The package to install. Used only when `command` is `ni` and `args` is not set. |
| `dev` | `boolean` | `false` | Install `packageName` as a development dependency (`-D`). |

### Types

- `PackageManager`: `"npm" | "pnpm" | "yarn" | "bun"`.
- `NiCommand`: `"ni" | "nr" | "nlx" | "nup" | "nun" | "nci" | "nd" | "na"`.

## Commands

| `command` | Meaning |
| --- | --- |
| `ni` | Install. With a package name, add the package. |
| `nci` | Clean install from the lockfile (`--frozen`). |
| `nr` | Run a script. For `npm`, extra arguments follow `--`. |
| `nlx` | Run a package binary. `--local` uses `exec` for `pnpm` and `yarn`. `npm` uses `npx`. `bun` uses `bunx`. |
| `nup` | Update. `-i` makes it interactive. |
| `nun` | Uninstall. `-g` removes a global package. |
| `nd` | Dedupe. |
| `na` | Run the package manager with the given arguments. |

## States and behavior

- A tab is hidden when its package manager has no form of the command. For example, `nd` has no `bun` tab, and `nup -i` has no `npm` tab.
- If the saved package manager has no tab for the command, the first available tab is selected.
- The component renders nothing if no package manager supports the command.
- The `-g` flag becomes the correct global form for each manager. `-D` becomes `-d` for `bun`.
- Arguments that contain a space are wrapped in double quotes.

## Accessibility

The tab list has the label `Package manager`. The tabs and code panels come from `@cyclone-ui/code-block`.

## Related

- [Design tokens](../tokens/index.md)
- Built on the `code-block` component package (`@cyclone-ui/code-block`).

## Source

- [`components/package-command-code-block/src/PackageCommandCodeBlock.tsx`](../../../components/package-command-code-block/src/PackageCommandCodeBlock.tsx)
- [`components/package-command-code-block/src/PackageCommandCodeBlock.stories.tsx`](../../../components/package-command-code-block/src/PackageCommandCodeBlock.stories.tsx)

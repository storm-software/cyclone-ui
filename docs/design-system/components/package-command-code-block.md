---
title: Package Command Code Block
description: A tabbed code block that shows the npm, pnpm, yarn, and bun form of an ni-style command, with a copy button.
documentType: reference
tags: [component, code, documentation, package-manager]
component:
  name: package-command-code-block
  package: "@cyclone-ui/package-command-code-block"
  stories:
    - title: Docs/PackageCommandCodeBlock
      file: components/package-command-code-block/src/PackageCommandCodeBlock.stories.tsx
---

# Package Command Code Block

`PackageCommandCodeBlock` shows one command in four tabs: `npm`, `pnpm`, `yarn`, and `bun`. Each tab has a copy button. Use it for install instructions in docs.

The component remembers the reader's choice. It stores the package manager in `localStorage` under `cyclone-ui.package-manager`. All instances on the page stay in sync. The default is `pnpm`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add package-command-code-block
pnpm install
```

- **File:** `PackageCommandCodeBlock.tsx`. The CLI writes it to `<path>/package-command-code-block/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Code Block](./code-block.md), [Container](./container.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.

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

## Anatomy

```tsx
<PackageCommandCodeBlock packageName="@cyclone-ui/button" />
// renders:
<CodeBlockTabs value={packageManager}>
  <CodeBlockTabsList aria-label="Package manager">
    <CodeBlockTabsTrigger value="npm">npm</CodeBlockTabsTrigger>
    {/* one trigger for each package manager */}
  </CodeBlockTabsList>
  <CodeBlockTab value="npm">
    <CodeBlock allowCopy>
      <Pre>
        <code>npm i @cyclone-ui/button</code>
      </Pre>
    </CodeBlock>
  </CodeBlockTab>
  {/* one panel for each package manager */}
</CodeBlockTabs>
```

| Part                      | Renders                                                                                   | Purpose                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `PackageCommandCodeBlock` | `CodeBlockTabs` from [Code Block](./code-block.md)                                         | The tab set. Its value is the saved package manager.                         |
| Tab list                  | `CodeBlockTabsList` with `aria-label="Package manager"`, and one `CodeBlockTabsTrigger` for each package manager | Selects the package manager. A manager without a form of the command has no tab. |
| Tab panel                 | `CodeBlockTab` that holds a `CodeBlock` with `allowCopy`, and a `Pre` with a `<code>` element | Shows the command for one package manager, with a copy button.               |

## Examples

The examples are the stories in [`PackageCommandCodeBlock.stories.tsx`](../../../components/package-command-code-block/src/PackageCommandCodeBlock.stories.tsx). The default args set `packageName="@cyclone-ui/code-block"`.

| Stories                 | What they show                                                                                                  |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| `Default`               | The install command: `npm i`, `pnpm add`, `yarn add`, and `bun add`.                                             |
| `DevelopmentDependency` | `dev`, which adds `-D` (`-d` for `bun`).                                                                        |
| `SharedSelection`       | Two blocks. Select a package manager in one block, and the other block changes too.                             |
| `NiAliases`             | One block for each of `nr dev --port=3000`, `nlx --local vitest`, `nup -i`, `nun -g eslint`, `nci`, `nd`, and `na run build`. |

## Props

The exported type is `PackageCommandCodeBlockProps`. The component accepts only these props.

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
- The `-g` flag becomes the correct global form for each manager. `-D` becomes `-d` for `bun`. `-P` becomes `--omit=dev` for `npm` and `--production` for the others.
- Arguments that contain a space are wrapped in double quotes.
- The first render uses `pnpm`. The saved package manager applies after the component mounts.
- A change in another browser tab also updates the selection, through the `storage` event.

## Accessibility

The tab list has the label `Package manager`. The tabs and code panels come from `@cyclone-ui/code-block`.

## Related

- [Code Block](./code-block.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/package-command-code-block/src/PackageCommandCodeBlock.tsx`](../../../components/package-command-code-block/src/PackageCommandCodeBlock.tsx)
- [`components/package-command-code-block/src/PackageCommandCodeBlock.stories.tsx`](../../../components/package-command-code-block/src/PackageCommandCodeBlock.stories.tsx) (title: `Docs/PackageCommandCodeBlock`)

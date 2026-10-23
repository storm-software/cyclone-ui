<!-- START header -->
<!-- END header -->

# Cyclone UI - Command-Line Interface (CLI)

The Cyclone UI command-line interface application.

<!-- START doctoc -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Table of Contents

- [Cyclone UI - Command-Line Interface (CLI)](#cyclone-ui---command-line-interface-cli)
  - [Table of Contents](#table-of-contents)
  - [Installing](#installing)
  - [Configuration](#configuration)
  - [Development](#development)
    - [Building](#building)
    - [Running unit tests](#running-unit-tests)
    - [Linting](#linting)

<!-- END doctoc -->

## Installing

Using [pnpm](http://pnpm.io):

```bash
pnpm add @cyclone-ui/cli
```

<details>
  <summary>Using npm</summary>

```bash
npm install @cyclone-ui/cli
```

</details>

<details>
  <summary>Using yarn</summary>

```bash
yarn add @cyclone-ui/cli
```

</details>

<!-- shell-shock:commands -->
<!-- /shell-shock -->

The Cyclone CLI downloads component source from the public R2 registry at
`https://public.storm-cdn.com/cyclone-ui/registry`, following the copy-and-own
workflow used by shadcn/ui. The bucket serves a `registry.json` catalog and
self-contained `components/<name>.json` files; no Worker API is required.

```bash
# Create components.json and the local component directory.
cyclone-ui init

# Browse the registry. `list` is an alias for `search`.
cyclone-ui search --query button

# Inspect or install registry components.
cyclone-ui view button
cyclone-ui add button

# Preview an installation or compare installed files with the registry.
cyclone-ui add button --dry-run
cyclone-ui diff button

# Inspect the current project configuration.
cyclone-ui info

# Generate a Tamagui config from design tokens, then compile it and its CSS.
cyclone-ui build --config razorwind.config.ts --output tamagui.config.ts

# Generate only the config, without compiling it.
cyclone-ui build-tokens --config razorwind.config.ts

# Validate a shadcn-format registry.
cyclone-ui registry validate registry.json
```

`init` writes a `components.json` file containing the public registry URL, output
path, and installed component manifest. `add` resolves internal component
dependencies, refuses to overwrite changed files unless `--overwrite` is
provided, updates package dependencies, and records the installed version and
files. Registry file paths are constrained to the configured component
directory.

In a second repository, use the installed `cyclone-ui` executable:

```bash
pnpm exec cyclone-ui init --path src/components/ui
pnpm exec cyclone-ui add button
pnpm install
```

Component dependencies are copied recursively. Imports between copied components
become relative imports, including subpath imports from nested files. Other
packages, including `@cyclone-ui/helpers` and `@cyclone-ui/state`, are added to
`package.json` with published version ranges. Existing dependency declarations
are preserved. Run your package manager to install newly added dependencies.

To use another public registry, pass `--registry <url>` to `init`, or change
`registry` in `components.json`. A URL ending in `/registry.json` is also accepted.
For a prerelease channel use the registry's `/tags/<tag>` URL. Explicit legacy
Worker registry URLs ending in `/api` continue to use the typed API client.

For a Next.js App Router project, enable React Server Component support with
`cyclone-ui init --rsc`, or add `"rsc": true` to your existing `components.json`.
This preserves registry directives, matching shadcn's RSC-enabled behavior.
Registry authors are responsible for supplying `"use client"` directives on
client-only components, hooks, and helpers. The CLI does not infer client
boundaries or add directives to unmarked files.

Set `"rsc": false` to remove module-level `"use client"` directives from installed
JavaScript and TypeScript files, following shadcn's RSC opt-out behavior.
Server/cache directives, function bodies, comments, and non-script files remain
unchanged. Omitting `rsc` preserves registry contents without transformation.
The `add` command also accepts `--rsc` to override the project setting for that
installation. Previews and diffs use the same transformed contents as writes.

`build` accepts the same `--cwd`, `--config`, `--tokens`, and `--output` options
as `build-tokens`. It compiles the generated config into `.tamagui/` and writes
`tamagui.generated.css` in the working directory. The compiler is included with
the Cyclone CLI; no separate Tamagui CLI installation is required.

## Configuration

<!-- shell-shock:env -->
<!-- /shell-shock -->

## Development

This project is built using [Nx](https://nx.dev). As a result, many of the usual
commands are available to assist in development.

### Building

Run `nx build cli` to build the library. The Razorwind Shell Shock plugin
extracts this repository's design system during the build and bakes its tokens,
components, icons and fonts into CLI commands and MCP tools. No Razorwind
configuration or generated snapshot is needed at runtime.

### Running unit tests

Run `nx test cli` to execute the unit tests via
[Vitest](https://vitest.dev).

### Linting

Run `nx lint cli` to run
[ESLint](https://eslint.org/) on the package.

<!-- START footer -->
<!-- END footer -->

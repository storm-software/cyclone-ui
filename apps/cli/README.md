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

The Cyclone CLI follows the registry workflow used by the shadcn CLI while
retrieving components through the typed Cyclone Registry API.

```bash
# Create components.json and the local component directory.
cyclone init

# Browse the registry. `list` is an alias for `search`.
cyclone search --query button

# Inspect or install registry components.
cyclone view button
cyclone add button

# Preview an installation or compare installed files with the registry.
cyclone add button --dry-run
cyclone diff button

# Inspect the current project configuration.
cyclone info

# Validate and build a distributable shadcn-format registry.
cyclone registry validate registry.json
cyclone build registry.json --output public/r
```

`init` writes a `components.json` file containing the registry API URL, output
path, and installed component manifest. `add` resolves internal component
dependencies, refuses to overwrite changed files unless `--overwrite` is
provided, updates package dependencies, and records the installed version and
files. Registry file paths are constrained to the configured component
directory.

## Configuration

<!-- shell-shock:env -->
<!-- /shell-shock -->

## Development

This project is built using [Nx](https://nx.dev). As a result, many of the usual
commands are available to assist in development.

### Building

Run `nx build cli` to build the library.

### Running unit tests

Run `nx test cli` to execute the unit tests via
[Vitest](https://vitest.dev).

### Linting

Run `nx lint cli` to run
[ESLint](https://eslint.org/) on the package.

<!-- START footer -->
<!-- END footer -->

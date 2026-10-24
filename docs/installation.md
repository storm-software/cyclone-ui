---
title: Install the Cyclone UI CLI
description: Install the cyclone-ui command and confirm that it runs.
documentType: getting-started
tags: [cli, install]
---

# Install the Cyclone UI CLI

`@cyclone-ui/cli` provides the `cyclone-ui` command. The command copies Cyclone UI components into your project and can build a Tamagui config from design tokens.

The binary is `cyclone-ui`. It points at `./dist/bin.mjs`.

## Prerequisites

- A Node.js project with a `package.json`.
- A package manager. The examples use pnpm.

This repository does not set an `engines` field on the CLI package.

## Install

```bash
pnpm add @cyclone-ui/cli
```

Run a command through the package manager:

```bash
pnpm exec cyclone-ui help
```

`help` is one of the built command modules. A successful run prints usage.

The package version in this repository is `0.6.20`. Confirm that the version you install publishes the `cyclone-ui` binary before you rely on `npx cyclone-ui`.

## Related pages

- [Quick start](./quick-start.md)
- [Command reference](./api-reference.md)
- [Package reference](./packages/cli.md)

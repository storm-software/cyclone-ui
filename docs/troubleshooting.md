---
title: CLI troubleshooting
description: Errors the Cyclone UI CLI throws, and the command that clears each one.
documentType: reference
tags: [cli, troubleshooting]
---

# CLI troubleshooting

These messages come from the command handlers in `packages/cli/src/commands`.

| Message | Cause | What to do |
| --- | --- | --- |
| `components.json already exists. Re-run with --force to replace it.` | `init` found a config and `--force` was not set. | Keep the file, or run `init --force` to replace it. |
| `Provide at least one component or use --all.` | `add` received no names. | Pass a component name, or `--all`. |
| `No installed components to compare.` | `diff` found no names in `components.json` and you did not pass any. | Run `add` first, or pass the component names. |
| `No design tokens found. Pass --tokens or set tokensPath in razorwind.config.ts.` | `build-tokens` found no token files. | Pass `--tokens <path>`, or set `tokensPath` in the Razorwind config. |
| `Unable to build Tamagui config: <path>` | `build` compiled the generated config and got no Tamagui config back. | Check that `<path>` is the file `build-tokens` wrote, then run `build` again with `--output`. |

`add` also refuses to overwrite a local file that differs from the registry unless you pass `--overwrite`.

Contributor tests for install, RSC options, the public registry, `build`, and `docs` live in `packages/cli/tests`.

```bash
pnpm nx test cli
```

## Related pages

- [Configuration](./configuration.md)
- [Command reference](./api-reference.md)

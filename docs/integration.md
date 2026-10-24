---
title: CLI integration
description: How the Cyclone UI CLI fits a Next.js app, a custom registry, and the token build.
documentType: reference
tags: [cli, nextjs, registry]
---

# CLI integration

The CLI copies component source into your repository. It does not mount a runtime. After `add`, install the packages it wrote into `package.json` and render the components inside your Tamagui provider.

## Next.js

Initialize with React Server Component support when the app uses the App Router and should keep `"use client"` directives from the registry:

```bash
pnpm exec cyclone-ui init --rsc
```

`--rsc` on a later `add` overrides that setting for one installation.

Registry authors put `"use client"` on client-only components, hooks, and helpers. The CLI does not infer a client boundary.

For the Next.js config wrapper and root provider, use [`@cyclone-ui/nextjs`](./packages/nextjs.md). That package is separate from the CLI.

## Vite

The CLI copy step is the same in a Vite app. The dev-server plugin is [`@cyclone-ui/vite`](./packages/vite.md).

## Another registry

```bash
pnpm exec cyclone-ui init --registry https://example.com/registry
```

You can also set `registry` in `components.json`, or pass `--registry` on `add`, `search`, `view`, `diff`, or `docs`.

| URL shape | Client |
| --- | --- |
| `https://public.storm-cdn.com/cyclone-ui/registry` | Static registry files. This is the default. |
| A URL that ends in `/registry.json` | The same static catalog. |
| A URL that ends in `/tags/<tag>` | A prerelease channel. |
| A URL that ends in `/api` | The typed client in `@cyclone-ui/registry-api`. |

Validate a local manifest before you publish it:

```bash
pnpm exec cyclone-ui registry validate registry.json
```

## Tamagui config

When the app owns its tokens, generate the config from the Razorwind file:

```bash
pnpm exec cyclone-ui build --config razorwind.config.ts --output tamagui.config.ts
```

`build` also writes `tamagui.generated.css` in the working directory.

## Related pages

- [@cyclone-ui/nextjs](./packages/nextjs.md)
- [@cyclone-ui/vite](./packages/vite.md)
- [@cyclone-ui/registry-api](./packages/registry-api.md)

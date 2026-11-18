# Cyclone UI - Registry Worker

A [Cloudflare Worker](https://developers.cloudflare.com/workers/) that serves the Cyclone UI component registry API. It hosts the tRPC router from [`@cyclone-ui/registry-api`](../../packages/registry-api/README.md) at `/api` and reads component files from an R2 bucket.

## Quick Features

- Serves the `components.list` and `components.get` tRPC procedures from `@cyclone-ui/registry-api` with the fetch adapter, at the `/api` endpoint.
- Reads component metadata and files from the `cyclone-ui-registry` R2 bucket through the `STORAGE_BUCKET` binding.
- Runs on the `registry.cyclone-ui.com` custom domain (see [`wrangler.toml`](./wrangler.toml)).

## Installation

This app is private to the repository. Install the workspace dependencies from the repository root:

```bash
pnpm install
```

## Usage

The worker is one `fetch` handler in [`src/index.ts`](./src/index.ts). It passes every request to `fetchRequestHandler` from `@trpc/server`, with the registry router and a context built from the worker environment.

Call it with the typed client from `@cyclone-ui/registry-api`:

```ts
import { createRegistryClient } from "@cyclone-ui/registry-api/client";

const client = createRegistryClient("https://registry.cyclone-ui.com/api");
const button = await client.components.get.query("button");
```

The [CLI](../../docs/packages/cli.md) uses this client only for an explicit registry URL that ends in `/api`. By default it downloads the public `registry.json` catalog instead. See the [`@cyclone-ui/registry-api` reference](../../docs/packages/registry-api.md) for the procedures and the R2 key layout.

## Development

Start the worker locally with the Nx `serve` target, which uses the `registry-worker:build` target:

```bash
pnpm nx run registry-worker:serve
```

The worker configuration (name, entry point, R2 binding, and route) is in [`wrangler.toml`](./wrangler.toml).

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://public.storm-cdn.com/cyclone-ui/media/banner-1280x427-dark.gif">
  <source media="(prefers-color-scheme: light)" srcset="https://public.storm-cdn.com/cyclone-ui/media/banner-1280x427-light.gif">
<img src="https://public.storm-cdn.com/cyclone-ui/media/banner-1280x427-dark.gif" width="100%" alt="Powerlines" />
</picture>
</div>
<br />

<div align="center">
<b>
<a href="https://stormsoftware.com" target="_blank">Website</a>  •
<a href="https://github.com/storm-software/cyclone-ui" target="_blank">GitHub</a>  •
<a href="https://discord.gg/MQ6YVzakM5">Discord</a>  •  <a href="https://stormstack.github.io/stormstack/" target="_blank">Docs</a>  •  <a href="https://stormsoftware.com/contact" target="_blank">Contact</a>  •
<a href="https://github.com/storm-software/cyclone-ui/issues/new?assignees=&labels=bug&template=bug-report.yml&title=Bug Report%3A+">Report a Bug</a>
</b>
</div>

<br />
<br />

# Cyclone UI - Registry API (Internal)

A package containing the shared TRPC router code used by the Cyclone Registry. **This is an internal package used to connect to the Cyclone UI registry API. Please avoid using it directly - it will be updated with breaking changes without warning.**

## Quick Features

- A [tRPC](https://trpc.io) router with one `components` sub-router: `components.list` returns the newest version of each component, and `components.get` returns one component with its files.
- Reads component metadata and files from an R2-style bucket (the `STORAGE_BUCKET` binding), with the key layout `registry/components/<component>/<version>/<file>`.
- A typed, batching client, `createRegistryClient`, with the default URL `https://registry.cyclone-ui.com/api`.
- The registry types (`ComponentSummary`, `ComponentDetails`, `ComponentFile`, and others) and the `x-cyclone-version` and `x-cyclone-checksum` header names.

## Installation

Inside this repository, add the package as a workspace dependency:

```json
{
  "dependencies": {
    "@cyclone-ui/registry-api": "workspace:*"
  }
}
```

The package is also published to npm, but it can change without warning. Use it only to talk to the Cyclone UI registry.

## Usage

Query the registry with the typed client:

```ts
import { createRegistryClient } from "@cyclone-ui/registry-api/client";

const client = createRegistryClient();
const components = await client.components.list.query();
const button = await client.components.get.query("button");
```

Host the router in a fetch-based server, as the [registry worker](../../apps/registry-worker/README.md) does:

```ts
import { createContext } from "@cyclone-ui/registry-api/context";
import { router } from "@cyclone-ui/registry-api/router";
import type { Env } from "@cyclone-ui/registry-api/types";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    return fetchRequestHandler({ endpoint: "/api", req, router, createContext: createContext(env) });
  }
};
```

See the [package reference](../../docs/packages/registry-api.md) for every entry point, procedure, and type.

## Development

This project is built using [Nx](https://nx.dev). Build it from the repository root:

```bash
pnpm nx run registry-api:build
pnpm nx run registry-api:test
pnpm nx run registry-api:lint
```

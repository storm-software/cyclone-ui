---
title: "@cyclone-ui/registry-api"
description: Reference for the private tRPC package that serves the Cyclone UI component registry from R2 storage.
documentType: reference
tags: [registry, trpc, cloudflare]
---

# @cyclone-ui/registry-api

`@cyclone-ui/registry-api` is the shared [tRPC](https://trpc.io) router and typed client for the Cyclone UI component registry. The [registry worker](../../apps/registry-worker/README.md) hosts it. The [CLI](./cli.md) uses the client for legacy registry URLs.

This package is private (`"private": true`). It is not published to npm. Use it inside this repository only.

Source: [`packages/registry-api`](https://github.com/storm-software/cyclone-ui/tree/main/packages/registry-api)

> [!NOTE]
> The current CLI downloads from the public R2 `registry.json` catalog and does not call this API by default. The CLI uses the typed client only for explicit registry URLs that end in `/api`.

## Entry points

| Import path | Contents |
| --- | --- |
| `@cyclone-ui/registry-api` | The exports of `client`, `context`, `errors`, `router`, and `types` |
| `@cyclone-ui/registry-api/client` | `createRegistryClient`, `DEFAULT_REGISTRY_URL` |
| `@cyclone-ui/registry-api/context` | `createContext`, `Context` |
| `@cyclone-ui/registry-api/errors` | `CycloneRegistryErrorCode` |
| `@cyclone-ui/registry-api/router` | `router`, `Router` |
| `@cyclone-ui/registry-api/routes/components` | `componentsRouter` |
| `@cyclone-ui/registry-api/trpc` | `t`, `publicProcedure`, `protectedProcedure`, `createRouter` |
| `@cyclone-ui/registry-api/types` | Registry types and `HttpHeaders` |

## Procedures

The root `router` has one sub-router: `components`.

| Procedure | Type | Input | Result |
| --- | --- | --- | --- |
| `components.list` | query | None | `ComponentSummary[]`: the newest version of each component |
| `components.get` | query | `string`: a component name. A leading `@cyclone-ui/` is removed. | `ComponentDetails` for the newest version, with its files |

`components.get` throws an error when it finds no component (`Component "<name>" was not found`) or no `meta.json` file (`Metadata file not found`).

### Storage layout

The router reads from the `STORAGE_BUCKET` binding. It expects this key layout:

```text
registry/components/<component>/<version>/meta.json
registry/components/<component>/<version>/<file>
```

The newest version is the one with the latest upload time of its `meta.json` file.

## Client

```ts
import { createRegistryClient } from "@cyclone-ui/registry-api/client";

const client = createRegistryClient();
const components = await client.components.list.query();
const button = await client.components.get.query("button");
```

`createRegistryClient(url?)` returns a tRPC client with a batching HTTP link. The default URL is `https://registry.cyclone-ui.com/api`.

## Server context

`createContext(env)` returns the function that tRPC needs to build a request context. The context adds:

- `storage`: the `STORAGE_BUCKET` object from `env`
- `version`: the value of the `x-cyclone-version` header, or `undefined`

The `HttpHeaders` constant names two headers: `Version` (`x-cyclone-version`) and `Checksum` (`x-cyclone-checksum`).

## Types

| Type | Purpose |
| --- | --- |
| `ComponentPlatform` | `"web"`, `"mobile"`, or `"all"`. The constant has `WEB`, `MOBILE`, and `ALL`. |
| `ComponentSummary` | `name`, `version?`, `release`, `tags`, `description`, `updatedOn` |
| `ComponentMeta` | The header fields plus `dependencies`, `devDependencies`, and `internalDependencies` |
| `ComponentFile` | `name`, `content`, `checksum?`, `updatedOn` |
| `ComponentDetails` | `ComponentMeta` plus `files` |
| `Env` | `{ STORAGE_BUCKET: RegistryStorage }` |
| `RegistryStorage` | The `list` and `get` methods of an R2 bucket |

`CycloneRegistryErrorCode` has two values: `not_found` and `metadata_not_found`. The router in this package does not use them yet.

## OpenAPI

This API uses tRPC. The repository has no OpenAPI or Swagger specification for it. No such file is tracked in Git.

## Tests

`test/routes/components.spec.ts` checks that `components.list` and `components.get` return only the newest uploaded version.

```bash
pnpm nx test registry-api
```

## Related pages

- [Package map](./index.md)
- [Registry worker](../../apps/registry-worker/README.md)
- [CLI](./cli.md)

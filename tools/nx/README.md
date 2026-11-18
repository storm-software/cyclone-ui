# Cyclone UI - Internal Nx Plugins

An internal collection of Nx plugins used in the Cyclone UI monorepo.

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

> [!IMPORTANT] 
> This is an internal Cyclone UI tooling package, and should not be used outside of the Cyclone UI monorepo. It is not intended for public consumption, and may change or be removed at any time without notice. 

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

## Public component registry

The inferred component `nx-release-publish` targets use `component-publish` to
upload source artifacts to the existing `storm-public` R2 bucket. Its public
custom domain is `https://public.storm-cdn.com`; the publisher's authenticated
S3 endpoint remains `https://<account-id>.r2.cloudflarestorage.com`.

The executor stages self-contained JSON registry items with embedded source,
component dependencies, and installable npm dependency versions. It resolves
`catalog:` ranges from `pnpm-workspace.yaml` and `workspace:` ranges from project
manifests. Source entrypoints, nested files, and native variants are included;
stories, tests, and MDX files are excluded.

Uploads use these keys:

- `cyclone-ui/registry/components/<name>/<version>.json`: versioned item.
- `cyclone-ui/registry/components/<name>.json`: latest item.
- `cyclone-ui/registry/registry.json`: component catalog.
- `cyclone-ui/registry/tags/<tag>/components/<name>.json` and
  `cyclone-ui/registry/tags/<tag>/registry.json`: non-latest channel.

Each publisher derives the same catalog from the release workspace, so concurrent
publishes do not overwrite each other's entries. Item uploads finish before the
catalog upload. The catalog describes all public component projects. Bootstrap
the new registry format and each new tag channel with `--all` before consumers
use discovery;
this uploads every component in one invocation before publishing the catalog.
Publishing never cleans the shared registry prefix, even with `clean: true`.
`writeMetaJson` is ignored because each item contains its own metadata.

Use the repository's release workflow for production publishing. For an explicit
local publication or dry run:

```bash
devenv shell -- pnpm nx run button:nx-release-publish --dry-run
devenv shell -- pnpm nx run button:nx-release-publish --all
devenv shell -- pnpm nx run button:nx-release-publish --all --tag next
devenv shell -- pnpm nx run button:nx-release-publish
```

The shared R2 uploader uses `CLOUDFLARE_ACCOUNT_ID` (or
`STORM_BOT_CLOUDFLARE_ACCOUNT`) plus its supported access-key and secret-key
environment variables. The release workflow supplies `ACCESS_KEY_ID` and
`SECRET_ACCESS_KEY`. Dry runs retain the uploader's configuration requirements.
The existing public bucket/domain must already be configured; these executors
upload registry objects and do not provision Cloudflare infrastructure. Configure
CDN caching to revalidate mutable catalog and channel URLs when publishing.

Font publication continues to upload built assets under
`storm-public/fonts/<font-name>` without deleting other fonts.

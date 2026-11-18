# Startup and I/O

CLI latency is felt on every invocation. Prefer a cheap, predictable default path over broad eager initialization.

## `startup-cheap-path-first`

Handle `--help`, `--version`, obvious invalid input, and local configuration before loading optional plugins, scanning a workspace, or contacting a service. Cheap exits should remain cheap as the application grows.

## `startup-no-surprise-network`

Do not check for updates, telemetry, remote config, or credentials merely because the CLI starts. Make network work command-scoped, opt-in, cacheable, and suppressible in CI. Shell Shock's update facilities already recognize noninteractive and CI contexts; preserve that behavior.

## `startup-lazy-optional-features`

Load an integration only in the branch that needs it: a formatter for `format`, an MCP adapter for `mcp`, or a cloud client for a remote command. Keep import paths statically analyzable when the build system needs to trace them.

## `startup-parallel-independent-io`

Start independent configuration reads, metadata lookup, and local discovery together with `Promise.all`, then await the values only when needed. Do not parallelize operations where one result changes the correct target or authorization for another.

## `startup-bound-concurrency`

Bulk commands should use a small, configurable concurrency limit. Unbounded `Promise.all` over files, packages, or user-provided URLs can exhaust file descriptors, memory, rate limits, or the user's machine.

## `startup-cache-by-contract`

Cache only data whose scope and invalidation are clear. Key it by relevant config, working directory, version, and inputs; expose a refresh/skip-cache control when stale data would be surprising. Never cache credentials or secrets in world-readable locations.

## `startup-avoid-repeat-discovery`

Within one invocation, pass resolved config, command reflection, and workspace discovery through the operation instead of performing the same scan in helpers. Shell Shock persists command reflection for this reason; do not introduce an additional ad hoc discovery path.

## Review prompts

- What does `tool --help` load or contact?
- Which I/O operations are independent, and which must remain ordered?
- Is cache staleness safer than a fresh read for this command?

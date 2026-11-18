# Application documentation

Use for `type: "application"`.

Read `src` for a single application. Read `backend` and `frontend` for an application with separate sides; each value may be one workspace-relative path or an array. If multiple fields are provided, inspect all of them and describe their relationship rather than treating them as separate unrelated applications.

Document what the application does, its entry points and main flows, how its frontend and backend communicate where applicable, and how a developer runs or builds it when the repository provides that information. Use actual manifests and configuration for commands and environment requirements. For multiple applications, give each identified application its own local documentation when `useLocalOutput` is true; use clear names in a shared output directory otherwise.

Inspect routes, screens, server handlers, background jobs, data models, manifests, configuration, tests, and existing examples as relevant. Follow a flow across files before describing it. Organize pages around tasks readers need to complete: understand the application, use its main features, develop it, and operate it. Start with a short overview and navigation; give a substantial flow or subsystem its own page when a single overview would be hard to scan. Link related pages instead of repeating setup or shared concepts.

## Variant

Read the optional `variant` field to adapt the style, vocabulary, and emphasis of the documentation to the application's deployment target. The variant changes how content is presented, not what is true: every claim must still come from the source. If the source contradicts the configured variant (for example, `variant: "cli"` on a project that only exposes HTTP handlers), document what the source shows and note the mismatch as a gap.

When `variant` is absent, infer the closest variant from manifests, entry points, and dependencies; if none fits clearly, use the general guidance in this file without variant-specific adjustments.

### `web`

- Write for end users who reach the application through a browser, and for developers who run it locally.
- Organize user flows by page or route. Name the URL path for each entry point and describe navigation between pages.
- Prefer screenshots or rendered examples for visual flows when available.
- Cover authentication, sessions, supported browsers, and environment-specific base URLs when the source defines them.
- In development docs, document the dev server command and port, build output, and how static assets and server rendering are configured.

### `mobile`

- Write for end users on a device, and for developers who build and run the application on simulators, emulators, or physical devices.
- Organize user flows by screen and describe navigation (tabs, stacks, deep links) as defined in the navigation configuration.
- State supported platforms and minimum OS versions from the project configuration (for example `app.json`, `Info.plist`, `build.gradle`).
- Document device permissions (camera, location, notifications), offline behavior, and push notifications only when the source requests or handles them.
- In development docs, cover platform toolchain prerequisites, signing, and distribution steps (store builds, over-the-air updates) when the repository provides them.

### `desktop`

- Write for end users who install and run the application on an operating system, and for developers who package it.
- Describe installation per supported operating system, including installers, auto-update behavior, and uninstall steps when the source defines them.
- Organize user flows by window, menu, and keyboard shortcut. Document shortcuts from their definitions, with per-OS modifier keys.
- Document file locations the application reads or writes (settings, caches, logs) and any native integrations (tray, file associations, protocol handlers).
- In development docs, explain the process model (for example main and renderer processes) and packaging, signing, and notarization steps.

### `cli`

- Write in a reference style: readers scan for a command, run it, and read the output.
- Give each command or command group its own section or page with a synopsis line, arguments, options (with aliases, types, and defaults), and at least one runnable example with its expected output.
- Show commands in fenced `bash` code blocks. Use `<placeholder>` syntax for required values and `[optional]` for optional ones, matching the CLI's own help output where it exists.
- Document global options, configuration files and their lookup order, environment variables, exit codes, and stdin/stdout/stderr behavior when the source defines them.
- In installation docs, cover global install, `npx`-style execution, and standalone binaries only as the manifests and release configuration support.

### `service`

- Write for developers and operators who integrate with, deploy, or maintain a headless service; there are usually no end-user flows.
- Replace "Main user flows" with the service's interface: HTTP or RPC endpoints, message topics or queues, scheduled jobs, and the contracts for each (request and response shapes, status codes, errors), verified against handlers and schemas.
- Give authentication, rate limits, versioning, and idempotency their own coverage when the source implements them.
- Emphasize operations: configuration, required backing services (databases, caches, brokers), health and readiness checks, logging, metrics, scaling, and graceful shutdown.
- Include `curl` or client-library examples for the most important endpoints.

### Custom variants

`variant` may be any string. For a value not listed above, interpret it as the application's deployment target or platform (for example `extension`, `worker`, `embedded`, `game`). Choose the closest listed variant as a starting point, then adapt its guidance to the conventions of that platform as shown by the source. If the value is ambiguous, state in the overview how the application is delivered and used, based on the source, and use the general guidance in this file.

For an application with both `backend` and `frontend`, apply the variant to the user-facing side and document the backend with the `service` guidance for its interface and operations, unless the configured variant is itself `service`.

Possible documentation sections include:

## Overview and capabilities

Explain who the application serves, its main capabilities, and the boundaries of each configured application. Identify the supported entry points, such as web routes, CLI commands, APIs, or scheduled jobs, from the source. If a capability is incomplete or behind a feature flag, describe that status only when the source establishes it.

## Getting started

List prerequisites, setup steps, configuration, and the commands to run, test, or build the application. Use the package scripts and checked-in configuration as the source of truth. Explain which services are needed and how a reader can confirm the application started when that information is available. Name required environment variables and their purpose without including secret values or inventing defaults.

## Main user flows

Walk through meaningful tasks in the order a user performs them. For each flow, identify its entry point, required inputs or permissions, important states, and visible result. Add screenshots or examples when available and useful. Cover errors and recovery paths supported by the UI, handlers, or tests; do not infer behavior from route names alone.

## Architecture and data flow

Show the major frontend, backend, storage, and external-service pieces and how requests or events move between them. Document API endpoints, messages, or shared contracts only to the level verified by handlers, schemas, and callers. Explain data ownership and persistence where models or migrations support it. Keep implementation detail focused on what a developer needs to change or debug a flow.

## Configuration and integrations

Describe supported configuration options, environment variables, feature flags, authentication or authorization rules, and third-party integrations. Give the file or source that defines each contract, distinguish required from optional settings, and show safe examples when possible. Note deployment-specific values as such rather than presenting them as universal defaults.

## Development and operations

Document useful local workflows, test commands, build outputs, deployment or release steps, health checks, logs, and troubleshooting paths when the repository provides evidence for them. Separate documented commands from actions verified in a running environment. Link to existing operational documentation instead of copying procedures that have a separate owner.

Choose only sections that help this application and have supporting source. Use concise, runnable examples where practical, and mark unknown behavior or missing setup instructions as gaps rather than filling them with guesses.

## Structure

The following section outlines the documentation sections that should be created for each package within the repository.

**Note: Each documentation sections should be created in a separate markdown file within the repository.**

### Installation

Add this in a file named `installation.md`.

Provide instructions for installing the package, including any prerequisites and supported platforms. Include example commands for different package managers if applicable.

### Quick start

Add this in a file named `quick-start.md`.

Provide a small working example using the package, including the minimum required setup and expected result. Include any important notes or common pitfalls for new users.

### Configuration

Add this in a file named `configuration.md`.

Document public options, environment variables, plugins, adapters, callbacks, or customization hooks. Show valid values and precedence when implementation or tests define them. Describe what consumers must implement and how extensions are registered; omit speculative extension patterns.

### API reference

Add this in a file named `api-reference.md`.

Document the public functions, classes, components, hooks, commands, or types provided by the package. Include their signatures, required and optional inputs, defaults, return values, side effects, errors, and short usage examples when applicable. Include overloads, generics, asynchronous behavior, or lifecycle rules only when they affect correct use. Link to the owning export and avoid documenting internal symbols as supported interfaces.

### Compatibility and integration

Add this in a file named `integration.md`.

State supported runtimes, module formats, platform requirements, and version or peer dependency constraints from manifests and tests. Show how related packages integrate when public examples demonstrate it. Describe migration or breaking changes only when release notes, changelogs, or source history provide reliable evidence.

### Development and troubleshooting

Add this in a file named `troubleshooting.md`.

Include repository-supported build and test commands for contributors, plus common errors and their remedies when tests or existing documentation establish them. Keep consumer instructions distinct from contributor workflows. Link to existing release or maintenance guides when they are authoritative.

This section is optional and should be included only if the package has specific development or troubleshooting guidance that is not covered elsewhere.

### Contributing

Add this in a file named `contributing.md`.

Provide guidelines for contributing to the package, including how to report issues, submit pull requests, and follow the code of conduct. Include any specific requirements for commit messages, branching strategies, or review processes.

### License

Add this in a file named `license.md`.

Include information about the licensing of the package, including any restrictions or obligations for users and contributors.

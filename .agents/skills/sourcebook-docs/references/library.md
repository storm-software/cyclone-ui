# Library documentation

Use for `type: "library"`.

Read `packages` as one workspace-relative path or an array of paths. Discover package boundaries from manifests when a path contains several packages.

For each library, document its purpose, public entry points, installation or import details supported by the repository, and representative usage grounded in exported APIs. Explain important package relationships when relevant. With local output, put each package's documentation in that package's `outputPath`; with shared output, use distinct package names to avoid overwriting pages.

Inspect package manifests, export maps, public types, source, tests, and examples to distinguish supported APIs from internal helpers. Organize pages so readers can decide whether to use the package, get a first example working, and find the contract for a specific API. Start with a short overview and navigation. Split substantial guides or API groups into their own pages, linking to shared concepts rather than repeating them across packages.

Possible documentation sections include:

## Overview and package map

Explain the problem each package solves, its intended consumers, and how related packages fit together. Identify public package names and entry points from manifests and exports. If several packages are configured, make their distinct responsibilities and dependency relationships easy to find.

## Installation and setup

Show installation or workspace dependency instructions supported by the repository, including required peer dependencies, runtime requirements, and initialization or configuration steps. Distinguish a published import from a repository-only path. Use the package's actual export map and examples for import statements; do not recommend private source paths as public APIs.

## Quick start and task guides

Provide a small working example using exported APIs, with the minimum required setup and expected result. Add focused guides for common tasks or combinations of APIs when the source and tests establish a supported workflow. Explain important choices and failure cases alongside the example instead of relying on an unexplained code block.

## API reference

Group public functions, classes, components, hooks, commands, or types by purpose. For each meaningful API, describe its signature, required and optional inputs, defaults, return value, side effects, errors, and a short usage example when those details are established by source. Include overloads, generics, asynchronous behavior, or lifecycle rules only where they affect correct use. Link to the owning export and avoid documenting internal symbols as supported interfaces.

## Configuration and extension points

Document public options, environment variables, plugins, adapters, callbacks, or customization hooks. Show valid values and precedence when implementation or tests define them. Describe what consumers must implement and how extensions are registered; omit speculative extension patterns.

## Compatibility and integration

State supported runtimes, module formats, platform requirements, and version or peer dependency constraints from manifests and tests. Show how related packages integrate when public examples demonstrate it. Describe migration or breaking changes only when release notes, changelogs, or source history provide reliable evidence.

## Development and troubleshooting

Include repository-supported build and test commands for contributors, plus common errors and their remedies when tests or existing documentation establish them. Keep consumer instructions distinct from contributor workflows. Link to existing release or maintenance guides where they are authoritative.

Choose only sections that help the package and have supporting source. Keep examples aligned with the current public API, and mark missing information as a gap rather than presenting assumptions as guarantees.

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

### Development and troubleshooting

Add this in a file named `troubleshooting.md`.

Include repository-supported build and test commands for contributors, plus common errors and their remedies when tests or existing documentation establish them. Keep consumer instructions distinct from contributor workflows. Link to existing release or maintenance guides when they are authoritative.

This section is optional and should be included only if the package has specific development or troubleshooting guidance that is not covered elsewhere.

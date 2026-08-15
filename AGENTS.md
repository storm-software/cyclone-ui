# Cyclone UI — Agent Guidelines

Guidance for AI agents working in the [cyclone-ui](https://github.com/storm-software/cyclone-ui) monorepo.

## External packages — do not patch

The following Storm Software ecosystems are maintained in **separate repositories**. Do **not** modify their package code, vendored scaffolding, or `node_modules` contents in this repo — including via `patch-package`, manual edits under `node_modules`, or direct changes to generated integration layers.

| Ecosystem | Upstream repository | In this repo (do not patch) |
| --- | --- | --- |
| **powerlines** | [storm-software/powerlines](https://github.com/storm-software/powerlines) | `powerlines`, `@powerlines/*`, and Powerlines-generated CLI scaffolding |
| **power-plant** | [storm-software/power-plant](https://github.com/storm-software/power-plant) | `@power-plant/*` and any power-plant schema or tooling packages |
| **shell-shock** | [storm-software/shell-shock](https://github.com/storm-software/shell-shock) | `@shell-shock/*` and `apps/cli/.shell-shock/` |
| **razorwind** | [storm-software/razorwind](https://github.com/storm-software/razorwind) | `@razorwind/*` |
| **storm-ops** | [storm-software/storm-ops](https://github.com/storm-software/storm-ops) | Reusable workflows, devenv modules, Terraform modules, and other storm-ops artifacts consumed by reference |

**Allowed in cyclone-ui:** consumer configuration and integration owned by this repo (for example `powerlines.config.ts`, `razorwind.config.ts`, `shell-shock.config.ts`, `tools/razorwind/`, and cyclone-ui CLI command implementations under `apps/cli/src/`).

When a bug or feature belongs in one of the ecosystems above:

1. **Stop** — do not patch the external package or its vendored layer in cyclone-ui.
2. **Produce a descriptive upstream fix outline** so a human or agent can apply the change in the correct external repository.
3. **Optionally** implement only the cyclone-ui-side workaround or config change if one exists and is explicitly requested.

### Upstream fix outline template

Use this structure in the agent response (or as a draft issue/PR description for the upstream repo):

```markdown
## Upstream fix outline

**Target repository:** storm-software/<repo>
**Package(s):** <package name(s)>
**Problem:** <what is broken or missing, with reproduction steps>
**Root cause:** <why it fails in the upstream code or config>
**Proposed changes:**
- `<upstream/path/to/file>` — <what to change and why>
- `<upstream/path/to/file>` — <what to change and why>
**Implementation notes:** <edge cases, compatibility, migration steps>
**Verification:** <commands, tests, or manual checks in the upstream repo>
**Cyclone UI impact:** <what will work after the upstream fix is published and consumed>
```

Include concrete file paths, function or module names, and code-level intent so the outline can be executed without re-investigating from scratch.

## Skills and references

Project-specific agent skills live under `.agents/skills/`. Use them when relevant (for example React performance guidance in `vercel-react-best-practices`).

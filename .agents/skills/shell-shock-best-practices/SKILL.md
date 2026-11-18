---
name: shell-shock-best-practices
description: Shell Shock development guidelines from Storm Software. This skill should be used when writing, reviewing, or refactoring Shell Shock code to ensure optimal performance patterns. Triggers on tasks involving console display, CLI command updates, Shell Shock configuration, or performance improvements.
license: MIT
metadata:
  author: storm-software
  version: "1.0.0"
---

# Shell Shock and CLI Best Practices

Practical guidance for dependable, fast, scriptable command-line applications,
with Shell Shock-specific architecture rules. Apply it before changing a command,
plugin, generated entry point, console behavior, configuration, or CLI test.

## When to Apply

Use these guidelines when you are:

- Adding, changing, reviewing, or debugging a Shell Shock command or plugin.
- Designing command-line behavior: arguments, options, environment variables,
  exit codes, output, prompts, completion, or help.
- Working on startup time, I/O, child processes, configuration, updates, or
  terminal presentation in a Node.js CLI.
- Testing a CLI or deciding whether an issue belongs to Shell Shock, its
  generator dependencies, or consumer-owned configuration.

Do not treat a terminal as a browser: CLIs are commonly composed in scripts,
run in CI, piped to another process, interrupted, and invoked with stale
automation. A command's observable contract matters as much as its internal
implementation.

## Rule Categories by Priority

| Priority | Category | Goal | Prefix |
| --- | --- | --- | --- |
| 1 | Command contracts | Preserve automation and clear failure semantics | `contract-` |
| 2 | Startup and I/O | Keep common invocations fast and bounded | `startup-` |
| 3 | Process reliability | Make interruptions and partial failures safe | `process-` |
| 4 | Shell Shock architecture | Keep source, generation, and ownership correct | `shellshock-` |
| 5 | Terminal experience | Be useful in a TTY without breaking pipes or CI | `terminal-` |
| 6 | Security and configuration | Protect user data, credentials, and execution boundaries | `security-` |
| 7 | Verification | Test behavior at the right observable boundary | `test-` |

## Quick Reference

### 1. Command contracts — critical

- `contract-stable-interface` — Treat command paths, flags, defaults, output, and exit codes as a public API.
- `contract-validate-before-side-effects` — Reject invalid input before writing files, starting a process, or calling a service.
- `contract-stdout-data-stderr-diagnostics` — Keep machine-readable results on stdout and diagnostics/progress on stderr.
- `contract-explicit-exit-codes` — Use predictable nonzero codes and preserve underlying process failures when useful.
- `contract-noninteractive-first` — Make every workflow deterministic without prompts; add `--yes` only for safe, documented confirmation.
- `contract-help-is-complete` — Describe required input, defaults, environment variables, examples, and destructive effects in help.
- `contract-compatible-options` — Add options additively; avoid repurposing a flag, alias, or positional argument.
- `contract-bounded-output` — Return stable structured output when requested and avoid decoration in machine modes.

Read [command contracts](references/command-contracts.md) for rationale and review prompts.

### 2. Startup and I/O — critical

- `startup-cheap-path-first` — Parse and validate before loading optional integrations or doing I/O.
- `startup-no-surprise-network` — Do not make network calls during normal startup unless the command explicitly needs one.
- `startup-lazy-optional-features` — Dynamically load heavy or optional features only on the path that uses them.
- `startup-parallel-independent-io` — Start independent reads together, then await results at their point of use.
- `startup-bound-concurrency` — Cap parallel work when operating over user-controlled input.
- `startup-cache-by-contract` — Cache only with clear invalidation, scope, and an escape hatch.
- `startup-avoid-repeat-discovery` — Reuse resolved config and command reflection instead of rescanning within one invocation.

Read [startup and I/O](references/startup-and-io.md) before changing initialization or bulk operations.

### 3. Process reliability — high

- `process-argv-not-shell` — Spawn an executable with an argument array; never concatenate untrusted shell text.
- `process-propagate-cancellation` — Handle SIGINT/SIGTERM once, stop work, and clean up terminal state.
- `process-atomic-writes` — Write replaceable state through a temporary sibling and rename only after a complete write.
- `process-path-boundaries` — Resolve and validate filesystem paths before reading, writing, or deleting.
- `process-cleanup-owned-resources` — Clean up only resources the command created, including temporary files and child processes.
- `process-timeout-external-work` — Bound child processes and remote calls, with a useful timeout diagnostic.
- `process-preserve-cause` — Add operation context to errors without discarding the original cause or exit status.

Read [process reliability](references/process-reliability.md) for patterns that survive cancellation and partial failure.

### 4. Shell Shock architecture — high

- `shellshock-source-not-generated` — Change command source, config, or generator templates; do not hand-edit generated output.
- `shellshock-file-routing` — Let the command directory and dynamic segments express the command tree.
- `shellshock-declare-command-schema` — Keep command exports, options, arguments, aliases, and descriptions unambiguous for reflection.
- `shellshock-framework-builtins` — Use generated Shell Shock utilities for flags, output, terminal capability, and lifecycle rather than duplicate ad hoc logic.
- `shellshock-global-option-consistency` — Preserve inherited global options and their documented CI/noninteractive behavior.
- `shellshock-plugin-boundaries` — Keep framework behavior in the owning plugin or preset; use consumer configuration for consumer policy.
- `shellshock-external-ownership` — Do not patch Powerlines, Power Plant, or other external ecosystems from a consuming repository.

Read [Shell Shock architecture](references/shell-shock-architecture.md) before modifying routing, templates, builtins, or plugins.

### 5. Terminal experience — medium

- `terminal-capability-aware` — Respect TTY, CI, `NO_COLOR`, terminal width, and explicit user flags.
- `terminal-no-prompt-in-pipes` — Never wait for interactive input without a usable TTY and explicit interactive intent.
- `terminal-progress-on-stderr` — Keep spinners, progress, banners, and transient status out of data streams.
- `terminal-console-display` — When `@shell-shock/plugin-console` is enabled, use `shell-shock:console` helpers instead of direct `console.*` calls.
- `terminal-clean-interrupt` — Stop renderers and restore the cursor before reporting an interrupt or failure.
- `terminal-actionable-errors` — State what failed, the relevant input, the next corrective action, and details only when useful.
- `terminal-accessible-text` — Do not convey essential meaning through color, Unicode decoration, or animation alone.

Read [terminal experience](references/terminal-experience.md) when changing console, prompt, theme, banner, or help behavior.
Read [console display](references/console-display.md) when writing command output with `@shell-shock/plugin-console`.

### 6. Security and configuration — medium

- `security-redact-secrets` — Never echo credentials, tokens, or sensitive environment values in output, errors, fixtures, or telemetry.
- `security-explicit-config-precedence` — Document and implement a predictable order for flags, environment, config files, and defaults.
- `security-safe-default-paths` — Avoid destructive defaults; require an explicit target or confinement to a known workspace.
- `security-no-implicit-code-execution` — Do not evaluate config or execute hooks from an untrusted directory without an explicit trust boundary.
- `security-minimize-environment-leakage` — Pass only needed environment variables to child processes and generated artifacts.

Read [security and configuration](references/security-and-configuration.md) for sensitive inputs and filesystem-affecting commands.

### 7. Verification — medium

- `test-contract-first` — Test command paths, parsing, output streams, exit status, and filesystem effects as observable behavior.
- `test-pure-logic-directly` — Unit test validation, normalization, and selection logic without a terminal or process when possible.
- `test-child-process-boundary` — Use child-process integration tests for argument parsing, signals, and stdout/stderr separation.
- `test-deterministic-environment` — Control CWD, environment, time, locale, terminal capability, and temporary directories.
- `test-generated-output-downstream` — Verify generated files through the generator and consumer behavior, never by manually changing artifacts.
- `test-narrow-nx-target` — Discover the resolved Nx target, then run the narrowest relevant test, lint, typecheck, or build.

Read [verification](references/verification.md) before claiming a CLI behavior is fixed.

## Working Method

1. Identify the command contract and whether output is interactive, human-only,
   or intended for another program.
2. Read the one category reference that matches the risky boundary, rather than
   applying every rule mechanically.
3. Locate the owner before editing. In Shell Shock, source modules and
   templates are authoritative; emitted command files and reflection data are
   evidence, not editing targets.
4. Choose the smallest compatible change. Additive options and explicit modes
   are safer than changing existing defaults or text that automation may parse.
5. Verify at the affected boundary: pure logic, generated output, a real
   subprocess, or an interactive terminal as appropriate.

## Shell Shock Landmarks

- Command metadata and reflection live under `packages/core/src/types/command.ts`
  and `packages/core/src/resolver/`.
- Generated script entrypoints come from `packages/preset-script/src/components/`.
- Shared CLI flags and CI/noninteractive defaults are defined by
  `packages/preset-script` and `packages/preset-cli`.
- Terminal capability and output helpers are generated from core and console
  plugins; prefer those surfaces over `process.stdout` or raw ANSI handling.
- Framework/preset/plugin changes belong in this repository. A defect inside
  `@powerlines/*` or `@power-plant/*` belongs upstream: provide a precise
  upstream fix outline rather than patching a vendored dependency.

## Review Checklist

- Could an existing script or CI job observe a changed path, option, output,
  prompt, exit code, or side effect?
- Is the default invocation fast, noninteractive, and free of surprise network
  work?
- Are output, color, prompts, and progress safe when piped, captured, or run in
  CI?
- Can interruption leave corrupted state, an orphaned child, or a broken
  terminal?
- Is the change in an authoritative owner, and does the chosen test prove the
  claimed user-visible behavior?

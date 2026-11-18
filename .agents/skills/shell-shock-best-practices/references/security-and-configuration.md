# Security and configuration

CLI defaults reach user files, credentials, and arbitrary repositories. Make trust and precedence visible.

## `security-redact-secrets`

Treat tokens, passwords, API keys, authorization headers, private paths, and secret-bearing environment variables as sensitive. Redact them from errors, debug logs, snapshots, generated examples, telemetry, and child-process diagnostics.

## `security-explicit-config-precedence`

Document a stable precedence order, typically explicit flags over environment over project/user configuration over defaults. Reject contradictory settings rather than silently selecting one. Shell Shock's environment-backed option defaults should complement, not obscure, this order.

## `security-safe-default-paths`

Default reads and writes to the current project only when the project boundary is validated. Require an explicit target or confirmation for broad mutation. Show the resolved target before destructive work in interactive mode.

## `security-no-implicit-code-execution`

Configuration, plugins, package scripts, and hooks can execute code. Do not discover and evaluate them from arbitrary parents or a user-controlled path without a clear opt-in or trust decision. Parse data as data whenever possible.

## `security-minimize-environment-leakage`

Build an allowlist for child process environments when secrets or deployment credentials may be present. Do not serialize all of `process.env` into diagnostics, generated files, or caches.

## Review prompts

- Could this input cause code execution or a filesystem write outside a trusted project?
- If the command fails, which sensitive values could enter its error output?
- Can a user predict which flag, environment variable, or config value wins?

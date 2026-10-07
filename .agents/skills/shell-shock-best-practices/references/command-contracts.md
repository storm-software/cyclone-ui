# Command contracts

A CLI is an API for people and automation. Make behavior explicit before optimizing implementation details.

## `contract-stable-interface`

Preserve command paths, option names, aliases, positional order, defaults, output shape, and exit codes. Add an option instead of changing the meaning of one that callers may already use. Deprecate deliberately and keep compatibility shims when the cost is reasonable.

## `contract-validate-before-side-effects`

Parse and validate all user-controlled values before mutations, child processes, prompts, or network calls. In Shell Shock, describe arguments and options so command reflection and generated validation can catch malformed invocations consistently.

## `contract-stdout-data-stderr-diagnostics`

When a command can be piped or asked for JSON, stdout is the data channel. Put warnings, verbose logs, progress, banners, and errors on stderr. Do not mix decoration into an output format that another program must parse.

## `contract-explicit-exit-codes`

Return zero only for success. Use nonzero failures consistently and retain a child process's status where it explains the failure. Do not call `process.exit()` deep in reusable logic; let the command lifecycle decide when cleanup is complete.

## `contract-noninteractive-first`

Every operation must have a deterministic noninteractive path. Require a flag or input value for destructive decisions, and make `--yes` mean a documented, narrow confirmation policy—not permission to guess missing values.

## `contract-help-is-complete`

Help should reveal the command syntax, required and optional input, defaults, environment-variable support, examples, side effects, and recovery path. Keep description text aligned with the actual command schema so generated help remains trustworthy.

## `contract-compatible-options`

Use long, descriptive options; reserve short aliases for durable high-frequency behavior. Avoid ambiguous negative flags and aliases that collide with global options. An option with a potentially secret value should not be silently exposed through verbose output.

## `contract-bounded-output`

Offer a documented structured mode only when consumers need it. Keep key names, ordering expectations, nullability, and errors stable. Large result sets need filtering, pagination, streaming, or an explicit bounded default.

## Review prompts

- What can a shell script observe before and after this change?
- Can invalid input trigger a side effect before the user sees a useful failure?
- Does the same command finish predictably in CI with stdin closed?

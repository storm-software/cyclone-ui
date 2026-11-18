# Terminal experience

Useful interactive output must degrade cleanly when captured, piped, or run by CI.

## `terminal-capability-aware`

Use framework capability helpers for TTY detection, color support, Unicode support, terminal dimensions, CI, and minimal mode. Respect explicit `--color`/`--no-color` behavior and `NO_COLOR`; do not infer terminal features from platform alone.

## `terminal-no-prompt-in-pipes`

Prompt only when stdin is a usable TTY and interactive mode is enabled. In CI, noninteractive mode, or a pipe, fail with the missing input and a flag or environment variable that supplies it. Do not hang waiting for stdin that will never answer.

## `terminal-progress-on-stderr`

Put spinners, progress bars, banners, and transient status on stderr. Suppress or degrade them in noninteractive contexts. stdout must remain clean for data, command substitution, and redirection.

## `terminal-clean-interrupt`

Start renderers through a lifecycle that stops them on success, error, and signals. Clear transient lines and restore the cursor before emitting a final error; otherwise a cancelled command corrupts the next shell prompt or captured log.

## `terminal-actionable-errors`

Lead with the failed action and target, then the corrective step. Use detail or stack traces behind verbose/debug mode. Do not replace a specific cause with a generic “something went wrong.”

## `terminal-accessible-text`

Use color, symbols, borders, and animation as enhancement only. Include text labels for success, warning, and failure; select ASCII fallback when Unicode is unavailable; wrap to actual terminal dimensions and avoid essential information in a spinner frame.

## Review prompts

- What does the command emit with stdout redirected and stderr captured?
- Could a no-TTY invocation block or print escape codes into a file?
- Can a user understand the failure with color disabled and no verbose mode?

# Process reliability

Commands are interrupted, run from unexpected directories, and fail mid-write. Design the failure path as carefully as the happy path.

## `process-argv-not-shell`

Use Shell Shock's process helper or an equivalent executable-plus-argument-array API. Treat a shell as an interpreter, not a convenience: concatenated user input enables quoting bugs and command injection. Use a shell only for a reviewed shell script with no untrusted interpolation.

## `process-propagate-cancellation`

On SIGINT or SIGTERM, stop accepting new work, propagate cancellation to owned child processes, await bounded cleanup, and then exit with the appropriate status. Register lifecycle cleanup once; avoid handlers scattered through command helpers.

## `process-atomic-writes`

For replaceable state, write a complete temporary file in the destination directory, fsync when durability matters, and rename it into place. Do not truncate the old file before the replacement is ready. Preserve permissions and report the intended path if replacement fails.

## `process-path-boundaries`

Resolve paths against an explicit base and verify that the result remains inside the allowed root before destructive actions. Handle symlinks deliberately. Never derive a deletion target from unvalidated command text.

## `process-cleanup-owned-resources`

Track temporary files, lock files, spinners, and child processes created by this invocation. Clean up those resources in success, error, and cancellation paths; never broadly clean a shared directory that could contain a concurrent invocation's state.

## `process-timeout-external-work`

Put a timeout, cancellation path, and useful operation name around child processes and remote calls. A timeout is not a substitute for cleanup: terminate the child and drain or close its streams before returning the diagnostic.

## `process-preserve-cause`

Wrap errors with the command, target, and action that failed, while retaining the original error as a cause. Preserve exit status, signal, stderr, and retryability where those guide a user or calling program.

## Review prompts

- What happens if the process receives Ctrl-C during each side effect?
- Can this path ever overwrite or delete outside the intended workspace?
- Does the error say what operation and target failed without leaking secrets?

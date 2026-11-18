# Verification

Prove the behavior a caller can observe. A green build alone does not demonstrate a usable command.

## `test-contract-first`

For each meaningful command change, test command spelling, argument and option parsing, defaulting, help, stdout, stderr, exit code, and side effects. The contract test is the regression boundary; implementation tests support it.

## `test-pure-logic-directly`

Keep selection, validation, path normalization, and output transformation in small pure units where possible. Unit tests for those units are fast and pinpoint a failure without needing a terminal or generated binary.

## `test-child-process-boundary`

Use a real child process for behavior owned by Node process state: argument parsing, stream separation, exit status, environment inheritance, CWD, and signal handling. Capture stdout and stderr separately.

## `test-deterministic-environment`

Use a temporary directory and explicitly set CWD, environment, terminal capability, locale, clock, and network fixture behavior. A test that accidentally reads a developer's home, Git config, or terminal is not portable evidence.

## `test-generated-output-downstream`

When changing a generator, first test its source-level logic, then generate output and execute or inspect the generated consumer at the relevant boundary. Never hand-edit an artifact just to make a downstream assertion pass.

## `test-narrow-nx-target`

Inspect the resolved Nx project and target before running work. Run the smallest matching target through the workspace package manager and `devenv shell --` when `devenv.nix` exists; expand to wider checks only when the changed surface requires it.

## Review prompts

- Does this test fail if the user-visible behavior regresses?
- Does it accidentally depend on the current machine, network, or terminal?
- Is build success being mistaken for generation, execution, or release proof?

# Shell Shock architecture

Shell Shock turns file-based command definitions into reflected metadata and generated entrypoints. Preserve that source-of-truth flow.

## `shellshock-source-not-generated`

Edit command modules, configuration, presets, plugins, or generator templates. Do not patch emitted files, generated type declarations, command reflection data, or a build directory to simulate a generator fix. Regenerate and test the consumer instead.

## `shellshock-file-routing`

Use the command directory layout to express command paths, nesting, and dynamic segments. Keep a command module focused on command behavior; do not rebuild a parallel router in a handler. A virtual route groups child commands and should not pretend to be an executable leaf.

## `shellshock-declare-command-schema`

Give every command, argument, and option an unambiguous name, type, description, aliases, defaults, and required/variadic status. The resolver reflects this information into validation, help, types, and generated invocation code, so ambiguous metadata becomes user-facing ambiguity.

## `shellshock-framework-builtins`

Prefer Shell Shock's generated flag, state, console, environment, process, and terminal-capability helpers. They centralize CI, `NO_COLOR`, help, quiet mode, signal, and platform behavior that raw `process` access often misses.

## `shellshock-global-option-consistency`

Preserve inherited global options such as help, version, verbosity, quiet, color, and noninteractive behavior. A command-specific option must not shadow a global alias or bypass the framework's automatic CI defaults.

## `shellshock-plugin-boundaries`

Put reusable framework behavior in the owning Shell Shock plugin or preset; put application policy in the consumer's `shell-shock.config.*` and command source. Avoid coupling unrelated plugins through generated artifacts or internal implementation paths.

## `shellshock-external-ownership`

Do not modify `@powerlines/*`, `@power-plant/*`, `@mindctl/*`, `@razorwind/*`, `@cyclone-ui/*`, or vendored/generated dependency code from a consuming repository. Identify the external owner, document a precise upstream fix, and only add a consumer workaround when explicitly requested.

## Review prompts

- Which source file will regenerate the observed output?
- Is this a framework behavior, a preset policy, a plugin feature, or application configuration?
- Does the schema describe the command well enough for both generated help and an agent to use it safely?

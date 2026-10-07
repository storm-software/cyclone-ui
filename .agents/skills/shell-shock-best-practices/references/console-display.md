# Console display

When `@shell-shock/plugin-console` is enabled, prefer the output helpers from
`shell-shock:console` over direct built-in `console` calls. The generated
helpers apply the configured Shell Shock theme and terminal formatting
consistently, while raw `console.log`, `console.info`, `console.error`, and
`console.debug` bypass that display layer.

## `terminal-console-display`

Import and use the helper that communicates the intended output:

```ts
import {
  debug,
  error,
  info,
  write,
  writeLine
} from "shell-shock:console";

write("Fetching package metadata…");
writeLine("Done", { color: "primary" });
info("Using the configured registry.");
debug("Resolved package target: example-package");
error("Unable to publish the package.");
```

Use `write` for a direct value and `writeLine` when the configured padding,
color, and line formatting should apply. Use semantic helpers such as `info`,
`debug`, `warn`, `success`, and `error` for user-facing status and diagnostics.
They route output through the plugin's themed message display and select the
appropriate underlying console channel.

Do not replace a deliberately chosen output stream merely to use a helper.
For machine-readable output, keep stdout's contract clean and send progress or
diagnostics to stderr as required by the command contract. The rule applies to
human-facing terminal display when the console plugin owns presentation.

## Review prompts

- Does this command have `@shell-shock/plugin-console` enabled before importing
  `shell-shock:console`?
- Does a direct `console.*` call bypass configured theme, spacing, wrapping, or
  message formatting that a console helper should provide?
- Is JSON or other machine-readable stdout still free of human display text?

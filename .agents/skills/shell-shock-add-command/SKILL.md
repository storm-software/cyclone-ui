---
name: shell-shock-add-command
description: Add a new command (or sub-command) to an existing Shell Shock CLI project — asks for the project location, finds the commands directory from shell-shock.config.ts, and writes `<input>/<path>/command.ts` with options, positional arguments, metadata and a handler that match the project's existing style, then builds and checks `--help`. Use whenever the user wants to add, create, generate, or scaffold a command, sub-command, nested command, or verb in a Shell Shock / @shell-shock CLI, e.g. "add a `deploy` command to my cli", "I need `db migrate` in my shell-shock app", "new command that takes a file and a --force flag", even if they don't say "Shell Shock" but the project has a shell-shock.config.ts. For creating a brand-new project, use shell-shock-init instead.
---

# Add a command to a Shell Shock project

Shell Shock is file-routed: every `command.ts` under the commands directory becomes a command of the generated binary, named by its folder path. Adding a command is therefore just writing one file in the right place — no registry, no config edit.

## 1. Get the project location

Ask the user where the Shell Shock project is (the folder containing `shell-shock.config.ts`), unless they already gave a path in this conversation. Offer the current working directory as the default if it contains a `shell-shock.config.ts`. Asking matters because monorepos often hold several CLIs, and writing the command into the wrong one is silent — it simply won't show up.

Confirm the location by checking for `shell-shock.config.{ts,mts,js,mjs}` there. If it's missing, say so and ask again (or point to the `shell-shock-init` skill if they actually want a new project) — don't guess a nearby folder.

## 2. Find the commands directory

Read the config. The `input` field is the commands directory relative to the project root; **if absent it defaults to `src`**. (e.g. `input: "src/commands"` → commands live in `src/commands/`.)

List the existing `command.ts` files there. They tell you:
- which names are taken (don't overwrite an existing `command.ts` without asking),
- the style to copy — **plain TS interface + JSDoc** for options, or **zod** `options`/`args` exports. Match what the project already uses; if there are no commands yet, use zod if `zod` is in `package.json`, otherwise the interface style,
- whether handlers import `shell-shock:console` (`info`, `warn`, …) or use `console.log`.

## 3. Work out the command shape

From the user's request decide: path, options (flags), positional arguments, and what the handler does. Ask only about things you genuinely can't infer — a short sensible default (with `.describe()`/JSDoc saying what it is) beats an interrogation.

### Path → file location

| Invocation | File |
|---|---|
| `<cli> deploy` | `<input>/deploy/command.ts` |
| `<cli> db migrate` | `<input>/db/migrate/command.ts` |
| `<cli> run <task> local` | `<input>/run/[task]/local/command.ts` — `[name]` folder is a dynamic segment |
| organisational folder, not part of the command name | `(group)/` or `_group/` |

Folder names are the command names, so use kebab-case. A parent folder doesn't need its own `command.ts`.

### Handler signature

The `default` export is the handler. **First parameter = parsed options object; the remaining parameters are positionals, in order** — dynamic-segment values first (one per `[segment]` in the path), then the command's own args. An array-typed final parameter (`src: string[]`) takes a variable number of values. The handler may be `async`.

### Interface style

```ts
interface DeployOptions {
  /**
   * The environment to deploy to.
   */
  env: string;

  /**
   * Skip the confirmation prompt.
   */
  force: boolean;
}

/**
 * Deploy the application to an environment.
 *
 * @param options - The deploy options.
 * @param target - The service to deploy.
 */
function deploy(options: DeployOptions, target: string) {
  console.log("Deploying", target, "to", options.env, "force:", options.force);
}

export default deploy;
```

Options and args are reflected from the types; the JSDoc text becomes help output, and the function's JSDoc becomes the command description.

### Zod style

```ts
import { defineMetadata } from "@shell-shock/core";
import { info } from "shell-shock:console";
import * as z from "zod";

export const metadata = defineMetadata({
  title: "Deploy",
  description: "Deploy the application to an environment.",
  alias: "d",
  icon: "🚀"
});

export const options = z.object({
  env: z.string().default("staging").describe("The environment to deploy to."),
  force: z.boolean().default(false).describe("Skip the confirmation prompt.")
});

export const args = z.tuple([z.string().describe("The service to deploy.")]);

/**
 * Deploy the application to an environment.
 *
 * @param opts - The parsed command options.
 * @param target - The service to deploy.
 */
async function deploy(
  opts: z.output<typeof options>,
  target: z.output<typeof args>[0]
) {
  info(`Deploying ${target} to ${opts.env} (force=${opts.force})`);
}

export default deploy;
```

`metadata` is optional in either style; add it when the user wants an alias, icon or a title different from the folder name. Pick an `alias` that no sibling command already uses.

If the other commands in the project carry a license header or other boilerplate, copy it.

### Handler body

Implement what the user asked for if it's clear and self-contained (read a file, call an API they named, etc.). If the behaviour is vague, write a minimal body that prints the parsed inputs and leave a `// TODO:` describing what's left — say so in your summary rather than inventing business logic.

## 4. Build and verify

Find how the project builds: the `build` script in `package.json` (often `node build.mjs`), or an Nx target (`<pm> nx build <project>`) if it has a `project.json`. Use the package manager implied by the lockfile.

1. Build. Expect `dist/bin.mjs` (or the configured output) to be regenerated.
2. `node dist/bin.mjs <command path> --help` — every option and argument you declared should appear with its description.
3. Run it once with sample values and check the output.
4. `node dist/bin.mjs --help` — the new command should be listed.

If the build fails, read the error before changing anything. Common causes: file not named exactly `command.ts`, placed outside the `input` directory, or a type error. Type errors on `shell-shock:*` imports before the first build are expected — the build generates `shell-shock.d.ts`.

If you can't build (deps not installed, user declined), say the command is unverified rather than implying it works.

## 5. Report

Tell the user: the file created (path), the invocation (`<cli> db migrate <name> --dry-run`), the options/args it accepts, whether the handler is complete or has a TODO, and the build/`--help` results you actually observed.

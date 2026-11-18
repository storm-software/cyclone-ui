/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

/* eslint-disable test/no-import-node-test */

import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const script = fileURLToPath(new URL("./lint.mjs", import.meta.url));

// Exercise the real script and zx argument parsing, intercepting subprocesses
// so hook routing can be checked without autofixing the developer's checkout.
async function runLint(args, { files = [], fail = "" } = {}) {
  const root = await mkdtemp(join(tmpdir(), "cyclone-lint-"));
  const log = join(root, "commands.jsonl");
  try {
    const bin = join(root, "bin");
    await mkdir(bin);
    await writeFile(
      join(bin, "pnpm"),
      `#!${process.execPath}
const fs = require("node:fs");
const args = process.argv.slice(2);
fs.appendFileSync(process.env.LINT_COMMAND_LOG, JSON.stringify(args) + "\\n");
if (${JSON.stringify(fail)} && args.includes(${JSON.stringify(fail)})) process.exit(1);
`,
      { mode: 0o755 }
    );
    for (const file of files) {
      await mkdir(dirname(join(root, file)), { recursive: true });
      await writeFile(join(root, file), file.endsWith(".json") ? "{}\n" : "");
    }
    let code = 0;
    let output;
    try {
      output = await execFileAsync(process.execPath, [script, ...args], {
        cwd: root,
        env: {
          ...process.env,
          PATH: `${bin}:${process.env.PATH}`,
          LINT_COMMAND_LOG: log
        }
      });
    } catch (error) {
      code = error.code;
      output = error;
    }
    const commands = await readFile(log, "utf8").catch(error => {
      if (error.code === "ENOENT") return "";
      throw error;
    });

    return {
      code,
      stdout: output.stdout,
      stderr: output.stderr,
      commands: commands.trim().split("\n").filter(Boolean).map(JSON.parse)
    };
  } finally {
    await rm(root, { recursive: true, force: true });
  }
}

test("staged source files lint once without Nx or workspace checks", async () => {
  const files = ["src/first.ts", "src/it's a component.tsx"];
  const { code, commands } = await runLint(["--staged", "--files", ...files], {
    files
  });
  assert.equal(code, 0);
  assert.equal(commands.length, 1);
  assert.deepEqual(commands[0].slice(0, 2), ["exec", "eslint"]);
  assert.deepEqual(commands[0].slice(-files.length), files);
});

test("staged Markdown uses literal filenames without project-wide globs", async () => {
  const files = ["docs/[guide].md", "docs/example.mdx"];
  const { code, commands } = await runLint(["--staged", "--files", ...files], {
    files
  });
  assert.equal(code, 0);
  const markdown = commands.find(command => command[1] === "markdownlint-cli2");
  assert.ok(markdown);
  assert.ok(markdown.includes("--no-globs"));
  for (const file of files) assert.ok(markdown.includes(`:${file}`));
  assert.ok(
    !commands.some(
      command => command.includes("nx") || command.includes("storm-lint")
    )
  );
});

for (const file of [
  "packages/example/package.json",
  "pnpm-workspace.yaml",
  "pnpm-lock.yaml",
  "package-lock.json",
  "npm-shrinkwrap.json",
  "yarn.lock",
  "bun.lock",
  "bun.lockb"
]) {
  test(`staged ${file} triggers package checks without Actions Up`, async () => {
    const { code, commands } = await runLint(["--staged", "--files", file], {
      files: [file]
    });
    assert.equal(code, 0);
    const storm = commands.find(command => command[1] === "storm-lint");
    assert.ok(storm);
    assert.ok(storm.includes("--skip-actions-up"));
    assert.ok(!storm.includes("--skip-manypkg"));
    assert.ok(!storm.includes("--skip-deps-version"));
    assert.ok(!commands.some(command => command.includes("nx")));
  });
}

test("workflow changes run Actions Up without package checks", async () => {
  const file = ".github/workflows/check.yml";
  const { code, commands } = await runLint(["--staged", "--files", file], {
    files: [file]
  });
  assert.equal(code, 0);
  const storm = commands.find(command => command[1] === "storm-lint");
  assert.ok(storm);
  assert.ok(storm.includes("--skip-deps-version"));
  assert.ok(storm.includes("--skip-manypkg"));
  assert.ok(!storm.includes("--skip-actions-up"));
});

test("deleted manifests still trigger package checks but are not linted", async () => {
  const { code, commands } = await runLint([
    "--staged",
    "--files",
    "packages/removed/package.json"
  ]);
  assert.equal(code, 0);
  assert.equal(commands.length, 1);
  assert.equal(commands[0][1], "storm-lint");
});

test("empty, deleted, and unsupported staged file sets never fall back to full lint", async () => {
  for (const files of [[], ["src/deleted.ts"], ["flake.nix"]]) {
    const { code, commands } = await runLint(
      ["--staged", "--files", ...files],
      { files: files.filter(file => file.endsWith(".nix")) }
    );
    assert.equal(code, 0);
    assert.deepEqual(commands, []);
  }
});

test("full lint retains Nx and all workspace checks", async () => {
  const { code, commands } = await runLint([]);
  assert.equal(code, 0);
  assert.equal(commands.length, 3);
  assert.ok(commands[1].includes("run-many"));
  assert.ok(commands[2].includes("storm-lint"));
  assert.ok(!commands[2].includes("--skip-actions-up"));
  assert.ok(!commands[2].includes("--skip-manypkg"));
});

test("explicit full mode retains affected project checks", async () => {
  const { code, commands } = await runLint([
    "--full",
    "--files",
    "src/first.ts",
    "src/second.ts"
  ]);
  assert.equal(code, 0);
  assert.ok(commands[1].includes("affected"));
  assert.ok(commands[1].includes("--files=src/first.ts,src/second.ts"));
});

test("the shared Lefthook --files invocation selects staged mode", async () => {
  const files = ["src/first.ts"];
  const { code, commands } = await runLint(["--files", ...files], { files });
  assert.equal(code, 0);
  assert.equal(commands.length, 1);
  assert.equal(commands[0][1], "eslint");
});

test("lint failures stop the hook before workspace fixes", async () => {
  const files = ["package.json"];
  const result = await runLint(["--staged", "--files", ...files], {
    files,
    fail: "eslint"
  });
  assert.equal(result.code, 1, JSON.stringify(result));
  assert.equal(result.commands.length, 1);
});

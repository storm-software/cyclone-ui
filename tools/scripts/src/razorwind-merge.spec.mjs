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

import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import {
  cpSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import test from "vitest";
import { fileURLToPath } from "node:url";

const workspace = fileURLToPath(new URL("../../../", import.meta.url));
const source = "packages/tokens/src/tokens/primitives/tokens.json";
const output = "packages/tokens/src/js/tokens-light.js";

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), "cyclone-merge-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const env = { ...process.env, DEVENV_ROOT: root, LEFTHOOK: "1" };
  for (const key of Object.keys(env)) {
    if (key.startsWith("GIT_")) delete env[key];
  }
  env.GIT_CONFIG_NOSYSTEM = "1";
  env.GIT_CONFIG_GLOBAL = "/dev/null";
  const run = (cmd, args, extra = {}) =>
    spawnSync(cmd, args, {
      cwd: root,
      env: { ...env, ...extra },
      encoding: "utf8"
    });
  const git = (...args) => {
    const result = run("git", args);
    assert.equal(result.status, 0, result.stderr + result.stdout);
    return result.stdout.trim();
  };
  const write = (path, text) => {
    mkdirSync(dirname(join(root, path)), { recursive: true });
    writeFileSync(join(root, path), text);
  };
  for (const path of [
    ".gitattributes",
    "lefthook.yml",
    ".lefthook/devenv-run.sh"
  ]) {
    mkdirSync(dirname(join(root, path)), { recursive: true });
    cpSync(join(workspace, path), join(root, path));
  }
  // The generator alone is replaced: Git, driver registration, hooks, and
  // generated-file selection all run their production implementations.
  write(
    "bin/pnpm",
    `#!${process.execPath}
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const args = process.argv.slice(2);
if (args.join(" ") === "exec lefthook install") {
  execFileSync(${JSON.stringify(resolve(workspace, "node_modules/.bin/lefthook"))}, ["install"], {stdio:"inherit"});
} else if (args[0] === "nx" && args[1] === "sync") {
  process.exit(0);
} else if (args.join(" ") === "nx run monorepo:build-tokens") {
  fs.appendFileSync(".git/generation-log", "run\\n");
  if (process.env.FAIL_GENERATION) process.exit(1);
  const tokens = JSON.parse(fs.readFileSync(${JSON.stringify(source)}, "utf8"));
  fs.writeFileSync(${JSON.stringify(output)}, JSON.stringify(tokens) + "\\n");
  fs.mkdirSync("packages/tokens/src/css", {recursive:true});
  fs.writeFileSync("packages/tokens/src/css/tokens-new.css", "/* generated */\\n");
} else { throw new Error("Unexpected pnpm command: " + args.join(" ")); }
`
  );
  execFileSync("chmod", ["+x", join(root, "bin/pnpm")]);
  env.PATH = `${join(root, "bin")}:${env.PATH}`;
  env.LEFTHOOK_BIN = resolve(workspace, "node_modules/.bin/lefthook");
  git("init", "-b", "left");
  git("config", "user.email", "merge-test@example.com");
  git("config", "user.name", "Merge test");
  for (const path of [
    "tools/scripts/src/razorwind-merge.mjs",
    ".lefthook/razorwind-merge.sh"
  ]) {
    mkdirSync(dirname(join(root, path)), { recursive: true });
    cpSync(join(workspace, path), join(root, path));
  }
  const setup = run(process.execPath, [
    "tools/scripts/src/razorwind-merge.mjs",
    "--install"
  ]);
  assert.equal(setup.status, 0, setup.stderr + setup.stdout);
  write(source, '{\n  "first": 1,\n\n\n\n  "second": 1\n}\n');
  write(output, "base\n");
  write("notes.txt", "handwritten\n");
  git("add", ".");
  git("commit", "-m", "base");
  git("branch", "right");
  write(source, '{\n  "first": 2,\n\n\n\n  "second": 1\n}\n');
  write(output, "left\n");
  git("add", ".");
  git("commit", "-m", "left");
  git("checkout", "right");
  write(source, '{\n  "first": 1,\n\n\n\n  "second": 2\n}\n');
  write(output, "right\n");
  git("add", ".");
  git("commit", "-m", "right");
  git("checkout", "left");
  return { root, run, git, write };
}

test("merge commits contain regenerated outputs from both branches, including new outputs", t => {
  const { root, git, run } = fixture(t);
  const merge = run("git", ["merge", "right", "--no-edit"]);
  assert.notEqual(merge.status, 0);
  assert.match(merge.stderr + merge.stdout, /Outputs regenerated and staged/);
  git("commit", "-m", "merge");
  assert.equal(git("show", `HEAD:${output}`), '{"first":2,"second":2}');
  assert.equal(
    git("show", "HEAD:packages/tokens/src/css/tokens-new.css"),
    "/* generated */"
  );
  assert.equal(git("show", "HEAD:notes.txt"), "handwritten");
  assert.equal(git("status", "--porcelain"), "");
  assert.equal(
    readFileSync(join(root, ".git/generation-log"), "utf8"),
    "run\n"
  );
});

test("--no-verify cannot commit outputs before generation", t => {
  const { git, run } = fixture(t);
  const before = git("rev-parse", "HEAD");
  const merge = run("git", ["merge", "right", "--no-edit", "--no-verify"]);
  assert.notEqual(merge.status, 0);
  assert.match(merge.stderr + merge.stdout, /Outputs need regeneration/);
  assert.equal(git("rev-parse", "HEAD"), before);
  git("commit", "-m", "merge");
  assert.equal(git("show", `HEAD:${output}`), '{"first":2,"second":2}');
});

test("--no-commit merges regenerate when the merge is committed", t => {
  const { git } = fixture(t);
  git("merge", "right", "--no-commit");
  git("commit", "-m", "merge");
  assert.equal(git("show", `HEAD:${output}`), '{"first":2,"second":2}');
});

test("generation failure prevents the merge commit", t => {
  const { git, run, root } = fixture(t);
  const before = git("rev-parse", "HEAD");
  const result = run("git", ["merge", "right", "--no-edit"], {
    FAIL_GENERATION: "1"
  });
  assert.notEqual(result.status, 0);
  assert.equal(git("rev-parse", "HEAD"), before);
  assert.equal(
    readFileSync(join(root, ".git/generation-log"), "utf8"),
    "run\n"
  );
});

test("unstaged source edits are preserved and prevent generation", t => {
  const { git, write, run, root } = fixture(t);
  write("notes.txt", "keep local work\n");
  const result = run("git", ["merge", "right", "--no-edit"]);
  assert.notEqual(result.status, 0);
  assert.match(
    result.stderr + result.stdout,
    /Stage or stash unstaged changes/
  );
  assert.equal(
    readFileSync(join(root, "notes.txt"), "utf8"),
    "keep local work\n"
  );
  assert.equal(git("show", "HEAD:notes.txt"), "handwritten");
});

test("source conflicts remain unresolved until explicitly resolved", t => {
  const { root, git, run, write } = fixture(t);
  git("checkout", "right");
  write(source, '{\n  "first": 3,\n\n\n\n  "second": 2\n}\n');
  git("add", source);
  git("commit", "-m", "conflicting source");
  git("checkout", "left");
  const merge = run("git", ["merge", "right", "--no-edit"]);
  assert.notEqual(merge.status, 0);
  assert.match(
    git("diff", "--name-only", "--diff-filter=U"),
    /primitives\/tokens.json/
  );
  assert.equal(run("git", ["rev-parse", "--verify", "MERGE_HEAD"]).status, 0);
  write(source, '{"first":4,"second":2}\n');
  git("add", source);
  git("commit", "-m", "resolve source");
  assert.equal(git("show", `HEAD:${output}`), '{"first":4,"second":2}');
  assert.equal(
    readFileSync(join(root, ".git/generation-log"), "utf8"),
    "run\n"
  );
});

test("handwritten files keep normal merging and font filters are preserved", t => {
  const { git } = fixture(t);
  for (const path of [
    source,
    "packages/tokens/src/tamagui/default-config.ts",
    "packages/stylelint-plugin/src/runtime.ts",
    "apps/storybook/src/FormSizes.stories.tsx"
  ]) {
    assert.equal(
      git("check-attr", "merge", "--", path),
      `${path}: merge: unspecified`
    );
  }
  assert.equal(
    git(
      "check-attr",
      "filter",
      "--",
      "packages/tokens/src/css/fonts/font.woff2"
    ),
    "packages/tokens/src/css/fonts/font.woff2: filter: lfs"
  );
});

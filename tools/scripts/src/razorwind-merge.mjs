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

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const git = (args, options = {}) =>
  execFileSync("git", args, {
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
    ...options
  });

function generatedFiles() {
  // Use the same attributes for merging and staging, including new outputs
  // and tracked files deleted by generation. Respect ignore rules for new files.
  const files = git([
    "ls-files",
    "--cached",
    "--others",
    "--exclude-standard",
    "-z"
  ]);
  const attributes = git(["check-attr", "-z", "--stdin", "merge"], {
    input: files
  }).split("\0");
  const generated = new Set();
  for (let i = 0; i + 2 < attributes.length; i += 3) {
    if (attributes[i + 2] === "razorwind") generated.add(attributes[i]);
  }
  return [...generated];
}

function install() {
  git([
    "config",
    "--local",
    "merge.razorwind.name",
    "Regenerate Razorwind outputs before committing the merge"
  ]);
  git([
    "config",
    "--local",
    "merge.razorwind.driver",
    "sh .lefthook/razorwind-merge.sh"
  ]);
  // Internal ancestor merges must not generate artifacts or queue work.
  git(["config", "--local", "merge.razorwind.recursive", "binary"]);
  execFileSync("pnpm", ["exec", "lefthook", "install"], { stdio: "inherit" });
}

const gitPath = name => git(["rev-parse", "--git-path", name]).trim();
const fingerprint = () => git(["rev-parse", "HEAD"]) + git(["write-tree"]);

function needsGeneration(source) {
  const pending = gitPath("razorwind-merge-pending");
  const queued =
    existsSync(pending) &&
    readFileSync(pending, "utf8").trim() === git(["rev-parse", "HEAD"]).trim();

  return (
    queued ||
    existsSync(gitPath("MERGE_HEAD")) ||
    existsSync(gitPath("SQUASH_MSG")) ||
    source === "merge" ||
    source === "squash"
  );
}

function ready() {
  const path = gitPath("razorwind-merge-ready");

  return existsSync(path) && readFileSync(path, "utf8") === fingerprint();
}

function regenerate(source) {
  if (!needsGeneration(source)) return;

  if (git(["ls-files", "--unmerged", "-z"])) {
    throw new Error(
      "Resolve and stage source conflicts before regenerating Razorwind outputs."
    );
  }
  // Generation reads the working tree. Refuse to mix unstaged edits into the
  // generated artifacts or overwrite local changes while finishing a merge.
  if (git(["diff", "--name-only", "-z"])) {
    throw new Error(
      "Stage or stash unstaged changes before regenerating Razorwind merge outputs."
    );
  }
  if (ready()) return;

  execFileSync("pnpm", ["nx", "run", "monorepo:build-tokens"], {
    stdio: "inherit",
    env: { ...process.env, NX_DAEMON: "false" }
  });
  const files = generatedFiles();
  if (files.length) {
    // generatedFiles() already excludes ignored untracked files, so --force
    // only lets tracked outputs inside ignored directories (such as fonts)
    // be staged instead of failing the whole add.
    git(
      [
        "--literal-pathspecs",
        "add",
        "-A",
        "--force",
        "--pathspec-from-file=-",
        "--pathspec-file-nul"
      ],
      {
        input: `${files.join("\0")  }\0`
      }
    );
  }
  writeFileSync(gitPath("razorwind-merge-ready"), fingerprint());
  rmSync(gitPath("razorwind-merge-pending"), { force: true });
}

try {
  if (process.argv[2] === "--install") install();
  else if (process.argv[2] === "--hook") regenerate(process.argv[3]);
  else if (process.argv[2] === "--merge") {
    const before = fingerprint();
    regenerate("merge");
    if (fingerprint() !== before) {
      throw new Error(
        "Outputs regenerated and staged. Run git commit to finish the merge with the updated outputs."
      );
    }
  } else if (process.argv[2] === "--guard") {
    if (needsGeneration(process.argv[3]) && !ready()) {
      throw new Error(
        "Outputs need regeneration. Run git commit with hooks enabled to finish the merge."
      );
    }
  } else
    throw new Error(
      "Usage: node tools/scripts/src/razorwind-merge.mjs --install | --merge | --hook | --guard"
    );
} catch (error) {
  console.error(`Razorwind merge: ${error.message}`);
  process.exitCode = 1;
}

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

import { lstat, mkdir, readdir, rm } from "node:fs/promises";
import { dirname, relative, resolve, sep } from "node:path";
import { applyInstallPlan, createInstallPlan, formatPlan } from "./components";
import type { CycloneConfig } from "./config";
import { resolveInside } from "./config";
import { normalizeComponentName, registryClient } from "./registry";

async function stat(path: string) {
  try {
    return await lstat(path);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}

/** Validate every existing ancestor without following directory symlinks. */
async function assertDirectoryPath(root: string, target: string) {
  const parts = relative(root, target).split(sep).filter(Boolean);
  let path = root;
  for (const part of parts) {
    path = resolve(path, part);
    const entry = await stat(path);
    if (entry?.isSymbolicLink()) {
      throw new Error(`Refusing to clean through a symbolic link: ${path}`);
    }
    if (entry && !entry.isDirectory()) {
      throw new Error(`Expected a components directory: ${path}`);
    }
  }
}

interface Entry {
  path: string;
  directory: boolean;
  symlink: boolean;
}

/** Post-order traversal; symbolic links are leaves and are never traversed. */
async function scan(path: string): Promise<Entry[]> {
  if (!(await stat(path))) return [];
  const entries: Entry[] = [];
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const child = resolve(path, entry.name);
    if (entry.isDirectory()) entries.push(...(await scan(child)));
    entries.push({
      path: child,
      directory: entry.isDirectory(),
      symlink: entry.isSymbolicLink()
    });
  }
  return entries;
}

export async function collectComponents(
  config: CycloneConfig,
  options: {
    root: string;
    dryRun?: boolean;
    registry?: string;
    report: (message: string) => void;
  }
): Promise<void> {
  const { root, dryRun, report } = options;
  const target = resolveInside(root, config.path);
  if (target === resolve(root)) {
    throw new Error(
      "Refusing to clean the project root as a components directory."
    );
  }

  await assertDirectoryPath(root, target);
  const entries = await scan(target);
  const regularFiles = new Set(
    entries
      .filter(entry => !entry.directory && !entry.symlink)
      .map(entry => entry.path)
  );
  const keep = new Set<string>();
  let complete = true;

  for (const [name, installed] of Object.entries(config.components)) {
    const normalized = normalizeComponentName(name);
    if (!/^[a-z0-9][\w.-]*$/i.test(normalized)) {
      throw new Error(`Invalid installed component name: ${name}`);
    }
    const componentRoot = resolveInside(target, normalized);
    const files: unknown = installed?.files;
    if (!Array.isArray(files) || files.length === 0) {
      complete = false;
      continue;
    }
    for (const file of files) {
      if (typeof file !== "string") {
        complete = false;
        continue;
      }
      const path = resolve(root, file);
      if (
        !path.startsWith(`${componentRoot}${sep}`) ||
        !regularFiles.has(path)
      ) {
        complete = false;
      }
      keep.add(path);
    }
  }

  if (!complete) {
    const plan = await createInstallPlan(
      registryClient(options.registry ?? config.registry),
      config,
      Object.keys(config.components),
      { root, overwrite: true, dryRun: true, readExisting: false }
    );
    report(
      `Reinstall ${relative(root, target)}: installed file tracking is incomplete. Local edits will be overwritten.\n${formatPlan(plan, root)}`
    );
    if (dryRun) return;
    // Resolve and transform every replacement before deleting anything.
    await rm(target, { recursive: true, force: true });
    await mkdir(target, { recursive: true });
    await applyInstallPlan(config, plan, { root, overwrite: true });
    return;
  }

  const keepDirectories = new Set<string>();
  for (const file of keep) {
    let directory = dirname(file);
    while (directory !== target) {
      keepDirectories.add(directory);
      directory = dirname(directory);
    }
  }
  const removed = entries.filter(entry =>
    entry.directory ? !keepDirectories.has(entry.path) : !keep.has(entry.path)
  );
  report(
    removed.length
      ? removed.map(entry => `remove ${relative(root, entry.path)}`).join("\n")
      : "No unused component files found."
  );
  if (dryRun) return;
  for (const entry of removed) {
    await rm(entry.path, { recursive: entry.directory, force: true });
  }
}

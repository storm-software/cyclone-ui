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

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import type { CycloneConfig } from "./config";
import { pathExists, resolveInside, writeConfig } from "./config";
import { transformDirectives } from "./directives";
import { transformComponentImports } from "./imports";
import type { CycloneRegistryClient } from "./registry";
import { normalizeComponentName } from "./registry";

type RegistryComponent = Awaited<
  ReturnType<CycloneRegistryClient["components"]["get"]["query"]>
>;

export interface InstallOptions {
  root: string;
  path?: string;
  overwrite?: boolean;
  dryRun?: boolean;
  rsc?: boolean;
}

export interface FileChange {
  component: string;
  path: string;
  content: string;
  previousContent: string | null;
  status: "create" | "overwrite" | "unchanged";
}

export interface InstallPlan {
  components: RegistryComponent[];
  files: FileChange[];
}

async function resolveComponents(
  client: CycloneRegistryClient,
  names: string[]
): Promise<RegistryComponent[]> {
  const resolved = new Map<string, RegistryComponent>();
  const visiting = new Set<string>();

  const visit = async (requestedName: string): Promise<void> => {
    const name = normalizeComponentName(requestedName);
    if (resolved.has(name)) return;
    if (visiting.has(name)) {
      throw new Error(`Circular component dependency detected at \"${name}\"`);
    }

    visiting.add(name);
    const component = await client.components.get.query(name);
    for (const dependency of component.internalDependencies) {
      await visit(dependency);
    }
    visiting.delete(name);
    resolved.set(name, component);
  };

  for (const name of names) {
    await visit(name);
  }

  return [...resolved.values()];
}

const TAILWIND_FILE = /\.tailwind(?=\.[cm]?[jt]sx?$)/;

/** `Skeleton.tailwind.tsx` replaces `Skeleton.tsx` for the tailwind style and is skipped otherwise. */
function styleFiles(
  files: RegistryComponent["files"],
  style: CycloneConfig["style"]
): RegistryComponent["files"] {
  const base = files.filter(file => !TAILWIND_FILE.test(file.name));
  if (style !== "tailwind") return base;

  const variants = files
    .filter(file => TAILWIND_FILE.test(file.name))
    .map(file => ({ ...file, name: file.name.replace(TAILWIND_FILE, "") }));
  const replaced = new Set(variants.map(file => file.name));

  return [...base.filter(file => !replaced.has(file.name)), ...variants];
}

export async function createInstallPlan(
  client: CycloneRegistryClient,
  config: CycloneConfig,
  names: string[],
  options: InstallOptions
): Promise<InstallPlan> {
  const components = await resolveComponents(client, names);
  const targetRoot = resolveInside(options.root, options.path ?? config.path);
  const componentNames = new Set(
    components.map(component => normalizeComponentName(component.name))
  );
  const files: FileChange[] = [];

  for (const component of components) {
    const componentName = normalizeComponentName(component.name);
    if (!/^[a-z0-9][\w.-]*$/i.test(componentName)) {
      throw new Error(`Invalid component name received: ${component.name}`);
    }

    for (const file of styleFiles(component.files, config.style)) {
      const componentRoot = resolveInside(targetRoot, componentName);
      const filePath = resolveInside(componentRoot, file.name);
      const directedContent = await transformDirectives(
        file.name,
        file.content,
        options.rsc ?? config.rsc
      );
      const content = await transformComponentImports(
        file.name,
        directedContent,
        filePath,
        targetRoot,
        componentNames
      );
      const previousContent = (await pathExists(filePath))
        ? await readFile(filePath, "utf8")
        : null;
      const status =
        previousContent === null
          ? "create"
          : previousContent === content
            ? "unchanged"
            : "overwrite";

      if (status === "overwrite" && !options.overwrite && !options.dryRun) {
        throw new Error(
          `${relative(options.root, filePath)} already exists. Re-run with --overwrite to replace it.`
        );
      }

      files.push({
        component: componentName,
        path: filePath,
        content,
        previousContent,
        status
      });
    }
  }

  return { components, files };
}

export async function applyInstallPlan(
  config: CycloneConfig,
  plan: InstallPlan,
  options: InstallOptions
): Promise<void> {
  if (options.dryRun) return;

  for (const file of plan.files) {
    if (file.status === "unchanged") continue;
    await mkdir(dirname(file.path), { recursive: true });
    await writeFile(file.path, file.content, "utf8");
  }

  for (const component of plan.components) {
    const name = normalizeComponentName(component.name);
    config.components[name] = {
      version: component.version,
      files: plan.files
        .filter(file => file.component === name)
        .map(file => relative(options.root, file.path))
    };
  }

  await updatePackageJson(options.root, plan.components, config.style);
  await writeConfig(options.root, config);
}

async function updatePackageJson(
  root: string,
  components: RegistryComponent[],
  style: CycloneConfig["style"]
): Promise<void> {
  const packagePath = resolve(root, "package.json");
  if (!(await pathExists(packagePath))) return;

  const packageJson = JSON.parse(await readFile(packagePath, "utf8")) as {
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
  };
  const internalDependencies = new Set(
    components.flatMap(component => [
      component.name,
      `@cyclone-ui/${normalizeComponentName(component.name)}`
    ])
  );
  const dependencies = Object.assign(
    {},
    ...components.map(component => component.dependencies)
  ) as Record<string, string>;
  // Every item lists the runtime of its tailwind variants; only that style installs them.
  if (style !== "tailwind") delete dependencies["@tamagui/tailwind"];
  const devDependencies = Object.assign(
    {},
    ...components.map(component => component.devDependencies)
  ) as Record<string, string>;

  packageJson.dependencies ??= {};
  packageJson.devDependencies ??= {};
  for (const [name, version] of Object.entries(dependencies)) {
    if (
      !internalDependencies.has(name) &&
      !packageJson.dependencies[name] &&
      !packageJson.devDependencies[name]
    ) {
      packageJson.dependencies[name] = normalizePublishedVersion(version);
    }
  }
  for (const [name, version] of Object.entries(devDependencies)) {
    if (
      !internalDependencies.has(name) &&
      !packageJson.dependencies[name] &&
      !packageJson.devDependencies[name]
    ) {
      packageJson.devDependencies[name] = normalizePublishedVersion(version);
    }
  }

  await writeFile(
    packagePath,
    `${JSON.stringify(packageJson, null, 2)}\n`,
    "utf8"
  );
}

function normalizePublishedVersion(version: string): string {
  return version.startsWith("catalog:") || version.startsWith("workspace:")
    ? "latest"
    : version;
}

export function formatPlan(plan: InstallPlan, root: string): string {
  return plan.files
    .map(file => `${file.status.padEnd(9)} ${relative(root, file.path)}`)
    .join("\n");
}

export interface UpdateFileLine {
  status: FileChange["status"] | "removed";
  path: string;
}

export interface UpdateComponentReport {
  name: string;
  previousVersion?: string;
  version?: string;
  files: UpdateFileLine[];
}

type Paint = (text: string | number | boolean | null | undefined) => string;

const plain: Paint = text =>
  text === undefined || text === null ? "" : String(text);

const STATUS_COLOR = {
  unchanged: "gray",
  create: "green",
  overwrite: "green",
  removed: "red"
} as const;

/** Group an update by component, including files the registry no longer ships. */
export function componentUpdateReports(
  config: CycloneConfig,
  plan: InstallPlan,
  root: string
): UpdateComponentReport[] {
  const nextPaths = new Set(plan.files.map(file => relative(root, file.path)));

  return plan.components.map(component => {
    const name = normalizeComponentName(component.name);
    const installed = config.components[name];
    const files: UpdateFileLine[] = plan.files
      .filter(file => file.component === name)
      .map(file => ({
        status: file.status,
        path: relative(root, file.path)
      }));

    for (const path of installed?.files ?? []) {
      if (!nextPaths.has(path)) files.push({ status: "removed", path });
    }

    return {
      name,
      previousVersion: installed?.version,
      version: component.version,
      files
    };
  });
}

/**
 * Human-readable update summary.
 * Unchanged files are gray, written files are green, removed files are red.
 * A version change paints the previous version red and the next version green.
 */
export function formatUpdate(
  reports: UpdateComponentReport[],
  paint: Partial<Record<"gray" | "green" | "red" | "dim", Paint>> = {}
): string {
  const colors = {
    gray: paint.gray ?? plain,
    green: paint.green ?? plain,
    red: paint.red ?? plain,
    dim: paint.dim ?? plain
  };

  return reports
    .map(report => {
      const lines = [report.name];
      if (report.previousVersion !== report.version) {
        const previous = report.previousVersion ?? "?";
        const next = report.version ?? "?";
        lines.push(
          `  ${colors.red(previous)} ${colors.dim("→")} ${colors.green(next)}`
        );
      }

      for (const file of report.files) {
        const color = colors[STATUS_COLOR[file.status]];
        lines.push(`  ${color(file.status.padEnd(9))} ${color(file.path)}`);
      }

      return lines.join("\n");
    })
    .join("\n\n");
}

export function formatDiff(plan: InstallPlan, root: string): string {
  const changes = plan.files.filter(file => file.status !== "unchanged");
  if (changes.length === 0) return "No differences found.";

  return changes
    .map(file => {
      const header = `--- ${file.previousContent === null ? "/dev/null" : relative(root, file.path)}\n+++ ${relative(root, file.path)}`;
      if (file.previousContent === null) {
        return `${header}\n${file.content
          .split("\n")
          .map(line => `+${line}`)
          .join("\n")}`;
      }

      const previous = file.previousContent
        .split("\n")
        .map(line => `-${line}`)
        .join("\n");
      const next = file.content
        .split("\n")
        .map(line => `+${line}`)
        .join("\n");

      return `${header}\n${previous}\n${next}`;
    })
    .join("\n\n");
}

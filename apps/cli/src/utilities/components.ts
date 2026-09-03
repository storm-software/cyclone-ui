/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import type { CycloneConfig } from "./config";
import { pathExists, resolveInside, writeConfig } from "./config";
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

export async function createInstallPlan(
  client: CycloneRegistryClient,
  config: CycloneConfig,
  names: string[],
  options: InstallOptions
): Promise<InstallPlan> {
  const components = await resolveComponents(client, names);
  const targetRoot = resolveInside(options.root, options.path ?? config.path);
  const files: FileChange[] = [];

  for (const component of components) {
    const componentName = normalizeComponentName(component.name);
    if (!/^[a-z0-9][a-z0-9._-]*$/i.test(componentName)) {
      throw new Error(`Invalid component name received: ${component.name}`);
    }

    for (const file of component.files) {
      const componentRoot = resolveInside(targetRoot, componentName);
      const filePath = resolveInside(componentRoot, file.name);
      const previousContent = (await pathExists(filePath))
        ? await readFile(filePath, "utf8")
        : null;
      const status =
        previousContent === null
          ? "create"
          : previousContent === file.content
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
        content: file.content,
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

  await updatePackageJson(options.root, plan.components);
  await writeConfig(options.root, config);
}

async function updatePackageJson(
  root: string,
  components: RegistryComponent[]
): Promise<void> {
  const packagePath = resolve(root, "package.json");
  if (!(await pathExists(packagePath))) return;

  const packageJson = JSON.parse(await readFile(packagePath, "utf8")) as {
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
  };
  const internalDependencies = new Set(
    components.map(component => component.name)
  );
  const dependencies = Object.assign(
    {},
    ...components.map(component => component.dependencies)
  ) as Record<string, string>;
  const devDependencies = Object.assign(
    {},
    ...components.map(component => component.devDependencies)
  ) as Record<string, string>;

  packageJson.dependencies ??= {};
  packageJson.devDependencies ??= {};
  for (const [name, version] of Object.entries(dependencies)) {
    if (!internalDependencies.has(name) && !name.startsWith("@cyclone-ui/")) {
      packageJson.dependencies[name] = normalizePublishedVersion(version);
    }
  }
  for (const [name, version] of Object.entries(devDependencies)) {
    if (!internalDependencies.has(name) && !name.startsWith("@cyclone-ui/")) {
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

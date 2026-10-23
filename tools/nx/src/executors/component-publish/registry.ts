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

import type { ExecutorContext, ProjectConfiguration } from "@nx/devkit";
import { readJsonFile } from "@nx/devkit";
import { existsSync, readFileSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { parse } from "yaml";

interface PackageManifest {
  name: string;
  version: string;
  private?: boolean;
  description?: string;
  keywords?: string[];
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

interface RegistryProject {
  projectName: string;
  project: ProjectConfiguration;
  manifest: PackageManifest;
  component: boolean;
}

export function registrySegment(value: string): string {
  if (!/^[a-z0-9][\w.-]*$/i.test(value))
    throw new Error(`Invalid registry name or version: ${value}`);
  return value;
}

async function sourceFiles(
  root: string,
  directory = root
): Promise<{ path: string; type: string; content: string }[]> {
  const files = [];
  for (const entry of (await readdir(directory, { withFileTypes: true })).sort(
    (a, b) => a.name.localeCompare(b.name)
  )) {
    if (
      entry.name.startsWith(".") ||
      entry.name === "__tests__" ||
      entry.name === "__snapshots__"
    )
      continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await sourceFiles(root, path)));
    else if (
      entry.isFile() &&
      !/\.(?:stories|story|spec|test)\.[^.]+$/.test(entry.name) &&
      !entry.name.endsWith(".mdx")
    ) {
      files.push({
        path: relative(root, path).replaceAll("\\", "/"),
        type: "registry:component",
        content: await readFile(path, "utf8")
      });
    }
  }
  return files;
}

export async function buildComponentRegistry(
  context: ExecutorContext,
  tag = "latest"
) {
  const projects = new Map<string, RegistryProject>();
  for (const [projectName, project] of Object.entries(
    context.projectsConfigurations?.projects ?? {}
  )) {
    const manifestPath = join(context.root, project.root, "package.json");
    if (!existsSync(manifestPath)) continue;
    const manifest = readJsonFile<PackageManifest>(manifestPath);
    const component =
      relative(context.root, resolve(context.root, project.root))
        .replaceAll("\\", "/")
        .startsWith("components/") && !manifest.private;
    projects.set(manifest.name, { projectName, project, manifest, component });
  }
  const project = context.projectName
    ? context.projectsConfigurations?.projects[context.projectName]
    : undefined;
  const current = [...projects.values()].find(
    value => value.project === project
  );
  if (!current?.component || !current.project.sourceRoot)
    throw new Error(
      "Publishing requires a public component project with a sourceRoot."
    );
  const { manifest } = current;
  const name = registrySegment(manifest.name.replace(/^@cyclone-ui\//, ""));
  registrySegment(manifest.version);
  registrySegment(tag);
  const workspacePath = join(context.root, "pnpm-workspace.yaml");
  const workspace = existsSync(workspacePath)
    ? (parse(readFileSync(workspacePath, "utf8")) as {
        catalog?: Record<string, string>;
        catalogs?: Record<string, Record<string, string>>;
      })
    : {};
  const publishedVersion = (dependency: string, version: string): string => {
    if (version.startsWith("catalog:")) {
      const catalog = version.slice(8);
      const resolved = (
        catalog ? workspace.catalogs?.[catalog] : workspace.catalog
      )?.[dependency];
      if (!resolved || resolved.startsWith("catalog:"))
        throw new Error(
          `Cannot resolve ${version} for ${dependency}. Regenerate the dependency catalog before publishing.`
        );
      return publishedVersion(dependency, resolved);
    }
    if (version.startsWith("workspace:")) {
      const range = version.slice(10);
      const localVersion = projects.get(dependency)?.manifest.version;
      if (!localVersion)
        throw new Error(`Cannot resolve workspace dependency ${dependency}.`);
      return range === "*"
        ? localVersion
        : range === "^" || range === "~"
          ? `${range}${localVersion}`
          : range;
    }
    return version;
  };
  const files = await sourceFiles(
    resolve(context.root, current.project.sourceRoot)
  );
  if (!files.length) throw new Error(`No source files found for ${name}.`);
  const source = files.map(file => file.content).join("\n");
  const runtime = { ...manifest.peerDependencies, ...manifest.dependencies };
  // Source imports sometimes live in devDependencies. Leave story/test tooling out.
  for (const [dependency, version] of Object.entries(
    manifest.devDependencies ?? {}
  )) {
    if (source.includes(`"${dependency}`) || source.includes(`'${dependency}`))
      runtime[dependency] ??= version;
  }
  const dependencies: string[] = [];
  const registryDependencies: string[] = [];
  for (const [dependency, version] of Object.entries(runtime).sort(([a], [b]) =>
    a.localeCompare(b)
  )) {
    if (projects.get(dependency)?.component)
      registryDependencies.push(dependency);
    else
      dependencies.push(
        `${dependency}@${publishedVersion(dependency, version)}`
      );
  }
  const item = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name,
    type: "registry:component",
    version: manifest.version,
    release: tag,
    title: name,
    description: manifest.description ?? "",
    tags: manifest.keywords ?? [],
    dependencies,
    registryDependencies,
    files
  };
  // Concurrent publishers emit the same catalog, avoiding a shared read/modify/write.
  const catalog = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "cyclone-ui",
    homepage: "https://cyclone-ui.com",
    items: [...projects.values()]
      .filter(value => value.component)
      .map(({ manifest: entry }) => ({
        name: registrySegment(entry.name.replace(/^@cyclone-ui\//, "")),
        type: "registry:component",
        version: entry.version,
        release: tag,
        title: entry.name,
        description: entry.description ?? "",
        tags: entry.keywords ?? [],
        files: []
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  };

  return {
    name,
    version: manifest.version,
    item,
    catalog,
    componentProjects: [...projects.values()]
      .filter(value => value.component)
      .map(value => value.projectName)
  };
}

/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { DEFAULT_REGISTRY_URL } from "@cyclone-ui/registry-api/client";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, isAbsolute, relative, resolve } from "node:path";

export const CONFIG_FILE = "components.json";

export interface InstalledComponent {
  version?: string;
  files: string[];
}

export interface CycloneConfig {
  registry: string;
  path: string;
  components: Record<string, InstalledComponent>;
}

export function createConfig(
  overrides: Partial<Pick<CycloneConfig, "registry" | "path">> = {}
): CycloneConfig {
  return {
    registry: overrides.registry ?? DEFAULT_REGISTRY_URL,
    path: overrides.path ?? "components",
    components: {}
  };
}

export async function pathExists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

export async function readConfig(root: string): Promise<CycloneConfig | null> {
  const configPath = resolve(root, CONFIG_FILE);
  if (!(await pathExists(configPath))) {
    return null;
  }

  const value: unknown = JSON.parse(await readFile(configPath, "utf8"));
  if (
    !value ||
    typeof value !== "object" ||
    !("registry" in value) ||
    typeof value.registry !== "string" ||
    !("path" in value) ||
    typeof value.path !== "string" ||
    !("components" in value) ||
    !value.components ||
    typeof value.components !== "object" ||
    Array.isArray(value.components)
  ) {
    throw new Error(
      `${CONFIG_FILE} exists but is not a Cyclone UI configuration file`
    );
  }

  return value as CycloneConfig;
}

export async function requireConfig(root: string): Promise<CycloneConfig> {
  const config = await readConfig(root);
  if (!config) {
    throw new Error(`No ${CONFIG_FILE} found. Run \"cyclone init\" first.`);
  }

  return config;
}

export async function writeConfig(
  root: string,
  config: CycloneConfig
): Promise<void> {
  const configPath = resolve(root, CONFIG_FILE);
  await mkdir(dirname(configPath), { recursive: true });
  await writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}

export function resolveInside(root: string, path: string): string {
  const resolvedRoot = resolve(root);
  const resolvedPath = resolve(resolvedRoot, path);
  const relativePath = relative(resolvedRoot, resolvedPath);
  if (relativePath.startsWith("..") || isAbsolute(relativePath)) {
    throw new Error(`Refusing to write outside the project: ${path}`);
  }

  return resolvedPath;
}

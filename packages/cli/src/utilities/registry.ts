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

import { createRegistryClient } from "@cyclone-ui/registry-api/client";

export const DEFAULT_REGISTRY_URL =
  "https://public.storm-cdn.com/cyclone-ui/registry";

export interface RegistrySummary {
  name: string;
  version?: string;
  release: string;
  description: string;
  tags: string[];
}

export interface RegistryComponent extends RegistrySummary {
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  internalDependencies: string[];
  files: { name: string; content: string }[];
}

export interface CycloneRegistryClient {
  components: {
    get: { query: (name: string) => Promise<RegistryComponent> };
    list: { query: () => Promise<RegistrySummary[]> };
  };
}

function object(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value))
    throw new Error("Invalid registry JSON object");
  return value as Record<string, unknown>;
}

function strings(value: unknown): string[] {
  if (value === undefined) return [];
  if (!Array.isArray(value) || value.some(item => typeof item !== "string"))
    throw new Error("Invalid registry dependency or tags array");
  return value as string[];
}

function summary(value: unknown): RegistrySummary {
  const item = object(value);
  if (typeof item.name !== "string")
    throw new Error("Registry item is missing a name");
  componentName(item.name);
  return {
    name: item.name,
    version: typeof item.version === "string" ? item.version : undefined,
    release: typeof item.release === "string" ? item.release : "latest",
    description: typeof item.description === "string" ? item.description : "",
    tags: strings(item.tags)
  };
}

function dependencies(value: unknown): Record<string, string> {
  return Object.fromEntries(
    strings(value).map(specifier => {
      const separator = specifier.lastIndexOf("@");
      const name = separator > 0 ? specifier.slice(0, separator) : specifier;
      const version = separator > 0 ? specifier.slice(separator + 1) : "latest";
      if (
        !/^(?:@[\w.-]+\/)?[\w.-]+$/.test(name) ||
        !version ||
        /^(?:catalog|workspace|link):/.test(version)
      )
        throw new Error(`Invalid published dependency: ${specifier}`);
      return [name, version];
    })
  );
}

function componentName(name: string): string {
  const normalized = normalizeComponentName(name);
  if (!/^[a-z0-9][\w.-]*$/i.test(normalized))
    throw new Error(`Invalid component name: ${name}`);
  return normalized;
}

export function registryClient(url: string): CycloneRegistryClient {
  let base: URL;
  try {
    base = new URL(url);
    if (!["http:", "https:"].includes(base.protocol))
      throw new Error("Unsupported registry protocol");
  } catch {
    throw new Error(`Invalid registry URL: ${url}`);
  }
  // Preserve explicitly configured deployments of the original Worker API.
  if (/\/api\/?$/.test(base.pathname))
    return createRegistryClient(base.toString().replace(/\/$/, ""));
  base.pathname = `${base.pathname.replace(/\/registry\.json$/, "").replace(/\/$/, "")}/`;
  base.search = "";
  base.hash = "";
  const request = async (path: string): Promise<unknown> => {
    const target = new URL(path, base);
    const response = await fetch(target, {
      signal: AbortSignal.timeout(30_000),
      cache: "no-cache"
    });
    if (!response.ok)
      throw new Error(
        `Registry request failed (${response.status}): ${target.toString()}`
      );
    return response.json();
  };

  return {
    components: {
      list: {
        query: async () => {
          const catalog = object(await request("registry.json"));
          if (!Array.isArray(catalog.items))
            throw new Error("Registry catalog must contain an items array");
          return catalog.items.map(summary);
        }
      },
      get: {
        query: async requested => {
          const name = componentName(requested);
          const item = object(await request(`components/${name}.json`));
          const meta = summary(item);
          if (componentName(meta.name) !== name)
            throw new Error(
              `Registry returned the wrong component for ${name}`
            );
          if (!Array.isArray(item.files))
            throw new Error(`Registry component ${name} is missing its files`);
          return {
            ...meta,
            dependencies: dependencies(item.dependencies),
            devDependencies: dependencies(item.devDependencies),
            internalDependencies: strings(item.registryDependencies).map(
              componentName
            ),
            files: item.files.map(value => {
              const file = object(value);
              if (
                typeof file.path !== "string" ||
                typeof file.content !== "string"
              )
                throw new Error(
                  `Registry component ${name} has a file without a path or content`
                );
              return { name: file.path, content: file.content };
            })
          };
        }
      }
    }
  };
}

export function normalizeComponentName(name: string): string {
  return name.replace(/^@cyclone-ui\//, "");
}

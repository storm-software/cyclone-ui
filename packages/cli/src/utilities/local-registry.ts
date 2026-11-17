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

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathExists, resolveInside } from "./config";

export interface RegistryManifestFile {
  path: string;
  type: string;
  target?: string;
  content?: string;
}

export interface RegistryManifestItem {
  name: string;
  type: string;
  files: RegistryManifestFile[];
  [key: string]: unknown;
}

export interface RegistryManifest {
  items: RegistryManifestItem[];
  [key: string]: unknown;
}

export async function readRegistryManifest(
  path: string
): Promise<RegistryManifest> {
  const value: unknown = JSON.parse(await readFile(path, "utf8"));
  if (
    !value ||
    typeof value !== "object" ||
    !("items" in value) ||
    !Array.isArray(value.items)
  ) {
    throw new Error("Registry manifest must contain an items array.");
  }

  const names = new Set<string>();
  for (const [index, item] of value.items.entries()) {
    if (
      !item ||
      typeof item !== "object" ||
      typeof item.name !== "string" ||
      !item.name
    ) {
      throw new Error(`Registry item ${index} must have a name.`);
    }
    if (names.has(item.name))
      throw new Error(`Duplicate registry item: ${item.name}`);
    names.add(item.name);
    if (typeof item.type !== "string" || !Array.isArray(item.files)) {
      throw new TypeError(
        `Registry item \"${item.name}\" must have a type and files array.`
      );
    }
    for (const file of item.files) {
      if (!file || typeof file !== "object" || typeof file.path !== "string") {
        throw new Error(
          `Registry item \"${item.name}\" contains an invalid file.`
        );
      }
      if (!file.content && !(await pathExists(file.path))) {
        throw new Error(`Registry source file not found: ${file.path}`);
      }
    }
  }

  return value as RegistryManifest;
}

export async function buildRegistry(
  root: string,
  manifest: RegistryManifest,
  output: string
): Promise<Array<{ path: string; content: string }>> {
  const outputRoot = resolveInside(root, output);

  return Promise.all(
    manifest.items.map(async item => {
      const name = item.name.replace(/^@cyclone-ui\//, "");
      if (!/^[a-z0-9][\w.-]*$/i.test(name)) {
        throw new Error(`Invalid registry item name: ${item.name}`);
      }
      const files = await Promise.all(
        item.files.map(async file => ({
          ...file,
          path: file.target ?? file.path,
          content:
            file.content ??
            (await readFile(
              resolveInside(root, resolve(root, file.path)),
              "utf8"
            ))
        }))
      );

      return {
        path: resolveInside(outputRoot, `${name}.json`),
        content: `${JSON.stringify({ ...item, files }, null, 2)}\n`
      };
    })
  );
}

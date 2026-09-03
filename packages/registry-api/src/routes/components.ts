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

import type { R2Object, R2ObjectBody } from "@cloudflare/workers-types";
import { z } from "zod";
import { createRouter, publicProcedure } from "../trpc";
import type {
  ComponentDetails,
  ComponentMeta,
  ComponentSummary,
  RegistryStorage
} from "../types";

interface RegistryStorageFile {
  name: string;
  content: R2ObjectBody | null;
  updatedOn: Date;
}

const COMPONENTS_PREFIX = "registry/components/";

interface ComponentVersion {
  componentName: string;
  prefix: string;
  metaObject: R2Object;
}

async function listAllObjects(
  storage: RegistryStorage,
  prefix: string
): Promise<R2Object[]> {
  const objects: R2Object[] = [];
  let cursor: string | undefined;

  do {
    const result = await storage.list({ prefix, cursor });
    objects.push(...result.objects);
    cursor = result.truncated ? result.cursor : undefined;
  } while (cursor);

  return objects;
}

function getComponentVersion(storageObject: R2Object): ComponentVersion | null {
  const relativeKey = storageObject.key.slice(COMPONENTS_PREFIX.length);
  const segments = relativeKey.split("/").filter(Boolean);
  if (segments.length < 2 || segments.at(-1) !== "meta.json") {
    return null;
  }

  const componentName = segments[0]!;
  const versionPath = segments.slice(1, -1).join("/");

  return {
    componentName,
    prefix: `${COMPONENTS_PREFIX}${componentName}/${versionPath ? `${versionPath}/` : ""}`,
    metaObject: storageObject
  };
}

function getLatestVersions(objects: R2Object[]): ComponentVersion[] {
  const versions = objects
    .map(getComponentVersion)
    .filter((value): value is ComponentVersion => Boolean(value));

  return [...versions]
    .sort(
      (left, right) =>
        right.metaObject.uploaded.getTime() - left.metaObject.uploaded.getTime()
    )
    .filter(
      (version, index, all) =>
        all.findIndex(
          candidate => candidate.componentName === version.componentName
        ) === index
    );
}

export const componentsRouter = createRouter({
  list: publicProcedure.query<ComponentSummary[]>(async ({ ctx }) => {
    const latestVersions = getLatestVersions(
      await listAllObjects(ctx.storage, COMPONENTS_PREFIX)
    );

    const components = await Promise.all(
      latestVersions.map(async version => {
        const content = await ctx.storage.get(version.metaObject.key);
        if (!content) {
          return null;
        }

        const meta = await content.json<ComponentMeta>();
        return {
          name: meta.name || version.componentName,
          version: meta.version,
          release: meta.release,
          description: meta.description,
          tags: meta.tags,
          updatedOn: version.metaObject.uploaded
        } as ComponentSummary;
      })
    );

    return components.filter(Boolean) as ComponentSummary[];
  }),
  get: publicProcedure
    .input(z.string())
    .query<ComponentDetails>(async ({ input, ctx }) => {
      const componentName = input.replace(/^@cyclone-ui\//, "");
      const componentPrefix = `${COMPONENTS_PREFIX}${componentName}/`;
      const storageObjects = await listAllObjects(ctx.storage, componentPrefix);
      const latestVersion = getLatestVersions(storageObjects)[0];
      if (!latestVersion) {
        throw new Error(`Component \"${input}\" was not found`);
      }

      const storageFiles = (
        await Promise.all(
          storageObjects
            .filter(storageObject =>
              storageObject.key.startsWith(latestVersion.prefix)
            )
            .map(async (storageObject: R2Object) =>
              ctx.storage
                .get(storageObject.key)
                .then((content: R2ObjectBody | null) => ({
                  name: storageObject.key.slice(latestVersion.prefix.length),
                  content,
                  updatedOn: storageObject.uploaded
                }))
            )
        )
      ).filter(Boolean) as RegistryStorageFile[];

      const metaFile = storageFiles.find(
        (file: RegistryStorageFile) => file.name === "meta.json"
      );
      if (!metaFile || !metaFile.content) {
        throw new Error("Metadata file not found");
      }

      const meta = await metaFile.content.json<ComponentMeta>();
      const componentFiles = storageFiles.filter(
        file => file.name !== "meta.json" && file.content
      );
      const componentContent = await Promise.all(
        componentFiles
          .filter(file => file.name !== "meta.json" && file.content)
          .map(async file => Promise.resolve(file.content!.text()))
      );

      return {
        ...meta,
        files: componentFiles.map((file, index) => ({
          ...file,
          content: componentContent[index]!
        }))
      };
    })
});

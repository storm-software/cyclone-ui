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

import type { ExecutorContext } from "@nx/devkit";
import executor from "@storm-software/cloudflare-tools/executors/r2-upload-publish/executor";
import { getWorkspaceConfig } from "@storm-software/config-tools/get-config";
import {
  writeFatal,
  writeInfo,
  writeSuccess
} from "@storm-software/config-tools/logger/console";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { buildComponentRegistry, registrySegment } from "./registry";
import type { ComponentPublishExecutorSchema } from "./schema";

export default async function runExecutor(
  options: ComponentPublishExecutorSchema,
  context: ExecutorContext
) {
  let staging: string | undefined;
  try {
    const config = await getWorkspaceConfig();
    const tag = registrySegment(options.tag ?? "latest");
    const { name, version, item, catalog, componentProjects } =
      await buildComponentRegistry(context, tag);
    staging = await mkdtemp(join(tmpdir(), "cyclone-registry-"));
    const itemRoot = join(staging, "items");
    const catalogRoot = join(staging, "catalog");
    const channel = tag === "latest" ? "" : `tags/${tag}/`;
    const write = async (root: string, path: string, value: unknown) => {
      const file = join(root, path);
      await mkdir(dirname(file), { recursive: true });
      await writeFile(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
    };
    const items = options.all
      ? await Promise.all(
          componentProjects.map(async projectName =>
            buildComponentRegistry({ ...context, projectName }, tag)
          )
        )
      : [{ name, version, item }];
    for (const component of items) {
      await write(
        itemRoot,
        `components/${component.name}/${component.version}.json`,
        component.item
      );
      await write(
        itemRoot,
        `${channel}components/${component.name}.json`,
        component.item
      );
    }
    await write(catalogRoot, `${channel}registry.json`, catalog);
    const upload = async (path: string) =>
      executor(
        {
          ...options,
          tag,
          bucketId: "storm-public",
          bucketPath: "cyclone-ui/registry",
          path,
          clean: false,
          writeMetaJson: false
        },
        context
      );
    writeInfo(
      `Publishing ${name}@${version} to the public Cyclone registry`,
      config
    );
    const result = await upload(itemRoot);
    if (!result.success) return result;
    const discovery = await upload(catalogRoot);
    if (discovery.success)
      writeSuccess(
        `Published ${name}@${version} to the public Cyclone registry`,
        config
      );
    return discovery;
  } catch (error) {
    writeFatal(
      `An error occurred while publishing the component registry.\n${error instanceof Error ? error.message : String(error)}`
    );
    return { success: false };
  } finally {
    if (staging) await rm(staging, { recursive: true, force: true });
  }
}

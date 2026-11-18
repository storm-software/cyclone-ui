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
import { dirname, join, posix } from "node:path";
import { buildComponentRegistry, registrySegment } from "./registry";
import type { ComponentPublishExecutorSchema } from "./schema";

const commentBannerPattern =
  /^\/\* -{3,}\r?\n[\s\S]*?\r?\n -{3,} \*\/(?:\r?\n)*/;

function removeCommentBanner(content: string): string {
  return content.replace(commentBannerPattern, "");
}

async function transformComponentImports(
  filename: string,
  content: string,
  componentName: string,
  dependencies: string[]
): Promise<string> {
  if (!/\.[cm]?[jt]sx?$/.test(filename)) return content;

  const componentNames = new Set(
    dependencies.map(dependency => dependency.replace(/^@cyclone-ui\//, ""))
  );

  const { default: ts } = await import("typescript");
  const source = ts.createSourceFile(filename, content, ts.ScriptTarget.Latest);
  const edits: { start: number; end: number; value: string }[] = [];

  const rewrite = (node: import("typescript").Node) => {
    if (!ts.isStringLiteralLike(node)) return;

    const match = /^@cyclone-ui\/([^/]+)(\/.*)?$/.exec(node.text);
    if (!match || !componentNames.has(match[1]!)) return;

    const installedPath = posix.resolve("/", componentName, filename);
    const target = posix.resolve("/", match[1]!, `.${match[2] ?? ""}`);

    let specifier = posix.relative(posix.dirname(installedPath), target);
    if (!specifier.startsWith(".")) specifier = `./${specifier}`;
    edits.push({
      start: node.getStart(source) + 1,
      end: node.getEnd() - 1,
      value: specifier
    });
  };

  const visit = (node: import("typescript").Node) => {
    if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) {
      if (node.moduleSpecifier) rewrite(node.moduleSpecifier);
    } else if (
      ts.isCallExpression(node) &&
      (node.expression.kind === ts.SyntaxKind.ImportKeyword ||
        (ts.isIdentifier(node.expression) &&
          node.expression.text === "require"))
    ) {
      if (node.arguments.length === 1) rewrite(node.arguments[0]!);
    } else if (ts.isImportTypeNode(node) && ts.isLiteralTypeNode(node.argument))
      rewrite(node.argument.literal);

    ts.forEachChild(node, visit);
  };
  visit(source);

  for (const edit of edits.sort((a, b) => b.start - a.start))
    content =
      content.slice(0, edit.start) + edit.value + content.slice(edit.end);
  return content;
}

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
      const publishedItem = {
        ...component.item,
        files: await Promise.all(
          component.item.files.map(async file => ({
            ...file,
            content: await transformComponentImports(
              file.path,
              removeCommentBanner(file.content),
              component.name,
              component.item.registryDependencies
            )
          }))
        )
      };

      await write(
        itemRoot,
        `components/${component.name}/${component.version}.json`,
        publishedItem
      );
      await write(
        itemRoot,
        `${channel}components/${component.name}.json`,
        publishedItem
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
    if (!result.success) {
      return result;
    }

    const discovery = await upload(catalogRoot);
    if (discovery.success) {
      writeSuccess(
        `Published ${name}@${version} to the public Cyclone registry`,
        config
      );
    }

    return discovery;
  } catch (error) {
    writeFatal(
      `An error occurred while publishing the component registry.\n${error instanceof Error ? error.message : String(error)}`
    );

    return { success: false };
  } finally {
    if (staging) {
      await rm(staging, { recursive: true, force: true });
    }
  }
}

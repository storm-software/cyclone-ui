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

import { dirname, relative, resolve } from "node:path";

/** Rewrite module specifiers only; comments, strings, and npm helpers stay intact. */
export async function transformComponentImports(
  filename: string,
  content: string,
  installedPath: string,
  targetRoot: string,
  componentNames: Set<string>
): Promise<string> {
  if (!/\.[cm]?[jt]sx?$/.test(filename)) return content;
  const { default: ts } = await import("typescript");
  const source = ts.createSourceFile(filename, content, ts.ScriptTarget.Latest);
  const edits: { start: number; end: number; value: string }[] = [];
  const rewrite = (node: import("typescript").Node) => {
    if (!ts.isStringLiteralLike(node)) return;
    const match = /^@cyclone-ui\/([^/]+)(\/.*)?$/.exec(node.text);
    if (!match || !componentNames.has(match[1]!)) return;
    const subpath = match[2] ?? "";
    const target = resolve(targetRoot, match[1]!, `.${subpath}`);
    let specifier = relative(dirname(installedPath), target).replaceAll(
      "\\",
      "/"
    );
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

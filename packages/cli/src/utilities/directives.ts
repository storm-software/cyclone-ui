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

/** Adapt module client boundaries without changing server or function directives. */
export async function transformDirectives(
  filename: string,
  content: string,
  rsc: boolean | undefined
): Promise<string> {
  if (
    rsc !== false ||
    !/\.[cm]?[jt]sx?$/.test(filename) ||
    /\.d\.[cm]?ts$/.test(filename)
  ) {
    return content;
  }

  // Only load the parser when a project requests directive transformation.
  const ts = await import("typescript");
  const source = ts.createSourceFile(filename, content, ts.ScriptTarget.Latest);
  const removals: { start: number; end: number }[] = [];
  for (const statement of source.statements) {
    if (
      !ts.isExpressionStatement(statement) ||
      !ts.isStringLiteral(statement.expression)
    ) {
      break;
    }
    if (statement.expression.text === "use client") {
      removals.push({
        start: statement.expression.getStart(source),
        end: statement.expression.end
      });
      if (content[statement.end - 1] === ";") {
        removals.push({ start: statement.end - 1, end: statement.end });
      }
    }
  }

  // Edit only directive spans, retaining comments, line endings and other text.
  for (const { start, end } of removals.reverse()) {
    content = content.slice(0, start) + content.slice(end);
  }
  return content;
}

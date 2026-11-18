import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { expect, it } from "vitest";

const componentsDirectory = join(
  dirname(fileURLToPath(import.meta.url)),
  "../.."
);

const sourceFiles = (directory: string): string[] =>
  readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory()
      ? sourceFiles(path)
      : /\.tsx?$/.test(entry.name) &&
          !/\.(stories|test|spec)\./.test(entry.name)
        ? [path]
        : [];
  });

it("exposes explicitly attached compound parts as direct client exports for server composition", () => {
  const missing: string[] = [];

  const files = readdirSync(componentsDirectory, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => join(componentsDirectory, entry.name, "src"))
    .filter(path => existsSync(path))
    .flatMap(sourceFiles);

  for (const path of files) {
    const source = ts.createSourceFile(
      path,
      readFileSync(path, "utf8"),
      ts.ScriptTarget.Latest,
      true
    );
    if (
      !source.statements.some(
        statement =>
          ts.isExpressionStatement(statement) &&
          ts.isStringLiteral(statement.expression) &&
          statement.expression.text === "use client"
      )
    ) {
      continue;
    }

    const exported = new Set<string>();
    for (const statement of source.statements) {
      if (
        ts.isFunctionDeclaration(statement) &&
        statement.name &&
        statement.modifiers?.some(
          modifier => modifier.kind === ts.SyntaxKind.ExportKeyword
        )
      ) {
        exported.add(statement.name.text);
      }
      if (
        ts.isVariableStatement(statement) &&
        statement.modifiers?.some(
          modifier => modifier.kind === ts.SyntaxKind.ExportKeyword
        )
      ) {
        for (const declaration of statement.declarationList.declarations) {
          exported.add(declaration.name.getText(source));
          // An exported binding to an imported part is itself a direct
          // reference in the client manifest, unlike accessing it in RSC.
          if (declaration.initializer) {
            exported.add(declaration.initializer.getText(source));
          }
        }
      } else if (
        ts.isExportDeclaration(statement) &&
        statement.exportClause &&
        ts.isNamedExports(statement.exportClause)
      ) {
        for (const part of statement.exportClause.elements) {
          if (!part.isTypeOnly) {
            exported.add((part.propertyName ?? part.name).text);
          }
        }
      }
    }

    const checkParts = (call: ts.CallExpression, name: string) => {
      const parts = call.arguments[1];
      if (!parts || !ts.isObjectLiteralExpression(parts)) return;
      for (const part of parts.properties) {
        if (
          !ts.isPropertyAssignment(part) &&
          !ts.isShorthandPropertyAssignment(part)
        ) {
          continue;
        }
        const value = ts.isPropertyAssignment(part)
          ? part.initializer
          : part.name;
        const isCompound =
          ts.isCallExpression(value) &&
          value.expression.getText(source) === "withStaticProperties";
        // The underlying component renders identically without its statics.
        const component = isCompound ? value.arguments[0] : value;
        const qualifiedName = `${name}.${part.name.getText(source)}`;
        if (component && !exported.has(component.getText(source))) {
          missing.push(
            `${relative(componentsDirectory, path)}: ${qualifiedName}`
          );
        }
        if (isCompound) checkParts(value, qualifiedName);
      }
    };

    const visit = (node: ts.Node) => {
      if (
        ts.isBinaryExpression(node) &&
        node.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
        ts.isPropertyAccessExpression(node.left) &&
        ts.isIdentifier(node.left.expression) &&
        exported.has(node.left.expression.text) &&
        !["displayName", "propTypes", "defaultProps", "contextType"].includes(
          node.left.name.text
        ) &&
        !exported.has(node.right.getText(source))
      ) {
        missing.push(
          `${relative(componentsDirectory, path)}: ${node.left.getText(source)}`
        );
      }
      if (
        ts.isVariableDeclaration(node) &&
        node.initializer &&
        ts.isCallExpression(node.initializer) &&
        node.initializer.expression.getText(source) === "withStaticProperties"
      ) {
        checkParts(node.initializer, node.name.getText(source));
      }
      ts.forEachChild(node, visit);
    };
    visit(source);
  }

  expect(missing).toEqual([]);
});

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { describe, expect, it } from "vitest";

const navigationHeaderSource = readFileSync(
  fileURLToPath(new URL("./NavigationHeader.tsx", import.meta.url)),
  "utf8"
);

describe("NavigationHeader consumer types", () => {
  it.each([false, true])(
    "compiles dropdown measurement with DOM types: %s",
    dom => {
      const source = ts.createSourceFile(
        "NavigationHeader.tsx",
        navigationHeaderSource,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TSX
      );
      const declarations = source.statements.filter(statement => {
        if (ts.isInterfaceDeclaration(statement)) {
          return [
            "NavigationHeaderMeasuredElement",
            "NavigationHeaderResizeObserver"
          ].includes(statement.name.text);
        }
        return (
          ts.isVariableStatement(statement) &&
          statement.declarationList.declarations.some(
            declaration =>
              declaration.name.getText(source) === "animateDropdownHeight"
          )
        );
      });
      const fileName = fileURLToPath(
        new URL("./dropdown-types.ts", import.meta.url)
      );
      const input = `
      type TamaguiElement = unknown;
      declare const dropdownTransition: string;
      declare const reducedMotionMediaQuery: string;
      declare function getBrowserWindow(): {
        matchMedia?: (query: string) => { matches: boolean }
      } | undefined;
      ${declarations.map(statement => statement.getText(source)).join("\n")}
    `;
      const options: ts.CompilerOptions = {
        strict: true,
        noEmit: true,
        types: [],
        lib: dom ? ["lib.esnext.d.ts", "lib.dom.d.ts"] : ["lib.esnext.d.ts"]
      };
      const host = ts.createCompilerHost(options);
      const getSourceFile = host.getSourceFile.bind(host);
      host.getSourceFile = (
        name,
        languageVersion,
        onError,
        shouldCreateNewSourceFile
      ) =>
        name === fileName
          ? ts.createSourceFile(name, input, languageVersion, true)
          : getSourceFile(
              name,
              languageVersion,
              onError,
              shouldCreateNewSourceFile
            );
      const program = ts.createProgram([fileName], options, host);

      expect(declarations).toHaveLength(3);
      expect(
        ts
          .getPreEmitDiagnostics(program)
          .map(diagnostic =>
            ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")
          )
      ).toEqual([]);
    }
  );
});

describe("NavigationHeader typography", () => {
  it("uses the xl scale for desktop navigation labels", () => {
    expect(navigationHeaderSource).toMatch(
      /const NavigationHeaderItemLink = styled\(Link, \{[\s\S]*?fontSize: "xl"/
    );
  });

  it("uses the xl scale for desktop dropdown links", () => {
    expect(navigationHeaderSource).toMatch(
      /const NavigationHeaderDropdownLink = styled\(Link, \{[\s\S]*?fontSize: "xl"/
    );
  });
});

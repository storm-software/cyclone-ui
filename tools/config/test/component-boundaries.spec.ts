import { execFile } from "node:child_process";
import {
  copyFile,
  mkdir,
  mkdtemp,
  readFile,
  rm,
  symlink,
  writeFile
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { promisify } from "node:util";
import { build } from "tsdown";
import ts from "typescript";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

const execFileAsync = promisify(execFile);
const repository = resolve(import.meta.dirname, "../../..");
let fixture: string;

const parseModule = (name: string, source: string) =>
  ts.createSourceFile(
    name,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.JSX
  );

function directives(source: ts.SourceFile) {
  const result: string[] = [];
  for (const statement of source.statements) {
    if (
      !ts.isExpressionStatement(statement) ||
      !ts.isStringLiteral(statement.expression)
    ) {
      break;
    }
    result.push(statement.expression.text);
  }
  return result;
}

function dependencies(source: ts.SourceFile) {
  const result: string[] = [];
  const visit = (node: ts.Node) => {
    if (
      ts.isImportDeclaration(node) &&
      ts.isStringLiteral(node.moduleSpecifier)
    ) {
      result.push(node.moduleSpecifier.text);
    } else if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      node.expression.text === "require" &&
      node.arguments[0] &&
      ts.isStringLiteral(node.arguments[0])
    ) {
      result.push(node.arguments[0].text);
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
  return result;
}

beforeAll(async () => {
  fixture = await mkdtemp(join(tmpdir(), "cyclone-component-boundaries-"));
  await mkdir(join(fixture, "src"));
  await symlink(
    join(repository, "node_modules"),
    join(fixture, "node_modules")
  );
  await writeFile(
    join(fixture, "package.json"),
    JSON.stringify({ name: "boundary-fixture", private: true, type: "module" })
  );
  await Promise.all([
    ...[
      "Calendar.tsx",
      "CalendarImpl.tsx",
      "CalendarSkeleton.tsx",
      "types.ts"
    ].map(name =>
      copyFile(
        join(repository, "components/calendar/src", name),
        join(fixture, "src", name)
      )
    ),
    ...["utilities.ts", "useLoadingData.ts"].map(name =>
      copyFile(
        join(repository, "components/chart/src", name),
        join(fixture, "src", name)
      )
    )
  ]);
  await writeFile(
    join(fixture, "src/index.ts"),
    [
      'export { Calendar, CalendarSkeleton } from "./Calendar";',
      'export { useLoadingData } from "./useLoadingData";',
      'export * from "./utilities";'
    ].join("\n")
  );

  // Use the real shared config and real component sources. Only the temporary
  // fixture's manifest and output are written; declarations have separate
  // package checks and are unnecessary for this runtime boundary test.
  await build({
    config: join(repository, "tools/config/tsdown.component.ts"),
    cwd: fixture,
    entry: ["src/index.ts"],
    dts: false,
    tsconfig: false,
    logLevel: "silent",
    report: false
  });
}, 30_000);

afterAll(async () => {
  if (fixture) {
    await rm(fixture, { recursive: true, force: true });
  }
});

describe("component build boundaries", () => {
  it.each(["mjs", "cjs"])(
    "keeps the calendar wrapper neutral and its children client-only in %s output",
    async extension => {
      const load = async (name: string) => {
        const file = `${name}.${extension}`;
        return parseModule(
          file,
          await readFile(join(fixture, "dist", file), "utf8")
        );
      };
      const wrapper = await load("Calendar");

      expect(directives(wrapper)).not.toContain("use client");
      expect(dependencies(wrapper)).toContain(`./CalendarImpl.${extension}`);
      expect(dependencies(wrapper)).toContain(
        `./CalendarSkeleton.${extension}`
      );
      for (const name of [
        "CalendarImpl",
        "CalendarSkeleton",
        "useLoadingData"
      ]) {
        expect(directives(await load(name)), name).toContain("use client");
      }
      expect(directives(await load("index"))).not.toContain("use client");
      expect(directives(await load("utilities"))).not.toContain("use client");
    }
  );

  it("keeps chart utilities callable under react-server in both module formats", async () => {
    const esm = pathToFileURL(join(fixture, "dist/utilities.mjs")).href;
    const cjs = join(fixture, "dist/utilities.cjs");
    const { stdout } = await execFileAsync(process.execPath, [
      "--conditions=react-server",
      "--input-type=module",
      "-e",
      `
        import assert from "node:assert/strict";
        import { createRequire } from "node:module";
        import * as esm from ${JSON.stringify(esm)};
        const cjs = createRequire(import.meta.url)(${JSON.stringify(cjs)});
        for (const utilities of [esm, cjs]) {
          assert.equal(utilities.axisValueToPercentFormatter(0.126), "13%");
          assert.deepEqual(utilities.getLoadingData(2, 0, 70, () => 0.5), [
            { loading: 35 }, { loading: 35 }
          ]);
          assert.deepEqual(utilities.clampBrushRange({ startIndex: 5, endIndex: 6 }, 10, 3), {
            startIndex: 5, endIndex: 8
          });
        }
        process.stdout.write("server utilities passed");
      `
    ]);

    expect(stdout).toBe("server utilities passed");
  });
});

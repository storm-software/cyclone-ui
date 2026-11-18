import type { ExecutorContext } from "@nx/devkit";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { createServer, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { buildComponentRegistry } from "../../../../tools/nx/src/executors/component-publish/registry";
import {
  applyInstallPlan,
  createInstallPlan
} from "../../src/utilities/components";
import { createConfig, readConfig } from "../../src/utilities/config";
import { registryClient } from "../../src/utilities/registry";

const roots: string[] = [];
const servers: Server[] = [];
afterEach(async () => {
  vi.unstubAllGlobals();
  await Promise.all(
    servers.splice(0).map(
      server =>
        new Promise<void>((resolve, reject) => {
          server.closeAllConnections();
          server.close(error => (error ? reject(error) : resolve()));
        })
    )
  );
  await Promise.all(
    roots.splice(0).map(root => rm(root, { recursive: true, force: true }))
  );
});

function serve(
  items: Record<string, unknown>,
  catalog = {
    items: [{ name: "button", description: "A button", tags: ["input"] }]
  }
) {
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string | URL) => {
      const key = new URL(url).pathname.replace("/custom/registry/", "");
      const value = key === "registry.json" ? catalog : items[key];
      return new Response(value ? JSON.stringify(value) : "missing", {
        status: value ? 200 : 404
      });
    })
  );
}

describe("static public registry", () => {
  it("installs the publisher's emitted JSON into a consumer that TypeScript can resolve", async () => {
    const source = await mkdtemp(join(tmpdir(), "cyclone-producer-"));
    const root = await mkdtemp(join(tmpdir(), "cyclone-consumer-"));
    roots.push(source, root);
    await writeFile(
      join(source, "pnpm-workspace.yaml"),
      'catalog:\n  react: "^19.0.0"\n'
    );
    const projects = Object.fromEntries(
      ["button", "label"].map(name => [
        name,
        {
          name,
          root: `components/${name}`,
          sourceRoot: `components/${name}/src`
        }
      ])
    );
    for (const name of ["button", "label"]) {
      const directory = join(source, `components/${name}`);
      await mkdir(join(directory, "src"), { recursive: true });
      await writeFile(
        join(directory, "package.json"),
        JSON.stringify({
          name: `@cyclone-ui/${name}`,
          version: "1.0.0",
          dependencies:
            name === "button" ? { "@cyclone-ui/label": "workspace:*" } : {}
        })
      );
      await writeFile(
        join(directory, "src/index.ts"),
        name === "button"
          ? 'import { Label } from "@cyclone-ui/label";\nexport const Button = Label;'
          : 'export const Label = "label";'
      );
    }
    const context = {
      root: source,
      projectsConfigurations: { version: 2, projects }
    } as ExecutorContext;
    const items: Record<string, unknown> = {};
    for (const projectName of ["button", "label"]) {
      const { item } = await buildComponentRegistry({
        ...context,
        projectName
      });
      items[`components/${projectName}.json`] = item;
    }
    const server = createServer((request, response) => {
      const key = request.url?.replace("/custom/registry/", "");
      const item = key ? items[key] : undefined;
      response.writeHead(item ? 200 : 404, {
        "Content-Type": "application/json"
      });
      response.end(JSON.stringify(item ?? { error: "not found" }));
    });
    servers.push(server);
    await new Promise<void>(resolve => server.listen(0, "127.0.0.1", resolve));
    const address = server.address() as AddressInfo;
    await writeFile(join(root, "package.json"), '{"name":"consumer"}');
    const config = createConfig({
      registry: `http://127.0.0.1:${address.port}/custom/registry`
    });
    const plan = await createInstallPlan(
      registryClient(config.registry),
      config,
      ["button"],
      { root }
    );
    await applyInstallPlan(config, plan, { root });
    const { default: ts } = await import("typescript");
    const program = ts.createProgram(
      plan.files.map(file => file.path),
      {
        noEmit: true,
        types: [],
        module: ts.ModuleKind.ESNext,
        moduleResolution: ts.ModuleResolutionKind.Bundler
      }
    );
    expect(
      ts
        .getPreEmitDiagnostics(program)
        .map(diagnostic =>
          ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")
        )
    ).toEqual([]);
  });

  it("installs every email component and its theme stylesheets from the one published item", async () => {
    const source = await mkdtemp(join(tmpdir(), "cyclone-producer-"));
    const root = await mkdtemp(join(tmpdir(), "cyclone-consumer-"));
    roots.push(source, root);
    await writeFile(
      join(source, "pnpm-workspace.yaml"),
      'catalog:\n  react-email: "^6.0.0"\n'
    );
    await mkdir(join(source, "email/src/components"), { recursive: true });
    await mkdir(join(source, "packages/tokens/src/tailwindcss"), {
      recursive: true
    });
    await writeFile(
      join(source, "email/package.json"),
      JSON.stringify({
        name: "@cyclone-ui/email",
        version: "0.1.0",
        private: true,
        dependencies: { "react-email": "catalog:" }
      })
    );
    await writeFile(
      join(source, "email/src/components/Button.tsx"),
      'export { themes as Button } from "../theme";'
    );
    await writeFile(
      join(source, "email/src/theme.ts"),
      'import light from "../../packages/tokens/src/tailwindcss/tokens-light.css?raw";\nexport const themes = { light };'
    );
    await writeFile(
      join(source, "email/src/css.d.ts"),
      'declare module "*.css?raw" {\n  const css: string;\n  export default css;\n}'
    );
    await writeFile(
      join(source, "packages/tokens/src/tailwindcss/tokens-light.css"),
      "@theme {}"
    );
    const { item } = await buildComponentRegistry({
      root: source,
      projectName: "email",
      projectsConfigurations: {
        version: 2,
        projects: {
          email: { name: "email", root: "email", sourceRoot: "email/src" }
        }
      }
    } as unknown as ExecutorContext);
    serve({ "components/email.json": item });
    await writeFile(join(root, "package.json"), '{"name":"consumer"}');
    const config = createConfig({
      registry: "https://example.com/custom/registry"
    });

    const plan = await createInstallPlan(
      registryClient(config.registry),
      config,
      ["email"],
      { root }
    );
    await applyInstallPlan(config, plan, { root });

    expect(
      await readFile(
        join(root, "components/email/tailwindcss/tokens-light.css"),
        "utf8"
      )
    ).toBe("@theme {}");
    expect(
      JSON.parse(await readFile(join(root, "package.json"), "utf8"))
        .dependencies
    ).toEqual({ "react-email": "^6.0.0" });
    expect((await readConfig(root))?.components.email?.files).toHaveLength(4);
    const { default: ts } = await import("typescript");
    const program = ts.createProgram(
      plan.files.map(file => file.path).filter(path => /\.tsx?$/.test(path)),
      {
        noEmit: true,
        types: [],
        module: ts.ModuleKind.ESNext,
        moduleResolution: ts.ModuleResolutionKind.Bundler
      }
    );
    expect(
      ts
        .getPreEmitDiagnostics(program)
        .map(diagnostic =>
          ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")
        )
    ).toEqual([]);
  });

  it("downloads components into a separate repository with local imports and real package dependencies", async () => {
    const root = await mkdtemp(join(tmpdir(), "cyclone-consumer-"));
    roots.push(root);
    await writeFile(
      join(root, "package.json"),
      JSON.stringify({ name: "consumer", dependencies: { react: "^19.1.0" } })
    );
    serve({
      "components/button.json": {
        name: "button",
        version: "1.2.3",
        type: "registry:component",
        dependencies: ["@cyclone-ui/helpers@^2.4.0", "react@^19.0.0"],
        registryDependencies: ["@cyclone-ui/label"],
        files: [
          { path: "index.ts", content: 'export * from "./nested/Button";' },
          {
            path: "nested/Button.tsx",
            content:
              '"use client";\nimport { Label } from "@cyclone-ui/label";\nexport { helper } from "@cyclone-ui/helpers";\nexport const load = () => import("@cyclone-ui/label/Label");\n// @cyclone-ui/label stays a comment\nexport const text = "@cyclone-ui/label";'
          }
        ]
      },
      "components/label.json": {
        name: "label",
        version: "1.0.0",
        type: "registry:component",
        files: [
          { path: "index.ts", content: 'export { Label } from "./Label";' },
          { path: "Label.tsx", content: 'export const Label = "label";' }
        ]
      }
    });
    const config = createConfig({
      registry: "https://example.com/custom/registry",
      path: "src/ui",
      rsc: true
    });
    const client = registryClient(config.registry);
    expect(await client.components.list.query()).toMatchObject([
      { name: "button", description: "A button", tags: ["input"] }
    ]);
    const preview = await createInstallPlan(
      client,
      config,
      ["@cyclone-ui/button"],
      { root, dryRun: true }
    );
    await applyInstallPlan(config, preview, { root, dryRun: true });
    expect(await readConfig(root)).toBeNull();
    const plan = await createInstallPlan(client, config, ["button"], { root });
    await applyInstallPlan(config, plan, { root });
    const content = await readFile(
      join(root, "src/ui/button/nested/Button.tsx"),
      "utf8"
    );
    expect(content).toContain('"use client";');
    expect(content).toContain('from "../../label"');
    expect(content).toContain('import("../../label/Label")');
    expect(content).toContain('from "@cyclone-ui/helpers"');
    expect(content).toContain("// @cyclone-ui/label stays a comment");
    expect(content).toContain('text = "@cyclone-ui/label"');
    expect(
      JSON.parse(await readFile(join(root, "package.json"), "utf8"))
    ).toMatchObject({
      dependencies: { "@cyclone-ui/helpers": "^2.4.0", react: "^19.1.0" }
    });
    expect((await readConfig(root))?.components).toMatchObject({
      button: { version: "1.2.3" },
      label: { version: "1.0.0" }
    });
    expect(
      (
        await createInstallPlan(client, config, ["button"], { root })
      ).files.every(file => file.status === "unchanged")
    ).toBe(true);
  });

  it("reports a missing item and rejects invalid source content before writing", async () => {
    serve({
      "components/button.json": {
        name: "button",
        files: [{ path: "index.ts" }]
      }
    });
    const client = registryClient(
      "https://example.com/custom/registry/registry.json"
    );
    await expect(client.components.get.query("missing")).rejects.toThrow(/404/);
    await expect(client.components.get.query("button")).rejects.toThrow(
      /content/i
    );
    await expect(client.components.get.query("../outside")).rejects.toThrow(
      /name/i
    );
  });
});

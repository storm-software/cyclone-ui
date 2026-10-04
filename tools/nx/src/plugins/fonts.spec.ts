import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { createNodesV2 } from "./fonts";

const temporaryRoots: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryRoots
      .splice(0)
      .map(root => rm(root, { force: true, recursive: true }))
  );
});

describe("Cyclone UI fonts plugin", () => {
  it("infers build and release targets for every font project", async () => {
    const workspaceRoot = await mkdtemp(
      join(tmpdir(), "cyclone-fonts-plugin-")
    );
    temporaryRoots.push(workspaceRoot);

    const projectRoot = "fonts/storm-sans";
    const configFile = `${projectRoot}/project.json`;
    await mkdir(join(workspaceRoot, projectRoot), { recursive: true });
    await mkdir(join(workspaceRoot, projectRoot, "StormSans-Regular.ufo"));
    await mkdir(join(workspaceRoot, projectRoot, "StormSans-Bold.ufo"));
    await writeFile(
      join(workspaceRoot, configFile),
      JSON.stringify({
        name: "fonts-storm-sans",
        projectType: "library",
        sourceRoot: projectRoot,
        targets: {}
      })
    );

    const [, createNodes] = createNodesV2;
    const result = await createNodes(
      [configFile],
      {},
      {
        nxJsonConfiguration: {},
        workspaceRoot
      }
    );

    expect(result).toEqual([
      [
        configFile,
        {
          projects: {
            [projectRoot]: {
              name: "fonts-storm-sans",
              projectType: "library",
              root: projectRoot,
              sourceRoot: projectRoot,
              release: {
                version: {
                  currentVersionResolver: "disk",
                  manifestRootsToUpdate: [
                    `${projectRoot}/StormSans-Bold.ufo`,
                    `${projectRoot}/StormSans-Regular.ufo`
                  ],
                  versionActions: "tools/nx/src/release/font-version-actions.ts"
                }
              },
              targets: {
                build: {
                  cache: true,
                  dependsOn: ["clean"],
                  executor: "nx:run-commands",
                  inputs: ["{projectRoot}/**/*"],
                  options: {
                    commands: [
                      "pnpm exec zx {projectRoot}/build.mjs",
                      'pnpm copyfiles --up=2 "{projectRoot}/dist/**/*" dist/{projectRoot}'
                    ],
                    parallel: false
                  },
                  outputs: [
                    "{projectRoot}/dist",
                    "{workspaceRoot}/dist/{projectRoot}"
                  ]
                },
                clean: {},
                "nx-release-publish": {
                  cache: false,
                  dependsOn: ["build"],
                  executor: "@cyclone-ui/tools-nx:font-publish",
                  inputs: ["{projectRoot}/dist/**/*"],
                  options: {}
                }
              }
            }
          }
        }
      ]
    ]);
  });
});

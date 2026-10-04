import type { ExecutorContext } from "@nx/devkit";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  getWorkspaceConfig: vi.fn(async () => ({})),
  upload: vi.fn(),
  writeFatal: vi.fn(),
  writeInfo: vi.fn(),
  writeSuccess: vi.fn()
}));

vi.mock(
  "@storm-software/cloudflare-tools/executors/r2-upload-publish/executor",
  () => ({ default: mocks.upload })
);
vi.mock("@storm-software/config-tools/get-config", () => ({
  getWorkspaceConfig: mocks.getWorkspaceConfig
}));
vi.mock("@storm-software/config-tools/logger/console", () => ({
  writeFatal: mocks.writeFatal,
  writeInfo: mocks.writeInfo,
  writeSuccess: mocks.writeSuccess
}));

import runExecutor from "./executor";

const temporaryRoots: string[] = [];

function createContext(root: string): ExecutorContext {
  return {
    projectName: "fonts-storm-sans",
    projectsConfigurations: {
      projects: {
        "fonts-storm-sans": {
          name: "fonts-storm-sans",
          root: "fonts/storm-sans"
        }
      },
      version: 2
    },
    root
  } as ExecutorContext;
}

async function addFontSources(
  root: string,
  boldMinor = 0,
  packageVersion = "1.0.0"
) {
  const projectRoot = join(root, "fonts/storm-sans");
  for (const [style, minor] of [
    ["Regular", 0],
    ["Bold", boldMinor]
  ] as const) {
    const ufoRoot = join(projectRoot, `StormSans-${style}.ufo`);
    await mkdir(ufoRoot, { recursive: true });
    await writeFile(
      join(ufoRoot, "fontinfo.plist"),
      `<plist><dict><key>versionMajor</key><integer>1</integer><key>versionMinor</key><integer>${minor}</integer></dict></plist>`
    );
  }
  await writeFile(
    join(projectRoot, "package.json"),
    JSON.stringify({ name: "fonts-storm-sans", version: packageVersion })
  );
}

describe("font publish executor", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.upload.mockResolvedValue({ success: true });
  });

  afterEach(async () => {
    await Promise.all(
      temporaryRoots
        .splice(0)
        .map(root => rm(root, { force: true, recursive: true }))
    );
  });

  it("uploads the current font project's generated output to the public font prefix", async () => {
    const root = await mkdtemp(join(tmpdir(), "cyclone-font-publish-"));
    temporaryRoots.push(root);
    await mkdir(join(root, "fonts/storm-sans/dist"), { recursive: true });
    await addFontSources(root);
    const context = createContext(root);

    await expect(runExecutor({ dryRun: true }, context)).resolves.toEqual({
      success: true
    });
    expect(mocks.upload).toHaveBeenCalledOnce();
    expect(mocks.upload).toHaveBeenCalledWith(
      {
        bucketId: "storm-cdn-cyclone-ui",
        bucketPath: "fonts",
        clean: false,
        dryRun: true,
        path: join(root, "fonts/storm-sans/dist"),
        writeMetaJson: false
      },
      context
    );
  });

  it("refuses to upload a font project with inconsistent UFO versions", async () => {
    const root = await mkdtemp(join(tmpdir(), "cyclone-font-publish-"));
    temporaryRoots.push(root);
    await mkdir(join(root, "fonts/storm-sans/dist"), { recursive: true });
    await addFontSources(root, 1);

    await expect(runExecutor({}, createContext(root))).resolves.toEqual({
      success: false
    });
    expect(mocks.upload).not.toHaveBeenCalled();
    expect(mocks.writeFatal).toHaveBeenCalledWith(
      expect.stringContaining("Inconsistent font versions")
    );
  });

  it("refuses to upload when the package version differs from the UFO version", async () => {
    const root = await mkdtemp(join(tmpdir(), "cyclone-font-publish-"));
    temporaryRoots.push(root);
    await mkdir(join(root, "fonts/storm-sans/dist"), { recursive: true });
    await addFontSources(root, 0, "0.0.1");

    await expect(runExecutor({}, createContext(root))).resolves.toEqual({
      success: false
    });
    expect(mocks.upload).not.toHaveBeenCalled();
    expect(mocks.writeFatal).toHaveBeenCalledWith(
      expect.stringContaining("package.json version")
    );
  });

  it("fails before upload when the font build output is missing", async () => {
    const root = await mkdtemp(join(tmpdir(), "cyclone-font-publish-"));
    temporaryRoots.push(root);

    await expect(runExecutor({}, createContext(root))).resolves.toEqual({
      success: false
    });
    expect(mocks.upload).not.toHaveBeenCalled();
    expect(mocks.writeFatal).toHaveBeenCalledWith(
      expect.stringContaining("does not exist")
    );
  });
});

import { createTreeWithEmptyWorkspace } from "@nx/devkit/testing";
import { describe, expect, it } from "vitest";
import FontVersionActions from "./font-version-actions";

const roots = [
  "fonts/storm-sans/StormSans-Bold.ufo",
  "fonts/storm-sans/StormSans-Regular.ufo"
];

function plist(major: number, minor: number) {
  return `<?xml version="1.0"?><plist><dict><key>versionMajor</key><integer>${major}</integer><key>versionMinor</key><integer>${minor}</integer></dict></plist>`;
}

function setup(boldVersion: [number, number] = [1, 0]) {
  const tree = createTreeWithEmptyWorkspace();
  tree.write(`${roots[0]}/fontinfo.plist`, plist(...boldVersion));
  tree.write(`${roots[1]}/fontinfo.plist`, plist(1, 0));
  tree.write(
    "fonts/storm-sans/package.json",
    JSON.stringify({ name: "fonts-storm-sans", version: "0.0.1" })
  );
  const actions = new FontVersionActions(
    {} as never,
    { name: "fonts-storm-sans", data: { root: "fonts/storm-sans" } } as never,
    {
      manifestRootsToUpdate: roots.map(path => ({
        path,
        preserveLocalDependencyProtocols: false
      })),
      preserveLocalDependencyProtocols: false
    } as never
  );
  return { actions, tree };
}

describe("font version actions", () => {
  it("reads the same current version from every UFO manifest", async () => {
    const { actions, tree } = setup();
    await actions.init(tree);

    await expect(
      actions.readCurrentVersionFromSourceManifest(tree)
    ).resolves.toEqual({
      currentVersion: "1.0.0",
      manifestPath: `${roots[0]}/fontinfo.plist`
    });
  });

  it("rejects inconsistent UFO versions before release", async () => {
    const { actions, tree } = setup([2, 0]);
    await actions.init(tree);

    await expect(
      actions.readCurrentVersionFromSourceManifest(tree)
    ).rejects.toThrow(/inconsistent/i);
  });

  it("rejects malformed plist XML even when version keys are present", async () => {
    const { actions, tree } = setup();
    tree.write(
      `${roots[0]}/fontinfo.plist`,
      "<plist><dict><key>versionMajor</key><integer>1</integer><key>versionMinor</key><integer>0</integer>"
    );
    await actions.init(tree);

    await expect(
      actions.readCurrentVersionFromSourceManifest(tree)
    ).rejects.toThrow(/fontinfo\.plist/i);
  });

  it("writes the new version to every UFO and the package manifest", async () => {
    const { actions, tree } = setup();
    await actions.init(tree);

    await actions.updateProjectVersion(tree, "2.0.0");

    for (const root of roots) {
      expect(tree.read(`${root}/fontinfo.plist`, "utf8")).toContain(
        "<key>versionMajor</key><integer>2</integer><key>versionMinor</key><integer>0</integer>"
      );
    }
    expect(
      JSON.parse(tree.read("fonts/storm-sans/package.json", "utf8")!)
    ).toMatchObject({
      version: "2.0.0"
    });
  });

  it("packs Nx minor and patch into the UFO minor value", async () => {
    const { actions, tree } = setup();
    await actions.init(tree);

    await actions.updateProjectVersion(tree, "1.2.3");

    for (const root of roots) {
      expect(tree.read(`${root}/fontinfo.plist`, "utf8")).toContain(
        "<key>versionMinor</key><integer>203</integer>"
      );
    }
    await expect(
      actions.readCurrentVersionFromSourceManifest(tree)
    ).resolves.toMatchObject({
      currentVersion: "1.2.3"
    });
  });

  it("rejects a version that cannot fit in a UFO minor integer", async () => {
    const { actions, tree } = setup();
    await actions.init(tree);

    await expect(actions.updateProjectVersion(tree, "1.10.0")).rejects.toThrow(
      /cannot encode/i
    );
    expect(tree.read(`${roots[0]}/fontinfo.plist`, "utf8")).toContain(
      "<key>versionMinor</key><integer>0</integer>"
    );
  });
});

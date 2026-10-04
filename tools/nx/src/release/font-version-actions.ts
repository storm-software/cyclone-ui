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

import type { ProjectGraph, Tree } from "@nx/devkit";
import { updateJson } from "@nx/devkit";
import { join } from "node:path";
import { VersionActions } from "nx/release";
import {
  consistentFontVersion,
  fontVersionToSemver,
  semverToFontVersion,
  updateFontVersions
} from "./font-version";

export default class FontVersionActions extends VersionActions {
  validManifestFilenames = ["fontinfo.plist"];

  async readCurrentVersionFromSourceManifest(tree: Tree) {
    const manifests = this.manifestsToUpdate;
    if (manifests.length === 0) {
      throw new Error(
        `No UFO fontinfo.plist manifests configured for ${this.projectGraphNode.name}.`
      );
    }

    const contents = manifests.map(({ manifestPath }) => {
      const content = tree.read(manifestPath, "utf8");
      if (content === null) {
        throw new Error(`Missing fontinfo.plist manifest: ${manifestPath}`);
      }
      return { path: manifestPath, content };
    });
    const version = await consistentFontVersion(
      contents,
      this.projectGraphNode.name
    );
    const first = contents[0];
    if (!first) {
      throw new Error(
        `No UFO fontinfo.plist manifests found for ${this.projectGraphNode.name}.`
      );
    }
    return {
      currentVersion: fontVersionToSemver(version),
      manifestPath: first.path
    };
  }

  async readCurrentVersionFromRegistry() {
    return null;
  }

  async readCurrentVersionOfDependency(
    _tree: Tree,
    _projectGraph: ProjectGraph,
    _dependencyProjectName: string
  ) {
    return { currentVersion: null, dependencyCollection: null };
  }

  async updateProjectVersion(tree: Tree, newVersion: string) {
    await this.readCurrentVersionFromSourceManifest(tree);
    const version = semverToFontVersion(newVersion);
    const manifests = this.manifestsToUpdate.map(({ manifestPath }) => {
      const content = tree.read(manifestPath, "utf8");
      if (content === null) {
        throw new Error(`Missing fontinfo.plist manifest: ${manifestPath}`);
      }
      return { path: manifestPath, content };
    });
    const updated = await updateFontVersions(manifests, version);
    for (const manifest of updated) {
      tree.write(manifest.path, manifest.content);
    }
    const packagePath = join(this.projectGraphNode.data.root, "package.json");
    if (tree.exists(packagePath)) {
      updateJson(tree, packagePath, packageJson => ({
        ...packageJson,
        version: newVersion
      }));
    }
    return updated.map(
      ({ path }) => `New font version ${newVersion} written to ${path}`
    );
  }

  async updateProjectDependencies() {
    return [];
  }
}

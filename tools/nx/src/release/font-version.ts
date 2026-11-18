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

import { workspaceRoot } from "@nx/devkit";
import { spawn } from "node:child_process";
import { join } from "node:path";

export interface FontVersion {
  major: number;
  minor: number;
}

// UFO stores two integers. Reserve two decimal digits of versionMinor for
// the Nx patch number, leaving one digit for the Nx minor number (0..9).
const PATCHES_PER_MINOR = 100;
const MAX_UFO_MINOR = 999;

export function fontVersionToSemver(version: FontVersion): string {
  if (version.minor > MAX_UFO_MINOR) {
    throw new Error(
      `UFO versionMinor ${version.minor} exceeds ${MAX_UFO_MINOR}.`
    );
  }
  return `${version.major}.${Math.floor(version.minor / PATCHES_PER_MINOR)}.${version.minor % PATCHES_PER_MINOR}`;
}

export function semverToFontVersion(version: string): FontVersion {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)$/);
  if (!match) {
    throw new Error(
      `Cannot encode font release version ${version} in UFO metadata.`
    );
  }
  const major = Number(match[1]);
  const minor = Number(match[2]);
  const patch = Number(match[3]);
  if (
    !Number.isSafeInteger(major) ||
    !Number.isSafeInteger(minor) ||
    !Number.isSafeInteger(patch) ||
    minor * PATCHES_PER_MINOR + patch > MAX_UFO_MINOR ||
    patch >= PATCHES_PER_MINOR
  ) {
    throw new Error(
      `Cannot encode font release version ${version} in UFO metadata.`
    );
  }
  return { major, minor: minor * PATCHES_PER_MINOR + patch };
}

interface FontManifest {
  path: string;
  content: string;
}

interface InspectedFontManifest {
  path: string;
  content?: string;
  version: FontVersion;
}

async function inspectWithFontTools(
  manifests: FontManifest[],
  newVersion?: FontVersion
): Promise<InspectedFontManifest[]> {
  const script = join(workspaceRoot, "tools/nx/src/release/font-version.py");
  const output = await new Promise<string>((resolve, reject) => {
    const child = spawn("python3", [script], {
      stdio: ["pipe", "pipe", "pipe"]
    });
    let stdout = "";
    let stderr = "";
    child.stdout.setEncoding("utf8").on("data", chunk => {
      stdout += chunk;
    });
    child.stderr.setEncoding("utf8").on("data", chunk => {
      stderr += chunk;
    });
    child.on("error", reject);
    child.on("close", code => {
      if (code === 0) {
        resolve(stdout);
      } else {
        reject(
          new Error(stderr.trim() || "FontTools could not read fontinfo.plist.")
        );
      }
    });
    child.stdin.end(JSON.stringify({ manifests, newVersion }));
  });

  return JSON.parse(output) as InspectedFontManifest[];
}

export async function consistentFontVersion(
  manifests: { path: string; content: string }[],
  projectName: string
): Promise<FontVersion> {
  if (manifests.length === 0) {
    throw new Error(
      `No UFO fontinfo.plist manifests found for ${projectName}.`
    );
  }
  const versions = await inspectWithFontTools(manifests);
  const firstEntry = versions[0];
  if (!firstEntry) {
    throw new Error(
      `No UFO fontinfo.plist manifests found for ${projectName}.`
    );
  }
  const first = firstEntry.version;
  if (
    versions.some(
      ({ version }) =>
        version.major !== first.major || version.minor !== first.minor
    )
  ) {
    throw new Error(
      `Inconsistent font versions in ${projectName}: ${versions
        .map(({ path, version }) => `${path}=${version.major}.${version.minor}`)
        .join(", ")}`
    );
  }
  return first;
}

export async function updateFontVersions(
  manifests: FontManifest[],
  version: FontVersion
): Promise<FontManifest[]> {
  return (await inspectWithFontTools(manifests, version)).map(
    ({ path, content }) => {
      if (content === undefined) {
        throw new Error(
          `FontTools did not return updated fontinfo.plist: ${path}`
        );
      }
      return { path, content };
    }
  );
}

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

/* eslint-disable unused-imports/no-unused-vars */

import { execFileSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import { constants } from "node:fs";
import {
  access,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  realpath,
  rename,
  rm,
  writeFile
} from "node:fs/promises";
import { delimiter, dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { decodeGlyphRange, validateGlyphRange } from "./glyph-pbf.mjs";

const toolsDir = dirname(fileURLToPath(import.meta.url));
const sha256 = bytes => createHash("sha256").update(bytes).digest("hex");
const json = value => `${JSON.stringify(value, null, 2)}\n`;

async function generatorIdentity() {
  for (const directory of (process.env.PATH || "").split(delimiter)) {
    const candidate = join(directory, "font-maker");
    try {
      await access(candidate, constants.X_OK);
    } catch {
      continue;
    }

    const executable = await realpath(candidate);
    const revision = (
      await readFile(
        resolve(dirname(executable), "../share/font-maker/revision"),
        "utf8"
      )
    ).trim();

    return {
      executable,
      revision,
      executableSha256: sha256(await readFile(executable))
    };
  }

  throw new Error(
    "font-maker is missing. Run this command inside devenv shell."
  );
}

export function runFontMaker(executable, name, output, font) {
  try {
    execFileSync(executable, ["--name", name, output, font], {
      stdio: ["ignore", "ignore", "pipe"]
    });
  } catch (error) {
    throw new Error(
      `font-maker failed for ${name}: ${error.stderr?.toString().trim() || error.message}`,
      { cause: error }
    );
  }
}

export async function replaceOutput(
  generated,
  outputDir,
  { renameDirectory = rename } = {}
) {
  // This backup is outside the staging directory: even a failed rollback must
  // survive the caller's unconditional staging cleanup.
  const backup = join(dirname(outputDir), `.glyphs-backup-${randomUUID()}`);

  let hadPrevious = false;
  try {
    await renameDirectory(outputDir, backup);
    hadPrevious = true;
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }

  try {
    await renameDirectory(generated, outputDir);
  } catch (error) {
    if (hadPrevious) {
      try {
        await renameDirectory(backup, outputDir);
      } catch (rollbackError) {
        throw new Error(
          `Unable to restore glyph output. Previous output preserved at ${backup}`,
          { cause: rollbackError }
        );
      }
    }
    throw error;
  }

  if (hadPrevious) await rm(backup, { recursive: true, force: true });
}

export async function generateGlyphs({
  projectDir: sourceDir,
  fontDir = join(sourceDir, "dist/ttf"),
  outputDir = join(sourceDir, "dist/pbf")
}) {
  const config = JSON.parse(
    await readFile(join(sourceDir, "glyphs.config.json"), "utf8")
  );

  const inputs = [];
  for (const face of config.faces) {
    const path = join(fontDir, face.file);
    try {
      inputs.push({ ...face, path, sha256: sha256(await readFile(path)) });
    } catch (error) {
      throw new Error(
        `Missing font ${path}. Run the font project's build target first.`,
        { cause: error }
      );
    }
  }

  const identity = await generatorIdentity();
  if (identity.revision !== config.generator.revision)
    throw new Error("font-maker revision differs from glyphs.config.json");

  const license = await readFile(join(sourceDir, "OFL.txt"));
  const version = JSON.parse(
    await readFile(join(sourceDir, "package.json"), "utf8")
  ).version;

  await mkdir(dirname(outputDir), { recursive: true });

  const staging = await mkdtemp(join(dirname(outputDir), ".glyphs-"));
  const generated = join(staging, "output");

  await mkdir(generated);

  try {
    const faces = [];
    for (const input of inputs) {
      const info = JSON.parse(
        execFileSync(
          "python",
          [join(toolsDir, "inspect-font.py"), input.path],
          { encoding: "utf8" }
        )
      );

      const temporary = join(staging, input.name);
      runFontMaker(identity.executable, input.name, temporary, input.path);

      const directory = join(temporary, input.name);
      if ((await readdir(directory)).length !== 256)
        throw new Error(`Expected 256 BMP ranges for ${input.name}`);

      const ranges = [];
      const actualCodepoints = [];
      for (let start = 0; start < 65536; start += 256) {
        const file = `${start}-${start + 255}.pbf`;
        const bytes = await readFile(join(directory, file));
        const range = decodeGlyphRange(bytes);
        const glyphCount = validateGlyphRange(range, input.name, start);
        actualCodepoints.push(...range.glyphs.map(glyph => glyph.id));
        ranges.push({ file, glyphCount, sha256: sha256(bytes) });
      }
      actualCodepoints.sort((a, b) => a - b);

      const expected = info.codepoints.filter(cp => cp <= 65535);
      if (JSON.stringify(actualCodepoints) !== JSON.stringify(expected))
        throw new Error(
          `Generated coverage differs from font cmap: ${input.name}`
        );
      const { path, ...source } = input;
      faces.push({
        ...source,
        fontVersion: info.version,
        coverage: {
          codepoints: actualCodepoints,
          glyphCount: actualCodepoints.length,
          scripts: info.scripts,
          omittedSupplementaryCodepoints: info.codepoints.filter(
            cp => cp > 65535
          )
        },
        notices: {
          copyright: info.copyright,
          license: info.license,
          licenseURL: info.licenseURL
        },
        ranges
      });
      await rename(directory, join(generated, input.name));
    }

    const manifest = {
      schemaVersion: 1,
      fontVersion: version,
      generator: {
        ...config.generator,
        executableSha256: identity.executableSha256
      },
      faces
    };

    await writeFile(join(generated, "manifest.json"), json(manifest));
    await writeFile(join(generated, "OFL.txt"), license);
    await replaceOutput(generated, outputDir);

    return manifest;
  } finally {
    await rm(staging, { recursive: true, force: true });
  }
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  try {
    if (process.argv.includes("--generator-identity")) {
      const { revision, executableSha256 } = await generatorIdentity();
      console.log(json({ revision, executableSha256 }).trim());
    } else {
      const sourceDir = resolve(process.argv[2]);
      const manifest = await generateGlyphs({ projectDir: sourceDir });
      console.log(
        `Generated ${manifest.faces.length} font faces in ${join(sourceDir, "dist/pbf")}`
      );
      for (const face of manifest.faces)
        console.log(
          `${face.name}: ${face.coverage.glyphCount} glyphs; scripts ${Object.keys(face.coverage.scripts).join(", ")}`
        );
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

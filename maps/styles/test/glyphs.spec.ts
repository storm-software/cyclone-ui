import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { createCycloneStyle, LOCAL_GLYPHS_URL } from "../src/cyclone-style";
import { getCountryName, getMultilineName } from "../src/language";

const config = JSON.parse(
  readFileSync(
    new URL("../../../fonts/storm-sans/glyphs.config.json", import.meta.url),
    "utf8"
  )
);
const names = new Set(config.faces.map((face: { name: string }) => face.name));

function fontNames(value: unknown): string[] {
  if (!value || typeof value !== "object") return [];
  const result: string[] = [];
  for (const [key, child] of Object.entries(value)) {
    if (key === "text-font") {
      const literals = (item: unknown): string[] => {
        if (!Array.isArray(item)) return [];
        if (item[0] === "literal") {
          assert.equal(
            item[1].length,
            1,
            "Combined font stacks require a glyph service"
          );
          return item[1] as string[];
        }
        return item.flatMap(literals);
      };
      if (
        Array.isArray(child) &&
        child.every(item => typeof item === "string")
      ) {
        assert.equal(
          child.length,
          1,
          "Combined font stacks require a glyph service"
        );
      }
      result.push(
        ...(Array.isArray(child) &&
        child.every(item => typeof item === "string")
          ? child
          : literals(child))
      );
    } else result.push(...fontNames(child));
  }
  return result;
}

for (const theme of ["light", "dark"] as const) {
  test(`${theme} labels only request generated single-face font stacks`, () => {
    const style = createCycloneStyle({
      theme,
      archiveUrl: "pmtiles://http://localhost:8000/test.pmtiles",
      glyphsUrl: LOCAL_GLYPHS_URL
    });
    assert.equal(
      style.glyphs,
      "http://127.0.0.1:8000/fonts/storm-sans/dist/pbf/{fontstack}/{range}.pbf"
    );
    const used = fontNames(style.layers);
    assert.ok(used.length > 10);
    for (const name of used)
      assert.ok(names.has(name), `Unexpected font ${name}`);
    assert.ok(used.includes("Regular"));
    assert.ok(used.includes("Medium"));
    assert.ok(used.includes("Italic"));
  });
}

test("accepts a versioned production glyph template and rejects malformed URLs", () => {
  const options = {
    theme: "light" as const,
    archiveUrl: "pmtiles://https://example.com/map.pmtiles"
  };
  const glyphsUrl =
    "https://example.com/glyphs/storm-sans/1.0.9/{fontstack}/{range}.pbf";
  assert.equal(createCycloneStyle({ ...options, glyphsUrl }).glyphs, glyphsUrl);
  for (const glyphsUrl of [
    "/fonts/{fontstack}/{range}.pbf",
    "https://example.com/fonts.pbf",
    "ftp://example.com/{fontstack}/{range}.pbf"
  ]) {
    assert.throws(
      () => createCycloneStyle({ ...options, glyphsUrl }),
      /glyph/i
    );
  }
});

test("script formatting only requests a generated font face", () => {
  for (const lang of ["en", "hi", "ja"]) {
    const expression = getMultilineName(lang, undefined, "Regular");
    for (const name of fontNames(expression)) assert.equal(name, "Regular");
    assert.ok(!JSON.stringify(expression).includes('"Storm Sans"'));
    assert.ok(!JSON.stringify(getCountryName(lang)).includes('"Storm Sans"'));
  }
});

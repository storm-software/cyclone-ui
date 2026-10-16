import type { StyleSpecification } from "@maplibre/maplibre-gl-style-spec";
import assert from "node:assert/strict";
import test from "node:test";
import { generateMapsStyle } from "../src/generate-style";

test("generates a style from explicit parameters", async () => {
  const style = JSON.parse(
    await generateMapsStyle(
      "https://example.com/tiles.json",
      "light",
      "fr",
      "https://example.com/sprites/light",
      "https://example.com/glyphs/{fontstack}/{range}.pbf"
    )
  ) as StyleSpecification;

  assert.deepEqual(style.sources.stormsoftware, {
    type: "vector",
    url: "https://example.com/tiles.json"
  });
  assert.equal(style.sprite, "https://example.com/sprites/light");
  assert.equal(
    style.glyphs,
    "https://example.com/glyphs/{fontstack}/{range}.pbf"
  );
  assert.ok(JSON.stringify(style.layers).includes("name:fr"));
});

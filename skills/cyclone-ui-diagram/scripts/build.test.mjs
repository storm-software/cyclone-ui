import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { build, component, html, svg } from "./build.mjs";
import { portableColor } from "./color.mjs";
import { tokens, validate } from "./validate.mjs";

const read = file =>
  JSON.parse(
    readFileSync(
      new URL(`../examples/${file}.diagram.json`, import.meta.url),
      "utf8"
    )
  );

test("both visual grammars build every delivery without external runtime files", () => {
  const out = mkdtempSync(join(tmpdir(), "cyclone-diagram-test-"));
  try {
    for (const name of ["cache-path", "release-sequence"]) {
      const source = read(name),
        folder = join(out, name);
      const result = build(source, folder);
      assert.equal(result.files.length, 5);
      assert.equal(readdirSync(folder).length, 5);
      const code = readFileSync(join(folder, result.files[1]), "utf8");
      assert.ok(code.includes('from "react-native-svg"'));
      assert.ok(!code.includes("@cyclone-ui/diagrams"));
      assert.ok(!code.includes("@ts-nocheck"));
      for (const scheme of ["light", "dark"]) {
        const image = readFileSync(
          join(folder, `diagram-${name}.${scheme}.svg`),
          "utf8"
        );
        assert.ok(image.includes(tokens.palettes[scheme].paper));
        assert.ok(image.includes(source.description));
      }
    }
  } finally {
    rmSync(out, { recursive: true, force: true });
  }
});

test("local definitions and accessibility IDs remain isolated across variants", () => {
  const source = read("cache-path");
  source.children.push({ tag: "g", attrs: { id: "title" } });
  const light = svg(source, "light"),
    dark = svg(source, "dark");
  for (const [markup, mode] of [
    [light, "light"],
    [dark, "dark"]
  ]) {
    const ids = [...markup.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(ids.length, new Set(ids).size);
    for (const reference of markup.matchAll(/url\(#([^)]*)\)/g))
      assert.ok(ids.includes(reference[1]));
    assert.ok(
      markup.includes(
        `aria-labelledby="dg-cache-path-${mode}-title dg-cache-path-${mode}-desc"`
      )
    );
  }
  assert.ok(component(source).includes("useId()"));
  assert.ok(
    light.includes(
      'svg[data-diagram="cache-path"][data-diagram-variant="light"]{'
    )
  );
  assert.ok(
    dark.includes(
      'svg[data-diagram="cache-path"][data-diagram-variant="dark"]{'
    )
  );
});

test("untrusted diagram text remains data in HTML, SVG and TSX", () => {
  const source = read("cache-path");
  source.title = '</title><script>alert("x")</script>';
  source.description = "A & B < C";
  source.children.push({
    tag: "text",
    attrs: { x: 10, y: 20 },
    text: '</script><img src=x onerror="boom">'
  });
  assert.ok(!html(source).includes("<script>"));
  assert.ok(svg(source).includes("A &amp; B &lt; C"));
  assert.ok(!component(source).includes("</script>"));
});

test("rejects unportable or invalid scene content before creating output", () => {
  const invalid = [
    source => source.children.push({ tag: "foreignObject" }),
    source => source.children.push({ tag: "rect", attrs: { fill: "#ff0000" } }),
    source =>
      source.children.push({
        tag: "path",
        attrs: { markerEnd: "url(https://example.com/arrow)" }
      }),
    source =>
      source.children.push({
        tag: "path",
        attrs: { markerEnd: "url(#missing)" }
      }),
    source =>
      source.children.push({ tag: "rect", attrs: { onClick: "alert(1)" } }),
    source => source.children.push({ tag: "circle", attrs: { r: Infinity } }),
    source => {
      source.name = "../output";
    },
    source => {
      source.height = 0;
    },
    source => source.children.push({ tag: "g", attrs: { id: "arrow" } })
  ];
  for (const change of invalid) {
    const source = read("cache-path");
    change(source);
    assert.throws(() => validate(source));
  }
});

test("snapshot uses Cyclone semantic roles and readable supporting text", () => {
  assert.equal(tokens.roles.accent, "primary");
  assert.equal(tokens.roles.onAccent, "on-primary");
  assert.equal(tokens.roles.line, "ink");
  assert.equal(tokens.roles.soft, "ink");
  assert.equal(tokens.fonts.label.fontFamily, "Storm Sans");
  assert.equal(tokens.fonts.title.fontFamily, "Storm Serif");
});

test("native SVG receives supported sRGB colors, including theme and opacity values", () => {
  assert.equal(portableColor("oklch(1 0 0)"), "rgba(255, 255, 255, 1)");
  assert.equal(portableColor("oklch(0 0 0)"), "rgba(0, 0, 0, 1)");
  assert.equal(portableColor("oklch(50% 0 0 / 25%)"), "rgba(99, 99, 99, 0.25)");
  assert.equal(portableColor("#abcdef"), "#abcdef");
  for (const palette of Object.values(tokens.palettes))
    for (const value of Object.values(palette)) {
      assert.match(portableColor(value), /^rgba\(\d+, \d+, \d+, 1\)$/);
    }
});

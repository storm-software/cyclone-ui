import { readFileSync, realpathSync } from "node:fs";
import { fileURLToPath } from "node:url";

export const tokens = JSON.parse(
  readFileSync(new URL("../assets/tokens.json", import.meta.url), "utf8")
);
export const tags = {
  g: "G",
  rect: "Rect",
  path: "Path",
  line: "Line",
  circle: "Circle",
  ellipse: "Ellipse",
  polygon: "Polygon",
  polyline: "Polyline",
  text: "Text",
  tspan: "TSpan",
  defs: "Defs",
  marker: "Marker",
  clipPath: "ClipPath"
};
const attributes = new Set(
  (
    "id x y x1 y1 x2 y2 cx cy r rx ry width height d points transform " +
    "fill stroke strokeWidth strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin " +
    "opacity fillOpacity strokeOpacity textAnchor fontSize fontFamily fontWeight fontStyle " +
    "letterSpacing dx dy markerStart markerMid markerEnd markerWidth markerHeight refX refY " +
    "orient markerUnits viewBox preserveAspectRatio clipPath clipPathUnits fillRule clipRule"
  ).split(" ")
);
const paint = new Set(["fill", "stroke"]);
const refs = new Set(["markerStart", "markerMid", "markerEnd", "clipPath"]);
const textTags = new Set(["text", "tspan"]);

export function validate(source) {
  const fail = message => {
    throw new Error(message);
  };
  if (!source || typeof source !== "object" || Array.isArray(source))
    fail("source must be an object");
  for (const key of Object.keys(source))
    if (
      !["name", "title", "description", "width", "height", "children"].includes(
        key
      )
    )
      fail(`unknown source field ${key}`);
  if (
    typeof source.name !== "string" ||
    !/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(source.name)
  )
    fail("name must be lowercase kebab case");
  for (const key of ["title", "description"])
    if (typeof source[key] !== "string" || !source[key].trim())
      fail(`${key} is required`);
  for (const key of ["width", "height"])
    if (!Number.isFinite(source[key]) || source[key] <= 0)
      fail(`${key} must be a positive number`);
  const ids = new Set(),
    references = [];
  let count = 0,
    labels = 0;
  const walk = (nodes, parent = "svg", depth = 0) => {
    if (!Array.isArray(nodes)) fail("children must be an array");
    if (depth > 32) fail("scene nesting exceeds 32 levels");
    for (const node of nodes) {
      if (++count > 10000) fail("scene exceeds 10000 primitives");
      if (!node || !Object.hasOwn(tags, node.tag))
        fail(`unsupported tag ${node?.tag}`);
      for (const key of Object.keys(node))
        if (!["tag", "attrs", "children", "text", "font"].includes(key))
          fail(`unknown node field ${key}`);
      if (
        node.attrs != null &&
        (typeof node.attrs !== "object" || Array.isArray(node.attrs))
      )
        fail("attrs must be an object");
      if (
        node.font &&
        (!textTags.has(node.tag) || !Object.hasOwn(tokens.fonts, node.font))
      )
        fail(`invalid font role ${node.font}`);
      if (
        node.text != null &&
        (!textTags.has(node.tag) || typeof node.text !== "string")
      )
        fail("text is allowed only as a string on text/tspan");
      if (node.tag === "tspan" && !textTags.has(parent))
        fail("tspan needs a text/tspan parent");
      if (node.tag === "text" && (node.text || node.children?.length)) labels++;
      for (const [key, value] of Object.entries(node.attrs ?? {})) {
        if (!attributes.has(key)) fail(`unsupported attribute ${key}`);
        if (
          !["number", "string"].includes(typeof value) ||
          (typeof value === "number" && !Number.isFinite(value))
        )
          fail(`invalid ${key}`);
        if (
          paint.has(key) &&
          value !== "none" &&
          !(
            typeof value === "string" &&
            value.startsWith("@") &&
            Object.hasOwn(tokens.roles, value.slice(1))
          )
        )
          fail(`${key} must use a palette role or none`);
        if (key === "id") {
          if (
            typeof value !== "string" ||
            !/^[a-zA-Z][\w-]*$/.test(value) ||
            ids.has(value)
          )
            fail(`invalid or duplicate id ${value}`);
          ids.add(value);
        }
        if (refs.has(key)) {
          const ref =
            typeof value === "string" &&
            /^url\(#([a-zA-Z][\w-]*)\)$/.exec(value);
          if (!ref) fail(`${key} must reference a local definition`);
          references.push(ref[1]);
        } else if (
          typeof value === "string" &&
          /url\s*\(|https?:|javascript:|[<>]/i.test(value)
        )
          fail(`external or invalid value in ${key}`);
        if (
          ["opacity", "fillOpacity", "strokeOpacity"].includes(key) &&
          (Number(value) < 0 ||
            Number(value) > 1 ||
            !Number.isFinite(Number(value)))
        )
          fail(`invalid ${key}`);
      }
      if (node.children) walk(node.children, node.tag, depth + 1);
    }
  };
  walk(source.children);
  if (!labels) fail("diagram must contain readable text");
  for (const id of references)
    if (!ids.has(id)) fail(`missing definition ${id}`);
  return { primitives: count, labels, definitions: ids.size };
}

if (
  process.argv[1] &&
  realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  try {
    if (process.argv.length !== 3)
      throw new Error("usage: node validate.mjs <name>.diagram.json");
    console.log(
      "Valid diagram:",
      validate(JSON.parse(readFileSync(process.argv[2], "utf8")))
    );
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

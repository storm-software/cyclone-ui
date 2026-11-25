import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.argv[2];
if (!root)
  throw new Error("usage: node sync-tokens.mjs <cyclone-ui-repository-root>");
const read = path => JSON.parse(readFileSync(resolve(root, path), "utf8"));
const base = "packages/tokens/src/tokens";
const primitives = read(`${base}/primitives/tokens.json`);
const shared = read(`${base}/semantic/tokens.json`);
const fontFamily = role => shared.typography[role].$value.fontFamily;
const roles = {
  paper: "canvas",
  panel: "surface",
  ink: "emphasis",
  muted: "ink",
  soft: "ink",
  rule: "hairline",
  line: "ink",
  accent: "primary",
  onAccent: "on-primary"
};
const get = (tree, path) => path.split(".").reduce((v, k) => v?.[k], tree);
const raw = (path, tree = primitives, seen = new Set()) => {
  if (seen.has(path)) throw new Error(`cyclic token ${path}`);
  seen.add(path);
  const token = get(tree, path) ?? get(primitives, path);
  if (!token || !("$value" in token)) throw new Error(`missing token ${path}`);
  const value = token.$value;
  const ref = typeof value === "string" && /^\{(.+)\}$/.exec(value);
  return ref ? raw(ref[1], tree, seen) : value;
};
const number = path => {
  const value = raw(path);
  if (typeof value === "number") return value;
  if (value.unit === "rem") return value.value * 16;
  if (value.unit === "px") return value.value;
  throw new Error(`unsupported dimension ${path}`);
};
const palettes = {};
for (const mode of ["light", "dark"]) {
  const semantic = read(`${base}/semantic/${mode}.tokens.json`);
  // Razorwind derives on-primary; these primitive foregrounds match its
  // light_base/dark_base output. Runtime components read the actual theme.
  palettes[mode] = Object.fromEntries(
    Object.entries(roles).map(([role, token]) => {
      const path =
        token === "primary"
          ? "color.base.primary"
          : token === "on-primary"
            ? mode === "light"
              ? "color.neutral.1"
              : "color.neutral.16"
            : `color.${token}`;
      return [role, raw(path, semantic)];
    })
  );
}
const fonts = {
  title: {
    fontFamily: fontFamily("editorial"),
    fontSize: number("font-size.2xl"),
    fontWeight: number("font-weight.normal")
  },
  label: {
    fontFamily: fontFamily("display"),
    fontSize: number("font-size.xs"),
    fontWeight: number("font-weight.semibold")
  },
  detail: {
    fontFamily: fontFamily("code"),
    fontSize: number("font-size.xxs"),
    fontWeight: number("font-weight.normal")
  },
  eyebrow: {
    fontFamily: fontFamily("eyebrow"),
    fontSize: number("font-size.xxxs"),
    fontWeight: number("font-weight.medium"),
    letterSpacing: number("letter-spacing.wider")
  },
  callout: {
    fontFamily: fontFamily("editorial"),
    fontSize: number("font-size.sm"),
    fontWeight: number("font-weight.normal"),
    fontStyle: "italic"
  }
};
const snapshot = {
  source:
    "storm-software/cyclone-ui: packages/tokens/src/tokens/primitives/tokens.json and semantic/{tokens.json,light.tokens.json,dark.tokens.json}; base on-primary foregrounds verified against Razorwind output",
  roles,
  palettes,
  fonts,
  radius: number("border-radius.sm"),
  spacing: Object.fromEntries(
    ["lg", "4xl", "7xl", "8xl"].map(key => [key, number(`spacing.${key}`)])
  )
};
writeFileSync(
  new URL("../assets/tokens.json", import.meta.url),
  `${JSON.stringify(snapshot, null, 2)}\n`
);
console.log("Updated cyclone-ui-diagram/assets/tokens.json");

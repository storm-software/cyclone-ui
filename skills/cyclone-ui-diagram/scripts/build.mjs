import { mkdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import { portableColor } from "./color.mjs";
import { tags, tokens, validate } from "./validate.mjs";

export const escape = value =>
  String(value).replace(
    /[&<>"']/g,
    c =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
      })[c]
  );
const json = value =>
  JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
const pascal = name =>
  name
    .split("-")
    .map(part => part[0].toUpperCase() + part.slice(1))
    .join("");
const xmlKey = key =>
  [
    "viewBox",
    "preserveAspectRatio",
    "refX",
    "refY",
    "markerWidth",
    "markerHeight",
    "markerUnits",
    "clipPathUnits"
  ].includes(key)
    ? key
    : key.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
const family = value =>
  value === "Storm Serif"
    ? "'Storm Serif', Georgia, serif"
    : value === "Google Sans Code"
      ? "'Google Sans Code', ui-monospace, monospace"
      : value === "Storm Sans"
        ? "'Storm Sans', system-ui, sans-serif"
        : value;
export function attrsOf(node) {
  const text = node.tag === "text";
  return {
    ...(text
      ? { fill: "@ink", ...tokens.fonts[node.font ?? "label"] }
      : node.font
        ? tokens.fonts[node.font]
        : {}),
    ...node.attrs
  };
}
export function paletteCss(mode = "auto", selector = "svg[data-diagram]") {
  const vars = scheme =>
    Object.entries(tokens.roles)
      .map(
        ([role, token]) =>
          `--dg-${role}:var(--diagram-${role},${mode === "auto" ? `var(--${token},${tokens.palettes[scheme][role]})` : tokens.palettes[scheme][role]});`
      )
      .join("");
  return (
    `${selector}{${vars(mode === "auto" ? "light" : mode)}}` +
    (mode === "auto"
      ? `@media(prefers-color-scheme:dark){${selector}{${vars("dark")}}}` +
        `:where(.t_light,[data-theme="light"]) ${selector}{${vars("light")}}` +
        `:where(.t_dark,[data-theme="dark"]) ${selector}{${vars("dark")}}`
      : "")
  );
}
export function svg(source, mode = "auto", suffix = mode) {
  validate(source);
  const prefix = `dg-${source.name}-${suffix}-`;
  const nodePrefix = `${prefix}node-`;
  const selector = `svg[data-diagram="${source.name}"][data-diagram-variant="${suffix}"]`;
  const render = node => {
    const attrs = Object.entries(attrsOf(node))
      .map(([key, original]) => {
        let value = original;
        if (typeof value === "string") {
          if (value.startsWith("@")) value = `var(--dg-${value.slice(1)})`;
          if (key === "id") value = nodePrefix + value;
          if (/^url\(#/.test(value))
            value = value.replace("url(#", `url(#${nodePrefix}`);
          if (key === "fontFamily") value = family(value);
        }
        return ` ${xmlKey(key)}="${escape(value)}"`;
      })
      .join("");
    return `<${node.tag}${attrs}>${escape(node.text ?? "")}${(node.children ?? []).map(render).join("")}</${node.tag}>`;
  };
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${source.width}" height="${source.height}" viewBox="0 0 ${source.width} ${source.height}" data-diagram="${source.name}" data-diagram-variant="${escape(suffix)}" role="img" aria-labelledby="${prefix}title ${prefix}desc" fill="none"><title id="${prefix}title">${escape(source.title)}</title><desc id="${prefix}desc">${escape(source.description)}</desc><style>${paletteCss(mode, selector)}</style><rect width="${source.width}" height="${source.height}" fill="var(--dg-paper)"/>${source.children.map(render).join("")}</svg>\n`;
}
export function html(source) {
  const light = tokens.palettes.light,
    dark = tokens.palettes.dark;
  return `<!doctype html>
<html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escape(source.title)} — Cyclone UI diagram</title>
<style>
:root{color-scheme:light dark;--page:${light.paper};--text:${light.ink};--rule:${light.rule}}
@media(prefers-color-scheme:dark){:root{--page:${dark.paper};--text:${dark.ink};--rule:${dark.rule}}}
html:has(#light:checked){color-scheme:light;--page:${light.paper};--text:${light.ink};--rule:${light.rule}}
html:has(#dark:checked){color-scheme:dark;--page:${dark.paper};--text:${dark.ink};--rule:${dark.rule}}
*{box-sizing:border-box}body{margin:0;padding:24px;background:var(--page);color:var(--text);font-family:'Storm Sans',system-ui,sans-serif}
main{max-width:${source.width}px;margin:auto}fieldset{display:flex;flex-wrap:wrap;gap:12px;border:0;padding:0;margin:0 0 24px}legend{font-size:12px;margin-bottom:8px}label{cursor:pointer}figure{margin:0}.viewport{overflow-x:auto;border:1px solid var(--rule)}svg{display:block;width:100%;min-width:${source.width}px;height:auto}figcaption{font-size:14px;line-height:1.6;margin-top:16px;max-width:72ch}
</style><main><fieldset><legend>Color scheme</legend><label><input id="auto" name="scheme" type="radio" checked> System</label><label><input id="light" name="scheme" type="radio"> Light</label><label><input id="dark" name="scheme" type="radio"> Dark</label></fieldset>
<figure><div class="viewport" tabindex="0" aria-label="Diagram; scroll horizontally on narrow screens">${svg(source)}</div><figcaption>${escape(source.description)}</figcaption></figure></main>
<style>html:has(#light:checked) svg[data-diagram]{${Object.entries(light)
    .map(([r, v]) => `--dg-${r}:var(--diagram-${r},${v});`)
    .join("")}}html:has(#dark:checked) svg[data-diagram]{${Object.entries(dark)
    .map(([r, v]) => `--dg-${r}:var(--diagram-${r},${v});`)
    .join("")}}</style></html>\n`;
}
export function component(source) {
  const Name = `${pascal(source.name)}Diagram`;
  const nodes = source.children.map(function expand(node) {
    const { font, ...rest } = node;
    return {
      ...rest,
      attrs: attrsOf(node),
      ...(node.children ? { children: node.children.map(expand) } : {})
    };
  });
  const imports = [...new Set(Object.values(tags))].join(", ");
  return `"use client";
// Generated from ${source.name}.diagram.json by cyclone-ui-diagram. Edit the JSON and rebuild.
import type { ComponentType, ReactNode } from "react";
import { createElement, useId } from "react";
import type { ViewProps } from "@tamagui/core";
import { View, useTheme, useThemeName } from "@tamagui/core";
import { Svg, ${imports} } from "react-native-svg";

const roles = ${json(tokens.roles)} as const;
const defaults = ${json(tokens.palettes)};
type Role = keyof typeof roles;
type Node = { tag: string; attrs?: Record<string, string | number>; text?: string; children?: Node[] };
const elements = { ${Object.entries(tags)
    .map(([tag, name]) => `${tag}: ${name}`)
    .join(", ")} };
const scene: Node[] = ${json(nodes)};
${portableColor.toString().replace("(value)", "(value: string)")}
export type ${Name}Props = Omit<ViewProps, "children"> & {
  label?: string;
  palette?: Partial<Record<Role, string>>;
};

export function ${Name}({ label = ${json(`${source.title}. ${source.description}`)}, palette = {}, ...props }: ${Name}Props) {
  const theme = useTheme();
  const themeName = useThemeName();
  const prefix = "dg-" + useId().replace(/[^a-zA-Z0-9_-]/g, "") + "-";
  const fallback = defaults[themeName.startsWith("dark") ? "dark" : "light"];
  const colors = {} as Record<Role, string>;
  for (const role of Object.keys(roles) as Role[]) {
    const token = palette[role] ?? roles[role];
    const variable = (theme as unknown as Record<string, { val?: unknown }>)[token];
    colors[role] = portableColor(variable?.val != null ? String(variable.val) : palette[role] ?? fallback[role]);
  }
  const render = (node: Node, key: number): ReactNode => {
    const attributes: Record<string, string | number> = {};
    for (const [name, original] of Object.entries(node.attrs ?? {})) {
      let value = original;
      if (typeof value === "string") {
        if (value.startsWith("@")) value = colors[value.slice(1) as Role];
        if (name === "id") value = prefix + value;
        if (value.startsWith("url(#")) value = value.replace("url(#", "url(#" + prefix);
      }
      attributes[name] = value;
    }
    // The closed scene grammar is validated at generation time. Element prop types differ.
    const Element = elements[node.tag as keyof typeof elements] as unknown as ComponentType<Record<string, unknown>>;
    return createElement(Element, { ...attributes, key }, node.text, ...((node.children ?? []).map(render)));
  };
  return <View width="100%" aspectRatio={${source.width / source.height}} role="img" aria-label={label} {...props}>
    <Svg width="100%" height="100%" viewBox="0 0 ${source.width} ${source.height}" fill="none">
      <Rect width={${source.width}} height={${source.height}} fill={colors.paper} />
      {scene.map(render)}
    </Svg>
  </View>;
}
`;
}
export function build(source, directory) {
  const stats = validate(source);
  const out = resolve(directory);
  mkdirSync(out, { recursive: true });
  const files = {
    [`diagram-${source.name}.html`]: html(source),
    [`${pascal(source.name)}Diagram.tsx`]: component(source),
    ...Object.fromEntries(
      ["auto", "light", "dark"].map(mode => [
        `diagram-${source.name}${mode === "auto" ? "" : `.${mode}`}.svg`,
        svg(source, mode)
      ])
    )
  };
  for (const [name, content] of Object.entries(files))
    writeFileSync(join(out, name), content);
  return { out, files: Object.keys(files), ...stats };
}
if (
  process.argv[1] &&
  realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  try {
    const { values, positionals } = parseArgs({
      allowPositionals: true,
      options: { out: { type: "string" } }
    });
    if (positionals.length !== 1)
      throw new Error(
        "usage: node build.mjs <name>.diagram.json [--out <directory>]"
      );
    console.log(
      build(JSON.parse(readFileSync(positionals[0], "utf8")), values.out ?? ".")
    );
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

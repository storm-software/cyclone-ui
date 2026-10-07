// Pre-builds src/index.mjs -> dist/index.mjs for the claude.ai/design sync.
//
// Why a pre-build: the component dists ship raw JSX inside `.mjs` (Storybook's
// Vite compiles it), which the design-sync converter's esbuild pass can't
// parse, and pnpm gives packages different `@tamagui/core` peer-variants, so a
// naive bundle would carry two Tamagui instances. This mirrors the Storybook
// Vite config (apps/storybook/.storybook/main.ts): JSX loader, react-native ->
// react-native-web aliases, and resolving every bare import from the Storybook
// app (its `resolve.dedupe` equivalent). React stays external so the converter
// maps it to window.React.
//
// Run from the repo root: node .design-sync/pkg/build.mjs
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "../..");
const sb = join(root, "apps/storybook");
const { build } = createRequire(join(root, ".ds-sync/package.json"))("esbuild");

const shims = join(sb, ".storybook/shims");
const alias = {
  "node:buffer": join(shims, "buffer.ts"),
  "node:path": join(shims, "path.ts"),
  "node:url": join(shims, "url.ts"),
  "@stryke/env/runtime-checks": join(shims, "stryke-env-runtime-checks.ts"),
  "react-native": "react-native-web",
  "react-native-svg": "@tamagui/react-native-svg",
  "react-native/Libraries/Renderer/shims/ReactFabric": "@tamagui/proxy-worm",
  "react-native/Libraries/Renderer/shims/ReactNative": "@tamagui/proxy-worm"
};
const external = /^react(-dom)?(\/.*)?$/;

// @cyclone-ui/state's dist is minified with JSX preserved, so a minified
// lowercase component (`<e duration=...>`) compiles to a DOM tag. Storybook
// aliases workspace packages to src/ and never sees this - do the same here.
const stateSource = (p) => {
  const m = /^@cyclone-ui\/state(?:\/(\w+))?$/.exec(p);
  if (!m) return undefined;
  const sub = m[1];
  return join(root, "packages/state/src", !sub ? "index.ts" : sub === "types" ? "types.ts" : `${sub}/index.ts`);
};

const fromStorybook = {
  name: "resolve-from-storybook",
  setup(b) {
    b.onResolve({ filter: /^[^./]/ }, async (a) => {
      if (a.pluginData === "sb" || external.test(a.path)) return null;
      const path = alias[a.path] ?? stateSource(a.path) ?? a.path;
      if (path.startsWith("/")) return { path };
      const r = await b.resolve(path, { kind: a.kind, resolveDir: sb, pluginData: "sb" });
      if (!r.errors.length) return r;
      return path === a.path ? null : b.resolve(path, { kind: a.kind, resolveDir: a.resolveDir, pluginData: "sb" });
    });
  }
};

await build({
  entryPoints: [join(here, "src/index.mjs")],
  outfile: join(here, "dist/index.mjs"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2020",
  jsx: "automatic",
  loader: { ".js": "jsx", ".mjs": "jsx" },
  // vite-plugin-react-native-web's resolution order: platform files first.
  resolveExtensions: [".web.tsx", ".web.ts", ".web.mjs", ".web.js", ".tsx", ".ts", ".mjs", ".js", ".jsx", ".json"],
  external: ["react", "react-dom", "react/*", "react-dom/*"],
  plugins: [fromStorybook],
  // Same globals the Storybook Vite config defines for its production build
  // (the reference the previews are verified against). Production also skips
  // Tamagui's dev-mode token warnings, which roughly double mount time.
  define: {
    "process.env.NODE_ENV": '"production"',
    // No TAMAGUI_TARGET: Storybook doesn't define it, and defining it enables
    // dead-in-storybook web-only blocks (Input's ::placeholder <style>).
    "process.env.TAMAGUI_BAIL_AFTER_SCANNING_X_CSS_RULES": '"false"',
    Bun: "undefined",
    Deno: "undefined",
    fastly: "undefined",
    Netlify: "undefined",
    EdgeRuntime: "undefined"
  },
  banner: { js: "var process = globalThis.process ?? { env: {} };" },
  logLevel: "warning"
});

// dist/styles.css (the converter picks it up as the package stylesheet): the
// same global CSS Storybook loads - `@fonts/fonts.css` (preview.tsx) with its
// URLs rebased to dist/, plus the `body` font rule from preview-body.html,
// which react-native-web <input>s inherit (else Times New Roman).
// The converter only resolves url()s inside the package dir, so the variable
// fonts are copied next to the stylesheet.
const fontsCss = readFileSync(join(root, "fonts/fonts.css"), "utf8").replace(
  /url\("\.\/storm-(sans|serif)\/dist\/([^"]+)"\)/g,
  (_, family, file) => {
    mkdirSync(join(here, "dist/fonts"), { recursive: true });
    copyFileSync(join(root, `fonts/storm-${family}/dist`, file), join(here, "dist/fonts", file));
    return `url("./fonts/${file}")`;
  }
);
const bodyRule = /body\s*\{[^}]*font-family[^}]*\}/.exec(readFileSync(join(sb, ".storybook/preview-body.html"), "utf8"))?.[0];
if (!bodyRule) throw new Error("body font-family rule not found in .storybook/preview-body.html");
// preview.tsx also imports "@tamagui/core/reset.css" - without it native
// <input> chrome (white background, border) shows through Input/Select.
const resetCss = readFileSync(createRequire(join(sb, "package.json")).resolve("@tamagui/core/reset.css"), "utf8");
writeFileSync(
  join(here, "dist/styles.css"),
  `${fontsCss}\n/* @tamagui/core/reset.css */\n${resetCss}\n/* from apps/storybook/.storybook/preview-body.html */\n${bodyRule}\n`
);

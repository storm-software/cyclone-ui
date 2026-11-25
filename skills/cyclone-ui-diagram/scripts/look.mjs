import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { parseArgs } from "node:util";
import { build } from "./build.mjs";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: { out: { type: "string" } }
});
if (positionals.length !== 1)
  throw new Error(
    "usage: node look.mjs <name>.diagram.json [--out <directory>]"
  );
const source = JSON.parse(readFileSync(positionals[0], "utf8"));
const result = build(source, values.out ?? ".");
const require = createRequire(join(process.cwd(), "package.json"));
let chromium;
for (const dependency of ["playwright", "playwright-core"]) {
  try {
    ({ chromium } = require(dependency));
    break;
  } catch (error) {
    if (error.code !== "MODULE_NOT_FOUND") throw error;
  }
}
if (!chromium)
  throw new Error(
    "No local Playwright dependency. Use the MCP-browser alternative in references/look.md; no browser check ran."
  );
const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROME_PATH
    ? { executablePath: process.env.CHROME_PATH }
    : {})
});
const failures = [];
try {
  const page = await browser.newPage();
  page.on("pageerror", error => failures.push(`page error: ${error.message}`));
  page.on("console", message => {
    if (message.type() === "error") failures.push(`console: ${message.text()}`);
  });
  page.on("request", request => {
    if (!/^(file|data):/.test(request.url()))
      failures.push(`unexpected request: ${request.url()}`);
  });
  async function inspect(label) {
    const issues = await page.evaluate(() => {
      const problems = [];
      if (!document.querySelector("svg[data-diagram]"))
        problems.push("diagram SVG is missing or invalid");
      if (document.documentElement.scrollWidth > innerWidth + 1)
        problems.push("page overflows viewport");
      for (const svg of document.querySelectorAll("svg[data-diagram]")) {
        const bounds = svg.getBoundingClientRect();
        if (!bounds.width || !bounds.height) problems.push("empty drawing");
        for (const text of svg.querySelectorAll("text")) {
          const box = text.getBoundingClientRect();
          if (
            box.left < bounds.left - 1 ||
            box.top < bounds.top - 1 ||
            box.right > bounds.right + 1 ||
            box.bottom > bounds.bottom + 1
          )
            problems.push(`text outside viewBox: ${text.textContent}`);
        }
      }
      return problems;
    });
    failures.push(...issues.map(issue => `${label}: ${issue}`));
    const picture = resolve(result.out, `diagram-${source.name}-${label}.png`);
    // Chromium's full-page capture can stall on a standalone SVG document.
    const isSvg = await page.evaluate(
      () => document.documentElement.tagName.toLowerCase() === "svg"
    );
    await page.screenshot({ path: picture, fullPage: !isSvg });
    console.log(picture);
  }
  for (const scheme of ["light", "dark"]) {
    await page.emulateMedia({ colorScheme: scheme });
    for (const width of [1200, 390]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(
        pathToFileURL(join(result.out, `diagram-${source.name}.html`)).href
      );
      await page.locator(`#${scheme}`).check();
      await page.evaluate(() => document.fonts.ready);
      await inspect(`${scheme}-${width}`);
    }
    await page.setViewportSize({
      width: Math.max(1200, source.width + 32),
      height: Math.max(900, source.height + 32)
    });
    await page.goto(
      pathToFileURL(join(result.out, `diagram-${source.name}.${scheme}.svg`))
        .href
    );
    await inspect(`static-${scheme}`);
  }
} finally {
  await browser.close();
}
if (failures.length) {
  console.error([...new Set(failures)].join("\n"));
  process.exitCode = 1;
} else
  console.log(
    "Browser checks passed. Inspect the screenshots for hierarchy, routing, collisions, and semantic correctness."
  );

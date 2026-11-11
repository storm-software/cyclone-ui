import { spawn } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { compile } from "tailwindcss";

const next = fileURLToPath(import.meta.resolve("next/dist/bin/next"));
const fixture = fileURLToPath(new URL("./fixture", import.meta.url));
let child;
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child?.kill(signal));
}

async function run(args, env = process.env) {
  return new Promise((resolve, reject) => {
    child = spawn(process.execPath, [next, ...args], {
      stdio: "inherit",
      env
    });
    child.on("error", reject);
    child.on("exit", (code, signal) => {
      if (code === 0) resolve();
      else reject(new Error(`Next.js exited with ${signal ?? code}`));
    });
  });
}

// The Tailwind probe's stylesheet, compiled as @tailwindcss/postcss would:
// the Cyclone UI theme, then Tailwind, for the classes the probe uses.
const require = createRequire(import.meta.url);
const probe = new URL("./fixture/app/tailwind-probe/", import.meta.url);
const tailwind = await compile(
  '@import "@cyclone-ui/tokens/tailwind.css";\n@import "tailwindcss";',
  {
    base: fileURLToPath(probe),
    loadStylesheet: async (id, base) => {
      const path = id.startsWith(".")
        ? resolve(base, id)
        : require.resolve(id === "tailwindcss" ? "tailwindcss/index.css" : id);
      return {
        path,
        base: dirname(path),
        content: await readFile(path, "utf8")
      };
    }
  }
);
const probeSource = await readFile(new URL("probe.tsx", probe), "utf8");
await writeFile(
  new URL("tailwind.css", probe),
  tailwind.build(
    [...probeSource.matchAll(/className="([^"]+)"/g)].flatMap(([, classes]) =>
      classes.split(/\s+/)
    )
  )
);

await run(["build", fixture], {
  ...process.env,
  NODE_ENV: "production",
  EXPOSE_TESTING_API: "1"
});
await run(["start", fixture, "--port", "3197"], {
  ...process.env,
  NODE_ENV: "production",
  EXPOSE_TESTING_API: "1"
});

import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

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

/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

/* eslint-disable unused-imports/no-unused-vars */

import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)));
const workspaceRoot = resolve(root, "..");
const port = Number(process.env.PORT || 8000);

createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }

  let path;
  let allowedRoot;
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname
    );
    const font = /^\/fonts\/(storm-sans|storm-serif)\/dist\/pbf\/(.+)$/.exec(
      pathname
    );
    allowedRoot = font
      ? resolve(workspaceRoot, "fonts", font[1], "dist/pbf")
      : root;
    path = resolve(allowedRoot, font ? font[2] : `.${pathname}`);
  } catch {
    response.writeHead(400).end();
    return;
  }

  if (!path.startsWith(`${allowedRoot}${sep}`)) {
    response.writeHead(403).end();
    return;
  }

  let info;
  try {
    info = await stat(path);
    if (!info.isFile()) throw new Error("not a file");
  } catch {
    response.writeHead(404).end();
    return;
  }

  const range = request.headers.range;
  const match = range?.match(/^bytes=(\d+)-(\d*)$/);
  if (range && !match) {
    response.writeHead(416, { "Content-Range": `bytes */${info.size}` }).end();
    return;
  }
  const start = match ? Number(match[1]) : 0;
  const end = match && match[2] ? Number(match[2]) : info.size - 1;
  if (start > end || end >= info.size) {
    response.writeHead(416, { "Content-Range": `bytes */${info.size}` }).end();
    return;
  }

  const type =
    extname(path) === ".json"
      ? "application/json"
      : extname(path) === ".pmtiles"
        ? "application/octet-stream"
        : extname(path) === ".pbf"
          ? "application/x-protobuf"
          : extname(path) === ".html"
            ? "text/html; charset=utf-8"
            : "text/plain; charset=utf-8";
  response.writeHead(match ? 206 : 200, {
    "Accept-Ranges": "bytes",
    "Access-Control-Allow-Origin": "*",
    "Content-Length": end - start + 1,
    "Content-Type": type,
    ...(match && { "Content-Range": `bytes ${start}-${end}/${info.size}` })
  });
  if (request.method === "HEAD") response.end();
  else {
    const stream = createReadStream(path, { start, end });
    // Regeneration can replace an asset between stat and opening the stream.
    // Fail that request without taking down the local server.
    stream.on("error", () => response.destroy());
    stream.pipe(response);
  }
}).listen(port, "127.0.0.1", () => {
  process.stdout.write(`Serving maps at http://127.0.0.1:${port}\n`);
});

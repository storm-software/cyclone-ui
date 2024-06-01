/**
 * Welcome to Cloudflare Workers!
 *
 * - Run `yarn dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 *   Tip: Test going to the /hello or /post.listPosts endpoints
 * - Run `wrangler publish --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { router } from "@cyclone-ui/registry-trpc/router";
import { createContext } from "@cyclone-ui/registry-trpc/context";
import type { Env } from "@cyclone-ui/registry-trpc/types";

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    return fetchRequestHandler({
      endpoint: "/registry",
      req,
      router,
      createContext: createContext(env)
    });
  }
};

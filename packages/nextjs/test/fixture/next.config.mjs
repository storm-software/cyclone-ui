import { withCycloneUI } from "../../src/index.ts";
export default withCycloneUI({
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    exposeTestingApiInProductionBuild: process.env.EXPOSE_TESTING_API === "1"
  }
});

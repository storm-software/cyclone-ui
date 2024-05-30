import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { Context } from "./context";

export const t = initTRPC.context<Context>().create();

export const router = t.router({
  getComponents: t.procedure.query(async ({ ctx }) => {
    const components = await ctx.storage.list({
      prefix: "registry/components"
    });

    return components.objects.map((component: R2Object) => ({
      name: component.key.replace("registry/components/", ""),
      version: component.customMetadata?.version,
      updatedOn: component.uploaded
    }));
  }),
  getComponent: t.procedure.input(z.string()).query(async ({ input, ctx }) => {
    const components: R2Objects = await ctx.storage.list({
      prefix: "registry/components"
    });

    return components.objects.map((component: R2Object) => ({
      name: component.key.replace("registry/components/", ""),
      version: component.customMetadata?.version,
      updatedOn: component.uploaded
    }));
  })
});

// export type definition of API
export type Router = typeof router;

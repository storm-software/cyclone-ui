import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { Context } from "./context";
import { ComponentDetails, ComponentMeta, ComponentSummary } from "./types";

const t = initTRPC.context<Context>().create();

const publicProcedure = t.procedure;
const createRouter = t.router;

const componentRouter = createRouter({
  list: publicProcedure.query<ComponentSummary[]>(async ({ ctx }) => {
    const storageList: R2Objects = await ctx.storage.list({
      prefix: "registry/components"
    });

    return storageList.objects.reduce(
      (ret: ComponentSummary[], storageObject: R2Object) => {
        let componentName = storageObject.key.replace(
          "registry/components/",
          ""
        );
        if (componentName.indexOf("/")) {
          componentName = componentName.substring(
            0,
            componentName.indexOf("/")
          );
        }

        if (
          !ret.some(c => c.name === componentName) &&
          storageList.objects.some(
            c => c.key === `registry/components/${componentName}/component.json`
          )
        ) {
          ret.push({
            name: componentName,
            version: storageObject.customMetadata?.version,
            description: storageObject.customMetadata?.description,
            updatedOn: storageObject.uploaded
          });
        }

        return ret;
      },
      []
    );
  }),
  get: publicProcedure
    .input(z.string())
    .query<ComponentDetails>(async ({ input, ctx }) => {
      const storageList: R2Objects = await ctx.storage.list({
        prefix: `registry/components/${input}/`
      });

      const storageFiles = await Promise.all(
        storageList.objects.map(storageObject =>
          ctx.storage.get(storageObject.key).then(content => ({
            name: storageObject.key.replace(
              `registry/components/${input}/`,
              ""
            ),
            content,
            updatedOn: storageObject.uploaded
          }))
        )
      );

      const metaFile = storageFiles.find(
        file => file.name === "component.json"
      );
      if (!metaFile || !metaFile.content) {
        throw new Error("Component meta not found");
      }

      const meta = await metaFile.content.json<ComponentMeta>();
      const componentFiles = storageFiles.filter(
        file => file.name !== "component.json" && file.content
      );
      const componentContent = await Promise.all(
        componentFiles
          .filter(file => file.name !== "component.json" && file.content)
          .map(file => Promise.resolve(file.content!.text()))
      );

      return {
        ...meta,
        files: componentFiles.map((file, index) => ({
          ...file,
          content: componentContent[index]
        }))
      };
    })
});

export const router = createRouter({
  component: componentRouter
});

// export type definition of API
export type Router = typeof router;

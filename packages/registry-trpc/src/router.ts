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

    let metaFiles = await Promise.all(
      storageList.objects.map(storageObject => {
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

        return ctx.storage
          .get(`registry/components/${componentName}/meta.json`)
          .then(content =>
            content ? content.json<ComponentMeta>() : undefined
          );
      })
    );
    metaFiles = metaFiles.filter(meta => meta !== undefined);

    return storageList.objects.reduce((ret, storageObject) => {
      let componentName = storageObject.key.replace("registry/components/", "");
      if (componentName.indexOf("/")) {
        componentName = componentName.substring(0, componentName.indexOf("/"));
      }

      const metaJson = metaFiles.find(
        metaFile => metaFile!.name === componentName
      );
      if (metaJson && !ret.some(c => c.name === componentName)) {
        ret.push({
          name: componentName,
          version: metaJson.version,
          release: metaJson.release,
          description: metaJson.description,
          tags: metaJson.tags,
          updatedOn: storageObject.uploaded
        });
      }

      return ret;
    }, [] as ComponentSummary[]);
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

      const metaFile = storageFiles.find(file => file.name === "meta.json");
      if (!metaFile || !metaFile.content) {
        throw new Error("Component meta not found");
      }

      const meta = await metaFile.content.json<ComponentMeta>();
      const componentFiles = storageFiles.filter(
        file => file.name !== "meta.json" && file.content
      );
      const componentContent = await Promise.all(
        componentFiles
          .filter(file => file.name !== "meta.json" && file.content)
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

/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import type {
  R2Object,
  R2ObjectBody,
  R2Objects
} from "@cloudflare/workers-types";
import { StormError } from "@storm-stack/errors";
import { z } from "zod";
import { createRouter, publicProcedure } from "../trpc";
import { ComponentDetails, ComponentMeta, ComponentSummary } from "../types";

type RegistryStorageFile = {
  name: string;
  content: R2ObjectBody | null;
  updatedOn: Date;
};

export const componentsRouter = createRouter({
  list: publicProcedure.query<ComponentSummary[]>(async ({ ctx }) => {
    const storageList: R2Objects = await ctx.storage.list({
      prefix: "registry/components"
    });

    const metaFiles = (
      await Promise.all(
        storageList.objects.map((storageObject: R2Object) => {
          let componentName = storageObject.key.replace(
            "registry/components/",
            ""
          );
          if (componentName.indexOf("/")) {
            componentName = componentName.slice(
              0,
              Math.max(0, componentName.indexOf("/"))
            );
          }

          return ctx.storage
            .get(`registry/components/${componentName}/meta.json`)
            .then((content: R2ObjectBody | null) =>
              content ? content.json<ComponentMeta>() : undefined
            );
        })
      )
    ).filter(Boolean) as ComponentMeta[];

    return storageList.objects.reduce(
      (ret: ComponentSummary[], storageObject: R2Object) => {
        let componentName = storageObject.key.replace(
          "registry/components/",
          ""
        );
        if (componentName.indexOf("/")) {
          componentName = componentName.slice(
            0,
            Math.max(0, componentName.indexOf("/"))
          );
        }

        const metaJson = metaFiles.find(
          (metaFile: ComponentMeta) => metaFile!.name === componentName
        );
        if (
          metaJson &&
          !ret.some(
            (component: ComponentSummary) => component.name === componentName
          )
        ) {
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
      },
      [] as ComponentSummary[]
    );
  }),
  get: publicProcedure
    .input(z.string())
    .query<ComponentDetails>(async ({ input, ctx }) => {
      const storageList: R2Objects = await ctx.storage.list({
        prefix: `registry/components/${input}/`
      });

      const storageFiles = (
        await Promise.all(
          storageList.objects.map((storageObject: R2Object) =>
            ctx.storage
              .get(storageObject.key)
              .then((content: R2ObjectBody | null) => ({
                name: storageObject.key.replace(
                  `registry/components/${input}/`,
                  ""
                ),
                content,
                updatedOn: storageObject.uploaded
              }))
          )
        )
      ).filter(Boolean) as RegistryStorageFile[];

      const metaFile = storageFiles.find(
        (file: RegistryStorageFile) => file.name === "meta.json"
      );
      if (!metaFile || !metaFile.content) {
        throw StormError.createNotFound("Metadata file");
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
          content: componentContent[index]!
        }))
      };
    })
});

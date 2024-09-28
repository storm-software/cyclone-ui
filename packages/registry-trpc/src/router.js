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
import { initTRPC } from "@trpc/server";
import { z } from "zod";
const t = initTRPC.context().create();
const publicProcedure = t.procedure;
const createRouter = t.router;
const componentsRouter = createRouter({
    list: publicProcedure.query(async ({ ctx }) => {
        const storageList = await ctx.storage.list({
            prefix: "registry/components"
        });
        const metaFiles = (await Promise.all(storageList.objects.map((storageObject) => {
            let componentName = storageObject.key.replace("registry/components/", "");
            if (componentName.indexOf("/")) {
                componentName = componentName.slice(0, Math.max(0, componentName.indexOf("/")));
            }
            return ctx.storage
                .get(`registry/components/${componentName}/meta.json`)
                .then((content) => content ? content.json() : undefined);
        }))).filter(Boolean);
        return storageList.objects.reduce((ret, storageObject) => {
            let componentName = storageObject.key.replace("registry/components/", "");
            if (componentName.indexOf("/")) {
                componentName = componentName.slice(0, Math.max(0, componentName.indexOf("/")));
            }
            const metaJson = metaFiles.find((metaFile) => metaFile.name === componentName);
            if (metaJson &&
                !ret.some((component) => component.name === componentName)) {
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
        }, []);
    }),
    get: publicProcedure
        .input(z.string())
        .query(async ({ input, ctx }) => {
        const storageList = await ctx.storage.list({
            prefix: `registry/components/${input}/`
        });
        const storageFiles = (await Promise.all(storageList.objects.map((storageObject) => ctx.storage
            .get(storageObject.key)
            .then((content) => ({
            name: storageObject.key.replace(`registry/components/${input}/`, ""),
            content,
            updatedOn: storageObject.uploaded
        }))))).filter(Boolean);
        const metaFile = storageFiles.find((file) => file.name === "meta.json");
        if (!metaFile || !metaFile.content) {
            throw new Error("Component meta not found");
        }
        const meta = await metaFile.content.json();
        const componentFiles = storageFiles.filter(file => file.name !== "meta.json" && file.content);
        const componentContent = await Promise.all(componentFiles
            .filter(file => file.name !== "meta.json" && file.content)
            .map(file => Promise.resolve(file.content.text())));
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
    components: componentsRouter
});
//# sourceMappingURL=router.js.map
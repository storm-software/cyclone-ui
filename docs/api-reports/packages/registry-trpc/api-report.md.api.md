## API Report File for "@cyclone-ui/registry-trpc"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="@cloudflare/workers-types" />

import { BuiltRouter } from '@trpc/server/unstable-core-do-not-import';
import { DecorateCreateRouterOptions } from '@trpc/server/unstable-core-do-not-import';
import { DefaultErrorShape } from '@trpc/server/unstable-core-do-not-import';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { TRPCQueryProcedure } from '@trpc/server';
import { TRPCRequestInfo } from '@trpc/server/unstable-core-do-not-import';

// @public (undocumented)
interface ComponentDetails extends ComponentMeta {
    // (undocumented)
    files: ComponentFile[];
}
export { ComponentDetails }
export { ComponentDetails as ComponentDetails_alias_1 }

// @public (undocumented)
interface ComponentFile {
    // (undocumented)
    checksum?: string;
    // (undocumented)
    content: string;
    // (undocumented)
    name: string;
    // (undocumented)
    updatedOn: Date;
}
export { ComponentFile }
export { ComponentFile as ComponentFile_alias_1 }

// @public (undocumented)
interface ComponentMeta extends ComponentHeader {
    // (undocumented)
    dependencies: Record<string, string>;
    // (undocumented)
    devDependencies: Record<string, string>;
    // (undocumented)
    internalDependencies: string[];
}
export { ComponentMeta }
export { ComponentMeta as ComponentMeta_alias_1 }

// @public (undocumented)
type ComponentPlatform = "web" | "mobile" | "all";

// @public (undocumented)
const ComponentPlatform: {
    WEB: ComponentPlatform;
    MOBILE: ComponentPlatform;
    ALL: ComponentPlatform;
};
export { ComponentPlatform }
export { ComponentPlatform as ComponentPlatform_alias_1 }

// @public (undocumented)
interface ComponentSummary extends ComponentHeader {
    // (undocumented)
    updatedOn: Date;
}
export { ComponentSummary }
export { ComponentSummary as ComponentSummary_alias_1 }

// @public (undocumented)
type Context = Awaited<ReturnType<typeof createContext>>;
export { Context }
export { Context as Context_alias_1 }

// @public (undocumented)
const createContext: (env: Env) => (options: FetchCreateContextFnOptions) => {
    version: string | undefined;
    storage: R2Bucket;
    req: Request;
    resHeaders: Headers;
    info: TRPCRequestInfo;
};
export { createContext }
export { createContext as createContext_alias_1 }

// @public (undocumented)
type Env = {
    STORAGE_BUCKET: R2Bucket;
};
export { Env }
export { Env as Env_alias_1 }

// @public (undocumented)
const HttpHeaders: {
    Version: string;
    Checksum: string;
};
export { HttpHeaders }
export { HttpHeaders as HttpHeaders_alias_1 }

// @public (undocumented)
type Router = typeof router;
export { Router }
export { Router as Router_alias_1 }

// @public (undocumented)
const router: BuiltRouter<    {
ctx: {
version: string | undefined;
storage: R2Bucket;
req: Request;
resHeaders: Headers;
info: TRPCRequestInfo;
};
meta: object;
errorShape: DefaultErrorShape;
transformer: false;
}, DecorateCreateRouterOptions<    {
component: BuiltRouter<    {
ctx: {
version: string | undefined;
storage: R2Bucket;
req: Request;
resHeaders: Headers;
info: TRPCRequestInfo;
};
meta: object;
errorShape: DefaultErrorShape;
transformer: false;
}, {
list: TRPCQueryProcedure<    {
input: void;
output: ComponentSummary[];
}>;
get: TRPCQueryProcedure<    {
input: string;
output: ComponentDetails;
}>;
}>;
}>>;
export { router }
export { router as router_alias_1 }

// (No @packageDocumentation comment for this package)

```

import type { R2Bucket } from "@cloudflare/workers-types";
export type ComponentPlatform = "web" | "mobile" | "all";
export declare const ComponentPlatform: {
    WEB: ComponentPlatform;
    MOBILE: ComponentPlatform;
    ALL: ComponentPlatform;
};
interface ComponentHeader {
    name: string;
    version?: string;
    release: string;
    tags: string[];
    description: string;
}
export interface ComponentSummary extends ComponentHeader {
    updatedOn: Date;
}
export interface ComponentMeta extends ComponentHeader {
    dependencies: Record<string, string>;
    devDependencies: Record<string, string>;
    internalDependencies: string[];
}
export interface ComponentFile {
    name: string;
    content: string;
    checksum?: string;
    updatedOn: Date;
}
export interface ComponentDetails extends ComponentMeta {
    files: ComponentFile[];
}
export declare const HttpHeaders: {
    Version: string;
    Checksum: string;
};
export type Env = {
    STORAGE_BUCKET: R2Bucket;
};
export {};

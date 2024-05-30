export interface ComponentSummary {
  name: string;
  version: string;
  createdOn: string;
  updatedOn?: string;
  description?: string;
}

export interface ComponentDetails extends ComponentSummary {
  content: string;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  internalDependencies: string[];
}

export const HttpHeaders = {
  Version: "x-cyclone-version"
};

export type Env = {
  STORAGE_BUCKET: R2Bucket;
};

interface ComponentHeader {
  name: string;
  version?: string;
  description?: string;
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
  updatedOn: Date;
}

export interface ComponentDetails extends ComponentMeta {
  files: ComponentFile[];
}

export const HttpHeaders = {
  Version: "x-cyclone-version"
};

export type Env = {
  STORAGE_BUCKET: R2Bucket;
};

export interface ComponentPublishExecutorSchema {
  packageRoot?: string;
  tsConfig: string;
  tag?: string;
  dryRun: boolean;
  verbose: boolean;
}

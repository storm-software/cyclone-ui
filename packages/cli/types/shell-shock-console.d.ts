declare module "shell-shock:console" {
  export interface WriteOptions {
    consoleFn?: (text: string) => void;
  }

  export interface WriteLineOptions extends WriteOptions {
    padding?: number;
    color?: "primary" | "secondary" | "tertiary";
  }

  export function write(
    text?: string | number | boolean | null,
    options?: WriteOptions
  ): void;

  export function writeLine(
    text?: string | number | boolean | null,
    options?: WriteLineOptions
  ): void;

  export function success(message: string, header?: string): void;

  export function gray(
    text: string | number | boolean | null | undefined,
    background?: boolean
  ): string;

  export function green(
    text: string | number | boolean | null | undefined,
    background?: boolean
  ): string;

  export function red(
    text: string | number | boolean | null | undefined,
    background?: boolean
  ): string;

  export function dim(
    text: string | number | boolean | null | undefined,
    background?: boolean
  ): string;
}

/**
 * Error used to cancel in-flight form validation when a provider unmounts.
 *
 * `@stryke/async` no longer exports `AbortError`.
 */
export declare class AbortError extends Error {
    name: string;
    constructor(message?: string);
}
//# sourceMappingURL=abort-error.d.ts.map
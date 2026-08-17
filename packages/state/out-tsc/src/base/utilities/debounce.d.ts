export interface DebounceOptions {
    /**
     * Call the `fn` on the [leading edge of the timeout](https://css-tricks.com/debouncing-throttling-explained-examples/#article-header-id-1).
     * Meaning immediately, instead of waiting for `wait` milliseconds.
     *
     * @defaultValue false
     */
    readonly leading?: boolean;
    /**
    Call the `fn` on trailing edge with last used arguments. Result of call is from previous call.
    @defaultValue true
    */
    readonly trailing?: boolean;
}
export declare function debounce<TArgs extends unknown[], TReturn>(fn: (...args: TArgs) => PromiseLike<TReturn> | TReturn, wait?: number, options?: DebounceOptions): (...args: TArgs) => Promise<TReturn>;
//# sourceMappingURL=debounce.d.ts.map
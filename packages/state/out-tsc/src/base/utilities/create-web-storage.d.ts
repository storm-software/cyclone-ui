import type { AsyncStorage, AsyncStringStorage, SyncStorage, SyncStringStorage } from "jotai/vanilla/utils/atomWithStorage";
export declare function createWebStorage<TValue>(getStringStorage: () => AsyncStringStorage | SyncStringStorage | undefined): AsyncStorage<TValue> | SyncStorage<TValue>;
//# sourceMappingURL=create-web-storage.d.ts.map
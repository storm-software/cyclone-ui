import { ValidationCause } from "../types";
export declare const useFormActions: <TFormValues extends Record<string, any> = Record<string, any>>() => {
    initializeField: (_name: string) => Promise<void>;
    uninitializeField: (_name: string) => Promise<void>;
    validate: (nextValues: TFormValues, cause: ValidationCause) => Promise<void>;
    change: (nextValues: TFormValues) => Promise<void>;
    submit: () => Promise<void>;
    reset: () => void;
};
//# sourceMappingURL=use-form-actions.d.ts.map
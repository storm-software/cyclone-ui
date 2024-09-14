import {
  atom,
  type Getter,
  type SetStateAction,
  type WritableAtom
} from "jotai/vanilla";
import { loadable } from "jotai/vanilla/utils";
import type { CommonState } from "./atom-with-validate";
import { ActionableNext } from "./types";

export type ExtractTypeOfValidatorValue<Type> =
  Type extends AtomWithValidation<infer X> ? X : never;

export type Validator<Keys extends symbol | string | number, Vals> = (
  values: Record<Keys, ExtractTypeOfValidatorValue<Vals>>
) => void | Promise<void>;

export type ValidatorState = {
  isValid: undefined | boolean;
  error: null | Error | unknown;
  isValidating: undefined | boolean;
};

export type AtomWithValidation<Value> = WritableAtom<
  CommonState<Value>,
  [SetStateAction<Value>],
  void
>;

type State<Values extends Record<string, unknown>> = {
  values: Values;
} & ValidatorState;

export type Options<Vkeys extends symbol | string | number, Vvals> = {
  validate: Validator<Vkeys, Vvals>;
};

export type FormControls<Keys extends string, Vals> = {
  isValid: boolean;
  fieldErrors: {
    [k in Keys]: string | Error | any;
  };
  touched: Record<Keys, boolean>;
  focused: Record<Keys, boolean>;
  setValue(key: Keys, value: Vals): void;
  setTouched(key: Keys, val: boolean): void;
  setFocused(key: Keys, val: boolean): void;
  handleOnChange(key: Keys): (val: any) => void;
  handleOnFocus(key: Keys): () => unknown;
  handleOnBlur(key: Keys): () => void;
  values: Record<Keys, ExtractTypeOfValidatorValue<Vals>>;
  error: unknown;
  isValidating: boolean | undefined;
};

const validateAtoms = <
  AtomGroup extends Record<string, AtomWithValidation<any>>,
  Keys extends keyof AtomGroup,
  Vals extends AtomGroup[Keys]
>(
  labeledAtoms: AtomGroup,
  validator: Validator<Keys, Vals>
) => {
  const valsAtom = atom((get: Getter) => {
    const values = Object.fromEntries(
      Object.entries(labeledAtoms).map(([k, v]) => {
        return [k, get(v).value];
      })
    );
    return values as Record<Keys, ExtractTypeOfValidatorValue<Vals>>;
  });

  if (process.env.NODE_ENV !== "production") {
    valsAtom.debugPrivate = true;
  }

  const baseAtom = atom(async get => {
    // extract value from each atom and assign to the given key as label
    return validator(get(valsAtom));
  });

  if (process.env.NODE_ENV !== "production") {
    baseAtom.debugPrivate = true;
  }

  const derv = atom(get => {
    const values = get(valsAtom);
    const loadableAtom = loadable(baseAtom);
    if (process.env.NODE_ENV !== "production") {
      loadableAtom.debugPrivate = true;
    }
    const loadableState = get(loadableAtom);

    const next: State<typeof values> = {
      isValid: true,
      isValidating: undefined,
      error: null,
      values
    };

    switch (loadableState.state) {
      case "loading": {
        next.isValid = undefined;
        next.isValidating = true;
        break;
      }
      case "hasData": {
        next.isValid = true;
        next.error = null;
        break;
      }
      case "hasError": {
        next.isValid = false;
        next.error = loadableState.error;
        break;
      }
      default: {
        next.isValid = true;
        next.isValidating = undefined;
        next.error = null;
        break;
      }
    }

    return next;
  });

  return derv;
};

const getDefaultOptions = <K extends symbol | string | number, V>() =>
  <Options<K, V>>{
    validate: v => v
  };

export function atomWithFormGroup<
  FormGroup extends Record<string, AtomWithValidation<any>>,
  Keys extends Extract<keyof FormGroup, string>,
  Vals extends FormGroup[Keys]
>(labeledAtoms: FormGroup, options?: Options<Keys, Vals>) {
  const { validate } = Object.assign(
    {},
    getDefaultOptions<Keys, Vals>(),
    options
  );
  const initBooleanState = Object.fromEntries(
    Object.entries(labeledAtoms).map(([k]) => [k, false])
  );

  const touchedState = atom(initBooleanState);
  const focusedState = atom(initBooleanState);
  const validating = validateAtoms(labeledAtoms, validate);

  const errorsAtom = atom(get => {
    return Object.fromEntries(
      Object.entries(labeledAtoms).map(([k, v]) => {
        const val = get(v);

        if (val.isValid === false) {
          return [k, val.error];
        }
        return [k, null];
      })
    );
  });

  // contains extracted values from the validated form group
  const formGroupAtomValues = atom(
    get => {
      return get(validating);
    },
    (get, set, next: ActionableNext) => {
      switch (next.action) {
        case "SET_TOUCHED": {
          return set(touchedState, {
            ...get(touchedState),
            [next.key]: Boolean(next.value)
          });
        }
        case "SET_FOCUSED": {
          return set(focusedState, {
            ...get(focusedState),
            [next.key]: Boolean(next.value)
          });
        }
        case "SET_VALUE":
        default: {
          const actOn = labeledAtoms[next.key];
          if (!actOn) {
            return get(validating);
          }
          return set(actOn, next.value);
        }
      }
    }
  );

  // Curated atom with combination of all the form level errors
  // form group errors, validation at form level, and field level
  // and controls to edit the form state if needed
  const formControlAtom = atom(
    (get, atomOptions) => {
      const errorVals = get(errorsAtom);
      const errLen = Object.keys(errorVals).filter(x => errorVals[x]).length;
      const validateAtomResult = get(formGroupAtomValues);
      const isValid = Boolean(validateAtomResult.isValid && errLen === 0);

      // INTERNAL USECASE, AVOID USING IN YOUR OWN LIBS
      const setter = atomOptions.setSelf;

      return {
        ...validateAtomResult,
        isValid,
        fieldErrors: <Record<Keys, any>>errorVals,
        touched: <Record<Keys, boolean>>get(touchedState),
        focused: <Record<Keys, boolean>>get(focusedState),
        setValue(key: Keys, value: Vals) {
          setter({
            action: "SET_VALUE",
            key,
            value
          });
        },
        setTouched(key: Keys, val: boolean) {
          setter({
            action: "SET_TOUCHED",
            key,
            value: val
          });
        },
        setFocused(key: Keys, val: boolean) {
          setter({
            action: "SET_FOCUSED",
            key,
            value: val
          });
        },
        handleOnChange(key: Keys) {
          return (val: any) => {
            setter({
              action: "SET_VALUE",
              key,
              value: val
            });
          };
        },
        handleOnFocus(key: Keys) {
          return () =>
            setter({
              action: "SET_FOCUSED",
              key,
              value: true
            });
        },
        handleOnBlur(key: Keys) {
          return () => {
            setter({
              action: "SET_TOUCHED",
              key,
              value: true
            });
            setter({
              action: "SET_FOCUSED",
              key,
              value: false
            });
          };
        }
      };
    },
    (_, set, next: ActionableNext) => set(formGroupAtomValues, next)
  );

  // Return read only atom to avoid direct modifications to the atom
  const forceCastedAtom = formControlAtom as unknown as WritableAtom<
    FormControls<Keys, Vals>,
    [next: ActionableNext],
    | void
    | ({
        values: Record<Keys, ExtractTypeOfValidatorValue<Vals>>;
      } & ValidatorState &
        FormControls<Keys, Vals>)
  >;

  return atom(get => get(forceCastedAtom));
}

export type ActionableNext = {
  action: "SET_VALUE" | "SET_FOCUSED" | "SET_TOUCHED";
  key: string;
  value: any;
};

export type ActionableFieldSetValue<TValue> = {
  action: "SET_VALUE";
  value: TValue;
};

export type ActionableFieldSetFocusedOrTouched = {
  action: "SET_FOCUSED" | "SET_TOUCHED";
  value?: boolean;
};

export type ActionableFieldNext<TValue> =
  | ActionableFieldSetValue<TValue>
  | ActionableFieldSetFocusedOrTouched;

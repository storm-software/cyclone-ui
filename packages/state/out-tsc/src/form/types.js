/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */
export const ValidationCause = {
    INITIALIZE: "initialize",
    CHANGE: "change",
    BLUR: "blur",
    SUBMIT: "submit",
    SERVER: "server"
};
export const FieldStatus = {
    BASE: "base",
    HELP: "discovery",
    SUCCESS: "success",
    INFO: "info",
    WARNING: "warning",
    ERROR: "danger"
};
// export type FieldBaseState<TFieldValue = any> = {
//   /**
//    * Internal value used by the Framework to identify the field.
//    */
//   // scope: string | null;
//   /**
//    * The name of the field.
//    *
//    * @remarks
//    * This is the name of the field nested inside internal objects/arrays (if they exist).
//    */
//   name: string;
//   /**
//    * The path segments of the name of the field.
//    */
//   path: string[];
//   /**
//    * The disabled state value.
//    */
//   disabled: InferFieldState<TFieldValue, boolean>;
//   /**
//    * The required state value.
//    */
//   required: InferFieldState<TFieldValue, boolean>;
//   /**
//    * The focused state value.
//    */
//   focused: InferFieldState<TFieldValue, boolean>;
//   /**
//    * A flag indicating whether the field has been touched.
//    */
//   touched: InferFieldState<TFieldValue, boolean>;
//   /**
//    * A flag indicating whether the field has been blurred.
//    */
//   blurred: InferFieldState<TFieldValue, boolean>;
//   /**
//    * A flag indicating whether the field is currently being validated.
//    */
//   validating: InferFieldState<TFieldValue, boolean>;
//   /**
//    * The results of the field validation.
//    */
//   validationResults: InferFieldState<TFieldValue, ValidationResults>;
//   /**
//    * The tab index of the field.
//    */
//   tabIndex: InferFieldState<TFieldValue, number>;
//   /**
//    * The reference of the field.
//    */
//   ref: InferFieldState<TFieldValue, LegacyRef<TamaguiTextElement>>;
//   /**
//    * The field group's initial values.
//    */
//   initialValue: TFieldValue | null;
//   /**
//    * The field group's current values.
//    */
//   value: TFieldValue | null;
//   /**
//    * The options provided when creating the field.
//    */
//   options: FieldOptions<TFieldValue> &
//     Required<
//       Pick<
//         FieldOptions<TFieldValue>,
//         "size" | "disabled" | "required" | "isEqual" | "debounceMs" | "validate"
//       >
//     >;
// };
// export type FieldState<TFieldValue = any> = FieldBaseState<TFieldValue> & {
//   /**
//    * The theme state value.
//    */
//   theme: string;
//   /**
//    * The size state value.
//    */
//   size: SizeTokens;
//   /**
//    * A flag that is `true` if the field's value has not been modified by the user. Opposite of `dirty`.
//    */
//   pristine: boolean;
//   /**
//    * A flag that is `true` if the field's value has been modified by the user. Opposite of `pristine`.
//    */
//   dirty: boolean;
// };
//# sourceMappingURL=types.js.map
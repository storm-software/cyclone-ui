import { isSetObject } from "@storm-stack/types/type-checks/is-set-object";
import { ValidationResults } from "../types";

export const isValidationResults = (value: any): value is ValidationResults => {
  return (
    isSetObject(value) &&
    (Array.isArray((value as ValidationResults).initialize) ||
      Array.isArray((value as ValidationResults).change) ||
      Array.isArray((value as ValidationResults).blur) ||
      Array.isArray((value as ValidationResults).submit) ||
      Array.isArray((value as ValidationResults).server))
  );
};

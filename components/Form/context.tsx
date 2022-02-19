import React, { createContext } from "react";

import { IObject } from "util/type";

export interface IForm {
  form: React.MutableRefObject<IObject>;
  getValues?: () => IObject;
  getValue?: (key: string) => any;
  setValue?: (key: string, value: any) => void;
  setValues?: (data: IObject) => void;
}

// CONTEXT
export const FormContext =
  createContext<{ form: React.MutableRefObject<IObject> }>(null);

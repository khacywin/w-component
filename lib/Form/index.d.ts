import React, { HTMLAttributes } from "react";
import { IObject } from "util/type";
/**
 * HOOK FORM
 */
export interface IForm {
    ref: React.MutableRefObject<IObject>;
    getValues?: () => IObject;
    getValue?: (key: string) => any;
}
export interface IFormControl {
    children: React.ComponentElement<any, any>;
    name?: string;
    defaultValue?: any;
}
export interface IUserForm {
    form: IForm;
    FormControl: (props: IFormControl) => JSX.Element;
}
export declare function useForm(): IUserForm;
/**
 * COMPONENT FORM
 */
export interface IFormRefProps extends HTMLAttributes<HTMLFormElement> {
    children: JSX.Element[];
    form: IForm;
    onFinish?: (data: IObject) => void;
}
export default function Form({ children, form: formRef, onChange, onFinish, ...props }: IFormRefProps): JSX.Element;

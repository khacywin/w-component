import React, { HTMLAttributes } from "react";
import { IObject } from "util/type";
/**
 * HOOK FORM
 */
export interface IUserForm {
    ref: React.MutableRefObject<IObject>;
    getValues?: () => IObject;
}
export declare function useForm(): IUserForm;
/**
 * COMPONENT FORM
 */
export interface IFormRefProps extends HTMLAttributes<HTMLFormElement> {
    children: JSX.Element[];
    form: IUserForm;
    onFinish?: (data: IObject) => void;
}
export default function Form({ children, form: formRef, onChange, onFinish, ...props }: IFormRefProps): JSX.Element;
/**
 * COMPONENT FORM CONTROL
 */
export declare function FormControl(): JSX.Element;

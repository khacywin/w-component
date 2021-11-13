import React, { HTMLAttributes } from "react";
import { IObject } from "components/util/type";
/**
 * HOOK FORM
 */
export interface UserForm {
    ref: React.MutableRefObject<IObject>;
    getValues?: () => IObject;
}
export declare function useForm(): UserForm;
/**
 * COMPONENT FORM
 */
export interface FormRefProps extends HTMLAttributes<HTMLFormElement> {
    children: JSX.Element[];
    form: UserForm;
    onFinish?: (data: IObject) => void;
}
export default function Form({ children, form: formRef, onChange, onFinish, ...props }: FormRefProps): JSX.Element;
/**
 * COMPONENT FORM CONTROL
 */
export declare function FormControl(): JSX.Element;

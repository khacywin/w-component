/**
 * @prop {string} label
 * @prop {'text' | 'number' | 'email' | 'password'} type
 */
import React from 'react';
import { TInput } from 'components/util/type';
/** Interface */
export interface InputProps {
    defaultValue?: string | number;
    disabled?: boolean;
    fnChange?: (val: any) => void;
    isInputTitle?: boolean;
    label?: string;
    name?: string;
    placeholder?: string;
    style?: React.CSSProperties;
    type: TInput;
    value?: any;
}
declare const _default: React.MemoExoticComponent<({ fnChange, isInputTitle, label, name, placeholder, style, type, value, ...props }: InputProps) => JSX.Element>;
/** Component */
export default _default;

/**
 *
 * @prop {string} label
 * @prop {(val: any) => void} fnChange
 * @prop {boolean} request
 * @prop {string} defaultValue
 * @prop {JSX.Element[]} children
 * @prop {boolean} isSearch
 */
import React from 'react';
export interface SelectProps {
    label?: string;
    name?: string;
    request?: boolean;
    children: any;
    defaultValue?: any;
    isSearch?: boolean;
    style?: React.CSSProperties;
    isMultiple?: boolean;
    value?: any;
    fnChange?: (val: any) => void;
}
declare const _default: React.MemoExoticComponent<(props: SelectProps) => JSX.Element>;
export default _default;

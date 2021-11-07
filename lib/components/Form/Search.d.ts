/**
 * @prop {(val: string) => void} fnSearch
 */
import React from 'react';
export interface SearchProps {
    fnSearch: (val: string) => void;
    defaultValue?: string;
    placeholder?: string;
    dark?: boolean;
    value?: string;
    onChange?: (...arg: any) => void;
}
declare const _default: React.MemoExoticComponent<(props: SearchProps) => JSX.Element>;
export default _default;

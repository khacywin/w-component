import React from 'react';
import { TSelectOption } from 'components/util/type';
interface IProps {
    list: TSelectOption[];
    value: string | string[];
    isSearch?: boolean;
    isMultiple?: boolean;
    fnSelect?: (val: string | string[]) => void;
}
declare const _default: React.MemoExoticComponent<(props: IProps) => JSX.Element>;
export default _default;

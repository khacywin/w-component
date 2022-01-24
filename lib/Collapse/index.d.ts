/**
 * Collapse for work
 * @prop {string} heading
 * @prop {JSX.Element[]} content - component
 * @prop {boolean} in - is show default
 */
import React from 'react';
interface Props {
    heading: string;
    children: JSX.Element | string;
    in?: boolean;
    noCollapse?: boolean;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;

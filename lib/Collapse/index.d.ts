/**
 * Collapse for work
 * @prop {string} heading
 * @prop {JSX.Element[]} content - component
 * @prop {boolean} in - is show default
 */
import React from 'react';
export interface CollapseProps {
    heading: string;
    children: JSX.Element | string;
    in?: boolean;
    noCollapse?: boolean;
}
declare const _default: React.MemoExoticComponent<(props: CollapseProps) => JSX.Element>;
export default _default;

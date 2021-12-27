/**
 * Dropdown menu
 * @prop {element} dropdown: button to click
 * @prop {element} children: button to click
 * @prop {element} dropdown_menu: menu
 * @prop {TPosition} position: position of menu
 * @prop {boolean} clickOut
 * @prop {string} className
 * @prop {string} className
 */
import React from "react";
import { CSSObject } from "styled-components";
import { TPosition } from "util/type";
interface IProps {
    dropdown?: JSX.Element | string;
    dropdown_menu: JSX.Element | string;
    children?: JSX.Element | string;
    full?: boolean;
    clickOut?: boolean;
    position?: TPosition;
    className?: string;
    styleDropdown?: CSSObject;
    isBaseParent?: boolean;
}
declare const _default: React.MemoExoticComponent<({ dropdown, dropdown_menu, full, clickOut, position, children, className, styleDropdown, isBaseParent, }: IProps) => JSX.Element>;
export default _default;

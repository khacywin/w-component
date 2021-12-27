/**
 * Dropdown menu
 * @props dropdown: button to click
 * @props dropdown_menu: menu
 * @props position: position of menu
 */
import React, { ReactElement } from "react";
declare type Position = "left" | "right" | "top" | "bottom";
interface Props {
    full?: boolean;
    position?: Position;
    title?: ReactElement | string;
    content: ReactElement | string;
    children: ReactElement | string;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;

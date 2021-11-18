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

import React, { useCallback, useEffect, useRef } from "react";

import { TPosition } from "components/util/type";
import useHandleDisplay from "components/util/hooks/useHandleDisplay";
import usePositionDropdown from "components/util/hooks/usePositionDropdown";

export interface DropdownProps {
  dropdown?: JSX.Element | string;
  dropdown_menu: JSX.Element | string;
  children?: JSX.Element | string;
  full?: boolean; // set width is 100% or initial
  clickOut?: boolean; // Hide dropdown menu when click
  position?: TPosition;
  className?: string;
}
export default React.memo(
  ({
    dropdown,
    dropdown_menu,
    full,
    clickOut = true,
    position,
    children,
    className,
  }: DropdownProps) => {
    const refDropdownMenu = useRef();

    const { isDisplay, onToggleDisplay } = useHandleDisplay(
      refDropdownMenu,
      clickOut
    );

    const onToggle = useCallback(() => {
      onToggleDisplay();
    }, [onToggleDisplay]);

    const { handlePosition } = usePositionDropdown(refDropdownMenu, {
      position,
    });

    useEffect(() => {
      isDisplay && handlePosition();
    }, [handlePosition, isDisplay]);

    return (
      <div className={`w-dropdown ` + className}>
        <div onClick={onToggle}>{dropdown || children}</div>
        {isDisplay && (
          <div
            className={`
              w-dropdown-menu dropdown-menu 
              ${className ? className + "-menu" : ""}
              ${full ? "full" : ""}
              ${position ? position : "left"}
            `}
            ref={refDropdownMenu}
          >
            {dropdown_menu}
          </div>
        )}
      </div>
    );
  }
);

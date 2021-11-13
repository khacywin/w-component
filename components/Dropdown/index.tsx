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
import { borderRadius, boxShadow, fontSize, space } from "components/util/css/base";

import { TPosition } from "components/util/type";
import styled from "styled-components";
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
      <WrapDropdownMenu className={className}>
        <Dropdown onClick={onToggle}>{dropdown || children}</Dropdown>
        {isDisplay && (
          <DropdownMenu
            className={
              "dropdown-menu " + (className ? className + "-menu" : "")
            }
            full={full}
            position={position || "left"}
            ref={refDropdownMenu}
          >
            {dropdown_menu}
          </DropdownMenu>
        )}
      </WrapDropdownMenu>
    );
  }
);

const WrapDropdownMenu = styled.div`
  position: relative;
`;

interface PropsDropdownMenu {
  full: boolean;
  position: TPosition;
}
const DropdownMenu = styled.div<PropsDropdownMenu>`
  position: absolute;
  min-width: 200px;
  background-color: var(--backgroundContent);
  z-index: 999;
  contain: layout;
  padding: 3px;

  ${boxShadow.menu};
  ${borderRadius.normal};
  ${(props) => props.full && "width: max-content"};
  ${(props) =>
    props.position === "right"
      ? "right: 2px;"
      : props.position === "left"
      ? "left: 2px;"
      : "bottom: calc(100% + 10px);"};

  hr {
    height: 1px;
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    display: block !important;
  }

  li {
    ${fontSize.normal};
    ${borderRadius.normal};
    ${space.P3.a};
    list-style: none;
    position: relative;
    width: max-content;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;

    div[src] {
      margin-right: 5px;
    }

    &:hover {
      background-color: var(--backgroundOpacity);
    }
  }
`;

const Dropdown = styled.div``;

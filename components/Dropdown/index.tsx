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

import { Dialog, TRefDialog } from "components";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { borderRadius, boxShadow, fontSize, space } from "css/base";
import styled, { CSSObject } from "styled-components";

import { TPosition } from "util/type";

interface IProps {
  dropdown?: JSX.Element | string;
  dropdown_menu: JSX.Element | string;
  children?: JSX.Element | string;
  full?: boolean; // set width is 100% or initial
  clickOut?: boolean; // Hide dropdown menu when click
  position?: TPosition;
  className?: string;
  styleDropdown?: CSSObject;
  isBaseParent?: boolean;
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
    styleDropdown,
    isBaseParent,
  }: IProps) => {
    const refDropdownMenu = useRef<HTMLDivElement>();
    const refDialog = useRef<TRefDialog>();
    const [widthElement, setWidthElement] = useState(0);
    const [isShow, setIsShow] = useState(false);

    const onToggle = useCallback(() => {
      setIsShow((isShow) => !isShow);
    }, []);

    useEffect(() => {
      if (isShow) {
        refDialog.current.show();
        isBaseParent && setWidthElement(refDropdownMenu.current.clientWidth);
      } else {
        refDialog.current.hide();
      }
    }, [isBaseParent, isShow]);

    return (
      <WrapDropdownMenu className={className}>
        <Dropdown ref={refDropdownMenu} onClick={onToggle}>
          {dropdown || children}
        </Dropdown>
        <Dialog refParent={refDropdownMenu} ref={refDialog} clickOut={clickOut} setIsShow={setIsShow}>
          <DropdownMenu
            width={widthElement}
            className={
              "dropdown-menu " + (className ? className + "-menu" : "")
            }
            style={styleDropdown}
            full={full}
            position={position || "left"}
          >
            {dropdown_menu}
          </DropdownMenu>
        </Dialog>
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
  width: number;
}
const DropdownMenu = styled.div<PropsDropdownMenu>`
  min-width: 100px;
  background-color: var(--backgroundContent);
  z-index: 999;
  padding: 3px;

  ${boxShadow.menu};
  ${borderRadius.normal};
  ${({ full }) => (full ? "width: max-content" : "")};
  ${({ width }) => (width ? `width: ${width}px;` : "")}
  ${({ position }) =>
    position === "right"
      ? "right: 2px;"
      : position === "left"
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

  & > li {
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

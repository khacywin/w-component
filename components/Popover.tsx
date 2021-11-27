/**
 * Dropdown menu
 * @props dropdown: button to click
 * @props dropdown_menu: menu
 * @props position: position of menu
 */

import React, { ReactElement, useRef } from "react";
import { borderRadius, boxShadow, fontSize, opacity, space } from "css/base";

import styled from "styled-components";
import transition from "css/transition";
import useHandleDisplay from "hooks/useHandleDisplay";
import useHandlePositionPortal from "hooks/useHandlePositionPortal";

const WrapPopover = styled.div`
  display: block;
  position: relative;
  width: min-content;
`;

type Position = "left" | "right" | "top" | "bottom";
interface PropsPopover {
  show: boolean;
  position: Position;
  full: boolean;
}

interface Props {
  full?: boolean; // set width is 100% or initial
  position?: Position;
  title?: ReactElement | string;
  content: ReactElement | string;
  children: ReactElement | string;
}
export default React.memo((props: Props) => {
  const refMenu: any = useRef();
  const ref = useRef();
  const { isDisplay, onToggleDisplay } = useHandleDisplay(refMenu);
  useHandlePositionPortal(refMenu, ref);

  return (
    <WrapPopover>
      <Dropdown ref={ref} onClick={onToggleDisplay}>
        {props.children}
      </Dropdown>
      <Popover
        ref={refMenu}
        full={!!props.full}
        position={props.position || "left"}
        show={isDisplay}
      >
        {props.title && <PopoverTitle>{props.title}</PopoverTitle>}
        <PopoverContent>{props.content}</PopoverContent>
      </Popover>
    </WrapPopover>
  );
});

const Popover = styled.div<PropsPopover>`
  & > * {
    display: ${(props) => !props.show && "none"};
  }
  position: absolute;
  min-width: 200px;
  background-color: var(--backgroundContent);
  z-index: 999;
  contain: layout;

  ${boxShadow.normal};
  ${borderRadius.normal};
  ${transition.popup};
  ${(props) => (props.show ? space.P2.a : space.P0.a)};
  ${(props) => (props.show ? transition.showPopup : transition.hiddenPopup)};
  ${(props) =>
    props.position === "right"
      ? "right: 0"
      : props.position === "left"
      ? "left: 0;"
      : props.position === "top" && "bottom: calc(100% + 10px);"};

  ${(props) => props.full && "width: 100%"};

  hr {
    height: 1px;
    ${opacity.ImageTransparent};
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

const Dropdown = styled.div`
  cursor: pointer;
  width: max-content;
`;

const PopoverTitle = styled.div`
  border-bottom: 1px solid var(--borderLight);
  padding: 5px;
  ${fontSize.big};
`;

const PopoverContent = styled.div`
  padding: 5px;
  padding-top: 8px;
`;

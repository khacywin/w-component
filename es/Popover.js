import React, { useRef } from 'react';
import { d as normal, n as normal$1, a as P2, o as P0, I as ImageTransparent, k as normal$2, l as P3, b as big } from './_lineOverflow-0f5e92ab.js';
import styled from 'styled-components';
import { t as transition } from './index-8505406e.js';
import { u as useHandleDisplay } from './useHandleDisplay-fdfdebb5.js';
import useHandlePositionPortal from 'hooks/useHandlePositionPortal';

/**
 * Dropdown menu
 * @props dropdown: button to click
 * @props dropdown_menu: menu
 * @props position: position of menu
 */
const WrapPopover = styled.div `
  display: block;
  position: relative;
  width: min-content;
`;
var Popover = React.memo((props) => {
    const refMenu = useRef();
    const ref = useRef();
    const { isDisplay, onToggleDisplay } = useHandleDisplay(refMenu);
    useHandlePositionPortal(refMenu, ref);
    return (React.createElement(WrapPopover, null,
        React.createElement(Dropdown, { ref: ref, onClick: onToggleDisplay }, props.children),
        React.createElement(Popover$1, { ref: refMenu, full: !!props.full, position: props.position || "left", show: isDisplay },
            props.title && React.createElement(PopoverTitle, null, props.title),
            React.createElement(PopoverContent, null, props.content))));
});
const Popover$1 = styled.div `
  & > * {
    display: ${(props) => !props.show && "none"};
  }
  position: absolute;
  min-width: 200px;
  background-color: var(--backgroundContent);
  z-index: 999;
  contain: layout;

  ${normal};
  ${normal$1};
  ${transition.popup};
  ${(props) => (props.show ? P2.a : P0.a)};
  ${(props) => (props.show ? transition.showPopup : transition.hiddenPopup)};
  ${(props) => props.position === "right"
    ? "right: 0"
    : props.position === "left"
        ? "left: 0;"
        : props.position === "top" && "bottom: calc(100% + 10px);"};

  ${(props) => props.full && "width: 100%"};

  hr {
    height: 1px;
    ${ImageTransparent};
  }

  li {
    ${normal$2};
    ${normal$1};
    ${P3.a};
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
const Dropdown = styled.div `
  cursor: pointer;
  width: max-content;
`;
const PopoverTitle = styled.div `
  border-bottom: 1px solid var(--borderLight);
  padding: 5px;
  ${big};
`;
const PopoverContent = styled.div `
  padding: 5px;
  padding-top: 8px;
`;

export { Popover as default };
//# sourceMappingURL=Popover.js.map

import React, { useRef, useCallback, useEffect } from 'react';
import { E as menu, n as normal, v as normal$1, w as P3 } from '../_lineOverflow-fd1b0d7f.js';
import styled from 'styled-components';
import { u as useHandleDisplay } from '../useHandleDisplay-fdfdebb5.js';
import { u as usePositionDropdown } from '../usePositionDropdown-f9b23788.js';

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
var index = React.memo(({ dropdown, dropdown_menu, full, clickOut = true, position, children, className, }) => {
    const refDropdownMenu = useRef();
    const { isDisplay, onToggleDisplay } = useHandleDisplay(refDropdownMenu, clickOut);
    const onToggle = useCallback(() => {
        onToggleDisplay();
    }, [onToggleDisplay]);
    const { handlePosition } = usePositionDropdown(refDropdownMenu, {
        position,
    });
    useEffect(() => {
        isDisplay && handlePosition();
    }, [handlePosition, isDisplay]);
    return (React.createElement(WrapDropdownMenu, { className: className },
        React.createElement(Dropdown, { onClick: onToggle }, dropdown || children),
        isDisplay && (React.createElement(DropdownMenu, { className: "dropdown-menu " + (className ? className + "-menu" : ""), full: full, position: position || "left", ref: refDropdownMenu }, dropdown_menu))));
});
const WrapDropdownMenu = styled.div `
  position: relative;
`;
const DropdownMenu = styled.div `
  position: absolute;
  min-width: 200px;
  background-color: var(--backgroundContent);
  z-index: 999;
  contain: layout;
  padding: 3px;

  ${menu};
  ${normal};
  ${(props) => props.full && "width: max-content"};
  ${(props) => props.position === "right"
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
    ${normal$1};
    ${normal};
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
const Dropdown = styled.div ``;

export { index as default };
//# sourceMappingURL=index.js.map

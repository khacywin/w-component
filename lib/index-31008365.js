'use strict';

var React = require('react');
var _lineOverflow = require('./_lineOverflow-b8a457d2.js');
var styled = require('styled-components');
var useHandleDisplay = require('./useHandleDisplay-16f1a228.js');
var usePositionDropdown = require('./usePositionDropdown-d8f294b5.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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
var Dropdown = React__default["default"].memo(({ dropdown, dropdown_menu, full, clickOut = true, position, children, className, }) => {
    const refDropdownMenu = React.useRef();
    const refMark = React.useRef();
    const { isDisplay, onToggleDisplay } = useHandleDisplay.useHandleDisplay(refDropdownMenu, clickOut);
    const onToggle = React.useCallback(() => {
        onToggleDisplay();
    }, [onToggleDisplay]);
    const { handlePosition } = usePositionDropdown.usePositionDropdown(refDropdownMenu, {
        position,
    });
    React.useEffect(() => {
        isDisplay && handlePosition();
    }, [handlePosition, isDisplay]);
    React.useEffect(() => {
        if (isDisplay) {
            const { x, y } = refMark.current.getBoundingClientRect();
            refMark.current.style.transform = `translate(-${x}px, -${y}px)`;
        }
    }, [isDisplay]);
    return (React__default["default"].createElement(WrapDropdownMenu, { className: className },
        React__default["default"].createElement(Dropdown$1, { onClick: onToggle }, dropdown || children),
        isDisplay && (React__default["default"].createElement(WrapMark, { ref: refMark },
            React__default["default"].createElement(DropdownMenu, { className: "dropdown-menu " + (className ? className + "-menu" : ""), full: full, position: position || "left", ref: refDropdownMenu }, dropdown_menu)))));
});
const WrapDropdownMenu = styled__default["default"].div `
  position: relative;
`;
const WrapMark = styled__default["default"].div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 900;
`;
const DropdownMenu = styled__default["default"].div `
  position: absolute;
  min-width: 200px;
  background-color: var(--backgroundContent);
  z-index: 999;
  contain: layout;
  padding: 3px;

  ${_lineOverflow.menu};
  ${_lineOverflow.normal};
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
    ${_lineOverflow.normal$2};
    ${_lineOverflow.normal};
    ${_lineOverflow.P3.a};
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
const Dropdown$1 = styled__default["default"].div ``;

exports.Dropdown = Dropdown;

'use strict';

var React = require('react');
var _lineOverflow = require('./_lineOverflow-f7594b16.js');
var styled = require('styled-components');
var index = require('./index-e168d184.js');
var useHandleDisplay = require('./useHandleDisplay-16f1a228.js');
var useHandlePositionPortal = require('hooks/useHandlePositionPortal');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var useHandlePositionPortal__default = /*#__PURE__*/_interopDefaultLegacy(useHandlePositionPortal);

/**
 * Dropdown menu
 * @props dropdown: button to click
 * @props dropdown_menu: menu
 * @props position: position of menu
 */
const WrapPopover = styled__default["default"].div `
  display: block;
  position: relative;
  width: min-content;
`;
var Popover = React__default["default"].memo((props) => {
    const refMenu = React.useRef();
    const ref = React.useRef();
    const { isDisplay, onToggleDisplay } = useHandleDisplay.useHandleDisplay(refMenu);
    useHandlePositionPortal__default["default"](refMenu, ref);
    return (React__default["default"].createElement(WrapPopover, null,
        React__default["default"].createElement(Dropdown, { ref: ref, onClick: onToggleDisplay }, props.children),
        React__default["default"].createElement(Popover$1, { ref: refMenu, full: !!props.full, position: props.position || "left", show: isDisplay },
            props.title && React__default["default"].createElement(PopoverTitle, null, props.title),
            React__default["default"].createElement(PopoverContent, null, props.content))));
});
const Popover$1 = styled__default["default"].div `
  & > * {
    display: ${(props) => !props.show && "none"};
  }
  position: absolute;
  min-width: 200px;
  background-color: var(--backgroundContent);
  z-index: 999;
  contain: layout;

  ${_lineOverflow.normal$1};
  ${_lineOverflow.normal};
  ${index.transition.popup};
  ${(props) => (props.show ? _lineOverflow.P2.a : _lineOverflow.P0.a)};
  ${(props) => (props.show ? index.transition.showPopup : index.transition.hiddenPopup)};
  ${(props) => props.position === "right"
    ? "right: 0"
    : props.position === "left"
        ? "left: 0;"
        : props.position === "top" && "bottom: calc(100% + 10px);"};

  ${(props) => props.full && "width: 100%"};

  hr {
    height: 1px;
    ${_lineOverflow.ImageTransparent};
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
const Dropdown = styled__default["default"].div `
  cursor: pointer;
  width: max-content;
`;
const PopoverTitle = styled__default["default"].div `
  border-bottom: 1px solid var(--borderLight);
  padding: 5px;
  ${_lineOverflow.big};
`;
const PopoverContent = styled__default["default"].div `
  padding: 5px;
  padding-top: 8px;
`;

module.exports = Popover;

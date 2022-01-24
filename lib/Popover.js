'use strict';

var React = require('react');
var css_base__space = require('./_space-5cfb2697.js');
require('./_fontWeight-72109252.js');
var css_base__fontSize = require('./_fontSize-5a701955.js');
require('./_zIndex-a46cddfb.js');
var css_base__opacity = require('./_opacity-19bf620b.js');
var css_base__borderRadius = require('./_borderRadius-3deadb9d.js');
var css_base__boxShadow = require('./_boxShadow-6d818d81.js');
require('./_lineOverflow-94c98c56.js');
var styled = require('styled-components');
var css_transition_index = require('./index-9390237c.js');
var _util_hooks_useHandleDisplay = require('./_util/hooks/useHandleDisplay.js');
var _util_hooks_usePositionDialog = require('./_util/hooks/usePositionDialog.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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
    const { isDisplay, onToggleDisplay } = _util_hooks_useHandleDisplay(refMenu);
    _util_hooks_usePositionDialog(refMenu, ref);
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

  ${css_base__boxShadow.normal};
  ${css_base__borderRadius.normal};
  ${css_transition_index.transition.popup};
  ${(props) => (props.show ? css_base__space.P2.a : css_base__space.P0.a)};
  ${(props) => (props.show ? css_transition_index.transition.showPopup : css_transition_index.transition.hiddenPopup)};
  ${(props) => props.position === "right"
    ? "right: 0"
    : props.position === "left"
        ? "left: 0;"
        : props.position === "top" && "bottom: calc(100% + 10px);"};

  ${(props) => props.full && "width: 100%"};

  hr {
    height: 1px;
    ${css_base__opacity.ImageTransparent};
  }

  li {
    ${css_base__fontSize.normal};
    ${css_base__borderRadius.normal};
    ${css_base__space.P3.a};
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
  ${css_base__fontSize.big};
`;
const PopoverContent = styled__default["default"].div `
  padding: 5px;
  padding-top: 8px;
`;

module.exports = Popover;

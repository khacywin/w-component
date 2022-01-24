'use strict';

var React = require('react');
require('./_space-5cfb2697.js');
require('./_fontWeight-72109252.js');
require('./_fontSize-5a701955.js');
require('./_zIndex-a46cddfb.js');
require('./_opacity-19bf620b.js');
var css_base__borderRadius = require('./_borderRadius-3deadb9d.js');
require('./_boxShadow-6d818d81.js');
require('./_lineOverflow-94c98c56.js');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function Tooltip({ children, title, position = "bottom", }) {
    return (React__default["default"].createElement(Wrap, { className: "w-tooltip" },
        React__default["default"].createElement(WrapChildren, { className: "w-tooltip-control" }, children),
        React__default["default"].createElement(WrapTooltip, { className: "w-tooltip-content", position: position }, title)));
}
const WrapTooltip = styled__default["default"].div `
  position: absolute;
  display: none;
  background-color: var(--backgroundContent);
  color: var(--text);
  padding: 8px 12px;
  box-shadow: 0 2px 2px var(--boxShadow);
  ${css_base__borderRadius.normal};

  ${({ position }) => position === "left"
    ? `
      right: calc(100% + 5px);
    `
    : position === "right"
        ? `
      left: calc(100% + 5px);
    `
        : position === "top"
            ? `
      bottom: calc(100% + 5px);
    `
            : `
      top: calc(100% + 5px);
    `}
`;
const WrapChildren = styled__default["default"].div `
  cursor: pointer;
`;
const Wrap = styled__default["default"].div `
  position: relative;

  &:hover ${WrapTooltip} {
    display: block;
  }
`;

module.exports = Tooltip;

'use strict';

var React = require('react');
var _lineOverflow = require('./_lineOverflow-f7594b16.js');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function Tooltip({ children, title, position = "bottom", }) {
    return (React__default["default"].createElement(Wrap, null,
        React__default["default"].createElement(WrapChildren, null, children),
        React__default["default"].createElement(WrapTooltip, { position: position }, title)));
}
const WrapTooltip = styled__default["default"].div `
  position: absolute;
  display: none;
  background-color: var(--backgroundContent);
  color: var(--text);
  padding: 8px 12px;
  box-shadow: 0 2px 2px var(--boxShadow);
  ${_lineOverflow.normal};

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

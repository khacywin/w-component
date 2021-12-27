'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _lineOverflow = require('../_lineOverflow-b8a457d2.js');
var styled = require('styled-components');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function index ({ children, className, error, fnClick, normal, primary, success, type, warning, }) {
    return (React__default["default"].createElement(Button, { type: type || "button", primary: !!primary, error: !!error, className: className || "", success: !!success, warning: !!warning, 
        // default={!!default}
        normal: !!normal, onClick: fnClick }, children));
}
const cssButton = styled.css `
  border: none;
  cursor: pointer;
  color: var(--white);
  padding: 7px 12px;
  ${_lineOverflow.normal};
  ${_lineOverflow.SemiFully};

  ${(props) => props.primary
    ? `
    background-color: var(--primary);
  `
    : props.success
        ? `
    background-color: var(--success);
  `
        : props.error
            ? `
    background-color: var(--error);
  `
            : props.warning
                ? `
    background-color: var(--warning);
  `
                : props.dark
                    ? `
    background-color: var(--dark);
  `
                    : props.normal
                        ? `
    background-color: transparent;
    color: var(--black);
  `
                        : `
    color: var(--black);
  `}

  &:hover {
    ${_lineOverflow.Fully};
  }

  &:focus {
    outline: 0;
  }

  &:active {
    opacity: 0.7;
  }
`;
const Button = styled__default["default"].button `
  ${cssButton};
`;

exports.cssButton = cssButton;
exports["default"] = index;

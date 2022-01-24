'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../_space-5cfb2697.js');
require('../_fontWeight-72109252.js');
require('../_fontSize-5a701955.js');
require('../_zIndex-a46cddfb.js');
var css_base__opacity = require('../_opacity-19bf620b.js');
var css_base__borderRadius = require('../_borderRadius-3deadb9d.js');
require('../_boxShadow-6d818d81.js');
require('../_lineOverflow-94c98c56.js');
var styled = require('styled-components');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Button ({ children, className, error, fnClick, normal, primary, success, type, warning, }) {
    return (React__default["default"].createElement(Button$1, { type: type || "button", primary: !!primary, error: !!error, className: className || "", success: !!success, warning: !!warning, 
        // default={!!default}
        normal: !!normal, onClick: fnClick }, children));
}
const cssButton = styled.css `
  border: none;
  cursor: pointer;
  color: var(--white);
  padding: 7px 12px;
  ${css_base__borderRadius.normal};
  ${css_base__opacity.SemiFully};

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
    ${css_base__opacity.Fully};
  }

  &:focus {
    outline: 0;
  }

  &:active {
    opacity: 0.7;
  }
`;
const Button$1 = styled__default["default"].button `
  ${cssButton};
`;

exports.cssButton = cssButton;
exports["default"] = Button;

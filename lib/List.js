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

function List({ children }) {
    return React__default["default"].createElement(Wrap, null, children);
}
const Wrap = styled__default["default"].div `
  & > li,
  & > div {
    padding: 3px 10px;
    transition: 0.2s all ease-in;

    ${css_base__borderRadius.normal};

    &:hover {
      background-color: var(--background);
    }
  }
`;

module.exports = List;

'use strict';

var React = require('react');
var _lineOverflow = require('./_lineOverflow-f7594b16.js');
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

    ${_lineOverflow.normal};

    &:hover {
      background-color: var(--background);
    }
  }
`;

module.exports = List;

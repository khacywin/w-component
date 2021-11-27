'use strict';

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function NoData({ children }) {
    return React__default["default"].createElement(Wrap, { className: 'no-data' }, children || 'No data');
}
const Wrap = styled__default["default"].div `
  text-align: center;
  padding: 20px;
  opacity: 0.6;
  user-select: none;
`;

module.exports = NoData;

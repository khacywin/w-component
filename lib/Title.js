'use strict';

var React = require('react');
var styled = require('styled-components');
var _lineOverflow = require('./_lineOverflow-b8a457d2.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const Title = styled__default["default"].div `
  ${_lineOverflow.big};
  ${_lineOverflow.bold};
`;
function Title$1 (props) {
    return React__default["default"].createElement(Title, null,
        props.children,
        " ");
}

module.exports = Title$1;

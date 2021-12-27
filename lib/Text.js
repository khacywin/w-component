'use strict';

var React = require('react');
var styled = require('styled-components');
var _lineOverflow = require('./_lineOverflow-b8a457d2.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const Text = styled__default["default"].span `
  ${(props) => _lineOverflow.fontWeight[props.fontWeight]};
  ${(props) => _lineOverflow.fontSize[props.fontSize]};
`;
function Text$1 (props) {
    return (React__default["default"].createElement(Text, { fontWeight: props.fontWeight || 'normal', fontSize: props.fontSize || 'normal' }, props.children));
}

module.exports = Text$1;

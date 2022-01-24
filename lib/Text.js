'use strict';

var React = require('react');
var styled = require('styled-components');
require('./_space-5cfb2697.js');
var css_base__fontWeight = require('./_fontWeight-72109252.js');
var css_base__fontSize = require('./_fontSize-5a701955.js');
require('./_zIndex-a46cddfb.js');
require('./_opacity-19bf620b.js');
require('./_borderRadius-3deadb9d.js');
require('./_boxShadow-6d818d81.js');
require('./_lineOverflow-94c98c56.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const Text = styled__default["default"].span `
  ${(props) => css_base__fontWeight.fontWeight[props.fontWeight]};
  ${(props) => css_base__fontSize.fontSize[props.fontSize]};
`;
function Text$1 (props) {
    return (React__default["default"].createElement(Text, { fontWeight: props.fontWeight || 'normal', fontSize: props.fontSize || 'normal' }, props.children));
}

module.exports = Text$1;

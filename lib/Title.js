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

const Title = styled__default["default"].div `
  ${css_base__fontSize.big};
  ${css_base__fontWeight.bold};
`;
function Title$1 (props) {
    return React__default["default"].createElement(Title, null,
        props.children,
        " ");
}

module.exports = Title$1;

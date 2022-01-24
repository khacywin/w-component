'use strict';

var css_base__space = require('./_space-5cfb2697.js');
var css_base__fontWeight = require('./_fontWeight-72109252.js');
var css_base__fontSize = require('./_fontSize-5a701955.js');
require('./_zIndex-a46cddfb.js');
require('./_opacity-19bf620b.js');
require('./_borderRadius-3deadb9d.js');
require('./_boxShadow-6d818d81.js');
var css_base__lineOverflow = require('./_lineOverflow-94c98c56.js');
var Icon = require('./Icon.js');
var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/**
 * Subtitle
 * @prop {} icon: src of icon
 * @prop {string} title
 * @prop {string} color
 * @prop {Direction} direction: row | column | row-reserve | column-reserve
 */
function Subtitle (props) {
    return (React__default["default"].createElement(WrapSubtitle, { direction: props.direction || 'row', color: props.color || '#999999' },
        React__default["default"].createElement(Subtitle$1, null, props.children || props.title),
        props.icon ? React__default["default"].createElement(Icon, { icon: props.icon, color: props.color || '#999999' }) : ''));
}
const WrapSubtitle = styled__default["default"].div `
  display: inline-flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  color: ${(props) => props.color};

  .icon{
    transform: translateY(2px);
  }
`;
const Subtitle$1 = styled__default["default"].div `
  ${css_base__fontSize.small};
  ${css_base__fontWeight.light};
  ${css_base__space.P2.x};
  ${css_base__lineOverflow.one};
  max-width: 200px;
  width: 100%;
`;

module.exports = Subtitle;

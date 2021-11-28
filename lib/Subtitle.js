'use strict';

var _lineOverflow = require('./_lineOverflow-0611c7f0.js');
var Icon = require('./Icon-b6bdc54f.js');
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
        props.icon ? React__default["default"].createElement(Icon.Icon, { icon: props.icon, color: props.color || '#999999' }) : ''));
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
  ${_lineOverflow.small};
  ${_lineOverflow.light};
  ${_lineOverflow.P2.x};
  ${_lineOverflow.one};
  max-width: 200px;
  width: 100%;
`;

module.exports = Subtitle;

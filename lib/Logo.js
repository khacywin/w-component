'use strict';

var React = require('react');
var logo = require('./logo-162bc68e.js');
var logoCharacter = require('./logo-character-73d9a4d2.js');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function Logo ({ text }) {
    return (React__default["default"].createElement(Logo$1, null, text ? (React__default["default"].createElement("img", { src: logoCharacter.img, alt: "logo" })) : (React__default["default"].createElement("img", { src: logo.img, alt: "logo" }))));
}
const Logo$1 = styled__default["default"].div `
  min-width: 40px;
  height: 28px;

  img {
    height: 100%;
    width: auto;
  }
`;

module.exports = Logo;

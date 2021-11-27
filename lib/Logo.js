'use strict';

var React = require('react');
var logoImg = require('assets/images/logo.svg');
var logoText = require('assets/images/logo-character.png');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var logoImg__default = /*#__PURE__*/_interopDefaultLegacy(logoImg);
var logoText__default = /*#__PURE__*/_interopDefaultLegacy(logoText);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const Logo = styled__default["default"].div `
  min-width: 40px;
  height: 28px;

  img {
    height: 100%;
    width: auto;
  }
`;
function Logo$1 ({ text }) {
    return (React__default["default"].createElement(Logo, null, text ? (React__default["default"].createElement("img", { src: logoText__default["default"], alt: "logo" })) : (React__default["default"].createElement("img", { src: logoImg__default["default"], alt: "logo" }))));
}

module.exports = Logo$1;

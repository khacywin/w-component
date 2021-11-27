'use strict';

var reactRouterDom = require('./react-router-dom-2b875820.js');
var React = require('react');
var logoImg = require('assets/images/logo.svg');
var logoText = require('assets/images/logo-character.png');
var styled = require('styled-components');
require('./inheritsLoose-60b82b3e.js');
require('./_commonjsHelpers-b30fe163.js');

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
    return (React__default["default"].createElement(Logo, null,
        React__default["default"].createElement(reactRouterDom.Link, { to: "/" }, text ? (React__default["default"].createElement("img", { src: logoText__default["default"], alt: "logo" })) : (React__default["default"].createElement("img", { src: logoImg__default["default"], alt: "logo" })))));
}

module.exports = Logo$1;

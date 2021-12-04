'use strict';

var React = require('react');
var WrapDialog = require('../WrapDialog-f6af1600.js');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var ModalLoading = ({ width, height, children, maxWidth }) => {
    return React__default["default"].createElement(Wrap, null,
        React__default["default"].createElement(WrapContainer, { style: {
                width: width,
                maxWidth: maxWidth,
                height: height,
            } }, children));
};
const Wrap = styled__default["default"].div `
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backgroundOpacity);
`;
const WrapContainer = styled__default["default"].div `
  position: absolute;
  ${WrapDialog.WrapDialog};
  top: 5vh;
`;

module.exports = ModalLoading;

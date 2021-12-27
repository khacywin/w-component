'use strict';

var styled = require('styled-components');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function LoadingComponent({ width, height }) {
    return React__default["default"].createElement(Wrap, { width: width ? width : '100%', height: height });
}
const progress = styled.keyframes `
  0% {
    top: -100px;
  }
  100% {
    top: 100%;
  }
`;
const Wrap = styled__default["default"].div `
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(0deg, var(--white) 0%, var(--lighterGrey) 100%);

  &::before {
    content: '';
    position: absolute;
    height: 100px;
    width: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0)
    );
    animation: ${progress} 1.2s ease-in-out infinite;
  }
`;

module.exports = LoadingComponent;

'use strict';

var styled = require('styled-components');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function LoadingList (props) {
    return (React__default["default"].createElement(Wrap, { height: props.height },
        React__default["default"].createElement(WrapItem, null),
        React__default["default"].createElement(WrapItem, null),
        React__default["default"].createElement(WrapItem, null)));
}
const progress = styled.keyframes `
  0% {
    top: -100px;
  }
  100% {
    top: 100%;
  }
`;
const WrapItem = styled__default["default"].div `
  width: 100%;
  position: relative;
  background: var(--backgroundContent);
  overflow: hidden;
  border-radius: 10px;

  &::before {
    content: "";
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
const Wrap = styled__default["default"].div `
  ${WrapItem} {
    height: ${(props) => props.height};
    margin-bottom: 5px;
    &:nth-of-type(1) {
      background: linear-gradient(
        0deg,
        rgba("var(--background)", 0.7) 0%,
        var(--background) 100%
      );
    }
    &:nth-of-type(2) {
      background: linear-gradient(
        0deg,
        rgba("var(--background)", 0.4) 0%,
        rgba("var(--background)", 0.7) 100%
      );

      &::before {
        animation-delay: 0.6s;
      }
    }
    &:nth-of-type(3) {
      background: linear-gradient(
        0deg,
        rgba("var(--background)", 0) 0%,
        rgba("var(--background)", 0.4) 100%
      );

      &::before {
        animation-delay: 1.2s;
      }
    }
  }
`;

module.exports = LoadingList;

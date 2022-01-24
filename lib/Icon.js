'use strict';

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var Icon = React__default["default"].memo((props) => {
    return (React__default["default"].createElement(Icon$1, { className: 'icon', src: props.src, biggest: props.biggest, color: props.color, big: props.big, small: props.small, bigger: props.bigger, normal: props.normal }, props.icon && React__default["default"].createElement("i", { className: props.icon })));
});
const Icon$1 = styled__default["default"].div `
  display: inline-block;
  text-align: center;

  ${(props) => props.src && `
    background-image: url('${props.src}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 15px;
    height: 15px;

    ${props.bigger && `
      width: 24px;
      height: 24px;
    `}

    ${props.biggest && `
      width: 32px;
      height: 32px;
    `}

    ${props.small && `
      width: 10px;
      height: 10px;
    `}

    ${props.big && `
      width: 20px;
      height: 20px;
    `}
  `}
 
  i{
    text-align: center;
  }

  ${(props) => !!props.color && `
    i:before {
      color: ${props.color};
    }
  `};

  ${(props) => props.bigger
    ? `
    i{
      font-size: 24px;
    }
  `
    : props.biggest
        ? `
    i{
      font-size: 32px;
    }
    `
        : props.small
            ? `
    i{
      font-size: 10px;
    }
  `
            : props.big
                ? `
    i{
      font-size: 20px;
    }
  `
                : `
    i{
      font-size: 15px;
    }
  `};
`;

module.exports = Icon;

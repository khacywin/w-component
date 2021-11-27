'use strict';

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/**
 * Avatar
 *
 * @property {string} url
 * @property {string} children
 */
var Avatar = React__default["default"].memo(({ url, children }) => {
    return (React__default["default"].createElement(AvatarWrap, { className: 'w-avatar' }, url ? (React__default["default"].createElement("img", { src: url, alt: 'wmtime' })) : children ? (React__default["default"].createElement(WordOfName, null, children[0])) : null));
});
const AvatarWrap = styled__default["default"].div `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
const WordOfName = styled__default["default"].div `
  position: absolute;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--third);
  color: #fff;
  font-weight: bold;
`;

module.exports = Avatar;

'use strict';

var css_elements_ButtonNoStyle = require('../css/elements/ButtonNoStyle.js');
var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var ButtonLoadMore = React__default["default"].memo(({ onClick, children }) => {
    return React__default["default"].createElement(Button, { onClick: onClick },
        children || `Load more`,
        "...");
});
const Button = styled__default["default"].button `
  ${css_elements_ButtonNoStyle};
  margin-top: 10px;
  margin: 0 auto;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

module.exports = ButtonLoadMore;

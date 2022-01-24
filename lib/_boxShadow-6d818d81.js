'use strict';

var styled = require('styled-components');

const normal = styled.css `
  box-shadow: 0 3px 6px var(--boxShadow);
`;
const menu = styled.css `
  box-shadow: 0px 7px 26px -6px var(--boxShadow);
`;

var _boxShadow = /*#__PURE__*/Object.freeze({
  __proto__: null,
  normal: normal,
  menu: menu
});

exports._boxShadow = _boxShadow;
exports.menu = menu;
exports.normal = normal;

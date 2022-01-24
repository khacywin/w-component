'use strict';

var styled = require('styled-components');

const normal = styled.css `border-radius: 7px;`;
const menu = styled.css `border-radius: 10px;`;
const around = styled.css `border-radius: 9999px;`;

var _borderRadius = /*#__PURE__*/Object.freeze({
  __proto__: null,
  normal: normal,
  around: around,
  menu: menu
});

exports._borderRadius = _borderRadius;
exports.around = around;
exports.menu = menu;
exports.normal = normal;

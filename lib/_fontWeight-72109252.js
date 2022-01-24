'use strict';

var styled = require('styled-components');

const light = styled.css `font-weight: 100;`;
const normal = styled.css `font-weight: normal;`;
const semiBold = styled.css `font-weight: 600;`;
const bold = styled.css `font-weight: 700;`;

var fontWeight = /*#__PURE__*/Object.freeze({
  __proto__: null,
  light: light,
  normal: normal,
  semiBold: semiBold,
  bold: bold
});

exports.bold = bold;
exports.fontWeight = fontWeight;
exports.light = light;
exports.normal = normal;
exports.semiBold = semiBold;

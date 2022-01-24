'use strict';

var styled = require('styled-components');

const smaller = styled.css `
  font-size: 12px;
`;
const small = styled.css `
  font-size: 13px;
`;
const normal = styled.css `
  font-size: 14px;
`;
const big = styled.css `
  font-size: 16px;
`;
const bigger = styled.css `
  font-size: 18px;
  line-height: 23px;
`;
const huge = styled.css `
  font-size: 24px;
`;
const heavy = styled.css `
  font-size: 32px;
`;

var fontSize = /*#__PURE__*/Object.freeze({
  __proto__: null,
  smaller: smaller,
  small: small,
  normal: normal,
  big: big,
  bigger: bigger,
  huge: huge,
  heavy: heavy
});

exports.big = big;
exports.bigger = bigger;
exports.fontSize = fontSize;
exports.heavy = heavy;
exports.huge = huge;
exports.normal = normal;
exports.small = small;
exports.smaller = smaller;

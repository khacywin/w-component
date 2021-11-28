'use strict';

var styled = require('styled-components');
var polished_esm = require('./polished.esm-c274df7e.js');

const Heading2 = styled.css `
  font-weight: 800;
  font-size: 1.1em;
  color: ${({ theme }) => polished_esm.rgba(theme.palette.text, 0.2)};
`;

var Heading = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Heading2: Heading2
});

exports.Heading = Heading;

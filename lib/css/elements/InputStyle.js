'use strict';

var styled = require('styled-components');
var css_base__space = require('../../_space-5cfb2697.js');
require('../../_fontWeight-72109252.js');
require('../../_fontSize-5a701955.js');
require('../../_zIndex-a46cddfb.js');
require('../../_opacity-19bf620b.js');
require('../../_borderRadius-3deadb9d.js');
require('../../_boxShadow-6d818d81.js');
require('../../_lineOverflow-94c98c56.js');

var InputStyle = styled.css `
  border: none;
  background-color: transparent;
  width: 100%;
  ${css_base__space.P2.a};

  &:focus {
    outline: 0;
  }
`;

module.exports = InputStyle;

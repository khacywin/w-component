'use strict';

var styled = require('styled-components');
var _lineOverflow = require('../../_lineOverflow-b8a457d2.js');

var InputStyle = styled.css `
  border: none;
  background-color: transparent;
  width: 100%;
  ${_lineOverflow.P2.a};

  &:focus {
    outline: 0;
  }
`;

module.exports = InputStyle;

'use strict';

var styled = require('styled-components');
var _lineOverflow = require('../../_lineOverflow-0611c7f0.js');

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

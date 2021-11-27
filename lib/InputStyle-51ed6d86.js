'use strict';

var styled = require('styled-components');
var _lineOverflow = require('./_lineOverflow-f7594b16.js');

var InputStyle = styled.css `
  border: none;
  background-color: transparent;
  width: 100%;
  ${_lineOverflow.P2.a};

  &:focus {
    outline: 0;
  }
`;

exports.InputStyle = InputStyle;

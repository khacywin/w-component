'use strict';

var styled = require('styled-components');

var ButtonNoStyle = styled.css `
  border: none;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:focus{
    outline: 0;
  }
`;

exports.ButtonNoStyle = ButtonNoStyle;

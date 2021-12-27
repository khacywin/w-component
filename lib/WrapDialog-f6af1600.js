'use strict';

var styled = require('styled-components');

var WrapDialog = styled.css `
  background-color:var(--backgroundContent);
  border-top: 5px solid var(--secondary);
  box-shadow: 0 3px 20px var(--boxShadow);
  left: 50%;
  transform: translateX(-50%);
`;

exports.WrapDialog = WrapDialog;

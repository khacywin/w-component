'use strict';

var styled = require('styled-components');

var WrapDialog = styled.css `
  background-color: ${({ theme }) => theme.palette.backgroundContent};
  border-top: 5px solid ${({ theme }) => theme.palette.secondary};
  box-shadow: 0 3px 20px ${({ theme }) => theme.palette.boxShadow};
  left: 50%;
  transform: translateX(-50%);
`;

module.exports = WrapDialog;

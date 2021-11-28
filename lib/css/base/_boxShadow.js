'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');

const normal = styled.css `
  box-shadow: 0 3px 6px ${props => props.theme.palette.shadow};
`;
const menu = styled.css `
  box-shadow: 0px 7px 26px -6px ${props => props.theme.palette.shadow};
`;

exports.menu = menu;
exports.normal = normal;

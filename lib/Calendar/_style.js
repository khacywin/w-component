'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../_space-5cfb2697.js');
var css_base__fontWeight = require('../_fontWeight-72109252.js');
var css_base__fontSize = require('../_fontSize-5a701955.js');
require('../_zIndex-a46cddfb.js');
require('../_opacity-19bf620b.js');
require('../_borderRadius-3deadb9d.js');
require('../_boxShadow-6d818d81.js');
require('../_lineOverflow-94c98c56.js');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const CalendarWrap = styled__default["default"].table `
  border-collapse: none;

  * {
    user-select: none;
  }

  ${({ noSelect }) => noSelect &&
    `
    li {
      cursor: initial !important;

      & :hover {
        background-color: transparent !important;
      }
    }
    `}
`;
const CalendarTop = styled__default["default"].thead `
  ${css_base__fontSize.big};
  text-align: left;
  th {
    text-indent: 10px;
  }
`;
const CalendarHead = styled__default["default"].tr `
  ${css_base__fontWeight.semiBold};
  text-align: center;
  height: 34px;
`;
const CalendarDate = styled__default["default"].td `
  padding: 3px;
  margin: 0;

  li {
    width: 28px;
    height: 28px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: var(--backgroundOpacity);
    }
  }

  ${({ notInMonth }) => notInMonth &&
    `
    opacity: 0.5;
  `};

  &.selected {
    li {
      border-radius: 50%;
      background-color: var(--secondary);
      color: var(--backgroundContent);
    }
  }

  ${({ now }) => now &&
    `
    li {
      background-color:var(--primary) !important;
      color:   var(--backgroundContent) !important;
    }
  `};

  ${({ disable }) => disable && `
    opacity: 0.2;
    user-select: none;
    pointer-events: none;
    
    li:hover {
      background-color: unset;
    }
  `}
`;

exports.CalendarDate = CalendarDate;
exports.CalendarHead = CalendarHead;
exports.CalendarTop = CalendarTop;
exports.CalendarWrap = CalendarWrap;

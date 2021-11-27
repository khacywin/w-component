'use strict';

var _lineOverflow = require('./_lineOverflow-f7594b16.js');
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
  ${_lineOverflow.big};
  text-align: left;
  th {
    text-indent: 10px;
  }
`;
const CalendarHead = styled__default["default"].tr `
  ${_lineOverflow.semiBold};
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
      background-color: ${({ theme }) => theme.palette.backgroundOpacity};
    }
  }

  ${({ notInMonth }) => notInMonth &&
    `
    opacity: 0.5;
  `};

  &.selected {
    li {
      border-radius: 50%;
      background-color: ${(props) => props.theme.palette.secondary};
      color: ${(props) => props.theme.palette.backgroundContent};
    }
  }

  ${({ now, theme }) => now &&
    `
    li {
      background-color: ${theme.palette.primary} !important;
      color:  ${theme.palette.backgroundContent} !important;
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

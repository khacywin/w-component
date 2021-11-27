'use strict';

var _lineOverflow = require('./_lineOverflow-f7594b16.js');
var styled = require('styled-components');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ChartProcess (props) {
    const percent = (props.amount / props.sum) * 100;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(WrapChartProcess, { sum: props.sum },
            React__default["default"].createElement(ChartProcess$1, { amount: props.amount, percent: percent })),
        props.title ? React__default["default"].createElement(ChartProcessTitle, null, props.title) : ""));
}
const AmountTag = styled.css `
  position: absolute;
  top: -30px;
  ${_lineOverflow.P2.a};
  ${_lineOverflow.normal};
  ${_lineOverflow.small};
  right: 0;
  transform: translate(50%, 0);
`;
const ArrowDown = styled.css `
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  position: absolute;
  top: -6px;
  right: 0;
  transform: translate(50%, 0);
`;
const WrapChartProcess = styled__default["default"].div `
  width: 100%;
  height: 5px;
  position: relative;
  background-color: var(--secondary);
  margin-top: 30px;
  ${_lineOverflow.normal};

  &::before {
    ${AmountTag};
    ${(props) => `content:'${props.sum}'`};
    background-color: var(--secondary);
    color: var(--backgroundContent);
  }

  &::after {
    content: "";
    ${ArrowDown};
    border-top-color: var(--secondary);
  }
`;
const aniProcess = (percent) => styled.keyframes `
  0%{
    width: 0%;
  }
  100%{
    width: ${percent}%;
  }
`;
const ChartProcess$1 = styled__default["default"].div `
  position: absolute;
  left: 0;
  top: 0;
  height: 5px;
  width: ${(props) => props.percent}%;
  ${_lineOverflow.normal};
  background-color: var(--success);
  animation: ${(props) => aniProcess(props.percent)} 1s linear;

  &::before {
    ${AmountTag};
    ${(props) => `content:'${props.amount}'`};
    background-color: var(--success);
    color: var(--backgroundContent);
  }

  &::after {
    content: "";
    ${ArrowDown};
    border-top-color: var(--success);
  }
`;
const ChartProcessTitle = styled__default["default"].div `
  ${_lineOverflow.light};
  ${_lineOverflow.small};
  text-align: center;
  user-select: none;
`;

module.exports = ChartProcess;

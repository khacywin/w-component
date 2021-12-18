'use strict';

var React = require('react');
var ButtonAction = require('./ButtonAction-ebe20ce3.js');
var Icon = require('./Icon-b6bdc54f.js');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function Month ({ selected, fnSelected, disableItem }) {
    const [year, setYear] = React.useState(new Date().getFullYear());
    const list = React.useMemo(() => [
        {
            value: 0,
            label: 'Jan',
        },
        {
            value: 1,
            label: 'Feb',
        },
        {
            value: 2,
            label: 'Mar',
        },
        {
            value: 3,
            label: 'Apr',
        },
        {
            value: 4,
            label: 'May',
        },
        {
            value: 5,
            label: 'Jun',
        },
        {
            value: 6,
            label: 'Jul',
        },
        {
            value: 7,
            label: 'Aug',
        },
        {
            value: 8,
            label: 'Sep',
        },
        {
            value: 9,
            label: 'Oct',
        },
        {
            value: 10,
            label: 'Nov',
        },
        {
            value: 11,
            label: 'Dec',
        },
    ], []);
    const _onSelected = React.useCallback((month) => () => {
        fnSelected(new Date(`${year}/${month + 1}`));
    }, [fnSelected, year]);
    const _previousYear = React.useCallback(() => {
        setYear((year) => year - 1);
    }, []);
    const _nextYear = React.useCallback(() => {
        setYear((year) => year + 1);
    }, []);
    React.useEffect(() => {
        setYear(selected.getFullYear());
    }, [selected]);
    return (React__default["default"].createElement(Wrap$1, null,
        React__default["default"].createElement(WrapHead, null,
            React__default["default"].createElement("div", null, year),
            React__default["default"].createElement(ButtonSection, null,
                React__default["default"].createElement(ButtonAction.ButtonAction, { action: _previousYear },
                    React__default["default"].createElement(Icon.Icon, { icon: 'i-arrow-left' })),
                React__default["default"].createElement(ButtonAction.ButtonAction, { action: _nextYear },
                    React__default["default"].createElement(Icon.Icon, { icon: 'i-arrow-right' })))),
        React__default["default"].createElement(List$1, null, list.map((month) => (React__default["default"].createElement(Item$1, { active: month.value === selected.getMonth() &&
                year === selected.getFullYear(), key: month.value, onClick: _onSelected(month.value), disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(`${year}-${month.value + 1}`) }, month.label))))));
}
const Wrap$1 = styled__default["default"].div `
  width: 150px;
`;
const WrapHead = styled__default["default"].div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const ButtonSection = styled__default["default"].div `
  display: flex;
`;
const List$1 = styled__default["default"].div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Item$1 = styled__default["default"].li `
  border-radius: 9999px;
  cursor: pointer;
  list-style-type: none;
  padding: 5px;
  text-align: center;
  width: 33.33333%;
  
  ${({ active }) => active &&
    `
    background-color: var(--primary);
    color: #fff;
  `}

  &:hover {
    background-color: var(--backgroundOpacity);
  }

  ${({ disable }) => disable &&
    `
    opacity: 0.5;
    user-select: none;
    pointer-events: none;
  `}
`;

function Year ({ selected, fnSelected, disableItem, }) {
    const [list, setList] = React.useState([]);
    const _onSelected = React.useCallback((value) => () => {
        fnSelected(value.toString());
    }, [fnSelected]);
    const _setPreviousListYear = React.useCallback(() => {
        setList((list) => list.map((item) => item - 10));
    }, []);
    const _setNextListYear = React.useCallback(() => {
        setList((list) => list.map((item) => item + 10));
    }, []);
    React.useEffect(() => {
        const _year = +new Date(selected.toString()).getFullYear();
        const _list = [];
        for (let i = Math.floor(_year / 10) * 10 - 1; i <= Math.floor(_year / 10) * 10 + 10; i++) {
            _list.push(i);
        }
        setList(_list);
    }, [selected]);
    return (React__default["default"].createElement(Wrap, null,
        React__default["default"].createElement(ButtonAction.ButtonAction, { action: _setPreviousListYear },
            React__default["default"].createElement(Icon.Icon, { icon: "i-arrow-up" })),
        React__default["default"].createElement(List, null, list.map((year, idx) => (React__default["default"].createElement(Item, { active: year === +selected, key: idx, onClick: _onSelected(year), disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(year.toString()) }, year)))),
        React__default["default"].createElement(ButtonAction.ButtonAction, { action: _setNextListYear },
            React__default["default"].createElement(Icon.Icon, { icon: "i-arrow-down" }))));
}
const Wrap = styled__default["default"].div `
  width: 150px;

  & > button {
    width: 100%;
  }
`;
const List = styled__default["default"].div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Item = styled__default["default"].li `
  border-radius: 9999px;
  cursor: pointer;
  list-style-type: none;
  padding: 5px;
  text-align: center;
  width: 33.33333%;

  ${({ active }) => active &&
    `
    background-color: var(--primary);
    color: #fff;
  `}

  &:last-of-type, &:first-of-type {
    opacity: 0.6;
  }

  &:hover {
    background-color: var(--backgroundOpacity);
  }

  ${({ disable }) => disable &&
    `
    opacity: 0.2 !important;
    user-select: none;
    pointer-events: none;
  `}
`;

exports.Month = Month;
exports.Year = Year;

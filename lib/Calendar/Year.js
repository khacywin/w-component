'use strict';

var React = require('react');
var ButtonAction = require('../ButtonAction-8e7d8a19.js');
var Icon = require('../Icon-b6bdc54f.js');
var styled = require('styled-components');
require('../_lineOverflow-b8a457d2.js');
require('../index-f0e3963b.js');
require('../useHandleDisplay-16f1a228.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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

module.exports = Year;

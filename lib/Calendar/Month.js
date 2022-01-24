'use strict';

var React = require('react');
var Button_ButtonAction = require('../Button/ButtonAction.js');
var Icon = require('../Icon.js');
var styled = require('styled-components');
require('../_space-5cfb2697.js');
require('../_fontWeight-72109252.js');
require('../_fontSize-5a701955.js');
require('../_zIndex-a46cddfb.js');
require('../_opacity-19bf620b.js');
require('../_borderRadius-3deadb9d.js');
require('../_boxShadow-6d818d81.js');
require('../_lineOverflow-94c98c56.js');
require('../index-9390237c.js');
require('../_util/hooks/useHandleDisplay.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function Month ({ selected, fnSelected, disableItem, }) {
    const [year, setYear] = React.useState(new Date().getFullYear());
    const list = React.useMemo(() => [
        {
            value: 0,
            label: "Jan",
        },
        {
            value: 1,
            label: "Feb",
        },
        {
            value: 2,
            label: "Mar",
        },
        {
            value: 3,
            label: "Apr",
        },
        {
            value: 4,
            label: "May",
        },
        {
            value: 5,
            label: "Jun",
        },
        {
            value: 6,
            label: "Jul",
        },
        {
            value: 7,
            label: "Aug",
        },
        {
            value: 8,
            label: "Sep",
        },
        {
            value: 9,
            label: "Oct",
        },
        {
            value: 10,
            label: "Nov",
        },
        {
            value: 11,
            label: "Dec",
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
    return (React__default["default"].createElement(Wrap, null,
        React__default["default"].createElement(WrapHead, null,
            React__default["default"].createElement("div", null, year),
            React__default["default"].createElement(ButtonSection, null,
                React__default["default"].createElement(Button_ButtonAction, { action: _previousYear },
                    React__default["default"].createElement(Icon, { icon: "i-arrow-left" })),
                React__default["default"].createElement(Button_ButtonAction, { action: _nextYear },
                    React__default["default"].createElement(Icon, { icon: "i-arrow-right" })))),
        React__default["default"].createElement(List, null, list.map((month) => (React__default["default"].createElement(Item, { active: month.value === selected.getMonth() &&
                year === selected.getFullYear(), key: month.value, onClick: _onSelected(month.value), disable: disableItem === null || disableItem === void 0 ? void 0 : disableItem(`${year}-${month.value + 1}`) }, month.label))))));
}
const Wrap = styled__default["default"].div `
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

module.exports = Month;

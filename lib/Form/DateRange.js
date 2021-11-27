'use strict';

var index = require('../index-84c52f3e.js');
var React = require('react');
var Icon = require('../Icon-b6bdc54f.js');
var dayjs_min = require('../dayjs.min-a8023b07.js');
var styled = require('styled-components');
require('../_lineOverflow-f7594b16.js');
require('../index-e168d184.js');
require('../Other-91030d75.js');
require('components/atoms/Button/ButtonAction');
require('components/atoms/Calendar');
require('components/atoms/Clock');
require('components/atoms/Form/_FormGroup');
require('components/atoms/Icon');
require('../InputStyle-51ed6d86.js');
require('helps/generatedId');
require('../useHandleDisplay-16f1a228.js');
require('../usePositionDropdown-d8f294b5.js');
require('../index-49eba8df.js');
require('../_commonjsHelpers-b30fe163.js');
require('components/atoms/Calendar/Month');
require('components/atoms/Calendar/Year');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function DateRange({ fnChange, label, picker = "date", value = {}, defaultValue = {}, }) {
    const format = React.useMemo(() => {
        switch (picker) {
            case "date":
                return "DD MMM, YYYY";
            case "month":
                return "MMM, YYYY";
            case "year":
                return "YYYY";
        }
        return "DD MMM, YYYY";
    }, [picker]);
    const disablePrevious = React.useCallback((date) => {
        const _date = dayjs_min.dayjs_min(date);
        return value.from
            ? _date.isBefore(dayjs_min.dayjs_min(value.from))
            : defaultValue.from
                ? _date.isBefore(dayjs_min.dayjs_min(defaultValue.from))
                : false;
    }, [defaultValue.from, value.from]);
    const disableNext = React.useCallback((date) => {
        const _date = dayjs_min.dayjs_min(date);
        return value.to
            ? _date.isAfter(dayjs_min.dayjs_min(value.to))
            : defaultValue.to
                ? _date.isAfter(dayjs_min.dayjs_min(defaultValue.to))
                : false;
    }, [defaultValue.to, value.to]);
    const onChangeFrom = (_val) => {
        let valTemp = _val;
        if (disableNext(_val))
            valTemp = value.to;
        fnChange({
            from: valTemp,
            to: value.to,
        });
    };
    const onChangeTo = (_val) => {
        let valTemp = _val;
        if (disablePrevious(_val))
            valTemp = value.from;
        fnChange({
            from: value.from,
            to: valTemp,
        });
    };
    return (React__default["default"].createElement(Wrap, { className: "date-range" },
        React__default["default"].createElement(Label, null, label),
        React__default["default"].createElement(index.DatePicker, { picker: picker, value: value.from, defaultValue: defaultValue.from, fnChange: onChangeFrom, format: format, isRemove: false, disableItem: disableNext }),
        React__default["default"].createElement("span", null,
            React__default["default"].createElement(Icon.Icon, { icon: "i-transfer" })),
        React__default["default"].createElement(index.DatePicker, { picker: picker, value: value.to, defaultValue: defaultValue.to, fnChange: onChangeTo, format: format, isRemove: false, disableItem: disablePrevious })));
}
const Wrap = styled__default["default"].div `
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  position: relative;

  & > div {
    width: calc(50% - 20px);
  }

  .form-group {
    margin-top: 0;
  }
`;
const Label = styled__default["default"].div `
  ${index.LabelCss};
  ${index.cssFocus};
`;

module.exports = DateRange;

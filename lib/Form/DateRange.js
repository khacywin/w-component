'use strict';

var _FormGroup = require('../_FormGroup-adb09714.js');
var React = require('react');
var index = require('../index-e2c3f498.js');
var Icon = require('../Icon-b6bdc54f.js');
var dayjs_min = require('../dayjs.min-a64472d2.js');
var styled = require('styled-components');
require('../_lineOverflow-0611c7f0.js');
require('../index-f0e3963b.js');
require('../Other-03853e79.js');
require('../ButtonAction-7441ef33.js');
require('../useHandleDisplay-16f1a228.js');
require('../InputStyle-71a1b4f3.js');
require('../generatedId-3779176c.js');
require('../usePositionDropdown-d8f294b5.js');
require('../index-4b1ec35a.js');
require('../Year-f38cf551.js');
require('../_style-477b7a7c.js');
require('assets/images/clock-face.svg');

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
  ${_FormGroup.LabelCss};
  ${_FormGroup.cssFocus};
`;

module.exports = DateRange;

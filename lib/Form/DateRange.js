'use strict';

var Form__FormGroup = require('./_FormGroup.js');
var React = require('react');
var Form_DatePicker_index = require('./DatePicker/index.js');
var Icon = require('../Icon.js');
var Calendar_index = require('../index-f0ef9d11.js');
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
require('./DatePicker/DateTime.js');
require('../Button/ButtonAction.js');
require('../_util/hooks/useHandleDisplay.js');
require('../Clock.js');
require('../_util/generatedId.js');
require('../css/elements/InputStyle.js');
require('../_util/hooks/useIntersectionObserver.js');
require('../_util/hooks/usePositionDropdown.js');
require('./DatePicker/Other.js');
require('../Calendar/Month.js');
require('../Calendar/Year.js');
require('../Calendar/_style.js');

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
        const _date = Calendar_index.dayjs_min(date);
        return value.from
            ? _date.isBefore(Calendar_index.dayjs_min(value.from))
            : defaultValue.from
                ? _date.isBefore(Calendar_index.dayjs_min(defaultValue.from))
                : false;
    }, [defaultValue.from, value.from]);
    const disableNext = React.useCallback((date) => {
        const _date = Calendar_index.dayjs_min(date);
        return value.to
            ? _date.isAfter(Calendar_index.dayjs_min(value.to))
            : defaultValue.to
                ? _date.isAfter(Calendar_index.dayjs_min(defaultValue.to))
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
        React__default["default"].createElement(Form_DatePicker_index, { picker: picker, value: value.from, defaultValue: defaultValue.from, fnChange: onChangeFrom, format: format, isRemove: false, position: "left", disableItem: disableNext }),
        React__default["default"].createElement("span", null,
            React__default["default"].createElement(Icon, { icon: "i-transfer" })),
        React__default["default"].createElement(Form_DatePicker_index, { picker: picker, value: value.to, defaultValue: defaultValue.to, fnChange: onChangeTo, format: format, isRemove: false, position: "right", disableItem: disablePrevious })));
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
  ${Form__FormGroup.LabelCss};
  ${Form__FormGroup.cssFocus};
`;

module.exports = DateRange;

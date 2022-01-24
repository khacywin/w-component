'use strict';

var Form_DatePicker_DateTime = require('./DateTime.js');
var Form_DatePicker_Other = require('./Other.js');
var React = require('react');
require('../../_space-5cfb2697.js');
require('styled-components');
require('../../_fontWeight-72109252.js');
require('../../_fontSize-5a701955.js');
require('../../_zIndex-a46cddfb.js');
require('../../_opacity-19bf620b.js');
require('../../_borderRadius-3deadb9d.js');
require('../../_boxShadow-6d818d81.js');
require('../../_lineOverflow-94c98c56.js');
require('../../Button/ButtonAction.js');
require('../../index-9390237c.js');
require('../../_util/hooks/useHandleDisplay.js');
require('../../index-f0ef9d11.js');
require('../../Calendar/_style.js');
require('../../Icon.js');
require('../../Clock.js');
require('../../_util/generatedId.js');
require('../_FormGroup.js');
require('../../css/elements/InputStyle.js');
require('../../_util/hooks/useIntersectionObserver.js');
require('../../_util/hooks/usePositionDropdown.js');
require('../../Calendar/Month.js');
require('../../Calendar/Year.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function DatePicker (props) {
    if (props.picker === 'date-time' || !props.picker)
        return (React__default["default"].createElement(Form_DatePicker_DateTime, Object.assign({}, props)));
    return (React__default["default"].createElement(Form_DatePicker_Other, Object.assign({}, props)));
}

module.exports = DatePicker;

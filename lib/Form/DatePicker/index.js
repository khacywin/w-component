'use strict';

var Other = require('../../Other-03853e79.js');
var React = require('react');
require('../../_lineOverflow-0611c7f0.js');
require('styled-components');
require('../../ButtonAction-7441ef33.js');
require('../../index-f0e3963b.js');
require('../../useHandleDisplay-16f1a228.js');
require('../../dayjs.min-a64472d2.js');
require('../../_style-477b7a7c.js');
require('../../Icon-b6bdc54f.js');
require('../../index-4b1ec35a.js');
require('assets/images/clock-face.svg');
require('../../generatedId-3779176c.js');
require('../../_FormGroup-adb09714.js');
require('../../InputStyle-71a1b4f3.js');
require('../../usePositionDropdown-d8f294b5.js');
require('../../Year-f38cf551.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function index (props) {
    if (props.picker === 'date-time' || !props.picker)
        return (React__default["default"].createElement(Other.DateTime, Object.assign({}, props)));
    return (React__default["default"].createElement(Other.Other, Object.assign({}, props)));
}

module.exports = index;

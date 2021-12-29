'use strict';

var Other = require('../../Other-3f483162.js');
var React = require('react');
require('../../_lineOverflow-b8a457d2.js');
require('styled-components');
require('../../ButtonAction-1bcd2a25.js');
require('../../index-f0e3963b.js');
require('../../useHandleDisplay-86b835d7.js');
require('../../usePositionDropdown-7a45ea8c.js');
require('../../weekOfYear-3a23eaca.js');
require('../../Icon-b6bdc54f.js');
require('../../clock-face-00da2ca7.js');
require('../../generatedId-3779176c.js');
require('../../_FormGroup-4649f433.js');
require('../../InputStyle-786378de.js');
require('../../index-a34574a3.js');
require('../../Year-1d4a1491.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function index (props) {
    if (props.picker === 'date-time' || !props.picker)
        return (React__default["default"].createElement(Other.DateTime, Object.assign({}, props)));
    return (React__default["default"].createElement(Other.Other, Object.assign({}, props)));
}

module.exports = index;

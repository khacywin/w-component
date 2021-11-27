'use strict';

var Other = require('../../Other-5eaea139.js');
var React = require('react');
require('../../_lineOverflow-f7594b16.js');
require('styled-components');
require('../../ButtonAction-757b3091.js');
require('../../index-e168d184.js');
require('../../useHandleDisplay-16f1a228.js');
require('../../dayjs.min-20377a5a.js');
require('../../_style-0c593cae.js');
require('../../Icon-b6bdc54f.js');
require('../../index-4b1ec35a.js');
require('assets/images/clock-face.svg');
require('../../generatedId-3779176c.js');
require('../../_FormGroup-b1a5a44f.js');
require('../../InputStyle-51ed6d86.js');
require('../../usePositionDropdown-d8f294b5.js');
require('../../Year-6002559c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function index (props) {
    if (props.picker === 'date-time' || !props.picker)
        return (React__default["default"].createElement(Other.DateTime, Object.assign({}, props)));
    return (React__default["default"].createElement(Other.Other, Object.assign({}, props)));
}

module.exports = index;

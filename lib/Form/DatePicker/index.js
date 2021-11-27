'use strict';

var Other = require('../../Other-91030d75.js');
var React = require('react');
require('../../_lineOverflow-f7594b16.js');
require('styled-components');
require('components/atoms/Button/ButtonAction');
require('components/atoms/Calendar');
require('components/atoms/Clock');
require('components/atoms/Form/_FormGroup');
require('components/atoms/Icon');
require('../../InputStyle-51ed6d86.js');
require('../../dayjs.min-a8023b07.js');
require('../../_commonjsHelpers-b30fe163.js');
require('helps/generatedId');
require('../../index-e168d184.js');
require('../../useHandleDisplay-16f1a228.js');
require('../../usePositionDropdown-d8f294b5.js');
require('../../index-49eba8df.js');
require('components/atoms/Calendar/Month');
require('components/atoms/Calendar/Year');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function index (props) {
    if (props.picker === 'date-time' || !props.picker)
        return (React__default["default"].createElement(Other.DateTime, Object.assign({}, props)));
    return (React__default["default"].createElement(Other.Other, Object.assign({}, props)));
}

module.exports = index;

'use strict';

var tslib_es6 = require('../../tslib.es6-17879f09.js');
var customRender = require('config/custom-render');
var index = require('../../index-40c45e22.js');
var React = require('react');
require('../../_style-0c593cae.js');
require('../../_lineOverflow-f7594b16.js');
require('styled-components');
require('../../ButtonAction-757b3091.js');
require('../../index-e168d184.js');
require('../../useHandleDisplay-16f1a228.js');
require('../../Icon-b6bdc54f.js');
require('../../index-49eba8df.js');
require('../../_commonjsHelpers-b30fe163.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

describe(`<Calendar />`, () => {
    test('Test selected', () => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        const { container } = customRender.render(React__default["default"].createElement(index.Calendar, null));
        customRender.fireEvent.click(container.querySelector(`[data-date="7-15-2021"]`));
        const selected = container.querySelector(`[data-date="7-15-2021"]`);
        expect(selected).toHaveClass('selected');
    }));
});

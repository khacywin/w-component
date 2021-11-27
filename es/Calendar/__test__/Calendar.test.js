import { a as __awaiter } from '../../tslib.es6-8e295639.js';
import { render, fireEvent } from 'config/custom-render';
import { C as Calendar } from '../../index-a3535456.js';
import React from 'react';
import '../../_style-462f1c6a.js';
import '../../_lineOverflow-0f5e92ab.js';
import 'styled-components';
import '../../ButtonAction-761104f9.js';
import '../../index-8505406e.js';
import '../../useHandleDisplay-fdfdebb5.js';
import '../../Icon-69b9e7b0.js';
import '../../index-fb604e50.js';
import '../../_commonjsHelpers-5aa48c35.js';

describe(`<Calendar />`, () => {
    test('Test selected', () => __awaiter(void 0, void 0, void 0, function* () {
        const { container } = render(React.createElement(Calendar, null));
        fireEvent.click(container.querySelector(`[data-date="7-15-2021"]`));
        const selected = container.querySelector(`[data-date="7-15-2021"]`);
        expect(selected).toHaveClass('selected');
    }));
});
//# sourceMappingURL=Calendar.test.js.map

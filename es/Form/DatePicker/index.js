import { D as DateTime, O as Other } from '../../Other-e8b2afec.js';
import React from 'react';
import '../../_lineOverflow-0f5e92ab.js';
import 'styled-components';
import 'components/atoms/Button/ButtonAction';
import 'components/atoms/Calendar';
import 'components/atoms/Clock';
import 'components/atoms/Form/_FormGroup';
import 'components/atoms/Icon';
import '../../InputStyle-cbf70b53.js';
import '../../dayjs.min-2ef69f57.js';
import '../../_commonjsHelpers-5aa48c35.js';
import 'helps/generatedId';
import '../../index-8505406e.js';
import '../../useHandleDisplay-fdfdebb5.js';
import '../../usePositionDropdown-f9b23788.js';
import '../../index-fb604e50.js';
import 'components/atoms/Calendar/Month';
import 'components/atoms/Calendar/Year';

function index (props) {
    if (props.picker === 'date-time' || !props.picker)
        return (React.createElement(DateTime, Object.assign({}, props)));
    return (React.createElement(Other, Object.assign({}, props)));
}

export { index as default };
//# sourceMappingURL=index.js.map

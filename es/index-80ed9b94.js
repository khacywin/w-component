import { D as DateTime, O as Other } from './Other-03dd01d9.js';
import React from 'react';

function DatePicker (props) {
    if (props.picker === 'date-time' || !props.picker)
        return (React.createElement(DateTime, Object.assign({}, props)));
    return (React.createElement(Other, Object.assign({}, props)));
}

export { DatePicker as D };
//# sourceMappingURL=index-80ed9b94.js.map

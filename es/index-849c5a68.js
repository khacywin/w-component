import { D as DateTime, O as Other } from './Other-42e0ac63.js';
import React from 'react';

function DatePicker (props) {
    if (props.picker === 'date-time' || !props.picker)
        return (React.createElement(DateTime, Object.assign({}, props)));
    return (React.createElement(Other, Object.assign({}, props)));
}

export { DatePicker as D };
//# sourceMappingURL=index-849c5a68.js.map

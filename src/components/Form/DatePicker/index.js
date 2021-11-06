import DateTime from './DateTime';
import Other from './Other';
import React from 'react';
export default function (props) {
    if (props.picker === 'date-time' || !props.picker)
        return (React.createElement(DateTime, Object.assign({}, props)));
    return (React.createElement(Other, Object.assign({}, props)));
}
//# sourceMappingURL=index.js.map
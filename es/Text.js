import React from 'react';
import styled from 'styled-components';
import { B as fontWeight, C as fontSize } from './_lineOverflow-0f5e92ab.js';

const Text = styled.span `
  ${(props) => fontWeight[props.fontWeight]};
  ${(props) => fontSize[props.fontSize]};
`;
function Text$1 (props) {
    return (React.createElement(Text, { fontWeight: props.fontWeight || 'normal', fontSize: props.fontSize || 'normal' }, props.children));
}

export { Text$1 as default };
//# sourceMappingURL=Text.js.map

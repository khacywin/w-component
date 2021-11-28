import React from 'react';
import styled from 'styled-components';
import { h as fontWeight, i as fontSize } from './_lineOverflow-fd1b0d7f.js';

const Text = styled.span `
  ${(props) => fontWeight[props.fontWeight]};
  ${(props) => fontSize[props.fontSize]};
`;
function Text$1 (props) {
    return (React.createElement(Text, { fontWeight: props.fontWeight || 'normal', fontSize: props.fontSize || 'normal' }, props.children));
}

export { Text$1 as default };
//# sourceMappingURL=Text.js.map

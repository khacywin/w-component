import { s as small, l as light, P as P2, x as one } from './_lineOverflow-fd1b0d7f.js';
import { I as Icon } from './Icon-69b9e7b0.js';
import React from 'react';
import styled from 'styled-components';

/**
 * Subtitle
 * @prop {} icon: src of icon
 * @prop {string} title
 * @prop {string} color
 * @prop {Direction} direction: row | column | row-reserve | column-reserve
 */
function Subtitle (props) {
    return (React.createElement(WrapSubtitle, { direction: props.direction || 'row', color: props.color || '#999999' },
        React.createElement(Subtitle$1, null, props.children || props.title),
        props.icon ? React.createElement(Icon, { icon: props.icon, color: props.color || '#999999' }) : ''));
}
const WrapSubtitle = styled.div `
  display: inline-flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  color: ${(props) => props.color};

  .icon{
    transform: translateY(2px);
  }
`;
const Subtitle$1 = styled.div `
  ${small};
  ${light};
  ${P2.x};
  ${one};
  max-width: 200px;
  width: 100%;
`;

export { Subtitle as default };
//# sourceMappingURL=Subtitle.js.map

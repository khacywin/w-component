import React from 'react';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon';
import { h as small, p as light, a as P2, q as one } from './_lineOverflow-0f5e92ab.js';

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

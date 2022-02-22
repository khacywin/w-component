/**
 * Subtitle
 * @prop {} icon: src of icon
 * @prop {string} title
 * @prop {string} color
 * @prop {Direction} direction: row | column | row-reserve | column-reserve
 */

import { fontSize, fontWeight, lineOverflow, space } from 'components/styles/base';

import Icon from 'components/Icon';
import React from 'react';
import styled from 'styled-components';

type Direction = 'row' | 'column' | 'row-reverse' | 'column-revere';

interface Props {
  icon?: any;
  title?: string;
  direction?: Direction;
  color?: string;
  children?: string | JSX.Element;
}
export default function (props: Props) {
  return (
    <WrapSubtitle direction={props.direction || 'row'} color={props.color || '#999999'}>
      <Subtitle>{props.children || props.title}</Subtitle>
      {props.icon ? <Icon icon={props.icon} color={props.color || '#999999'} /> : ''}
    </WrapSubtitle>
  );
}

interface PropsWrap {
  direction: Direction;
  color: string;
}
const WrapSubtitle = styled.div<PropsWrap>`
  display: inline-flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  color: ${(props) => props.color};

  .icon{
    transform: translateY(2px);
  }
`;

const Subtitle = styled.div`
  ${fontSize.small};
  ${fontWeight.light};
  ${space.P2.x};
  ${lineOverflow.one};
  max-width: 200px;
  width: 100%;
`;

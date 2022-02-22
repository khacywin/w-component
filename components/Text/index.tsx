import { fontSize, fontWeight } from 'components/styles/base';

import React from 'react';
import styled from 'styled-components';

interface Props {
  children: string;
  fontWeight?: 'light' | 'normal' | 'semiBold' | 'bold';
  fontSize?: 'small' | 'normal' | 'big';
}

interface PropsWrap {
  fontWeight: 'light' | 'normal' | 'semiBold' | 'bold';
  fontSize: 'small' | 'normal' | 'big';
}
const Text = styled.span<PropsWrap>`
  ${(props) => fontWeight[props.fontWeight]};
  ${(props) => fontSize[props.fontSize]};
`;

export default function (props: Props) {
  return (
    <Text
      fontWeight={props.fontWeight || 'normal'}
      fontSize={props.fontSize || 'normal'}
    >
      {props.children}
    </Text>
  );
}

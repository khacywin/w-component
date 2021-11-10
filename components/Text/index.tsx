import { fontSize, fontWeight } from 'components/util/css/base';

import React from 'react';
import styled from 'styled-components';

export interface TextProps {
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

export default function (props: TextProps) {
  return (
    <Text
      fontWeight={props.fontWeight || 'normal'}
      fontSize={props.fontSize || 'normal'}
    >
      {props.children}
    </Text>
  );
}

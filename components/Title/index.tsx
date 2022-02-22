import { fontSize, fontWeight } from 'components/styles/base';

import React from 'react';
import styled from 'styled-components';
interface Props {
  children: any;
}

const Title = styled.div`
  ${fontSize.big};
  ${fontWeight.bold};
`;

export default function (props: Props) {
  return <Title>{props.children} </Title>;
}

import React from 'react';
import styled from 'styled-components';
import { fontWeight, fontSize } from 'css/base';
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

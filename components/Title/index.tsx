import { fontSize, fontWeight } from '../util/css/base';

import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  children: any;
}

const Title = styled.div`
  ${fontSize.big};
  ${fontWeight.bold};
`;

export default function (props: TitleProps) {
  return <Title>{props.children} </Title>;
}

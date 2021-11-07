import React from 'react';
import { borderRadius } from 'css/base';
import styled from 'styled-components';

const Wrap = styled.div`
  & > li,
  & > div {
    padding: 3px 10px;
    transition: 0.2s all ease-in;

    ${borderRadius.normal};

    &:hover {
      background-color: var(--background);
    }
  }
`;

export interface ListProps {
  children: JSX.Element | JSX.Element[];
}
export default function List({ children }: ListProps) {
  return <Wrap>{children}</Wrap>;
}

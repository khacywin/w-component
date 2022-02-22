import React from "react";
import { borderRadius } from "components/styles/base";
import styled from "styled-components";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export default function List({ children }: Props) {
  return <Wrap>{children}</Wrap>;
}

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

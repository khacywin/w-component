import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  min-width: 40px;
  height: 28px;

  img {
    height: 100%;
    width: auto;
  }
`;

export interface LogoProps {
  text?: boolean;
  img?: string;
}
export default function ({ text, img }: LogoProps) {
  return <Logo>{text || <img src={img} alt="logo" /> || ""}</Logo>;
}

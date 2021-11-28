import React from "react";
import logoImg from "./_util/assets/images/logo.svg";
import logoText from "./_util/assets/images/logo-character.png";
import styled from "styled-components";

interface Props {
  text?: boolean;
  logo?: boolean;
}
export default function ({ text }: Props) {
  return (
    <Logo>
      {text ? (
        <img src={logoText} alt="logo" />
      ) : (
        <img src={logoImg} alt="logo" />
      )}
    </Logo>
  );
}

const Logo = styled.div`
  min-width: 40px;
  height: 28px;

  img {
    height: 100%;
    width: auto;
  }
`;

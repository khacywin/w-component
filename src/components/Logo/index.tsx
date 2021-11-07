import { Link } from 'react-router-dom';
import React from 'react';
import logoImg from 'assets/images/logo.svg';
import logoText from 'assets/images/logo-character.png';
import styled from 'styled-components';

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
  logo?: boolean;
}
export default function ({ text, logo = true }: LogoProps) {
  return (
    <Logo>
      <Link to='/'>
        {text ? <img src={logoText} alt='logo' /> : <img src={logoImg} alt='logo' />}
      </Link>
    </Logo>
  );
}

import { L as Link } from './react-router-dom-5c182598.js';
import React from 'react';
import logoImg from 'assets/images/logo.svg';
import logoText from 'assets/images/logo-character.png';
import styled from 'styled-components';
import './inheritsLoose-bdcbc04b.js';
import './_commonjsHelpers-5aa48c35.js';

const Logo = styled.div `
  min-width: 40px;
  height: 28px;

  img {
    height: 100%;
    width: auto;
  }
`;
function Logo$1 ({ text }) {
    return (React.createElement(Logo, null,
        React.createElement(Link, { to: "/" }, text ? (React.createElement("img", { src: logoText, alt: "logo" })) : (React.createElement("img", { src: logoImg, alt: "logo" })))));
}

export { Logo$1 as default };
//# sourceMappingURL=Logo.js.map

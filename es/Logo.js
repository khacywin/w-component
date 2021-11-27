import React from 'react';
import logoImg from 'assets/images/logo.svg';
import logoText from 'assets/images/logo-character.png';
import styled from 'styled-components';

const Logo = styled.div `
  min-width: 40px;
  height: 28px;

  img {
    height: 100%;
    width: auto;
  }
`;
function Logo$1 ({ text }) {
    return (React.createElement(Logo, null, text ? (React.createElement("img", { src: logoText, alt: "logo" })) : (React.createElement("img", { src: logoImg, alt: "logo" }))));
}

export { Logo$1 as default };
//# sourceMappingURL=Logo.js.map

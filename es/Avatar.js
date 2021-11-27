import React from 'react';
import styled from 'styled-components';

/**
 * Avatar
 *
 * @property {string} url
 * @property {string} children
 */
var Avatar = React.memo(({ url, children }) => {
    return (React.createElement(AvatarWrap, { className: 'w-avatar' }, url ? (React.createElement("img", { src: url, alt: 'wmtime' })) : children ? (React.createElement(WordOfName, null, children[0])) : null));
});
const AvatarWrap = styled.div `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
const WordOfName = styled.div `
  position: absolute;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--third);
  color: #fff;
  font-weight: bold;
`;

export { Avatar as default };
//# sourceMappingURL=Avatar.js.map

import React from 'react';
import styled from 'styled-components';

interface Props {
  url?: string;
  children?: string;
}

/**
 * Avatar
 *
 * @property {string} url
 * @property {string} children
 */
export default React.memo(({ url, children }: Props) => {
  return (
    <AvatarWrap className='w-avatar'>
      {url ? (
        <img src={url} alt='wmtime' />
      ) : children ? (
        <WordOfName>{children[0]}</WordOfName>
      ) : null}
    </AvatarWrap>
  );
});

const AvatarWrap = styled.div`
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

const WordOfName = styled.div`
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

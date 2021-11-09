import ButtonNoStyle from '../util/css/elements/ButtonNoStyle';
import React from 'react';
import _t from '../util/helps/_t';
import styled from 'styled-components';

export interface ButtonLoadMoreProps {
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}
export default React.memo(({ onClick }: ButtonLoadMoreProps) => {
  return <Button onClick={onClick}>{_t('Load more ...')}</Button>;
});

const Button = styled.button`
  ${ButtonNoStyle};
  margin-top: 10px;
  margin: 0 auto;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

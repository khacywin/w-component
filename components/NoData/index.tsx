import React from 'react';
import _t from '../util/helps/_t';
import styled from 'styled-components';

export default function NoData({ children }: { children?: any }) {
  return <Wrap className='no-data'>{children || _t('No data')}</Wrap>;
}

const Wrap = styled.div`
  text-align: center;
  padding: 20px;
  opacity: 0.6;
  user-select: none;
`;

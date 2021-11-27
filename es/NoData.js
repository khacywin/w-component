import React from 'react';
import _t from 'helps/language/_t';
import styled from 'styled-components';

function NoData({ children }) {
    return React.createElement(Wrap, { className: 'no-data' }, children || _t('No data'));
}
const Wrap = styled.div `
  text-align: center;
  padding: 20px;
  opacity: 0.6;
  user-select: none;
`;

export { NoData as default };
//# sourceMappingURL=NoData.js.map

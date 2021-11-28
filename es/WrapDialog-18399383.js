import { css } from 'styled-components';

var WrapDialog = css `
  background-color: ${({ theme }) => theme.palette.backgroundContent};
  border-top: 5px solid ${({ theme }) => theme.palette.secondary};
  box-shadow: 0 3px 20px ${({ theme }) => theme.palette.boxShadow};
  left: 50%;
  transform: translateX(-50%);
`;

export { WrapDialog as W };
//# sourceMappingURL=WrapDialog-18399383.js.map

import { css } from 'styled-components';
import { space } from '../base';

export default css`
  border: none;
  background-color: transparent;
  width: 100%;
  ${space.P2.a};

  &:focus {
    outline: 0;
  }
`;
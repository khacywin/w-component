import { css } from 'styled-components';

const normal = css`
  box-shadow: 0 3px 6px ${props => props.theme.palette.shadow};
`;

const menu = css`
  box-shadow: 0px 7px 26px -6px ${props => props.theme.palette.shadow};
`;

export {
  normal,
  menu
};
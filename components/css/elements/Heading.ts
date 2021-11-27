import { css } from 'styled-components';
import { rgba } from 'polished';

export const Heading2 = css`
  font-weight: 800;
  font-size: 1.1em;
  color: ${({ theme }) => rgba(theme.palette.text, 0.2)};
`;
import { css } from 'styled-components';

const style = css`
  width: 100%;
  display: block;
  display: -webkit-box;
  line-height: initial;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const one = css`
  ${style};
  -webkit-line-clamp: 1;
`;

const two = css`
  ${style};
  -webkit-line-clamp: 1;
`;

const three = css`
  ${style};
  -webkit-line-clamp: 1;
`;

export {
  one, two, three
};
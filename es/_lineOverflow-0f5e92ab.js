import { css } from 'styled-components';

/**
 * Padding
 */
function fnPadding(size) {
    return {
        a: css `padding: ${size}`,
        l: css `padding-left: ${size}`,
        r: css `padding-right: ${size}`,
        t: css `padding-top: ${size}`,
        b: css `padding-bottom: ${size}`,
        y: css `padding-bottom: ${size}; padding-top: ${size}`,
        x: css `padding-left: ${size}; padding-right: ${size}`
    };
}
const P0 = fnPadding('0');
const P1 = fnPadding('3px');
const P2 = fnPadding('5px');
const P3 = fnPadding('8px');
const P4 = fnPadding('10px');
const P5 = fnPadding('12px');
/**
 * Margin
 */
function fnMargin(size) {
    return {
        a: css `margin: ${size}`,
        l: css `margin-left: ${size}`,
        r: css `margin-right: ${size}`,
        t: css `margin-top: ${size}`,
        b: css `margin-bottom: ${size}`,
        y: css `margin-bottom: ${size}; margin-top: ${size}`,
        x: css `margin-left: ${size}; margin-right: ${size}`
    };
}
const M0 = fnMargin('0');
const M1 = fnMargin('3px');
const M2 = fnMargin('5px');
const M3 = fnMargin('8px');
fnMargin('10px');
const M5 = fnMargin('12px');

const light = css `font-weight: 100;`;
const normal$3 = css `font-weight: normal;`;
const semiBold = css `font-weight: 600;`;
const bold = css `font-weight: 700;`;

var fontWeight = /*#__PURE__*/Object.freeze({
  __proto__: null,
  light: light,
  normal: normal$3,
  semiBold: semiBold,
  bold: bold
});

const smaller = css `
  font-size: 12px;
`;
const small = css `
  font-size: 13px;
`;
const normal$2 = css `
  font-size: 14px;
`;
const big = css `
  font-size: 16px;
`;
const bigger = css `
  font-size: 18px;
  line-height: 23px;
`;
const huge = css `
  font-size: 24px;
`;
const heavy = css `
  font-size: 32px;
`;

var fontSize = /*#__PURE__*/Object.freeze({
  __proto__: null,
  smaller: smaller,
  small: small,
  normal: normal$2,
  big: big,
  bigger: bigger,
  huge: huge,
  heavy: heavy
});

css `
  z-index: -1;
`;
css `
  z-index: 0;
`;
const front = css `
  z-index: 10;
`;
const front_1 = css `
  z-index: 100;
`;
css `
  z-index: 200;
`;
css `
  z-index: 300;
`;
css `
  z-index: 400;
`;
const front_5 = css `
  z-index: 500;
`;

const Fully = css `
  opacity: 1;
`;
const SemiFully = css `
  opacity: 0.8;
`;
const SemiTransparent = css `
  opacity: 0.5;
`;
css `
  opacity: 0;
`;
const ImageTransparent = css `
  opacity: 0.3;
`;

const normal$1 = css `border-radius: 7px;`;
css `border-radius: 10px;`;
const around = css `border-radius: 9999px;`;

const normal = css `
  box-shadow: 0 3px 6px ${props => props.theme.palette.shadow};
`;
const menu = css `
  box-shadow: 0px 7px 26px -6px ${props => props.theme.palette.shadow};
`;

const style = css `
  width: 100%;
  display: block;
  display: -webkit-box;
  line-height: initial;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const one = css `
  ${style};
  -webkit-line-clamp: 1;
`;
css `
  ${style};
  -webkit-line-clamp: 1;
`;
css `
  ${style};
  -webkit-line-clamp: 1;
`;

export { bigger as A, fontWeight as B, fontSize as C, Fully as F, ImageTransparent as I, M1 as M, P4 as P, SemiTransparent as S, P2 as a, big as b, P1 as c, normal as d, M3 as e, front_5 as f, M2 as g, small as h, M5 as i, M0 as j, normal$2 as k, P3 as l, menu as m, normal$1 as n, P0 as o, light as p, one as q, bold as r, semiBold as s, front_1 as t, front as u, normal$3 as v, around as w, SemiFully as x, P5 as y, smaller as z };
//# sourceMappingURL=_lineOverflow-0f5e92ab.js.map

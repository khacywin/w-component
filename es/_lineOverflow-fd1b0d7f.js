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
const M4 = fnMargin('10px');
const M5 = fnMargin('12px');

var _space = /*#__PURE__*/Object.freeze({
  __proto__: null,
  P0: P0,
  P1: P1,
  P2: P2,
  P3: P3,
  P4: P4,
  P5: P5,
  M0: M0,
  M1: M1,
  M2: M2,
  M3: M3,
  M4: M4,
  M5: M5
});

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

const above = css `
  z-index: -1;
`;
const def = css `
  z-index: 0;
`;
const front = css `
  z-index: 10;
`;
const front_1 = css `
  z-index: 100;
`;
const front_2 = css `
  z-index: 200;
`;
const front_3 = css `
  z-index: 300;
`;
const front_4 = css `
  z-index: 400;
`;
const front_5 = css `
  z-index: 500;
`;

var _zIndex = /*#__PURE__*/Object.freeze({
  __proto__: null,
  above: above,
  def: def,
  front: front,
  front_1: front_1,
  front_2: front_2,
  front_3: front_3,
  front_4: front_4,
  front_5: front_5
});

const Fully = css `
  opacity: 1;
`;
const SemiFully = css `
  opacity: 0.8;
`;
const SemiTransparent = css `
  opacity: 0.5;
`;
const Transparent = css `
  opacity: 0;
`;
const ImageTransparent = css `
  opacity: 0.3;
`;

var _opacity = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Fully: Fully,
  SemiFully: SemiFully,
  SemiTransparent: SemiTransparent,
  Transparent: Transparent,
  ImageTransparent: ImageTransparent
});

const normal$1 = css `border-radius: 7px;`;
const menu$1 = css `border-radius: 10px;`;
const around = css `border-radius: 9999px;`;

var _borderRadius = /*#__PURE__*/Object.freeze({
  __proto__: null,
  normal: normal$1,
  around: around,
  menu: menu$1
});

const normal = css `
  box-shadow: 0 3px 6px ${props => props.theme.palette.shadow};
`;
const menu = css `
  box-shadow: 0px 7px 26px -6px ${props => props.theme.palette.shadow};
`;

var _boxShadow = /*#__PURE__*/Object.freeze({
  __proto__: null,
  normal: normal,
  menu: menu
});

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
const two = css `
  ${style};
  -webkit-line-clamp: 1;
`;
const three = css `
  ${style};
  -webkit-line-clamp: 1;
`;

var _lineOverflow = /*#__PURE__*/Object.freeze({
  __proto__: null,
  one: one,
  two: two,
  three: three
});

export { front as A, normal$3 as B, around as C, SemiFully as D, menu as E, Fully as F, P5 as G, smaller as H, ImageTransparent as I, bigger as J, M1 as M, P2 as P, SemiTransparent as S, _space as _, P4 as a, big as b, P1 as c, normal as d, M3 as e, front_5 as f, M2 as g, fontWeight as h, fontSize as i, _zIndex as j, _opacity as k, light as l, _borderRadius as m, normal$1 as n, _boxShadow as o, _lineOverflow as p, semiBold as q, M5 as r, small as s, M0 as t, P0 as u, normal$2 as v, P3 as w, one as x, bold as y, front_1 as z };
//# sourceMappingURL=_lineOverflow-fd1b0d7f.js.map

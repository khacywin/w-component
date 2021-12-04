'use strict';

var styled = require('styled-components');

/**
 * Padding
 */
function fnPadding(size) {
    return {
        a: styled.css `padding: ${size}`,
        l: styled.css `padding-left: ${size}`,
        r: styled.css `padding-right: ${size}`,
        t: styled.css `padding-top: ${size}`,
        b: styled.css `padding-bottom: ${size}`,
        y: styled.css `padding-bottom: ${size}; padding-top: ${size}`,
        x: styled.css `padding-left: ${size}; padding-right: ${size}`
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
        a: styled.css `margin: ${size}`,
        l: styled.css `margin-left: ${size}`,
        r: styled.css `margin-right: ${size}`,
        t: styled.css `margin-top: ${size}`,
        b: styled.css `margin-bottom: ${size}`,
        y: styled.css `margin-bottom: ${size}; margin-top: ${size}`,
        x: styled.css `margin-left: ${size}; margin-right: ${size}`
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

const light = styled.css `font-weight: 100;`;
const normal$3 = styled.css `font-weight: normal;`;
const semiBold = styled.css `font-weight: 600;`;
const bold = styled.css `font-weight: 700;`;

var fontWeight = /*#__PURE__*/Object.freeze({
  __proto__: null,
  light: light,
  normal: normal$3,
  semiBold: semiBold,
  bold: bold
});

const smaller = styled.css `
  font-size: 12px;
`;
const small = styled.css `
  font-size: 13px;
`;
const normal$2 = styled.css `
  font-size: 14px;
`;
const big = styled.css `
  font-size: 16px;
`;
const bigger = styled.css `
  font-size: 18px;
  line-height: 23px;
`;
const huge = styled.css `
  font-size: 24px;
`;
const heavy = styled.css `
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

const above = styled.css `
  z-index: -1;
`;
const def = styled.css `
  z-index: 0;
`;
const front = styled.css `
  z-index: 10;
`;
const front_1 = styled.css `
  z-index: 100;
`;
const front_2 = styled.css `
  z-index: 200;
`;
const front_3 = styled.css `
  z-index: 300;
`;
const front_4 = styled.css `
  z-index: 400;
`;
const front_5 = styled.css `
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

const Fully = styled.css `
  opacity: 1;
`;
const SemiFully = styled.css `
  opacity: 0.8;
`;
const SemiTransparent = styled.css `
  opacity: 0.5;
`;
const Transparent = styled.css `
  opacity: 0;
`;
const ImageTransparent = styled.css `
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

const normal$1 = styled.css `border-radius: 7px;`;
const menu$1 = styled.css `border-radius: 10px;`;
const around = styled.css `border-radius: 9999px;`;

var _borderRadius = /*#__PURE__*/Object.freeze({
  __proto__: null,
  normal: normal$1,
  around: around,
  menu: menu$1
});

const normal = styled.css `
  box-shadow: 0 3px 6px var(--boxShadow);
`;
const menu = styled.css `
  box-shadow: 0px 7px 26px -6px var(--boxShadow);
`;

var _boxShadow = /*#__PURE__*/Object.freeze({
  __proto__: null,
  normal: normal,
  menu: menu
});

const style = styled.css `
  width: 100%;
  display: block;
  display: -webkit-box;
  line-height: initial;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const one = styled.css `
  ${style};
  -webkit-line-clamp: 1;
`;
const two = styled.css `
  ${style};
  -webkit-line-clamp: 1;
`;
const three = styled.css `
  ${style};
  -webkit-line-clamp: 1;
`;

var _lineOverflow = /*#__PURE__*/Object.freeze({
  __proto__: null,
  one: one,
  two: two,
  three: three
});

exports.Fully = Fully;
exports.ImageTransparent = ImageTransparent;
exports.M0 = M0;
exports.M1 = M1;
exports.M2 = M2;
exports.M3 = M3;
exports.M5 = M5;
exports.P0 = P0;
exports.P1 = P1;
exports.P2 = P2;
exports.P3 = P3;
exports.P4 = P4;
exports.P5 = P5;
exports.SemiFully = SemiFully;
exports.SemiTransparent = SemiTransparent;
exports._borderRadius = _borderRadius;
exports._boxShadow = _boxShadow;
exports._lineOverflow = _lineOverflow;
exports._opacity = _opacity;
exports._space = _space;
exports._zIndex = _zIndex;
exports.around = around;
exports.big = big;
exports.bigger = bigger;
exports.bold = bold;
exports.fontSize = fontSize;
exports.fontWeight = fontWeight;
exports.front = front;
exports.front_1 = front_1;
exports.front_5 = front_5;
exports.light = light;
exports.menu = menu;
exports.normal = normal$1;
exports.normal$1 = normal;
exports.normal$2 = normal$2;
exports.normal$3 = normal$3;
exports.one = one;
exports.semiBold = semiBold;
exports.small = small;
exports.smaller = smaller;

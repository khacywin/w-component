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

exports.M0 = M0;
exports.M1 = M1;
exports.M2 = M2;
exports.M3 = M3;
exports.M4 = M4;
exports.M5 = M5;
exports.P0 = P0;
exports.P1 = P1;
exports.P2 = P2;
exports.P3 = P3;
exports.P4 = P4;
exports.P5 = P5;
exports._space = _space;

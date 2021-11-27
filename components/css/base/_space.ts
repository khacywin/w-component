import { css } from 'styled-components';

/**
 * Padding
 */
function fnPadding(size: string) {
  return {
    a: css`padding: ${size}`,
    l: css`padding-left: ${size}`,
    r: css`padding-right: ${size}`,
    t: css`padding-top: ${size}`,
    b: css`padding-bottom: ${size}`,
    y: css`padding-bottom: ${size}; padding-top: ${size}`,
    x: css`padding-left: ${size}; padding-right: ${size}`
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
function fnMargin(size: string) {
  return {
    a: css`margin: ${size}`,
    l: css`margin-left: ${size}`,
    r: css`margin-right: ${size}`,
    t: css`margin-top: ${size}`,
    b: css`margin-bottom: ${size}`,
    y: css`margin-bottom: ${size}; margin-top: ${size}`,
    x: css`margin-left: ${size}; margin-right: ${size}`
  };
}

const M0 = fnMargin('0');
const M1 = fnMargin('3px');
const M2 = fnMargin('5px');
const M3 = fnMargin('8px');
const M4 = fnMargin('10px');
const M5 = fnMargin('12px');

export {
  P0, P1, P2, P3, P4, P5,
  M0, M1, M2, M3, M4, M5
};
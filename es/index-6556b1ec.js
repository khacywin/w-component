import { css } from 'styled-components';

const normal = css `
  transition-duration: 0.1s;
`;
const slow = css `
  transition-duration: 0.5s;
`;
const def = css `
  ${normal};
  transition-property: all;
  transition-timing-function: linear;
`;
const linear = css `
  ${normal};
  transition-property: all;
  transition-timing-function: linear;
`;
const easeIn = css `
  ${normal};
  transition-property: all;
  transition-timing-function: ease-in;
`;
const popup = css `
  transition-property: transform;
  transition-duration: 0.1s, 0s;
  transition-timing-function: linear;
`;
const showPopup = css `
  opacity: 1;
  height: auto;
  transform: translate(0, 3px);
`;
const hiddenPopup = css `
  height: 0;
  opacity: 0;
  transform: translate(0, -3px);
`;
const slideUpLeft = css `
  height: auto;
  opacity: 1;
  transform-origin: 0 0;
  transform: scaleX(1);
`;
const slideDownLeft = css `
  height: 0;
  opacity: 0;
  transform-origin: 0 0;
  transform: scaleX(0);
`;
var transition = { def, linear, easeIn, normal, slow, popup, showPopup, hiddenPopup, slideUpLeft, slideDownLeft };

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': transition
});

export { index as i, transition as t };
//# sourceMappingURL=index-6556b1ec.js.map

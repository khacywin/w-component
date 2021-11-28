'use strict';

var styled = require('styled-components');

const normal = styled.css `
  transition-duration: 0.1s;
`;
const slow = styled.css `
  transition-duration: 0.5s;
`;
const def = styled.css `
  ${normal};
  transition-property: all;
  transition-timing-function: linear;
`;
const linear = styled.css `
  ${normal};
  transition-property: all;
  transition-timing-function: linear;
`;
const easeIn = styled.css `
  ${normal};
  transition-property: all;
  transition-timing-function: ease-in;
`;
const popup = styled.css `
  transition-property: transform;
  transition-duration: 0.1s, 0s;
  transition-timing-function: linear;
`;
const showPopup = styled.css `
  opacity: 1;
  height: auto;
  transform: translate(0, 3px);
`;
const hiddenPopup = styled.css `
  height: 0;
  opacity: 0;
  transform: translate(0, -3px);
`;
const slideUpLeft = styled.css `
  height: auto;
  opacity: 1;
  transform-origin: 0 0;
  transform: scaleX(1);
`;
const slideDownLeft = styled.css `
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

exports.index = index;
exports.transition = transition;

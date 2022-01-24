'use strict';

var React = require('react');
var css_base__space = require('../_space-5cfb2697.js');
var css_base__fontWeight = require('../_fontWeight-72109252.js');
var css_base__fontSize = require('../_fontSize-5a701955.js');
require('../_zIndex-a46cddfb.js');
var css_base__opacity = require('../_opacity-19bf620b.js');
require('../_borderRadius-3deadb9d.js');
require('../_boxShadow-6d818d81.js');
require('../_lineOverflow-94c98c56.js');
var Icon = require('../Icon.js');
var styled = require('styled-components');
var css_transition_index = require('../index-9390237c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/**
 * Collapse for work
 * @prop {string} heading
 * @prop {JSX.Element[]} content - component
 * @prop {boolean} in - is show default
 */
const Collapse = styled__default["default"].div `
  position: relative;
`;
var index = React__default["default"].memo((props) => {
    const [show, setShow] = React.useState(!!props.in);
    return (React__default["default"].createElement(Collapse, null,
        React__default["default"].createElement(CollapseHeading, { show: props.noCollapse || show, onClick: () => setShow(!show) },
            props.noCollapse || React__default["default"].createElement(Icon, { icon: 'i-arrow-down', small: true }),
            React__default["default"].createElement("span", null, props.heading),
            React__default["default"].createElement(CollapseHeadingDash, null)),
        React__default["default"].createElement(CollapseContent, { show: props.noCollapse || show }, props.children)));
});
const CollapseHeadingDash = styled__default["default"].div `
  align-self: flex-end;
  transition: all 0.2s linear;
  flex: 1 1 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    background-color: var(--border);
    right: 0;
    bottom: 0;
    transition-property: width;
    width: 0;
    ${css_transition_index.transition.easeIn};
  }
`;
const CollapseHeading = styled__default["default"].div `
  display: flex;
  align-items: center;
  ${css_base__fontWeight.semiBold};
  ${css_base__fontSize.small};
  ${css_base__opacity.SemiTransparent};
  cursor: pointer;
  user-select: none;

  span {
    width: max-content;
  }

  ${CollapseHeadingDash} {
    &::after {
      ${(props) => (props.show ? 'width:98%' : '')};
    }
  }

  /* Icon */
  div:first-of-type {
    transition: all 0.2s linear;
    ${(props) => (props.show ? '' : 'transform: rotate(180deg)')};
    ${css_base__space.M2.r};
  }
`;
const CollapseContent = styled__default["default"].div `
  width: 100%;
  transform: scaleY(0);
  transform-origin: top;
  transition-property: height;
  transition-duration: 0.2s;
  ${css_transition_index.transition.linear};
  ${css_base__space.M5.y};
  ${css_base__space.M0.x};
  ${(props) => (props.show ? 'transform: scaleY(1)' : '')};
`;

module.exports = index;

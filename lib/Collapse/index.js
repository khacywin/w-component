'use strict';

var React = require('react');
var _lineOverflow = require('../_lineOverflow-b8a457d2.js');
var Icon = require('../Icon-b6bdc54f.js');
var styled = require('styled-components');
var index$1 = require('../index-f0e3963b.js');

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
            props.noCollapse || React__default["default"].createElement(Icon.Icon, { icon: 'i-arrow-down', small: true }),
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
    ${index$1.transition.easeIn};
  }
`;
const CollapseHeading = styled__default["default"].div `
  display: flex;
  align-items: center;
  ${_lineOverflow.semiBold};
  ${_lineOverflow.small};
  ${_lineOverflow.SemiTransparent};
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
    ${_lineOverflow.M2.r};
  }
`;
const CollapseContent = styled__default["default"].div `
  width: 100%;
  transform: scaleY(0);
  transform-origin: top;
  transition-property: height;
  transition-duration: 0.2s;
  ${index$1.transition.linear};
  ${_lineOverflow.M5.y};
  ${_lineOverflow.M0.x};
  ${(props) => (props.show ? 'transform: scaleY(1)' : '')};
`;

module.exports = index;

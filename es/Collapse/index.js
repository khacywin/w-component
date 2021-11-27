import React, { useState } from 'react';
import { h as semiBold, s as small, S as SemiTransparent, g as M2, i as M5, j as M0 } from '../_lineOverflow-40abb42a.js';
import { I as Icon } from '../Icon-69b9e7b0.js';
import styled from 'styled-components';
import { t as transition } from '../index-8505406e.js';

/**
 * Collapse for work
 * @prop {string} heading
 * @prop {JSX.Element[]} content - component
 * @prop {boolean} in - is show default
 */
const Collapse = styled.div `
  position: relative;
`;
var index = React.memo((props) => {
    const [show, setShow] = useState(!!props.in);
    return (React.createElement(Collapse, null,
        React.createElement(CollapseHeading, { show: props.noCollapse || show, onClick: () => setShow(!show) },
            props.noCollapse || React.createElement(Icon, { icon: 'i-arrow-down', small: true }),
            React.createElement("span", null, props.heading),
            React.createElement(CollapseHeadingDash, null)),
        React.createElement(CollapseContent, { show: props.noCollapse || show }, props.children)));
});
const CollapseHeadingDash = styled.div `
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
    ${transition.easeIn};
  }
`;
const CollapseHeading = styled.div `
  display: flex;
  align-items: center;
  ${semiBold};
  ${small};
  ${SemiTransparent};
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
    ${M2.r};
  }
`;
const CollapseContent = styled.div `
  width: 100%;
  transform: scaleY(0);
  transform-origin: top;
  transition-property: height;
  transition-duration: 0.2s;
  ${transition.linear};
  ${M5.y};
  ${M0.x};
  ${(props) => (props.show ? 'transform: scaleY(1)' : '')};
`;

export { index as default };
//# sourceMappingURL=index.js.map

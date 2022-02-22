/**
 * Collapse for work
 * @prop {string} heading
 * @prop {JSX.Element[]} content - component
 * @prop {boolean} in - is show default
 */

import React, { useState } from 'react';
import { fontSize, fontWeight, opacity, space } from 'components/styles/base';

import Icon from 'components/Icon';
import styled from 'styled-components';
import transition from 'components/styles/transition';

const Collapse = styled.div`
  position: relative;
`;

interface PropsCollapse {
  show: boolean;
}

interface Props {
  heading: string;
  children: JSX.Element | string;
  in?: boolean; // Default collapse is in
  noCollapse?: boolean; // When true, you can't collapse and content will always open
}

export default React.memo((props: Props) => {
  const [show, setShow] = useState(!!props.in);

  return (
    <Collapse>
      <CollapseHeading
        show={props.noCollapse || show}
        onClick={() => setShow(!show)}
      >
        {props.noCollapse || <Icon icon='i-arrow-down' small />}
        <span>{props.heading}</span>
        <CollapseHeadingDash />
      </CollapseHeading>
      <CollapseContent show={props.noCollapse || show}>
        {props.children}
      </CollapseContent>
    </Collapse>
  );
});


const CollapseHeadingDash = styled.div`
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

const CollapseHeading = styled.div<PropsCollapse>`
  display: flex;
  align-items: center;
  ${fontWeight.semiBold};
  ${fontSize.small};
  ${opacity.SemiTransparent};
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
    ${space.M2.r};
  }
`;

const CollapseContent = styled.div<PropsCollapse>`
  width: 100%;
  transform: scaleY(0);
  transform-origin: top;
  transition-property: height;
  transition-duration: 0.2s;
  ${transition.linear};
  ${space.M5.y};
  ${space.M0.x};
  ${(props) => (props.show ? 'transform: scaleY(1)' : '')};
`;

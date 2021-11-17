/**
 * Collapse for work
 * @prop {string} heading
 * @prop {JSX.Element[]} content - component
 * @prop {boolean} in - is show default
 */

import React, { useState } from "react";

import Icon from "components/Icon";

export interface CollapseProps {
  heading: string;
  children: JSX.Element | string;
  in?: boolean; // Default collapse is in
  noCollapse?: boolean; // When true, you can't collapse and content will always open
}

export default React.memo((props: CollapseProps) => {
  const [show, setShow] = useState(!!props.in);

  return (
    <div className="w-collapse">
      <div
        className={`w-collapse-heading ${
          props.noCollapse || show ? "show" : ""
        }`}
        onClick={() => setShow(!show)}
      >
        {props.noCollapse || <Icon icon="i-arrow-down" small />}
        <span>{props.heading}</span>
        <div className="w-collapse-heading-dash" />
      </div>
      <div
        className={`w-collapse-content ${
          props.noCollapse || show ? "show" : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
});

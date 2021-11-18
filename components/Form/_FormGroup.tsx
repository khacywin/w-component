import React from "react";

export type ErrorFormGroup = {
  type: string;
  message: string;
};
interface Props {
  label?: string;
  labelFocus?: boolean;
  isFocus: boolean;
  id?: string;
  children: JSX.Element[] | JSX.Element;
  style?: React.CSSProperties;
  isInputTitle?: boolean;
  className?: string;
  inline?: boolean;
  error?: ErrorFormGroup;
}

export default React.memo((props: Props) => {
  return (
    <>
      <div
        className={`w-form-group form-group
        ${props.className}
        ${props.isInputTitle ? "is-input-title" : ""}
        ${props.labelFocus ? "label-focus" : ""}
        ${props.isFocus ? "focus" : ""}
        ${props.inline ? "inline" : ""}
        ${props.inline ? "inline" : ""}
        ${props?.error?.type ? "error" : ""}
      `}
        style={props.style}
      >
        {props.children}
        {props.label && <label htmlFor={props.id}>{props.label}</label>}
      </div>
      {!!props.error?.type && (
        <div className="w-form-error-message">{props.error.message}</div>
      )}
    </>
  );
});

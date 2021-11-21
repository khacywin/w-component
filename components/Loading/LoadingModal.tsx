import React from "react";

export interface LoadingModalProps {
  width: string;
  maxWidth?: string;
  height: string;
  children: JSX.Element;
}
export default ({
  width,
  height,
  children,
  maxWidth,
}: LoadingModalProps): JSX.Element => {
  return (
    <div className="w-loading-modal">
      <div
        className="w-dialog"
        style={{
          width: width,
          maxWidth: maxWidth,
          height: height,
        }}
      >
        {children}
      </div>
    </div>
  );
};

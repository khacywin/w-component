import React from "react";

export interface LoadingComponentProps {
  width?: string;
  height: string;
}

export default function LoadingComponent({
  width,
  height,
}: LoadingComponentProps): JSX.Element {
  return (
    <div
      className="w-loading-component"
      data-width={width ? width : "100%"}
      data-height={height}
    />
  );
}

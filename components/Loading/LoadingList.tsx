import React from "react";

export interface LoadingListProps {
  height: string;
}

export default function (props: LoadingListProps) {
  return (
    <div className='w-loading-list' data-height={props.height}>
      <div />
      <div />
      <div />
    </div>
  );
}
import React from "react";

export interface ListProps {
  children: JSX.Element | JSX.Element[];
}
export default function List({ children }: ListProps) {
  return <div className='w-list'>{children}</div>;
}

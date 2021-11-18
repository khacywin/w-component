import React from "react";

interface IPropsDragItem {
  children: JSX.Element;
}
export function DragItem({ children }: IPropsDragItem) {
  return <div>{children}</div>;
}

export default function Drag() {
  return <div></div>;
}

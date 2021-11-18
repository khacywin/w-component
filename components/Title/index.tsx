import React from "react";

interface TitleProps {
  children: any;
}

export default function (props: TitleProps) {
  return <div className="w-title">{props.children} </div>;
}

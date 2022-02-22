import React from "react";
import styled from "styled-components";

export default function NoData({
  children,
  isAbsolute = false,
}: {
  children?: any;
  isAbsolute?: boolean;
}) {
  return (
    <Wrap isAbsolute={isAbsolute} className="no-data">
      {children || "No data"}
    </Wrap>
  );
}

const Wrap = styled.div<{ isAbsolute: boolean }>`
  text-align: center;
  padding: 20px;
  opacity: 0.6;
  user-select: none;

  ${({ isAbsolute }) => (isAbsolute ? `
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  ` : ``)};
`;

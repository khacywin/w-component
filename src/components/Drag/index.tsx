import React from 'react';
import styled from 'styled-components';

const WrapDragItem = styled.div``;

interface IPropsDragItem {
  children: JSX.Element;
}
export function DragItem({ children }: IPropsDragItem) {
  return <WrapDragItem></WrapDragItem>;
}

const Wrap = styled.div``;

export default function Drag() {
  return <Wrap></Wrap>;
}

import DialogItem, { TRefDialog } from "../src/components/Dialog";
import React, { useRef } from "react";

import AvatarItem from "../src/components/Avatar";
import ButtonAction from "../src/components/Button/ButtonAction";
import ButtonItem from "../src/components/Button";
import ButtonLoadMore from "../src/components/Button/ButtonLoadMore";
import CalendarItem from "../src/components/Calendar";
import ChatProcessItem from "../src/components/ChartProcess";
import ClockItem from "../src/components/Clock";
import CollapseItem from "../src/components/Collapse";
import DropdownItem from "../src/components/Dropdown";
import IconItem from "../src/components/Icon";
import ListItem from "../src/components/List";
import MonthItem from "../src/components/Calendar/Month";
import YearItem from "../src/components/Calendar/Year";
import styled from "styled-components";

if (document) {
  let root = document.documentElement;

  root.style.setProperty("--primary", "#22402F");
  root.style.setProperty("--secondary", "#5A8C70");
  root.style.setProperty("--third", "#7EBF9A");
  root.style.setProperty("--success", "#4caf50");
  root.style.setProperty("--shadow", "rgba(0, 0, 0, 0.5)");
  root.style.setProperty("--text", "rgba(0, 0, 0, 0.87)");
  root.style.setProperty("--textBlur", "#BFBFBF");
  root.style.setProperty("--warning", "#f1c40f");
  root.style.setProperty("--dark", "#121212");
  root.style.setProperty("--background", "#D5D5D5");
  root.style.setProperty("--backgroundContent", "#FFF");
  root.style.setProperty("--backgroundOpacity", "rgba(0, 0, 0, 0.1)");
  root.style.setProperty("--border", "#d9d9d9");
  root.style.setProperty("--borderLight", "#ECECEC");
  root.style.setProperty("--borderInput", "#D4D4D4");
  root.style.setProperty("--boxShadow", "#rgba(0, 0, 0, 0.16)");
}

const Wrap = styled.div`
  padding: 20px;
`;

export default {
  title: "w-component",
};

export const Button = () => (
  <Wrap>
    <Wrap>
      <ButtonItem> Button </ButtonItem>
    </Wrap>
    <Wrap>
      <ButtonLoadMore onClick={(e) => console.log("Hello")} />
    </Wrap>
    <Wrap>
      <ButtonAction> ButtonAction </ButtonAction>
    </Wrap>
  </Wrap>
);

export const Calendar = () => (
  <Wrap>
    <Wrap>
      <CalendarItem />
    </Wrap>
    <Wrap>
      <MonthItem />
    </Wrap>
    <Wrap>
      <YearItem />
    </Wrap>
  </Wrap>
);

export const Collapse = () => (
  <Wrap>
    <CollapseItem heading="Collapse"> This is content </CollapseItem>
  </Wrap>
);

export const Dialog = () => {
  const refDialog = useRef<TRefDialog>();
  const ref = useRef();

  const onClick = () => {
    refDialog.current.show();
  };

  return (
    <Wrap>
      <button ref={ref} onClick={onClick}>
        Dialog
      </button>
      <DialogItem ref={refDialog} refParent={ref}>
        <p> This is component </p>
      </DialogItem>
      <div id="modal-root" />
    </Wrap>
  );
};

export const Dropdown = () => (
  <DropdownItem
    dropdown_menu={
      <div>
        <p> A </p>
        <p> B </p>
        <p> C </p>
        <p> D </p>
      </div>
    }
  >
    Dropdown
  </DropdownItem>
);

export const Avatar = () => <AvatarItem>AV</AvatarItem>;

export const ChatProcess = () => <ChatProcessItem amount={5} sum={30} />;

export const Clock = () => (
  <Wrap>
    <ClockItem />
  </Wrap>
);

export const Icon = () => (
  <Wrap>
    <IconItem src="data:image/png;base64,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" />
  </Wrap>
);

export const List = () => (
  <Wrap>
    <ListItem>
      <div>A</div>
      <div>B</div>
      <div>C</div>
      <div>D</div>
    </ListItem>
  </Wrap>
);

export const Modal = () => (
  <Wrap>
    <ListItem>
      <div>A</div>
      <div>B</div>
      <div>C</div>
      <div>D</div>
    </ListItem>
  </Wrap>
);


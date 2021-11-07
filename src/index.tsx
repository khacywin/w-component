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
  root.style.setProperty("--background", "#D5D5D5");
  root.style.setProperty("--backgroundContent", "#FFF");
  root.style.setProperty("--backgroundOpacity", "rgba(0, 0, 0, 0.1)");
  root.style.setProperty("--border", "#d9d9d9");
  root.style.setProperty("--borderLight", "#ECECEC");
  root.style.setProperty("--borderInput", "#D4D4D4");
  root.style.setProperty("--boxShadow", "#rgba(0, 0, 0, 0.16)");
}

// Button
export { default as Button } from "./Components/Button";
export { default as ButtonAction } from "./Components/Button/ButtonAction";
export { default as ButtonLoadMore } from "./Components/Button/ButtonLoadMore";

// Calender
export { default as Calender } from "./Components/Calendar";
export { default as CalenderMonth } from "./Components/Calendar/Month";
export { default as CalenderYear } from "./Components/Calendar/Year";

// Collapse
export { default as Collapse } from "./Components/Collapse";
export * from "./Components/Collapse";

// Dialog
export { default as Dialog } from "./Components/Dialog";
export * from "./Components/Dialog";

// Drag
export { default as Drag } from "./Components/Drag";
export * from "./Components/Drag";

// Dropdown
export { default as Dropdown } from "./Components/Dropdown";
export * from "./Components/Dropdown";

// Avatar
export { default as Avatar } from "./components/Avatar";
export * from "./components/Avatar";

// ChartProcess
export { default as ChartProcess } from "./components/ChartProcess";
export * from "./components/ChartProcess";

// Clock
export { default as Clock } from "./components/Clock";
export * from "./components/Clock";

// Icon
export { default as Icon } from "./components/Icon";
export * from "./components/Icon";

// List
export { default as List } from "./components/List";
export * from "./components/List";

// Logo
export { default as Logo } from "./components/Logo";
export * from "./components/Logo";

// Modal
export { default as Modal } from "./components/Modal";
export * from "./components/Modal";

// NoData
export { default as NoData } from "./components/NoData";
export * from "./components/NoData";

// Popover
export { default as Popover } from "./components/Popover";
export * from "./components/Popover";

// Subtitle
export { default as Subtitle } from "./components/Subtitle";
export * from "./components/Subtitle";

// Text
export { default as Text } from "./components/Text";
export * from "./components/Text";

// Title
export { default as Title } from "./components/Title";
export * from "./components/Title";

// Tooltip
export { default as Tooltip } from "./components/Tooltip";
export * from "./components/Tooltip";

/**
 * FORM
 */
export { default as Form } from "./Components/Form";
export * from "./Components/Form";

export { default as Input } from "./Components/Form/Input";
export * from "./Components/Form/Input";

export { default as Checkbox } from "./Components/Form/Checkbox";
export * from "./Components/Form/Checkbox";

export { default as DateRange } from "./Components/Form/DateRange";
export * from "./Components/Form/DateRange";

export { default as Search } from "./Components/Form/Search";
export * from "./Components/Form/Search";

export { default as Switch } from "./Components/Form/Switch";
export * from "./Components/Form/Switch";

export { default as Select } from "./Components/Form/Select";
export * from "./Components/Form/Select";

export { default as DatePicker } from "./Components/Form/DatePicker";
export * from "./Components/Form/DatePicker";

/**
 * Util
 */

export * from "./Components/util/Loading";

export { default as Notification } from "./Components/util/Notification";

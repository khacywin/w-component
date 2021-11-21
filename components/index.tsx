import "./__css__/index.scss";
import "./index-style-only";

if (document) {
  const root = document.documentElement;

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
export { default as Button } from "./Button";
export { default as ButtonAction } from "./Button/ButtonAction";
export { default as ButtonLoadMore } from "./Button/ButtonLoadMore";

// Calender
export { default as Calender } from "./Calendar";
export { default as CalenderMonth } from "./Calendar/Month";
export { default as CalenderYear } from "./Calendar/Year";

// Collapse
export { default as Collapse } from "./Collapse";
export * from "./Collapse";

// Dialog
export { default as Dialog } from "./Dialog";
export * from "./Dialog";

// Drag
export { default as Drag } from "./Drag";
export * from "./Drag";

// Dropdown
export { default as Dropdown } from "./Dropdown";
export * from "./Dropdown";

// Avatar
export { default as Avatar } from "./Avatar";
export * from "./Avatar";

// ChartProcess
export { default as ChartProcess } from "./ChartProcess";
export * from "./ChartProcess";

// Clock
export { default as Clock } from "./Clock";
export * from "./Clock";

// Icon
export { default as Icon } from "./Icon";
export * from "./Icon";

// List
export { default as List } from "./List";
export * from "./List";

// Logo
export { default as Logo } from "./Logo";
export * from "./Logo";

// Modal
export { default as Modal } from "./Modal";
export * from "./Modal";

// NoData
export { default as NoData } from "./NoData";
export * from "./NoData";

// Popover
export { default as Popover } from "./Popover";
export * from "./Popover";

// Subtitle
export { default as Subtitle } from "./Subtitle";
export * from "./Subtitle";

// Title
export { default as Title } from "./Title";
export * from "./Title";

// Tooltip
export { default as Tooltip } from "./Tooltip";
export * from "./Tooltip";

/**
 * FORM
 */
export { default as Form } from "./Form";
export * from "./Form";

export { default as Input } from "./Form/Input";
export * from "./Form/Input";

export { default as Checkbox } from "./Form/Checkbox";
export * from "./Form/Checkbox";

export { default as DateRange } from "./Form/DateRange";
export * from "./Form/DateRange";

export { default as Search } from "./Form/Search";
export * from "./Form/Search";

export { default as Switch } from "./Form/Switch";
export * from "./Form/Switch";

export { default as Select } from "./Form/Select";
export * from "./Form/Select";

export { default as DatePicker } from "./Form/DatePicker";
export * from "./Form/DatePicker";

/**
 * Util
 */

export { default as Loading } from "./Loading";

export { default as Notification } from "./Notification";

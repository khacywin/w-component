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
  root.style.setProperty("--boxShadow", "rgba(0, 0, 0, 0.16)");
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

export { default as Input } from "./Input";
export * from "./Input";

export { default as Checkbox } from "./Checkbox";
export * from "./Checkbox";

export { default as DateRange } from "./DateRange";
export * from "./DateRange";

export { default as Slider } from "./Slider";
export * from "./Slider";

export { default as Search } from "./Input/Search";
export * from "./Input/Search";

export { default as Switch } from "./Switch";
export * from "./Switch";

export { default as Select } from "./Select";
export * from "./Select";

export { default as DatePicker } from "./DatePicker";
export * from "./DatePicker";

/**
 * Util
 */

export * as Loading from "./Loading";

export * as notification from "./Notification";

// CSS
export * as styles from "./styles";

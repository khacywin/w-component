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

import * as components from "./components";

export default components;

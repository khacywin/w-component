import React from "react";

interface PropsStyled {
  dark?: boolean;
  error?: boolean;
  normal?: boolean;
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
}

export interface ButtonProps extends PropsStyled {
  children: any;
  type?: "submit" | "button" | "reset";
  className?: string;
  fnClick?: () => void;
}

export default function ({
  children,
  className,
  error,
  fnClick,
  normal,
  primary,
  success,
  type,
  warning,
}: ButtonProps) {
  return (
    <button
      type={type || "button"}
      className={`w-button ${className || ""} w-button-${
        primary
          ? "primary"
          : success
          ? "success"
          : warning
          ? "warning"
          : error
          ? "error"
          : normal
          ? "normal"
          : ""
      }`}
      onClick={fnClick}
    >
      {children}
    </button>
  );
}

export { default as ButtonAction } from "./ButtonAction";
export { default as ButtonLoadMore } from "./ButtonLoadMore";

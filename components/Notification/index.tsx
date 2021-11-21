/**
 * NOTIFICATIONS
 * @props message - (default) - (error) - (success)
 */

import React, { useCallback, useEffect, useState } from "react";

interface Props {
  default?: boolean;
  error?: boolean;
  white?: boolean;
  success?: boolean;
  id?: string | number;
}

interface PropsWrp extends Props {
  open?: boolean;
}

interface PropsComponent extends PropsWrp {
  message: string | JSX.Element;
  fnOff: (id?: string | number) => void;
}
export default React.memo((props: PropsComponent) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = useCallback(() => {
    setIsOpen(false);

    setTimeout(() => {
      props.fnOff(props?.id);
    }, 200);
  }, [props]);

  useEffect(() => {
    const closeState = setTimeout(() => {
      setIsOpen(false);
    }, 4800);

    const closeStore = setTimeout(() => {
      props.fnOff(props?.id);
    }, 5000);

    return () => {
      clearTimeout(closeState);
      clearTimeout(closeStore);
    };
  }, [props]);

  return (
    <div
      className={`w-notification 
      ${isOpen ? "open" : ""}
      ${props.white ? "white" : ""}
      ${props.success ? "success" : ""}
      ${props.error ? "error" : ""}
    `}
    >
      {typeof props.message === "string" ? (
        <div
          className="w-notification-message"
          dangerouslySetInnerHTML={{ __html: props.message }}
        />
      ) : (
        <div className="w-notification-message">{props.message}</div>
      )}
      <button
        className={`w-notification-close ${props.white ? "white" : ""}`}
        type="button"
        onClick={handleClose}
      >
        <i className="i-close" />
      </button>
    </div>
  );
});

// Popup notification
export { default as PopupNotification } from "./PopupNotification";

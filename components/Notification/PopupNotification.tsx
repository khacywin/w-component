import React, { useCallback, useMemo, useState } from "react";

import Button from "components/Button";
import Modal from "components/Modal";

interface IProps {
  id: number;
  title?: string;
  message?: string;
  type: "normal" | "yes/no";
  fnOk?: () => void;
  fnYes?: () => void;
  fnNo?: () => void;
}
export default React.memo(
  ({ title, message, type, fnOk, fnYes, fnNo }: IProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const _handleCloseNotification = useCallback(
      (fn: any) => async () => {
        setIsLoading(true);
        fn && (await fn());

        setIsLoading(false);
      },
      []
    );

    const buttonType = useMemo(
      () =>
        new Map()
          .set(
            "normal",
            <div
              className={`w-notification-direction ${
                isLoading ? "disable" : ""
              }`}
            >
              <Button fnClick={_handleCloseNotification(fnOk)}>OK</Button>
            </div>
          )
          .set(
            "yes/no",
            <div
              className={`w-notification-direction ${
                isLoading ? "disable" : ""
              }`}
            >
              <Button error fnClick={_handleCloseNotification(fnYes)}>
                Yes
              </Button>
              <Button normal fnClick={_handleCloseNotification(fnNo)}>
                No
              </Button>
            </div>
          ),
      [_handleCloseNotification, fnNo, fnOk, fnYes, isLoading]
    );
    return (
      <Modal
        styled={{
          maxWidth: "400px",
        }}
        show
        noFooter
        heading={title}
      >
        <div className="w-notification-popup">
          <p>{message}</p>
          {buttonType.get(type)}
        </div>
      </Modal>
    );
  }
);

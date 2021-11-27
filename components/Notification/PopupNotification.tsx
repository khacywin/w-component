import React, { useCallback, useMemo, useState } from "react";

import Button from "components/Button";
import Modal from "components/Modal";
import styled from "styled-components";

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
            <WrapButton disable={isLoading}>
              <Button fnClick={_handleCloseNotification(fnOk)}>OK</Button>
            </WrapButton>
          )
          .set(
            "yes/no",
            <WrapButton disable={isLoading}>
              <Button error fnClick={_handleCloseNotification(fnYes)}>
                Yes
              </Button>
              <Button normal fnClick={_handleCloseNotification(fnNo)}>
                No
              </Button>
            </WrapButton>
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
        <Wrap>
          <p>{message}</p>
          {buttonType.get(type)}
        </Wrap>
      </Modal>
    );
  }
);

const Wrap = styled.div`
  padding-bottom: 20px;

  p {
    margin: 0 auto 12px;
    max-width: 300px;
    text-align: center;
  }
`;

const WrapButton = styled.div<{ disable: boolean }>`
  display: flex;
  justify-content: center;

  ${({ disable }) =>
    disable &&
    `
    button: {
      user-select: none;
      pointer-events: none;
      opacity: .5;
    }
  `};
`;

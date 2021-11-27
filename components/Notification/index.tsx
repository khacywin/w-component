/**
 * NOTIFICATIONS
 * @props message - (default) - (error) - (success)
 */

import React, { useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

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
    <NotificationWrap
      open={isOpen}
      white={!!props.white}
      success={!!props.success}
      error={!!props.error}
    >
      {typeof props.message === "string" ? (
        <Message dangerouslySetInnerHTML={{ __html: props.message }} />
      ) : (
        <Message>{props.message}</Message>
      )}
      <ButtonClose white={!!props.white} type="button" onClick={handleClose}>
        <i className="i-close" />
      </ButtonClose>
    </NotificationWrap>
  );
});

const slideRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideRightOut = keyframes`
 100% {
    opacity: 0;
    transform: translateX(-100px);
  }
  0% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const NotificationWrap = styled.div<PropsWrp>`
  padding: 8px 10px;
  color: ${(props) =>
    props.white ? "var(--text)" : "var(--backgroundContent)"};
  background-color: ${(props) =>
    props.error
      ? "var(--error)"
      : props.success
      ? "var(--success)"
      : props.white
      ? "var(--backgroundContent)"
      : "var(--dark)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 1px 3px var(--boxShadow);
  animation: ${(props) => (props.open ? slideRight : slideRightOut)} 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const Message = styled.div`
  position: relative;
  top: -1px;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ButtonClose = styled.button<Props>`
  border: none;
  background-color: transparent;
  margin-left: 15px;
  cursor: pointer;
  width: 30px;
  height: 30px;

  i {
    color: ${({ white }) => (white ? "initial" : "var(--backgroundContent)")};
  }

  &:focus {
    border: none;
    outline: 0;
  }
`;

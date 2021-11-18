/**
 * @prop {heading?} label
 * @prop {JSX.Element | JSX.Element[]} content
 * @prop {JSX.Element | JSX.Element[] ?} footer
 * @prop {boolean} show
 */

import React, { useEffect, useImperativeHandle, useState } from "react";

import Button from "components/Button";
import ButtonAction from "components/Button/ButtonAction";
import { IObject } from "components/util/type";
import Icon from "components/Icon";
import { createPortal } from "react-dom";

export interface ModalProps {
  heading?: string;
  content?: JSX.Element | JSX.Element[] | string;
  children?: JSX.Element | JSX.Element[] | string;
  footer?: JSX.Element;
  fnClose?: () => void; // When you open Modal only with use ref, you can use this function to handle
  noFooter?: boolean;
  show?: boolean;
  styled?: IObject;
}

export type TRefModal = {
  show: () => void;
  hide: () => void;
} & HTMLDivElement;

export default React.forwardRef(
  (
    {
      heading,
      content,
      children,
      footer,
      fnClose,
      noFooter,
      show,
      styled,
    }: ModalProps,
    ref: any
  ) => {
    const [isShow, setShow] = useState(false);

    useImperativeHandle(ref, () => ({
      show() {
        setShow(true);
      },

      hide() {
        setShow(false);
        setTimeout(() => {
          fnClose?.();
        }, 100);
      },
    }));

    function hide(): void {
      setShow(false);
      if (fnClose) {
        fnClose();
      }
    }

    useEffect(() => {
      setShow(show);
    }, [show]);

    return isShow
      ? createPortal(
          <div className="w-modal">
            <div
              className={`w-modal-dialog ${show ? "show" : ""}`}
              style={styled}
            >
              <div className="w-modal-heading">
                {heading && <span>{heading}</span>}
                <ButtonAction action={() => hide()}>
                  <Icon icon="i-close" />
                </ButtonAction>
              </div>

              <div className="w-modal-content">{content || children}</div>
              {!noFooter && (
                <div className="w-modal-footer">
                  {footer ? (
                    footer
                  ) : (
                    <Button fnClick={() => hide()}> OK </Button>
                  )}
                </div>
              )}
            </div>
          </div>,
          document.getElementById("modal-root")
        )
      : null;
  }
);

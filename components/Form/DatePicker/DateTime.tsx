import React, { useCallback, useEffect, useRef, useState } from "react";
import { boxShadow, space } from "css/base";

import ButtonAction from "components/Button/ButtonAction";
import Calendar from "components/Calendar";
import Clock from "components/Clock";
import FormGroup from "components/Form/_FormGroup";
import { IDatePickerProps } from ".";
import Icon from "components/Icon";
import InputStyle from "css/elements/InputStyle";
import { TPosition } from "util/type";
import dayjs from "dayjs";
import generatedId from "util/generatedId";
import styled from "styled-components";
import transition from "css/transition";
import useHandleDisplay from "hooks/useHandleDisplay";
import useMutationObservable from "hooks/useIntersectionObserver";
import usePositionDropdown from "hooks/usePositionDropdown";

interface IProps extends IDatePickerProps {
  tabDefault?: "date" | "time";
}
export default React.memo(
  ({
    fnChange,
    format = "DD MMMM,YYYY",
    label,
    name,
    style,
    value = "",
    isRemove = true,
    defaultValue,
    disableItem,
    position,
  }: IProps) => {
    const id = generatedId("date-picker");
    const refDropdown = useRef();
    const refMenuDropdown = useRef();
    const ref = useRef<HTMLInputElement>();
    const refTime = useRef<HTMLInputElement>();
    const refShow = useRef(false); // To check handling position

    const [tab, setTab] = useState<string>("date");
    const [time, setTime] = useState(""); // This is string, HH:MM
    const [date, setDate] = useState<Date>(null); // Object Date to save

    const { isDisplay, show, hide } = useHandleDisplay(refDropdown, false);
    const { handlePosition } = usePositionDropdown(refMenuDropdown);

    const handleDropdownChange = useCallback(
      (list) => {
        if (list[0].boundingClientRect.height && !refShow.current) {
          refShow.current = true;
          handlePosition();
        } else if (list[0].boundingClientRect.height === 0) {
          refShow.current = false;
        }
      },
      [handlePosition]
    );

    useMutationObservable(refMenuDropdown.current, handleDropdownChange);

    // Handle show dropdown menu
    const onShow = useCallback(
      (container: string) => () => {
        setTab(container);
        show();
      },
      [show]
    );

    // Change value
    const onChange = useCallback(
      (field: string) => (val: any) => {
        switch (field) {
          case "time": {
            // Format for time, adn format is HH:MM
            const _value = `${val[0] < 10 ? "0" + val[0] : val[0]}:${
              val[1] < 10 ? "0" + val[1] : val[1]
            }`;
            setTime(_value);
            refTime.current.value = _value;

            if (date) {
              const _date = new Date(date);
              _date.setHours(val[0]);
              _date.setMinutes(val[1]);

              setDate(_date);
              fnChange?.(_date.toString());
            }

            break;
          }

          case "date-time": {
            let min: number, hour: number;

            if (!time) {
              min = new Date().getMinutes();
              hour = new Date().getHours();

              // Format for time, adn format is HH:MM
              const _value = `${hour < 10 ? "0" + hour : hour}:${
                min < 10 ? "0" + min : min
              }`;

              refTime.current.value = _value;
              setTime(_value);
            } else {
              hour = +time.split(":")[0];
              min = +time.split(":")[1];
            }

            val.setHours(hour);
            val.setMinutes(min);

            ref.current.value = dayjs(val).format(format);
            setDate(val);
            fnChange?.(val.toString());
            break;
          }

          default:
            break;
        }
      },
      [date, fnChange, time, format]
    );

    // Set empty data
    const onRemove = useCallback(() => {
      fnChange?.("");
      setDate(null);
      setTime("");
      ref.current.value = "";
      refTime.current.value = "";
      hide();
    }, [fnChange, hide]);

    /**
     * Handle date when enter from keyboard
     */
    // Date
    const onBlurDate = useCallback(
      (e) => {
        const val = e.target.value;

        if (dayjs(val, "DD/MM/YYYY").isValid()) {
          onChange("date-time")(new Date(val));
        } else {
          e.target.value = "";
        }
      },
      [onChange]
    );

    // Time
    const onBlurTime = useCallback(
      (e) => {
        const val = e.target.value;
        if (val && /[0-9]{1,2}:[0-9]{1,2}/.test(val)) {
          onChange("time")(val);
        } else {
          e.target.value = "";
        }
      },
      [onChange]
    );

    // Handle value and format data
    // Set state of component with value
    useEffect(() => {
      if (!value && !defaultValue) return;

      const _val = value || defaultValue;

      const _date = new Date(_val);

      setDate(_date);
      setTime(dayjs(_date).format("hh:mm"));
      ref.current.value = dayjs(_date).format(format);
      refTime.current.value = dayjs(_date).format("hh:mm");

      return () => {
        setDate(null);
        setTime(null);
      };
    }, [value, format, defaultValue]);

    return (
      <Wrap ref={refDropdown}>
        <FormGroup style={style || {}} isFocus label={label} id={id}>
          <InputSection>
            <input
              type="hidden"
              name={name}
              value={date ? date.toUTCString() : ""}
            />
            <InputControl
              autoComplete="off"
              id={id + "-calendar"}
              placeholder={"DD/MM/YYYY"}
              onClick={onShow("date")}
              onBlur={onBlurDate}
              ref={ref}
            />
            <InputControl
              autoComplete="off"
              id={id + "time"}
              onClick={onShow("time")}
              placeholder="hh:mm"
              onBlur={onBlurTime}
              ref={refTime}
            />
          </InputSection>
          {isRemove && (
            <ButtonClose onClick={onRemove} type="button">
              <Icon small icon="i-close" />
            </ButtonClose>
          )}
          <DropdownMenu
            position={position}
            ref={refMenuDropdown}
            show={isDisplay}
          >
            <InputDataSelector>
              <WrapContainer>
                <Top>
                  <div>
                    <ButtonAction
                      isActive={tab === "date"}
                      onClick={() => setTab("date")}
                    >
                      <Icon icon="i-calendar" />
                    </ButtonAction>

                    <ButtonAction
                      isActive={tab === "time"}
                      onClick={() => setTab("time")}
                    >
                      <Icon icon="i-time" />
                    </ButtonAction>
                  </div>
                  <div>
                    <ButtonAction onClick={() => hide()}>
                      <Icon icon="i-close" />
                    </ButtonAction>
                  </div>
                </Top>
                <div>
                  <Container active={tab === "date"}>
                    <Calendar
                      selected={new Date(date)}
                      disableItem={disableItem}
                      fnSelected={onChange("date-time")}
                    />
                  </Container>
                  <Container active={tab === "time"}>
                    <Clock
                      selected={time || date}
                      fnSelected={onChange("time")}
                    />
                  </Container>
                </div>
              </WrapContainer>
            </InputDataSelector>
          </DropdownMenu>
        </FormGroup>
      </Wrap>
    );
  }
);

const ButtonClose = styled.button`
  background-color: var(--backgroundContent);
  border: none;
  cursor: pointer;
  display: none;
  outline: 0;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);

  &:focus {
    outline: 0;
  }
`;

const Wrap = styled.div`
  &:hover {
    ${ButtonClose} {
      display: block;
    }
  }
`;
const InputControl = styled.input`
  ${InputStyle};
`;

type DropdownMenuType = {
  show: boolean;
  position: TPosition;
};
const DropdownMenu = styled.div<DropdownMenuType>`
  background-color: var(--backgroundContent);
  display: none;
  padding: 15px;
  position: absolute;
  z-index: -1;

  ${({ position }) =>
    position === "right"
      ? "right: 2px;"
      : position === "left"
      ? "left: 2px;"
      : position === "top"
      ? "bottom: calc(100% + 10px);"
      : position === "bottom"
      ? "top: calc(100% + 10px);"
      : ""};

  ${({ show }) =>
    show &&
    `
    display: block;
    z-index: 300;
  `};
  ${boxShadow.normal};
  ${transition.popup};
`;

const InputDataSelector = styled.div`
  ${space.P2.a};
`;

const InputSection = styled.div`
  display: flex;
`;

const WrapContainer = styled.div``;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
`;

const Container = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 225px;
  height: 285px;
`;

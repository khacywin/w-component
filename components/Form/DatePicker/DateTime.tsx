import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import ButtonAction from "components/Button/ButtonAction";
import Calendar from "components/Calendar";
import Clock from "components/Clock";
import { DatePickerProps } from ".";
import FormGroup from "components/Form/_FormGroup";
import Icon from "components/Icon";
import dayjs from "dayjs";
import generatedId from "components/util/helps/generateKey";
import useHandleDisplay from "components/util/hooks/useHandleDisplay";
import usePositionDropdown from "components/util/hooks/usePositionDropdown";

interface DateTimeProps extends DatePickerProps {
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
  }: DateTimeProps) => {
    const id = generatedId("date-picker");
    const refDropdown = useRef();
    const refMenuDropdown = useRef();
    const ref = useRef<HTMLInputElement>();
    const refTime = useRef<HTMLInputElement>();

    const [tab, setTab] = useState<string>("date");
    const [time, setTime] = useState(""); // This is string, HH:MM
    const [date, setDate] = useState<Date>(); // Object Date to save

    const widthInputDate = useMemo(() => ref?.current?.clientWidth, []);

    const { isDisplay, show, hide } = useHandleDisplay(refDropdown, false);
    const { handlePosition } = usePositionDropdown(refMenuDropdown, {
      add: {
        height: ref?.current?.clientHeight,
      },
    });

    // Handle show dropdown menu
    const onShow = useCallback(
      (container: string) => () => {
        handlePosition(container === "time" ? { left: widthInputDate } : {});
        show();
        setTab(container);
      },
      [show, handlePosition, widthInputDate]
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
      <div className="w-date-picker" ref={refDropdown}>
        <FormGroup style={style || {}} isFocus label={label} id={id}>
          <div className="w-date-picker-section">
            <input
              type="hidden"
              name={name}
              value={date ? date.toUTCString() : ""}
            />
            <input
              className="w-input"
              autoComplete="off"
              id={id + "-calendar"}
              placeholder={"DD/MM/YYYY"}
              onClick={onShow("date")}
              onBlur={onBlurDate}
              ref={ref}
            />
            <input
              className="w-input"
              autoComplete="off"
              id={id + "time"}
              onClick={onShow("time")}
              placeholder="hh:mm"
              onBlur={onBlurTime}
              ref={refTime}
            />
          </div>
          {isRemove && (
            <button
              className="w-date-picker-close"
              onClick={onRemove}
              type="button"
            >
              <Icon small icon="i-close" />
            </button>
          )}
          <div
            className={`w-date-picker-dropdown ${isDisplay ? "show" : ""}`}
            ref={refMenuDropdown}
          >
            <div className="w-date-picker-selector">
              <div>
                <div className="w-date-picker-selector-top">
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
                </div>
                <div>
                  <div
                    className={`w-date-picker-selector-container ${
                      tab === "date" ? "active" : ""
                    }`}
                  >
                    <Calendar
                      selected={new Date(date)}
                      disableItem={disableItem}
                      fnSelected={onChange("date-time")}
                    />
                  </div>
                  <div
                    className={`w-date-picker-selector-container ${
                      tab === "time" ? "active" : ""
                    }`}
                  >
                    <Clock
                      selected={time || date}
                      fnSelected={onChange("time")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FormGroup>
      </div>
    );
  }
);
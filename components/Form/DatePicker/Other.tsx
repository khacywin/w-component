import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Calendar from "components/Calendar";
import Clock from "components/Clock";
import { DatePickerProps } from ".";
import FormGroup from "../_FormGroup";
import Icon from "components/Icon";
import Month from "components/Calendar/Month";
import Year from "components/Calendar/Year";
import dayjs from "dayjs";
import generatedId from "components/util/helps/generateKey";
import useHandleDisplay from "components/util/hooks/useHandleDisplay";
import usePositionDropdown from "components/util/hooks/usePositionDropdown";

export default function Other({
  fnChange,
  format = "DD MMMM,YYYY",
  label,
  name,
  picker = "date-time",
  style,
  value = "",
  isRemove = true,
  defaultValue,
  disableItem,
}: DatePickerProps) {
  const id = generatedId("date-picker");
  const refDropdown = useRef();
  const refMenuDropdown = useRef();
  const ref = useRef<HTMLInputElement>();

  const [container, setContainer] = useState<string>("date");
  const [val, setVal] = useState<any>("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState(null);

  const widthInputDate = useMemo(() => ref?.current?.clientWidth, []);

  const { isDisplay, show, hide } = useHandleDisplay(refDropdown, true);
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
      setContainer(container);
    },
    [show, handlePosition, widthInputDate]
  );

  // Change value
  const onChange = useCallback(
    (field: string) => (val: any) => {
      switch (field) {
        case "date": {
          setDate(
            new Date(
              dayjs(val).format("YYYY-MM-DD") + (time ? " " + time : "")
            ).toString()
          );

          const dateStr = dayjs(val).format(format);
          setVal(dateStr);
          fnChange?.(dateStr);

          break;
        }

        case "month": {
          setDate(
            new Date(
              dayjs(val).format("YYYY-MM-DD") + (time ? " " + time : "")
            ).toString()
          );

          const dateStr = dayjs(val).format(format);
          setVal(dateStr);
          fnChange?.(dateStr);

          break;
        }

        case "year": {
          const _year = new Date(val).getFullYear();

          setVal(_year.toString());
          fnChange?.(_year.toString());
          break;
        }

        case "date-time": {
          const min = val.getMinutes();
          const hour = val.getHours();
          // Format for time, adn format is HH:MM
          const _value = `${hour < 10 ? "0" + hour : hour}:${
            min < 10 ? "0" + min : min
          }`;
          setTime(_value);

          setVal(dayjs(val).format(format));
          fnChange?.(dayjs(val).format(format));
          break;
        }

        default:
          setVal(val);
          fnChange?.(val);
          break;
      }
    },
    [format, time, fnChange]
  );

  // Set empty data
  const onRemove = useCallback(() => {
    fnChange && fnChange("");
    setVal(null);
    setDate(null);
    setTime("");
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
        onChange(picker)(new Date(val));
      } else {
        e.target.value = "";
      }
    },
    [onChange, picker]
  );

  const containers = useMemo(
    () =>
      new Map()
        .set(
          "date",
          <div className="w-date-picker-selector-container show">
            <Calendar
              selected={val}
              disableItem={disableItem}
              fnSelected={onChange("date")}
            />
          </div>
        )
        .set(
          "time",
          <div className="w-date-picker-selector-container show">
            <Clock selected={time} fnSelected={onChange("time")} />
          </div>
        )
        .set(
          "year",
          <div className="w-date-picker-selector-container show">
            <Year
              selected={val}
              disableItem={disableItem}
              fnSelected={onChange("year")}
            />
          </div>
        )
        .set(
          "month",
          <div className="w-date-picker-selector-container show">
            <Month
              selected={new Date(date)}
              disableItem={disableItem}
              fnSelected={onChange("month")}
            />
          </div>
        ),
    [val, disableItem, onChange, time, date]
  );

  // Handle value and format data
  // Set state of component with value
  useEffect(() => {
    if (!value && !defaultValue) return;
    const _val = value || defaultValue;

    if (picker === "date-time" || picker === "date") {
      const _date = new Date(_val);
      setDate(_date);
      setTime(dayjs(_date).format("hh:mm"));
      setVal(dayjs(_date).format(format));
    } else if (picker === "year") {
      setVal(new Date(_val.toString()).getFullYear());
    } else if (picker === "month") {
      setVal(dayjs(_val).format(format));
      setDate(new Date(_val));
    } else {
      setDate(new Date(_val));
    }

    return () => {
      setDate(null);
      setTime(null);
      setVal(null);
    };
  }, [value, format, picker, defaultValue]);

  // Update input control
  useEffect(() => {
    if (!ref.current) return;

    ref.current.value = val;
  }, [val]);

  return (
    <div className="w-date-picker" ref={refDropdown}>
      <FormGroup style={style || {}} isFocus label={label} id={id}>
        <div className="w-date-picker-section">
          {(picker === "date" || picker === "month") && (
            <input type="hidden" name={name} defaultValue={date} />
          )}
          <input
            className="w-input"
            autoComplete="off"
            id={id + "-calendar"}
            name={picker !== "month" ? name : ""}
            placeholder={format}
            onClick={onShow(picker)}
            onBlur={onBlurDate}
            ref={ref}
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
            {containers.get(container)}
          </div>
        </div>
      </FormGroup>
    </div>
  );
}

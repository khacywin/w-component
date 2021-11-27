import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { boxShadow, space } from 'css/base';

import Calendar from 'components/Calendar';
import Clock from 'components/Clock';
import FormGroup from 'components/Form/_FormGroup';
import { IDatePickerProps } from '.';
import Icon from 'components/Icon';
import InputStyle from 'css/elements/InputStyle';
import Month from 'components/Calendar/Month';
import Year from 'components/Calendar/Year';
import dayjs from 'dayjs';
import generatedId from 'util/generatedId';
import styled from 'styled-components';
import transition from 'css/transition';
import useHandleDisplay from 'hooks/useHandleDisplay';
import usePositionDropdown from 'hooks/usePositionDropdown';
import wdate from 'w-date';

export default function Other({
  fnChange,
  format = 'DD MMMM,YYYY',
  label,
  name,
  picker = 'date-time',
  style,
  value = '',
  isRemove = true,
  defaultValue,
  disableItem,
}: IDatePickerProps) {
  const id = generatedId('date-picker');
  const refDropdown = useRef();
  const refMenuDropdown = useRef();
  const ref = useRef<HTMLInputElement>();

  const [container, setContainer] = useState<string>('date');
  const [val, setVal] = useState<any>('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState(null);

  const widthInputDate = useMemo(
    () => ref?.current?.clientWidth,
    []
  );

  const { isDisplay, show, hide } = useHandleDisplay(refDropdown, true);
  const { handlePosition } = usePositionDropdown(refMenuDropdown, {
    add: {
      height: ref?.current?.clientHeight,
    },
  });

  // Handle show dropdown menu
  const onShow = useCallback(
    (container: string) => () => {
      handlePosition(container === 'time' ? { left: widthInputDate } : {});
      show();
      setContainer(container);
    },
    [show, handlePosition, widthInputDate]
  );

  // Change value
  const onChange = useCallback(
    (field: string) => (val: any) => {
      switch (field) {
        case 'date': {
          setDate(
            new Date(
              wdate.format(val, 'YYYY-MM-DD') + (time ? ' ' + time : '')
            ).toString()
          );

          setVal(wdate.format(val, format));
          fnChange?.(wdate.format(val, format));

          break;
        }

        case 'month': {
          setDate(
            new Date(
              wdate.format(val, 'YYYY-MM-DD') + (time ? ' ' + time : '')
            ).toString()
          );

          setVal(wdate.format(val, format));
          fnChange?.(wdate.format(val, format));

          break;
        }

        case 'year': {
          const _year = new Date(val).getFullYear();

          setVal(_year.toString());
          fnChange?.(_year.toString());
          break;
        }

        case 'date-time': {
          const min = val.getMinutes();
          const hour = val.getHours();
          // Format for time, adn format is HH:MM
          const _value = `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min
            }`
          setTime(_value);

          setVal(wdate.format(val, format));
          fnChange?.(wdate.format(val, format));
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
    fnChange && fnChange('');
    setVal(null);
    setDate(null);
    setTime('');
    hide();
  }, [fnChange, hide]);

  /**
   * Handle date when enter from keyboard
   */
  // Date
  const onBlurDate = useCallback((e) => {
    const val = e.target.value;

    if (dayjs(val, 'DD/MM/YYYY').isValid()) {
      onChange(picker)(new Date(val));
    } else {
      e.target.value = '';
    }
  }, [onChange, picker]);

  const containers = useMemo(() => new Map()
    .set(
      'date',
      <InputDateSelectorContainer show>
        <Calendar
          selected={val}
          disableItem={disableItem}
          fnSelected={onChange('date')}
        />
      </InputDateSelectorContainer>
    )
    .set(
      'time',
      <InputDateSelectorContainer show>
        <Clock
          selected={time}
          fnSelected={onChange('time')}
        />
      </InputDateSelectorContainer>
    )
    .set(
      'year',
      <InputDateSelectorContainer show>
        <Year
          selected={val}
          disableItem={disableItem}
          fnSelected={onChange('year')}
        />
      </InputDateSelectorContainer>
    )
    .set(
      'month',
      <InputDateSelectorContainer show>
        <Month
          selected={new Date(date)}
          disableItem={disableItem}
          fnSelected={onChange('month')}
        />
      </InputDateSelectorContainer>
    ), [val, disableItem, onChange, time, date]);

  // Handle value and format data
  // Set state of component with value
  useEffect(() => {
    if (!value && !defaultValue) return;
    const _val = value || defaultValue;

    if (picker === 'date-time' || picker === 'date') {
      const _date = new Date(_val);
      setDate(_date);
      setTime(wdate.format(_date, 'hh:mm'));
      setVal(wdate.format(_date, format));
    } else if (picker === 'year') {
      setVal(
        new Date(_val.toString()).getFullYear()
      );
    } else if (picker === 'month') {
      setVal(wdate.format(_val, format));
      setDate(new Date(_val));
    } else {
      setDate(new Date(_val));
    }

    return () => {
      setDate(null);
      setTime(null);
      setVal(null);
    }
  }, [value, format, picker, defaultValue]);

  // Update input control
  useEffect(() => {
    if (!ref.current) return;

    ref.current.value = val;
  }, [val]);

  return (
    <Wrap ref={refDropdown}>
      <FormGroup style={style || {}} isFocus label={label} id={id}>
        <InputSection>
          {(
            picker === 'date' ||
            picker === 'month') && (
              <input type='hidden' name={name} defaultValue={date} />
            )}
          <InputControl
            autoComplete='off'
            id={id + '-calendar'}
            name={picker !== 'month' ? name : ''}
            placeholder={format}
            onClick={onShow(picker)}
            onBlur={onBlurDate}
            ref={ref}
          />
        </InputSection>
        {isRemove && <ButtonClose onClick={onRemove} type='button'>
          <Icon small icon='i-close' />
        </ButtonClose>
        }
        <DropdownMenu ref={refMenuDropdown} show={isDisplay}>
          <InputDataSelector>{containers.get(container)}</InputDataSelector>
        </DropdownMenu>
      </FormGroup>
    </Wrap>
  );
}

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
};
const DropdownMenu = styled.div<DropdownMenuType>`
  background-color: var(--backgroundContent);
  display: none;
  padding: 15px;
  position: absolute;
  z-index: -1;

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

interface PropsInputDataSelector {
  show: boolean;
}
const InputDateSelectorContainer = styled.div<PropsInputDataSelector>`
  ${transition.popup};
  ${(props) =>
    props.show ? transition.slideUpLeft : transition.slideDownLeft};
`;

const InputSection = styled.div`
  display: flex;
`;

/**
 * @prop {string} label
 * @prop {'text' | 'number' | 'email' | 'password'} type
 */

import FormGroup, { ErrorFormGroup } from './_FormGroup';
import React, {
  ChangeEvent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { TInput } from 'components/util/type';
import WColor from 'w-color-selector';
import _t from 'components/util/helps/_t';
import generatedId from 'components/util/helps/generateKey';

/** Interface */
export interface InputProps {
  defaultValue?: string | number;
  disabled?: boolean;
  fnChange?: (val: any) => void;
  isInputTitle?: boolean;
  label?: string;
  name?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  type: TInput;
  value?: any;
}

/** Component */
export default React.memo(
  ({
    fnChange,
    isInputTitle,
    label,
    name,
    placeholder,
    style,
    type = 'text',
    value = '',
    ...props
  }: InputProps) => {
    const id = generatedId('input');
    const [error, setError] = useState<ErrorFormGroup | undefined>();
    const [color, setColor] = useState('');
    const [valState, setValState] = useState('');

    const handleInvalid = useCallback(
      (e: SyntheticEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.persist();

        setError({
          type: 'manual',
          message: e.currentTarget.required ? _t('Field is required !!') : '',
        });
      },
      []
    );

    const onChange = useCallback(
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = type === 'number' ? +e.target.value : e.target.value;
        setValState(e.target.value);
        fnChange?.(value || color);
      },
      [type, fnChange, color]
    );

    const onChangeColor = useCallback(
      (col: string) => {
        setColor(col);
        fnChange?.(col);
      },
      [fnChange]
    );

    useEffect(() => {
      value && setValState(value);
    }, [value]);

    const inputs = new Map()
      .set(
        'textarea',
        <textarea
          className='w-textarea'
          name={name}
          placeholder={placeholder}
          id={id}
          {...(fnChange && {
            value: valState,
            onChange: onChange,
          })}
          {...props}
        />
      )
      .set(
        'text',
        <input
          name={name}
          className='w-input'
          type='text'
          placeholder={placeholder}
          id={id}
          onInvalid={handleInvalid}
          {...(fnChange && {
            value: valState,
            onChange: onChange,
          })}
          {...props}
        />
      )
      .set(
        'password',
        <input
          name={name}
          className='w-input'
          type='password'
          placeholder={placeholder}
          id={id}
          onInvalid={handleInvalid}
          {...(fnChange && {
            value: valState,
            onChange: onChange,
          })}
          {...props}
        />
      )
      .set(
        'email',
        <input
          name={name}
          className='w-input'
          type='email'
          placeholder={placeholder}
          id={id}
          onInvalid={handleInvalid}
          {...(fnChange && {
            value: valState,
            onChange: onChange,
          })}
          {...props}
        />
      )
      .set(
        'number',
        <input
          name={name}
          className='w-input'
          type='number'
          placeholder={placeholder}
          id={id}
          onInvalid={handleInvalid}
          {...(fnChange && {
            value: valState,
            onChange: onChange,
          })}
          {...props}
        />
      )
      .set(
        'color',
        <div>
          <WColor
            width={20}
            height={20}
            onChange={fnChange ? onChangeColor : setColor}
            defaultValue={value || color || '#54478c'}
          />
          <input
            type='hidden'
            name={name}
            value={color || value || '#54478c'}
          />
        </div>
      );

    return (
      <FormGroup
        isInputTitle={isInputTitle}
        style={style}
        label={label}
        isFocus={value || placeholder}
        id={id}
        inline={type === 'color'}
        error={error}
      >
        {inputs.get(type)}
      </FormGroup>
    );
  }
);
import { FormContext, IForm } from "./context";
import React, {
  HTMLAttributes,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";

import { IObject } from "util/type";

/**
 * USE FORM
 */
interface IParamUseForm {
  defaultValue?: IObject;
}
export const useForm = function ({ defaultValue }: IParamUseForm = {}): IForm {
  const formRef = React.useRef<IObject>({});

  // Get values
  const getValues = useCallback(() => {
    if (!formRef.current) return;

    const value: IObject = {};
    Object.keys(formRef.current).map((key) => {
      value[key] = formRef.current[key].value;
    });

    return value;
  }, []);

  const getValue = useCallback((key: string) => {
    return formRef.current[key] ? formRef.current[key].value : undefined;
  }, []);

  const setValue = useCallback((key: string, value: any) => {
    if (!formRef.current[key]) return;

    formRef.current[key].value = value;
  }, []);

  const setValues = useCallback((data: IObject) => {
    Object.keys(data).forEach((item) => {
      if (!formRef.current[item]) formRef.current[item].value = data[item];
    });
  }, []);

  useEffect(() => {
    defaultValue && setValues(defaultValue);
  }, [defaultValue, setValues]);

  return {
    getValues,
    form: formRef,
    getValue,
    setValue,
    setValues,
  };
};

/**
 * FORM
 */
export interface IFormRefProps extends HTMLAttributes<HTMLFormElement> {
  children: JSX.Element[] | JSX.Element;
  form: React.MutableRefObject<IObject>;
  onFinish?: (data: IObject) => void;
}
export default function Form({
  children,
  form: formRef,
  onFinish,
  ...props
}: IFormRefProps) {
  const ref = useRef<IObject>({});

  // Handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit?.(e);

    const value: IObject = {};

    Object.keys(ref.current).map((key) => {
      value[key] = ref.current[key].value;
    });

    onFinish?.(value);
  };

  // Map ref to formRef
  useEffect(() => {
    if (!formRef.current) return;

    ref.current = {
      ...(formRef.current || {}),
      ...ref.current,
    };

    formRef.current = ref.current;
  }, [formRef]);

  return (
    <FormContext.Provider
      value={{
        form: ref,
      }}
    >
      <form {...props} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
}

/**
 * FORM CONTROL
 */
export interface IFormControl {
  children: React.ComponentElement<any, any>;
  name?: string;
  defaultValue?: any;
  value?: any;
  onChange?: (e: any) => void;
}

export const FormControl = ({
  children,
  name,
  defaultValue,
  value,
  onChange,
}: IFormControl) => {
  const { form: ref } = useContext(FormContext);

  // Initialize for ref
  useEffect(() => {
    if (!children.props.name && !name) return;

    const _name = children.props.name || name;

    if (ref.current[_name]) return;

    const _value = children.props.defaultValue || defaultValue;

    ref.current[_name] = {
      value: _value,
    };
  }, [children, defaultValue, name, ref]);

  // Set value for ref
  const handleChangeForm = (_name: string) => (e: any) => {
    if (!_name) return;

    if (typeof e === "object" && !Array.isArray(e)) {
      if (!Object.keys(ref.current).includes(_name)) return;

      onChange?.(e);

      ref.current[_name].value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
    } else {
      ref.current[_name].value = e;
    }
  };

  return React.cloneElement(
    children,
    !["textarea", "text", "password", "email", "number"].includes(
      children.props.type
    )
      ? {
          ...children.props,
          value:
            ref.current?.[children.props.name]?.value ||
            children.props.value ||
            children.props.defaultValue ||
            defaultValue,
          fnChange: (e: any) => {
            handleChangeForm(children.props.name || name)(e);
            children.props?.fnChange?.(e);
          },
        }
      : {
          ...children.props,
          defaultValue: children.props.defaultValue || defaultValue,
          name: children.props.name || name,
          onChange: (e: any) => {
            onChange?.(e);
            handleChangeForm(children.props.name || name)(e);
          },
          ...(onChange && value !== undefined
            ? {
                onChange: (e: any) => {
                  onChange?.(e);
                  handleChangeForm(children.props.name || name)(e);
                },
                value,
              }
            : {}),
        }
  );
};

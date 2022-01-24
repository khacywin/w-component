import React, { HTMLAttributes, useCallback, useEffect, useRef } from "react";

import { IObject } from "util/type";

/**
 * HOOK FORM
 */
export interface IForm {
  ref: React.MutableRefObject<IObject>;
  getValues?: () => IObject;
}
export interface IFormControl {
  children: React.ComponentElement<any, any>;
  name?: string;
  defaultValue?: any;
}
export interface IUserForm {
  form: IForm;
  FormControl: (props: IFormControl) => JSX.Element;
}
export function useForm(): IUserForm {
  const ref = useRef<IObject>({});

  // Handle change
  const handleChangeForm = (name?: string) => (e: any) => {
    const _name = name || e.target?.name;

    if (typeof e === "object" && !Array.isArray(e)) {
      if (!Object.keys(ref.current).includes(_name)) return;

      ref.current.onChange?.(e);

      ref.current[_name].value = e.currentTarget[_name].value;
    } else {
      ref.current[_name].value = e;
    }
  };

  const getValues = useCallback(() => {
    const value: IObject = {};
    Object.keys(ref.current).map((key) => {
      value[key] = ref.current[key].value;
    });

    return value;
  }, []);

  const FormControl = ({ children, name, defaultValue }: IFormControl) => {
    ref.current[children.props.name || name] = {
      value: children.props.defaultValue || defaultValue,
    };

    return React.cloneElement(
      children,
      !["textarea", "text", "password", "email", "number"].includes(
        children.props.type
      )
        ? {
            value:
              ref.current?.[children.props.name]?.value ||
              children.props.defaultValue ||
              defaultValue,
            fnChange: handleChangeForm(children.props.name),
          }
        : {
            defaultValue: children.props.defaultValue || defaultValue,
            name: children.props.name || name,
          }
    );
  };

  return {
    form: {
      ref,
      getValues,
    },
    FormControl,
  };
}

/**
 * COMPONENT FORM
 */
export interface IFormRefProps extends HTMLAttributes<HTMLFormElement> {
  children: JSX.Element[];
  form: IForm;
  onFinish?: (data: IObject) => void;
}
export default function Form({
  children,
  form: formRef,
  onChange,
  onFinish,
  ...props
}: IFormRefProps) {
  // Change form
  const handleChangeForm = (e: any) => {
    const _name = e.target?.name;

    if (typeof e === "object" && !Array.isArray(e)) {
      if (!Object.keys(formRef.ref.current).includes(_name)) return;

      onChange?.(e);

      formRef.ref.current[_name].value = e.currentTarget[_name].value;
    } else {
      formRef.ref.current[_name].value = e;
    }
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit?.(e);

    const value: IObject = {};

    Object.keys(formRef.ref.current).map((key) => {
      value[key] = formRef.ref.current[key].value;
    });

    onFinish?.(value);
  };

  // Constructor for form
  useEffect(() => {
    children.forEach((ele) => {
      if (!ele) return;

      formRef.ref.current[ele.props.name] = { value: ele.props.defaultValue };
    });
  }, [children, formRef]);

  return (
    <form {...props} onChange={handleChangeForm} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

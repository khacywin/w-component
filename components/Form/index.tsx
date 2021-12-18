import React, { HTMLAttributes, useCallback, useEffect, useRef } from "react";

import { IObject } from "util/type";

/**
 * HOOK FORM
 */
export interface IUserForm {
  ref: React.MutableRefObject<IObject>;
  // setValues?: (value: IObject) => void,
  // setValue?: (key: string, value: any) => void,
  getValues?: () => IObject;
}
export function useForm(): IUserForm {
  const ref = useRef<IObject>({});

  const getValues = useCallback(() => {
    const value: IObject = {};
    Object.keys(ref.current).map((key) => {
      value[key] = ref.current[key].value;
    });

    return value;
  }, []);

  return {
    ref,
    // setValues,
    // setValue,
    getValues,
  };
}

/**
 * COMPONENT FORM
 */
export interface IFormRefProps extends HTMLAttributes<HTMLFormElement> {
  children: JSX.Element[];
  form: IUserForm;
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
  const handleChangeForm = (name?: string) => (e: any) => {
    const _name = name || e.target.name;
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
    <form {...props} onChange={handleChangeForm()} onSubmit={handleSubmit}>
      {children.map((ele, idx) => {
        if (!ele) return;

        return React.cloneElement(
          ele,
          !["textarea", "text", "password", "email", "number"].includes(
            ele.props.type
          )
            ? {
                key: idx,
                value:
                  formRef.ref.current?.[ele.props.name]?.value ||
                  ele.props.defaultValue,
                fnChange: handleChangeForm(ele.props.name),
              }
            : {
                key: idx,
              }
        );
      })}
    </form>
  );
}

/**
 * COMPONENT FORM CONTROL
 */
export function FormControl() {
  return <div></div>;
}

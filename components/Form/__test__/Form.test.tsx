import "@testing-library/jest-dom";

import Form, { FormControl, useForm } from "..";
import { render, screen } from "@testing-library/react";

import Input from "../../Input";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("<Form />", () => {
  test("{ getValue } = useForm()", function () {
    const mockGetData = jest.fn((val) => val);

    // Component
    const Demo = ({ getData }: { getData: any }) => {
      const { form, getValue } = useForm();

      return (
        <div>
          <Form form={form}>
            <FormControl name="name">
              <input
                type="text"
                id="name_id"
                defaultValue="defaultValue"
                data-testid="inputName"
              />
            </FormControl>
          </Form>
          <button
            data-testid="getValue"
            type="button"
            onClick={() => {
              getData(getValue("name"));
            }}
          />
        </div>
      );
    };

    // Render
    render(<Demo getData={mockGetData} />);

    const inputEle = screen.getByTestId("inputName");
    userEvent.type(inputEle, " test_value");

    const btnGetValue = screen.getByTestId("getValue");
    userEvent.click(btnGetValue);

    expect(mockGetData).toHaveBeenCalledWith("defaultValue test_value");
  });

  test("onSubmit", () => {
    const mockSubmit = jest.fn((val) => val);

    // Component
    const Demo = ({ mockSubmit }: { mockSubmit: any }) => {
      const { form } = useForm();

      return (
        <div>
          <Form form={form} onFinish={mockSubmit}>
            <FormControl name="name">
              <input
                type="text"
                data-testid="input"
                defaultValue="defaultValue"
              />
            </FormControl>

            <button type="submit" data-testid="submit" />
          </Form>
        </div>
      );
    };

    // Render
    render(<Demo mockSubmit={mockSubmit} />);

    userEvent.type(screen.getByTestId("input"), " 123");

    userEvent.click(screen.getByTestId("submit"));

    expect(mockSubmit).toHaveBeenCalledWith({
      name: "defaultValue 123",
    });
  });

  test("Avoid Re-render", () => {
    let renderCount_1 = 0,
      renderCount_2 = 0,
      renderCount_3 = 0;

    const Comp_1 = () => {
      renderCount_1++;
      return <input data-testid="input_1" />;
    };

    const Comp_2 = () => {
      renderCount_2++;
      return <input data-testid="input_2" />;
    };

    const Comp_3 = () => {
      renderCount_3++;
      return <Input data-testid="input_3" />;
    };

    const Demo = () => {
      const { form } = useForm();
      return (
        <div>
          <Form form={form}>
            <FormControl name="123">
              <Comp_1 />
            </FormControl>

            <FormControl name="abc">
              <Comp_2 />
            </FormControl>

            <FormControl name="def">
              <Comp_3 />
            </FormControl>
          </Form>
        </div>
      );
    };

    render(<Demo />);

    userEvent.type(screen.getByTestId("input_1"), "123");
    userEvent.type(screen.getByTestId("input_2"), "123");
    userEvent.type(screen.getByTestId("input_3"), "123");

    expect(renderCount_1).toBe(1);
    expect(renderCount_2).toBe(1);
    expect(renderCount_3).toBe(1);
  });
});

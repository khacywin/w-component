import { render, screen } from "@testing-library/react";

import Input from "..";
import React from "react";

// import userEvent from "@testing-library/user-event";

describe("<Input />", () => {
  test("Check unique id", () => {
    // Component
    const Demo = () => {
      return (
        <div>
          <Input data-testid="input_1" />
          <Input data-testid="input_2" />
        </div>
      );
    };

    render(<Demo />);

    const input_1 = screen.getByTestId("input_1");
    const input_2 = screen.getByTestId("input_2");

    expect(input_1.id).not.toEqual(input_2.id);
  });
});

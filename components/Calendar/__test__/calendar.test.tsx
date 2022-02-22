import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Calendar from "..";
import React from "react";
import dayjs from "dayjs";

describe("<Calender />", () => {
  test("Select date 15", async () => {
    let date = 0;

    render(
      <Calendar
        fnSelected={(val) => {
          date = val.getDate();
        }}
      />
    );

    fireEvent.click(screen.getByText("15"));

    expect(date).toEqual(15);
  });

  test("Next month", async () => {
    render(<Calendar selected="2020/11/15" />);

    fireEvent.click(screen.getByLabelText("Next"));

    waitFor(() => {
      const ele = screen.getByText(`${dayjs(`2020/12`).format("MMMM")},2020`);

      expect(ele).toBeInTheDocument();
    });
  });

  test("Next in last year", async () => {
    render(<Calendar selected="2020/12/15" />);
    fireEvent.click(screen.getByLabelText("Next"));

    waitFor(() => {
      const ele = screen.getByText(`${dayjs(`2021/1`).format("MMMM")},2021`);

      expect(ele).toBeInTheDocument();
    });
  });
});

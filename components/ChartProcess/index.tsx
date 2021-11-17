import React from "react";

interface ChartProcessProps {
  sum: number;
  amount: number;
  title?: string;
}
export default function ({ amount, sum, title }: ChartProcessProps) {
  const percent = (amount / sum) * 100;
  return (
    <>
      <div className="w-chart-process" data-sum={sum}>
        <div
          className="w-chart-process-value"
          data-amount={amount}
          data-percent={percent + "%"}
        />
      </div>
      {title ? <div className="w-chart-process-title">{title}</div> : ""}
    </>
  );
}

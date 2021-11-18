import React from "react";
import _t from "components/util/helps/_t";

export default function NoData({ children }: { children?: any }) {
  return <div className="w-no-data">{children || _t("No data")}</div>;
}

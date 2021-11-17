import React from "react";
import _t from "components/util/helps/_t";

export interface ButtonLoadMoreProps {
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}
export default React.memo(({ onClick }: ButtonLoadMoreProps) => {
  return (
    <button className="w-button-load-more" onClick={onClick}>
      {_t("Load more ...")}
    </button>
  );
});

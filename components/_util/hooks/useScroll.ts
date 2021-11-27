import { useCallback, useState } from 'react';

interface IParams {
  data: any[];
  total: number;
  getData: (page: number) => void;
  isReserve?: boolean;
}
export default function ({
  data, total, getData, isReserve
}: IParams) {
  const [page, setPage] = useState(1);

  const _handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const { scrollHeight, clientHeight, scrollTop } = e.currentTarget;
      if (
        (isReserve ? scrollTop === 0 : scrollHeight - clientHeight - scrollTop <= 10) &&
        data.length < total
      ) {
        setTimeout(
          () => {
            getData(page + 1);
            setPage(page + 1);
          },
          100
        );
      }
    },
    [isReserve, data.length, total, getData, page]
  );

  return {
    handleScroll: _handleScroll,
    page,
  };
}
interface IParams {
    data: any[];
    total: number;
    getData: (page: number) => void;
    isReserve?: boolean;
}
export default function ({ data, total, getData, isReserve }: IParams): {
    handleScroll: (e: React.UIEvent<HTMLDivElement>) => void;
    page: number;
};
export {};

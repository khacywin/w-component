/// <reference types="react" />
interface ChartProcessProps {
    sum: number;
    amount: number;
    title?: string;
}
export default function ({ amount, sum, title }: ChartProcessProps): JSX.Element;
export {};

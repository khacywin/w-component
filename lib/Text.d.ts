/// <reference types="react" />
interface Props {
    children: string;
    fontWeight?: 'light' | 'normal' | 'semiBold' | 'bold';
    fontSize?: 'small' | 'normal' | 'big';
}
export default function (props: Props): JSX.Element;
export {};

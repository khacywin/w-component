/// <reference types="react" />
export interface TextProps {
    children: string;
    fontWeight?: 'light' | 'normal' | 'semiBold' | 'bold';
    fontSize?: 'small' | 'normal' | 'big';
}
export default function (props: TextProps): JSX.Element;

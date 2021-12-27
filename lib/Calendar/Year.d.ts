/// <reference types="react" />
export interface IYearPickerProps {
    selected?: string;
    fnSelected?: (year: string) => void;
    disableItem?: (date: any) => boolean;
}
export default function ({ selected, fnSelected, disableItem, }: IYearPickerProps): JSX.Element;

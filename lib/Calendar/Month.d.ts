/// <reference types="react" />
export interface IMonthPickerProps {
    selected?: Date;
    fnSelected?: (year: Date) => void;
    disableItem?: (date: any) => boolean;
}
export default function ({ selected, fnSelected, disableItem, }: IMonthPickerProps): JSX.Element;

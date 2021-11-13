/// <reference types="react" />
export interface MonthPickerProps {
    selected?: Date;
    fnSelected?: (year: Date) => void;
    disableItem?: (date: any) => boolean;
}
export default function ({ selected, fnSelected, disableItem, }: MonthPickerProps): JSX.Element;

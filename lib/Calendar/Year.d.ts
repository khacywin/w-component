/// <reference types="react" />
export interface YearPickerProps {
    selected?: string;
    fnSelected?: (year: string) => void;
    disableItem?: (date: any) => boolean;
}
export default function ({ selected, fnSelected, disableItem, }: YearPickerProps): JSX.Element;

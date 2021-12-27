declare type CalendarWrapProps = {
    noSelect: boolean;
};
export declare const CalendarWrap: import("styled-components").StyledComponent<"table", any, CalendarWrapProps, never>;
export declare const CalendarTop: import("styled-components").StyledComponent<"thead", any, {}, never>;
export declare const CalendarHead: import("styled-components").StyledComponent<"tr", any, {}, never>;
interface PropsCalendarDate {
    now?: boolean;
    notInMonth?: boolean;
    disable?: boolean;
}
export declare const CalendarDate: import("styled-components").StyledComponent<"td", any, PropsCalendarDate, never>;
export {};

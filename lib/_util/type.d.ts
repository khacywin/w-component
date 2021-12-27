export declare type TPosition = 'left' | 'right' | 'top' | 'bottom';
export declare type TPositionLabel = 'left' | 'right' | 'right-bottom' | 'left-bottom';
export declare type TKind = 'ADD' | 'EDIT' | 'SEE';
export declare type TModel = 'work' | 'category' | 'tag';
export declare type TKindWork = 'main' | 'archived' | 'completed';
export declare type WDate = Date | string | number;
export declare type TInput = 'text' | 'number' | 'email' | 'password' | 'textarea' | 'date' | 'checkbox' | 'date-picker' | 'color';
export declare type TField = TInput | 'checkbox' | 'date-picker' | 'select' | 'switch';
export declare type TSelectOption = {
    value?: string | number;
    label?: string;
    group?: {
        label: string;
        options: TSelectOption[];
    };
};
export declare type GTPeriod = 'all' | 'timeline' | 'category' | 'tag';
export declare type TSortKeys = 'dateEnd' | 'dateStart' | 'updatedAt' | 'dateComplete' | 'createdAt';
export interface IObject {
    [key: string]: any;
}

declare interface IObject {
  [key: string]: any
}

declare type TPosition = 'left' | 'right' | 'top' | 'bottom';
declare type TPositionLabel = 'left' | 'right' | 'right-bottom' | 'left-bottom';
declare type TKind = 'ADD' | 'EDIT' | 'SEE';
declare type TModel = 'work' | 'category' | 'tag';
declare type TKindWork = 'main' | 'archived' | 'completed';

declare type TInput =
  'text'
  | 'number'
  | 'email'
  | 'password'
  | 'textarea'
  | 'date'
  | 'checkbox' | 'date-picker'
  | 'color';

declare type TField =
  TInput
  | 'checkbox'
  | 'date-picker'
  | 'select'
  | 'switch';

declare type TSelectOption = {
  value?: string | number;
  label?: string;
  group?: {
    label: string;
    options: TSelectOption[];
  }
};

declare type GTPeriod = 'all' | 'timeline' | 'category' | 'tag';

declare type TSortKeys = 'dateEnd' | 'dateStart' | 'updatedAt' | 'dateComplete' | 'createdAt';

declare type WDate = Date | string | number;

declare module '*.jpg' {
  const value: any;
  export default value;
}
declare module "*.png" {
  const value: any;
  export default value;
}
declare module '*.svg' {
  const value: any;
  export default value;
}
declare module '*.ttf' {
  const value: any;
  export default value;
}

declare module "helps/colorSVG"
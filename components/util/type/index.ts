export interface IObject {
  [key: string]: any
}

export type TPosition = 'left' | 'right' | 'top' | 'bottom';
export type TPositionLabel = 'left' | 'right' | 'right-bottom' | 'left-bottom';
export type TKind = 'ADD' | 'EDIT' | 'SEE';
export type TModel = 'work' | 'category' | 'tag';
export type TKindWork = 'main' | 'archived' | 'completed';

export type TInput =
  'text'
  | 'number'
  | 'email'
  | 'password'
  | 'textarea'
  | 'date'
  | 'checkbox' | 'date-picker'
  | 'color';

export type TField =
  TInput
  | 'checkbox'
  | 'date-picker'
  | 'select'
  | 'switch';

export type TSelectOption = {
  value?: string | number;
  label?: string;
  group?: {
    label: string;
    options: TSelectOption[];
  }
};

export type GTPeriod = 'all' | 'timeline' | 'category' | 'tag';

export type TSortKeys = 'dateEnd' | 'dateStart' | 'updatedAt' | 'dateComplete' | 'createdAt';

export type WDate = Date | string | number;

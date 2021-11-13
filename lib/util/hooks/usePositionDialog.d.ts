import { RefObject } from 'react';
import { TPosition } from '../type';
interface IOptions {
    add?: {
        height?: number;
        width?: number;
    };
    position?: TPosition[];
}
declare function usePositionDialog<T extends HTMLElement>(ref: RefObject<T>, refParent: RefObject<any>, options?: IOptions): {
    handlePosition: () => void;
};
export default usePositionDialog;

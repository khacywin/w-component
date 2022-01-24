import { RefObject } from 'react';
import { TPosition } from 'util/type';
interface IOptions {
    add?: {
        height?: number;
        width?: number;
    };
    position?: TPosition[];
}
declare function usePositionPortal<T extends HTMLElement>(ref: RefObject<T>, refParent: RefObject<any>, options?: IOptions): {
    handlePosition: () => void;
};
export default usePositionPortal;

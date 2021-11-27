import { RefObject } from 'react';
import { TPosition } from 'util/type';
declare function usePositionDropdown<T extends HTMLBaseElement>(ref: RefObject<T>, options?: {
    add?: {
        width?: number;
        height?: number;
    };
    position?: TPosition;
}): {
    handlePosition: (add?: Partial<{
        left: number;
        right: number;
        top: number;
        bottom: number;
    }>) => void;
};
export default usePositionDropdown;

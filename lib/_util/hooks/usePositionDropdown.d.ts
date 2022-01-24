import { RefObject } from 'react';
declare function usePositionDropdown<T extends HTMLBaseElement>(ref: RefObject<T>): {
    handlePosition: (add?: Partial<{
        left: number;
        right: number;
        top: number;
        bottom: number;
    }>) => void;
};
export default usePositionDropdown;

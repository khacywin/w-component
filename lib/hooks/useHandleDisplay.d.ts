import { RefObject } from 'react';
declare function useHandleDisplay<T extends HTMLElement>(ref: RefObject<T>, clickOut?: boolean): {
    isDisplay: boolean;
    onToggleDisplay: () => void;
    show: () => void;
    hide: () => void;
};
export default useHandleDisplay;

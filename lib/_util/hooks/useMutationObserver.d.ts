/// <reference types="react" />
declare function useMutationObservable(targetEl: JSX.Element, cb: (...arg: any) => any, options?: {
    config: {
        attributes: boolean;
        childList: boolean;
        subtree: boolean;
    };
}): void;
export default useMutationObservable;

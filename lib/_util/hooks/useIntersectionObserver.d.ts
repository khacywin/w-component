declare function useMutationObservable(targetEl: Element, cb: (...arg: any) => any, options?: {
    config: {
        attributes: boolean;
        childList: boolean;
        subtree: boolean;
    };
}): void;
export default useMutationObservable;
